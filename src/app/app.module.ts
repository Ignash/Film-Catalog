import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilmCatalogComponent } from './film-catalog/film-catalog.component';
import { MainComponent } from './film-catalog/main/main.component';
import { FilmListComponent } from './film-catalog/film-list/film-list.component';
import { FilmItemComponent } from './film-catalog/film-list/film-item/film-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmCatalogComponent,
    MainComponent,
    FilmListComponent,
    FilmItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
