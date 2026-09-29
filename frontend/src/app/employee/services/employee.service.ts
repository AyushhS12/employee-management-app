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
    this.token = localStorage.getItem(environment.AUTH_TOKEN)
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


  addEmployee(emp: Employee) {
    const url = environment.apiBaseUrl + "/auth/signup"
    return this.http.post(url, emp)
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
    return this.http.delete<{ success: boolean }>(url, { body: { id } })
  }

  update(emp: Employee) {
    const url = this.api + "/update"
    console.log(emp)
    return this.http.put<{ success: boolean }>(url, emp)
  }

  getPagedList(pageSize: number, pageIndex: number) {
    const url = this.api + `/paged-list?index=${pageIndex + 1}&size=${pageSize}`
    return this.http.get<{ employees: Employee[], count: number }>(url)
  }

  getProfileData(){
    const url = this.api + "/profile"
    return this.http.get(url)
  }

  
  checkValidity(){
    const url = this.api + "/validate"
    return this.http.get<{valid: boolean}>(url);
  }

  searchEmployees(query: string){
    const url = this.api + "/search/" + query
    return this.http.get<Employee[]>(url)
  }
}

