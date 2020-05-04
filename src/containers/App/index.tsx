import { Theme } from "@material-ui/core/styles";
import * as React from "react";
import { Route, Router, Redirect } from "react-router-dom";
import { history } from "../../redux/configureStore";
import { LoginPage, UserList } from "..";
import PrivateRoute from "./PrivateRoute";

function Routes() {
	return (
		<div className="container-app">
			<Route exact={true} path="/" component={UserList} />
		</div>
	);
}

function App() {
	return (
		<Router history={history}>
			<PrivateRoute component={Routes} />
			{localStorage.getItem("isLogin") ? (
				<Redirect to="/" />
			) : (
				<Route exact={true} path="/login" component={LoginPage} />
			)}
		</Router>
	);
}

export default App;
