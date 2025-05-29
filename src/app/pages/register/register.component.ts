import { Component } from "@angular/core";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class SignUpComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('User registered:', this.user);
  }
}
