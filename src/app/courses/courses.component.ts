import { Component, Input, input } from '@angular/core';
import { Strings } from '../enum/strings';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
    @Input() course:any;

    OnRemovebtnHandler(event:any){
      const storedData = localStorage.getItem(Strings.STORAGE_KEY);
    
      if (!storedData) {
          alert("No items found");
          return;
      }
  
      let courses: any[] = JSON.parse(storedData);
  
      // Ensure there are items to remove
      if (courses.length === 0) {
          alert("No items found");
          return;
      }
  
      // Filter out the item to remove
      const updatedCourses = courses.filter(course => course.id !== event?.id);
  
      if (updatedCourses.length === courses.length) {
          alert("Item not found");
          return;
      }
  
      // Update localStorage
      localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(updatedCourses));
  
      console.log("Item removed successfully");
    }
    OnAddbtnHandler(event: any){
      console.log('added from the card');
    }
}
