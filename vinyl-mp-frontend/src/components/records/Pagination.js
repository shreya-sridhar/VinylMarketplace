import './Pagination.css'
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {withRouter} from "react-router-dom"
import NotFound from "../NotFound";


class Pagination extends Component {

    handleNext = (e) => {
        const search = this.props.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search)
        const page = params.get('page')

        if (page === null) {
            params.set('page', '2')
        } else {
            params.set('page', parseInt(page)+1)
        }
        this.props.history.push('?' + params.toString())
    }

    handlePrev = (e) => {
        const search = this.props.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search)
        const page = params.get('page')

        if (page === null || page <= 1) {
            this.props.history.push('/404NotFound')
        } else {
            params.set('page', parseInt(page)-1)
            this.props.history.push('?' + params.toString())
        }
    }

    render() {
        return (
            <div className="d-flex flex-row container mt-3">
                <div className="p-2 text-dark pt-3">
                    <h4>All Records</h4>
                </div>
                <div className="ml-auto p-2">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-circle justify-content-center float-md-right mb-0">
                            <li className="page-item" onClick={this.handlePrev}>
                                <a className="page-link">
                                    <i className="fas fa-chevron-left"></i>
                                </a>
                            </li>
                            {/*<li className="page-item active"><a className="page-link">1</a></li>*/}
                            {/*<li className="page-item"><a className="page-link">2</a></li>*/}
                            {/*<li className="page-item"><a className="page-link">3</a></li>*/}
                            <li className="page-item" onClick={this.handleNext}>
                                <a className="page-link">
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )

    }

}

export default withRouter(Pagination)

