import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent {
  messages: { sender: string; text: string }[] = [];
  newMessage: string = '';
  username: string = 'me';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ sender: this.username, text: this.newMessage });
      this.newMessage = '';
    }
  }
}
