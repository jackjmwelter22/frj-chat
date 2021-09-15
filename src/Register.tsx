import React from "react";
import NullProps from "./NullProps";

type RegisterState={
    passwordMask:boolean,
    email:string,
    firstName:string,
    lastName:string,
    password:string,
}

export default class Register extends React.Component <NullProps,RegisterState> {

    constructor(props: Readonly<NullProps> | NullProps) {
        super(props);
        this.state={
            passwordMask:true,
            email:'',
            firstName:'',
            lastName:'',
            password:''
        }
    }

    render() {
        return (<p>Register</p>);
    }
}