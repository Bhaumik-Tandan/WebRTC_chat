(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{13:function(e,t,s){},28:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(22),r=s.n(c),i=(s(28),s(5)),o=s(6),p=s(4),d=s(8),l=s(7),u=(s(13),s(1)),h=function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("label",{for:"pid",children:"Your Prop"}),Object(u.jsx)("textarea",{name:"pid",value:this.props.con.state.c}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{for:"rid",children:"Room Id"}),Object(u.jsx)("textarea",{name:"rid",id:"lk"}),Object(u.jsx)("button",{type:"submit",onClick:this.props.server.cal,children:"Connect"})]})}}]),s}(n.Component),b=(s(14),s(12)),j=function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).send=n.send.bind(Object(p.a)(n)),n.cal=n.cal.bind(Object(p.a)(n)),n}return Object(o.a)(s,[{key:"send",value:function(e){this.props.app.setState({messages:this.props.app.state.messages.concat([{text:e,id:"1",sender:{name:"ME",uid:"user1",avatar:"https://cdn.dribbble.com/users/1041205/screenshots/3636353/dribbble.jpg"}}])}),this.props.sendChannel.send(e)}},{key:"cal",value:function(){var e=this;this.props.app.setState({r:document.getElementById("lk").value}),this.props.lc.setRemoteDescription(JSON.parse(document.getElementById("lk").value)).then((function(t){return e.props.app.chat()}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:["This is server",this.props.app.state.rd?Object(u.jsx)(h,{con:this.props.app,server:this}):"",this.props.app.state.rd?"":Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"chat-header",children:Object(u.jsx)("h5",{children:"Chat"})}),Object(u.jsx)("div",{id:"ko",children:Object(u.jsx)(b.a,{onSubmit:this.send,messages:this.props.app.state.messages},this.props.app.state.messages.length)})]})]})}}]),s}(n.Component),m=new RTCPeerConnection({iceServers:[{urls:"stun:74.125.142.127:19302"}]}),O=m.createDataChannel("sendChannel"),f=function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={rd:!0,c:"",r:"",messages:[],server:!0,client:!1},n.chat=n.chat.bind(Object(p.a)(n)),m.onicecandidate=function(e){n.setState({c:JSON.stringify(m.localDescription)})},O.onmessage=function(e){n.setState({messages:n.state.messages.concat([{text:e.data,id:"1",sender:{name:"He",uid:"user2",avatar:"https://i.guim.co.uk/img/media/d31ebd49b32a5aa609a584ababb1e03bc70b4942/573_213_2929_1758/master/2929.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=a54fc963e39dd6645fce012663ed13c1"}}])}),console.log(n.state.messages)},O.onopen=function(e){return console.log("open!!!!")},O.onclose=function(e){return console.log("closed!!!!!!")},m.createOffer().then((function(e){return m.setLocalDescription(e)})),n}return Object(o.a)(s,[{key:"chat",value:function(){this.setState({rd:!1})}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[this.state.rd?Object(u.jsx)("button",{onClick:this.setCerver,children:"Server"}):"",this.state.rd?Object(u.jsx)("button",{onClick:this.setClient,children:"Client"}):"",this.state.server?Object(u.jsx)(j,{app:this,lc:m,sendChannel:O}):""]})}}]),s}(n.Component),v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,68)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),v()}},[[67,1,2]]]);
//# sourceMappingURL=main.2feff992.chunk.js.map