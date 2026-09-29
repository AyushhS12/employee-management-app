import { booleanAttribute, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string, content?: string, remarkRequired?: boolean}) { }

  // @Output() ok = new EventEmitter<boolean>();
  // @Output() close = new EventEmitter<boolean>()

  remark!: string;
  color: string | null = null;

  // constructor(){
  //   const s = Object
  // }

  // handleConfirm(ok: boolean) {
  //   this.ok.emit(ok)
  // }

  // closeModal() {
  //   this.close.emit(true)
  // }
}
