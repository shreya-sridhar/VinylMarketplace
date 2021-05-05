import React, {Component} from "react"
import {Dropdown} from "react-bootstrap"
import {withRouter} from "react-router-dom"


class SortBar extends Component {

    handleSort = (e) => {
        e.preventDefault()
        const search = this.props.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search)
        const sortby = params.get('sortby')
        params.set('sortby', e.target.value)
        this.props.history.push('?' + params.toString())
    }


    render() {
        return (
            <div className='container ml-auto'>
                <select className='btn-light' onChange={this.handleSort}>
                    <option value="default">Sort Records</option>
                    <optgroup label="Price" value='price'>
                        <option value="priceLtoH">Low to high</option>
                        <option value="priceHtoL">High to low</option>
                    </optgroup>
                    <optgroup label="Name">
                        <option value="nameAtoZ">A to Z</option>
                        <option value="nameZtoA">Z to A</option>
                    </optgroup>
                    <optgroup label="Release Year">
                        <option value="newToOld">New to Old</option>
                        <option value="oldToNew">Old to New</option>
                    </optgroup>
                </select>
            </div>
        )
    }
}

export default withRouter(SortBar)
