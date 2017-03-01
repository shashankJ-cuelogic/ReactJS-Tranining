import React from "react";
import { render } from "react-dom";
import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import { Route, Router, browserHistory } from "react-router"

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <Route path={"home"} component={Home} />
                    <Route path={"about"} component={About} />
                    <Route path={"contact"} component={Contact} />
                </Route>
            </Router>
        );
    }
}

render(<App />, document.getElementById('app'));