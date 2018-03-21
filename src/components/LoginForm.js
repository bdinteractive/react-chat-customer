import React from "react";
import superagent from "superagent";

export class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errorMessage: "",
            emailErrorMessage: "",
            passwordErrorMessage: ""
        }
    }
    handleUsernameChanged(event) {
        this.setState({username: event.target.value});
    }
    handlePasswordChanged(event) {
        this.setState({password: event.target.value});
    }
    submitForm(event) {
        console.log('Submit');
        event.preventDefault();
        superagent
        .post('http://www.api.getchatwith.com/api/AuthenticateAppUserByEmail')
        .send({EmailAddress: this.state.username, Password: this.state.password})
        .end((err, res) => {
            // console.log('err ', err);
            // console.log('res ', res);
            // console.log('res.body.Error ', res.body.Error);

            // console.log('res.body.Response.ValidAppAdmin ', res.body.Response.ValidAppAdmin);
            // console.log('res.body.Response.Authenticated ', res.body.Response.Authenticated);
            this.setState({
                errorMessage: "",
                emailErrorMessage: "",
                passwordErrorMessage: ""
            })

            if(res.body.Error) {
                // console.log('Error!!! ', res.body.Error);
                this.setState({errorMessage: res.body.Response});
                return;
            }
            
            if(!res.body.Response.ValidAppAdmin) {
                console.log('res.body.Response.ValidAppAdmin ', res.body.Response.ValidAppAdmin);
                this.setState({
                    emailErrorMessage: "Wrong Email"
                })
                // console.log('emailErrorMessage');
            }
            if(!res.body.Response.ValidAppPassword) {
                console.log('res.body.Response.ValidAppPassword ', res.body.Response.ValidAppPassword);
                this.setState({
                    passwordErrorMessage: "Wrong Password"
                })
            }
            if(res.body.Response.Token) {
                // console.log('Res', res.body.Response);
                localStorage.setItem('token', res.body.Response.Token);
                this.props.onSuccessfulLogin();
            }
        });
    }
    render() {
        return(
            <div>
                <form onSubmit={this.submitForm.bind(this)}>
                    <div className={this.state.emailErrorMessage ? 'form-group has-error' : 'form-group' }>
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="InputEmail"
                            placeholder="Email"
                            value={this.state.username}
                            onChange={this.handleUsernameChanged.bind(this)}
                        />
                        {this.state.emailErrorMessage ? <label className="control-label">{this.state.emailErrorMessage}</label> : '' }
                    </div>
                    <div className={this.state.passwordErrorMessage ? 'form-group has-error' : 'form-group' }>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="InputPassword"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handlePasswordChanged.bind(this)}
                        />
                        {this.state.passwordErrorMessage ? <label className="control-label">{this.state.passwordErrorMessage}</label> : '' }
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    };
}