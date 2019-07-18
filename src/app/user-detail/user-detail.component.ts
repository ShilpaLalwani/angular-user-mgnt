import { Component, OnInit, Input } from '@angular/core';
import {User} from '../user/user';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user : User;
  constructor() { }

  ngOnInit() {
  }

}
