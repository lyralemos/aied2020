(function(t){function a(a){for(var s,i,o=a[0],l=a[1],c=a[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(p.length)p.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==n[l]&&(s=!1)}s&&(r.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},n={app:0},r=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/aied2020/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Menu"),e("div",{staticClass:"content"},[e("router-view")],1),t._m(0)],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"})])])])}],i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar fixed-top navbar-expand-lg navbar-light bg-light"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[s("img",{staticStyle:{height:"3.8rem"},attrs:{src:e("cf05"),alt:"AEID2020",title:""}})]),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Home "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Dates")])]),s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                    Calls\n                ")]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("General Call")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Call for industry papers")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Call for tutorials ans workshops")])])]),s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                    Program\n                ")]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Main conference program")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Proceddings")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Call for tutorials ans workshops")])])])]),s("div",{staticClass:"navbar-text"},[s("button",{staticClass:"btn btn-primary"},[t._v("Registration")])])])])}],l=e("2877"),c={},d=Object(l["a"])(c,i,o,!1,null,null,null),u=d.exports,p={name:"App",components:{Menu:u}},v=p,f=Object(l["a"])(v,n,r,!1,null,null,null),h=f.exports,m=e("8c4f"),b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[t._m(0),e("div",{staticClass:"countdown"},[t._m(1),e("div",{staticClass:"container countdown-cont"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-6 col-md-3"},[e("span",{staticClass:"number-wrap"},[e("span",{staticClass:"number display-2"},[t._v(t._s(t.days))]),e("span",{staticClass:"period display-7",attrs:{"mbr-text":""}},[t._v("Days")]),e("span",{staticClass:"dot"},[t._v(":")])])]),e("div",{staticClass:"col-xs-12 col-sm-6 col-md-3"},[e("span",{staticClass:"number-wrap"},[e("span",{staticClass:"number display-2"},[t._v(t._s(t.hours))]),e("span",{staticClass:"period display-7",attrs:{"mbr-text":""}},[t._v("Hours")]),e("span",{staticClass:"dot"},[t._v(":")])])]),e("div",{staticClass:"col-xs-12 col-sm-6 col-md-3"},[e("span",{staticClass:"number-wrap"},[e("span",{staticClass:"number display-2"},[t._v(t._s(t.minutes))]),e("span",{staticClass:"period display-7",attrs:{"mbr-text":""}},[t._v("Minutes")]),e("span",{staticClass:"dot"},[t._v(":")])])]),e("div",{staticClass:"col-xs-12 col-sm-6 col-md-3"},[e("span",{staticClass:"number-wrap"},[e("span",{staticClass:"number display-2"},[t._v(t._s(t.seconds))]),e("span",{staticClass:"period display-7",attrs:{"mbr-text":""}},[t._v("Seconds")])])])])])])])},C=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cta"},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"data"},[e("h1",{staticClass:"pb-3"},[t._v("AIED 2020")]),e("h2",{staticClass:"pb-3"},[t._v("The 20th International Conference on Artificial Intelligence in Education")]),e("h2",{staticClass:"pb-3"},[t._v("July 7th - 10th 2020, Ifrane, Marocco")]),e("div",{staticClass:"actions"},[e("a",{staticClass:"btn btn-md btn-secondary",attrs:{href:""}},[t._v("Conference Program")]),e("a",{staticClass:"btn btn-md btn-secondary",attrs:{href:""}},[t._v("Call for Participation")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"text-center"},[t._v("Education for All in the XXI Century")]),e("p",[t._v("\n            The AIED 2020 conference theme will be “Education for All in the XXI Century”. \n            Inequity within and between countries continues to grow in the industrial age. \n            Intelligent information technologies have been proposed to reduce this difference, \n            but may instead increase the digital divide if applied without reflection. \n            Education plays a central role in this problem, as it is one of the key approaches \n            that could help to reduce this difference. However, further work is needed to \n            understand how to provide equitable education for all, and many questions remain \n            to be answered. What are the main barriers to providing educational opportunities \n            to underserved teachers and learners? How can AI and advanced technologies help \n            overcome these difficulties? How can this work be done ethically? In this conference \n            we gather the collective intelligence of the community to think about this problem \n            and provide innovative and creative solutions.\n          ")])])])])}],_={name:"home",data:function(){return{days:0,hours:0,minutes:0,seconds:0}},methods:{startTimer:function(){var t=this,a=new Date("Jan 7, 2020 00:00:00").getTime(),e=setInterval((function(){var s=(new Date).getTime(),n=a-s;t.days=Math.floor(n/864e5),t.hours=Math.floor(n%864e5/36e5),t.minutes=Math.floor(n%36e5/6e4),t.seconds=Math.floor(n%6e4/1e3),n<0&&clearInterval(e)}),1e3)}},mounted:function(){this.startTimer()}},w=_,g=Object(l["a"])(w,b,C,!1,null,null,null),y=g.exports;s["a"].use(m["a"]);var x=new m["a"]({routes:[{path:"/",name:"home",component:y}]});e("4989"),e("ab8b"),e("a347");s["a"].config.productionTip=!1,new s["a"]({router:x,render:function(t){return t(h)}}).$mount("#app")},a347:function(t,a,e){},cf05:function(t,a,e){t.exports=e.p+"img/logo.6a1225fe.png"}});
//# sourceMappingURL=app.8484e858.js.map