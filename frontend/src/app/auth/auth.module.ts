import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterOutlet } from '@angular/router';
import { AuthRouterComponent } from './auth.router.component';
import { FormsModule } from '@angular/forms';
import { AuthRouterModule } from './auth.router.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthRouterComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AuthRouterModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthModule { }
