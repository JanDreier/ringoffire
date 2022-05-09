import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { EditPlayerComponent } from '../edit-player/edit-player.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, AfterViewInit {

  @Input() name;
  @Input() playerActive: boolean = false;
  @Input() image = '1.webp';

  @ViewChild(EditPlayerComponent) child;


  constructor() { }


  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

}
