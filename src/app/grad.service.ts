
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradService {

  private baseUrl = 'http://localhost:8080/grads';

  constructor(private http: HttpClient) { }

  getGrad(email: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${email}`);
  }

  createGrad(grad: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, grad);
  }

  updateGrad(emailId: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${emailId}`, value);
  }

  deleteGrad(email: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${email}`, { responseType: 'text' });
  }

  getGradsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}