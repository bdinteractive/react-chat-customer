import React from "react";

// import TextFieldGroup from "TextFieldGroup";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { errors, identifier, password, isLoading } = this.state;
        return(
            <div className="">
                <div className="center-block" style={{width: 300 + "px"}}>
                    <h2>Login</h2>
                    <form onSubmit={this.onSubmit}>

                        <TextFieldGroup
                            field="identifier"
                            label="Username / Email"
                            value={identifier}
                            error={errors.identifier}
                            onChange={this.onChange}
                        />

                        <TextFieldGroup
                            field="password"
                            label="Password"
                            value={identifier}
                            error={errors.identifier}
                            onChange={this.onChange}
                            type="password"
                        />

                        <button className="btn btn-primary" disabled={isLoading}>Submit</button>

                        {/* <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="InputEmail" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="InputPassword" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button> */}
                    </form>
                </div>
            </div>
        );
    }
}