import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  listOfEmails = new BehaviorSubject( [
    {
      type: 'primary',
      subject: 'Invitation',
      senderEmail: 'abc@gmail.com',
      details:
        'Mistakes like spellings and grammar, incomplete information, lack of professional content, missing appropriate keywords, etc. can eventually decrease your chances of getting shortlisted.',
    },
    {
      type: 'social',
      subject: 'We wrote a poem for you,Appala',
      senderEmail: 'bde@gmail.com',
      details:
        'In this era of stiff market competition, even though we make a perfect resume for job applications, there are many mistakes that we are unaware of.Knowing the mistakes is a difficult task in comparison to resolve that.',
    },
    {
      type: 'social',
      subject: 'Full Stack Web Developer - MEAN Stack',
      senderEmail: 'sanjana@gmail.com',
      details:
        'Learn top skills such as Express.js, Angular, and Node.js (“MEAN”), plus GIT.',
    },
    {
      type: 'promotions',
      subject: 'Gayathri,s story | Know how she Cracked INR 4.5 LPA at Infosys',
      senderEmail: 'xyz@gmail.com',
      details:
        'Mistakes like spellings and grammar, incomplete information, lack of professional content, missing appropriate keywords, etc. can eventually decrease your chances of getting shortlisted.',
    },
  ]);
  constructor() {}
  getEmails() {
    return this.listOfEmails.asObservable();
  }
  setEmails(data:any){
    this.listOfEmails.next(data)
  }
}
export interface ListofEmails {
  type: string;
  subject: string;
  senderEmail: string;
  details: string;
}
