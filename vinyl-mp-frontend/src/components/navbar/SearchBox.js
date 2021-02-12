import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const SearchBox = () => {
    return (
        <div className="navbar-brand mx-auto text-light">
            <form className="d-flex">
                <input className="form-control me-2"
                       type="search"
                       placeholder="Search"
                       aria-label="Search"></input>
                <button className="btn btn-outline-dark" type="submit"><
                    span role="img" aria-label="magnifying-glass"> 🔎</span>
                </button>
            </form>
        </div>
    )
}

export default SearchBox