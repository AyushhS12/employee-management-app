import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './app.router.module';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './core/interceptors/auth-token.interceptor';
import { GlobalErrorHandlingInterceptor } from './core/interceptors/global-error-handling.interceptor';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRouterModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi:true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalErrorHandlingInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
  declarations: [
    HomeComponent,
    AppComponent,
    AboutComponent,
  ]
})
export class AppModule { }
