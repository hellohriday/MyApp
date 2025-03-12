import { Component } from '@angular/core';
import { Strings } from '../enum/strings';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courses :any=[];
  constructor(){
    this.courses= JSON.parse(localStorage.getItem(Strings.STORAGE_KEY) || "[]");
    console.log('courses are-',this.courses)
  }
}
