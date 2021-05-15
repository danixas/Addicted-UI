import { React, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';

import Users from "./pages/users";
import Home from "./pages/home";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContainer from "./components/MainContainer";
import Bets from "./pages/bets";
import Profile from "./pages/profile";

const Root = () => {
    const [open, isOpen] = useState(true);
    return (
        <>
            <Navbar />
            <Sidebar opened={open} toggleOpen={()=>isOpen(!open)} />
            <Switch>
                <MainContainer py="3" px="4" fullWidth>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/bets" component={Bets}></Route>
                    <Route exact path="/users" component={Users}></Route>
                    <Route exact path="/users/profile" component={Profile}></Route>
                </MainContainer>
            </Switch>
        </>
    );
};

export default Root;
