import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { BookComponent } from './components/book/book.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
 {
   path:"home",
   component: HomeComponent
 },
 {
   path:"movie/:id",
   component: MovieDetailsComponent
 },
 {
   path:"book",
   component: BookComponent
 },
 {
   path:"admin",
   component: AdminComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
