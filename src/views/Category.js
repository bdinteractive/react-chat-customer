import React from "react";
import { Link, Redirect } from "react-router-dom";
import superagent from "superagent";

export class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            category: "6BAF3D6162EB4D2B8D9D363C04BB0539",
            talent: {},
            productTypes: {}
        }
    }
    componentDidMount() {
        this.getCategories();
    }
    getCategories() {
        superagent
        .post('http://www.api.getchatwith.com/api/GetAppTalentByCategory')
        .set({'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJpbmciOiJkZWZhdWx0IiwiaWF0IjoxNTIwNzc0MzYxfQ.6evsCd9mU6aLvpS3Ljf1yTRmzz4EG2y25V7EbuA0dgo'})
        .send({CategoryId: this.state.category})
        .end((err, res) => {
            if(res.body.Error) { 
                console.log("Error!!!", res.body.Error);
                this.setState({errorMessage: "Authentication Failed"});
                return;
            }
            this.setState({talent: res.body.Response});
            // console.log(res.body.Response);
        });
    }
    render() {
        return(
            <div className="row">
                <div className="col-12">
                    <h1>Category {this.props.location.state.categoryName}</h1>
                    <h3>Talent</h3>
                    <ul>
                        {Object.keys(this.state.talent).map(i => (
                            <li key={i}>
                                <Link 
                                    to={{
                                        pathname: "/app/talent",
                                        state: {talentName: this.state.talent[i].FirstName}
                                    }}
                                >
                                    {this.state.talent[i].FirstName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* <h3>Products</h3>
                    <ul>
                        {Object.keys(this.state.productTypes).map(i => (
                            <li key={i}>
                                <Link 
                                    to={{
                                        pathname: "/app/product",
                                        state: {productName: this.state.productTypes[i].Description}
                                    }}
                                >
                                    {this.state.productTypes[i].Description}
                                </Link>
                            </li>
                        ))}
                    </ul> */}
                </div>
            </div>
        );
    }
}