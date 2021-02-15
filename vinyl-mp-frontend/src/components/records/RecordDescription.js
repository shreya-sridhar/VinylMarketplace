import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from '../../containers/Carousel.js'
import SongsList from './SongsList.js'

export default class RecordDescription extends React.Component {
    render(){
     return(
    <div>
        {!this.props.cover[0]? <div class="pro-img-details"><img src={this.props.record.cover} alt=""></img></div>:<SongsList songs_list={this.props.record["songs_list"]}/>} 
    </div> 
     )}
}

