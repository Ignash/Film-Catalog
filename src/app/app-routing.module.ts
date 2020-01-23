import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FilmListComponent } from './film-list/film-list.component'
import { FilmByIdComponent } from './film-by-id/film-by-id.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "main" }, 
  { path: "main", component: MainComponent },
  { path: "films", component: FilmListComponent},
  { path:"films/:id", component: FilmByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
