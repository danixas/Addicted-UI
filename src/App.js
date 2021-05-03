import { React, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Root from "./Root";

const App = () => {
    return (
        <Router>
            <Route exact path="/auth/login" component={Auth} />
            <Route exact path="/auth/register" component={Auth} />
            <Route component={Root} />
        </Router>
    );
};

export default App;
