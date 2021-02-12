import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import AppLogo from "../components/navbar/AppLogo"
import SearchBox from "../components/navbar/SearchBox"
import Cart from "../components/navbar/Cart";
import LoginButton from "../components/navbar/LoginButton";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <AppLogo />
                    <SearchBox />
                    <Cart />
                    <LoginButton />
                </div>
            </nav>
        )
    }
}

export default NavBar