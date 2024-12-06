import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this for ngModel
import { AppComponent } from './app.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatRoomComponent, // Declare the ChatRoomComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here for ngModel functionality
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
