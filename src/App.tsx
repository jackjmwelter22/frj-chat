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
import FRJNavBar from "./FRJNavBar";

function App() {
    return (
        <div>
            <Router>
                <FRJNavBar></FRJNavBar>
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
