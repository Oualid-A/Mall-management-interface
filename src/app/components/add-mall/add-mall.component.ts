import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-mall',
  templateUrl: './add-mall.component.html',
  styleUrls: ['./add-mall.component.css'],
})
export class AddMallComponent {
  dialogRef: MatDialogRef<AddMallComponent> = inject(MatDialogRef);

  closeDialog(): void {
    this.dialogRef.close();
  }
  addMall() {
    alert("The APIs don't exist, please try again later. ");
  }
}
