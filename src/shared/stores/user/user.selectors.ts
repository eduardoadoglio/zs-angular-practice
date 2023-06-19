import {User} from "../../models/user";


export interface UserState {
  user: User
}

export interface AppState {
  user: UserState;
}

export const selectUser = (state: AppState) => state.user;
