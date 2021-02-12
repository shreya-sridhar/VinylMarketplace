import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../images/404page.gif'


const NotFound = () => {
    return(
        <div>
            <h1>404</h1>
            <h3>not found</h3>
            <img src={logo} alt="loading..." width='150px'/>
        </div>
    )
}

export default NotFound