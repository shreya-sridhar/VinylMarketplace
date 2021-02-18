import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown} from "react-bootstrap";

const UserDropdown = () => {
    return (

    <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
            User name goes here
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Orders</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Sell Record</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Favorite</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    )
}

export default UserDropdown