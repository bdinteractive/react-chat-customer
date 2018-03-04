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
                        <nav className="navbar navbar-default">
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <Link to="/" className="navbar-brand" href="#">ChatWith Management Console</Link>
                                </div>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><Link to="/">Dashboard</Link></li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><Link to="/orders">Orders</Link></li>
                                                <li><Link to="/payouts">Payouts</Link></li>
                                                <li><Link to="/reported-content">Reported Content</Link></li>
                                                <li><Link to="/fans">Fans (Users)</Link></li>
                                                <li><Link to="/talent">Talent</Link></li>
                                                <li><Link to="/one-on-one">One-On-One ChatWith</Link></li>
                                                <li><Link to="/promo-code">Promo Code</Link></li>
                                                <li><Link to="/ads">Ads</Link></li>
                                                <li><Link to="/featured-content">Featured Content</Link></li>
                                            </ul>
                                        </li>
                                        <li><a href="#" onClick={this.handleLogout.bind(this)}><span className="glyphicon glyphicon-log-out" aria-hidden="true"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        );
    }
}