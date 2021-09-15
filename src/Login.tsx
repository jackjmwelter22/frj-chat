import React from "react";
import NullProps from "./NullProps";

type LoginState={
    passwordMask:boolean,
    email:string,
    password:string,
}

export default class Login extends React.Component <NullProps,LoginState>{

    constructor(props: Readonly<NullProps> | NullProps) {
        super(props);
        this.state={
            passwordMask:true,
            email:'',
            password:''
        }
    }
    handleChangeUsername(value:string) {
        this.setState({email:value});
    }
    handleChangePassword(value:string) {
        this.setState({password:value});
    }
    handleClick() {
    }
    render() {
        return (
            <div>
                <p>
                    <input type="Text" value={this.state.email} onChange={event => this.handleChangeUsername(event.target.value)}></input>
                    <input type="Text" value={this.state.password} onChange={event => this.handleChangePassword(event.target.value)}></input>
                    <button onClick={() => this.handleClick()}> log in </button>
                </p>
            </div>);
    }
}