import { FancySelectComponent } from './components/fancy-select/fancy-select.component';
import { FancyListComponent } from './components/fancy-list/fancy-list.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { FancyButtonComponent } from './components/fancy-button/fancy-button.component';
import { FancyInputComponent } from './components/fancy-input/fancy-input.component';
import { FancyDrawerComponent } from './components/fancy-drawer/fancy-drawer.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FancySelectComponent,
    FancyListComponent,
    FancyButtonComponent,
    FancyInputComponent,
    EmployeeCardComponent,
    FancyDrawerComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule, // here
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  exports: [
    FancySelectComponent,
    FancyListComponent,
    FancyButtonComponent,
    FancyInputComponent,
    FancyDrawerComponent,
    EmployeeCardComponent,
    MatSnackBarModule,
    MatDialogModule, // here
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSelectModule,
    FormsModule
  ]
})
export class AngularMaterialModule { }
