import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
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
      if (res === null || res.insertedId == 0) {
        this.errorMessage = "An Error Occurred, please try again"
      }
      this.router.navigate(['/auth/login'], { state: { username: employee.username } })
    })
  }

  getPasswordErrors(password: NgModel): string {
    const errors = password.errors as any
    if (!errors) return '';

    const messages: string[] = [];

    if (errors.hasLowerCase === false) {
      messages.push("Password must contain a lowercase")
    }
    if (errors.hasUpperCase === false) {
      messages.push("Password must contain a uppercase")
    }
    if (errors.hasNumericValue === false) {
      messages.push("Password must contain a Numeric value")
    }
    if(password.value && password.value.length<8){
      messages.push("Password must be 8 characters long")
    }

    return messages.join(' | ')
  }
}
