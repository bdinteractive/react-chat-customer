import React from "react";
import { Link, Redirect } from "react-router-dom";
import superagent from "superagent";

export class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            category: "021D71E9EE9E4C849111A438C1322DBD",
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
        .send({CategoryId: this.state.category})
        .end((err, res) => {
            if(res.body.Error) { 
                console.log("Error!!!", res.body.Error);
                this.setState({errorMessage: "Authentication Failed"});
                return;
            }
            this.setState({talent: res.body.Response.Talent, productTypes: res.body.Response.ProductTypes});
            // console.log(res.body.Response);
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
                        <h1>Category {this.props.location.state.categoryName}</h1>
                        <h3>Talent</h3>
                        <ul>
                            {Object.keys(this.state.talent).map(i => (
                                <li key={i}>
                                    <Link 
                                        to={{
                                            pathname: "/app/talent",
                                            state: {talentName: this.state.talent[i].TalentName}
                                        }}
                                    >
                                        {this.state.talent[i].TalentName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h3>Products</h3>
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
                        </ul>
                    </div>
                {/* )} */}
            </div>
        );
    }
}