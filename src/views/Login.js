import React from "react";
import { LoginForm } from "../components/LoginForm";
import { Redirect } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';

export class Login extends React.Component {
    isAuthenticated() {
        const token = localStorage.getItem('token');
        return token && token.length > 10;
    }
    handleSuccessfulLogin() {
        this.forceUpdate();
    }
    responseFacebook = (response) => {
        console.log(response);
    }
    render() {
        const isAlreadyAuthentacated = this.isAuthenticated();
        return(
            <div className="row">
                {isAlreadyAuthentacated ? <Redirect to={{pathname: '/app'}}/> : (
                    <div className="col-12 center-block" style={{width: 300 + "px"}}>
                        <h2>Login</h2>
                        <LoginForm onSuccessfulLogin={this.handleSuccessfulLogin.bind(this)} />
                        <br/><br/>
                        <FacebookLogin
                            appId="1088597931155576"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={this.responseFacebook}
                        />
                    </div>
                )}
            </div>
        );
    }
}