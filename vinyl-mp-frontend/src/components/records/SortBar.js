import React, {Component} from "react"
import {Dropdown} from "react-bootstrap"
import {withRouter} from "react-router-dom"


class SortBar extends Component {

    handleSort = (e) => {
        e.preventDefault()
        if (this.props.location.search.includes('search')) {
            let searchStr = this.props.location.search.split('=')[1]
            this.props.history.push(`/records?search=${searchStr}&sortby=${e.target.value}`)
        } else {
            this.props.history.push(`/records?sortby=${e.target.value}`)
        }
}


    render() {
        return (
            <div className= 'container ml-auto'>
                <select className='btn-light' onChange={this.handleSort}>
                    <option value="default">Sort Records </option>
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
