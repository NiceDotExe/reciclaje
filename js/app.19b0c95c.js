(function(e){function t(t){for(var a,n,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)n=c[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,n=1;n<r.length;n++){var c=r[n];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={1:0},o={1:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{2:"cfc466dc",3:"eda5b1cb",4:"324290a5",5:"33047387",6:"62461a03",7:"27e4c432",8:"423cf703"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={2:1,3:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({}[e]||e)+"."+{2:"f5527096",3:"1448daed",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[e],f.parentNode.removeChild(f),r(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",p.name="ChunkLoadError",p.type=a,p.request=n,r[1](p)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;i.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"2f39":function(e,t,r){"use strict";r.r(t);var a=r("967e"),n=r.n(a),o=(r("a481"),r("96cf"),r("fa84")),i=r.n(o),c=(r("7d6e"),r("e54f"),r("0ca9"),r("5b0d"),r("2b0e")),s=r("df1a"),u=r("42d2"),l=r("b05d"),p=r("2a19");c["a"].use(l["a"],{config:{},lang:s["a"],iconSet:u["a"],plugins:{Notify:p["a"]}});var f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("q-layout",{attrs:{view:"lHh Lpr lFf"}},[r("q-header",{attrs:{elevated:""}},[r("q-toolbar",{staticClass:"text-center"},[r("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),r("q-toolbar-title",[e._v("Recycle")])],1)],1),r("q-drawer",{staticClass:"text-center col",attrs:{"show-if-above":"",width:250,"content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[r("lista")],1),r("q-page-container",[r("keep-alive",[r("router-view")],1)],1)],1)],1)},d=[],m=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),b=r.n(m),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-list",{staticClass:"text-center",attrs:{width:250}},[r("q-item",{staticClass:"col bg-blue-grey-3"},[r("q-item-section",[r("p",{staticClass:"q-ma-sm text-h5"},[e._v("Reciclemos")]),r("p",{staticClass:"text-h6"},[e._v("Por:Unisangil")]),r("p",[e._v(e._s(e.DetallesUsuario.nombre))])])],1),r("q-separator",{attrs:{inset:""}}),r("q-item",{attrs:{clickable:"",to:"/"}},[r("q-item-section",{attrs:{top:"",avatar:""}},[r("q-avatar",{attrs:{color:"primary","text-color":"white",icon:"home"}})],1),r("q-item-section",[r("q-item-label",[e._v("Home")])],1)],1),r("q-item",{attrs:{clickable:"",to:"/notificaciones"}},[r("q-item-section",{attrs:{top:"",avatar:""}},[r("q-avatar",{attrs:{color:"primary","text-color":"white",icon:"notification_important"}})],1),r("q-item-section",[r("q-item-label",[e._v("Notificaciones")])],1)],1),r("q-item",{attrs:{clickable:"",to:"/quejas"}},[r("q-item-section",{attrs:{top:"",avatar:""}},[r("q-avatar",{attrs:{color:"primary","text-color":"white",icon:"announcement"}})],1),r("q-item-section",[r("q-item-label",[e._v("Quejas")])],1)],1),r("q-item",{attrs:{clickable:"",to:"/acerca"}},[r("q-item-section",{attrs:{top:"",avatar:""}},[r("q-avatar",{attrs:{color:"primary","text-color":"white",icon:"info"}})],1),r("q-item-section",[r("q-item-label",[e._v("Acerca de")])],1)],1),e.DetallesUsuario.admin?r("q-item",{attrs:{clickable:"",to:"/subirdatos"}},[r("q-item-section",{attrs:{top:"",avatar:""}},[r("q-avatar",{attrs:{color:"primary","text-color":"white",icon:"backup"}})],1),r("q-item-section",[r("q-item-label",[e._v("Subir datos")])],1)],1):e._e(),e.DetallesUsuario.email?e._e():r("q-item",{attrs:{clickable:"",to:"/iniciosesion"}},[r("q-item-section",{attrs:{top:"",avatar:""}},[r("q-avatar",{attrs:{color:"positive","text-color":"white",icon:"person"}})],1),r("q-item-section",[r("q-item-label",[e._v("Iniciar Sesión")])],1)],1),e.DetallesUsuario.email?r("q-item",{attrs:{clickable:""},on:{click:e.CerrarSesion}},[r("q-item-section",{attrs:{top:"",avatar:""}},[r("q-avatar",{attrs:{color:"red-10","text-color":"white",icon:"highlight_off"}})],1),r("q-item-section",[r("q-item-label",[e._v("Cerrar Sesión")])],1)],1):e._e()],1)},v=[],g=r("2f62");function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j={computed:y({},Object(g["e"])("store",["DetallesUsuario"])),methods:y({},Object(g["b"])("store",["CerrarSesion"]))},O=j,q=r("2877"),x=r("eebe"),P=r.n(x),D=r("1c1c"),k=r("66e5"),S=r("4074"),_=r("eb85"),C=r("cb32"),Q=r("0170"),E=Object(q["a"])(O,h,v,!1,null,null,null),U=E.exports;function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}P()(E,"components",{QList:D["a"],QItem:k["a"],QItemSection:S["a"],QSeparator:_["a"],QAvatar:C["a"],QItemLabel:Q["a"]});var B={name:"App",data:function(){return{leftDrawerOpen:!1,tab:"reciclemos"}},components:{lista:U},methods:I({},Object(g["b"])("store",["authEstado","CargarDatosBarrios"])),created:function(){this.authEstado(),this.CargarDatosBarrios()}},L=B,T=r("4d5a"),N=r("e359"),M=r("65c6"),F=r("9c40"),$=r("6ac5"),H=r("9404"),Y=r("09e3"),z=Object(q["a"])(L,f,d,!1,null,null,null),J=z.exports;P()(z,"components",{QLayout:T["a"],QHeader:N["a"],QToolbar:M["a"],QBtn:F["a"],QToolbarTitle:$["a"],QDrawer:H["a"],QPageContainer:Y["a"]});var R=r("dad6"),V=r.n(R),W=r("fc1b"),G={DetallesUsuario:{},DatosBarrios:[],pesajes:{vidrio:0,papel:0,plastico:0},Quejas:[],filtro:{mes:"",barrio:""},datos:{total:0,papel:0}},K={setDetalleUsuario:function(e,t){e.DetallesUsuario=t},setBarrios:function(e,t){e.DatosBarrios=t},setPesajes:function(e,t){var r={vidrio:e.pesajes.vidrio+t.vidrio,papel:e.pesajes.papel+t.papel,plastico:e.pesajes.plastico+t.plastico};e.pesajes=r},setQuejas:function(e,t){e.Quejas=t},setFiltro:function(e,t){e.filtro.mes=t.mes,e.filtro.barrio=t.barrio}},Z={registarUsuario:function(e,t){var r=this;V()(e),W["a"].createUserWithEmailAndPassword(t.email,t.password).then((function(e){W["b"].ref("usuarios/"+W["a"].currentUser.uid).set({email:t.email,nombre:t.usuario,idUsuario:W["a"].currentUser.uid}),r.$router.push("/")}))},iniciarsesion:function(e,t){var r=this;V()(e),W["a"].signInWithEmailAndPassword(t.email,t.password).then((function(e){r.$router.push("/")}))},iniciarsesiongoogle:function(){W["a"].signInWithPopup(W["d"]).then((function(e){e.credential.accessToken,e.user})).catch((function(e){e.code,e.message,e.email,e.credential}))},CerrarSesion:function(e){var t=e.commit;W["a"].signOut(),console.log("sesion cerrada"),this.$router.push("/"),t("setDetalleUsuario",{})},authEstado:function(e){var t=e.commit;W["a"].onAuthStateChanged((function(e){if(e){var r=W["a"].currentUser.uid;W["b"].ref("usuarios/"+r).once("value",(function(e){e.val(),t("setDetalleUsuario",e.val())})),W["b"].ref("quejas/"+r).on("value",(function(e){t("setQuejas",e.val())}))}}))},AgregarQueja:function(e,t){V()(e),W["b"].ref("quejas/"+t.id).set({texto:t.texto,fecha:(new Date).toLocaleString()})},CargarDatosBarrios:function(e){var t=e.commit;W["b"].ref("barrios").on("value",(function(e){var r=e.val();t("setBarrios",r)}))},CargarPesajes:function(e){var t=e.commit;W["b"].ref("pesajes/").on("child_added",(function(e){var r={vidrio:parseInt(e.val().vidrio),papel:parseInt(e.val().papel),plastico:parseInt(e.val().plastico)};t("setPesajes",r)}))},SubirDatos:function(e,t){V()(e),W["b"].ref("pesajes/").push({barrio:t.barrio,plastico:t.plastico,vidrio:t.vidrio,papel:t.papel,fecha:t.fecha,mes:t.mes,anho:t.anho})}},X={quejas:function(e){var t=e.Quejas;return t},DatosTotales:function(e){var t=e.pesajes,r=parseInt(t.plastico)+parseInt(t.vidrio)+parseInt(t.papel),a={total:r,plastico:t.plastico,vidrio:t.vidrio,papel:t.papel};return a},ListaBarrios:function(e){return e.DatosBarrios}},ee={namespaced:!0,state:G,mutations:K,actions:Z,getters:X};c["a"].use(g["a"]);var te=function(){var e=new g["a"].Store({modules:{store:ee},strict:!1});return e},re=(r("551c"),r("8c4f")),ae=[{path:"/",component:function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"713b"))}},{path:"/acerca",component:function(){return r.e(7).then(r.bind(null,"d64c"))}},{path:"/quejas",component:function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"dfbc"))},meta:{autenticado:!0}},{path:"/Subirdatos",component:function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"b4cf"))},meta:{autenticado:!0,admin:!0}},{path:"/iniciosesion",component:function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"6496"))}},{path:"/notificaciones",component:function(){return r.e(5).then(r.bind(null,"8f74"))},meta:{autenticado:!0}}];ae.push({path:"*",component:function(){return r.e(4).then(r.bind(null,"e51e"))}});var ne=ae;c["a"].use(re["a"]);var oe=function(){var e=new re["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:ne,mode:"hash",base:""});return e.beforeEach(function(){var e=i()(n.a.mark((function e(t,r,a){var o,i,c,s;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){W["a"].onAuthStateChanged((function(t){e(t)}))}));case 2:return o=e.sent,e.next=5,new Promise((function(e,t){o?W["b"].ref("usuarios/"+W["a"].currentUser.uid).once("value",(function(t){e(t.val().admin)})):e(!1)}));case 5:i=e.sent,c=t.matched.some((function(e){return e.meta.autenticado})),s=t.matched.some((function(e){return e.meta.admin})),c&&!o?a("/iniciosesion"):s&&!i?a("/"):a();case 9:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}()),e},ie=function(){return ce.apply(this,arguments)};function ce(){return ce=i()(n.a.mark((function e(){var t,r,a;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof te){e.next=6;break}return e.next=3,te({Vue:c["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=te;case 7:if(t=e.t0,"function"!==typeof oe){e.next=14;break}return e.next=11,oe({Vue:c["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=oe;case 15:return r=e.t1,t.$router=r,a={el:"#q-app",router:r,store:t,render:function(e){return e(J)}},e.abrupt("return",{app:a,store:t,router:r});case 19:case"end":return e.stop()}}),e)}))),ce.apply(this,arguments)}var se=r("9483");function ue(){return le.apply(this,arguments)}function le(){return le=i()(n.a.mark((function e(){var t,r,a,o,i,s,u,l,p;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:t=e.sent,r=t.app,a=t.store,o=t.router,i=!0,s=function(e){i=!1,window.location.href=e},u=window.location.href.replace(window.location.origin,""),l=[W["default"]],p=0;case 11:if(!(!0===i&&p<l.length)){e.next=29;break}if("function"===typeof l[p]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[p]({app:r,router:o,store:a,Vue:c["a"],ssrContext:null,redirect:s,urlPath:u});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:p++,e.next=11;break;case 29:if(!1!==i){e.next=31;break}return e.abrupt("return");case 31:new c["a"](r);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),le.apply(this,arguments)}Object(se["a"])("service-worker.js",{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){},offline:function(){},error:function(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&r.e(0).then(r.t.bind(null,"a0db",7)),ue()},"5b0d":function(e,t,r){},fc1b:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o})),r.d(t,"d",(function(){return i}));var a=r("59ca"),n=(r("ea7b"),r("66ce"),{apiKey:"AIzaSyCNNLqj3YjkNF472eiolziOwr11wTD2stQ",authDomain:"reciclaje-7ac60.firebaseapp.com",databaseURL:"https://reciclaje-7ac60.firebaseio.com",projectId:"reciclaje-7ac60",storageBucket:"reciclaje-7ac60.appspot.com",messagingSenderId:"748328171631",appId:"1:748328171631:web:e030ca1565b77927e2359a",measurementId:"G-JYYZYDMNFF"}),o=(a["initializeApp"](n),a["auth"]()),i=new a["auth"].GoogleAuthProvider,c=a["database"]()}});