(this.webpackJsonpcheri=this.webpackJsonpcheri||[]).push([[0],[,,,,,,,,,function(n,e,t){n.exports=t.p+"static/media/cart.16feb2c3.svg"},,,,,,function(n,e,t){n.exports=t(28)},,,,,,,function(n,e,t){var r={"./assets/cart.svg":9,"./swirl1.svg":23,"./swirl2.svg":24};function a(n){var e=i(n);return t(e)}function i(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}a.keys=function(){return Object.keys(r)},a.resolve=i,n.exports=a,a.id=22},function(n,e,t){n.exports=t.p+"static/media/swirl1.902be1f2.svg"},function(n,e,t){n.exports=t.p+"static/media/swirl2.1d6864ac.svg"},function(n,e,t){n.exports=t.p+"static/media/black.d7048d2b.mp4"},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);for(var r=t(0),a=t.n(r),i=t(10),o=t.n(i),c=t(3),l=t(1),u=Object(r.createContext)({metaphors:[]}),s=["cheri cheri feels like my pussy is purring","1","2","3","4","5"],f=6;f<100;f++)s.push("".concat(f));var d=function(n){var e=n.children,t=Object(r.useState)([]),i=Object(c.a)(t,2),o=i[0],l=i[1],s=function(){fetch("".concat("https://cheri-server.glitch.me","/get-metaphors")).then((function(n){return n.json()})).then((function(n){var e=n.map((function(n){return n.metaphor}));l(e)}))};return Object(r.useEffect)((function(){s()}),[]),a.a.createElement(u.Provider,{value:{addMetaphor:function(n){if(console.log(o,n),o.find((function(e){return e===n})))return alert("already there");(function(n){return fetch("".concat("https://cheri-server.glitch.me","/add-metaphor"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({metaphor:n})})})(n).then(s)},metaphors:o}},e)},m=t(2);function p(){var n=Object(l.a)(["\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  padding-top: 50px;\n  transition: color 1s;\n  font-size: 2rem;\n  &.cube__face--front {\n    transform: rotateY(0deg) translateZ(100px);\n  }\n  &.cube__face--right {\n    transform: rotateY(90deg) translateZ(100px);\n  }\n  &.cube__face--back {\n    transform: rotateY(180deg) translateZ(100px);\n  }\n  &.cube__face--left {\n    transform: rotateY(-90deg) translateZ(100px);\n  }\n  &.cube__face--top {\n    transform: rotateX(90deg) translateZ(100px);\n  }\n  &.cube__face--bottom {\n    transform: rotateX(-90deg) translateZ(100px);\n  }\n"]);return p=function(){return n},n}function h(){var n=Object(l.a)(["\n  cursor: grab;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  transform: translateZ(-100px);\n  transition: transform 1s;\n  &.show-front {\n    transform: translateZ(-100px) rotateY(0deg);\n  }\n  &.show-right {\n    transform: translateZ(-100px) rotateY(-90deg);\n  }\n  &.show-back {\n    transform: translateZ(-100px) rotateY(-180deg);\n  }\n  &.show-left {\n    transform: translateZ(-100px) rotateY(90deg);\n  }\n  &.show-top {\n    transform: translateZ(-100px) rotateX(-90deg);\n  }\n  &.show-bottom {\n    transform: translateZ(-100px) rotateX(90deg);\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(l.a)(["\n  width: 200px;\n  height: 200px;\n  perspective: 600px;\n  margin: auto;\n"]);return b=function(){return n},n}function v(){var n=Object(l.a)(["\n  background: black;\n  color: white;\n  text-align: center;\n  height: 420px;\n  .wrapper {\n    padding: 10%;\n  }\n"]);return v=function(){return n},n}var g=m.a.div(v()),E=m.a.div(b()),x=m.a.div(h()),w=m.a.div(p()),k=["show-back","show-right","show-left","show-top","show-bottom","show-front"],O=["cube__face--back","cube__face--right","cube__face--left","cube__face--top","cube__face--bottom","cube__face--front"],j=function(){var n=Object(r.useContext)(u).metaphors,e=Object(r.useState)(0),t=Object(c.a)(e,2),i=t[0],o=t[1],l=5*Math.floor(i/5),s=i*Math.floor(i/5)+5,f=n.slice(l,s),d=k[i%5];return a.a.createElement(g,null,a.a.createElement(E,{onClick:function(){var e=(i+1)%n.length;o(e)}},a.a.createElement(x,{className:d},f.map((function(n,e){return a.a.createElement(w,{key:n,style:{color:i%5===e?"white":"black"},className:O[e]},n)})))))};function y(){var n=Object(l.a)(["\n  text-transform: capitalize;\n  background: black;\n  border: white solid;\n  color: white;\n  padding: 0;\n  margin-top: 24px;\n  font-size: 1.6rem;\n  cursor: pointer;\n  width: 100px;\n  height: 54px; ;\n"]);return y=function(){return n},n}function _(){var n=Object(l.a)(["\n  background: black;\n  border: white solid;\n  color: white;\n  font-size: 1.5rem;\n  padding: 15px;\n  width: 66%;\n"]);return _=function(){return n},n}function z(){var n=Object(l.a)(["\n  font-size: 30px;\n  margin: 17px 0px;\n"]);return z=function(){return n},n}function C(){var n=Object(l.a)(["\n  transition: opacity 1s, transform 1s;\n  &.hidden {\n    opacity: 0;\n    transform: translateY(-100px);\n    visibility: hidden;\n  }\n  &.shown {\n    opacity: 1;\n  }\n"]);return C=function(){return n},n}function S(){var n=Object(l.a)(["\n  /* display: flex;\n  flex-wrap: wrap; */\n  display: grid;\n  grid-column-gap: 10px;\n  grid-row-gap: 10px;\n  grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));\n  width: 100%;\n  user-select: none;\n  cursor: pointer;\n  div {\n    border: white solid;\n    padding: 10px;\n    text-align: center;\n    /* margin: 10px; */\n    transition: background 1s;\n    /* &:first-of-type {\n      margin-left: 0px;\n    } */\n  }\n"]);return S=function(){return n},n}function N(){var n=Object(l.a)(["\n  font-size: 2rem;\n  padding-bottom: 10px;\n"]);return N=function(){return n},n}function T(){var n=Object(l.a)(["\n  margin: 15%;\n  width: 100%;\n"]);return T=function(){return n},n}function Z(){var n=Object(l.a)(["\n  color: white;\n  background: black;\n  display: flex;\n  padding: 40px;\n  text-transform: capitalize;\n  height: 400px;\n  transition: opacity 1s, height 1s;\n  form {\n    margin: auto;\n  }\n"]);return Z=function(){return n},n}var M=m.a.div(Z()),Y=m.a.div(T()),I=m.a.div(N()),U=m.a.div(S()),D=m.a.div(C()),H=m.a.div(z()),R=m.a.input(_()),X=m.a.button(y()),B=["is","feels","smells","tastes","tingles"],F=function(){var n=Object(r.useContext)(u).addMetaphor,e=Object(r.useState)(void 0),t=Object(c.a)(e,2),i=t[0],o=t[1],l=Object(r.useState)(""),s=Object(c.a)(l,2),f=s[0],d=s[1],m=Object(r.useRef)(),p=Object(r.useRef)(),h=function(n){return o(n.target.id)};return Object(r.useEffect)((function(){if("SUBMITTED"===i)return p.current.style.opacity=0,p.current.style.height=0,void setTimeout((function(){return p.current.style.display="none"}),1500);i&&m.current.focus()}),[i]),a.a.createElement(M,{ref:p},a.a.createElement(Y,null,a.a.createElement(I,null,"Add a metaphor"),a.a.createElement(U,null,B.map((function(n){return a.a.createElement("div",{key:n,id:n,onClick:h,style:{background:i===n?"red":"black"}},n)}))),a.a.createElement(D,{className:i?"shown":"hidden"},a.a.createElement(H,null,"like"),a.a.createElement(R,{ref:m,onChange:function(n){return d(n.target.value)},name:"metaphor",id:"metaphor"}),a.a.createElement("div",null,a.a.createElement(X,{onClick:function(){n("cheri cheri ".concat(i," like ").concat(f)),o("SUBMITTED")}},"add")))))},L=function(){return a.a.createElement("div",null,a.a.createElement(d,null,a.a.createElement(F,null),a.a.createElement(j,null)))},G=t(5);function J(n){var e=n.width,r=void 0===e?34:e,i=n.fill,o=void 0===i?"black":i;return a.a.createElement("div",{style:{width:r,fill:o,transition:"fill .3s"}},a.a.createElement(G.a,{src:t(9)}))}function P(){var n=Object(l.a)(["\n  background: ",";\n  color: ",';\n  display: inherit;\n  margin: inherit;\n  border: none;\n  padding: 0px;\n  border-radius: 40px;\n  width: 170px;\n  height: 39px;\n  font-family: "Oswald";\n  font-weight: 300;\n  font-size: 18px; ;\n']);return P=function(){return n},n}var W=m.a.button(P(),(function(n){return n.background}),(function(n){return n.color})),q=function(n){var e=n.children,t=n.background,r=void 0===t?"black":t,i=n.color,o=void 0===i?"white":i,c=n.onClick;return a.a.createElement(W,{background:r,color:o,onClick:c},e)},A=function(n){var e=n.inverted,t=void 0!==e&&e,r=t?"black":"white",i=t?"white":"black";return a.a.createElement(q,{color:r,background:i,onClick:function(){return alert("GET SOME")}},"GET SOME")};function K(){var n=Object(l.a)(["\n  color: white;\n  font-family: Oswald;\n"]);return K=function(){return n},n}var Q=m.a.a(K()),V=function(n){var e=n.name;return a.a.createElement(Q,null,e.split("-").join(" ").toUpperCase())};function $(){var n=Object(l.a)(["\n  margin: 20px;\n"]);return $=function(){return n},n}function nn(){var n=Object(l.a)(["\n  position: absolute;\n  left: ","px;\n  color: white;\n  top: 94px;\n  transition: left 0.5s ease-in;\n  &.out {\n    transition: left 0.1s ease-out;\n  }\n  z-index: 2;\n  & div {\n    font-weight: 300;\n    font-size: 1.3rem;\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(l.a)(["\n  width: ","px;\n  height: ","px;\n  background: black;\n  color: white;\n  position: fixed;\n  z-index: 0;\n  transform: rotate(45deg);\n  transform-origin: top;\n  top: ","px;\n  left: ","px;\n  transition: left 0.5s, top 0.5s;\n  &.out {\n    transition: left 1s, top 1s;\n  }\n  z-index: 1;\n"]);return en=function(){return n},n}var tn=m.a.div(en(),(function(n){return n.width+n.width*n.m}),(function(n){return n.height+0*n.height}),(function(n){return n.side}),(function(n){return n.side})),rn=m.a.div(nn(),(function(n){return n.contentLeft})),an=m.a.div($()),on=function(){return a.a.createElement("div",{style:{margin:20}},a.a.createElement("div",null,'TEXT "\ud83c\udf52" IF YOU NEED'),a.a.createElement("div",null,"ANYTHING"),a.a.createElement("div",null,"+1 (408) 799-6629"))};function cn(n){var e=n.openNav,t=window.innerWidth,r=window.innerHeight,i=Math.sqrt(t*t+r*r),o=e?0:-i,c=window.innerHeight>window.innerWidth?0:.5;return a.a.createElement(a.a.Fragment,null,a.a.createElement(tn,{className:e?"in":"out",width:i,height:i,side:o,m:c}),a.a.createElement(rn,{className:e?"in":"out",contentLeft:e?49:-200},a.a.createElement(A,{inverted:!0}),a.a.createElement(an,null,a.a.createElement("div",null,a.a.createElement(V,{name:"about"})),a.a.createElement("div",null,a.a.createElement(V,{name:"find-us"}))),a.a.createElement(an,null,a.a.createElement("div",null,a.a.createElement(V,{name:"faq"})),a.a.createElement("div",null,a.a.createElement(V,{name:"blog"}))),a.a.createElement(an,null,a.a.createElement("div",null,a.a.createElement(V,{name:"lookbook"})),a.a.createElement("div",null,a.a.createElement(V,{name:"tutorials"}))),a.a.createElement(an,null,a.a.createElement("div",null,a.a.createElement(V,{name:"wholesale"})),a.a.createElement("div",null,a.a.createElement(V,{name:"terms"}))),a.a.createElement(an,null,a.a.createElement("div",null,a.a.createElement(V,{name:"collabs"})),a.a.createElement("div",null,a.a.createElement(V,{name:"pr"}))),a.a.createElement(on,null)))}function ln(){var n=Object(l.a)(["\n  position: absolute;\n  transform: rotate(-45deg);\n  top: -26px;\n  left: -52px;\n  width: 120px;\n  text-align: center;\n  height: 30px;\n  padding-top: 40px;\n  line-height: 35px;\n  background: black;\n  color: white;\n  font-size: 0.8rem;\n  cursor: pointer;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  z-index: 2;\n"]);return ln=function(){return n},n}function un(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 74%;\n  margin: auto;\n  height: 80px;\n  z-index: 0;\n  position: relative;\n  color: white;\n  transition: color 3.5s, fill 0.5s;\n  z-index: 2;\n  margin: 12px 62px 0px;\n"]);return un=function(){return n},n}function sn(){var n=Object(l.a)([""]);return sn=function(){return n},n}var fn=m.a.div(sn()),dn=m.a.div(un()),mn=m.a.div(ln());function pn(){var n=Object(r.useState)(!1),e=Object(c.a)(n,2),t=e[0],i=e[1];return a.a.createElement(fn,null,a.a.createElement(cn,{openNav:t}),a.a.createElement(mn,{onClick:function(){return i(!t)}},t?"CLOSE":"MENU"),a.a.createElement(dn,null,a.a.createElement("div",{style:{fontWeight:800,color:t?"white":"black",transition:"color .3s",fontSize:"1.7rem",fontFamily:"'Open Sans', sans-serif"}},"CHERI CHERI"),a.a.createElement(J,{fill:t?"white":"black"})))}var hn=function(){var n=Object(r.useRef)();return Object(r.useEffect)((function(){n.current.onclick=function(){n.current.play()}}),[]),a.a.createElement("div",null,a.a.createElement(pn,null),a.a.createElement("div",{style:{height:"100%",overflow:"hidden",marginBottom:"-10px"}},a.a.createElement("video",{ref:n,autoPlay:!0,loop:!0,playsInline:!0,src:t(25),style:{width:"100%",filter:"contrast(1.2)"}})),a.a.createElement(L,null))};t(26),t(27);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(hn,null)),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.f67eebd7.chunk.js.map