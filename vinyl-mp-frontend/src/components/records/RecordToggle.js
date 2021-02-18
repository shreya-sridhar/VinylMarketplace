import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from '../../containers/Carousel.js'
import Songs from './SongsList.js'
import SongsList from './SongsList.js'
import RecordDescription from '../../components/records/RecordDescription.js'
import { useHistory } from "react-router-dom";


function RecordToggle(props) {
    
    const history = useHistory();
  const navigateTo = (user) => history.push(`/cart/${user.id}`);//eg.history.push('/login');

       return(
        <section class="panel">
            <div class="panel-body">
            <div class="row">
                <div class="col-md-6">
                   <RecordDescription record = {props.record} cover={props.cover}/>
                   <h6 onClick={() => props.handleClick(props.record)}><a href="#">{props.cover}</a></h6>
                </div> 
                <div class="col-md-6">
                  <br></br>
                    <h2 class="p">
                        <a href="google.com" class="">
                           {props.record.name}
                        </a>
                    </h2>
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
                    <div class="m-bot15"> <strong>Starting Price : </strong> <span class="amount-old">${parseInt(Math.min(props.sells.map(s => s.sell_price))+100)}</span>${parseInt(Math.min(props.sells.map(s => s.sell_price)))}<span class="pro-price"></span></div>
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

                        <button onClick={()=> navigateTo(props.user)} class="btn btn-round btn-danger" type="button"><i class="fa fa-shopping-cart"></i> View Cart</button>&nbsp;&nbsp;
                        <button class="btn btn-round btn-danger" type="button"><i class="fas fa-eye"></i> View Sellers</button>
                    </p>
                </div>
            </div>
            </div>
        </section>
        
       )
}

export default RecordToggle;



