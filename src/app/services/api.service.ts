import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  observableData<T>(data: T): Observable<T> {
    return of(data).pipe(delay(1000));
  }

  post<A, T>(
    title: string,
    url: string,
    data: A,
    isFullResponse?: boolean,
    headerList?: Array<{ key: string, value: string }>,
    showLoader: boolean = true
  ): Observable<T> {

    if (!url) return this.observableData<T>(null as unknown as T);

    let headersValue = new HttpHeaders();
    if (headerList) {
      headerList.forEach((x) => {
        headersValue = headersValue.append(x.key, x.value);
      });
    }

    if (showLoader) {
      headersValue = headersValue.append('showLoader', 'true');
    }

    let request;
    if (isFullResponse) {
      return this.http.post<T>(url, data, { headers: headersValue,withCredentials:true }).pipe(
        catchError((error) => {
          console.log('Error in API call', error);
          return this.handleError(error);
        })
      )
    } else {
      return this.http.post<T>(url, data, { headers: headersValue,withCredentials:true }).pipe(
        catchError((error) => {
          console.log('Error in API call', error);
          return this.handleError(error);
        })
      )
    }
  }
  
  private handleError(error: any) {
    if (error.status === 401) {
      console.error('401 Unauthorized error');
    }
    return throwError(() => error);
  }
}
