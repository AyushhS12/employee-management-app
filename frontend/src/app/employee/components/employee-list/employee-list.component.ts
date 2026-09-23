import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import Employee from '../../models/Employee';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  employees!: Employee[]
  constructor(
    private service: EmployeeService,
    private snackbar: MatSnackBar
  ) {
    service.getEmployees().subscribe((data) => {
      this.employees = data.sort((a, b) => {
        return a.id < b.id ? -1 : 1
      })
    })
  }

  handleUpdate(emp: Employee) {
    this.service.update(emp).subscribe((data) => {
      if (data.success) {
        this.snackbar.open("Updated the employee", "", { duration: 2000 })
      } else {
        console.log(data)
      }
    })
  }

  handleDelete(id: number) {
    this.service.deleteById(id).subscribe((data) => {
      if (data.success) {
        this.snackbar.open("Deleted the employee with id: " + id, "", { duration: 2000 })
        this.employees = this.employees.filter(e => e.id != id)
      } else {
        console.log(data)
      }
    })
  }
}
