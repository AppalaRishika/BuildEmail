import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  successMessage: string = '';
  userList: UsersList[] = JSON.parse(localStorage.getItem('users') || '{}');
  registeredForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registeredForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]*@gmail.com')],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onRegister() {
    const registerFormDetails = this.registeredForm.getRawValue();
    const user = this.userList.find(
      (obj) => obj.email == registerFormDetails.email
    );
    if (user) {
      this.successMessage = 'Duplicate user';
    } else {
      this.userList.push(registerFormDetails);
      this.successMessage = 'Successfully Registered...';
      localStorage.setItem('users', JSON.stringify(this.userList));
    }
  }
}
export interface UsersList {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}
