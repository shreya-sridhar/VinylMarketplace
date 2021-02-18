import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class HistoryCard extends React.Component {
   render(){
       return(
                <tr>
                <th scope="row">{this.props.order_record.id}</th>
                <td class="w-25">
                    <img src={this.props.order_record.record.cover} alt={this.props.order_record.record.name} width="70"></img>
                </td>
                <td>{this.props.order_record.record.name}</td>
                <td>fill seller</td>
                <td>fill date</td>
                <td>$ {parseInt(this.props.order_record.sell_price)}</td>
                </tr>
       )
   }
   }
   