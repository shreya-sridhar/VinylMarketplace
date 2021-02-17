import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Cart extends React.Component {
    render(){
     
       return( 
        <tr>
        <th scope="row" className="border-0">
          <div className="p-2">
            <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg" alt="" width="70" className="img-fluid rounded shadow-sm"></img>
            <div className="ml-3 d-inline-block align-middle">
              <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{this.props.order_record.record.name}</a></h5><span className="text-muted font-weight-normal font-italic d-block">Genre: Indie</span>
            </div>
          </div>
        </th>
        <td className="border-0 align-middle"><strong>{parseInt(this.props.order_record.record.price)}</strong></td>
        <td className="border-0 align-middle"><strong>3</strong></td>
        <td className="border-0 align-middle"><a href="#" onClick = {() => this.props.deleteRecord(this.props.order_record.record)} className="text-dark"><i className="fa fa-trash"></i></a></td>
      </tr>


       )}
       }