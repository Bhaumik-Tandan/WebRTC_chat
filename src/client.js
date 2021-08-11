import './App.css';
import Remote from './room';
import 'react-chatbox-component/dist/style.css';
import {ChatBox} from 'react-chatbox-component';
import React, { Component } from 'react';
class Client extends Component  {
    constructor(p)
    {
      super(p);
      this.send= this.send.bind(this);
      this.cal= this.cal.bind(this);
    }
    send(e)
  {
    this.props.app.setState({ 
      messages: this.props.app.state.messages.concat([{
       "text":e,
       "id":"1",
       "sender": {
         "name": "ME",
         "uid": "user1",
         "avatar": "https://cdn.dribbble.com/users/1041205/screenshots/3636353/dribbble.jpg",
       }
     }])
     });
     this.props.sendChannel.send(e);
  }
  cal()
  {
    this.props.app.setState({r:document.getElementById("lk").value});
      this.props.lc.setRemoteDescription (JSON.parse(document.getElementById("lk").value)).then(a=>this.props.app.chat());        
}
    render()
  {
    return (
      <div className="App">
          This is client
           {this.props.app.state.rd?<Remote con={this.props.app} server={this}></Remote>:""}
           {this.props.app.state.rd?
        ""
        :
        <div className='container'>  
        <div className='chat-header'>   
        <h5>Chat</h5> 
        </div>  
        <div id="ko">
        <ChatBox key={this.props.app.state.messages.length} onSubmit={this.send} messages={this.props.app.state.messages} />
        </div>
        </div>}
      </div>
    );
  }
}
  export default Client;