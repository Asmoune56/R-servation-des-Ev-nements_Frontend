import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoginMode = true;

  credentials = {
    username: '',
    email: '',
    phone: '',
    password: ''
  };

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.isLoginMode) {
      console.log('Logging in:', this.credentials);
    } else {
      console.log('Signing up:', this.credentials);
    }
  }
}
