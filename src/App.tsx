import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import Root from "./Root";
import ContactUs from "./ContactUs";

function App() {
    return (
        <Router>
            <div className="App">
                Hello World
            </div>
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
    );
}

export default App;
