import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	TextField,
	DialogContentText,
	DialogActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useActions } from "../redux/actions";
import * as UserActions from "../redux/actions/user";

interface Props {
	open: boolean;
	onClose: () => void;
	user: any;
	isEditUser: boolean;
}

export function UserDialog(props: Props) {
	const { open, onClose, user, isEditUser } = props;
	const [username, setUserName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const userActions = useActions(UserActions);

	const handleClose = () => {
		onClose();
		setUserName("");
		setEmail("");
	};

	const onHandleSubmit = () => {
		if (username && email) {
			if (isEditUser) {
				userActions.editUser({ id: user.id, username, email });
			} else {
				userActions.addNewUser({ username, email });
			}
		}
		onClose();
	};

	React.useEffect(() => {
		setUserName(user.username);
		setEmail(user.email);
	}, [user]);

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="form-dialog-title"
			fullWidth={true}
			maxWidth="sm"
		>
			<DialogTitle id="form-dialog-title">Add new user</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Username"
					type="text"
					fullWidth
					value={username}
					onChange={(evt) => setUserName(evt.target.value)}
				/>
				<TextField
					margin="dense"
					id="name"
					label="Email"
					type="email"
					fullWidth
					value={email}
					onChange={(evt) => setEmail(evt.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					Cancel
				</Button>
				<Button onClick={onHandleSubmit} color="primary">
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
}

const useStyles = makeStyles({
	textField: {
		width: "80%",
		margin: 20,
	},
});
