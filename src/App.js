import { React } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/dashboard";
import Auth from "./pages/dashboard/auth";

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Home}></Route>
            <Route path="/auth" component={Auth}></Route>
        </Router>
    );
};

export default App;
