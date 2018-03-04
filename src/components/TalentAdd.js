import React from "react";
import { Link } from 'react-router-dom';

export class TalentAdd extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-12">
                    <h1>Add Talent</h1>
                </div>

                <div className="col-12">
                    <div className="btn-group" role="group">
                        <Link className="btn btn-default btn-sm" to="/talent">Cancel and Return to Talent</Link>
                    </div>
                </div>

                <div className="col-12">
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Talent First Name</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" id="talent_first_name" placeholder="Enter First Name"/>
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
                                <input type="email" className="form-control" id="talent_email" placeholder="Enter Email"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Talent Password</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="password" id="talent_password" placeholder="Enter Password"/>
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

                        <button type="submit" className="btn btn-danger">Cancel</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        );
    }
}