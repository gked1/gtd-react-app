(this["webpackJsonpgtd-react-app"]=this["webpackJsonpgtd-react-app"]||[]).push([[0],{13:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),i=a(14),n=a(15),r=a.n(n),l=(a(40),a(13),a(5)),d=a(16),o=a(17),j=a(20),h=a(19),b=(a(41),a.p+"static/media/likeIconActive.20deca1a.jpg"),m=a.p+"static/media/likeIconDisactive.51695727.jpg",p=function(e,t,a){return e[t].wasClicked?e[t].count=e[t].count-1:e[t].count=e[t].count+1,e[t].wasClicked=!e[t].wasClicked,e[a].wasClicked&&(e[a].count=e[a].count-1,e[a].wasClicked=!1),e},O=function(e){return function(t,a){return"TOGGLE_LIKE"===e.type?p(t,"like","dislike"):p(t,"dislike","like")}},x=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).handleToggleLike=function(){s.setState(O({type:"TOGGLE_LIKE"})),s.setState({wasClickedLikeStyle:!s.state.wasClickedLikeStyle,wasClickedDislikeStyle:!s.state.wasClickedLikeStyle&&s.state.wasClickedDislikeStyle&&s.state.wasClickedLikeStyle&&!s.state.wasClickedDislikeStyle})},s.handleToggleDislike=function(){s.setState(O({type:"TOGGLE_DISLIKE"})),s.setState({wasClickedDislikeStyle:!s.state.wasClickedDislikeStyle,wasClickedLikeStyle:!s.state.wasClickedDislikeStyle&&s.state.wasClickedLikeStyle&&s.state.wasClickedDislikeStyle&&!s.state.wasClickedLikeStyle})},s.state={like:{count:0,wasClicked:!1,wasClickedLikeStyle:!1},dislike:{count:0,wasClicked:!1,wasClickedDislikeStyle:!1}},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.wasClickedLikeStyle?"button-activated":"button-deactivated",t=this.state.wasClickedDislikeStyle?"button-activated":"button-deactivated";return Object(s.jsxs)("div",{className:"wrapper-icons",children:[Object(s.jsxs)("div",{className:e,style:{cursor:"auto"},children:[this.state.wasClickedLikeStyle?Object(s.jsx)("img",{className:"resize-like",src:b,onClick:this.handleToggleLike}):Object(s.jsx)("img",{className:"resize-like",src:m,onClick:this.handleToggleLike}),this.state.like.count]}),Object(s.jsxs)("div",{className:t,style:{cursor:"auto"},children:[this.state.wasClickedDislikeStyle?Object(s.jsx)("img",{className:"resize-dislike",src:b,onClick:this.handleToggleDislike}):Object(s.jsx)("img",{className:"resize-dislike",src:m,onClick:this.handleToggleDislike}),this.state.dislike.count]})]})}}]),a}(c.Component),u=a(18),k=a(64),g=a(60),w=a(61),f=a(62),N=a(63),v=(a(42),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={modal:!1},s.toggle=s.toggle.bind(Object(u.a)(s)),s}return Object(o.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"thin",children:Object(s.jsx)("span",{className:"active",onClick:this.toggle,children:this.props.name})}),Object(s.jsxs)(k.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(s.jsx)(g.a,{toggle:this.toggle,children:this.props.header}),Object(s.jsx)(w.a,{children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsxs)("div",{className:"top",children:[Object(s.jsx)("h2",{className:"name",children:this.props.name}),Object(s.jsx)("img",{className:"circle-img",src:this.props.img,alt:"avatar_img"})]}),Object(s.jsxs)("div",{className:"bottom",children:[Object(s.jsx)("p",{className:"info",children:this.props.tel}),Object(s.jsx)("p",{className:"info",children:this.props.email})]})]})}),Object(s.jsx)(f.a,{children:Object(s.jsx)(N.a,{color:"primary",onClick:this.toggle,children:"Cancel"})})]})]})}}]),a}(c.Component)),C=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={modal:!1},s.toggle=s.toggle.bind(Object(u.a)(s)),s}return Object(o.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"thin",children:Object(s.jsx)("span",{className:"active",onClick:this.toggle,children:this.props.name})}),Object(s.jsxs)(k.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(s.jsx)(g.a,{toggle:this.toggle,children:this.props.header}),Object(s.jsx)(w.a,{children:Object(s.jsx)("p",{children:"To be updated soon"})}),Object(s.jsx)(f.a,{children:Object(s.jsx)(N.a,{color:"primary",onClick:this.toggle,children:"Cancel"})})]})]})}}]),a}(c.Component),y=a(9),T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAXCAYAAACS5bYWAAAABGdBTUEAALGPC/xhBQAAAxRJREFUSA3VlstLFWEUwJ2bPZRMksLeqVi0CCKiSIMkohYSVLRJwkUQSAUJrcP+gVYtalOroFpELyqoNkXgpmxRoT1RKOhxzfAqlVTefmeaU8fTHZsh4daB3z3P78w3M9983w1K/gHJ5/N1ZhrZIAiGjD9xJhcqgxrDpDTdGVcKVvbEjc/EJVLEN1Dba5iXYmyq0omYbKoL/k3xfzXZUnunLJzp+NtgLcyFLrgE3dAGKhcwZsBGWK7BSLfSZwC7hw/ltuaISX0zNMJ8uAsX4TmkE5rVwUPwkiPQ5IIN+LtczLsndAYk6qHHF+APw1YXj/3AwidL8VQa34KFegG0bB+fYTZcAy/DBPqgDKpB5RXGV+iXAL0rUZ0gfVQ+YeRAxp3XYCJNw3Zzd6PYByDcgtDrYQCsNGhjgs02gW1vWCbbYfLae7KMJ74G3pi8mLFPNrwmBV1mwFWdiGpyMnkraSb72gw8oz1Vk2sxeTFjJ6u7wVIdjC70yq+YfGKTC8sSmGMGnDO2mvKR5dUZT2doWEGB7AIq8iV7eesDCf1aV/fS+SXsGLJ+P/h4IT8TncPysajIluXFPh2fG8/3N24fih1Xbp04W5eBHJcqO9Qweqex05iyM4yYAauNHZq82XqMaT5eyNfJnjLJRhocgVlQDrvJHTL5P5mLtYC3Nor982DA3ke/Ks1Hut35oRtd+zJa6dBEBcEsWJFt5ksUGLQJbLsbyAFh5SnOMWiV5mjZ+qw8wmmD7XDSJiI73A2wK13u1y5FYgl0uwJxZR9c5eJ2svIXccjlxbUn2PECeQ31YrxTBx07WV0G8lU+40HImpLz+zAcBXk6K6APrHxUJ/qat+Df15jX1OwldhD8rnKP2DpItBsEFMqrWolaIDaSo7ldZ5JvIX46zP74qaLmtwtQJ0fvTJC12k+NHLtjhJoaArXwgPz7MckkDg32g4qs1c06DnsKXNck+qbmiqKZQDXYdTOC3wln4QWoSFz+4hVXmMQyeKKzKqAfE5PlUjQJ16xencmIvwmaYBF8gyzcgRusMfnLWDT5DhkmhInJewf3AAAAAElFTkSuQmCC",L=a.p+"static/media/img_lisa_circle.106be30f.png",S=a.p+"static/media/img_danielle_circle.de6410ad.png",A=a.p+"static/media/img_brian_circle.7e50fc0a.png";var M=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"wrapper-up-logo",children:Object(s.jsx)("img",{src:T,alt:"gtd."})}),Object(s.jsx)("div",{className:"wrapper-up",children:Object(s.jsx)("h1",{children:"Hello, we\u2019re gtd."})}),Object(s.jsxs)("div",{className:"wrapper-middle",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"how-it-started",children:"How it started "}),Object(s.jsx)("p",{className:"thick",children:"Couple of years ago group of colleagues tried to realize idea on which they thought over for a long time. After months of discussions and considering both pros and cons they decided at last to come from idea to realization. Frankly speaking, it was not the only idea they thought over, but it was prospective, and they hoped it will give them a chance to get on the market with fresh idea and acquire some interesting clients."})]}),Object(s.jsxs)("div",{className:"feedback",children:[Object(s.jsx)("p",{children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipFeedback",children:"Give us feedback"})}),Object(s.jsx)(y.a,{id:"dataTipFeedback",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Share with us your opinion"})}),Object(s.jsx)(x,{})]})]}),Object(s.jsxs)("div",{className:"wrapper-down",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipTeam",children:"Team"})}),Object(s.jsx)(y.a,{id:"dataTipTeam",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Meet members of our crew who plays significant role in the team "})}),Object(s.jsx)(v,{name:"Lisa",header:"Meet the team",img:L}),Object(s.jsx)(v,{name:"Danielle",header:"Meet the team",img:S}),Object(s.jsx)(v,{name:"Brian",header:"Meet the team",img:A}),Object(s.jsx)("p",{className:"thick-join-us",children:"Join us!"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipLearnMore",children:"Learn more"})}),Object(s.jsx)(y.a,{id:"dataTipLearnMore",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Learn more about our work methods, sample of works or client user stories "})}),Object(s.jsx)(C,{name:"Manifesto",header:"Manifesto"}),Object(s.jsx)(C,{name:"Works",header:"Works"}),Object(s.jsx)(C,{name:"Stories",header:"Stories"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipMeetUs",children:"Meet us"})}),Object(s.jsx)(y.a,{id:"dataTipMeetUs",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Get to know our studio, user community or workshops we organize "})}),Object(s.jsx)(C,{name:"Studio",header:"Studio"}),Object(s.jsx)(C,{name:"Community",header:"Community"}),Object(s.jsx)(C,{name:"Workshops",header:"Workshops"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipContact",children:"Contact"})}),Object(s.jsx)(y.a,{id:"dataTipContact",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Contact us by visiting our official channels on social web portals "})}),Object(s.jsx)("p",{className:"thin",children:"Twitter"}),Object(s.jsx)("p",{className:"thin",children:"Facebook"}),Object(s.jsx)("p",{className:"thin",children:"Instagram"})]})]})]})},D=a(26),J=(a(52),function(){var e=Object(c.useRef)(null);return Object(s.jsx)("div",{className:"container-for-ball",children:Object(s.jsx)(D.a.div,{className:"container",ref:e,children:Object(s.jsx)(D.a.div,{className:"item",drag:!0,dragConstraints:e,children:Object(s.jsx)("p",{className:"inputText",children:"To be updated"})})})})});var G=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"wrapper-up-logo",children:Object(s.jsx)("img",{src:T,alt:"gtd."})}),Object(s.jsx)("div",{className:"wrapper-up",children:Object(s.jsx)("h1",{children:"Hello, we\u2019re gtd."})}),Object(s.jsxs)("div",{className:"wrapper-middle-to-be-updated-motion",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"how-it-started",children:"About us"}),Object(s.jsx)(J,{})]}),Object(s.jsx)("div",{className:"feedback",children:Object(s.jsx)("p",{})})]}),Object(s.jsxs)("div",{className:"wrapper-down",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipTeam",children:"Team"})}),Object(s.jsx)(y.a,{id:"dataTipTeam",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Meet members of our crew who plays significant role in the team "})}),Object(s.jsx)(v,{name:"Lisa",header:"Meet the team",img:L}),Object(s.jsx)(v,{name:"Danielle",header:"Meet the team",img:S}),Object(s.jsx)(v,{name:"Brian",header:"Meet the team",img:A}),Object(s.jsx)("p",{className:"thick-join-us",children:"Join us!"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipLearnMore",children:"Learn more"})}),Object(s.jsx)(y.a,{id:"dataTipLearnMore",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Learn more about our work methods, sample of works or client user stories "})}),Object(s.jsx)(C,{name:"Manifesto",header:"Manifesto"}),Object(s.jsx)(C,{name:"Works",header:"Works"}),Object(s.jsx)(C,{name:"Stories",header:"Stories"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipMeetUs",children:"Meet us"})}),Object(s.jsx)(y.a,{id:"dataTipMeetUs",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Get to know our studio, user community or workshops we organize "})}),Object(s.jsx)(C,{name:"Studio",header:"Studio"}),Object(s.jsx)(C,{name:"Community",header:"Community"}),Object(s.jsx)(C,{name:"Workshops",header:"Workshops"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipContact",children:"Contact"})}),Object(s.jsx)(y.a,{id:"dataTipContact",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Contact us by visiting our official channels on social web portals "})}),Object(s.jsx)("p",{className:"thin",children:"Twitter"}),Object(s.jsx)("p",{className:"thin",children:"Facebook"}),Object(s.jsx)("p",{className:"thin",children:"Instagram"})]})]})]})};var I=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"wrapper-up-logo",children:Object(s.jsx)("img",{src:T,alt:"gtd."})}),Object(s.jsx)("div",{className:"wrapper-up",children:Object(s.jsx)("h1",{children:"Hello, we\u2019re gtd."})}),Object(s.jsxs)("div",{className:"wrapper-middle-to-be-updated-motion",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"how-it-started",children:"Contact"}),Object(s.jsx)(J,{})]}),Object(s.jsx)("div",{className:"feedback",children:Object(s.jsx)("p",{})})]}),Object(s.jsxs)("div",{className:"wrapper-down",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipTeam",children:"Team"})}),Object(s.jsx)(y.a,{id:"dataTipTeam",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Meet members of our crew who plays significant role in the team "})}),Object(s.jsx)(v,{name:"Lisa",header:"Meet the team",img:L}),Object(s.jsx)(v,{name:"Danielle",header:"Meet the team",img:S}),Object(s.jsx)(v,{name:"Brian",header:"Meet the team",img:A}),Object(s.jsx)("p",{className:"thick-join-us",children:"Join us!"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipLearnMore",children:"Learn more"})}),Object(s.jsx)(y.a,{id:"dataTipLearnMore",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Learn more about our work methods, sample of works or client user stories "})}),Object(s.jsx)(C,{name:"Manifesto",header:"Manifesto"}),Object(s.jsx)(C,{name:"Works",header:"Works"}),Object(s.jsx)(C,{name:"Stories",header:"Stories"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipMeetUs",children:"Meet us"})}),Object(s.jsx)(y.a,{id:"dataTipMeetUs",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Get to know our studio, user community or workshops we organize "})}),Object(s.jsx)(C,{name:"Studio",header:"Studio"}),Object(s.jsx)(C,{name:"Community",header:"Community"}),Object(s.jsx)(C,{name:"Workshops",header:"Workshops"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipContact",children:"Contact"})}),Object(s.jsx)(y.a,{id:"dataTipContact",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Contact us by visiting our official channels on social web portals "})}),Object(s.jsx)("p",{className:"thin",children:"Twitter"}),Object(s.jsx)("p",{className:"thin",children:"Facebook"}),Object(s.jsx)("p",{className:"thin",children:"Instagram"})]})]})]})},W=a(33);a(53);var z=function(){var e=Object(c.useState)(!1),t=Object(W.a)(e,2),a=t[0],n=t[1],r=function(){return n(!a)};return Object(s.jsxs)("nav",{className:a?"sidebar active":"sidebar",children:[Object(s.jsx)("button",{className:"sandwich",type:"button",onClick:r,children:Object(s.jsx)("div",{})}),Object(s.jsxs)("ul",{onClick:r,children:[Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"/",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"/about",children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"/contact",children:"Contact"})})]})]})};var K=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(i.a,{children:[Object(s.jsx)(z,{}),Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{path:"/",component:M,exact:!0}),Object(s.jsx)(l.a,{path:"/about",component:G}),Object(s.jsx)(l.a,{path:"/contact",component:I})]})]})})};r.a.render(Object(s.jsx)(i.a,{children:Object(s.jsx)(K,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.3aeec62f.chunk.js.map