import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Impor RouterModule

@Component({
  selector: 'app-root',
  standalone: true, // Komponen standalone
  imports: [RouterModule], // Tambahkan RouterModule di sini
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularChatApp';
}
