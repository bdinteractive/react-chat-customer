import React from "react";
import { render } from "react-dom";

import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Orders } from "../components/Orders";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Home/>
                            <Orders/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));