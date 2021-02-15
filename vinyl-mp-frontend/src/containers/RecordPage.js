import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Seller from '../containers/Seller.js'
import Carousel from '../containers/Carousel.js'
import RecordToggle from '../components/records/RecordToggle.js'
// import Friends from './Friends.js'

class RecordPage extends React.Component {
    render(){
       return(
         <div class="whole">
        <div class="container bootdey">
        <br></br><br></br><br></br><br></br>
        <div class="col-md-12">
        <RecordToggle record = {this.props.record} records = {this.props.records} handleClick = {this.props.handleClick} cover={this.props.cover} />
        <br></br>
        </div>
        </div>
        <Seller users={this.props.users}/>
        <br></br><br></br>
        <Carousel records={this.props.records} nums={this.props.records.length} content={"You May Also Like"} size={200} handleRightClick={this.props.handleRightClick} handleLeftClick = {this.props.handleLeftClick} pageTag={"record"} recordPage = {this.props.recordPage}/>
</div>      
       )
    }
}

export default RecordPage



