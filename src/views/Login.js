import React from "react";
import { LoginForm } from "../components/LoginForm";

export class Login extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-12 center-block" style={{width: 300 + "px"}}>
                    <h2>Login</h2>
                    <LoginForm />
                </div>
            </div>
        );
    }
}