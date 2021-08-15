import './App.css';
import Server from './server';
import React, { Component } from 'react';
import Client from './client';
import 'react-chatbox-component/dist/style.css';
import {MongoClient} from "mongodb";
// var c = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Arishti:18BIT0223@cluster0.bip95.mongodb.net/proj?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
    // var url = "mongodb+srv://Arishti:18BIT0223@cluster0.bip95.mongodb.net/proj?retryWrites=true&w=majority";
// c.connect(url, function(err, db) {
//  if (err) throw err;
//  var s = db.db("coldb");
//  s.collection("col").find().limit(4).toArray(function(err,result) {
//  if (err) throw err;
//  console.log(result);
//  });
// });
const lc=new RTCPeerConnection()
const dc=lc.createDataChannel("channel")
lc.onicecandidate=e=>console.log("hjgjg "+JSON.stringify(lc.localDescription))
lc.createOffer().then(o=>lc.setLocalDescription(o)).then(a=>console.log("set"))
const localConnection = new RTCPeerConnection({ 'iceServers': [{ 'urls': 'stun:74.125.142.127:19302' }] });
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
    this.setClient= this.setClient.bind(this);
    this.setServer= this.setServer.bind(this);
  }
  chat()
  {
    this.setState({rd: false});
  }

  setServer()
  {
    this.setState({server: true,client:false});
  }

  setClient()
  {
    this.setState({client: true,server:false});
  }

  render()
  {
    return(
      <div className="App">
       {this.state.rd?<button onClick={this.setServer}>Server</button>:""}{this.state.rd?<button  onClick={this.setClient}>Client</button>:""}
        {this.state.server?<Server app={this} lc={localConnection}></Server>:""}
        {this.state.client?<Client app={this} lc={localConnection}></Client>:""}
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