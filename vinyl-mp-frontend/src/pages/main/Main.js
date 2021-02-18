import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import GroupedRecords from "../../containers/GroupedRecords"

const API = "http://localhost:3001"


class Main extends React.Component {
    state = {
        popularRecords: [],
        expensiveRecords: []
    }

    componentDidMount() {
        fetch(API + `/records-popular`)
            .then(resp => resp.json())
            .then(data => this.setState({popularRecords: data}))
        fetch(API + `/records-expensive`)
            .then(resp => resp.json())
            .then(data => this.setState({expensiveRecords: data}))

    }

    render() {
        return (
            <div>
            <div className='container'>
                <GroupedRecords key={1}
                                title={'The most popular Records'}
                                records={this.state.popularRecords}/>
                <GroupedRecords key={2}
                                title={'The most expensive Records'}
                                records={this.state.expensiveRecords}/>
            </div>
            </div>

        )
    }
}

export default Main