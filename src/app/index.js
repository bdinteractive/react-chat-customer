import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from "../components/Header";
import { Login } from "../views/Login";
import { Register } from "../views/Register";
import { Account } from "../views/Account";
import { Home } from "../views/Home";
import { Category } from "../views/Category";
import { Talent } from "../views/Talent";
import { Product } from "../views/Product";
import { TermsAndConditions } from "../components/content/TermsAndConditions";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="container">
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route path="/app/" component={Header} />
                        <Route exact path="/app/" component={Home} />
                        <Route exact path="/app/account" component={Account} />
                        <Route exact path="/app/category" component={Category} />
                        <Route exact path="/app/talent" component={Talent} />
                        <Route exact path="/app/product" component={Product} />
                        <Route exact path="/app/terms-and-conditions" component={TermsAndConditions} />
                    </div>
                </div>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));