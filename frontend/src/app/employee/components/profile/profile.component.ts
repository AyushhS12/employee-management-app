import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import Employee from '../../models/Employee';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  emp?: Employee
  editMode = false
  constructor(private service: EmployeeService, private router: Router) {
    service.getProfileData().subscribe(res => {
      console.log(res)
      this.emp = res.employee
    })
  }

  logout() {
    localStorage.removeItem(environment.AUTH_TOKEN)
    this.router.navigate(['/auth/login'])
  }
}
