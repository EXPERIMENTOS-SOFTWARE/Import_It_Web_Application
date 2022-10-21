import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../users/model/user';
import { UsersService } from '../users/services/users.service';

@Component({
    selector: 'app-chats',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
    user$ = this.usersService.getById(this.authService.currentUserID());

    searchControl = new FormControl('');

    users$ = this.usersService.getAll();
    //users$ = combineLatest([this.usersService.getAll(), this.user$, this.searchControl.valueChanges.pipe(startWith(''))]).pipe(
    //    map(([users, user, searchString]) => users.filter((u => u.name?.toLowerCase().includes(searchString.toLowerCase()) && u.id !== user?.id));


    constructor(private router: Router, private usersService: UsersService, private authService: AuthService) {

    }
    ngOnInit(): void {
    }

    createChat(otherUser: User) {

    }
    /*
    @ViewChild('endOfChat')
    endOfChat!: ElementRef;

    user$ = this.usersService.getById(this.authService.currentUserID());
    myChats$ = this.chatsService.myChats$;

    searchControl = new FormControl('');
    messageControl = new FormControl('');
    chatListControl = new FormControl('');

    messages$: Observable<Message[]> | undefined;

  otherUsers$ = combineLatest([this.usersService.allUsers$, this.user$]).pipe(
    map(([users, user]) => users.filter((u) => u.uid !== user?.uid))
  );

  users$ = combineLatest([
    this.otherUsers$,
    this.searchControl.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([users, searchString]) => {
      return users.filter((u) =>
        u.displayName?.toLowerCase().includes(searchString.toLowerCase())
      );
    })
  );

  selectedChat$ = combineLatest([
    this.chatListControl.valueChanges,
    this.myChats$,
  ]).pipe(map(([value, chats]) => chats.find((c) => c.id === value[0])));

  constructor(
    private usersService: UsersService, private chatsService: ChatsService, private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.messages$ = this.chatListControl.valueChanges.pipe(
      map((value) => value[0]),
      switchMap((chatId) => this.chatsService.getChatMessages$(chatId)),
      tap(() => {
        this.scrollToBottom();
      })
    );
  }

  createChat(user: ProfileUser) {
    this.chatsService
      .isExistingChat(user.uid)
      .pipe(
        switchMap((chatId) => {
          if (!chatId) {
            return this.chatsService.createChat(user);
          } else {
            return of(chatId);
          }
        })
      )
      .subscribe((chatId) => {
        this.chatListControl.setValue([chatId]);
      });
  }

  sendMessage() {
    const message = this.messageControl.value;
    const selectedChatId = this.chatListControl.value[0];
    if (message && selectedChatId) {
      this.chatsService
        .addChatMessage(selectedChatId, message)
        .subscribe(() => {
          this.scrollToBottom();
        });
      this.messageControl.setValue('');
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.endOfChat) {
        this.endOfChat.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
*/

}
