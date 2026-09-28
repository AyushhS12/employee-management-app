import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import Employee from '../models/Employee';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly api = environment.apiBaseUrl + "/employee"
  private token: string | null
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("auth-token")
  }

  private updateEmployeeSubject$ = new BehaviorSubject<Employee | null>(null);

  updateEmployee$ = this.updateEmployeeSubject$.asObservable()

  setUpdateEmployee(emp: Employee) {
    this.updateEmployeeSubject$.next(emp)
  }

  private employeeUpdatedSubject$ = new BehaviorSubject<Employee | null>(null);

  employeeUpdated$ = this.employeeUpdatedSubject$.asObservable()

  sendEmployeeUpdate(emp: Employee) {
    this.employeeUpdatedSubject$.next(emp)
  }


  getEmployees() {
    const url = this.api + "/all";
    return this.http.get<Employee[]>(url);
  }

  getById(id: number) {
    const url = this.api + "/" + id;
    return this.http.get<Employee>(url)
  }

  deleteById(id: number) {
    const url = this.api + "/delete";
    if (this.token) {
      const headers = new HttpHeaders({ "Authorization": "Bearer " + this.token })
      return this.http.delete<{ success: boolean }>(url, { headers, body: { id } })
    } else throw new Error("Invalid token")
  }

  update(emp: Employee) {
    const url = this.api + "/update"
    if (this.token) {
      console.log(emp)
      const headers = new HttpHeaders({ "Authorization": "Bearer " + this.token })
      return this.http.put<{ success: boolean }>(url, emp, { headers })
    }
    else throw new Error("Invalid token")
  }

  getPagedList(pageSize: number, pageIndex: number) {
    const url = this.api + `/paged-list?index=${pageIndex + 1}&size=${pageSize}`
    if (this.token) {
      const headers = new HttpHeaders({ "Authorization": "Bearer " + this.token })
      return this.http.get<{ employees: Employee[], count: number }>(url, { headers })
    }
    else throw new Error("Invalid token")
  }
}
