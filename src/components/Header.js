import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import Bootstrap from "bootstrap";

export class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand" href="#">Website Backend</Link>
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
                                    <li><a href="#">Reported Content</a></li>
                                    <li><a href="#">Fans (Users)</a></li>
                                    <li><a href="#">Talent</a></li>
                                    <li><a href="#">One-On-One ChatWith</a></li>
                                    <li><a href="#">Promo Code</a></li>
                                    <li><a href="#">Ads</a></li>
                                    <li><a href="#">Featured Content</a></li>
                                </ul>
                            </li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-out" aria-hidden="true"></span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}