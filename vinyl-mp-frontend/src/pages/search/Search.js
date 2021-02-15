import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import RecordsSearchFilterTab from "../../components/records/RecordsSearchFilterTab"
import RecordComponent from "../../components/records/RecordComponent"
import Pagination from "../../components/records/Pagination"
import FilersTab from "../../components/records/FilersTab";
import SortBar from "../../components/records/SortBar";

class Search extends React.Component {
    render() {
        return (
            <div>
                <Pagination />
                {/*<FilersTab />*/}
                <SortBar />
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