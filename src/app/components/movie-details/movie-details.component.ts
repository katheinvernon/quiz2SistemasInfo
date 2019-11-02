import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie
  selectedMovie


  constructor( private route: ActivatedRoute,
    private router: Router, private movieService: MovieService) {
      
     }

  ngOnInit() {
    
    this.movie = this.route.paramMap.subscribe(e => {
      let id= this.route.snapshot.paramMap.get('id');
      this.selectedMovie = this.movieService.getMovie(id);

    })
      // switchMap((params: ParamMap) =>
      //   this.service.getHero(params.get('id')))
    
  }
  
  reservar(movie){
    const id = movie.Id;     
    this.router.navigate(["/book", movie.Id])

  }

}
