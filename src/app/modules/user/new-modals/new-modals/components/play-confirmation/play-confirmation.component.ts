import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-play-confirmation',
  templateUrl: './play-confirmation.component.html',
  styleUrls: ['./play-confirmation.component.scss']
})
export class PlayConfirmationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PlayConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  startOver(): void {
    this.dialogRef.close('startOver');
  }

  resume(): void {
    this.dialogRef.close('resume');
  }

}
