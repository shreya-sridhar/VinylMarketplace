import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const imgSrc = 'https://images.unsplash.com/photo-1526382551041-3c817fc3d478?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400'

const RecordComponent = (props) => {
    console.log('hi from record component' + props)
    return (
        <div className="col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-10 offset-sm-1 my-lg-0 my-2">
            <div className="card mt-3">
                <img className="card-img-top "
                     src={imgSrc}/>
                <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between">
                        <div className="d-flex flex-column">
                            <div className="h6 font-weight-bold text-dark record-component-name">{props.record.name}</div>
                            <div className="text-dark text-left">${Math.round(props.record.price)}</div>
                        </div>
                        <div className="btn"><i className="far fa-heart"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecordComponent