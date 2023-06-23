import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {setUser} from "../../stores/user/user.action";
import {Store} from "@ngrx/store";
import {AppState} from "../../stores/user/user.selectors";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'zs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  login(data: FormGroup) {
    const user = new User(data.value);
    this.authService.login(user.username, user.password).subscribe((user) => {
      this.persistCurrentUser();
      this.router.navigate(['home']);
    });
  }

  // TODO: Talvez isso fique melhor no service?
  private persistCurrentUser(): void {
    this.userService.getMe().subscribe((user: User) => {
      this.store.dispatch(setUser({payload: user}));
    });
  }

}
