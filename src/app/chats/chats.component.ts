import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-chats',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {

    constructor(private router: Router) {

    }
    redirectToLogin() {
        this.router.navigate(['/chats']);
    }
    ngOnInit(): void {
    }
}
