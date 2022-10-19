import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Urlorder } from '../urlorder/urlorder';
import { UrlorderService } from '../urlorder/urlorder.service';



@Component({
  selector: 'app-urlordermain',
  templateUrl: './urlordermain.component.html',
  styleUrls: ['./urlordermain.component.css']
})
export class UrlordermainComponent implements OnInit {

  urlorder: Urlorder[] = [];

  dataSource = new MatTableDataSource();

  constructor(private urlorderService: UrlorderService) { }

  ngOnInit(): void {
    this.getAllUrlorders();
  }

  getAllUrlorders() {
    this.urlorderService.getAll().subscribe((response: any) => {
      this.urlorder = response;
    })
  }
  /*deleteUrlorders() {
    this.urlorderService.delete(this.urlorder.id).subscribe((response: any) => {
      this.urlorder = response;
    })
  }*/

  deleteUrlorders(id: number): void {

    this.urlorderService.delete(id).subscribe(() => {

      this.dataSource.data = this.dataSource.data.filter((item: any) => item.id != id)
    });
    console.log(this.dataSource.data)

  }
}

