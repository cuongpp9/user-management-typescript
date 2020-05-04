import {
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../redux/actions";
import * as UserActions from "../redux/actions/user";
import { User } from "../model";
import { RootState } from "../redux/reducers";

interface Props {
	onEditUser: Function;
}

export function UserTable(props: Props) {
	const { onEditUser } = props;
	const userList = useSelector((state: RootState) => state.userList);
	const userActions = useActions(UserActions);

	useEffect(() => {
		userActions.getListUser("");
	}, []);

	return (
		<Paper>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell padding="default">Edit</TableCell>
						<TableCell padding="default">ID</TableCell>
						<TableCell padding="default">Username</TableCell>
						<TableCell padding="default">Email</TableCell>
						<TableCell padding="default">Delete</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{userList.map((user: User) => {
						return (
							<TableRow key={user.id.toString()} hover>
								<TableCell padding="none">
									<IconButton
										aria-label="Delete"
										color="default"
										onClick={() => onEditUser(user)}
									>
										<EditIcon />
									</IconButton>
								</TableCell>
								<TableCell padding="none">
									{user.id.toString()}
								</TableCell>
								<TableCell padding="none">
									{user.username}
								</TableCell>
								<TableCell padding="none">
									{user.email}
								</TableCell>
								<TableCell padding="none">
									<IconButton
										aria-label="Delete"
										color="default"
										onClick={() =>
											userActions.deleteUser(user.id)
										}
									>
										<DeleteIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Paper>
	);
}
