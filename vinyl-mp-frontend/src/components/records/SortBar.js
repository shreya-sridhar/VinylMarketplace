import React, {Component} from "react";
import {Dropdown} from "react-bootstrap";

class SortBar extends Component {
    render() {
        return (
            <div className= 'container ml-auto'>
                {/*<select className='dark' onClick={(event => console.log(event.target.value))}>*/}
                {/*    <option value="default">Sort by Price</option>*/}
                {/*    <option value="priceLtoH">Price: high -> low</option>*/}
                {/*    <option value="priceHtoL">Price: low -> high</option>*/}
                {/*</select>*/}
                {/*<select>*/}
                {/*    <option value="default" >Sort by Name</option>*/}
                {/*    <option value="priceLtoH">Name: a -> z</option>*/}
                {/*    <option value="priceHtoL">Name: z -> a</option>*/}
                {/*</select>*/}
                {/*<Dropdown>*/}
                {/*    <Dropdown.Toggle variant="light" id="dropdown-basic">*/}
                {/*        Sort Records*/}
                {/*    </Dropdown.Toggle>*/}

                {/*    <Dropdown.Menu>*/}
                {/*        <Dropdown.Item value="priceLtoH" onClick={(e) => console.log(e.target.value)}>Price: low to high</Dropdown.Item>*/}
                {/*        <Dropdown.Item value="priceHtoL">Price: high to low</Dropdown.Item>*/}
                {/*        <Dropdown.Item value="nameAtoZ">Name: A to Z</Dropdown.Item>*/}
                {/*        <Dropdown.Item value="nameZtA">Name: Z to A</Dropdown.Item>*/}
                {/*        <Dropdown.Item value="yearOtoN">Released Year: old to new</Dropdown.Item>*/}
                {/*        <Dropdown.Item value="yearNtoO">Released Year: new to old</Dropdown.Item>*/}
                {/*    </Dropdown.Menu>*/}
                {/*</Dropdown>*/}

                {/*<div className="dropdown">*/}
                {/*    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"*/}
                {/*            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                {/*        Dropdown button*/}
                {/*    </button>*/}
                {/*    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">*/}
                {/*        /!*<option value="default" onClick={(e) => console.log(e.target.value)}>Sort by Name</option>*!/*/}

                {/*        <a className="dropdown-item" href="#">Action</a>*/}
                {/*        <a className="dropdown-item" href="#">Another action</a>*/}
                {/*        <a className="dropdown-item" href="#">Something else here</a>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <select className='btn-light' onChange={(e) => console.log(e.target.value)}>
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

export default SortBar