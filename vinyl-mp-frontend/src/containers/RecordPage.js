import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowSellers from '../components/ShowSellers.js'
import Carousel from '../containers/Carousel.js'

class RecordPage extends React.Component {
    render(){
       return(
         <div class="whole">
        <div class="container bootdey">
        <br></br><br></br><br></br><br></br>
        <div class="col-md-12">
        <section class="panel">
            <div class="panel-body">
            <div class="row">
                <div class="col-md-6">
                    <div class="pro-img-details">
                        <img src="https://static.stereogum.com/uploads/2018/12/The-Beatles-Let-It-Be-1545161280-compressed.jpg" alt=""></img>
                    </div>
                    <div class="pro-img-list">
                        <a href="google.com">
                            <img src="https://via.placeholder.com/115x100/87CEFA/000000" alt=""></img>
                        </a>
                        <a href="google.com">
                            <img src="https://via.placeholder.com/115x100/FF7F50/000000" alt=""></img>
                        </a>
                        <a href="google.com">
                            <img src="https://via.placeholder.com/115x100/20B2AA/000000" alt=""></img>
                        </a>
                        <a href="google.com">
                            <img src="https://via.placeholder.com/120x100/20B2AA/000000" alt=""></img>
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                  <br></br><br></br><br></br><br></br>
                    <h4 class="pro-d-title">
                        <a href="google.com" class="">
                           Let It Be
                        </a>
                    </h4>
                    <div class="container">
                            <div class="starrating risingstar d-flex justify-content-center flex-row-reverse">
                                <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="5 star"></label>
                                <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="4 star"></label>
                                <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="3 star"></label>
                                <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="2 star"></label>
                                <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="1 star"></label>
                            </div>
                      </div>	
        
                    <p>
                        Praesent ac condimentum felis. Nulla at nisl orci, at dignissim dolor, The best product descriptions address your ideal buyer directly and personally. The best product descriptions address your ideal buyer directly and personally.
                    </p>
                    <div class="product_meta">
                        <span class="posted_in"> <strong>Genres:</strong> <a rel="tag" href="google.com">Rock</a>, <a rel="tag" href="google.com">Pop</a>, <a rel="tag" href="google.com">Country</a>, <a rel="tag" href="google.com">Pop Music</a>.</span>
                        <span class="tagged_as"><strong>Tags:</strong> <a rel="tag" href="google.com">Beatles</a>, <a rel="tag" href="google.com">Soul</a>.</span>
                    </div>
                    <div class="m-bot15"> <strong>Price : </strong> <span class="amount-old">$544</span>  <span class="pro-price"> $300.00</span></div>
                    <div class="form-group">
                        <label>Quantity</label>
                        <div class="container">
  <div class="row row-cols-3">
    <div class="col"></div>
    <div class="col">        <input type="quantiy" placeholder="1" class="form-control quantity"></input></div>
    <div class="col"></div>
    </div></div>


                    </div>
                    <p>
                        <button class="btn btn-round btn-danger" type="button"><i class="fa fa-shopping-cart"></i> Add to Cart</button>&nbsp;&nbsp;
                        <button class="btn btn-round btn-danger" type="button"><i class="fa fa-shopping-cart"></i> Buy Now</button>
                    </p>
                </div>
            </div>
            </div>
        </section>
        <br></br><br></br><br></br><br></br>
        </div>
        </div>
        <Carousel />
        <ShowSellers />
        


        
</div>
          
        


       )
    }
}

export default RecordPage

