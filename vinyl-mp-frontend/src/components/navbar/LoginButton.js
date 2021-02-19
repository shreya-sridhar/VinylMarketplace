import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom";

const LoginButton = () => {
    return (
        <div className="navbar-brand">
            <Link to={{pathname: '/login'}}>
                <button type="button"
                        className="btn btn-dark mr-10"
                        id="sign-in">Sign In
                </button>
            </Link>
            <Link to={{pathname: '/signup'}}>
                <button type="button"
                        className="btn btn-dark"
                        id="create-account">Create Account
                </button>
            </Link>
        </div>
    )
}

export default LoginButton