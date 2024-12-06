import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'chat', component: ChatRoomComponent },
];
