import React from "react";
import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Orders } from "../components/Orders";
import { Payouts } from "../components/Payouts";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Route exact path="/" component={Home}/>
                                <Route path="/orders" component={Orders}/>
                                <Route path="/payouts" component={Payouts}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));