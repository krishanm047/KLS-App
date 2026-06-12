import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  userId = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {

    console.log('User Id:', this.userId);
    console.log('Password:', this.password);

    // Temporary navigation
    this.router.navigate(['/home']);
  }
}