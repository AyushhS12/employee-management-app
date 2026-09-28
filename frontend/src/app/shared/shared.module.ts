import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
import { DaysPipe } from "./pipes/days.pipe";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { UsernameValidatorDirective } from "./validators/username-validator.directive";
import { PasswordValidatorDirective } from './validators/password-validator.directive';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        ConfirmDialogComponent,
        DaysPipe,
        PageNotFoundComponent,
        FooterComponent,
        HeaderComponent,
        UsernameValidatorDirective,
        PasswordValidatorDirective
    ],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        HttpClientModule,
        AngularMaterialModule
    ],
    exports: [
        CommonModule,
        ConfirmDialogComponent,
        HttpClientModule,
        DaysPipe,
        HeaderComponent,
        FooterComponent,
        UsernameValidatorDirective,
        PasswordValidatorDirective,
        AngularMaterialModule,
    ]
})
export class SharedModule { }