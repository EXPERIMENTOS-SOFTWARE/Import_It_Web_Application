import { Component, OnInit } from '@angular/core';
import { Urlorder } from '../urlorder/urlorder';
import { UrlorderService } from '../urlorder/urlorder.service';
import { User } from '../users/model/user';
import { UsersService } from '../users/services/users.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  urlorder: Urlorder[] = [];
  user: User[] = [];
  dniData: string = '';

  constructor(private urlorderService: UrlorderService, private userService: UsersService) {
    this.recuperar_localstorage();
    this.getAllUrlorders();
    this.getAllUser();
    //   this.funcionSuma();
  }

  /*funcionSuma() {
    this.totalData = parseInt(this.urlorder.filter(x => x.comision)) + parseInt(this.urlorder.filter(x => x.price));
  }*/
  ngOnInit(): void {
  }


  getAllUrlorders() {
    this.urlorderService.getAll().subscribe((response: any) => {
      this.urlorder = response;
      this.urlorder = this.urlorder.filter(x => x.dni === this.dniData)
    })
  }
  getAllUser() {
    this.userService.getAll().subscribe((response: any) => {
      this.user = response;
      this.user = this.user.filter(x => x.dni === this.dniData)
    })
  }
  recuperar_localstorage() {
    this.dniData = localStorage.getItem('dni') ?? '';
    console.log(this.dniData);
  }

}
