import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import Department from 'src/app/shared/models/Department';
import Employee from 'src/app/employee/models/Employee';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private readonly api = environment.apiBaseUrl + "/department"

  get token() {
    return "Authorization: Bearer " + localStorage.getItem("auth-token")
  }

  constructor(private http: HttpClient) { }

  getEmployeesByDepartmentName(name: string) {
    const url = this.api + "/" + name
    return this.http.get<{ employees: Employee[] }>(url, {
      headers: new HttpHeaders(this.token)
    })
  }

  getDepartments() {
    const url = this.api + "/all"
    return this.http.get<Department[]>(url)
  }

  addDepartment(name: string) {
    const url = this.api + "/add"
    return this.http.post<{insertedId: number}>(url, { name }, {
      headers: new HttpHeaders(this.token)
    })
  }

  deleteDepartment(id: number) {
    const url = this.api + "/delete/" + id
    return this.http.delete<{ success: boolean, message: string }>(url, {
      headers: new HttpHeaders(this.token)
    });
  }
}
