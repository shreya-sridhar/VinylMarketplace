import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {withRouter} from "react-router-dom"
import Pagination from "../records/Pagination"


class SearchBox extends React.Component {

    handleSearch = (e) => {
        e.preventDefault()
        this.props.history.push(`/records?search=${e.target.search.value}`)
    }

    render() {
        return (
            <div className="navbar-brand mx-auto">
                <form className="d-flex" onSubmit={this.handleSearch}>
                    <input className="form-control me-2"
                           type="search"
                           name="search"
                           placeholder="Search"/>
                    <button className="btn btn-dark" type="submit">
                        <i className="fas fa-search"/>
                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBox)