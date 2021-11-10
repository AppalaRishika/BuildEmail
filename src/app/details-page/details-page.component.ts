import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})
export class DetailsPageComponent implements OnInit {
  constructor(private router: Router) {}
  public listofEmail!: ListofEmails;
  ngOnInit(): void {
    this.listofEmail = history.state;
  }
}
export interface ListofEmails {
  type: string;
  subject: string;
  senderEmail: string;
  details: string;
}
