import {User} from "../../models/user";
import {Action, createReducer, on} from "@ngrx/store";
import * as UserActions from "./user.action";

export interface State {
  user: User;
}

export const initialState: State = {
  user: new User(),
};

const userReducer = createReducer(
  initialState,
  on(UserActions.setUser, (state, {payload}) => ({...state, user: payload}))
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
