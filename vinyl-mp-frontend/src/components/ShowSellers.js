import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class ShowSellers extends React.Component {
    render(){
       return(
        <div class="container">
  <div class="row row-cols-3">
    <div class="col"></div>
    <div class="col">
    <li class="list-group-item list-group-item-secondary">Browse Sellers</li>
    <ul class="list-group">
        <li class="list-group-item active">Active item</li>
        <li class="list-group-item list-group-item-dark">Second item</li>
        <li class="list-group-item list-group-item-dark">Third item</li>
      </ul>
    </div>
    <div class="col"></div>
  </div>
</div>
        
       )
    }
}

export default ShowSellers;



