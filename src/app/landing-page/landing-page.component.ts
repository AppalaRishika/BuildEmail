import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService, ListofEmails } from '../email.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  userList: UsersList[] = JSON.parse(localStorage.getItem('users') || '{}');
  emailList: ListofEmails[] = [];
  searchEmail:string="";
  filterCategory: any;
  constructor(private router: Router, private emailService: EmailService) {}
  ngOnInit(): void {
    this.emailService.getEmails().subscribe(data=>{
      this.emailList=data;
      this.filterCategory=this.emailList;
    });
    
  }
  search(event:any){
    this.searchEmail = (event.target as HTMLInputElement).value;
  }
  filter(category: string) {
    this.filterCategory = this.emailList.filter((emailType: any) => {
      if (emailType.type == category || category == '') {
        return emailType;
      }
    });
  }
  viewEmailDetails(item:any){
    this.router.navigateByUrl('/details-page', { state: item });
  }
  removeEmail(checkEmail:string){  
    this.filterCategory = this.filterCategory.filter((a:any) => a.senderEmail!== checkEmail); 
  }  
}
export interface UsersList {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}
