import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './app.router.module';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    EmployeeModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    HomeComponent,
    AppComponent,
    AboutComponent,
  ]
})
export class AppModule { }
