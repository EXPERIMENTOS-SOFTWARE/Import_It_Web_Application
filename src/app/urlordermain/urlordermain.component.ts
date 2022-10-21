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
  dniData: string = '';

  dataSource = new MatTableDataSource();

  constructor(private urlorderService: UrlorderService) {
    this.recuperar_localstorage();
    this.getAllUrlorders();
  }

  ngOnInit(): void {
  }

  getAllUrlorders() {
    this.urlorderService.getAll().subscribe((response: any) => {
      this.urlorder = response;
      this.urlorder = this.urlorder.filter(x => x.dni === this.dniData)
    })
  }
  /*deleteUrlorders() {
    this.urlorderService.delete(this.urlorder.id).subscribe((response: any) => {
      this.urlorder = response;
    })
  }*/

  recuperar_localstorage() {
    this.dniData = localStorage.getItem('dni') ?? '';
    console.log(this.dniData);
  }

  deleteUrlorders(id: number): void {

    this.urlorderService.delete(id).subscribe(() => {

      this.dataSource.data = this.dataSource.data.filter((item: any) => item.id != id)
    });
    console.log(this.dataSource.data)

  }
}

