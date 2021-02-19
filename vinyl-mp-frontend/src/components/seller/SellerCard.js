import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from "react-router-dom";

function SellerCard(props) {

    const history = useHistory();
    const navigateTo = (userid) => history.push(`/users/${userid}`);//eg.history.push('/login');

       return(
        <li class="list-group-item">
                 <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                     <div class="media-body order-2 order-lg-1">
                         <u><h5 onClick={()=> navigateTo(props.sell.user.id)} class="mt-0 font-weight-bold mb-2">{props.sell.user.username}</h5>
                         </u>
                         <ul class="list-inline small">
                                 <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                 <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                 <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                 <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                 <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        </ul>
                         <h7>click to view seller profile</h7>
                         <p class="font-italic text-muted mb-0 small">{props.sell.user.bio}</p>
                         <div class="d-flex align-items-center justify-content-between mt-1">
                             <h6 class="font-weight-bold my-2">${parseInt(props.sell.sell_price)}</h6>
                             <ul class="list-inline small">
                                
                                 <button onClick = {()=>props.addToCart(props.sell.record)} class="btn btn-round btn-danger" type="button"><i class="far fa-credit-card"></i>&nbsp;Add To Cart</button>&nbsp;&nbsp;
                                 <button class="btn btn-round btn-primary" type="button"><i class="far fa-credit-card"></i>&nbsp;Message Seller </button>
                             </ul>
                         </div>
                     </div>
                 </div> 
             </li> 
               )

}

export default SellerCard;
