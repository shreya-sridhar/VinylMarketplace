import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Friends extends React.Component {
        
    render(){
       return(
        <div class="container-fluid" style={{minHeight:"auto"}}>
        <div class="row" >
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2"></div> 
          <div class="col-2" style={{minHeight:700,backgroundColor:"black"}}>
            <h6 class="text-muted">Friends</h6> 
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Don Quixote 
                <div class="image-parent">
                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/don_quixote.jpg" class="img-fluid" alt="quixote"></img>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                As I Lay Dying 
                <div class="image-parent">
                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/as_I_lay.jpg" class="img-fluid" alt="lay"></img>
                    </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">  
                Things Fall Apart
                <div class="image-parent">
                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/things_fall_apart.jpg" class="img-fluid" alt="things"></img>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
       )
    }
}


