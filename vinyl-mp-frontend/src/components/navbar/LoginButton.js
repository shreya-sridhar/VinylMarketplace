import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const LoginButton = () => {
    return (
        <div className="navbar-brand text-light">
            <button type="button"
                    className="btn btn-outline-light mr-10"
                    id="sign-in">Sign In
            </button>
            <button type="button"
                    className="btn btn-outline-light"
                    id="create-account">Create Account
            </button>
        </div>
    )
}

export default LoginButton