import { Theme } from "@material-ui/core/styles";
import * as React from "react";
import { Route, Router } from "react-router-dom";
import { history } from "./configureStore";
import { HomePage, TodoPage, UserList } from "./pages";
import { withRoot } from "./withRoot";

function Routes() {
	return (
		<div className="container-app">
			<Route exact={true} path="/" component={HomePage} />
			<Route exact={true} path="/user-list" component={UserList} />
			<Route exact={true} path="/todo" component={TodoPage} />
		</div>
	);
}

function App() {
	return (
		<Router history={history}>
			<div>
				<div>
					<Routes />
				</div>
			</div>
		</Router>
	);
}

export default withRoot(App);
