import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent {

  constructor(private service: DepartmentService, private snackbar: MatSnackBar) { }

  @Output() closeDrawer = new EventEmitter<boolean>()
  @Output() departmentAdded = new EventEmitter<{ name: string, id: number }>()
  close() {
    this.closeDrawer.emit(true)
  }

  handleSubmit(form: NgForm) {
    const name = form.value.name
    this.service.addDepartment(name).subscribe(data => {
      if (data?.insertedId) {
        this.snackbar.open("Department added successfully with id=" + data.insertedId, "", { duration: 3000 })
        this.departmentAdded.emit({ name, id: data.insertedId })
        console.log(data.insertedId)
      }
    })
  }
}
