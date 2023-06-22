import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth/auth.service";

@Component({
  selector: 'zs-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isAuthorized = false;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.isAuthorized = this.authService.isAuthorized();
  }

}
