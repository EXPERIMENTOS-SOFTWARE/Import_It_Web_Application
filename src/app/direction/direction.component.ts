import { Component, OnInit } from '@angular/core';
import { Direction } from '../directionregister/direction';
import { DirectionregisterService } from '../directionregister/directionregister.service';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
  direction: Direction[] = []
  constructor(private directionregisterService: DirectionregisterService) { }

  ngOnInit(): void {
    this.getAlldirection();
  }
  directionImgSource: string = "https://i.imgur.com/50r8AVz.png";
  getAlldirection() {
    this.directionregisterService.getAll().subscribe((response: any) => {
      this.direction = response;
    })
  }
}
