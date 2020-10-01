import React from "react";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
}   from "react-router-dom";
import Home from "../home/Home"
import Login from "../login/Login";
import News from "../news/News";

function Layout () {
    return (
        <Router>
            <Nav>
                <NavLink to="/" exact className="nav-link">Home</NavLink>
            </Nav>
            <Nav>
                <NavLink to="/news" className="nav-link">News</NavLink>
            </Nav>
            <Nav>
                <NavLink to="/login" className="nav-link">Login</NavLink>
            </Nav>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/login" component={Login}/>
        </Switch>
    </Router>
    );
}

export default Layout;