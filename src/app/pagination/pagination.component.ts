import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from '../model/User';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})


export class PaginationComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  isSortedZipcode = false;
  isSortedName = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log('Pagination component loaded');

    this.apiService.get<User[]>('FETCH_USERS', 'https://jsonplaceholder.typicode.com/users') // ✅ Removed extra argument
      .subscribe(
        (response) => {
          console.log('API response', response);
          this.users = response; // ✅ Assign directly instead of using push
          console.log('API data map', this.users);
          // alert('Data fetched successfully');
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }

  sortTable(event: any) {
    const filterValue = event.target.value;
    this.filteredUsers = this.users.filter((user) => user.name.toLowerCase().includes(filterValue.toLowerCase()));
  }
  sortUserName() {
    if (this.isSortedName) {
      this.users.sort((a, b) => a.name[0].localeCompare(b.name[0]));
      this.isSortedName = false;
    } else {
      this.users.sort((a, b) => b.name[0].localeCompare(a.name[0]));
      this.isSortedName = true;
    }
  }
  sortZipCode() {
    if (this.isSortedZipcode) {
      this.users.sort((a, b) => b.address.zipcode.localeCompare(a.address.zipcode));
      this.isSortedZipcode = false;
    }
    else {
      this.isSortedZipcode = true;
      this.users.sort((a, b) => a.address.zipcode.localeCompare(b.address.zipcode));
    }
  }
}
