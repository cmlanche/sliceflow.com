webpackJsonp([1],[,,,,,function(t,e,n){"use strict";function a(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null}function s(t){var e=document.location.origin+document.location.pathname;console.log(e),t.get("/login/github/"+encodeURIComponent(e)).then(function(t){console.log(t.data),window.location.href=t.data})}e.a=a,e.b=s},,,,,function(t,e,n){"use strict";function a(){return o?"http://sliceflow.com":"http://localhost:9000"}function s(){return r}function i(){return"dkfjhsdkfjhskjfheiuwryi237y23928r9"}e.a=a,e.c=s,e.b=i;var o=!1,r={isLogin:!1}},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){function a(t){n(102)}var s=n(1)(n(69),n(124),a,"data-v-3428298d",null);t.exports=s.exports},,function(t,e,n){"use strict";var a=n(20),s=n(132),i=n(118),o=n.n(i),r=n(119),c=n.n(r),l=n(36),u=n.n(l);a.a.use(s.a),e.a=new s.a({linkActiveClass:"active",routes:[{name:"home",path:"/",component:o.a},{name:"accordion",path:"/manager",component:c.a},{name:"userinfo",path:"/userinfo",component:u.a}]})},,function(t,e,n){function a(t){n(108)}var s=n(1)(n(60),n(130),a,null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(36),s=n.n(a),i=n(10),o=n(5);e.default={name:"app",mounted:function(){var t=this;this.offCanvas=new Foundation.OffCanvas($("#offCanvas")),this.token=o.a("wm-token"),void 0!=this.token&&null!=this.token?localStorage.setItem("wm-token",this.token):this.token=localStorage.getItem("wm-token"),void 0!=this.token&&null!=this.token&&this.$http.post("/wementinfo",{appid:i.b(),domain:document.location.host,"wement-token":this.token}).then(function(e){e&&(console.log(e.data),0==e.data.code?(console.log("login success"),i.c().isLogin=!0,i.c().user=e.data.user,i.c().website=e.data.website,console.log(i.c()),t.userData=i.c(),t.isLogin=!0,t.initLogin()):-1==e.data.code?(t.isLogin=!1,t.requestAuth()):(t.isLogin=!1,console.log("login failed, the reason is "+e.data.message)))})},components:{UserInfo:s.a},data:function(){return{isLogin:!1,userData:i.c()}},methods:{onLogin:function(){i.c().isLogin||this.requestAuth()},initLogin:function(){},requestAuth:function(){o.b(this.$http)},notifyLogined:function(){}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5);e.default={name:"AddApp",data:function(){return{urlerror:""}},methods:{addWebsite:function(){var t=this,e=$("#name").val(),n=$("#url").val();""!=e&&""!=n&&this.$http.post("/website/add",{url:n,name:e,"wement-token":localStorage.getItem("wm-token")}).then(function(e){e&&(0==e.data.code?t.$emit("handler","addwebsite_success"):-1==e.data.code&&a.b(t.$http))})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ads"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5);e.default={name:"apps",mounted:function(){var t=this;console.log("apps mounted"),this.$http.post("/websites/me",{"wement-token":localStorage.getItem("wm-token")}).then(function(e){e&&(0==e.data.code?(console.log("fetch my websites success"),console.log(e.data),t.websites=e.data.websites):-1==e.data.code?a.b(t.$http):console.log(e.dark.message))})},methods:{addApp:function(){this.$emit("handler","addapp")}},data:function(){return{websites:[]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(26),s=n.n(a),i=n(5);e.default={name:"comments",mounted:function(){this.requestPage(0)},data:function(){return{comments:[],pageSize:0,pageIndex:0,itemCount:20,amount:0}},methods:{deleteComment:function(t,e){var n=this;console.log("deletecomment = "+t.id),this.$http.post("/comment/delete",{id:t.id,"wement-token":localStorage.getItem("wm-token")}).then(function(t){if(t)if(0==t.data.code){var a=e.target.parentNode.parentNode;console.log(a),a.parentNode.removeChild(a)}else-1==t.data.code?i.b(n.$http):console.log(t.data.message)})},requestPage:function(t){var e=this;this.$http.post("/comments/all",{"wement-token":localStorage.getItem("wm-token"),pageindex:t,pagecount:this.itemCount}).then(function(t){if(t)if(console.log(t.data),0==t.data.code){var n=!0,a=!1,o=void 0;try{for(var r,c=s()(t.data.comments);!(n=(r=c.next()).done);n=!0){var l=r.value;e.comments.push(l)}}catch(t){a=!0,o=t}finally{try{!n&&c.return&&c.return()}finally{if(a)throw o}}e.amount=t.data.count}else-1==t.data.code?i.b(e.$http):console.log(t.data.message)})},loadMore:function(){this.pageIndex++,this.requestPage(this.pageIndex)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"cmlanche"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(120),s=n.n(a),i=n(116),o=n.n(i),r=n(115),c=n.n(r),l=n(117),u=n.n(l),d=n(114),m=n.n(d),v=n(121),f=n.n(v);e.default={name:"manager",components:{ManagerMenu:s.a},mounted:function(){},data:function(){return{view:f.a}},methods:{onMenuItemSelected:function(t){"statistics"==t.name?this.view=f.a:"apps"==t.name?this.view=o.a:"ads"==t.name?this.view=c.a:"comments"==t.name&&(this.view=u.a)},onHandler:function(t,e){console.log(t),"addapp"==t?this.view=m.a:"addwebsite_success"==t&&(this.view=o.a)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(26),s=n.n(a);e.default={name:"manager-menu",mounted:function(){},data:function(){return{menus:[{title:"统计信息",isActive:!0,name:"statistics"},{title:"应用管理",isActive:!1,name:"apps"},{title:"评论管理",isActive:!1,name:"comments"},{title:"广告设置",isActive:!1,name:"ads"}],active:"active"}},methods:{onMenuItem:function(t){var e=!0,n=!1,a=void 0;try{for(var i,o=s()(this.menus);!(e=(i=o.next()).done);e=!0){var r=i.value;r.isActive=t.name==r.name}}catch(t){n=!0,a=t}finally{try{!e&&o.return&&o.return()}finally{if(n)throw a}}this.$emit("onMenuItemSelected",t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"statistics",data:function(){return{website_count:0,comments_today:0,comments_7days:0,comments_all:0}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(10);e.default={name:"user-info",mounted:function(){console.log("user info")},props:["userdata"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(11),s=n.n(a),i=n(37),o=n.n(i),r=n(20),c=n(41),l=n(40),u=n.n(l),d=n(38),m=n(10),v=n(42),f=(n.n(v),n(39));n.n(f);r.a.use(c.a),window.jQuery=s.a,window.$=s.a,o.a.defaults.baseURL=m.a(),r.a.prototype.$http=o.a,new r.a({el:"#app",router:d.a,template:"<App/>",components:{App:u.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){t.exports=n.p+"static/img/head.eb764af.jpg"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NEFEOUQ3QUJGRDMxMUUxQTA4OEMyOTc3RjM1MkNCRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NEFEOUQ3QkJGRDMxMUUxQTA4OEMyOTc3RjM1MkNCRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk0QUQ5RDc4QkZEMzExRTFBMDg4QzI5NzdGMzUyQ0JGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk0QUQ5RDc5QkZEMzExRTFBMDg4QzI5NzdGMzUyQ0JGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9fEOXgAABIhJREFUeNrEVm1oW1UYfnKTNM3nTbqkarXRap1j0zLXtdR2XdwvcbAiVGQtoogi/pkYRBF/+EftT4cDoUhrkdHiwKJYEQq6UURajf2YdIRlqSODtiS2SZbv5Ca5vue0DUmT1tS5+pI3N/eck/c578d53qPI5/MgERQKxZv0fIpUJuWD/7GoSYOkl2RZvqwgYIFevid9Fvsnrypyudw58vYC7WLfUAkvwbx9ej9BmRBeXkVfEvZfJOEuFdI/imqnMLNxtVpdeM9ms1UbFQSBK3dNklhOqwdmf/R6vQgEAujs7IRKpSpsqJKh7RIKhfhaURSxeWRL7bPJSqpUKjE1NQWHw4H29nYMDQ1tVeSugNPT0+jv70dLSwtGR0e5nUr2VbsZ8fv9PMQul4vr4OAg6uvrEYvFyjbAIpJIJDAzM1Pi9Z5yvDWWSqVKxmdnZ/dUQNFolD9ZqMs2Wgl4a5HBYLijyp2bm+NPFm4WuRJwCs8YqVysTHw+n2y32+VN7v7XOjAwwO2l0+lijGAZMOWPL3Q6nXcMylSv18tLS0vcZjFwWVVrNBrE43FMTEyUtxcqIKVS2FVr1KX1ymyNj48XamfHqmbV6fF4sLKyUhg73d2GN3qfocU5SCxXKg0UmwRRKMishHwuC5PRgN+v+/DR518hEk/wObfbXV1Vh8NhZNIZ/vvooUfw7Sfvg04jhIeO0MlXIrL4Gz2UjGU2qlbKQGO2QnPoKLI3FnHqVAcUtP6d8yN8PhKJlJyWHYG1Wu2GYfLg9InjUOYzCNVYkfJL9OcMxHuasO5ZgFBTS+95znKipQnLV32oszZA5V+E49hhGHRaxBLJEtbbkblY2Tc2NsIkmviCR+33IUF5MjbYMfv1JbjGvoTu3gehoI3x40GfWrMF8WgSP3z4AaK345ANdXjAasYBceM4Njc3l+VY2O5tMpmE1WqF4+TJjTDF4tDpdEiGQ2jq6EJTpwNSPAI5l9s48+SElIhDazLiiTO90FKO07dDVKS13BaTnp6e6riayVtOJ39+evEbxKlji6k1HG57HI91PImQZx4ChW/ZewuxcAz5dArZ4C10PH8GulwYVlGDn6+6EaC5F86e5VzPNlHicSVgxsUnurowNDyMP1fX0N53DlemXchc/wXa1XnYDBqY9EYo0xJqKdY2mxXGRACa5Vnk/F6MfncFzzkHcKy1DSNfDPP0EYGUYCiIyMfIsb7tXM0Kwmg0YnJyEm+/+x6u/bGAriMP4yDl/GCTHXUmAx0pJUsxcXGOH51rN27C7VvFr+6beOmV1/DZhfOcdlmz2MbVoYrAxX3XbDbzMP3402WMXBzF3PwC3QrSqKHiClLeZWoAFouFki1AJ1rg6O7Gyy/24XhrK/eUHSVmpww4GAxWBC7eANEeZ7RCu/xrjW9mfX2ddx6b1Qa9QQ/bgbrCGgZY1hiKgFVVXEV5n2W6JUa9DiJVb+P9DXw+k8mArskgJ0qAdrs0MAJR77Xdbe/TlXp5NZe91P9wyTQyAhna6d51F9XDPJ4i8NdJP2YR2AdvvaS9fwswANRfMaFbREMoAAAAAElFTkSuQmCC"},function(t,e,n){function a(t){n(106)}var s=n(1)(n(61),n(128),a,"data-v-555ab7b4",null);t.exports=s.exports},function(t,e,n){function a(t){n(105)}var s=n(1)(n(62),n(127),a,"data-v-54837528",null);t.exports=s.exports},function(t,e,n){function a(t){n(107)}var s=n(1)(n(63),n(129),a,"data-v-5b624666",null);t.exports=s.exports},function(t,e,n){function a(t){n(109)}var s=n(1)(n(64),n(131),a,"data-v-f06b8a30",null);t.exports=s.exports},function(t,e,n){function a(t){n(101)}var s=n(1)(n(65),n(123),a,"data-v-107f1b5a",null);t.exports=s.exports},function(t,e,n){function a(t){n(104)}var s=n(1)(n(66),n(126),a,"data-v-4f6a63e9",null);t.exports=s.exports},function(t,e,n){function a(t){n(100)}var s=n(1)(n(67),n(122),a,"data-v-10550568",null);t.exports=s.exports},function(t,e,n){function a(t){n(103)}var s=n(1)(n(68),n(125),a,"data-v-3a243797",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"menu vertical align-right"},t._l(t.menus,function(e){return n("li",{class:{active:e.isActive},on:{click:function(n){t.onMenuItem(e)}}},[n("a",[t._v(t._s(e.title))])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row align-middle"},[n("span",{staticClass:"label"},[t._v("sliceflow.com")])])}]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.userdata.isLogin?a("div",{staticClass:"card"},[a("img",{attrs:{src:t.userdata.user.headimage}}),t._v(" "),a("div",{staticClass:"card-section"},[a("h3",[a("img",{staticClass:"platform_logo",attrs:{src:n(113)}}),t._v(t._s(t.userdata.user.nickname))]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.cmlanche.com",target:"_blank"}},[t._v(t._s(t.userdata.user.homepage))])]),t._v(" "),t._m(0)])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("button",{staticClass:"primary button",attrs:{type:"button"}},[t._v("注销")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"callout"},[n("p",[t._v("网站数："),n("em",[t._v(t._s(t.website_count))])]),t._v(" "),n("p",[t._v("今日评论数："),n("em",[t._v(t._s(t.comments_today))])]),t._v(" "),n("p",[t._v("7日内评论数："),n("em",[t._v(t._s(t.comments_7days))])]),t._v(" "),n("p",[t._v("总评论数："),n("em",[t._v(t._s(t.comments_all))])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"grid-x grid-padding-x"},[n("div",{staticClass:"cell medium-2 small-4 large-2"},[n("manager-menu",{on:{onMenuItemSelected:t.onMenuItemSelected}})],1),t._v(" "),n("div",{staticClass:"cell medium-10 small-8 large-10"},[n(t.view,{tag:"component",on:{handler:t.onHandler}})],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"callout"},[t._v("\n  暂未实现\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{"data-abide":"",novalidate:""}},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"row"},[n("button",{staticClass:"primary button",attrs:{type:"submit"},on:{click:t.addWebsite}},[t._v("提交")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"medium-6 columns"},[n("label",[t._v("应用URL\n                "),n("input",{attrs:{id:"url",type:"text",pattern:"url",required:"",placeholder:"请输入您的网站地址"}}),t._v(" "),n("span",{staticClass:"form-error",staticStyle:{display:"none"}},[t._v("网址格式不对")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"medium-6 columns"},[n("label",[t._v("应用名称\n                "),n("input",{attrs:{id:"name",type:"text",placeholder:"请输入您的网站名称"}}),t._v(" "),n("span",{staticClass:"form-error",staticStyle:{display:"none"}},[t._v("网站名称不能为空")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("button",{staticClass:"primary button",attrs:{type:"button"},on:{click:t.addApp}},[t._v("新增")]),t._v(" "),n("table",{staticClass:"hover"},[t._m(0),t._v(" "),n("tbody",t._l(t.websites,function(e){return n("tr",[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[n("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))])]),t._v(" "),n("td",[t._v(t._s(e.createdtime))])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",[t._v("AppId")]),t._v(" "),n("th",[t._v("URL")]),t._v(" "),n("th",[t._v("创建时间")])])}]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"off-canvas position-right",attrs:{id:"offCanvas","data-off-canvas":""}},[n("user-info",{attrs:{userdata:t.userData}})],1),t._v(" "),n("div",{staticClass:"off-canvas-content",attrs:{"data-off-canvas-content":""}},[n("div",{staticClass:"top-bar"},[n("div",{staticClass:"top-bar-left"},[n("ul",{staticClass:"menu"},[n("li",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[t._v("Sliceflow.com")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("主页")])],1),n("li"),n("li",[n("router-link",{attrs:{to:"/manager"}},[t._v("管理中心")])],1)])]),t._v(" "),n("div",{staticClass:"top-bar-right"},[n("ul",{staticClass:"menu"},[t.isLogin?n("li",[t._m(0)]):n("li",[n("a",{staticClass:"button small menu-button",on:{click:t.onLogin}},[t._v("登陆")])])])])]),t._v(" "),n("div",{staticClass:"content-wrapper"},[n("router-view")],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"headimage-link",attrs:{"data-toggle":"offCanvas"}},[a("img",{staticClass:"headimage",attrs:{src:n(112)}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("table",{staticClass:"hover"},[t._m(0),t._v(" "),n("tbody",t._l(t.comments,function(e){return n("tr",[n("td",[t._v(t._s(e.content))]),t._v(" "),n("td",[n("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])]),t._v(" "),n("td",[t._v(t._s(e.createdtime))]),t._v(" "),n("td",[n("a",{on:{click:function(n){t.deleteComment(e,n)}}},[t._v("删除")])])])}))]),t._v(" "),n("button",{staticClass:"button primary",attrs:{type:"button"},on:{click:t.loadMore}},[t._v("点击加载")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",{attrs:{width:"50%"}},[t._v("评论")]),t._v(" "),n("th",{attrs:{width:"20%"}},[t._v("文章")]),t._v(" "),n("th",{attrs:{width:"20%"}},[t._v("创建时间")]),t._v(" "),n("th",{attrs:{width:"10%"}},[t._v("操作")])])}]}}],[70]);