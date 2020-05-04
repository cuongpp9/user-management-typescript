import { UserAction, UserActions, User } from "../model";
import axios from "axios";

export function addTodo(todo: User): UserAction {
	return {
		type: UserActions.ADD_TODO,
		payload: todo,
	};
}

// Async Function expample with redux-thunk
export function completeTodo(todoId: number) {
	// here you could do API eg
	return (dispatch: Function, getState: Function) => {
		dispatch({ type: UserActions.COMPLETE_TODO, payload: todoId });
	};
}

export function uncompleteTodo(todoId: number): UserAction {
	return {
		type: UserActions.UNCOMPLETE_TODO,
		payload: todoId,
	};
}

export function deleteTodo(todoId: number): UserAction {
	return {
		type: UserActions.DELETE_TODO,
		payload: todoId,
	};
}

export const getListUser = (payload: string) => (
	dispatch: any,
	getState: any
) => {
	axios
		.get("https://5eafd5000605ed0016d2ceca.mockapi.io/list-user")
		.then((res) => {
			dispatch(getListUserSuccess(res.data));
		});
};

export function getListUserSuccess(payload: User): UserAction {
	return {
		type: UserActions.GET_LIST_USER_SUCCESS,
		payload: payload,
	};
}
