import { Component } from '@angular/core';

@Component({
  selector: 'app-toasts',
  standalone: false,
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  message:string="";
}
