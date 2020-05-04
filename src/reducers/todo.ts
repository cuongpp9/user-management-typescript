import { UserAction, UserActions, User } from "../model";
import createReducer from "./createReducer";

export const userList = createReducer<User[]>([], {
	[UserActions.ADD_TODO](state: User[], action: UserAction) {
		return [...state, action.payload];
	},
	[UserActions.COMPLETE_TODO](state: User[], action: UserAction) {
		return state.map(t =>
			t.id === action.payload ? { ...t, completed: true } : t
		);
	},
	[UserActions.UNCOMPLETE_TODO](state: User[], action: UserAction) {
		return state.map(t =>
			t.id === action.payload ? { ...t, completed: false } : t
		);
	},
	[UserActions.DELETE_TODO](state: User[], action: UserAction) {
		return state.filter(t => t.id !== action.payload);
	},
	[UserActions.GET_LIST_USER_SUCCESS](state: User[], action: UserAction) {
		return action.payload;
	},
});
