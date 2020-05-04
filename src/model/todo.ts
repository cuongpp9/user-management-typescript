export interface User {
  id: Object;
  username: string;
  email: string;
}

export enum UserActions {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  COMPLETE_TODO = "COMPLETE_TODO",
  UNCOMPLETE_TODO = "UNCOMPLETE_TODO",
  GET_LIST_USER = "GET_LIST_USER",
  GET_LIST_USER_SUCCESS = "GET_LIST_USER_SUCCESS",
}

interface UserActionType<T, P> {
  type: T;
  payload: P;
}

export type UserAction =
  | UserActionType<typeof UserActions.ADD_TODO, User>
  | UserActionType<typeof UserActions.COMPLETE_TODO, number>
  | UserActionType<typeof UserActions.UNCOMPLETE_TODO, number>
  | UserActionType<typeof UserActions.DELETE_TODO, number>
  | UserActionType<typeof UserActions.GET_LIST_USER, string>
  | UserActionType<typeof UserActions.GET_LIST_USER_SUCCESS, User>
;
