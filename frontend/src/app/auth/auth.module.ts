import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AuthRouterComponent } from './auth.router.component';
import { AuthRouterModule } from './auth.router.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

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
    CoreModule,
    AuthRouterModule,
],
  exports: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthModule { }
