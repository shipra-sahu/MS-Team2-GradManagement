
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradService {

  private baseUrl = 'http://localhost:8080/grads';

  constructor(private http: HttpClient) { }

  getGrad(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createGrad(grad: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, grad);
  }

  updateGrad(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteGrad(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getGradsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}