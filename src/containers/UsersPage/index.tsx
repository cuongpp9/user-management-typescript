import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Grid,
	Button,
} from "@material-ui/core";
import * as React from "react";
import { UserDialog, UserTable } from "../../components";

export function UserList() {
	const [open, setOpen] = React.useState(false);
	const [isEditUser, setIsEdit] = React.useState(false);
	const [user, setUserEdit] = React.useState({});
	const handleClose = () => {
		setOpen(false);
	};

	const handleAddUser = () => {
		setOpen(true);
		setIsEdit(false);
		setUserEdit({});
	};

	const onEditUser = (user: any) => {
		setUserEdit(user);
		setIsEdit(true);
		setOpen(true);
	};

	return (
		<div className="user-contaier">
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
					></IconButton>
					<Typography variant="h6" noWrap>
						User Management
					</Typography>
				</Toolbar>
			</AppBar>
			<div className="table-user">
				<Grid container>
					<UserDialog open={open} isEditUser={isEditUser} user={user} onClose={handleClose} />
					<Grid item xs={6}>
						<Typography variant="h4" gutterBottom>
							User List
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<div>
							<Button
								variant="contained"
								color="primary"
								onClick={handleAddUser}
								className="float-right"
							>
								Add User
							</Button>
						</div>
					</Grid>
					<Grid item xs={12}>
						<UserTable onEditUser={onEditUser} />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
