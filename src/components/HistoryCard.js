import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom";

export default class HistoryCard extends React.Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.order_record.id}</th>
                <td class="w-25">
                    <img src={this.props.order_record.record.cover} alt={this.props.order_record.record.name}
                         width="70"></img>
                </td>
                <td>
                    <Link to={`/records/${this.props.order_record.record.id}`}>
                        {this.props.order_record.record.name}
                    </Link>
                </td>
                {/*<td>fill seller</td>*/}
                {/*<td>fill date</td>*/}
                <td>$ {this.props.order_record.record.price === null ? 0 : parseInt(this.props.order_record.record.price)}</td>
            </tr>
        )
    }
}
   