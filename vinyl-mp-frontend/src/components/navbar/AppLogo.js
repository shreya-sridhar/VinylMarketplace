import './AppLogo.css'
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom";

const AppLogo = () => {
    return (
        <div className="navbar-brand mb-0 text-light">
            <Link to='/' id='vinylLogo' >
                <i className="fa fa-record-vinyl"></i> Vinyl Store
            </Link>
        </div>
    )
}

export default AppLogo