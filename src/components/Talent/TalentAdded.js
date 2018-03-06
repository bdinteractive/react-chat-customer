import React from "react";
import { Link } from 'react-router-dom';

export class TalentAdded extends React.Component {
    render() {
        return(
            <div className="row">

                <div className="col-12">
                    <div className="panel panel-default">
                        <div className="panel-body text-center">
                            <h1>Talent Added!</h1>
                            <div className="btn-group" role="group">
                                <Link className="btn btn-primary btn-sm" to="/app/talent">Return to Talent</Link>
                                <Link className="btn btn-info btn-sm" to="/app/talent-add">Add Talent</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}