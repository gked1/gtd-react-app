(this["webpackJsonpgtd-react-app"]=this["webpackJsonpgtd-react-app"]||[]).push([[0],{14:function(e,t,a){},50:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(2),i=a(15),n=a.n(i),r=(a(44),a(14),a(16)),l=a(6),d=a(13),o=a(19),j=a(20),h=a(23),b=a(22),p=a(17),m=a(18),O=a(65),x=a(66),u=function(e,t,a){return e[t].wasClicked?e[t].count=e[t].count-1:e[t].count=e[t].count+1,e[t].wasClicked=!e[t].wasClicked,e[a].wasClicked&&(e[a].count=e[a].count-1,e[a].wasClicked=!1),e},g=function(e){return function(t,a){return"TOGGLE_LIKE"===e.type?u(t,"like","dislike"):u(t,"dislike","like")}},k=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleToggleLike=function(){s.setState(g({type:"TOGGLE_LIKE"})),s.setState({wasClickedLikeStyle:!s.state.wasClickedLikeStyle,wasClickedDislikeStyle:!s.state.wasClickedLikeStyle&&s.state.wasClickedDislikeStyle&&s.state.wasClickedLikeStyle&&!s.state.wasClickedDislikeStyle})},s.handleToggleDislike=function(){s.setState(g({type:"TOGGLE_DISLIKE"})),s.setState({wasClickedDislikeStyle:!s.state.wasClickedDislikeStyle,wasClickedLikeStyle:!s.state.wasClickedDislikeStyle&&s.state.wasClickedLikeStyle&&s.state.wasClickedDislikeStyle&&!s.state.wasClickedLikeStyle})},s.state={like:{count:0,wasClicked:!1,wasClickedLikeStyle:!1},dislike:{count:0,wasClicked:!1,wasClickedDislikeStyle:!1}},s}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state.wasClickedLikeStyle?"button-activated":"button-deactivated",t=this.state.wasClickedDislikeStyle?"button-activated":"button-deactivated";return Object(s.jsxs)("div",{className:"wrapper-icons",children:[Object(s.jsx)(O.a,{children:Object(s.jsxs)(x.a,{className:e,children:[Object(s.jsx)(p.a,{icon:m.e,className:"icon",onClick:this.handleToggleLike}),Object(s.jsx)("span",{className:"digit",children:this.state.like.count})]})}),Object(s.jsx)(O.a,{children:Object(s.jsxs)(x.a,{className:t,children:[Object(s.jsx)(p.a,{icon:m.d,className:"icon-dislike",onClick:this.handleToggleDislike}),Object(s.jsx)("span",{className:"digit",children:this.state.dislike.count})]})})]})}}]),a}(c.Component),f=a(21),w=a(71),v=a(67),N=a(68),C=a(69),y=a(70),T=(a(50),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={modal:!1},s.toggle=s.toggle.bind(Object(f.a)(s)),s}return Object(j.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"thin",children:Object(s.jsx)("span",{className:"active",onClick:this.toggle,children:this.props.name})}),Object(s.jsxs)(w.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(s.jsx)(v.a,{toggle:this.toggle,children:this.props.header}),Object(s.jsx)(N.a,{children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsxs)("div",{className:"top",children:[Object(s.jsx)("h2",{className:"name",children:this.props.name}),Object(s.jsx)("img",{className:"circle-img",src:this.props.img,alt:"avatar_img"})]}),Object(s.jsxs)("div",{className:"bottom",children:[Object(s.jsx)("p",{className:"info",children:this.props.tel}),Object(s.jsx)("p",{className:"info",children:this.props.email})]})]})}),Object(s.jsx)(C.a,{children:Object(s.jsx)(y.a,{color:"primary",onClick:this.toggle,children:"Cancel"})})]})]})}}]),a}(c.Component)),L=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={modal:!1},s.toggle=s.toggle.bind(Object(f.a)(s)),s}return Object(j.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"thin",children:Object(s.jsx)("span",{className:"active",onClick:this.toggle,children:this.props.name})}),Object(s.jsxs)(w.a,{isOpen:this.state.modal,toggle:this.toggle,children:[Object(s.jsx)(v.a,{toggle:this.toggle,children:this.props.header}),Object(s.jsx)(N.a,{children:Object(s.jsx)("p",{children:"To be updated soon"})}),Object(s.jsx)(C.a,{children:Object(s.jsx)(y.a,{color:"primary",onClick:this.toggle,children:"Cancel"})})]})]})}}]),a}(c.Component),S=a(9),A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAXCAYAAACS5bYWAAAABGdBTUEAALGPC/xhBQAAAxRJREFUSA3VlstLFWEUwJ2bPZRMksLeqVi0CCKiSIMkohYSVLRJwkUQSAUJrcP+gVYtalOroFpELyqoNkXgpmxRoT1RKOhxzfAqlVTefmeaU8fTHZsh4daB3z3P78w3M9983w1K/gHJ5/N1ZhrZIAiGjD9xJhcqgxrDpDTdGVcKVvbEjc/EJVLEN1Dba5iXYmyq0omYbKoL/k3xfzXZUnunLJzp+NtgLcyFLrgE3dAGKhcwZsBGWK7BSLfSZwC7hw/ltuaISX0zNMJ8uAsX4TmkE5rVwUPwkiPQ5IIN+LtczLsndAYk6qHHF+APw1YXj/3AwidL8VQa34KFegG0bB+fYTZcAy/DBPqgDKpB5RXGV+iXAL0rUZ0gfVQ+YeRAxp3XYCJNw3Zzd6PYByDcgtDrYQCsNGhjgs02gW1vWCbbYfLae7KMJ74G3pi8mLFPNrwmBV1mwFWdiGpyMnkraSb72gw8oz1Vk2sxeTFjJ6u7wVIdjC70yq+YfGKTC8sSmGMGnDO2mvKR5dUZT2doWEGB7AIq8iV7eesDCf1aV/fS+SXsGLJ+P/h4IT8TncPysajIluXFPh2fG8/3N24fih1Xbp04W5eBHJcqO9Qweqex05iyM4yYAauNHZq82XqMaT5eyNfJnjLJRhocgVlQDrvJHTL5P5mLtYC3Nor982DA3ke/Ks1Hut35oRtd+zJa6dBEBcEsWJFt5ksUGLQJbLsbyAFh5SnOMWiV5mjZ+qw8wmmD7XDSJiI73A2wK13u1y5FYgl0uwJxZR9c5eJ2svIXccjlxbUn2PECeQ31YrxTBx07WV0G8lU+40HImpLz+zAcBXk6K6APrHxUJ/qat+Df15jX1OwldhD8rnKP2DpItBsEFMqrWolaIDaSo7ldZ5JvIX46zP74qaLmtwtQJ0fvTJC12k+NHLtjhJoaArXwgPz7MckkDg32g4qs1c06DnsKXNck+qbmiqKZQDXYdTOC3wln4QWoSFz+4hVXmMQyeKKzKqAfE5PlUjQJ16xencmIvwmaYBF8gyzcgRusMfnLWDT5DhkmhInJewf3AAAAAElFTkSuQmCC",M=a.p+"static/media/img_lisa_circle.106be30f.png",D=a.p+"static/media/img_danielle_circle.de6410ad.png",J=a.p+"static/media/img_brian_circle.7e50fc0a.png";var E=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"wrapper-up-logo",children:Object(s.jsx)("img",{src:A,alt:"gtd."})}),Object(s.jsx)("div",{className:"wrapper-up",children:Object(s.jsx)("h1",{children:"Hello, we\u2019re gtd."})}),Object(s.jsxs)(d.b.div,{className:"wrapper-middle",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"how-it-started",children:"How it started "}),Object(s.jsx)("p",{className:"thick",children:"Couple of years ago group of colleagues tried to realize idea on which they thought over for a long time. After months of discussions and considering both pros and cons they decided at last to come from idea to realization. Frankly speaking, it was not the only idea they thought over, but it was prospective, and they hoped it will give them a chance to get on the market with fresh idea and acquire some interesting clients."})]}),Object(s.jsxs)("div",{className:"feedback",children:[Object(s.jsx)("p",{children:Object(s.jsx)("span",{className:"p-header","data-tip":" ","data-for":"dataTipFeedback",children:"Give us feedback"})}),Object(s.jsx)(S.a,{id:"dataTipFeedback",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Share with us your opinion"})}),Object(s.jsx)(k,{})]})]}),Object(s.jsxs)("div",{className:"wrapper-down",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipTeam",children:"Team"})}),Object(s.jsx)(S.a,{id:"dataTipTeam",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Meet members of our crew who plays significant role in the team "})}),Object(s.jsx)(T,{name:"Lisa",header:"Meet the team",img:M}),Object(s.jsx)(T,{name:"Danielle",header:"Meet the team",img:D}),Object(s.jsx)(T,{name:"Brian",header:"Meet the team",img:J}),Object(s.jsx)("p",{className:"thick-join-us",children:"Join us!"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipLearnMore",children:"Learn more"})}),Object(s.jsx)(S.a,{id:"dataTipLearnMore",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Learn more about our work methods, sample of works or client user stories "})}),Object(s.jsx)(L,{name:"Manifesto",header:"Manifesto"}),Object(s.jsx)(L,{name:"Works",header:"Works"}),Object(s.jsx)(L,{name:"Stories",header:"Stories"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipMeetUs",children:"Meet us"})}),Object(s.jsx)(S.a,{id:"dataTipMeetUs",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Get to know our studio, user community or workshops we organize "})}),Object(s.jsx)(L,{name:"Studio",header:"Studio"}),Object(s.jsx)(L,{name:"Community",header:"Community"}),Object(s.jsx)(L,{name:"Workshops",header:"Workshops"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipContact",children:"Contact"})}),Object(s.jsx)(S.a,{id:"dataTipContact",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Contact us by visiting our official channels on social web portals "})}),Object(s.jsx)("p",{className:"thin",children:"Twitter"}),Object(s.jsx)("p",{className:"thin",children:"Facebook"}),Object(s.jsx)("p",{className:"thin",children:"Instagram"})]})]})]})},G=(a(58),function(){var e=Object(c.useRef)(null);return Object(s.jsx)("div",{className:"container-for-ball",children:Object(s.jsx)(d.b.div,{className:"container",ref:e,children:Object(s.jsx)(d.b.div,{className:"item",drag:!0,dragConstraints:e,children:Object(s.jsx)("p",{className:"textWithinCircle",children:"To be updated"})})})})});var W=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"wrapper-up-logo",children:Object(s.jsx)("img",{src:A,alt:"gtd."})}),Object(s.jsx)("div",{className:"wrapper-up",children:Object(s.jsx)("h1",{children:"Hello, we\u2019re gtd."})}),Object(s.jsxs)(d.b.div,{className:"wrapper-middle-to-be-updated-motion",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"how-it-started",children:"About us"}),Object(s.jsx)(G,{})]}),Object(s.jsx)("div",{className:"feedback",children:Object(s.jsx)("p",{})})]}),Object(s.jsxs)("div",{className:"wrapper-down",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipTeam",children:"Team"})}),Object(s.jsx)(S.a,{id:"dataTipTeam",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Meet members of our crew who plays significant role in the team "})}),Object(s.jsx)(T,{name:"Lisa",header:"Meet the team",img:M}),Object(s.jsx)(T,{name:"Danielle",header:"Meet the team",img:D}),Object(s.jsx)(T,{name:"Brian",header:"Meet the team",img:J}),Object(s.jsx)("p",{className:"thick-join-us",children:"Join us!"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipLearnMore",children:"Learn more"})}),Object(s.jsx)(S.a,{id:"dataTipLearnMore",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Learn more about our work methods, sample of works or client user stories "})}),Object(s.jsx)(L,{name:"Manifesto",header:"Manifesto"}),Object(s.jsx)(L,{name:"Works",header:"Works"}),Object(s.jsx)(L,{name:"Stories",header:"Stories"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipMeetUs",children:"Meet us"})}),Object(s.jsx)(S.a,{id:"dataTipMeetUs",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Get to know our studio, user community or workshops we organize "})}),Object(s.jsx)(L,{name:"Studio",header:"Studio"}),Object(s.jsx)(L,{name:"Community",header:"Community"}),Object(s.jsx)(L,{name:"Workshops",header:"Workshops"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipContact",children:"Contact"})}),Object(s.jsx)(S.a,{id:"dataTipContact",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Contact us by visiting our official channels on social web portals "})}),Object(s.jsx)("p",{className:"thin",children:"Twitter"}),Object(s.jsx)("p",{className:"thin",children:"Facebook"}),Object(s.jsx)("p",{className:"thin",children:"Instagram"})]})]})]})};var I=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"wrapper-up-logo",children:Object(s.jsx)("img",{src:A,alt:"gtd."})}),Object(s.jsx)("div",{className:"wrapper-up",children:Object(s.jsx)("h1",{children:"Hello, we\u2019re gtd."})}),Object(s.jsxs)(d.b.div,{className:"wrapper-middle-to-be-updated-motion",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"how-it-started",children:"Contact"}),Object(s.jsx)(G,{})]}),Object(s.jsx)("div",{className:"feedback",children:Object(s.jsx)("p",{})})]}),Object(s.jsxs)("div",{className:"wrapper-down",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipTeam",children:"Team"})}),Object(s.jsx)(S.a,{id:"dataTipTeam",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Meet members of our crew who plays significant role in the team "})}),Object(s.jsx)(T,{name:"Lisa",header:"Meet the team",img:M}),Object(s.jsx)(T,{name:"Danielle",header:"Meet the team",img:D}),Object(s.jsx)(T,{name:"Brian",header:"Meet the team",img:J}),Object(s.jsx)("p",{className:"thick-join-us",children:"Join us!"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipLearnMore",children:"Learn more"})}),Object(s.jsx)(S.a,{id:"dataTipLearnMore",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Learn more about our work methods, sample of works or client user stories "})}),Object(s.jsx)(L,{name:"Manifesto",header:"Manifesto"}),Object(s.jsx)(L,{name:"Works",header:"Works"}),Object(s.jsx)(L,{name:"Stories",header:"Stories"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipMeetUs",children:"Meet us"})}),Object(s.jsx)(S.a,{id:"dataTipMeetUs",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Get to know our studio, user community or workshops we organize "})}),Object(s.jsx)(L,{name:"Studio",header:"Studio"}),Object(s.jsx)(L,{name:"Community",header:"Community"}),Object(s.jsx)(L,{name:"Workshops",header:"Workshops"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"font-header",children:Object(s.jsx)("span",{"data-tip":" ","data-for":"dataTipContact",children:"Contact"})}),Object(s.jsx)(S.a,{id:"dataTipContact",className:"tooltip",place:"top",children:Object(s.jsx)("span",{children:" Contact us by visiting our official channels on social web portals "})}),Object(s.jsx)("p",{className:"thin",children:"Twitter"}),Object(s.jsx)("p",{className:"thin",children:"Facebook"}),Object(s.jsx)("p",{className:"thin",children:"Instagram"})]})]})]})},K=a(38);a(59);var B=function(){var e=Object(c.useState)(!1),t=Object(K.a)(e,2),a=t[0],i=t[1],n=Object(c.useRef)(),l=function(e){n.current.contains(e.target)?i(!a):i(!1)};return Object(c.useEffect)((function(){return document.addEventListener("mousedown",l),document.addEventListener("pointerdown",l),document.addEventListener("pointerup",l),function(){document.removeEventListener("mousedown",l),document.removeEventListener("pointerdown",l),document.removeEventListener("pointerup",l)}}),[]),Object(s.jsxs)("nav",{className:a?"sidebar active":"sidebar",ref:n,children:[Object(s.jsx)("button",{className:"sandwich",type:"button",onClick:l,children:Object(s.jsx)("div",{})}),Object(s.jsxs)("ul",{onClick:l,children:[Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{to:"/gtd-react-app/",children:Object(s.jsxs)(O.a,{children:[Object(s.jsx)(x.a,{className:"nav-icon",children:Object(s.jsx)(p.a,{icon:m.c})}),Object(s.jsx)(x.a,{className:"nav-headers",children:"Home"})]})})}),Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{to:"/gtd-react-app/about",children:Object(s.jsxs)(O.a,{children:[Object(s.jsx)(x.a,{className:"nav-icon",children:Object(s.jsx)(p.a,{icon:m.a})}),Object(s.jsx)(x.a,{className:"nav-headers",children:"About"})]})})}),Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{to:"/gtd-react-app/contact",children:Object(s.jsxs)(O.a,{children:[Object(s.jsx)(x.a,{className:"nav-icon",children:Object(s.jsx)(p.a,{icon:m.b})}),Object(s.jsx)(x.a,{className:"nav-headers",children:"Contact"})]})})})]})]})};var F=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(r.a,{children:[Object(s.jsx)(B,{}),Object(s.jsx)(d.a,{children:Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{path:"/gtd-react-app/",component:E,exact:!0}),Object(s.jsx)(l.a,{path:"/gtd-react-app/about",component:W}),Object(s.jsx)(l.a,{path:"/gtd-react-app/contact",component:I})]})})]})})};n.a.render(Object(s.jsx)(F,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.8c7aab75.chunk.js.map