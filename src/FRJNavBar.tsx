import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import {useHistory} from "react-router-dom";

export default function FRJNavBar() {
    let history = useHistory();

    function handleClick() {
        history.push("/login");
    }

    return (
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
    );
}