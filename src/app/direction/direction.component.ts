import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  directionImgSource: string = "https://i.imgur.com/50r8AVz.png";
}
