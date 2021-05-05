import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import AppLogo from "../components/navbar/AppLogo"
import SearchBox from "../components/navbar/SearchBox"
import Cart from "../components/navbar/Cart"
import LoginButton from "../components/navbar/LoginButton"
import UserDropdown from "../components/navbar/UserDropdown";

class NavBar extends Component {
    render() {
        if (Object.keys(this.props.user).length === 0) {
            return (
                <nav className="navbar bg-dark">
                    <div className="container-fluid text-light">
                        <AppLogo/>
                        <SearchBox search={this.props.search}/>
                        <LoginButton/>
                    </div>
                </nav>
            )
        }
        return (
            <nav className="navbar bg-dark">
                <div className="container-fluid text-light">
                    <AppLogo/>
                    <SearchBox search={this.props.search}/>
                    <Cart user={this.props.user}/>
                    <UserDropdown
                        user={this.props.user}
                        handleLogout={this.props.handleLogout}
                    />
                </div>
            </nav>
        )
    }
}

export default NavBar