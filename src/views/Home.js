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
        .set({'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJpbmciOiJkZWZhdWx0IiwiaWF0IjoxNTIwNzc0MzYxfQ.6evsCd9mU6aLvpS3Ljf1yTRmzz4EG2y25V7EbuA0dgo'})
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
    render() {
        return(
            <div className="row">
                <div className="col-12">
                    <div className="header">
                        <h1 className="header__title">Your Subscriptions</h1>
                        <span className="header__image"></span>
                        <span className="header__image"></span>
                        <span className="header__image"></span>
                    </div>
                    <div className="header header--primary">
                        <h1 className="header__title">Categories</h1>
                    </div>
                    <ul className="category">
                        {Object.keys(this.state.categories).map(i => (
                            <li className="category__item" key={i}>
                                <Link 
                                    className="category__link"
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
        </div>
        );
    }
}