import { React } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/dashboard";
import Auth from "./pages/dashboard/auth";
import Bets from "./pages/bets";

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Home}></Route>
            <Route path="/auth" component={Auth}></Route>
            <Route exact path="/bets" component={Bets}></Route>
        </Router>
    );
};

export default App;
