import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule],
})
export class LoginComponent {
  username: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username) {
      console.log('Logging in as:', this.username);
      this.router.navigate(['/chat']);
    } else {
      console.log('Username is required');
    }
  }
}
