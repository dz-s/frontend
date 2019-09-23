(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{31:function(t,e,n){t.exports=n(58)},36:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(26),i=n.n(o),s=(n(36),n(4)),u=n.n(s),c=n(10),l=n(5),p=n(6),h=n(8),f=n(7),m=n(11),v=n(9),d=n(2),g=n(3);function y(){var t=Object(d.a)(["\n  display: inline-block;\n  color: hotpink;\n  letter-spacing: 1px;\n  margin-right: 1rem;\n"]);return y=function(){return t},t}function b(){var t=Object(d.a)(["\n  height: 100%;\n  width: 100%;\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  overflow: hidden;\n"]);return b=function(){return t},t}var k=g.a.div(b()),O=g.a.div(y());function E(){var t=Object(d.a)(['\n  font-family: "Roboto", sans-serif;\n']);return E=function(){return t},t}function j(){var t=Object(d.a)(["\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2.5vh;\n"]);return j=function(){return t},t}var w=g.a.div(j()),P=g.a.div(E()),x=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).ref=void 0,n.ref=a.a.createRef(),n.state={autoplay:!1,volume:1},n}return Object(v.a)(e,t),Object(p.a)(e,[{key:"getVideoNode",value:function(){return this.ref.current}},{key:"onVolumeChange",value:function(){var t=this.getVideoNode();t&&(t.muted?this.setState({volume:0}):this.setState({volume:t.volume}))}},{key:"componentDidUpdate",value:function(){this.props.playing&&!this.state.autoplay&&this.setState({autoplay:!0});var t=this.getVideoNode();t&&(this.props.playing?t.play():t.pause(),t.volume=this.state.volume)}},{key:"render",value:function(){var t=this;return a.a.createElement(w,null,a.a.createElement("video",{playsInline:!0,ref:this.ref,key:this.props.source,controls:!0,autoPlay:this.state.autoplay,loop:this.props.looping,muted:!1,preload:"auto",onPlay:function(){return t.props.onPlay()},onPause:function(){return t.props.onPause()},onEnded:function(){return t.props.moveCursor(1)},onError:function(){return t.props.moveCursor(1)},onVolumeChange:function(){return t.onVolumeChange()},poster:this.props.poster,style:{maxHeight:"70vh",minHeight:"40vh",maxWidth:"90vw",borderRadius:"5px"}},a.a.createElement("source",{src:this.props.source})),a.a.createElement(P,null,this.props.name),a.a.createElement(P,null,a.a.createElement("a",{href:"http://www.google.com/searchbyimage?image_url=".concat(this.props.poster),target:"_blank",style:{textDecoration:"none"}},"\ud83d\udd0e")))}}]),e}(a.a.Component);function C(){var t=Object(d.a)(["\n  color: hotpink;\n  letter-spacing: 1px;\n  margin-right: 1rem;\n  display: inline-block;\n\n  &:hover {\n    color: orange;\n  }\n  &:link {\n    color: hotpink;\n  }\n  &:visited {\n    color: red;\n  }\n"]);return C=function(){return t},t}function S(){var t=Object(d.a)(["\n  text-align: center;\n  position: fixed;\n  bottom: 5vh;\n  left: 50%;\n  transform: translateX(-50%);\n"]);return S=function(){return t},t}var D=g.a.div(S()),L=g.a.div(C()),V=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={},n}return Object(v.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement(D,null,a.a.createElement(L,null,a.a.createElement("span",{onClick:function(){return t.props.moveCursor(-1)}},"\u25c0")),a.a.createElement(L,null,"|"),a.a.createElement(L,null,a.a.createElement("span",{onClick:function(){return t.props.moveCursor(1)}},"\u25b6")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(L,null,a.a.createElement("span",{onClick:function(){return t.props.toggleLoop()},style:{color:this.props.looping?"hotpink":"orange"}},this.props.looping?"LOOPING":"LOOP")),a.a.createElement(L,null,a.a.createElement("a",{href:this.props.source,download:!0,target:"_blank",style:{color:"hotpink",textDecoration:"none"}},"DOWNLOAD")))}}]),e}(a.a.Component),N=n(15),M=n.n(N),A=function(){function t(){Object(l.a)(this,t)}return Object(p.a)(t,null,[{key:"shuffle",value:function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),r=[t[n],t[e]];t[e]=r[0],t[n]=r[1]}return t}}]),t}(),I=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={playing:!1,looping:!0,board:"b",playlist:[],cursor:0},document.addEventListener("keydown",n.handleKeyDown.bind(Object(m.a)(n))),n}return Object(v.a)(e,t),Object(p.a)(e,[{key:"handleKeyDown",value:function(t){if("VIDEO"!==t.target.tagName)switch(t.code){case"ArrowLeft":this.moveCursor(-1);break;case"ArrowRight":this.moveCursor(1);break;case"Space":this.state.playing?this.onPause():this.onPlay()}}},{key:"onPlay",value:function(){this.setState({playing:!0})}},{key:"onPause",value:function(){this.setState({playing:!1})}},{key:"moveCursor",value:function(t){var e=this.state.cursor+t;e<0||e>=this.state.playlist.length||this.setState({cursor:e})}},{key:"toggleLoop",value:function(){this.setState({looping:!this.state.looping})}},{key:"fetchPlaylist",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e,n,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://one.karasique.io/0/".concat(this.state.board),t.next=3,M.a.get(e);case 3:return n=t.sent.data,r=n.map((function(t){return M.a.get("".concat(e,"/").concat(t.id)).then((function(t){return{value:t.data,status:1}}),(function(t){return{e:t,status:0}}))})),t.next=7,Promise.all(r);case 7:return t.t0=function(t){return 1===t.status&&t.value.posts.length>0},t.t1=function(t){return t.value.posts},t.t2=function(t){return!t.content.includes("FAP")&&!t.content.includes("\u0424\u0410\u041f")&&!t.content.includes("\u0422\u0420\u0410\u041f")},t.t3=function(t){return t.files},a=t.sent.filter(t.t0).flatMap(t.t1).filter(t.t2).flatMap(t.t3),t.abrupt("return",a.filter((function(t){return"video"===t.kind})).map((function(t){return{source:t.full,name:t.name,poster:t.thumbnail}})));case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setPlaylist",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({playlist:[]}),t.next=3,this.fetchPlaylist();case 3:e=t.sent,this.setState({playlist:A.shuffle(e),cursor:0});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var t=Object(c.a)(u.a.mark((function t(e,n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.board!==n.board){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.setPlaylist();case 4:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(c.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setPlaylist();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,n=e.playlist[e.cursor];return n?a.a.createElement(k,null,["b","mu","mov","vg"].map((function(e){return a.a.createElement(O,{key:e},a.a.createElement("span",{onClick:function(){return t.setState({board:e})},style:{color:t.state.board===e?"hotpink":"orange"}},"/".concat(e,"/")))})),a.a.createElement(x,{source:n.source,name:n.name,poster:n.poster,playing:this.state.playing,looping:this.state.looping,onPlay:this.onPlay.bind(this),onPause:this.onPause.bind(this),moveCursor:this.moveCursor.bind(this)}),a.a.createElement(V,{source:n.source,playing:this.state.playing,looping:this.state.looping,moveCursor:this.moveCursor.bind(this),toggleLoop:this.toggleLoop.bind(this)})):"Loading..."}}]),e}(a.a.Component);i.a.render(a.a.createElement(I,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.669ef9c6.chunk.js.map