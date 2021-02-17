import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import AppLogo from "../components/navbar/AppLogo"
import SearchBox from "../components/navbar/SearchBox"
import Cart from "../components/navbar/Cart"
import LoginButton from "../components/navbar/LoginButton"
import UserDropdown from "../components/navbar/UserDropdown";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar bg-dark">
                <div className="container-fluid text-light">
                    <AppLogo />
                    <SearchBox search={this.props.search}/>
                    <Cart />
                    {/*<LoginButton />*/}
                    <UserDropdown />
                </div>
            </nav>
        )
    }
}

export default NavBar