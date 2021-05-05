import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FavoriteContent from '../components/FavoriteContent.js'

export default class Favorites extends React.Component {
        
    render(){
       return(
        <div class="col-xs-12 col-sm-9">
             <div class="container" style={{minHeight:"auto",paddingLeft:100,overflowY:"scroll",maxHeight:400}}>
       <div id="Favorites" class="tab-pane">
					<ul class="ace-thumbnails">
						{JSON.parse(this.props.user.favorites).map(fav => <FavoriteContent fav={fav}/>)}
					</ul>
				</div>
                </div>
                </div>
)}}

