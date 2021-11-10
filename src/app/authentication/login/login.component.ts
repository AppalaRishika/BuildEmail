import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersList } from 'src/app/landing-page/landing-page.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  successMessage: string = '';
  loginForm!: FormGroup;
  userList: UsersList[] = JSON.parse(localStorage.getItem('users') || '{}');
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9]*@gmail.com')],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onLogin() {
    const loginFormDetails = this.loginForm.getRawValue();
    const user = this.userList.find(
      (obj) => obj.email == loginFormDetails.email
    );
    if (user && user.password == loginFormDetails.password) {
      this.router.navigateByUrl('/landing-page');
    } else {
      this.successMessage = 'Invalid Username | password';
    }
  }
}
