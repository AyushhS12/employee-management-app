import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fancy-button',
  templateUrl: './fancy-button.component.html',
  styleUrls: ['./fancy-button.component.scss']
})
export class FancyButtonComponent {
  @Input() src!: string
  @Input() color: string = "primary"
  @Input() disabled: boolean = false

  @Output() click = new EventEmitter()

  onClick = () => this.click.emit()
}
