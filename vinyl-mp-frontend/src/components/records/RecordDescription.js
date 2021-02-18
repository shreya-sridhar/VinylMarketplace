import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from '../../containers/Carousel.js'
import SongsList from './SongsList.js'

export default class RecordDescription extends React.Component {
    render(){
     return(
    <div>
            <div className="pro-img-details">
                <img src={this.props.record.cover} alt={this.props.record.name}></img>
            </div>
    </div> 
     )}
}

