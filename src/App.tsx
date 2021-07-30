import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import Root from "./Root";
import ContactUs from "./ContactUs";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import {useHistory} from 'react-router-dom';


function App() {
    let history = useHistory();

    function handleClick() {
        history.push("/login");
    }

    return (
        <div>
            <Router>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography style={{marginLeft: "auto"}} variant="h6">
                            Home
                        </Typography>
                        <Button style={{marginLeft: "auto"}} color="inherit" onClick={handleClick}>Login</Button>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/contactus">
                        <ContactUs/>
                    </Route>
                    <Route path="/">
                        <Root/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
