import { React, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';

import Bets from "./pages/bets";
import Users from "./pages/users";
import Home from "./pages/home";
import Auth from "./pages/auth";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContainer from "./components/MainContainer";
const App = () => {
    const [open, isOpen] = useState(true);
    return (
        <Router>
            <Navbar />
            <Sidebar opened={open} toggleOpen={()=>isOpen(!open)} />
            <MainContainer py="3" px="4" fullWidth>
                <Route exact path="/" component={Home}></Route>
                <Route path="/auth" component={Auth}></Route>
                <Route exact path="/bets" component={Bets}></Route>
                <Route exact path="/users" component={Users}></Route>
            </MainContainer>
        </Router>
    );
};

export default App;
