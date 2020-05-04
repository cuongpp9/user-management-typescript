export interface User {
  id: any;
  username: string;
  email: string;
}

export enum UserActions {
  GET_LIST_USER = "GET_LIST_USER",
  GET_LIST_USER_SUCCESS = "GET_LIST_USER_SUCCESS",
  DELETE_USER = "DELETE_USER",
}

interface UserActionType<T, P> {
  type: T;
  payload: P;
}

export type UserAction =
  | UserActionType<typeof UserActions.GET_LIST_USER, string>
  | UserActionType<typeof UserActions.GET_LIST_USER_SUCCESS, User>
  | UserActionType<typeof UserActions.DELETE_USER, string>
;
