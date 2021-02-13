import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Carousel extends React.Component {
    render(){
        return(
<div id="demo" class="carousel slide" data-ride="carousel">
        <h4>You May Also Like</h4><br></br><br></br><br></br>
  <ul class="carousel-indicators">
    <li data-target="google.com" data-slide-to="0" class="active"></li>
    <li data-target="google.com" data-slide-to="1"></li>
    <li data-target="google.com" data-slide-to="2"></li>
  </ul>
  
  
  <div class="container carousel-inner no-padding">
    <div class="carousel-item active">
      <div class="col-xs-3 col-sm-3 col-md-3">
        <img src="http://www.googlecover.com/_asset/_cover/John-Lennon_662.jpg"alt=""></img>
      </div>    
      <div class="col-xs-3 col-sm-3 col-md-3">
        <img src="http://www.googlecover.com/_asset/_cover/John-Lennon_662.jpg"alt=""></img>
      </div>   
      <div class="col-xs-3 col-sm-3 col-md-3">
        <img src="http://www.googlecover.com/_asset/_cover/John-Lennon_662.jpg"alt=""></img>
      </div>   
      <div class="col-xs-3 col-sm-3 col-md-3">
        <img src="http://www.googlecover.com/_asset/_cover/John-Lennon_662.jpg"alt=""></img>
      </div>   
    </div>
    
    <div class="carousel-item">
      <div class="col-xs-3 col-sm-3 col-md-3">
        <img src="http://www.googlecover.com/_asset/_cover/John-Lennon_662.jpg"alt=""></img>
      </div>    
      <div class="col-xs-3 col-sm-3 col-md-3">
        <img src="http://www.googlecover.com/_asset/_cover/John-Lennon_662.jpg"alt=""></img>
      </div>   
      <div class="col-xs-3 col-sm-3 col-md-3">
        <img src="http://www.googlecover.com/_asset/_cover/John-Lennon_662.jpg"alt=""></img>
      </div>   
      <div class="col-xs-3 col-sm-3 col-md-3">
        <img src="http://www.googlecover.com/_asset/_cover/John-Lennon_662.jpg"alt=""></img>
      </div>  
    </div>
    <div class="carousel-item">
      <div class="col-xs-3 col-sm-3 col-md-3">
        <img src="http://www.googlecover.com/_asset/_cover/John-Lennon_662.jpg"alt=""></img>
      </div>    
      <div class="col-xs-3 col-sm-3 col-md-3">
        <img src="http://www.googlecover.com/_asset/_cover/John-Lennon_662.jpg"alt=""></img>
      </div>   
      <div class="col-xs-3 col-sm-3 col-md-3">
        <img src="http://www.googlecover.com/_asset/_cover/John-Lennon_662.jpg"alt=" "></img>
      </div>   
      <div class="col-xs-3 col-sm-3 col-md-3">
        <img src="http://www.googlecover.com/_asset/_cover/John-Lennon_662.jpg"alt=" "></img>
      </div>  
    </div>
  </div>


  
  
  <a class="carousel-control-prev" href="google.com" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="google.com" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a><br></br><br></br><br></br><br></br>
</div>)
}
}
export default Carousel;
