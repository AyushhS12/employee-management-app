import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { departments, roles } from 'src/app/shared/models/Collections';
import RegisterEmployee from '../../models/RegisterEmployee';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  departments = departments
  roles = roles
  errorMessage!: string
  constructor(private service: AuthService, private router: Router) { }
  handleRegistration(form: NgForm) {
    const employee = form.value as RegisterEmployee
    this.service.register(employee).subscribe((res) => {
      if(res === null || res.insertedId == 0){
        this.errorMessage = "An Error Occurred, please try again"
      }
      this.router.navigate(['/auth/login'], { state: { username: employee.username } })
    })
  }
}
