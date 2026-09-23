import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-drawer',
  templateUrl: './fancy-drawer.component.html',
  styleUrls: ['./fancy-drawer.component.scss']
})
export class FancyDrawerComponent {
  @Input() opened!: boolean
  @Input() position!: 'start' | 'end'
  @Input() mode!: 'over' | 'push' | 'side'
}
