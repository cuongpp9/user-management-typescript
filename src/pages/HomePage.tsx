import { Typography, FormGroup, TextField, Grid, Button } from "@material-ui/core";
import * as React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { HomeBox } from "../components";
import { RootState } from "../reducers";


export function HomePage() {
    return (
        <div className="login-contaier">
            <FormGroup>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    className="form-container"
                >
                    <Grid item xs={3}>
                        <form className="form-login" noValidate autoComplete="off">
                            <h1>Login</h1>
                            <TextField id="full-width-text-field" label="Username" fullWidth />
                            <TextField id="standard-basic" label="password" fullWidth />
                            <Button variant="contained" className="btn-login float-right">
                                Submit
      						</Button>
                        </form>
                    </Grid>
                </Grid>
            </FormGroup>
        </div>
    );
}
