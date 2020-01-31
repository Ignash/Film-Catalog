import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links: any[] = [
    { path: '/main', label: 'Главная', active: 'button-active', icon: 'home'}, 
    { path: '/films', label: 'Все фильмы', active: 'button-active', icon: 'view_module'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
