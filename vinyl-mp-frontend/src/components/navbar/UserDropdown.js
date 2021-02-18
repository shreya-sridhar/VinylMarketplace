import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown} from "react-bootstrap"
import {Link} from "react-router-dom"

const UserDropdown = (props) => {
    return (

    <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Hi, {props.user.username}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Orders</Dropdown.Item>
            <Dropdown.Item href="/friends">Friends</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Favorite</Dropdown.Item>
            <Dropdown.Item href="/" onClick={props.handleLogout}>Log Out</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    )
}

export default UserDropdown