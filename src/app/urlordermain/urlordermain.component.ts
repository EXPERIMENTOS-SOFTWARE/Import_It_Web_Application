import { Component, OnInit } from '@angular/core';
import { Urlorder } from '../urlorder/urlorder';
import { UrlorderService } from '../urlorder/urlorder.service';

@Component({
  selector: 'app-urlordermain',
  templateUrl: './urlordermain.component.html',
  styleUrls: ['./urlordermain.component.css']
})
export class UrlordermainComponent implements OnInit {

  urlorder: Urlorder[] = [];

  constructor(private urlorderService: UrlorderService) { }

  ngOnInit(): void {
    this.getAllUrlorders();
  }

  getAllUrlorders() {
    this.urlorderService.getAll().subscribe((response: any) => {
      this.urlorder = response;
    })
  }

}
