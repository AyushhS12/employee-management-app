import { Component, ElementRef, EventEmitter, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { departments, roles } from 'src/app/shared/models/Collections';
import Employee from 'src/app/shared/models/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  constructor(private service: EmployeeService,private dialog: MatDialog) { }

  // @ViewChild("confirmDialog") child!: ConfirmDialogComponent

  // constructor(){
  //   setTimeout(() => {
  //     // this.child.color = "red"
  //   },20)
  // }
  form!: NgForm
  departments = departments;
  roles = roles;
  emp: Employee = new Employee();

  openDialog(title: string, content?: string, remarkRequired: boolean = true) {
    return this.dialog.open(
      ConfirmDialogComponent,
      {
        data: {
          title,
          content
        }
      }
    )
  }

  handleConfirm() {
    const dialog = this.openDialog("Are you sure ?","",false)
    dialog.afterClosed().subscribe((data: boolean) => {
      if(data){
        const emp = {
          ...this.form.value,
        }
        this.form.resetForm({ "department": '', "role": '' })
      }
    })
  }

  handleSubmit(form: NgForm) {
    this.form = form
    this.handleConfirm()
  }
}
