import React from "react";
import { Link, Redirect } from "react-router-dom";
import superagent from "superagent";

export class Product extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    componentDidMount() {
        // this.getProducts();
    }
    getProducts() {
        superagent
        .post('http://www.api.getchatwith.com/api/GetProductOptionByTalent')
        .set({'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJpbmciOiJkZWZhdWx0IiwiaWF0IjoxNTIwNzc0MzYxfQ.6evsCd9mU6aLvpS3Ljf1yTRmzz4EG2y25V7EbuA0dgo'})
        .send({TalentId: this.state.talentId})
        .end((err, res) => {
            if(res.body.Error) { 
                console.log("Error!!!", res.body.Error);
                this.setState({errorMessage: "Authentication Failed"});
                return;
            }
            this.setState({products: res.body.Response});
            console.log(this.state.products);
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
                        <h1>Product {this.props.location.state.productName}</h1>
                        {/* <ul>
                            {Object.keys(this.state.products).map(i => (
                                <li key={i}>
                                    <Link 
                                        to={{
                                            pathname: "/app/product"
                                        }}
                                    >
                                        {this.state.products[i].ProductDescription}
                                    </Link>
                                </li>
                            ))}
                        </ul> */}
                    </div>
                {/* )} */}
            </div>
        );
    }
}