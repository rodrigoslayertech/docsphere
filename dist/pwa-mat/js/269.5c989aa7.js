(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[269],{"+8R3":function(t,s,e){},"0cSt":function(t,s,e){},"6y3U":function(t,s,e){"use strict";var a=e("xq9U"),l=e.n(a);l.a},ElQN:function(t,s,e){"use strict";var a=e("+8R3"),l=e.n(a);l.a},OPQD:function(t,s,e){},ZAh1:function(t,s,e){"use strict";var a=e("OPQD"),l=e.n(a);l.a},eD0L:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{class:t.row},[t.nodes.length>0?e("q-scroll-area",{class:t.meta,attrs:{id:"anchor"}},[e("d-page-anchor",{attrs:{nodes:t.nodes}})],1):t._e(),e("q-scroll-area",{class:t.main,attrs:{id:"content"}},[t._t("default"),t.disableNav?t._e():e("d-page-nav"),t.nodes.length>0?e("q-scroll-observable",{on:{scroll:t.scrolling}}):t._e()],2)],1)},l=[];a._withStripped=!0;var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-tree",{class:t.stylize,attrs:{"default-expand-all":"",nodes:t.nodes,"node-key":"id",selected:t.selected},on:{"update:selected":function(s){t.selected=s}},scopedSlots:t._u([{key:"default-header",fn:function(s){return e("div",{},[s.node.id?e("b",[t._v(t._s(t.$t("_."+t.$store.state.i18n.absolute+".headers["+(s.node.id-1)+"]")))]):e("b",[t._v(t._s(t.$t("_."+t.$store.state.i18n.base+"._")))])])}}])})},n=[];i._withStripped=!0;e("xfY5"),e("pIFo"),e("hEkN");var r=e("cDf5"),o=e.n(r),c=e("4IOb"),d=c["Ca"].getScrollTarget,p=c["Ca"].setScrollPosition,u={methods:{anchor:function(t){var s=this,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.$store.commit("page/setScrolling",!1),"string"===typeof t&&(t=Number(t.replace(/^\D+/g,""))),"number"===typeof t){t=""+t;var a=document.getElementById(t);if("object"===o()(a)){var l=d(a),i=a.offsetTop-a.scrollHeight,n=300;if(this.$q.platform.is.desktop)p(l,i+33,n);else{var r=0;if(this.$q.screen.lt.lg){var c=document.getElementById("anchor");r=c.offsetHeight,r>0&&(r+=20)}window.scrollTo(0,i+40+r)}e&&this.select(t),setTimeout(function(){s.$store.commit("page/setScrolling",!0)},600)}}},select:function(t){this.$store.commit("page/setAnchor",Number(t))},scrolling:function(t){if(this.$store.state.page.scrolling&&t.position>5){var s=t.position+60,e=this.$store.state.page.anchors,a=0;"/"!==this.$store.state.page.relative&&(a=1);for(var l=0;l<e.length;l++){if(e[l]>=s){this.select(l-1+a),this.push(l-1+a,!1);break}"undefined"===typeof e[l+1]&&s>=e[l]&&(this.select(l+a),this.push(l+a,!1))}}},push:function(t){var s=this,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){if("#"+t===this.$route.hash)return void this.anchor(t);if(null===t)return void this.anchor(this.selected,!1)}this.$router.push(this.$route.path+"#"+t),e&&(this.$q.platform.is.desktop?this.anchor(t):setTimeout(function(){s.anchor(t)},600))}}},b={name:"DPageAnchor",mixins:[u],props:{nodes:{type:Array,required:!0}},computed:{selected:{get:function(){var t=this.$store.state.page.anchor;return"/"!==this.$store.state.page.relative&&0===t?t+1:t},set:function(t){this.push(t)}},stylize:function(){return this.$q.platform.is.mobile&&!this.$q.screen.lt.lg?"fixed":null}},mounted:function(){var t=this;this.$store.commit("layout/setMetaToggle",!0),setTimeout(function(){t.$store.commit("page/setScrolling",!0)},1e3);var s=this.$route.hash.replace(/^\D+/g,"");s===Number(s)+""&&setTimeout(function(){t.anchor(s)},500)},beforeDestroy:function(){this.$store.commit("layout/setMetaToggle",!1),this.$store.commit("page/setAnchor",0),this.$store.commit("page/setAnchors",!1),this.$store.commit("page/setScrolling",!1)}},v=b,h=(e("ElQN"),e("KHd+")),f=Object(h["a"])(v,i,n,!1,null,null,null),m=f.exports,_=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",[t.prev?e("router-link",{attrs:{to:""+t.prev}},[e("q-icon",{attrs:{name:"navigate_before"}}),e("span",[t._v(t._s(t.$t("_"+t.prev.replace(/\//g,".")+"._")))])],1):t._e(),t.next?e("router-link",{staticClass:"float-right",attrs:{to:""+t.next}},[e("span",[t._v(t._s(t.$t("_"+t.next.replace(/\//g,".")+"._")))]),e("q-icon",{attrs:{name:"navigate_next"}})],1):t._e()],1)},C=[];_._withStripped=!0;var g={name:"DPageNav",data:function(){return{prev:this._prev(),next:this._next()}},methods:{_prev:function(){for(var t=this.$store.state.page.base,s=this.$router.options.routes.slice(0,-1),e=0;e<s.length;e++)if("/"+t===s[e].path&&e>0)return s[e-1].path;return""},_next:function(){for(var t=this.$store.state.page.base,s=this.$router.options.routes.slice(0,-1),e=0;e<s.length;e++)if("/"+t===s[e].path&&"undefined"!==typeof s[e+e])return s[e+1].path;return""}}},y=g,$=(e("ZAh1"),Object(h["a"])(y,_,C,!1,null,"0228112c",null)),L=$.exports,j={components:{DPageAnchor:m,DPageNav:L},mixins:[u],props:{nodes:{type:Array,default:Array},disableNav:{type:Boolean,default:!1}},computed:{row:function(){var t="";return this.$q.screen.lt.lg||(t="row reverse"),t},main:function(){var t="";switch(this.$store.state.layout.meta&&this.nodes.length>0?this.$q.screen.lt.lg||(t="col-9"):t="col-12",this.$store.state.page.relative){case"/showcase":t+=" showcase";break;case"/showcase/code":t+=" showcase-code";break;default:t+=" overview"}return t},meta:function(){var t="";return t=this.$store.state.layout.meta?this.$q.screen.lt.lg?"meta-on-top":"col-3 meta-on-right":"hidden",t}}},x=j,w=(e("zGJJ"),Object(h["a"])(x,a,l,!1,null,null,null)),k=w.exports,P=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:t.stylize,attrs:{id:t.id},on:{click:function(s){t.push(t.id)}}},[t._v(t._s(t.heading))])},T=[];P._withStripped=!0;e("KKXr");var q={name:"DPageH",mixins:[u],props:{h:{type:String,required:!0}},computed:{id:function(){var t=this.h.split("-");return t[1]},stylize:function(){var t=this.h.split("-"),s="h".concat(t[0]);return"dh ".concat(s)},heading:function(){var t=this.$store.state.i18n.base,s=this.$store.state.i18n.absolute,e="";return t&&s&&(e="0"===this.id?this.$t("_.".concat(t,"._")):this.$t("_.".concat(s,".headers[").concat(this.id-1,"]"))),e}},methods:{register:function(t){var s=document.getElementById(t.id);if("object"===o()(s)){var e=this.$store.state.page.anchors;e[t.id]||this.$store.commit("page/setAnchors",s.offsetTop-s.scrollHeight+33)}}},mounted:function(){this.register(this.$el)}},H=q,S=(e("y6KF"),Object(h["a"])(H,P,T,!1,null,null,null)),D=S.exports,M=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"gist"},[e("div",{staticClass:"gist-file"},[e("div",{staticClass:"gist-data"},[e("div",{staticClass:"js-gist-file-update-container js-task-list-container file-box"},[e("div",{staticClass:"file"},[e("div",{staticClass:"blob-wrapper data",class:t.typing,attrs:{itemprop:"text"}},[e("table",{staticClass:"highlight tab-size js-file-line-container",attrs:{"data-tab-size":"8"}},[e("tbody",[t._t("default")],2)])])])])])])])},A=[];M._withStripped=!0;var E={name:"DPageCode",props:{type:String,default:"vue"},computed:{typing:function(){var t="";switch(this.type){case"styl":t="type-stylus";break;case"js":t="type-javascript";break;case"css":t="type-css";break;default:t="type-vue"}return t}}},N=E,O=(e("6y3U"),Object(h["a"])(N,M,A,!1,null,null,null)),z=O.exports,I={methods:{t:function(t){if("number"===typeof t){var s=this.$store.state.i18n.base;return this.$t("_.".concat(s,".overview.texts[").concat(--t,"]"))}if("string"===typeof t)return this.$t(t)},l:function(t){var s=this.$store.state.i18n.base,e=this.$t("_.".concat(s,".overview.links[").concat(--t,"]"));return'<a href="'.concat(e[0],'" target="_blank">').concat(e[1],"</a>")},sc:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",a=this.codes[--t];if(a.constructor===Array){var l="";switch(s){case"a":s=this.$t("_a");break;case"o":s=this.$t("_o");break}for(var i=a.length,n=0;n<i;n++)a[i-1]===a[n]?l+="<code>".concat(a[n],"</code>").concat(e):s&&a[i-2]===a[n]?l+="<code>".concat(a[n],"</code>").concat(s," "):l+="<code>".concat(a[n],"</code>, ");return l}return"<code>".concat(a,"</code>")}}};s["a"]={components:{DPage:k,DPageH:D,DPageCode:z},mixins:[I]}},pYhP:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("d-page",{attrs:{nodes:t.nodes}},[e("d-page-h",{attrs:{h:"1-0"}}),e("p",{domProps:{innerHTML:t._s(t.t(1))}}),e("p",{domProps:{innerHTML:t._s(t.t(2)+t.l(1)+"."+t.t(3)+t.l(2)+".")}}),e("d-page-h",{attrs:{h:"2-1"}}),e("p",{domProps:{innerHTML:t._s(t.t(4)+t.sc(1,"a"))}}),e("p",{domProps:{innerHTML:t._s(t.t(5))}}),e("d-page-h",{attrs:{h:"2-2"}}),e("p",{domProps:{innerHTML:t._s(t.t(6)+t.sc(2)+t.t(7)+t.sc(3)+t.e1()+":")}}),e("p",{domProps:{innerHTML:t._s(t.sc(4))}}),e("p",{domProps:{innerHTML:t._s(t.t(8)+t.sc(5,"a"))}}),e("p",{domProps:{innerHTML:t._s(t.t(9)+t.sc(6)+t.t(10))}}),e("d-page-h",{attrs:{h:"2-3"}}),e("p",{domProps:{innerHTML:t._s(t.t(11)+t.sc(7,"o","")+t.t(12))}}),e("d-page-code",[e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-01-vue-L1","data-line-number":"1"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-01-vue-LC1"}},[e("span",{staticClass:"pl-c"},[e("span",{staticClass:"pl-c"},[t._v("\x3c!--")]),t._v(" changing text color "),e("span",{staticClass:"pl-c"},[t._v("--\x3e")])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-01-vue-L2","data-line-number":"2"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-01-vue-LC2"}},[t._v("<"),e("span",{staticClass:"pl-ent"},[t._v("p")]),t._v(" "),e("span",{staticClass:"pl-e"},[t._v("class")]),t._v("="),e("span",{staticClass:"pl-s"},[e("span",{staticClass:"pl-pds"},[t._v('"')]),t._v("text-primary"),e("span",{staticClass:"pl-pds"},[t._v('"')])]),t._v(">....</"),e("span",{staticClass:"pl-ent"},[t._v("p")]),t._v(">")])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-01-vue-L3","data-line-number":"3"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-01-vue-LC3"}})]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-01-vue-L4","data-line-number":"4"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-01-vue-LC4"}},[e("span",{staticClass:"pl-c"},[e("span",{staticClass:"pl-c"},[t._v("\x3c!--")]),t._v(" changing background color "),e("span",{staticClass:"pl-c"},[t._v("--\x3e")])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-01-vue-L5","data-line-number":"5"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-01-vue-LC5"}},[t._v("<"),e("span",{staticClass:"pl-ent"},[t._v("p")]),t._v(" "),e("span",{staticClass:"pl-e"},[t._v("class")]),t._v("="),e("span",{staticClass:"pl-s"},[e("span",{staticClass:"pl-pds"},[t._v('"')]),t._v("bg-positive"),e("span",{staticClass:"pl-pds"},[t._v('"')])]),t._v(">...</"),e("span",{staticClass:"pl-ent"},[t._v("p")]),t._v(">")])])]),e("d-page-h",{attrs:{h:"2-4"}}),e("p",{domProps:{innerHTML:t._s(t.t(13)+t.sc(3)+t.t(14)+t.sc(8,",","")+t.t(15))}}),e("d-page-code",[e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-02-vue-L1","data-line-number":"1"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-02-vue-LC1"}},[e("span",{staticClass:"pl-c"},[e("span",{staticClass:"pl-c"},[t._v("\x3c!--")]),t._v(' Notice lang="stylus" '),e("span",{staticClass:"pl-c"},[t._v("--\x3e")])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-02-vue-L2","data-line-number":"2"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-02-vue-LC2"}},[e("span",{staticClass:"pl-s1"},[t._v("<"),e("span",{staticClass:"pl-ent"},[t._v("style")]),t._v(" "),e("span",{staticClass:"pl-e"},[t._v("lang")]),t._v("="),e("span",{staticClass:"pl-s"},[e("span",{staticClass:"pl-pds"},[t._v('"')])]),e("span",{staticClass:"pl-s"},[t._v("stylus"),e("span",{staticClass:"pl-pds"},[t._v('"')])]),t._v(">")])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-02-vue-L3","data-line-number":"3"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-02-vue-LC3"}},[e("span",{staticClass:"pl-s1"},[e("span",{staticClass:"pl-c"},[e("span",{staticClass:"pl-c"},[t._v("//")]),t._v(' "variables" is a Webpack alias injected by Quasar CLI')])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-02-vue-L4","data-line-number":"4"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-02-vue-LC4"}},[e("span",{staticClass:"pl-s1"},[e("span",{staticClass:"pl-k"},[t._v("@import")]),t._v(" "),e("span",{staticClass:"pl-s"},[t._v("'~variables'")])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-02-vue-L5","data-line-number":"5"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-02-vue-LC5"}},[e("span",{staticClass:"pl-s1"})])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-02-vue-L6","data-line-number":"6"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-02-vue-LC6"}},[e("span",{staticClass:"pl-s1"},[e("span",{staticClass:"pl-ent"},[t._v("div")])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-02-vue-L7","data-line-number":"7"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-02-vue-LC7"}},[e("span",{staticClass:"pl-s1"},[t._v("  "),e("span",{staticClass:"pl-c1"},[t._v("color")]),t._v(" "),e("span",{staticClass:"pl-smi"},[t._v("$red-1")])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-02-vue-L8","data-line-number":"8"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-02-vue-LC8"}},[e("span",{staticClass:"pl-s1"},[t._v("  "),e("span",{staticClass:"pl-c1"},[t._v("background-color")]),t._v(" "),e("span",{staticClass:"pl-smi"},[t._v("$grey-5")])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-02-vue-L9","data-line-number":"9"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-02-vue-LC9"}},[e("span",{staticClass:"pl-s1"},[t._v("</"),e("span",{staticClass:"pl-ent"},[t._v("style")]),t._v(">")])])])]),e("d-page-h",{attrs:{h:"2-5"}}),e("p",{domProps:{innerHTML:t._s(t.t(16))}}),e("d-page-code",{attrs:{type:"css"}},[e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-03-css-L1","data-line-number":"1"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-03-css-LC1"}},[e("span",{staticClass:"pl-e"},[t._v(".text-brand")]),t._v(" {")])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-03-css-L2","data-line-number":"2"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-03-css-LC2"}},[t._v("  "),e("span",{staticClass:"pl-c1"},[e("span",{staticClass:"pl-c1"},[t._v("color")])]),t._v(": "),e("span",{staticClass:"pl-c1"},[t._v("#a2aa33")]),t._v(";")])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-03-css-L3","data-line-number":"3"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-03-css-LC3"}},[t._v("}")])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-03-css-L4","data-line-number":"4"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-03-css-LC4"}},[e("span",{staticClass:"pl-e"},[t._v(".bg-brand")]),t._v(" {")])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-03-css-L5","data-line-number":"5"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-03-css-LC5"}},[t._v("  "),e("span",{staticClass:"pl-c1"},[e("span",{staticClass:"pl-c1"},[t._v("background")])]),t._v(": "),e("span",{staticClass:"pl-c1"},[t._v("#a2aa33")]),t._v(";")])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-03-css-L6","data-line-number":"6"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-03-css-LC6"}},[t._v("}")])])]),e("p",{domProps:{innerHTML:t._s(t.t(17))}}),e("d-page-code",[e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-style-color-04-vue-L1","data-line-number":"1"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-style-color-04-vue-LC1"}},[t._v("<"),e("span",{staticClass:"pl-ent"},[t._v("q-input")]),t._v(" "),e("span",{staticClass:"pl-e"},[t._v("color")]),t._v("="),e("span",{staticClass:"pl-s"},[e("span",{staticClass:"pl-pds"},[t._v('"')]),t._v("brand"),e("span",{staticClass:"pl-pds"},[t._v('"')])]),t._v(" ... />")])])]),e("p",{staticStyle:{color:"red"}},[t._v("... (This page is still under construction!)")])],1)},l=[];a._withStripped=!0;var i=e("eD0L"),n={mixins:[i["a"]],data:function(){return{nodes:[{id:0,children:[{id:1},{id:2},{id:3},{id:4},{id:5}]}],codes:[["primary","secondary","tertiary"],"&lt;style lang=&quot;stylus&quot;&gt;","*.vue",["primary","secondary","tertiary","positive","negative","info","warning","white","light","dark","faded"],["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey"],["red","red-1","red-2","…","red-14"],["text-","bg-"],["$primary","$red-1"]]}},methods:{e1:function(){return"en"===this.$i18n.locale?" ".concat(this.$t("_f")):""}}},r=n,o=e("KHd+"),c=Object(o["a"])(r,a,l,!1,null,null,null);s["default"]=c.exports},ssXh:function(t,s,e){},xq9U:function(t,s,e){},y6KF:function(t,s,e){"use strict";var a=e("0cSt"),l=e.n(a);l.a},zGJJ:function(t,s,e){"use strict";var a=e("ssXh"),l=e.n(a);l.a}}]);