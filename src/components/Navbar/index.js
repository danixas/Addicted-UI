import React, { useState } from 'react'
import { useHistory } from "react-router";

const Navbar = () => {
    const history = useHistory();
    const onSignInClick = () => {
        history.push("/auth/login")
    };
    const onSignUpClick = () => {
        history.push("/auth/register")
    };
    const onHomeClick = () => {
        history.push("/");
    };
    const onBetsClick = () => {
        history.push("/bets");
    };

    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul class="navbar-nav mr-auto">
                <li>
                    <a class="nav-link" href="" onClick={onHomeClick}>Home</a>
                </li>
                <li>
                    <a class="nav-link" href="" onClick={onBetsClick}>Bets</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li>
                    <a class="nav-link" href="" onClick={onSignInClick}>Sign in</a>
                </li>
                <li>
                    <a class="nav-link" href="" onClick={onSignUpClick}>Sign up</a>
                </li>
            </ul>
        </nav>

        </>
    );
}

export default Navbar;