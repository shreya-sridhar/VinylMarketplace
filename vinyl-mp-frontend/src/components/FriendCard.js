import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class FriendCard extends React.Component {

    render(){
        return(
            <div class="col-md">
                    <div class="user">
                        <a href="#">
                            <img src="https://christopherscottedwards.com/wp-content/uploads/2018/07/Generic-Profile.jpg" alt="Bob Doe's avatar" width="200"></img>
                        </a>
                    </div>

                    <div class="body">
                        <div class="name">
                            <a href="#">
                                <span class="user-status status-online"></span>
                               {this.props.users.filter(u => u.id === this.props.friendid)[0].username}
                            </a>
                        </div>
                    </div>
            </div>
                    
        )
    }
}