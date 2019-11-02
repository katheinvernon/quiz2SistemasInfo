import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service/movie.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesAvailable = [];
  moviesComing = [];

  constructor(private movieService: MovieService, private router:Router) {

    this.moviesAvailable = movieService.getMoviesAvailable();
    this.moviesComing = movieService.getMoviesComing();
   }

  //  para acceder a una ruta desde ts se usa router 
  //(esta ruta recibe el id de la pelicula para saber de que peli tengo que mostrar la info)
  // si se quiere acceder desde html como <a [routerLink]="['/hero', hero.id]"> donde pondria un router link normal
   seleccionado(movie){
    const id = movie.Id;
    console.log(id);
    this.router.navigate(["/movie", movie.Id])

  }

  ngOnInit() {
  }

 

}
