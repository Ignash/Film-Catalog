import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FilmListComponent } from './film-list/film-list.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { FilmItemComponent } from './film-list/film-item/film-item.component';
import { FilmByIdComponent } from './film-by-id/film-by-id.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FilmListComponent,
    SelectComponent,
    FilmItemComponent,
    FilmByIdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
