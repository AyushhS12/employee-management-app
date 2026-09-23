import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  @Output() ok = new EventEmitter<boolean>();
  @Output() close = new EventEmitter<boolean>()

  color: string | null = null;
  
  handleConfirm(ok: boolean) {
    this.ok.emit(ok)
  }

  closeModal() {
    this.close.emit(true)
  }
}
