import React from "react";
import superagent from "superagent";
import { Redirect } from "react-router-dom";


export class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""        }
    }
    handleUsernameChanged(event) {
        this.setState({username: event.target.value});
    }
    handlePasswordChanged(event) {
        this.setState({password: event.target.value});
    }
    submitForm(event) {
        event.preventDefault();
        superagent
        .post('http://www.api.getchatwith.com/api/AuthenticateAppAdmin')
        .send({EmailAddress: this.state.username, Password: this.state.password})
        .end((Error, Response) => {
            if(Error) { this.setState({errorMessage: "Authentication Failed"}); return; }
            localStorage.setItem('token', Response.body.Response.Token);
            this.forceUpdate();
        });
    }
    isAuthenticated() {
        const token = localStorage.getItem('token');
        return token && token.length > 10;
    }
    render() {
        const isAlreadyAuthentacated = this.isAuthenticated();
        return(
            <div>
                {isAlreadyAuthentacated ? <Redirect to={{pathname: '/app'}}/> : 
                    <div>
                        <form onSubmit={this.submitForm.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="InputEmail"
                                    placeholder="Email"
                                    value={this.state.username}
                                    onChange={this.handleUsernameChanged.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="InputPassword"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChanged.bind(this)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                }
            </div>
        );
    };
}