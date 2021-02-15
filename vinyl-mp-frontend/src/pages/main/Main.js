import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import GroupedRecords from "../../containers/GroupedRecords";

class Main extends React.Component {
    render() {
        return (
            <div >
                <GroupedRecords title={'The most popular Records'}/>
                <GroupedRecords title={'The most expensive Records'}/>
            </div>
            
        )
    }
}

export default Main