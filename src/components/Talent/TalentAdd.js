import React from "react";
import { Link, Redirect } from 'react-router-dom';
import superagent from "superagent";

export class TalentAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            emailAddress: "",
            password: "",
            Name: "",
            categoryId: "",
            errorMessage: ""
        }
    }
    handleEmailAddressChanged(event) {
        this.setState({emailAddress: event.target.value});
    }
    handleNameChanged(event) {
        this.setState({name: event.target.value});
    }
    handlePasswordChanged(event) {
        this.setState({password: event.target.value});
    }
    submitForm(event) {
        console.log('Submit Form');
        event.preventDefault();
        superagent
        .post('http://www.api.getchatwith.com/api/CreateAppTalent')
        .send({
            EmailAddress: this.state.emailAddress,
            Password: this.state.password,
            Name: this.state.name,
            CategoryId: this.state.categoryId
        })
        .end((err, res) => {
            // console.log('err ', err);
            // console.log('res ', res);
            // console.log('res.body.Error ', res.body.Error);
            if(res.body.Error) {
                // console.log('Error!!! ', res.body.Error);
                this.setState({errorMessage: res.body.Response});
                return;
            }
            console.log('Res', res.body.Response);
            this.props.history.push('/app/talent-added');
        });
    }
    render() {
        return(
            <div className="row">
                <div className="col-12">
                    <h1>Add Talent</h1>
                </div>

                <div className="col-12">
                    <div className="panel panel-default">
                        <div className="panel-body text-right">
                            <div className="btn-group" role="group">
                                <Link className="btn btn-danger btn-sm" to="/app/talent">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.errorMessage &&
                    <div className="alert alert-danger">
                        <strong>Error:</strong> {this.state.errorMessage}
                    </div>
                }

                <div className="col-12">
                    <form onSubmit={this.submitForm.bind(this)}>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Talent First Name</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="talent_first_name"
                                    placeholder="Enter First Name"
                                    value={this.state.name}
                                    onChange={this.handleNameChanged.bind(this)}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Talent Last Name</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" id="talent_last_name" placeholder="Enter Last Name"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Talent Email Address</label>
                            <div className="col-sm-10">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="talent_email"
                                    placeholder="Enter Email"
                                    value={this.state.emailAddress}
                                    onChange={this.handleEmailAddressChanged.bind(this)}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Talent Password</label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="talent_password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChanged.bind(this)}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Talent Birthdate</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" id="talent_birthdate" placeholder="Enter Birthdate"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Talent Gender</label>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
                                    <label className="form-check-label" htmlFor="gridRadios1">&nbsp;&nbsp;Female</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                    <label className="form-check-label" htmlFor="gridRadios2">&nbsp;&nbsp;Male</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Talent Known For (Highlights 2 roles for talent)</label>
                            <div className="col-sm-10">
                            <textarea className="form-control" id="talent_highlights" rows="3"></textarea>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Manager First Name</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" id="manager_first_name" placeholder="Enter First Name"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Manager Last Name</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" id="manager_last_name" placeholder="Enter Last Name"/>
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Manager Email</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="email" id="manager_email" placeholder="Enter Email Address"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Manager Phone</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" id="manager_phone" placeholder="Enter Phone Number"/>
                            </div>
                        </div>

                        <h3>For Checks</h3>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Mailing Name</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" id="mail_name" placeholder="Enter Mailing Name"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Address Line 1</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" id="mail_address_line_1" placeholder="Enter Address"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Address Line 2</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" id="mail_address_line_2" placeholder="Enter Address"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">City</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" id="mail_city" placeholder="Enter City"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">State</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" id="mail_state" placeholder="Enter State"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Zip Code</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" id="mail_zip_code" placeholder="Enter Zip Code"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Country</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" id="mail_country" placeholder="Enter Country"/>
                            </div>
                        </div>

                        {this.state.errorMessage &&
                            <div className="alert alert-danger">
                                <strong>Error:</strong> {this.state.errorMessage}
                            </div>
                        }
                        <button type="text" className="btn btn-danger">Cancel</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        
                    </form>
                </div>

            </div>
        );
    }
}