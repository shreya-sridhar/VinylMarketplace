import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from './Carousel.js'
import Friends from '../components/Friends.js'
import Favorites from '../containers/Favorites.js'
import Bio from '../containers/Bio.js'
const profilePic = 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'

export default class UserHome extends React.Component {

    render() {
        return (
            <div class="whole1">
                <div class="container" style={{padding: 100}}>
                    <h4 class="t" style={{textAlign: 'left', paddingLeft: 20}}>
                        <span class="middle"><h2>{this.props.user.username}</h2></span>
                        <span class="label label-purple arrowed-in-right">
									<br></br><i class="ace-icon fa fa-circle smaller-80 align-middle green"></i>&nbsp;
                            online
								</span>
                        <br></br><br></br>
                    </h4>
                    <div id="user-profile-2" class="user-profile">
                        <div class="tabbable">
                            <ul class="nav nav-tabs padding-18">
                                <li class="active">
                                    <a onClick={() => this.props.handleTabClick("profile")} data-toggle="tab"
                                       href="#home">
                                        <i class="green ace-icon fa fa-user bigger-120"></i>
                                        Profile
                                    </a>
                                </li>

                                <li>
                                    <a onClick={() => this.props.handleTabClick("friends")} data-toggle="tab"
                                       href="#friends">
                                        <i class="blue ace-icon fa fa-users bigger-120"></i>
                                        Friends
                                    </a>
                                </li>

                                <li>
                                    <a onClick={() => this.props.handleTabClick("favorites")} data-toggle="tab"
                                       href="#pictures">
                                        <i class="fas fa-star yellow"></i>
                                        Favorites
                                    </a>
                                </li>
                            </ul>

                            <div class="tab-content no-border padding-24">
                                <div id="home" class="tab-pane in active">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-3 center">
							<span class="profile-picture">
								<img class="editable img-responsive" alt=" Avatar" id="avatar2"
                                     src={profilePic}
                                     style={{maxWidth: 130}}></img>
							</span>

                                            <div class="space space-4"></div>

                                            <a href="#" class="btn btn- btn-block btn-success white">
                                                <i class="ace-icon fa fa-plus-circle bigger-120"></i>
                                                <span class="bigger-110"
                                                >Add as a friend</span>
                                            </a>

                                            <a href="#" class="btn btn-block btn-primary">
                                                <i class="ace-icon fa fa-envelope-o bigger-110"></i>
                                                <span class="bigger-110 white">Send a message</span>
                                            </a>
                                        </div>
                                        {this.props.page === 1 ? <Bio user={this.props.user}/> : this.props.page === 2 ?
                                            <Friends user={this.props.user} users={this.props.users}/> : <Favorites user={this.props.user}/>}
                                    </div>
                                    <div class="space-20"></div>

                                    <div class="row">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel nums={this.props.records.length} content={this.props.content1} 
                          size={200} handleRightClick={this.props.handleRightClick}
                          handleLeftClick={this.props.handleLeftClick} pageTag={"user1"}
                          user1Page={this.props.user1Page} records={this.props.records}/>
                <Carousel records={this.props.sell_records.filter(r => r.user.id === this.props.user.id).map(r => r.record)}  nums={this.props.records.length} content={this.props.content2}
                          size={200} handleRightClick={this.props.handleRightClick}
                          handleLeftClick={this.props.handleLeftClick} pageTag={"user2"}
                          user2Page={this.props.user2Page}/>
            </div>
        )
    }
}

