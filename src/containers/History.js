import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HistoryCard from '../components/HistoryCard.js'

export default class History extends React.Component {
   render(){
       return(<div class="container mt-5">
       <h2>Your Order History</h2>
       <br></br>
    <div class="row">
        <div class="col-12">
            <table class="table table-image">
            <thead>
                <tr>
                <th style={{width:'10%'}} scope="col">Order ID</th>
                <th style={{width:'20%'}} scope="col">Record</th>
                <th style={{width:'50%'}} scope="col">Album Name</th>
                {/*<th style={{width:'25%'}} scope="col">Seller</th>*/}
                {/*<th style={{width:'15%'}}scope="col">Date</th>*/}
                <th style={{width:'20%'}} scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
            {this.props.order_records.filter(o => o.order.user_id === this.props.user.id).map(o => <HistoryCard order_record = {o}/>)}
            </tbody>
            </table>   
        </div>
    </div>
    </div>)

}
}





