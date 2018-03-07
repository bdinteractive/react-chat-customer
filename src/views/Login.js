import React from "react";
import { LoginForm } from "../components/LoginForm";
import { Redirect } from "react-router-dom";

export class Login extends React.Component {
    // isAuthenticated() {
    //     const token = localStorage.getItem('token');
    //     return token && token.length > 10;
    // }
    // handleSuccessfulLogin() {
    //     this.forceUpdate();
    // }
    render() {
        // const isAlreadyAuthentacated = this.isAuthenticated();
        return(
            <div className="row">
                {/* {isAlreadyAuthentacated ? <Redirect to={{pathname: '/app/dashboard'}}/> : ( */}
                    <div className="col-12 center-block" style={{width: 300 + "px"}}>
                        <h2>Login</h2>
                        <LoginForm onSuccessfulLogin={this.handleSuccessfulLogin.bind(this)} />
                    </div>
                {/* )} */}
            </div>
        );
    }
}