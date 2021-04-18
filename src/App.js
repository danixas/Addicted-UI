import { React } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/dashboard";
import Auth from "./pages/dashboard/auth";
import Bets from "./pages/bets";
import Users from "./pages/users";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" component={Home}></Route>
            <Route path="/auth" component={Auth}></Route>
            <Route exact path="/bets" component={Bets}></Route>
            <Route exact path="/users" component={Users}></Route>
        </Router>
    );
};

export default App;
