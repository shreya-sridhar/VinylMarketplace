import './Pagination.css'
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Pagination = () => {
    return (
        <div className="d-flex flex-row container mt-3">
            <div className="p-2 text-dark pt-3">
                <p className='font-italic'>Search results for Lo-fi beats</p>
            </div>
            <div className="ml-auto p-2">
                <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-circle justify-content-center float-md-right mb-0">
                        <li className="page-item"><a className="page-link"><i className="fas fa-chevron-left"></i></a>
                        </li>
                        {/*<li className="page-item active"><a className="page-link">1</a></li>*/}
                        {/*<li className="page-item"><a className="page-link">2</a></li>*/}
                        {/*<li className="page-item"><a className="page-link">3</a></li>*/}
                        <li className="page-item"><a className="page-link"><i className="fas fa-chevron-right"></i></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Pagination

