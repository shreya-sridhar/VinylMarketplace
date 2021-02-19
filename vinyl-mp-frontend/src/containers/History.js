import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HistoryCard from '../components/HistoryCard.js'

export default class History extends React.Component {
   render(){return(<div class="container mt-5">
       <h2>Your Order History</h2>
       <br></br>
    <div class="row">
        <div class="col-12">
            <table class="table table-image">
            <thead>
                <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Record</th>
                <th scope="col">Album Name</th>
                <th scope="col">Seller</th>
                <th scope="col">Date</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
            {this.props.order_records.map(o => <HistoryCard order_record = {o}/>)}
            </tbody>
            </table>   
        </div>
    </div>
    </div>)

}
}

