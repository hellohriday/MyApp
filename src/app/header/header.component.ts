import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title = 'MyAPP';
  isLogged:boolean = false;
  loginTitle = 'Login';
  constructor() { }
  ngOnInit() {
    console.log('Header component loaded');
  }
  login() {
    if(!this.isLogged) {
    this.isLogged = true;
    this.loginTitle='Logout';
    }
    else{
      this.isLogged = false;
      this.loginTitle='Login';  
    }
  }
}
