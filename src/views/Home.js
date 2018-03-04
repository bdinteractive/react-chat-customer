import React from "react";
import { Header } from "../components/Header";

export class Home extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-12">
                    <Header/>
                    <h5>You are Logged In</h5>
                    <h1>Dashboard</h1>
                    </div>
            </div>
        );
    }
}