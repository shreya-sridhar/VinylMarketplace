import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const API = "http://localhost:3001"
export const API_ROOT = 'http://localhost:3000';
export const API_WS_ROOT = 'ws://localhost:3000/cable';
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};


class Messages extends React.Component {
// shouldComponentUpdate(nextProps, nextState)
// {
//    return false
// }

    formatAMPM = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }

      state = {
       message:""
      };

      handleChange = (e) => {
        this.setState({
          message : e.target.value
        });
      };

      sendMessage = (e,state) => {
        fetch("http://localhost:3002/messages", {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: JSON.stringify({"message[content]":state.message}),
        })
        .then((resp) => resp.json())
          .then((data) => {
            console.log(data)
          })
       }
    
      
    render() {
        
        return (
                               
<div class="container bootstrap snippets bootdey">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="portlet portlet-default">
                <div class="portlet-heading">
                    <div class="portlet-title">
                        <h4><i class="fa fa-circle text-green"></i>{this.props.user.username}</h4>
                    </div>
                    <div class="portlet-widgets">
                        <span class="divider"></span>
                        <a data-toggle="collapse" data-parent="#accordion" href="#chat"><i class="fa fa-chevron-down"></i></a>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div id="chat" >
                    <div>
                    <div class="portlet-body chat-widget" style={{overflowY: "auto", width: "auto", height: "300"}}>
                    
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="media">
                                    <a class="pull-left" href="#">
                                        <img class="media-object img-circle img-chat" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""></img>
                                    </a>
                                    <div id="content" class="media-body ">
                                        <h4 class="media-heading">{this.props.user.usernam}
                                            <span class="small pull-right">{this.formatAMPM(new Date)}</span>
                                        </h4>
                                        <p>This is the beginning of your conversation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        
                    </div>
                    </div>
                    <div class="portlet-footer">
                        <form onSubmit={(e) => this.sendMessage(e, this.state)} role="form">
                            <div class="form-group">
                                <textarea onChange={this.handleChange} class="form-control" placeholder="Enter message..."></textarea>
                            </div>
                            <div class="form-group">
                                
                            <input type="submit" value="Submit" />
                                <div class="clearfix"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>                
            )
    }
}

export default Messages;


