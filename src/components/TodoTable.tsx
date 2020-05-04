import {
	Checkbox,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../actions";
import * as UserActions from "../actions/todo";
import { User } from "../model";
import { RootState } from "../reducers";

export function TodoTable() {
	const classes = useStyles();
	const userList = useSelector((state: RootState) => state.userList);
	const userActions = useActions(UserActions);

	const onRowClick = (user: User) => {
		if (user.id) {
			userActions.uncompleteTodo(user.id);
		} else {
			userActions.completeTodo(user.id);
		}
	};

	useEffect(() => {
		userActions.getListUser("");
	},[]);

	return (
		<Paper className={classes.paper}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell padding="default">Select</TableCell>
						<TableCell padding="default">ID</TableCell>
						<TableCell padding="default">Username</TableCell>
						<TableCell padding="default">Email</TableCell>
						<TableCell padding="default">Delete</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{userList.map((user: User) => {
						return (
							<TableRow
								key={user.id.toString()}
								hover
								onClick={(event) => onRowClick(user)}
							>
								<TableCell padding="none">
									<Checkbox checked={false} />
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

const useStyles = makeStyles({
	paper: {
		width: "100%",
		minWidth: 260,
		display: "inline-block",
	},
	table: {
		width: "100%",
	},
});
