import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:"<app-employee-router>",
    template: `<router-outlet></router-outlet>`,
})
export class EmployeeRouterComponent{
    constructor(private router: Router){}
}