import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './shared/component/select/select.component';
import { FilmByIdComponent } from './user/component/film-by-id/film-by-id.component'
import { FilmItemComponent } from './user/component/film-list/film-list-item/film-list-item.component';
import { FilmListComponent } from './user/component/film-list/film-list.component';
import { CreatPageComponent } from './admin/component/creat-page/creat-page.component';
import { LoginPageComponent } from './admin/component/login-page/login-page.component';
import { DashboardPageComponent } from './admin/component/dashboard-page/dashboard-page.component';
import { EditPageComponent } from './admin/component/edit-page/edit-page.component';
import { UserLoginComponent } from './user/component/user-login/user-login.component';
import { UserCreateComponent } from './user/component/user-create/user-create.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FilmListComponent,
    SelectComponent,
    FilmItemComponent,
    FilmByIdComponent,
    CreatPageComponent,
    LoginPageComponent,
    DashboardPageComponent,
    EditPageComponent,
    UserLoginComponent,
    UserCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
