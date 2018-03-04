import React from "react";
import { Redirect } from "react-router-dom";

export class Home extends React.Component {
    isAuthenticated() {
        const token = localStorage.getItem('token');
        return token && token.length > 10;
    }
    render() {
        const isAlreadyAuthentacated = this.isAuthenticated();
        return(
            <div className="row">
                {!isAlreadyAuthentacated ? <Redirect to={{pathname: '/'}}/> : (
                    <div className="col-12">
                        <h5>You are Logged In</h5>
                        <h1>Dashboard</h1>
                    </div>
                )}
            </div>
        );
    }
}