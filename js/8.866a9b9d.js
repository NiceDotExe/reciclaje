(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{dfbc:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"q-pa-lg column col justify-end"},[r("q-chat-message",{attrs:{text:["Por favor escribanos sus quejas y reclamos ...."]}}),r("q-chat-message",{attrs:{text:["su petición ha sido enviada"]}}),e._l(e.quejas,(function(e){return r("q-chat-message",{key:e.id,attrs:{text:[e],sent:""}})}))],2),r("q-footer",{staticClass:"bg-white"},[r("q-input",{staticClass:"q-ma-sm",attrs:{autofocus:"",rounded:"",outlined:"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Debes Digitar algo"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.agregar(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-btn",{attrs:{type:"submit",icon:"send",round:"",color:"primary"},on:{click:e.agregar}})]},proxy:!0}]),model:{value:e.texto,callback:function(t){e.texto=t},expression:"texto"}})],1)],1)},a=[],o=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),s=r.n(o),c=r("2f62");r("fc1b");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={data:function(){return{texto:"",mensajes:[]}},computed:u({},Object(c["e"])("store",["DetallesUsuario"]),{},Object(c["c"])("store",["quejas"])),methods:u({},Object(c["b"])("store",["AgregarQueja"]),{agregar:function(){this.AgregarQueja({id:this.DetallesUsuario.idUsuario,texto:this.texto}),this.texto=""}})},f=l,p=r("2877"),b=r("eebe"),d=r.n(b),g=r("8169"),y=r("7ff0"),j=r("27f9"),O=r("9c40"),h=Object(p["a"])(f,n,a,!1,null,null,null);t["default"]=h.exports;d()(h,"components",{QChatMessage:g["a"],QFooter:y["a"],QInput:j["a"],QBtn:O["a"]})}}]);