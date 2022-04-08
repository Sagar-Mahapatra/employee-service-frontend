import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private uri = `${environment.baseUri}`;

  constructor(private http: HttpClient) { }

  //1. save data
  createEmployee(employee: Employee): Observable<any> {
    return this.http.post(`${this.uri}` + '/auth/signup', employee, {
      responseType: 'text',
    });
  }

  //2. fetch all
  fetchAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.uri}` + '/api/v1/employee');
  }

  //3. fetch one
  fetchOneEmployee(id: number): Observable<Employee> {
    console.log('fetchOneEmployee in EmployeeService exected');
    return this.http.get<Employee>(`${this.uri}/api/v1/employee/${id}`);
  }

  //4. remove
  removeOneEmployee(id: number) {
    return this.http.delete(`${this.uri}/api/v1/employee/${id}`, {
      responseType: 'text',
    });
  }

  //5. update
  updateOneEmployee(employee: Employee) {
    return this.http.put(`${this.uri}/api/v1/employee`, employee, {
      responseType: 'text',
    });
  }
}
