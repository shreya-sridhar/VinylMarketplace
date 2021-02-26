import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const profilePic = 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
export default class FriendCard extends React.Component {

    render(){
        return(
            <div class="col-md">
                    <div class="user">
                        <a href="#">
                            <img src={profilePic} alt="avatar" width="130"></img>
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