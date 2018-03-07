import React from "react";
import { Link, Redirect } from "react-router-dom";
import superagent from "superagent";

export class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: {}
        }
    }
    componentDidMount() {
        this.getCategories();
    }
    getCategories() {
        superagent
        .get('http://www.api.getchatwith.com/api/GetAppTalentCategories')
        .end((err, res) => {
            if(res.body.Error) { 
                console.log("Error!!!", res.body.Error);
                this.setState({errorMessage: "Authentication Failed"});
                return;
            }
            console.log("Response!!!", res.body.Response);
            this.setState({categories: res.body.Response});
            console.log("STATE: ", this.state.categories);
            console.log("Description: ", this.state.categories[1].Description);

            Object.keys(this.state.categories).map(i => (
                console.log(this.state.categories[i].Description)
            ))
        });
    }
    // isAuthenticated() {
    //     const token = localStorage.getItem('token');
    //     return token && token.length > 10;
    // }
    render() {
        // const isAlreadyAuthentacated = this.isAuthenticated();
        // this.getCategories();
        return(
            <div className="row">
                {/* {!isAlreadyAuthentacated ? <Redirect to={{pathname: '/'}}/> : ( */}
                    <div className="col-12">
                        <h1>Your Subscriptions</h1>
                        <ul>
                            {Object.keys(this.state.categories).map(i => (
                                <li key={i}>
                                    <Link 
                                        className=""
                                        to={{
                                            pathname: "/app/category",
                                            state: {categoryName: this.state.categories[i].Description}
                                        }}
                                    >
                                        {this.state.categories[i].Description}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                {/* )} */}
            </div>
        );
    }
}