import './App.css';
import Remote from './room';
import Server from './server';
import React, { Component } from 'react';
import 'react-chatbox-component/dist/style.css';
import {ChatBox} from 'react-chatbox-component';
// const lc=new RTCPeerConnection()
// const dc=lc.createDataChannel("channel")
// lc.onicecandidate=e=>console.log("hjgjg "+JSON.stringify(lc.localDescription))
// lc.createOffer().then(o=>lc.setLocalDescription(o)).then(a=>console.log("set"))
const localConnection = new RTCPeerConnection({ 'iceServers': [{ 'urls': 'stun:74.125.142.127:19302' }] });
const sendChannel = localConnection.createDataChannel("sendChannel");
class App extends Component 
{
  constructor(p)
  {
    super(p);
    this.state = 
    {
      rd:true,
      c:"",
      r:"",
      messages:[],
      server:true,
      client:false
    }
    this.chat= this.chat.bind(this);
    localConnection.onicecandidate = e =>  {
      this.setState({c: JSON.stringify(localConnection.localDescription)});
      }
   
      sendChannel.onmessage =e =>  {
        this.setState({ 
         messages: this.state.messages.concat([{
          "text":e.data,
          "id":"1",
          "sender": {
            "name": "He",
            "uid": "user2",
            "avatar": "https://i.guim.co.uk/img/media/d31ebd49b32a5aa609a584ababb1e03bc70b4942/573_213_2929_1758/master/2929.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=a54fc963e39dd6645fce012663ed13c1",
          }
        }])
        });
        
        console.log(this.state.messages);  };
      sendChannel.onopen = e => console.log("open!!!!");
        sendChannel.onclose =e => console.log("closed!!!!!!");
   
   
   localConnection.createOffer().then(o => localConnection.setLocalDescription(o) );
  }
  chat()
  {
    this.setState({rd: false});
  }

  render()
  {
    return(
      <div className="App">
       {this.state.rd?<button onClick={this.setCerver}>Server</button>:""}{this.state.rd?<button  onClick={this.setClient}>Client</button>:""}
        {this.state.server?<Server app={this} lc={localConnection} sendChannel={sendChannel}></Server>:""}
        {/* {this.state.client?<Client app={this} lc={localConnection} sendChannel={sendChannel}></Client>:""} */}
        {/* {msg.map(item => (
        <li key={item}>{item}</li>
      ))} */}
      </div>
    );
  }
}

export default App;
//https://github.com/hnasr/javascript_playground/blob/master/webrtc/peerA_final.js
// remoteConnection.channel.send("sdfdas")
//https://www.npmjs.com/package/react-chatbox-component