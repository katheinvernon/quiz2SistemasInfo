import { Injectable } from '@angular/core';
import { Movie } from '../../models/movie';
import data  from '../../services/movies.json';
import { MovieDetailsComponent } from 'src/app/components/movie-details/movie-details.component';

@Injectable({
  providedIn: 'root'
})


export class MovieService {

  movies: Movie[] = data;

  constructor() { }

  

   // para retornar la data de las peliculas
   getMovies(){
    return this.movies;
  }

  getMovie(id){
    return this.movies.find (movie => movie.Id === id)
  }

  getMoviesAvailable(){
    return this.movies.filter (movie => movie.Available)
  }

  getMoviesComing(){
    return this.movies.filter (movie => movie.ComingSoon)
  }

}
