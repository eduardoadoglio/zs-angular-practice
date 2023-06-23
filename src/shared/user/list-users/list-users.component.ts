import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Observable} from "rxjs";
import {User} from "../../models/user";

@Component({
  selector: 'zs-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users$: Observable<User[]> = new Observable<User[]>();
  displayedColumns: string[] = ['id', 'e-mail', 'created'];
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users$ = this.userService.list();
  }

}
