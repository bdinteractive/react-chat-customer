import React from "react";
import { LoginForm } from "../components/LoginForm";
import { Link, Redirect } from "react-router-dom";

export class Register extends React.Component {
  isAuthenticated() {
    const token = localStorage.getItem('token');
    return token && token.length > 10;
  }
  render() {
    const isAlreadyAuthentacated = this.isAuthenticated();
    return(
      <div className="row">
        {isAlreadyAuthentacated ? <Redirect to={{pathname: '/app'}}/> : (
          <div className="col-12 center-block" style={{width: 800 + "px"}}>
            <h2>Register</h2>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input type="text" className="form-control" placeholder=""/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Last Name</label>
                <input type="text" className="form-control" placeholder=""/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" placeholder=""/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" placeholder=""/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Birthdate</label>
                <input type="text" className="form-control" placeholder="mm/dd/yyyy"/>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" value="option1"/>
                  Female
                </label>
                <br/>
                <label>
                  <input type="radio" name="optionsRadios" value="option2"/>
                  Male
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox"/> <a href="#">I agree with the terms and confitions</a>
                </label>
              </div>
              <button type="submit" className="btn btn-default">Register</button>
              &nbsp;&nbsp;
              <Link to="/"className="btn btn-default">Cancel</Link>
            </form>
          </div>
        )}
      </div>
    );
  }
}