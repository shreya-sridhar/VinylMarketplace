import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import RecordsSearchFilterTab from "../../components/records/RecordsSearchFilterTab"
import RecordComponent from "../../components/records/RecordComponent"
import Pagination from "../../components/records/Pagination";

class Search extends React.Component {
    render() {
        return (
            <div>
                <Pagination />
                <div className="container mb-5">
                    <div className="row">
                        <RecordComponent/>
                        <RecordComponent/>
                        <RecordComponent/>
                        <RecordComponent/>
                        <RecordComponent/>
                        <RecordComponent/>
                        <RecordComponent/>
                        <RecordComponent/>
                        <RecordComponent/>
                        <RecordComponent/>
                        <RecordComponent/>
                        <RecordComponent/>
                        <RecordComponent/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search