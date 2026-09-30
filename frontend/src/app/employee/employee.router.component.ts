import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:"<app-employee-router>",
    template: `<router-outlet></router-outlet>`,
    styles: [":host { display: block; height: 100%; min-height: 0; }"],
})
export class EmployeeRouterComponent{
    constructor(private router: Router){}
}