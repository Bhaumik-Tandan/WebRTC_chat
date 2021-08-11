import React, { Component } from 'react';
class Remote extends Component  {
    constructor(p)
    {
      super(p);
      this.cal= this.cal.bind(this);
    }
    cal() {
        this.props.con.setState({r:document.getElementById("lk").value});
          this.props.lc.setRemoteDescription (JSON.parse(document.getElementById("lk").value)).then(a=>this.props.con.chat());        
    }
    render()
  {
    return (
      <div className="App">
          <label for="pid">Your Prop</label>
          <textarea name="pid" value={this.props.con.state.c}/><br></br>
        <label for="rid">Room Id</label>
        <textarea name="rid" id="lk"/>
        <button type="submit" onClick={this.cal}>Connect</button>
      </div>
    );
  }
}
  export default Remote;
  // const remoteConnection = new RTCPeerConnection()

  // remoteConnection.onicecandidate = e =>  {
  // console.log(" NEW ice candidnat!! on localconnection reprinting SDP " )
  //  console.log(JSON.stringify(remoteConnection.localDescription) )
  // }
  
   
  // remoteConnection.ondatachannel= e => {
  
  //       const receiveChannel = e.channel;
  //       receiveChannel.onmessage =e =>  console.log("messsage received!!!"  + e.data )
  //       receiveChannel.onopen = e => console.log("open!!!!");
  //       receiveChannel.onclose =e => console.log("closed!!!!!!");
  //       remoteConnection.channel = receiveChannel;
  
  // }
  
  
  // remoteConnection.setRemoteDescription(offer).then(a=>console.log("done"))
  // await remoteConnection.createAnswer().then(a => remoteConnection.setLocalDescription(a)).then(a=>
  //   console.log(JSON.stringify(remoteConnection.localDescription).split("\\").join('\\\\')))