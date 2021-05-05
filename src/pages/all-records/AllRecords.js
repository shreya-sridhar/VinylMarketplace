import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RecordsSearchFilterTab from "../../components/records/RecordsSearchFilterTab";
import RecordComponent from "../../components/records/RecordComponent";
import Pagination from "../../components/records/Pagination";
import FilersTab from "../../components/records/FilersTab";
import SortBar from "../../components/records/SortBar";

const API = "https://calm-ravine-36992.herokuapp.com";

class AllRecords extends React.Component {
  state = {
    records: [],
  };

  componentDidMount() {
    let urlRequest = API + `/records`;
    if (this.props.location.search !== null) {
      urlRequest += `${this.props.location.search}`;
    }
    fetch(urlRequest)
      .then((resp) => resp.json())
      .then((data) => this.setState({ records: data }));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.location.search === this.props.location.search) {
      return;
    }

    let urlRequest = API + `/records`;
    if (this.props.location.search !== null) {
      urlRequest += `${this.props.location.search}`;
    }
    fetch(urlRequest)
      .then((resp) => resp.json())
      .then((data) => this.setState({ records: data }));
  }

  render() {
    return (
      <div>
        <Pagination />
        {/*<FilersTab />*/}
        <SortBar />
        <div className="container mb-5">
          <div className="row">
            {this.state.records.map((record) => (
              <RecordComponent key={record.id} record={record} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AllRecords;
