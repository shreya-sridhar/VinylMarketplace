import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from "./Pagination";

const RecordsSearchFilterTab = () => {
    return (
        <div className="d-flex align-items-center text-dark justify-content-between results ml-5 mr-5">
            <Pagination />
        </div>
    )
}

export default RecordsSearchFilterTab