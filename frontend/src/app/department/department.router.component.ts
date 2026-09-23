import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "<app-department-router>",
    template: `<router-outlet></router-outlet>`
})
export class DepartmentRouterComponent {

    constructor(private router: Router) { }
}