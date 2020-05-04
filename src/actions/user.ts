import { UserAction, UserActions } from "../model";
import { getListUserFormAPI, deleteUserFromAPI } from '../api'


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

