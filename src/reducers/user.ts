import { UserAction, UserActions, User } from "../model";
import createReducer from "./createReducer";

export const userList = createReducer<User[]>([], {
	[UserActions.GET_LIST_USER_SUCCESS](state: User[], action: UserAction) {
		return action.payload;
	},
});
