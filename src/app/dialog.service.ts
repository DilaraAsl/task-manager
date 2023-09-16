import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubmitDialogComponent } from './submit-dialog/submit-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDialog(message: string): void {
    this.dialog.open(SubmitDialogComponent, {
      width: '400px', // Set the width of the dialog as needed
      data: {message},
    });
  }
}

