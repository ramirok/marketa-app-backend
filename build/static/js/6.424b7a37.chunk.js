(this.webpackJsonpecomerce=this.webpackJsonpecomerce||[]).push([[6],{108:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(4),l=a(1),i=a(0),s=a.n(i),c=a(5),u=a(10),m=a(7),p=a(3),g=a(90),b=a(29),d=a(14),f=a(88),E=a(92),_=a.n(E);t.default=function(){var e=Object(u.b)(),t=e.loginData,a=e.handleLogin,n=Object(c.g)(),E=Object(i.useState)(null),v=Object(l.a)(E,2),j=v[0],O=v[1],F=Object(m.b)("email",!0),y=Object(m.b)("password"),h=Object(i.useState)(""),x=Object(l.a)(h,2),N=x[0],T=x[1];return Object(i.useEffect)((function(){Object(p.a)("get","users/login/google").then((function(e){return T(e.url)}))}),[]),Object(i.useEffect)((function(){if(j){var e=setTimeout((function(){O(null)}),3e3);return function(){clearTimeout(e)}}}),[j]),s.a.createElement(f.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,Object.assign({},F,{label:"Email"})),s.a.createElement("br",{style:{marginBottom:"3rem"}}),s.a.createElement(g.a,Object.assign({},y,{label:"Password"})),s.a.createElement("p",{className:_.a.Message},t.loading?s.a.createElement(d.a,null):j),s.a.createElement(b.a,{text:"Login",classFromProps:F.isValid&&y.value?_.a.ButtonLogin:_.a.ButtonLoginDisabled,onClick:F.isValid&&y.value&&!t.loading?function(){var e=Object(o.a)(r.a.mark((function e(t){var o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t,F.value,y.value);case 2:o=e.sent,O(o.message),o.succeed&&n.push("/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}():function(e){return e.preventDefault()}}),s.a.createElement("br",{style:{marginBottom:"3rem"}}),s.a.createElement("a",{href:N,className:_.a.Link},"Login with Google"),s.a.createElement("br",{style:{marginBottom:"3rem"}}),s.a.createElement(b.a,{text:"Forgot password?",classFromProps:_.a.ButtonForgot,onClick:function(e){e.preventDefault(),n.push("/auth/forgot")}})))}},88:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(89),l=a.n(o);t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l.a.Background}),r.a.createElement("form",{className:l.a.FormContainer},e.children))}},89:function(e,t,a){e.exports={Background:"FormContainer_Background__2lPQo",FormContainer:"FormContainer_FormContainer__1rPIB"}},90:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var r=a(0),o=a.n(r),l=a(91),i=a.n(l);t.a=function(e){var t=e.type,a=e.label,r=e.isValid,l=e.error,s=n(e,["type","label","isValid","error"]),c={};switch(!0===r?c={borderBottom:"2px solid blue"}:!1===r&&(c={borderBottom:"2px solid red"}),t){case"email":return o.a.createElement("div",{className:i.a.InputContainer},o.a.createElement("label",{htmlFor:"email"},a),o.a.createElement("input",Object.assign({},s,{type:t,id:"email",className:i.a.Input,style:c})),!1===r&&o.a.createElement("div",{className:i.a.Tooltip},"!",o.a.createElement("span",{className:i.a.TooltipText},l.join(".\n"))));case"number":return o.a.createElement("div",{className:i.a.InputContainer},o.a.createElement("label",{htmlFor:a},a),o.a.createElement("input",Object.assign({},s,{type:"text",id:a,className:i.a.Input,style:c})),!1===r&&o.a.createElement("div",{className:i.a.Tooltip},"!",o.a.createElement("span",{className:i.a.TooltipText},l.join(".\n"))));case"password":return o.a.createElement("div",{className:i.a.InputContainer},o.a.createElement("label",{htmlFor:a},a),o.a.createElement("input",Object.assign({},s,{type:t,id:a,className:i.a.Input,style:c})),!1===r&&o.a.createElement("div",{className:i.a.Tooltip},"!",o.a.createElement("span",{className:i.a.TooltipText},l.join(".\n"))));default:return o.a.createElement("div",{className:i.a.InputContainer},o.a.createElement("label",{htmlFor:a},a),o.a.createElement("input",Object.assign({type:"text"},s,{id:a,className:i.a.Input,style:c})),!1===r&&o.a.createElement("div",{className:i.a.Tooltip},"!",o.a.createElement("span",{className:i.a.TooltipText},l.join(".\n"))))}}},91:function(e,t,a){e.exports={InputContainer:"Input_InputContainer__3-grW",Input:"Input_Input__bZUEZ",Tooltip:"Input_Tooltip__1uJvh",TooltipText:"Input_TooltipText__1VF9Q"}},92:function(e,t,a){e.exports={Message:"LoginForm_Message__2_8yk",ButtonLogin:"LoginForm_ButtonLogin__3F0o4",Link:"LoginForm_Link__1Cu0J",ButtonLoginDisabled:"LoginForm_ButtonLoginDisabled__amDYy",ButtonForgot:"LoginForm_ButtonForgot__1_xgJ"}}}]);
//# sourceMappingURL=6.424b7a37.chunk.js.map