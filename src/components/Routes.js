import React from "react";
import { Route } from "react-router-dom"; 

import App from "../components/App";

export class Routes extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello World! Routes</h1>
                {/* <Route path="/" component={App} />
                <Route exact path="/" component={Home}/>
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
                <Login/> */}
            </div>
        );
    }
}