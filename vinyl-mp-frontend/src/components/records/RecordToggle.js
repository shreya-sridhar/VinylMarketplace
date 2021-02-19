import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from '../../containers/Carousel.js'
import Songs from './SongsList.js'
import SongsList from './SongsList.js'
import RecordDescription from '../../components/records/RecordDescription.js'
import {useHistory, Link} from "react-router-dom";


function RecordToggle(props) {

    const history = useHistory();
    const navigateTo = (user) => history.push(`/cart/${user.id}`);//eg.history.push('/login');
    return (
        <section class="panel">
            <div class="panel-body">
                <div class="row">
                    <div onClick={() => props.handleClick(props.record)} className="col-md-6">
                        <h6><a href="#">{props.cover}</a></h6>
                        {props.cover[0] ? <RecordDescription
                                record={props.record}
                                cover={props.cover}
                            /> :
                            <SongsList songs_list={props.record.songs_list}/>}
                    </div>
                    {/*<div class="col-md-6">*/}
                    {/*    <RecordDescription*/}
                    {/*        record={props.record}*/}
                    {/*        cover={props.cover}*/}
                    {/*    />*/}
                    {/*    <h6 onClick={() => props.handleClick(props.record)}><a href="#">{props.cover}</a></h6>*/}
                    {/*</div>*/}
                    <div className="col-md-6">
                        <br></br>
                        <h2 class="p">
                            <Link to={`/records?search=${props.record.name}`}>
                                <p className="text-dark">{props.record.name}</p>
                            </Link>
                        </h2>
                        <div className="container">
                            <div className="starrating risingstar d-flex justify-content-center flex-row-reverse">
                                <input type="radio" id="star5" name="rating" value="5"/>
                                <label for="star5" title="5 star"></label>
                                <input type="radio" id="star4" name="rating" value="4"/>
                                <label for="star4" title="4 star"></label>
                                <input type="radio" id="star3" name="rating" value="3"/>
                                <label for="star3" title="3 star"></label>
                                <input type="radio" id="star2" name="rating" value="2"/>
                                <label for="star2" title="2 star"></label>
                                <input type="radio" id="star1" name="rating" value="1"/>
                                <label for="star1" title="1 star"></label>
                            </div>
                        </div>
                        <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                            <p id='record-description'>{props.record.description}</p>
                        </div>
                        <div className="product_meta">
                        <span className="posted_in"> <strong>Genre: </strong>
                            <Link to={`/records?search=${props.record.genre}`}>
                                <p className="text-dark">{props.record.genre}</p>
                            </Link>
                        </span>
                            <span className="tagged_as"><strong>Artist: </strong>
                                <Link to={`/records?search=${props.record.artist}`}>
                                    <p className="text-dark">{props.record.artist}</p>
                                </Link>
                            </span>
                        </div>
                        <div class="m-bot15">
                            <strong>Starting Price : </strong>
                            <span class="amount-old">$ {parseInt(props.record.price)}</span>
                            $ {Math.min.apply(null, props.sells.map(s => s.sell_price))}
                            <span class="pro-price"></span></div>
                        <div class="form-group">
                            <label>Quantity</label>
                            <div className="container">
                                <div className="row row-cols-3">
                                    <div className="col"></div>
                                    <div className="col"><input type="quantiy" placeholder="1"
                                                                className="form-control quantity"></input></div>
                                    <div className="col"></div>
                                </div>
                            </div>

                        </div>
                        <p>

                            <button onClick={() => navigateTo(props.user)} class="btn btn-round btn-danger"
                                    type="button"><i class="fa fa-shopping-cart"></i> View Cart
                            </button>
                            &nbsp;&nbsp;
                            <button class="btn btn-round btn-danger" type="button"><i class="fas fa-eye"></i> View
                                Sellers
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default RecordToggle;



