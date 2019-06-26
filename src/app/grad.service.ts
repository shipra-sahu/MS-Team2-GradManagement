
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Grad } from './gradmanagement/Grad'; 
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GradService {

  private baseUrl = 'http://localhost:8080/grads';

  constructor(private http: HttpClient) { }

  getGrad(email: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${email}`);
  }

  createGrad(grad: Grad): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, grad);
  }

  updateGrad(emailId: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${emailId}`, value);
  }

  deleteGrad(email: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${email}`, { responseType: 'text' });
  }

  getGradsList(): Observable<Grad[]> {
    return this.http.get<Grad[]>(`${this.baseUrl}`);
  }
}