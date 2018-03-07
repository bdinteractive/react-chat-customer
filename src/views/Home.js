import React from "react";
import { Redirect } from "react-router-dom";
import superagent from "superagent";

export class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "FAN"
        }
    }
    // isAuthenticated() {
    //     const token = localStorage.getItem('token');
    //     return token && token.length > 10;
    // }
    render() {
        // const isAlreadyAuthentacated = this.isAuthenticated();
        return(
            <div className="row">
                {/* {!isAlreadyAuthentacated ? <Redirect to={{pathname: '/'}}/> : ( */}
                    <div className="col-12">
                        <div className="panel panel-default">
                            <div className="panel-body">Welcome {this.state.username}</div>
                        </div>
                        <h1>FAN Homepage</h1>
                    </div>
                {/* )} */}
            </div>
        );
    }
}