import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FriendCard from '../components/FriendCard.js'

export default class Friends extends React.Component {
        
    render(){
       return(
		<div class="col-xs-12 col-sm-9">
		<div class="container" style={{minHeight:"auto",paddingLeft:100,overflowY:"scroll",maxHeight:400}}>
		<div class="container">
   <div class="row">
{JSON.parse(this.props.user.friends.split(' ,')[0]).map((friend) => <FriendCard friendid={friend} users={this.props.users}/>)}
	</div>
	</div>
                </div>
                </div>

       )
    }
}

