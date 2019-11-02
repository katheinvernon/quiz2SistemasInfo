import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service/client.service';
import { format } from 'util';
import { MovieService } from 'src/app/services/movie.service/movie.service';

export interface genre {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})


export class BookComponent implements OnInit {

  movie
  selectedMovie
  genres: genre[] = [
    { value: 'fem-0', viewValue: 'Femenino' },
    { value: 'masc-1', viewValue: 'Masculino' },
  ];
  public clientForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute, private clientService: ClientService,
    private movieService: MovieService) { }

  createClientForm() {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      id: ['', Validators.required],
      genre: ['', Validators.required],
      quantity: ['', Validators.required],
      adress: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  ngOnInit() {

    this.createClientForm();

    this.movie = this.route.paramMap.subscribe(e => {
      let id = this.route.snapshot.paramMap.get('id');
      this.selectedMovie = this.movieService.getMovie(id);

      console.log(this.selectedMovie);
    })

  }
  sendData() {

    let data = {
      name: this.clientForm.controls.name.value,
      lastName: this.clientForm.controls.lastName.value,
      id: this.clientForm.controls.id.value,
      genre: this.clientForm.controls.genre.value,
      quantity: this.clientForm.controls.quantity.value,
      adress: this.clientForm.controls.adress.value,
      email: this.clientForm.controls.email.value,

    }

    this.clientService.createClientOrder(data)
      .then(res => {
        this.router.navigate(["/home"])
        alert("Reserva Exitosa!")
        this.clientForm.reset();
      })
      .catch(err => {
        alert("Ha habido un error con la información introducida")
      })

  }

}
