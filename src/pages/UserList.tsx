import { AppBar, Toolbar, IconButton, Typography, Grid, Button } from "@material-ui/core";
import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import { TodoDialog, TodoTable } from "../components";

export function UserList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
		setOpen(false);
	};

	const handleAddTodo = () => {
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
				<Grid container className={classes.root}>
					<TodoDialog open={open} onClose={handleClose} />
					<Grid item xs={6}>
						<Typography variant="h4" gutterBottom>
							User List
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<div className={classes.buttonContainer}>
							<Button
								className={classes.button}
								variant="contained"
								color="secondary"
								onClick={handleAddTodo}
							>
								Add Todo
							</Button>
						</div>
					</Grid>
					<Grid item xs={12}>
						<TodoTable />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: 20,
		[theme.breakpoints.down("md")]: {
			paddingTop: 50,
			paddingLeft: 15,
			paddingRight: 15,
		},
	},

	buttonContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
	},

	button: {
		marginBottom: 15,
	},
}));

