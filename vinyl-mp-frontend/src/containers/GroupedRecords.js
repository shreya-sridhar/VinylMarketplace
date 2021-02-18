import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import RecordComponent from "../components/records/RecordComponent";
import {Link} from "react-router-dom";

const GroupedRecords = props => {
    if (props.records.length === 0) {
        return (<div/>)
    }
    return (
        <div className="container mt-3">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <h3 className="font-weight-light text-center text-dark text-lg-left mt-4 mb-0"
                            id="grouped-records"> {props.title}
                        </h3>
                    </div>
                    <div className="col-md-3 offset-md-4">
                        <Link to={{pathname: '/records'}}>
                            <p className="font-weight-light text-right text-dark text-lg-right mt-4 mb-0"
                                id="grouped-records"> View all Records
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className="mt-2 mb-2"/>
            <div className="row py-3">
                {props.records.map(record =>
                    <RecordComponent key={record.id}
                                     record={record}/>)
                }
            </div>
        </div>
    )
}

export default GroupedRecords