import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FilmByIdComponent } from './user/component/film-by-id/film-by-id.component';
import { FilmListComponent } from './user/component/film-list/film-list.component';
import { UserLoginComponent } from './user/component/user-login/user-login.component';
import { UserCreateComponent } from './user/component/user-create/user-create.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "main" }, 
  { path: "main", component: MainComponent },
  { path: "films", component: FilmListComponent},
  { path: "films/:id", component: FilmByIdComponent},
  { path: "user/login", component: UserLoginComponent},
  { path: "user/create", component: UserCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
