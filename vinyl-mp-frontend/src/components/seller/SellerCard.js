import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class SellerCard extends React.Component {
    render(){
       return(
        <li class="list-group-item">
                 <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                     <div class="media-body order-2 order-lg-1">
                         <h5 class="mt-0 font-weight-bold mb-2">{this.props.sell.user.username}</h5>
                         <p class="font-italic text-muted mb-0 small">{this.props.sell.user.bio}</p>
                         <div class="d-flex align-items-center justify-content-between mt-1">
                             <h6 class="font-weight-bold my-2">${parseInt(this.props.sell.sell_price)}</h6>
                             <ul class="list-inline small">
                                 <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                 <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                 <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                 <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                 <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                 &nbsp;&nbsp;&nbsp;
                                 <button onClick = {()=>this.props.addToCart(this.props.sell.record)} class="btn btn-round btn-danger" type="button"><i class="far fa-credit-card"></i>&nbsp;Buy Now</button>
                             </ul>
                         </div>
                     </div>
                 </div> 
             </li> 
               )
    }
}
