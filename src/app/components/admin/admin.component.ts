import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service/client.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  orders=[];

  constructor( private route: ActivatedRoute,
    private router: Router, private movieService: MovieService, private clientService: ClientService) { }

  ngOnInit() {
    this.getClientOrders();

  }

  
   getClientOrders(){

     this.clientService.getClientOrder().subscribe(res =>{
       (this.orders = res)
      });
   }

  getMovie(id){
    
    return this.movieService.getMovieName(id);
    
  }

}
