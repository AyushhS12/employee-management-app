import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivateFn } from '@angular/router';
import { map } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

export const formGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const dialog = inject(MatDialog)
  const ref = dialog.open(ConfirmDialogComponent, {
    data: {
      title: "Are you sure ?",
      content: "Your unsaved data will be lost"
    }
  })

  return ref.afterClosed().pipe(map((x: { action: boolean, remark?: string }) => {
    return x ? x.action ?? false: false
  }))
};
