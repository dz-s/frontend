(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{31:function(t,e,n){t.exports=n(58)},36:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(26),i=n.n(o),s=(n(36),n(2)),u=n.n(s),c=n(7),l=n(5),p=n(6),h=n(9),f=n(8),m=n(12),d=n(10),v=n(3),g=n(4);function y(){var t=Object(v.a)(["\n  display: inline-block;\n  color: hotpink;\n  letter-spacing: 1px;\n  margin-right: 1rem;\n"]);return y=function(){return t},t}function b(){var t=Object(v.a)(["\n  height: 100%;\n  width: 100%;\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  overflow: hidden;\n"]);return b=function(){return t},t}var k=g.a.div(b()),O=g.a.div(y());function j(){var t=Object(v.a)(['\n  font-family: "Roboto", sans-serif;\n']);return j=function(){return t},t}function E(){var t=Object(v.a)(["\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2.5vh;\n"]);return E=function(){return t},t}var w=g.a.div(E()),x=g.a.div(j()),P=n(11),C=n.n(P),S=function(){function t(){Object(l.a)(this,t)}return Object(p.a)(t,null,[{key:"shuffle",value:function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),r=[t[n],t[e]];t[e]=r[0],t[n]=r[1]}return t}},{key:"fetchSize",value:function(){var t=Object(c.a)(u.a.mark((function t(e){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.head("https://cors-anywhere.herokuapp.com/".concat(e));case 2:return n=t.sent,r=n.headers,t.abrupt("return",parseInt(r["content-length"]));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"formatSize",value:function(t){if(0===t)return"0 Bytes";var e=Math.floor(Math.log(t)/Math.log(1e3));return"".concat(parseFloat((t/Math.pow(1e3,e)).toFixed(2))," ").concat(["Bytes","KB","MB"][e])}}]),t}(),z=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).ref=void 0,n.ref=a.a.createRef(),n.state={autoplay:!1,volume:1,size:0},n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"getVideoNode",value:function(){return this.ref.current}},{key:"onVolumeChange",value:function(){var t=this.getVideoNode();t&&(t.muted?this.setState({volume:0}):this.setState({volume:t.volume}))}},{key:"componentDidUpdate",value:function(){var t=Object(c.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.media.source!==this.props.media.source){t.next=2;break}return t.abrupt("return");case 2:return this.props.playing&&!this.state.autoplay&&this.setState({autoplay:!0}),t.t0=this,t.next=6,S.fetchSize(this.props.media.source);case 6:if(t.t1=t.sent,t.t2={size:t.t1},t.t0.setState.call(t.t0,t.t2),n=this.getVideoNode()){t.next=12;break}return t.abrupt("return");case 12:this.props.playing?n.play():n.pause(),n.volume=this.state.volume;case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(c.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,S.fetchSize(this.props.media.source);case 3:t.t1=t.sent,t.t2={size:t.t1},t.t0.setState.call(t.t0,t.t2);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return a.a.createElement(w,null,a.a.createElement("video",{playsInline:!0,ref:this.ref,key:this.props.media.source,controls:!0,autoPlay:this.state.autoplay,loop:this.props.looping,muted:!1,preload:"auto",onPlay:function(){return t.props.onPlay()},onPause:function(){return t.props.onPause()},onEnded:function(){return t.props.moveCursor(1)},onError:function(){return t.props.moveCursor(1)},onVolumeChange:function(){return t.onVolumeChange()},poster:this.props.media.poster,style:{maxHeight:"70vh",minHeight:"40vh",maxWidth:"90vw",borderRadius:"5px"}},a.a.createElement("source",{src:this.props.media.source})),a.a.createElement(x,null,this.props.media.name," | ",S.formatSize(this.state.size)),a.a.createElement(x,null,a.a.createElement("a",{href:"https://www.google.com/searchbyimage?image_url=".concat(this.props.media.poster),target:"_blank",style:{textDecoration:"none"}},"\ud83d\udd0e")))}}]),e}(a.a.Component);function D(){var t=Object(v.a)(["\n  color: hotpink;\n  letter-spacing: 1px;\n  margin-right: 1rem;\n  display: inline-block;\n\n  &:hover {\n    color: orange;\n  }\n  &:link {\n    color: hotpink;\n  }\n  &:visited {\n    color: red;\n  }\n"]);return D=function(){return t},t}function L(){var t=Object(v.a)(["\n  text-align: center;\n  position: fixed;\n  bottom: 5vh;\n  left: 50%;\n  transform: translateX(-50%);\n"]);return L=function(){return t},t}var M=g.a.div(L()),I=g.a.div(D()),V=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={},n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement(M,null,a.a.createElement(I,null,a.a.createElement("span",{onClick:function(){return t.props.moveCursor(-1)}},"\u25c0")),a.a.createElement(I,null,"|"),a.a.createElement(I,null,a.a.createElement("span",{onClick:function(){return t.props.moveCursor(1)}},"\u25b6")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(I,null,a.a.createElement("span",{onClick:function(){return t.props.toggleLoop()},style:{color:this.props.looping?"hotpink":"orange"}},this.props.looping?"LOOPING":"LOOP")),a.a.createElement(I,null,a.a.createElement("a",{href:this.props.source,download:!0,target:"_blank",style:{color:"hotpink",textDecoration:"none"}},"DOWNLOAD")))}}]),e}(a.a.Component),N=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={playing:!1,looping:!0,board:"b",playlist:[],cursor:0,isIOS:!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)},document.addEventListener("keydown",n.handleKeyDown.bind(Object(m.a)(n))),n.fetchPlaylist(n.state.board).then((function(t){n.setState({playlist:S.shuffle(t),cursor:0})})),n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"handleKeyDown",value:function(t){if("VIDEO"!==t.target.tagName)switch(t.code){case"ArrowLeft":this.moveCursor(-1);break;case"ArrowRight":this.moveCursor(1);break;case"Space":this.state.playing?this.onPause():this.onPlay()}}},{key:"onPlay",value:function(){this.setState({playing:!0})}},{key:"onPause",value:function(){this.setState({playing:!1})}},{key:"moveCursor",value:function(t){var e=this.state.cursor+t;e<0||e>=this.state.playlist.length||this.setState({cursor:e})}},{key:"toggleLoop",value:function(){this.setState({looping:!this.state.looping})}},{key:"fetchPlaylist",value:function(){var t=Object(c.a)(u.a.mark((function t(e){var n,r,a,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://one.karasique.io/0/".concat(e),t.next=3,C.a.get(n);case 3:return r=t.sent.data,a=r.filter((function(t){return["\u0424\u0410\u041f","\u0410\u0424\u0413","\u0422\u0420\u0410\u041f","FAP"].every((function(e){return!t.content.includes(e)}))})).map((function(t){return C.a.get("".concat(n,"/").concat(t.id)).then((function(t){return{value:t.data,status:!0}}),(function(t){return{e:t,status:!1}}))})),t.next=7,Promise.all(a);case 7:return t.t0=function(t){return t.status&&t.value.posts.length},t.t1=function(t){return t.value.posts},t.t2=function(t){return t.files},t.t3=function(t){return"video"===t.kind},o=t.sent.filter(t.t0).flatMap(t.t1).flatMap(t.t2).filter(t.t3),this.state.isIOS&&(o=o.filter((function(t){return t.full.endsWith("mp4")}))),t.abrupt("return",o.map((function(t){return{source:t.full,name:t.name,poster:t.thumbnail,size:0}})));case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var t=Object(c.a)(u.a.mark((function t(e,n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.board!==this.state.board){t.next=2;break}return t.abrupt("return");case 2:return this.setState({playlist:[]}),t.t0=this,t.t1=S,t.next=7,this.fetchPlaylist(this.state.board);case 7:t.t2=t.sent,t.t3=t.t1.shuffle.call(t.t1,t.t2),t.t4={playlist:t.t3,cursor:0},t.t0.setState.call(t.t0,t.t4);case 11:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,n=e.playlist[e.cursor];return n?a.a.createElement(k,null,["b","mu","mov","vg"].map((function(e){return a.a.createElement(O,{key:e},a.a.createElement("span",{onClick:function(){return t.setState({board:e})},style:{color:t.state.board===e?"hotpink":"orange"}},"/".concat(e,"/")))})),a.a.createElement(z,{media:n,playing:this.state.playing,looping:this.state.looping,onPlay:this.onPlay.bind(this),onPause:this.onPause.bind(this),moveCursor:this.moveCursor.bind(this)}),a.a.createElement(V,{source:n.source,playing:this.state.playing,looping:this.state.looping,moveCursor:this.moveCursor.bind(this),toggleLoop:this.toggleLoop.bind(this)})):"Loading..."}}]),e}(a.a.Component);i.a.render(a.a.createElement(N,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.83c9ed6c.chunk.js.map