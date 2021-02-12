import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown} from "react-bootstrap";

const UserDropdown = () => {
    return (
        // <div className="nav-item dropdown">
        //     <a className="nav-link dropdown-toggle"
        //        href="#"
        //        id="navbarDropdown"
        //        role="button"
        //        data-toggle="dropdown"
        //        aria-haspopup="true"
        //        aria-expanded="false">
        //         Dropdown
        //     </a>
        //     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //         <a className="dropdown-item" href="#">Sell Record</a>
        //         <a className="dropdown-item" href="#">Orders</a>
        //         {/*<div className="dropdown-divider"></div>*/}
        //         <a className="dropdown-item" href="#">Favorites</a>
        //     </div>
        // </div>

    <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
            User name goes here
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Orders</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Sell Record</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Favorite</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    )
}

export default UserDropdown