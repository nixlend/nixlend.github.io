(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),c=n.n(i),o=(n(14),n(1)),s=n(2),l=n(4),u=n(3),m=n(5),p=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mx-auto mt-5"},r.a.createElement("h1",{className:"text-center display-3"},"Nicholas Lee"))}}]),t}(a.Component),h=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.link,t=e.url,n=e.fontawesome;return r.a.createElement("a",{className:"text-secondary",href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"mx-2 rotate "+n}))}}]),t}(a.Component),d=r.a.createContext(),f=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={links:[{id:1,name:"github",url:"https://github.com/nixlend",fontawesome:"fab fa-2x fa-github-alt"},{id:2,name:"linkedin",url:"https://www.linkedin.com/in/nicholas-lee-263b4511b/?originalSubdomain=ca",fontawesome:"fab fa-2x fa-linkedin"}],projects:[{id:1,name:"CursesChat",description:"A chatroom application written in Python terminal base style. This is a group of 4 project.",url:"https://github.com/tristanp2/CursesChat"},{id:2,name:"Efiiroute",description:"A High Fidelity UI design to find the most efficient errands for user. This is a group of 4 project.",url:"https://projects.invisionapp.com/share/S26L8TWWT#/screens"},{id:3,name:"MineSweeper",description:"A minesweeper game written in jQuery and javaScript.",url:"https://minesweepy.herokuapp.com/"},{id:4,name:"Wordpress website",description:"A wordpress website created for a local R&B artist, it is currently still under final development processs.",url:"./img/wpwork.jpg"}]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.Provider,{value:this.state},this.props.children)}}]),t}(a.Component),b=d.Consumer,j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null,function(e){var t=e.links;return r.a.createElement("div",{className:"mx-auto text-center",style:{width:"300px"}},t.map(function(e){return r.a.createElement(h,{key:e.id,link:e})}))})}}]),t}(a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.project,t=e.name,n=e.description,a=e.url;return r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"text-success"},r.a.createElement("h4",null,t)),r.a.createElement("p",null,n))}}]),t}(a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null,function(e){var t=e.projects;return r.a.createElement("div",{className:"row mt-5 justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h3",{className:"mb-3"},"Projects that I have involved in")),t.map(function(e){return r.a.createElement(O,{key:e.id,project:e})}))})}}]),t}(a.Component),w=(n(15),n(16),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(j,null),r.a.createElement(v,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.53cf5547.chunk.js.map