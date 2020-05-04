import { UserAction, UserActions, User } from "../model";
import { getListUserFormAPI, deleteUserFromAPI } from '../api'

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
	getListUserFormAPI()
		.then((res) => {
			dispatch(getListUserSuccess(res.data));
		});
};

export function getListUserSuccess(payload: any): UserAction {
	return {
		type: UserActions.GET_LIST_USER_SUCCESS,
		payload: payload,
	};
}

export const deleteUser = (payload: any) => (
	dispatch: any,
	getState: any
) => {
	deleteUserFromAPI(payload)
		.then((res) => {
			dispatch(getListUser(''));
		});
};

