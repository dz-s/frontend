(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{31:function(t,e,n){t.exports=n(58)},36:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(25),i=n.n(o),s=(n(36),n(10)),u=n.n(s),c=n(26),l=n(4),p=n(5),h=n(7),f=n(6),v=n(8),m=n(2),d=n(3);function y(){var t=Object(m.a)(["\n  display: block;\n  margin: 0 auto;\n  width: 90vw;\n  text-align: center;\n"]);return y=function(){return t},t}var g=d.a.div(y()),b=n(9);function k(){var t=Object(m.a)(["\n  \n"]);return k=function(){return t},t}function O(){var t=Object(m.a)(["\n  height: 100%;\n  width: 100%;\n  \n  max-height: 70vh;\n"]);return O=function(){return t},t}var j=d.a.div(O()),E=d.a.div(k()),w=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).ref=void 0,n.ref=a.a.createRef(),n.state={autoplay:!1},document.addEventListener("keydown",n.handleKeyDown.bind(Object(b.a)(n))),n}return Object(v.a)(e,t),Object(p.a)(e,[{key:"handleKeyDown",value:function(t){switch(t.code){case"ArrowLeft":this.props.moveCursor(-1);break;case"ArrowRight":this.props.moveCursor(1);break;case"Space":this.props.playing?this.props.onPause():this.props.onPlay()}}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){var t=this.ref.current;t&&(this.props.playing?t.play():t.pause()),this.props.playing&&!this.state.autoplay&&this.setState({autoplay:!0})}},{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement(j,null,a.a.createElement("video",{ref:this.ref,key:this.props.source,controls:!0,autoPlay:this.state.autoplay,loop:this.props.looping,muted:!1,preload:"auto",onPlay:function(){return t.props.onPlay()},onPause:function(){return t.props.onPause()},onEnded:function(){return t.props.moveCursor(1)},poster:this.props.poster,style:{maxHeight:"70vh"}},a.a.createElement("source",{src:this.props.source}))),a.a.createElement(E,null,this.props.name))}}]),e}(a.a.Component);function C(){var t=Object(m.a)(["\n  color: hotpink;\n  font-size: 1.25rem;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-right: 1rem;\n  display: inline-block;\n  text-decoration: none;\n\n  &:hover {\n    color: orange;\n  }\n  &:link {\n    color: hotpink;\n  }\n  &:visited {\n    color: red;\n  }\n"]);return C=function(){return t},t}function P(){var t=Object(m.a)(["\n  text-align: center;\n  padding: 1.5rem;\n  position: relative;\n  margin: 0;\n  vertical-align: baseline;\n"]);return P=function(){return t},t}var x=d.a.div(P()),L=d.a.div(C()),D=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={},n}return Object(v.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement(x,null,a.a.createElement(L,null,a.a.createElement("span",{onClick:function(){return t.props.moveCursor(-1)}},"BACK")),a.a.createElement(L,null,a.a.createElement("span",{onClick:function(){return t.props.toggleLoop()}},"LOOP")),a.a.createElement(L,null,a.a.createElement("a",{href:this.props.source,target:"_blank",style:{color:"hotpink",textDecoration:"none"}},"DOWNLOAD")),a.a.createElement(L,null,a.a.createElement("span",{onClick:function(){return t.props.moveCursor(1)}},"NEXT")))}}]),e}(a.a.Component),S=n(14),M=n.n(S),A=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(f.a)(e).call(this,t))).state={playing:!1,looping:!0,playlist:[],cursor:0},n}return Object(v.a)(e,t),Object(p.a)(e,[{key:"onPlay",value:function(){this.setState({playing:!0})}},{key:"onPause",value:function(){this.setState({playing:!1})}},{key:"moveCursor",value:function(t){var e=this.state.cursor+t;e<0||e>=this.state.playlist.length||this.setState({cursor:e})}},{key:"toggleLoop",value:function(){this.setState({looping:!this.state.looping})}},{key:"shuffle",value:function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),r=[t[n],t[e]];t[e]=r[0],t[n]=r[1]}return t}},{key:"componentDidMount",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e,n,r,a,o,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="",n="https://one.karasique.io/0/b",t.next=5,M.a.get("".concat(e).concat(n));case 5:return r=t.sent.data,a=r.slice(0,19).map((function(t){return M.a.get("".concat(e).concat(n,"/").concat(t.id)).then((function(t){return{value:t.data,status:1}}),(function(t){return{e:t,status:0}}))})),t.next=9,Promise.all(a);case 9:t.t0=function(t){return 1===t.status},t.t1=function(t){return t.value.posts.map((function(t){return t.files}))},o=t.sent.filter(t.t0).flatMap(t.t1).flat(),i=o.filter((function(t){return"video"===t.kind})).map((function(t){return{source:t.full,name:t.name,poster:t.thumbnail}})),this.setState({playlist:this.shuffle(i)});case 14:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.playlist[t.cursor];return e?a.a.createElement(g,null,a.a.createElement(w,{source:e.source,name:e.name,poster:e.poster,playing:this.state.playing,looping:this.state.looping,onPlay:this.onPlay.bind(this),onPause:this.onPause.bind(this),moveCursor:this.moveCursor.bind(this)}),a.a.createElement(D,{source:e.source,playing:this.state.playing,moveCursor:this.moveCursor.bind(this),toggleLoop:this.toggleLoop.bind(this)})):"Loading..."}}]),e}(a.a.Component);document.title="Karasique",i.a.render(a.a.createElement(A,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.9f85a5fe.chunk.js.map