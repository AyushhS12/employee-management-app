import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import LoginEmployee from '../../models/LoginEmployee';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, DoCheck, OnDestroy {
  username!: string
  error!: string
  // state: any
  constructor(private toaster: ToastrService, private router: Router, private service: AuthService, private snackBar: MatSnackBar) {
    // const current = this.router.getCurrentNavigation()
    // this.state = current?.extras.state
  }

  ngOnInit() {
    if (this.error) {
      this.snackBar.open(this.error, "Ok", { duration: 3000 })
    }
    if (history.state.username) {
      this.username = history.state.username
    }
    if (history.state.error) {
      this.error = history.state.error
    }
  }

  ngDoCheck(): void {
  }

  ngOnDestroy(): void {
    this.username = ""
  }

  handleSubmit(form: NgForm) {
    const data = form.value as LoginEmployee
    this.service.login(data).subscribe((t) => {
      localStorage.setItem("auth-token", t.token);
      this.toaster.success("Login Successful!", "Success", { timeOut: 3000 })
      this.snackBar.open("Login Successful!", "", { duration: 3000 })
      this.router.navigate(['/employee/profile'])
    });
  }
}
