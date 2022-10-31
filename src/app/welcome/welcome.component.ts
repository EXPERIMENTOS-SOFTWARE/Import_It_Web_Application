import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  isTraveler: boolean = false;
  constructor(private router: Router, private authService: AuthService) {
    this.authService._isLoggedIn$.next(false);
  }
  redirectToLoginTraveler() {
    this.router.navigate(['/login']);
    this.authService._isTraveler$.next(true);
  }
  redirectToLoginBuyer() {
    this.router.navigate(['/login']);
    this.authService._isBuyer$.next(true);
  }
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }
  welcomeImgSource: string = "https://i.imgur.com/h4SfzQU.jpg";
  welcomeImg2Source: string = "https://i.imgur.com/KOFtR8O.jpg";
}
