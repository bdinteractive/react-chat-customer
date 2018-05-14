import React from "react";
import { Link, Redirect } from "react-router-dom";
import superagent from "superagent";

export class Account extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount() {
  
  }
  render() {
    return(
      <div className="row">
        <div className="col-12">
          <div className="header">
            <h1 className="header__title">Your Account</h1>
        </div>
        <div className="col-12">
          <Link to="/app" className="btn btn-default">Edit Profile</Link><br/><br/>
          <Link to="/app/" className="btn btn-default">Reset Password</Link><br/><br/>
          <Link to="/app" className="btn btn-default">Order History</Link><br/><br/>
          <Link to="/app" className="btn btn-default">Payment Method</Link>
        </div>
      </div>
    </div>
    );
  }
}