(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0afb":function(t,i,e){},"37cd":function(t,i,e){"use strict";var l=e("0afb"),a=e.n(l);a.a},"4b7a":function(t,i,e){"use strict";e.r(i);var l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"col text-center q-pa-auto"},[e("q-form",{staticClass:"q-ma-md q-pa-md shadow-4",staticStyle:{"min-width":"340px"},on:{submit:function(i){return t.publicarRutaDocumento()}}},[e("div",{staticClass:"q-mb-md text-h4"},[t._v("Link archivo rutas")]),e("q-input",{attrs:{type:"text",label:"Url o link","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Este campo es obligatorio"}]},model:{value:t.linkRuta,callback:function(i){t.linkRuta=i},expression:"linkRuta"}}),e("div",[e("q-btn",{attrs:{label:"Actualizar",type:"submit",color:"primary"}})],1)],1),e("q-form",{staticClass:"q-ma-md q-pa-md shadow-4",staticStyle:{"min-width":"340px"},on:{submit:function(i){return t.publicarVideoPrincipal()}}},[e("div",{staticClass:"q-mb-md text-h4"},[t._v("Cambiar video de bienvenida")]),e("q-input",{attrs:{type:"text",label:"Url del video","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Este campo es obligatorio"}]},model:{value:t.ruta,callback:function(i){t.ruta=i},expression:"ruta"}}),e("div",[e("q-btn",{attrs:{label:"Actualizar",type:"submit",color:"primary"}})],1)],1),e("q-form",{staticClass:"q-ma-md q-pa-md shadow-4",staticStyle:{"min-width":"340px"},on:{submit:function(i){return t.publicar()}}},[e("div",{staticClass:"q-mb-md text-h4"},[t._v("Hacer publicacion")]),e("q-input",{attrs:{type:"text",label:"Titulo","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Este campo es obligatorio"}]},model:{value:t.titulo,callback:function(i){t.titulo=i},expression:"titulo"}}),e("q-input",{attrs:{type:"text",label:"Descripción","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Este campo es obligatorio"}]},model:{value:t.descripcion,callback:function(i){t.descripcion=i},expression:"descripcion"}}),e("q-input",{attrs:{type:"text",label:"Link","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Este campo es obligatorio"}]},model:{value:t.link,callback:function(i){t.link=i},expression:"link"}}),e("q-select",{attrs:{options:t.options,label:"Categoria",filled:""},model:{value:t.categoria,callback:function(i){t.categoria=i},expression:"categoria"}}),e("div",[e("q-btn",{attrs:{label:"Publicar",type:"submit",color:"primary"}})],1)],1),e("q-form",{staticClass:"q-ma-md q-pa-md shadow-4",staticStyle:{"min-width":"340px"},on:{submit:function(i){return t.publicarPdf()}}},[e("div",{staticClass:"q-mb-md text-h4"},[t._v("Publicar Guía")]),e("q-input",{attrs:{type:"text",label:"Titulo","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Este campo es obligatorio"}]},model:{value:t.titulo,callback:function(i){t.titulo=i},expression:"titulo"}}),e("q-input",{attrs:{type:"text",label:"Descripción","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Este campo es obligatorio"}]},model:{value:t.descripcion,callback:function(i){t.descripcion=i},expression:"descripcion"}}),e("q-file",{attrs:{color:"teal",filled:"",label:"Label"},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"cloud_upload"}})]},proxy:!0}]),model:{value:t.file,callback:function(i){t.file=i},expression:"file"}}),e("div",[e("q-btn",{attrs:{label:"Publicar",type:"submit",color:"primary"}})],1)],1)],1)},a=[],n=(e("8e6e"),e("8a81"),e("ac6a"),e("cadf"),e("06db"),e("456d"),e("b54a"),e("c47a")),o=e.n(n),r=e("2f62"),c=e("fc1b");function u(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);i&&(l=l.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,l)}return e}function s(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?u(Object(e),!0).forEach((function(i){o()(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}var p={data:function(){return{titulo:null,descripcion:null,link:null,categoria:null,options:["video","articulo"],ruta:null,linkRuta:null,file:null}},computed:s({},Object(r["c"])("pesajes",["ListaBarrios"])),methods:s({},Object(r["b"])("publicaciones",["publicarArticulo","SubirArchivo"]),{publicar:function(){var t={titulo:this.titulo,descripcion:this.descripcion,link:this.link,categoria:this.categoria};this.publicarArticulo(t),this.titulo=null,this.descripcion=null,this.link=null,this.categoria=null},publicarPdf:function(){var t={titulo:this.titulo,descripcion:this.descripcion,categoria:"pdf",file:this.file};this.SubirArchivo(t),this.titulo=null,this.descripcion=null,this.file=null},publicarVideoPrincipal:function(){var t=this;c["b"].ref("videos").set({ruta:this.ruta}).then((function(){t.$q.notify({message:"Hecho!",type:"positive"})})),this.ruta=null},publicarRutaDocumento:function(){var t=this;c["b"].ref("documentorutas").set({link:this.linkRuta}).then((function(){t.$q.notify({message:"Hecho!",type:"positive"})})),this.linkRuta=null}})},b=p,d=(e("37cd"),e("2877")),f=e("eebe"),m=e.n(f),h=e("0378"),v=e("27f9"),y=e("9c40"),q=e("ddd8"),k=e("7d53"),x=e("0016"),g=Object(d["a"])(b,l,a,!1,null,null,null);i["default"]=g.exports;m()(g,"components",{QForm:h["a"],QInput:v["a"],QBtn:y["a"],QSelect:q["a"],QFile:k["a"],QIcon:x["a"]})}}]);