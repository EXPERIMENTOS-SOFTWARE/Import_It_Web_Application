import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Direction } from '../directionregister/direction';
import { DirectionregisterService } from '../directionregister/directionregister.service';

@Component({
  selector: 'app-directioninfo',
  templateUrl: './directioninfo.component.html',
  styleUrls: ['./directioninfo.component.css']
})
export class DirectioninfoComponent implements OnInit {

  directions$: Observable<Direction> | undefined;
  dataSource = new MatTableDataSource();


  constructor(private route: ActivatedRoute, private directionRegisterService: DirectionregisterService) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.directions$ = this.directionRegisterService.getById(id);
    });
  }
  deleteDirection(id: number): void {

    this.directionRegisterService.delete(id).subscribe(() => {

      this.dataSource.data = this.dataSource.data.filter((item: any) => item.id != id)
    });
    console.log(this.dataSource.data)

  }
}
