import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css'],
})
export class ComposeComponent implements OnInit {
  composeForm!: FormGroup;
  mailDetails: ListofDetails[] = JSON.parse(
    localStorage.getItem('messages') || '[]'
  );
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.composeForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9]*@gmail.com')],
      ],
      subject: [],
      details: [],
    });
  }
  storeDetails() {
    const composeDetails = this.composeForm.getRawValue();
    this.mailDetails.push(composeDetails);
    localStorage.setItem('messages', JSON.stringify(this.mailDetails));
  }
}
export interface ListofDetails {
  email: string;
  subject: string;
  details: string;
}
