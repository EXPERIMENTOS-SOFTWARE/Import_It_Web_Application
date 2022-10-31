import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, startWith } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../users/model/user';
import { UsersService } from '../users/services/users.service';
import { Chat } from './model/chat';
import { ChatsService } from './services/chats.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  user$ = this.usersService.getById(this.authService.currentUserID());
  chatData: Chat;
  searchControl = new FormControl('');
  //myChats = ChatsService.getAll();

  //users$ = this.usersService.getAll();
  //formBuilder: any;

  users$ = combineLatest([
    this.usersService.getAll(),
    this.user$,
    this.searchControl.valueChanges.pipe(startWith(''))
  ]).pipe(
    map(([users, user, searchString]) =>
      users.filter(
        (u: any) => // @ts-ignore: Object is possibly 'null'.
          u.name?.toLowerCase().includes(searchString.toLowerCase()) &&
          u.id !== user?.id
      )
    )
  );

  constructor(private usersService: UsersService, private chatsService: ChatsService, private authService: AuthService) {
    this.chatData = {
    } as Chat;

  }

  ngOnInit(): void {
  }

  createChat(otherUser: User) {
    this.chatData.userId1 = this.authService.currentUserID();
    this.chatData.userId2 = otherUser.id;
    this.chatData.userName1 = this.authService.currentUserName();
    this.chatData.userName2 = otherUser.name;
    this.chatsService.create(this.chatData).subscribe();
  }
}
