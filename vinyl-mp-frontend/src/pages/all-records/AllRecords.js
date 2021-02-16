import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import RecordsSearchFilterTab from "../../components/records/RecordsSearchFilterTab"
import RecordComponent from "../../components/records/RecordComponent"
import Pagination from "../../components/records/Pagination"
import FilersTab from "../../components/records/FilersTab"
import SortBar from "../../components/records/SortBar"

const API = "http://localhost:3001/"


class AllRecords extends React.Component {
    state = {
        records: []
    }

    componentDidMount() {
        let urlRequest = API + `records`
        if (this.props.location.search !== null) {
            urlRequest += `${this.props.location.search}`
        }
        fetch(urlRequest)
            .then(resp => resp.json())
            .then(data => this.setState({records: data}))
    }

    render() {
        console.log(this.state.records)
        return (
            <div>
                <Pagination/>
                {/*<FilersTab />*/}
                <SortBar/>
                <div className="container mb-5">
                    <div className="row">
                        {this.state.records.map(record =>
                            <RecordComponent key={record.id}
                                             record={record}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default AllRecords