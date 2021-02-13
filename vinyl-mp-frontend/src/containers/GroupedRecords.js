import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import RecordComponent from "../components/records/RecordComponent";

const GroupedRecords = (props) => {
    return (
        // <div className="container mt-5">
        //
        //     <h3 className="font-weight-light text-center text-dark text-lg-left mt-4 mb-0" id="grouped-records">{props.title}</h3>
        //
        //     <hr className="mt-2 mb-2"/>
        //     <div className="row text-center text-lg-left">
        //         <div className="col-lg-3 col-md-4 col-6">
        //             <a href="#" className="d-block mb-4 h-100">
        //                 <img className="img-fluid img-thumbnail"
        //                      src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt=""/>
        //             </a>
        //         </div>
        //         <div className="col-lg-3 col-md-4 col-6">
        //             <a href="#" className="d-block mb-4 h-100">
        //                 <img className="img-fluid img-thumbnail"
        //                      src="https://source.unsplash.com/aob0ukAYfuI/400x300" alt=""/>
        //             </a>
        //         </div>
        //         <div className="col-lg-3 col-md-4 col-6">
        //             <a href="#" className="d-block mb-4 h-100">
        //                 <img className="img-fluid img-thumbnail"
        //                      src="https://source.unsplash.com/EUfxH-pze7s/400x300" alt=""/>
        //             </a>
        //         </div>
        //         <div className="col-lg-3 col-md-4 col-6">
        //             <a href="#" className="d-block mb-4 h-100">
        //                 <img className="img-fluid img-thumbnail"
        //                      src="https://source.unsplash.com/M185_qYH8vg/400x300" alt=""/>
        //             </a>
        //         </div>
        //         <div className="col-lg-3 col-md-4 col-6">
        //             <a href="#" className="d-block mb-4 h-100">
        //                 <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/sesveuG_rNo/400x300"
        //                      alt=""/>
        //             </a>
        //         </div>
        //         <div className="col-lg-3 col-md-4 col-6">
        //             <a href="#" className="d-block mb-4 h-100">
        //                 <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/AvhMzHwiE_0/400x300"
        //                      alt=""/>
        //             </a>
        //         </div>
        //         <div className="col-lg-3 col-md-4 col-6">
        //             <a href="#" className="d-block mb-4 h-100">
        //                 <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/2gYsZUmockw/400x300"
        //                      alt=""/>
        //             </a>
        //         </div>
        //         <div className="col-lg-3 col-md-4 col-6">
        //             <a href="#" className="d-block mb-4 h-100">
        //                 <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/EMSDtjVHdQ8/400x300"
        //                      alt=""/>
        //             </a>
        //         </div>
        //     </div>
        // </div>
        <div className="container mt-3">
            <h3 className="font-weight-light text-center text-dark text-lg-left mt-4 mb-0" id="grouped-records">{props.title}</h3>
            <hr className="mt-2 mb-2"/>
            <div className="row">
                <RecordComponent/>
                <RecordComponent/>
                <RecordComponent/>
                <RecordComponent/>
                <RecordComponent/>
                <RecordComponent/>
                <RecordComponent/>
                <RecordComponent/>
            </div>
            {/*<div className="row py-3">*/}
            {/*    <RecordComponent/>*/}
            {/*    <RecordComponent/>*/}
            {/*    <RecordComponent/>*/}
            {/*    <RecordComponent/>*/}
            {/*</div>*/}
        </div>

    )
}

export default GroupedRecords