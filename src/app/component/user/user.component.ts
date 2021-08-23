import { Component, OnInit } from '@angular/core';

import{User} from '@model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: Array<User> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
