import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
import { DaysPipe } from "./pipes/days.pipe";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ConfirmDialogComponent,
        DaysPipe,
        PageNotFoundComponent,
        FooterComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        HttpClientModule,
        ReactiveFormsModule,
        AngularMaterialModule
    ],
    exports: [
        CommonModule,
        ConfirmDialogComponent,
        HttpClientModule,
        DaysPipe,
        HeaderComponent,
        FooterComponent,
        ReactiveFormsModule,
        AngularMaterialModule,
    ]
})
export class SharedModule { }