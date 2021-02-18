import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class FavoriteContent extends React.Component {
        
    render(){
        
       return(

	<li>
    <a href="#" data-rel="colorbox">
        <img alt="150x150" src={this.props.fav[1]} width="200"></img>
        <div class="text">
            <div class="inner">{this.props.fav[0]}</div>
        </div>
    </a>

    <div class="tools tools-bottom">
        <a href="#">
            <i class="ace-icon fa fa-link"></i>
        </a>

        <a href="#">
            <i class="ace-icon fa fa-paperclip"></i>
        </a>

        <a href="#">
            <i class="ace-icon fa fa-pencil"></i>
        </a>

        <a href="#">
            <i class="ace-icon fa fa-times red"></i>
        </a>
    </div>
</li>)
    }}