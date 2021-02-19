import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom"

class RecordComponent extends React.Component {

    render() {
        console.log(this.props.record.cover)

        return (
            <div className=" col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-10 offset-sm-1 my-lg-0 my-2">

                <div className="card mt-3">
                    <Link to={{
                        pathname: `/records/${this.props.record.id}`,
                        state: {
                            record: this.props.record,
                        }
                    }}>
                        <img className="card-img-top "
                             src={this.props.record.cover}
                        />
                    </Link>
                    <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between">
                            <div className="d-flex flex-column">
                                <div className="h6 font-weight-bold text-dark record-component-name">
                                    {this.props.record.name}
                                </div>
                                <div className="text-dark text-left">
                                    ${Math.round(this.props.record.price)}
                                </div>
                            </div>
                            <div className="btn"><i className="far fa-heart"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecordComponent