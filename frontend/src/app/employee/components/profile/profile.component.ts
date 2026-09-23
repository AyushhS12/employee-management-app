import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import Employee from '../../models/Employee';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  emp!: Employee
  constructor(private service: EmployeeService, private router: Router) {
    const token = localStorage.getItem("auth-token");
    if(!token){
      router.navigate(['/auth/login'], {
        state: {
          error: "Please login again"
        }
      })
    }
  }
}
