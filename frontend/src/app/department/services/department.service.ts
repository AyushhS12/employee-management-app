import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import Department from 'src/app/shared/models/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private readonly api = environment.apiBaseUrl + "/department"

  constructor(private http: HttpClient) { }

  getDepartments() {
    const url = this.api + "/all"
    return this.http.get<Department[]>(url)
  }
}
