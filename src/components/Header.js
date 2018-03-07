import React from "react";
import { Link } from 'react-router-dom';
import Bootstrap from "bootstrap";
import { Redirect } from 'react-router-dom';

export class Header extends React.Component {
    handleLogout(event) {
        event.preventDefault();
        localStorage.removeItem('token');
        this.forceUpdate();
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
                        <nav className="navbar navbar-default">
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    {/* <Link to="/" className="navbar-brand">Your Subscriptions</Link> */}
                                </div>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li><Link to="/app">Home</Link></li>
                                        <li><Link to="/">Account</Link></li>
                                        <li><Link to="/">Cart</Link></li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="#" onClick={this.handleLogout.bind(this)}><span className="glyphicon glyphicon-log-out" aria-hidden="true"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                {/* )} */}
            </div>
        );
    }
}