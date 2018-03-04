import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Header } from "../components/Header";
import { Login } from "../components/Login";
import { Home } from "../components/Home";
import { Orders } from "../components/Orders";
import { Payouts } from "../components/Payouts";
import { ReportedContent } from "../components/ReportedContent";
import { Fans } from "../components/Fans";
import { Talent } from "../components/Talent";
import { TalentAdd } from "../components/TalentAdd";
import { OneOnOne } from "../components/OneOnOne";
import { PromoCode } from "../components/PromoCode";
import { Ads } from "../components/Ads";
import { FeaturedContent } from "../components/FeaturedContent";

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

                                <Route path="/login" component={Login}/>

                                <Route path="/orders" component={Orders}/>
                                <Route path="/payouts" component={Payouts}/>
                                <Route path="/reported-content" component={ReportedContent}/>
                                <Route path="/fans" component={Fans}/>
                                <Route path="/talent" component={Talent}/>
                                <Route path="/talent-add" component={TalentAdd}/>
                                <Route path="/one-on-one" component={OneOnOne}/>
                                <Route path="/promo-code" component={PromoCode}/>
                                <Route path="/ads" component={Ads}/>
                                <Route path="/featured-content" component={FeaturedContent}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));