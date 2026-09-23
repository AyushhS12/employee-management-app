import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import RegisterEmployee from '../models/RegisterEmployee';
import { environment } from '../../environments/environment';
import LoginEmployee from '../models/LoginEmployee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly api = environment.apiBaseUrl + "/auth"

  constructor(private http: HttpClient) { }

  login(employee: LoginEmployee) {
    const url = this.api + "/login"
    return this.http.post<{ token: string }>(url, employee)
  }

  register(employee: RegisterEmployee) {
    const url = this.api + "/signup"
    console.log(employee)
    return this.http.post<{ insertedId: number }>(url, employee)
  }
}
