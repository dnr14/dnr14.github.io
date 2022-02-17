(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{37:function(n,t){},62:function(n,t,e){"use strict";e.r(t);var i,r,o,a,c,d,s,l,u,p,b,x,j,h,f,g,m,O,v=e(0),w=e.n(v),y=e(23),k=e.n(y),S=e(3),L=e(4),z=Object(L.a)(i||(i=Object(S.a)(['\n  *, *::before, *::after {\n    box-sizing: border-box;\n  \n  }\n  html{\n    @media only screen and (max-width: 768px) {\n        font-size: 20px;\n    }\n  }\n\n\n  body {\n    font-family: "Helvetica", "Arial", sans-serif;\n    line-height: 1.5;\n\n   \n  }\n\n  h2, p {\n    margin: 0;\n  }\n\n  h2 {\n    font-size: 1.5rem;\n  }\n\n  p {\n    font-size: 1rem;\n  }\n\n\n']))),D=L.c.div(r||(r=Object(S.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  max-width: 500px;\n  margin: auto;\n  border: 1px solid #333;\n  margin-top: 100px;\n  background-color: white;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n  min-width: 360px;\n\n  @media only screen and (max-width: 768px) {\n    width: 80%;\n  }\n\n  @media only screen and (max-width: 512px) {\n    margin-top: 0;\n  }\n"]))),E=L.c.div(o||(o=Object(S.a)(["\n  line-height: 3.125rem;\n  font-size: 2.5rem;\n  text-align: center;\n  padding: 20px 10px 5px 10px;\n  background-color: #2ecc71;\n  width: 100%;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n\n  @media only screen and (max-width: 768px) {\n    & > span {\n      display: inline-block;\n      width: 100%;\n    }\n  }\n"]))),C=L.c.div(a||(a=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background-color: #2ecc71;\n\n  & > div {\n    &:nth-child(2) {\n      margin-left: 45px;\n      padding: 5px 0px 10px 0px;\n      @media only screen and (max-width: 768px) {\n        width: 80%;\n        margin: 0 auto;\n      }\n    }\n  }\n"]))),F=L.c.span(c||(c=Object(S.a)(["\n  font-weight: ",";\n  font-size: 1rem;\n\n  & + & {\n    margin-left: 10px;\n  }\n"])),(function(n){return n.isBold&&"900"})),T=L.c.div(d||(d=Object(S.a)(["\n  width: 100%;\n  padding: 10px;\n\n  & > div {\n    &:nth-child(n + 2) {\n      margin-top: 10px;\n    }\n  }\n"]))),A=L.c.input(s||(s=Object(S.a)(["\n  width: 100%;\n  padding: 5px 5px 5px 15px;\n  line-height: 1.5rem;\n  border-radius: 2px;\n  outline: none;\n  border: 1px solid #333;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 1rem;\n  }\n"]))),I=(L.c.div(l||(l=Object(S.a)(["\n  margin-top: 10px;\n"]))),L.c.div(u||(u=Object(S.a)(["\n  position: relative;\n  & + & {\n    margin-top: 5px;\n  }\n\n  & > svg {\n    display: none;\n    position: absolute;\n    right: 5px;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    cursor: pointer;\n\n    &:active {\n      filter: invert(59%) sepia(85%) saturate(388%) hue-rotate(93deg) brightness(95%) contrast(88%);\n    }\n  }\n\n  &:hover {\n    & > svg {\n      display: block;\n    }\n  }\n\n  label {\n    display: block;\n    cursor: pointer;\n    padding-left: 10px;\n\n    & > input {\n      vertical-align: middle;\n      width: 20px;\n      height: 20px;\n      margin-left: 10px;\n    }\n\n    & > span {\n      vertical-align: middle;\n      margin-left: 5px;\n      text-decoration: ",";\n    }\n\n    &:hover {\n      background-color: rgba(46, 204, 113, 0.5);\n\n      & > span {\n        text-decoration: line-through;\n      }\n    }\n  }\n"])),(function(n){return n.isDone&&"line-through"}))),M=L.c.button(p||(p=Object(S.a)(["\n  border: 1px solid #333;\n  cursor: pointer;\n  padding: 2px 5px;\n  background-color: ",";\n  border-radius: 2px;\n  & + & {\n    margin-left: 5px;\n  }\n"])),(function(n){return n.isSelected?"#2ecc71":"white"})),P=Object(L.d)(b||(b=Object(S.a)(["\n  from{\n    opacity:0;\n  }\n\n  to{\n    opacity:1;\n  }\n"]))),J=Object(L.d)(x||(x=Object(S.a)(["\n  from{\n    opacity:1;\n  }\n\n  to{\n    opacity:0;\n  }\n"]))),N=Object(L.d)(j||(j=Object(S.a)(["\n  from{\n    transform:translateY(300px);\n  }\n  to{\n    transform:translateY(150px);\n  }\n"]))),B=L.c.div(h||(h=Object(S.a)(["\n  position: fixed;\n  background-color: rgba(149, 165, 166, 0.5);\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n\n  animation-duration: 0.25s;\n  animation-timing-function: ease-out;\n  animation-name: ",";\n  animation-fill-mode: forwards;\n  visibility: ",";\n  z-index: 1;\n\n  ","\n"])),P,(function(n){return!n.isListFull&&"hidden"}),(function(n){return!n.isListFull&&Object(L.b)(f||(f=Object(S.a)(["\n      animation-name: ",";\n    "])),J)})),R=L.c.div(g||(g=Object(S.a)(["\n  width: 300px;\n  height: 130px;\n  min-width: 200px;\n  background-color: white;\n  border-radius: 5px;\n  position: relative;\n  left: 0;\n  right: 0;\n  margin: auto;\n  box-shadow: 5px 5px 5px rgba(149, 165, 166, 0.5);\n\n  animation-duration: 0.25s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n\n  ","\n\n  & > div {\n    position: absolute;\n    top: 30px;\n    right: 0;\n    left: 0;\n    width: 90%;\n    margin: auto;\n    font-size: 1rem;\n    text-align: center;\n    font-weight: bold;\n    & > span {\n      display: block;\n    }\n  }\n"])),(function(n){return n.isListFull&&Object(L.b)(m||(m=Object(S.a)(["\n      animation-name: ",";\n    "])),N)})),U=L.c.footer(O||(O=Object(S.a)(["\n  background-color: transparent;\n  padding: 10px;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n\n  & > button {\n    padding: 2.5px 10px;\n    background-color: rgba(46, 204, 113, 0.5);\n    cursor: pointer;\n    border: none;\n    border-radius: 2px;\n    color: white;\n    font-weight: bold;\n    &:hover {\n      background-color: transparent;\n      border: 2px solid rgba(46, 204, 113, 1);\n      color: #000;\n    }\n  }\n"]))),Y=e(1),G=["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"],H=["\ub144","\uc6d4","\uc77c","\uc694\uc77c\ud83d\ude00"],K=new Date,q=function(){var n=function(){var n=[];return n.push(K.getFullYear()),n.push(K.getMonth()+1),n.push(K.getDate()),n.push(G[K.getDay()]),n}();return Object(Y.jsxs)(C,{children:[Object(Y.jsxs)(E,{children:[Object(Y.jsx)("span",{children:"\uc5b4\uc81c\ubcf4\ub2e4 "}),Object(Y.jsx)("span",{children:"\ud55c \uac78\uc74c \ub354 \ud83d\udc4d"})]}),Object(Y.jsx)("div",{children:n.map((function(n,t){return Object(Y.jsx)(F,{isBold:!0,children:"".concat(n).concat(H[t])},t)}))})]})},Q=e(7),V=e(28),W=e(10),X=e(15),Z=e.n(X),$=function(n,t){try{var e=Z.a.AES.decrypt(n,t);return JSON.parse(e.toString(Z.a.enc.Utf8))}catch(i){return void console.error(i)}},_=e(27),nn=null,tn=function(n){var t=n.idx,e=n.text,i=n.done,r=n.id,o=n.updateSet,a=n.setTodoArray,c=n.handlClickUpdate,d=Object(v.useRef)(),s=Object(v.useState)(i),l=Object(W.a)(s,2),u=l[0],p=l[1];return Object(Y.jsxs)(I,{isDone:u,children:[Object(Y.jsxs)("label",{children:[t+1,".",Object(Y.jsx)("input",{type:"checkbox",onChange:function(){o.add(r),p(d.current.checked),nn&&clearTimeout(nn),nn=setTimeout((function(){return c()}),500)},defaultChecked:i,ref:d,readOnly:!0}),Object(Y.jsx)("span",{children:e})]}),Object(Y.jsx)(_.a,{onClick:function(){return a((function(n){return n.filter((function(n){return n.id!==r&&n}))}))}})]})},en=!1,rn=["ALL","DOING","COMPLETED"],on={text:"",done:!1},an=new Set,cn="secret-key-1",dn="todoListDate",sn=function(){var n=Object(v.useMemo)((function(){return localStorage.hasOwnProperty(dn)?$(localStorage.getItem(dn),cn):[]}),[]),t=Object(v.useMemo)((function(){return function(){var n=$(localStorage.getItem(dn),cn);return localStorage.hasOwnProperty(dn)?0===n.length?0:n[n.length-1].id+1:0}()}),[]),e=Object(v.useState)(n),i=Object(W.a)(e,2),r=i[0],o=i[1],a=Object(v.useState)(rn[0]),c=Object(W.a)(a,2),d=c[0],s=c[1],l=Object(v.useState)(!1),u=Object(W.a)(l,2),p=u[0],b=u[1],x=Object(v.useRef)(),j=Object(v.useRef)(t);Object(v.useEffect)((function(){localStorage.hasOwnProperty(dn)||localStorage.setItem(dn,[]),window.addEventListener("beforeunload",(function(){var n,t,e=(n=r,t=cn,Z.a.AES.encrypt(JSON.stringify(n),t).toString());localStorage.setItem(dn,e)}))}),[r]);var h=function(n){return function(){an.forEach((function(n){return o((function(t){return t.map((function(t){return t.id===n?Object(Q.a)(Object(Q.a)({},t),{},{done:!t.done}):t}))}))})),an.clear(),s(n)}};return Object(Y.jsxs)(T,{children:[Object(Y.jsx)(B,{isListFull:p,children:Object(Y.jsxs)(R,{isListFull:p,children:[Object(Y.jsx)("div",{className:"flex-box",children:en?Object(Y.jsx)("span",{children:"\ub108\ubb34 \ube60\ub985\ub2c8\ub2e4."}):Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("span",{children:"ToDoList\uac00 \uaf49 \ucc3c\uc2b5\ub2c8\ub2e4."}),Object(Y.jsx)("span",{children:"\ucd5c\ub300 10\uac1c"})]})}),Object(Y.jsx)(U,{children:Object(Y.jsx)("button",{onClick:function(){return b(!1)},children:"\ud655\uc778"})})]})}),Object(Y.jsx)(A,{type:"text",ref:x,onKeyPress:function(n){if("Enter"===n.key){var t=x.current.value;if(""===t||" "===t)return;if(10===r.length)return x.current.blur(),void b(!0);en?(x.current.blur(),b(!0)):(en=!en,o([].concat(Object(V.a)(r),[Object(Q.a)(Object(Q.a)({},on),{},{id:j.current++,text:t})])),setTimeout((function(){return en=!1}),500),x.current.value="")}},maxLength:"20",placeholder:"\ub124\uac00 \ud574\uc57c \ud560 \uc77c \uc744 \uc801\uc5b4 \ubd10!! \ud83d\ude01"}),Object(Y.jsx)("div",{children:rn.map((function(n,t){return Object(Y.jsx)(M,{onClick:h(n),isSelected:n===d,children:n},t)}))}),Object(Y.jsx)("div",{children:r.filter((function(n){return d===rn[0]?n:d===rn[1]?!n.done:n.done})).map((function(n,t){return Object(Y.jsx)(tn,Object(Q.a)(Object(Q.a)({idx:t},n),{},{updateSet:an,handlClickUpdate:h(d),setTodoArray:o}),n.id)}))})]})};var ln=function(){return Object(Y.jsxs)(D,{children:[Object(Y.jsx)(q,{}),Object(Y.jsx)(sn,{})]})};k.a.render(Object(Y.jsxs)(w.a.StrictMode,{children:[Object(Y.jsx)(z,{}),Object(Y.jsx)(ln,{})]}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.a0d513b2.chunk.js.map