import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fancy-button',
  templateUrl: './fancy-button.component.html',
  styleUrls: ['./fancy-button.component.scss']
})
export class FancyButtonComponent {
  @Input() src!: string
  @Input() color: string = "primary"
  
  @Output() click = new EventEmitter()

  onClick = () => this.click.emit()
}
