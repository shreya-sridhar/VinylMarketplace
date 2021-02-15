import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Cart extends React.Component {
        
    render(){
       return(<div class="col-xs-3 col-sm-3 col-md-3">
       <img src={this.props.image} alt={this.props.title} style={{minHeight:this.props.size}}></img><h5>{this.props.title}</h5>
     </div>)
    }
}
