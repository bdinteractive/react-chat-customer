import React from "react";
import { Route, Link } from 'react-router-dom';

export class Talent extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-12">
                    <h1>Talent</h1>
                </div>

                <div className="col-12">
                    <div className="panel panel-default">
                        <div className="panel-body text-right">
                            <div className="btn-group" role="group">
                                <Link className="btn btn-info btn-sm" to="/app/talent-add">Add Talent</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <table className="table table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Talent</th>
                                <th>Subscribers</th>
                                <th>Pending Orders</th>
                                <th>Fullfield Orders</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-light">
                            <tr>
                                <td>Jeffrey Dean Morgan</td>
                                <td>500</td>
                                <td>12</td>
                                <td>56</td>
                                <td>
                                    Edit Talent<br/>
                                    Schedule One-On-One Chat With Session<br/>
                                    View Talent Feed<br/>
                                    Delete Talent
                                </td>
                            </tr>
                            <tr>
                                <td>Norman Reedus</td>
                                <td>200</td>
                                <td>5</td>
                                <td>23</td>
                                <td>
                                    Edit Talent<br/>
                                    Schedule One-On-One Chat With Session<br/>
                                    View Talent Feed<br/>
                                    Delete Talent
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}