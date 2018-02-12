import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "src/js/components/Home";
import Search from "src/js/components/Search";
import NoMatch from "src/js/components/NoMatch";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    );
}

export default Routes;
