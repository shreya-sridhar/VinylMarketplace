import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const SearchBox = () => {
    return (
        <div className="navbar-brand mx-auto">
            <form className="d-flex">
                <input className="form-control me-2"
                       type="search"
                       placeholder="Search"
                       aria-label="Search"></input>
                <button className="btn btn-dark" type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default SearchBox