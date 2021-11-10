import { Component, OnInit } from '@angular/core';
import { ListofDetails } from 'src/app/compose/compose.component';
@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css'],
})
export class DraftComponent implements OnInit {
  list: ListofDetails[] = JSON.parse(localStorage.getItem('messages') || '[]');
  constructor() {}

  ngOnInit(): void {
    console.log(this.list);
  }
}
