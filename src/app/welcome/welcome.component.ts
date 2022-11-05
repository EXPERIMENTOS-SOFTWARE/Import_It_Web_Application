import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService, private appComponent: AppComponent) {
    localStorage.clear();
    this.appComponent._isLoged$.next(false);
    this.appComponent._isTraveler$.next(false);
    this.appComponent._isBuyer$.next(false);
  }
  redirectToLoginTraveler() {
    this.router.navigate(['/login']);
    localStorage.setItem('userType', 'traveler');
    this.appComponent._isTraveler$.next(true);
  }
  redirectToLoginBuyer() {
    this.router.navigate(['/login']);
    localStorage.setItem('userType', 'buyer');
    this.appComponent._isBuyer$.next(true);
  }
  /*redirectToLogin() {
    this.router.navigate(['/login']);
  }*/
  ngOnInit(): void {
  }
  welcomeImgSource: string = "https://i.imgur.com/h4SfzQU.jpg";
  welcomeImg2Source: string = "https://i.imgur.com/KOFtR8O.jpg";
}
