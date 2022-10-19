import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../users/model/user';
import { UsersService } from '../users/services/users.service';

@Component({
    selector: 'app-chats',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {

    searchControl = new FormControl('');
    //users$ = combineLatest([this.usersService.getAll(), this.user$, this.searchControl.valueChanges.pipe(startWith(''))]);
    users$ = this.usersService.getAll();

    constructor(private router: Router, private usersService: UsersService) {

    }
    ngOnInit(): void {
    }

    createChat(otherUser: User) {

    }
}
