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
        .post('http://www.api.getchatwith.com/api/super/GetAppTalentByCategory')
        .set({'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJpbmciOiJkZWZhdWx0IiwiaWF0IjoxNTI1MzU3NjE5fQ.JJ4X_JomgsVVzv6PPz_8DUbuBC8nXY5F5W7v5ceaFsc'})
        .send({CategoryId: this.state.category})
        .end((err, res) => {
            console.log(res);
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
                    <div className="header header--primary">
                        <h1 className="header__title">Category {this.props.location.state.categoryName}</h1>
                    </div>
                    {/* <h3>Talent</h3> */}
                    <ul className="images">
                        {Object.keys(this.state.talent).map(i => (
                            <li className="images__item" key={i}>
                                <span className="images__image"></span>
                                <Link 
                                    className="images__link"
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