import { Component, OnInit } from '@angular/core';
import { Message, ChatService } from 'src/app/chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';


@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public chat: ChatService) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
      .pipe(scan((acc, val) => acc.concat(val), []));

    this.formValue = 'Привет!';
    this.sendMessage();
  }

  sendMessage(msg = null) {
    if (!this.formValue && !msg) { return false; }
    if (msg) {
        this.chat.converse(msg);
    } else {
    this.chat.converse(this.formValue);
    }
    this.formValue = '';
  }

}
