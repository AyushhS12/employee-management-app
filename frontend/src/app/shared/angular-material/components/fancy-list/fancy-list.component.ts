import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-list',
  templateUrl: './fancy-list.component.html',
  styleUrls: ['./fancy-list.component.scss']
})
export class FancyListComponent {
  @Input() items!: any[]
}
