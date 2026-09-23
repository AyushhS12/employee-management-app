import { Component, ElementRef, EventEmitter, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { departments, roles } from 'src/app/shared/models/Collections';
import Employee from 'src/app/shared/models/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  // @ViewChild("confirmDialog") child!: ConfirmDialogComponent

  // constructor(){
  //   setTimeout(() => {
  //     // this.child.color = "red"
  //   },20)
  // }
  form!: NgForm
  departments = departments;
  roles = roles;

  @Output() employeeCreated = new EventEmitter<Employee>()
  emp: Employee = new Employee();
  static index = 5;
  showConfirm = false
  confirm!: boolean;

  // constructor(){
  //   this.emp.doj = new Date()
  // }

  handleClose(close: boolean) {
    if (close)
      this.showConfirm = false
  }

  handleConfirm(event: boolean) {
    // console.log(this.child)
    // console.log(event)
    this.confirm = event
    this.showConfirm = false
    if (this.confirm) {
      const emp = {
        ...this.form.value,
        id: AddEmployeeComponent.index++
      }
      this.employeeCreated.emit(emp);
      this.form.resetForm({ "department": '' })
    }

  }

  handleSubmit(form: NgForm) {
    this.form = form
    this.showConfirm = true
  }
}
