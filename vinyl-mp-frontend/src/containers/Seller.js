import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SellerCard from '../components/seller/SellerCard.js'

class Seller extends React.Component {
    render(){
       return(
 <div class="container py-5">
 <div class="row text-center text-white mb-5">
     <div class="col-lg-7 mx-auto">
         <h1 class="display-4" style={{color:"black"}}>List of Sellers</h1>
     </div>
 </div>
 <div class="row">
     <div class="col-lg-8 mx-auto" style={{overflowY:"scroll",maxHeight:600}}>
         <ul class="list-group shadow">
             <li class="list-group-item">
                 <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                     <div class="media-body order-2 order-lg-1">
                        {this.props.sells.map(sell => <SellerCard sell={sell} addToCart = {this.props.addToCart}/>)}
                     </div>
                 </div>
             </li>
         </ul> 
     </div>
 </div>
</div>
 )
}
}

export default Seller;




