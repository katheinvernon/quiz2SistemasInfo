import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies: Movie[], searchName: string ): Movie[] {

    if (!movies || !searchName){
      return movies;
    }

    return movies.filter(movie => movie.Title.toLowerCase().includes(searchName.toLowerCase()) )
  }


}
