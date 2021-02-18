import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import RecordComponent from "../components/records/RecordComponent";

const GroupedRecords = props => {
    if (props.records.length === 0) {
        return (<div/>)
    }
    return (
        <div className="container mt-3">
            <h3 className="font-weight-light text-center text-dark text-lg-left mt-4 mb-0"
                id="grouped-records">{props.title}</h3>
            <hr className="mt-2 mb-2"/>
            {/*<div className="row">*/}
            {/*    /!*<RecordComponent/>*!/*/}
            {/*</div>*/}
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