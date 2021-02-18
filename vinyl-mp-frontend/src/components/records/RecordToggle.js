import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from '../../containers/Carousel.js'
import Songs from './SongsList.js'
import SongsList from './SongsList.js'
import RecordDescription from '../../components/records/RecordDescription.js'

export default class RecordToggle extends React.Component {
    render(){
       return(
        <section className="panel">
            <div className="panel-body">
            <div className="row">
                <div className="col-md-6">
                   <RecordDescription record = {this.props.record} cover={this.props.cover}/>
                   {/*<h6 onClick={() => this.props.handleClick(this.props.record)}><a href="#">{this.props.cover}</a></h6>*/}
                </div> 
                <div className="col-md-6">
                  <br></br>
                    <h2 className="p">
                        <a href="google.com" className="">
                           {this.props.record.name}
                        </a>
                    </h2>
                    <div className="container">
                            <div className="starrating risingstar d-flex justify-content-center flex-row-reverse">
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
                    <div className="product_meta">
                        <span className="posted_in"> <strong>Genres:</strong> <a rel="tag" href="google.com">Rock</a>, <a rel="tag" href="google.com">Pop</a>, <a rel="tag" href="google.com">Country</a>, <a rel="tag" href="google.com">Pop Music</a>.</span>
                        <span className="tagged_as"><strong>Tags:</strong> <a rel="tag" href="google.com">Beatles</a>, <a rel="tag" href="google.com">Soul</a>.</span>
                    </div>
                    <div className="m-bot15"> <strong>Starting Price : </strong> <span className="amount-old">$544</span>  <span className="pro-price"> $300.00</span></div>
                    <div className="form-group">
                        <label>Quantity</label>
                        <div className="container">
  <div className="row row-cols-3">
    <div className="col"></div>
    <div className="col">        <input type="quantiy" placeholder="1" className="form-control quantity"></input></div>
    <div className="col"></div>
    </div></div>

                    </div>
                    <p>
                        <button onClick={()=> this.props.addToCart(this.props.record)} className="btn btn-round btn-danger" type="button"><i className="fa fa-shopping-cart"></i> Add to Cart</button>&nbsp;&nbsp;
                        <button className="btn btn-round btn-danger" type="button"><i className="fas fa-eye"></i> View Sellers</button>
                    </p>
                </div>
            </div>
            </div>
        </section>
        
       )
    }
}

