import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

  allProfilePictures= ['1.webp', '2.png', 'monkey.png', 'serious-woman.svg', 'winkboy.svg', 'pinguin.svg'];




  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
  }

}
