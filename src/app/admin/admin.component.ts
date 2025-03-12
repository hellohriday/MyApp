import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Strings } from '../enum/strings';

// Declare Bootstrap for toast
declare var bootstrap: any;

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit {
  @ViewChild('liveToast', { static: false }) toastElement!: ElementRef;
  model: any = {};
  cover!: string;
  showError: boolean = false;
  message: string = ''; // Toast message
  private toastInstance: any;

  ngAfterViewInit() {
    if (this.toastElement) {
      this.toastInstance = new bootstrap.Toast(this.toastElement.nativeElement);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.cover = URL.createObjectURL(file);
      this.showError = false;
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('Form is invalid.');
      form.control.markAllAsTouched();
      this.showError = true;
      return;
    }

    const data = {
      CourseName: form.value.title,
      Description: form.value.description,
      Image: this.cover || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar_ouGael5ODlrC1kbFbKLpEPSJtTQqdaIg&s",
      Cost: form.value.Cost
    };

    console.log(data);

    const courseList: any[] = JSON.parse(localStorage.getItem(Strings.STORAGE_KEY) || "[]");
    courseList.push(data);
    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(courseList));

    // ✅ Show success message in toast
    this.message = "Course added successfully!";
    if (this.toastInstance) {
      this.toastInstance.show();
    }

    // ✅ Reset the form after submission
    form.resetForm();
    this.cover = ''; // Reset image preview
  }
}
