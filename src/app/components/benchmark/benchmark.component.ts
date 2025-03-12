import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-benchmark',
  standalone: false,
  templateUrl: './benchmark.component.html',
  styleUrl: './benchmark.component.css'
})
export class BenchmarkComponent {
    isLoading=false;
    responseMessage='';
    constructor(private apiService: ApiService) { }
    
    fetchBenchmarkingProducts() {
        this.isLoading=true;
        this.responseMessage='';
        const audienceId = '123';
        const apiUrl = `https://jsonplaceholder.typicode.com/posts`;

        const responseBody = {audienceId: audienceId};
        this.apiService.post<any, any>('FETCH_BENCHMARK_PRODUCTS', apiUrl,responseBody).subscribe(
            (response) => {
                this.isLoading=false;
                this.responseMessage='Data fetched successfully';
                console.log('API response',response);
                alert('Data fetched successfully');
            },
            (error) => {
                this.isLoading=false;
                this.responseMessage='Error in fetching data';
                console.log('API error',error);
            }
        );
    }
}
