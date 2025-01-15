import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/auth/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    
  }

  onLogin() {
    console.log(this.username, this.password);
    this.loginService.authenticate(this.username, this.password)
    .subscribe({
      next: (response)=>{
        console.log('logged in succesfully')
        console.log(response.token)
        localStorage.setItem("token", response.token)
      },
      error: (error)=>{
        console.error('error in login')
        console.log(error)
      }
    })
  }
}
