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

    const onLinkClick = (addedPath) => {
        history.push(addedPath);
    };

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li>
                    <a className="nav-link" href="" onClick={onHomeClick}>Home</a>
                </li>
                <li>
                    <a className="nav-link" href="" onClick={() => onLinkClick("/users")}>Users</a>
                </li>
                <li>
                    <a className="nav-link" href="" onClick={onBetsClick}>Bets</a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li>
                    <a className="nav-link" href="" onClick={onSignInClick}>Sign in</a>
                </li>
                <li>
                    <a className="nav-link" href="" onClick={onSignUpClick}>Sign up</a>
                </li>
            </ul>
        </nav>

        </>
    );
}

export default Navbar;