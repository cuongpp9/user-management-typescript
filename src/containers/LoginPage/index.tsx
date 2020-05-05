import { FormGroup, TextField, Grid, Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import * as React from "react";

export function LoginPage() {
    const history = useHistory();
	const [username, setUserName] = React.useState<string>("");
	const [password, setPassword] = React.useState<string>("");
	const onHandleSubmit = () => {
		if (username === "admin" && password === "admin") {
            localStorage.setItem('isLogin', 'true');
            history.push('/')
		}
	};
	return (
		<div className="login-contaier">
			<FormGroup onSubmit={onHandleSubmit}>
				<Grid
					container
					// spacing={0}
					direction="column"
					alignItems="center"
					className="form-container"
				>
					<Grid item xs={3}>
						<form
							className="form-login"
							noValidate
							autoComplete="off"
							onSubmit={(evt) => {
								evt.preventDefault();
							}}
						>
							<h1>Login</h1>
							<TextField
								id="full-width-text-field"
								label="Username"
								fullWidth
								value={username || ""}
								onChange={(evt) =>
									setUserName(evt.target.value)
								}
							/>
							<TextField
								id="standard-basic"
								label="password"
								type="password"
								fullWidth
								value={password || ""}
								onChange={(evt) =>
									setPassword(evt.target.value)
								}
							/>
							<Button
								variant="contained"
								className="btn-login float-right"
								type="submit"
							>
								Submit
							</Button>
						</form>
					</Grid>
				</Grid>
			</FormGroup>
		</div>
	);
}
