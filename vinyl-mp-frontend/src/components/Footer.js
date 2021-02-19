import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Footer extends React.Component {
    render(){

        return(<footer className="footer">
        <div className="container bottom_border">
        <div className="row">
        <div className=" col-sm-4 col-md col-sm-4  col-12 col">
        <h5 className="headin5_amrc col_white_amrc pt2">About us</h5>
 
        <p className="mb10">Vinyl Market Place is a one stop for shopping and selling records</p>
        <p><i className="fa fa-location-arrow"></i> Seattle, WA </p>
        <p><i className="fa fa-phone"></i>  425-123-4567  </p>
        <p><i className="fa fa fa-envelope"></i> info@vinyl.io  </p>
        
        
        </div>
        
        
        <div className=" col-sm-4 col-md  col-6 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Shreya Sridhar</h5>
   
        <ul className="footer_ul_amrc">
        <li><a href="https://www.linkedin.com/in/shreyasridhariitb/"> <i className="fab fa-linkedin"></i> LinkedIn</a></li>
        <li><a href="https://shreyasridhar1109.medium.com/"> <i className="fab fa-medium"/> Medium</a></li>
        <li><a href="https://github.com/shreya-sridhar"><i className="fab fa-github-square"/> GitHub</a></li>

        </ul>
      
        </div>
        
        
        <div className=" col-sm-4 col-md  col-6 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Alena Trushnikova</h5>
       
        <ul className="footer_ul_amrc">
            <li><a href="https://www.linkedin.com/in/alenatrushnikova/"> <i className="fab fa-linkedin"></i> LinkedIn</a></li>
            <li><a href="https://alenatrushnikova.medium.com/"> <i className="fab fa-medium"/> Medium</a></li>
            <li><a href="https://github.com/AlenaTrushnikova"><i className="fab fa-github-square"/> GitHub</a></li>
        </ul>
      
        </div>
        
        
        <div className=" col-sm-4 col-md  col-12 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Vinyl Store || GitHub</h5>
    
        
        <ul className="footer_ul2_amrc">
            <li><a href="https://github.com/shreya-sridhar/vinyl-mp-frontend"> <i className="fab fa-github-square"/> Project's Front End</a></li>
            <li><a href="https://github.com/AlenaTrushnikova/vinyl-mp-backend"><i className="fab fa-github-square"/> Project's Back End</a></li>
        </ul>
    
        </div>
        </div>
        </div>
        
        
        <div className="container">
        <ul className="foote_bottom_ul_amrc">
        <li><a href="/">Home</a></li>
        <li><a href="/records">Records</a></li>
        {/*<li><a href="http://webenlance.com">Cart</a></li>*/}
        {/*<li><a href="http://webenlance.com">Pricing</a></li>*/}
        {/*<li><a href="http://webenlance.com">Blog</a></li>*/}
        {/*<li><a href="http://webenlance.com">Contact</a></li>*/}
        </ul>
       
        <p className="text-center">Copyright 2021</p>
        
        {/*<ul className="social_footer_ul">*/}
        {/*<li><a href="http://webenlance.com"><i className="fab fa-facebook-f"/></a></li>*/}
        {/*<li><a href="http://webenlance.com"><i className="fab fa-twitter"/></a></li>*/}
        {/*<li><a href="http://webenlance.com"><i className="fab fa-linkedin"/></a></li>*/}
        {/*<li><a href="http://webenlance.com"><i className="fab fa-instagram"/></a></li>*/}
        {/*</ul>*/}

        </div>
        
        </footer>

            
        )
    }
}

export default Footer

