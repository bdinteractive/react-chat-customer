import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Header } from "../components/Header";
import { Login } from "../views/Login";
import { Home } from "../views/Home";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="container">
                        {/* <Route path="/" component={Header} /> */}
                        <Route exact path="/" component={Login} />
                        <Route exact path="/app" component={Home} />
                    </div>
                </div>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));