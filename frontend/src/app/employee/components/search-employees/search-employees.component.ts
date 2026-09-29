import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import Employee from '../../models/Employee';

@Component({
  selector: 'app-search-employees',
  templateUrl: './search-employees.component.html',
  styleUrls: ['./search-employees.component.scss']
})
export class SearchEmployeesComponent {


  value!: number
  timer!: number
  mode: "determinate" | "indeterminate" = "indeterminate"
  displaySpinner = false

  searchResults: Employee[] = []

  searchControl = new FormControl('')

  constructor(private service: EmployeeService) {
    const query = this.searchControl.valueChanges.pipe(
      tap(() => {
        // this.value = 0
        // this.timer = setInterval(() => {
        //   if (this.value == 100) {
        //     clearInterval(this.timer)
        //   }
        //   this.value++
        // }, 20)
        this.displaySpinner = true
      }),
      debounceTime(400),
      distinctUntilChanged()
    )

    query.subscribe((query) => {
      if (!query) {
        this.displaySpinner = false
        this.searchResults = []
        return
      }
      this.service.searchEmployees(query).subscribe(results => {
        this.displaySpinner = false
        this.searchResults = results
      })
    })
  }
}
