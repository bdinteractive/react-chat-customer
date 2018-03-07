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