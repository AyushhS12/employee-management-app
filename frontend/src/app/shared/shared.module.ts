import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
import { DaysPipe } from "./pipes/days.pipe";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { FormsModule } from "@angular/forms";

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
        AngularMaterialModule
    ],
    exports: [
        CommonModule,
        ConfirmDialogComponent,
        DaysPipe,
        HeaderComponent,
        FooterComponent,
        AngularMaterialModule,
    ]
})
export class SharedModule { }