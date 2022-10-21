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
  dniData: string = '';
  constructor(private directionregisterService: DirectionregisterService) {
    this.recuperar_localstorage();
    this.getAlldirection();
  }

  ngOnInit(): void {
  }
  recuperar_localstorage() {
    this.dniData = localStorage.getItem('dni') ?? '';
    console.log(this.dniData);
  }

  directionImgSource: string = "https://i.imgur.com/50r8AVz.png";
  getAlldirection() {
    this.directionregisterService.getAll().subscribe((response: any) => {
      this.direction = response;
      this.direction = this.direction.filter(x => x.dni === this.dniData)

    })
  }
}
