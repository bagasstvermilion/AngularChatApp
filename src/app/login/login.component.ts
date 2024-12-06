import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Impor Router untuk navigasi
import { FormsModule } from '@angular/forms'; // Impor FormsModule untuk ngModel

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule], // Mengimpor FormsModule untuk ngModel
})
export class LoginComponent {
  username: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username) {
      console.log('Logging in as:', this.username);
      this.router.navigate(['/chat']); // Arahkan ke halaman chat setelah login
    } else {
      console.log('Username is required');
    }
  }
}
