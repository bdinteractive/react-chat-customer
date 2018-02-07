import React from "react";
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
                        <a className="navbar-brand" href="#">Website Backend</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Dashboard</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Orders</a></li>
                                    <li><a href="#">Payouts</a></li>
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