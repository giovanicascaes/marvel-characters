(this["webpackJsonpsoftplan-test"]=this["webpackJsonpsoftplan-test"]||[]).push([[0],{237:function(e,t,a){e.exports=a(363)},363:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),o=a(10),u=(a(246),a(48)),l=a(75),s=a(13),d=a(12),f=a(9),E=a(163),m=a.n(E),h=a(91),b=a(201),v=a(202),p=a.n(v),g=function(e){var t=Object(d.a)(e.types,3),a=t[0],n=t[1],r=t[2];return"string"===typeof n?n={type:n,payload:function(e,t,a){return a.data}}:n.payload||(n.payload=function(e,t,a){return a.data}),Object(h.createAction)(Object(f.a)({},e,{types:[a,n,r]}))},O=Object(b.setupCache)({maxAge:864e5}),j=m.a.create({baseURL:"https://gateway.marvel.com/v1/public",headers:{Accept:"application/json"},adapter:O.adapter});j.interceptors.request.use((function(e){var t=(new Date).getTime();return e.params={apikey:"a767d940b459467a727e2ff6bf98501a",ts:t,hash:p()(t+"f1746ccea8b26bf8b6f60011f3355219a64a6f33a767d940b459467a727e2ff6bf98501a")},e}));var S=j,y=20,T=10,R="name",_="title",x=a(3),C=a(4);function L(){var e=Object(x.a)(["\n  font-size: 12px;\n  color: grey;\n  display: block;\n"]);return L=function(){return e},e}function U(){var e=Object(x.a)(["\n  font-weight: bold;\n  font-size: 22px;\n  color: grey;\n  display: block;\n  margin-bottom: 10px;\n"]);return U=function(){return e},e}function w(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n"]);return w=function(){return e},e}var I=C.c.div(w()),N=C.c.span(U()),A=C.c.span(L());function G(e){var t=e.title,a=void 0===t?"Nothing here :(":t,n=e.subtitle,c=void 0===n?"No records found":n;return r.a.createElement(I,null,r.a.createElement(N,null,a),r.a.createElement(A,null,c))}function k(e){var t=e.children,a=e.titleWhenEmpty,n=e.subtitleWhenEmpty;return t?r.a.createElement(r.a.Fragment,null,t):r.a.createElement(G,{title:a,subtitle:n})}var F=a(368),Q=a(370),M=a(118);function H(){var e=Object(x.a)(["\n  position: absolute;\n  top: 0;\n  z-index: 2;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n"]);return H=function(){return e},e}function B(){var e=Object(x.a)(["\n      animation: 0.3s "," ease-out;\n      top: 0;\n      z-index: 1;\n      object-fit: cover;\n      display: block;\n      visibility: visible;\n    "]);return B=function(){return e},e}function D(){var e=Object(x.a)(["\n  visibility: hidden;\n  position: absolute;\n  ",";\n"]);return D=function(){return e},e}function P(){var e=Object(x.a)(["\n      animation: 0.3s "," ease-out;\n      animation-fill-mode: forwards;\n    "]);return P=function(){return e},e}function z(){var e=Object(x.a)(["\n  display: block;\n  object-fit: cover;\n  ",";\n"]);return z=function(){return e},e}function J(){var e=Object(x.a)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]);return J=function(){return e},e}function W(){var e=Object(x.a)(["\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    display: none;\n  }\n"]);return W=function(){return e},e}var q=Object(C.d)(W()),V=Object(C.d)(J()),$=C.c.img(z(),(function(e){return e.isHidden&&Object(C.b)(P(),q)})),K=C.c.img(D(),(function(e){return e.isShown&&Object(C.b)(B(),V)})),X=C.c.div(H());function Y(e){var t=e.isLoading,a=e.name,n=e.imageUrl,c=e.withBorder,i=void 0!==c&&c,o=e.className,u=e.style;return t?r.a.createElement(Q.a.Input,{loading:t,size:"large",active:!0,className:o,style:u}):r.a.createElement(M.b,{src:n,className:o,style:u},(function(e){var t=e.imageProps,n=e.imageState,c=e.ref;return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement($,Object.assign({},t,{ref:c,src:"res/img/loading.gif",alt:"Loading icon",isHidden:n===M.a.LoadSuccess})),r.a.createElement(K,Object.assign({},t,{ref:c,src:t.src,alt:"".concat(a,"'s thumbnail"),isShown:n===M.a.LoadSuccess})),i&&n===M.a.LoadSuccess&&r.a.createElement(X,{className:t.className,style:t.style}))}))}var Z=F.a.Meta;function ee(e){var t=e.id,a=e.name,c=e.imageUrl,i=e.isLoading,o=Object(n.useState)(!1),u=Object(d.a)(o,2),s=u[0],f=u[1];return s?r.a.createElement(l.a,{to:"/character/".concat(t),push:!0}):r.a.createElement(F.a,{hoverable:!i,style:{width:280,borderRadius:10},cover:r.a.createElement(Y,{name:a,imageUrl:c,isLoading:i,style:{width:280,height:340,borderTopLeftRadius:10,borderTopRightRadius:10}}),onClick:function(){return f(!0)}},r.a.createElement(Q.a,{paragraph:!1,loading:i,active:!0},r.a.createElement(Z,{title:a})))}function te(){var e=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 280px);\n  grid-gap: 20px;\n  justify-content: center;\n"]);return te=function(){return e},e}var ae=C.c.div(te());function ne(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return ne=function(){return e},e}function re(){var e=Object(x.a)(["\n  object-fit: cover;\n\n  div.ant-card-body {\n    height: 100%;\n  }\n"]);return re=function(){return e},e}var ce=Object(C.c)(F.a)(re()),ie=C.c.div(ne()),oe=a(374);function ue(e){var t=e.onClick;return r.a.createElement(ce,{hoverable:!0,onClick:t,style:{width:280,height:"100%",borderRadius:10}},r.a.createElement(ie,null,r.a.createElement(oe.a,{style:{fontSize:140},rotate:90})))}function le(e){var t=e.characters,a=e.isLoading,n=e.hasMoreToLoad,c=e.onLoadMore,i=t.map((function(e,t){var n=e.id,c=e.name,i=e.thumbnail,o=e.imageUrl;return r.a.createElement(ee,{key:t,id:n,name:c,imageUrl:i?"".concat(i.path,".").concat(i.extension):o||"",isLoading:a&&!n})}));return n&&i.push(r.a.createElement(ue,{onClick:c,key:i.length+1})),r.a.createElement(ae,null,i)}function se(e){var t=e.characters,a=e.isLoading,n=e.hasMoreToLoad,c=e.onLoadMore;return r.a.createElement(k,null,t.length&&r.a.createElement(le,{characters:t,isLoading:a,hasMoreToLoad:n,onLoadMore:c}))}var de=a(113);function fe(e){switch(e){case"REQUEST":return"pending";case"SUCCESS":return"resolved";case"FAILURE":return"rejected";default:return"idle"}}function Ee(e){var t=/(.*)_(REQUEST|SUCCESS|FAILURE|RESET)/.exec(e);if(!t)return!1;var a=Object(d.a)(t,3);return[a[1],a[2]]}function me(e,t,a){var n=Ee(a),r=Object(d.a)(n,1)[0];return!e.status||!e.status[r]?"idle"===t:e.status[r]===t}function he(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return a.some((function(t){return me(e,"pending",t)}))}function be(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return a.every((function(t){return me(e,"resolved",t)}))}function ve(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return a.some((function(t){return me(e,"rejected",t)}))}var pe=null;function ge(e){return Object(s.a)(new Array(e||y)).map((function(){return{name:"",thumbnail:null}}))}function Oe(){var e=function(e){var t,a=Object(n.useState)(null!==(t=pe)&&void 0!==t?t:e),r=Object(d.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){pe=c}),[c]),[c,i]}(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(o.c)((function(e){var t=e.characters.get,a=t.characters,n=t.total,r=t.offset,c=t.count,i=r+c<n,o=null;if(i){var u=n-r+c;o=u>y?y:u}return{characters:a,isLoading:he(e,"character/GET_REQUEST"),isSuccess:be(e,"character/GET_REQUEST"),isError:ve(e,"character/GET_REQUEST"),hasMoreToLoad:i,countInNextPage:o}})),u=i.characters,l=i.isLoading,f=i.isSuccess,E=i.isError,m=i.hasMoreToLoad,h=i.countInNextPage,b=Object(n.useState)([]),v=Object(d.a)(b,2),p=v[0],O=v[1],j=Object(o.b)(),S=Object(n.useCallback)((function(){j(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R;return g({endpoint:function(a){var n=a.characters.get,r=n.total,c=n.offset,i=n.limit,o=n.count;return"/characters?limit=".concat(e,"&orderBy=").concat(t).concat(c+o<r?"&offset=".concat(c+i):"")},method:"GET",types:["character/GET_REQUEST",{type:"character/GET_SUCCESS",payload:function(e,t,a){return{response:a.data,reset:["character/GET_INFO_REQUEST","character/GET_SERIES_REQUEST"]}}},"character/GET_FAILURE"]})}())}),[j]);return Object(n.useEffect)((function(){a||(c(!0),S())}),[a,S,c]),Object(n.useEffect)((function(){l&&O((function(e){return[].concat(Object(s.a)(e),Object(s.a)(ge(h)))}))}),[l,h]),Object(n.useEffect)((function(){f&&O(u)}),[u,f]),E?r.a.createElement(G,{title:"Ocorreu um erro ao buscar os personagens",subtitle:"Por favor, tente novamente mais tarde"}):r.a.createElement(se,{characters:p,isLoading:l,hasMoreToLoad:m,onLoadMore:S})}var je=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R;return g({endpoint:function(n){var r=n.characters,c=r.total,i=r.offset,o=r.limit,u=r.count;return"/characters?limit=".concat(t,"&orderBy=").concat(a,"&nameStartsWith=").concat(e).concat(i+u<c?"&offset=".concat(i+o):"")},method:"GET",types:[{type:"character/SEARCH_REQUEST",meta:{searchText:e}},{type:"character/SEARCH_SUCCESS",meta:function(e){return{searchText:e[h.RSAA].types[0].meta.searchText}}},"character/SEARCH_FAILURE"]})};function Se(){var e=Object(x.a)(["\n  font-size: 22px;\n  font-weight: bold;\n  color: grey;\n"]);return Se=function(){return e},e}function ye(){var e=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return ye=function(){return e},e}var Te=C.c.div(ye()),Re=C.c.span(Se());function _e(){return r.a.createElement(Te,null,r.a.createElement(Re,null,"Loading..."))}function xe(){var e=Object(o.c)((function(e){var t=e.characters.search,a=t.characters,n=t.total,r=t.offset,c=t.count,i=r+c<n,o=null;if(i){var u=n-r+c;o=u>y?y:u}return{characters:a,isLoading:he(e,"character/SEARCH_REQUEST"),isSuccess:be(e,"character/SEARCH_REQUEST"),isError:ve(e,"character/SEARCH_REQUEST"),hasMoreToLoad:i,countInNextPage:o}})),t=e.characters,a=e.isLoading,c=e.isSuccess,i=e.isError,u=e.hasMoreToLoad,l=e.countInNextPage,f=Object(n.useState)([]),E=Object(d.a)(f,2),m=E[0],h=E[1],b=Object(n.useState)(!1),v=Object(d.a)(b,2),p=v[0],g=v[1];return Object(n.useEffect)((function(){a&&h((function(e){return[].concat(Object(s.a)(e),Object(s.a)(ge(l)))}))}),[a,l]),Object(n.useEffect)((function(){c&&(h(t),g(!0))}),[t,c]),Object(n.useEffect)((function(){a&&g(!1)}),[a]),i?r.a.createElement(G,{title:"Ocorreu um erro ao buscar os personagens",subtitle:"Por favor, tente novamente mais tarde"}):p?r.a.createElement(se,{characters:m,isLoading:a,hasMoreToLoad:u,onLoadMore:je}):r.a.createElement(_e,null)}function Ce(){return Object(o.c)((function(e){return e.characters.isSearchMode}))?r.a.createElement(xe,null):r.a.createElement(Oe,null)}var Le=a(369),Ue=Le.a.Search;function we(){var e=Object(o.c)((function(e){return e.characters.search.searchText})),t=Object(n.useState)(e),a=Object(d.a)(t,2),c=a[0],i=a[1],u=Object(o.b)();return r.a.createElement("div",{style:{marginBottom:40}},r.a.createElement(Ue,{placeholder:"Search a character",enterButton:"Search",size:"large",value:c,onChange:function(e){return i(e.target.value)},onSearch:function(e){u(e?je(e):{type:"character/SEARCH_RESET"})},allowClear:!0}))}function Ie(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(we,null),r.a.createElement(Ce,null))}function Ne(){var e=Object(x.a)(["\n      box-shadow: 0px 10px 40px -10px rgba(0, 0, 0, 0.5);\n    "]);return Ne=function(){return e},e}function Ae(){var e=Object(x.a)(["\n  border-radius: 10px;\n  ",";\n  width: 350px;\n  margin-bottom: 80px;\n"]);return Ae=function(){return e},e}function Ge(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 40px;\n"]);return Ge=function(){return e},e}var ke=C.c.div(Ge()),Fe=Object(C.c)(Y).attrs({style:{height:440},withBorder:!0})(Ae(),(function(e){return!e.isLoading&&Object(C.b)(Ne())})),Qe=a(372);function Me(e){var t=e.isLoading,a=e.id,n=e.name,c=e.description;return r.a.createElement(Q.a,{loading:t,paragraph:{rows:3},active:!0},r.a.createElement("div",null,r.a.createElement("h3",null,"Character Info"),r.a.createElement(Qe.a,{column:2},r.a.createElement(Qe.a.Item,{label:"ID",key:"id"},a),r.a.createElement(Qe.a.Item,{label:"Name",key:"name"},n),r.a.createElement(Qe.a.Item,{label:"Description",key:"description"},c||"<None>"))))}var He=a(116),Be=a(117),De=Be.b().shape({id:Be.a().required().label("ID"),name:Be.c().trim().min(3).required().label("Name"),description:Be.c().trim().label("Description")}),Pe=a(43),ze=a(375);function Je(e){var t=e.CustomField,a=Object(Pe.a)(e,["CustomField"]),n=Object(He.c)(a),c=Object(d.a)(n,3),i=c[0],o=c[1],u=c[2],l=o.touched,s=o.error,f=l&&s;return r.a.createElement("div",{className:"ant-row ant-form-item ant-form-item-with-help ant-form-item-has-feedback ".concat(f&&"ant-form-item-has-error")},r.a.createElement("div",{className:"ant-col ant-form-item-control"},r.a.createElement("div",{className:"ant-form-item-control-input"},r.a.createElement("div",{className:"ant-form-item-control-input-content"},r.a.createElement(t,Object.assign({},i,u,a))),f&&r.a.createElement("span",{className:"ant-form-item-children-icon"},r.a.createElement(ze.a,null))),f&&r.a.createElement("div",{className:"ant-form-item-explain show-help show-help-enter show-help-enter-active"},r.a.createElement("div",null,s))))}function We(e){var t=e.name,a=e.placeholder;return r.a.createElement(Je,{CustomField:Le.a,name:t,type:"text",placeholder:a})}function qe(e){var t=e.name,a=e.placeholder,n=e.minRows,c=void 0===n?3:n,i=e.maxRows,o=void 0===i?10:i;return r.a.createElement(Je,{CustomField:Le.a.TextArea,name:t,placeholder:a,autoSize:{minRows:c,maxRows:o}})}var Ve=a(371),$e=a(110),Ke=a(41),Xe=a(173);function Ye(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n"]);return Ye=function(){return e},e}var Ze=C.c.div(Ye()),et="@softplan-test/CHARACTERS";function tt(e){var t=window.localStorage[et];return t?JSON.parse(t).find((function(t){return t.id===e})):null}function at(){var e=window.localStorage[et];return e?JSON.parse(e):[]}function nt(e){var t=window.localStorage[et];return t?JSON.parse(t).filter((function(t){return[t.id,t.name,t.description].some((function(t){return String(t).toLowerCase().startsWith(e.toLowerCase())}))})):[]}function rt(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a){if(t=nt(a),!e.length)return t}else t=at();return e.map((function(e){var a=t.find((function(t){return t.id===e.id}));return a?Object(f.a)({},e,{},a):e}))}function ct(e,t){return e.map((function(e){return e.id!==t.id?e:Object(f.a)({},e,{},t)}))}var it=function(e){return function(e){var t=window.localStorage[et],a=t?JSON.parse(t):[],n=a.findIndex((function(t){return t.id===e.id}));-1!==n&&a.splice(n,1);var r=[].concat(Object(s.a)(a),[e]);window.localStorage[et]=JSON.stringify(r)}(e),{type:"character/UPDATE",payload:e}};function ot(e){var t=e.id,a=void 0===t?0:t,n=e.name,c=void 0===n?"":n,i=e.description,u=void 0===i?"":i,l=e.imageUrl,s=void 0===l?"":l,d=Object(o.b)();return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(He.b,{initialValues:{id:a,name:c,description:u},validationSchema:De,onSubmit:function(e,t){var a=t.setSubmitting;d(it(Object(f.a)({},e,{imageUrl:s}))),d({type:"character/CHARACTER_UPDATE_INFO",payload:e}),a(!1),Ve.a.info("Successfully edited")}},(function(e){var t=e.isSubmitting;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Editing Character"),r.a.createElement(He.a,null,r.a.createElement(Ze,null,r.a.createElement("div",{style:{width:"100%"}},r.a.createElement($e.a,{gutter:[16,16]},r.a.createElement(Ke.a,{span:12},r.a.createElement(Qe.a,null,r.a.createElement(Qe.a.Item,{label:"ID"},a))),r.a.createElement(Ke.a,{span:12},r.a.createElement(We,{placeholder:"Name",name:"name"}))),r.a.createElement($e.a,{gutter:[16,16]},r.a.createElement(Ke.a,{span:24},r.a.createElement(qe,{placeholder:"Description",name:"description"})))),r.a.createElement(Xe.a,{htmlType:"submit",disabled:t},"Submit"))))})))}function ut(e){var t=e.isLoading,a=e.isEditing,c=e.imageUrl,i=e.id,o=e.name,u=e.description,l=Object(n.useState)({id:i,name:o,description:u}),s=Object(d.a)(l,2),f=s[0],E=s[1],m=Object(n.useCallback)((function(){return E({id:i,name:o,description:u})}),[u,i,o]);return Object(n.useEffect)((function(){m()}),[i,o,u,m]),r.a.createElement(ke,null,r.a.createElement(Fe,{imageUrl:c,isLoading:t,name:o}),a?r.a.createElement(ot,Object.assign({},f,{imageUrl:c})):r.a.createElement(Me,Object.assign({},f,{isLoading:t})))}function lt(){var e=Object(o.c)((function(e){var t=e.character,a=t.info,n=t.series,r=a.data,c=a.isEditing,i=void 0!==n.offset;return{character:r,isLoading:he(e,"character/GET_INFO_REQUEST","character/GET_SERIES_REQUEST")&&!i,isError:ve(e,"character/GET_INFO_REQUEST","character/GET_SERIES_REQUEST"),isEditing:c}})),t=e.character,a=e.isLoading,c=e.isError,i=e.isEditing,u=Object(o.b)(),s=Object(l.g)().characterId;if(Object(n.useEffect)((function(){u(function(e){return g({endpoint:"/characters/".concat(e),method:"GET",types:["character/GET_INFO_REQUEST","character/GET_INFO_SUCCESS","character/GET_INFO_FAILURE"]})}(s))}),[s,u]),c)return null;var d=t.thumbnail,f=t.imageUrl,E=t.id,m=t.name,h=t.description,b=a?{imageUrl:"",id:0,name:"",description:""}:{imageUrl:d?"".concat(d.path,".").concat(d.extension):f||"",id:E,name:m,description:h};return r.a.createElement(ut,Object.assign({},b,{isLoading:a,isEditing:i}))}var st=a(367);function dt(){var e=Object(x.a)(["\n  width: calc(100% - ","px);\n"]);return dt=function(){return e},e}function ft(){var e=Object(x.a)(["\n  display: flex;\n  flex: 1;\n  align-items: flex-start;\n"]);return ft=function(){return e},e}function Et(){var e=Object(x.a)(["\n  border-radius: 4px;\n  width: ","px;\n  margin-right: 20px;\n"]);return Et=function(){return e},e}var mt=Object(C.c)(Y).attrs({style:{height:200}})(Et(),150),ht=C.c.div(ft()),bt=C.c.div(dt(),150);function vt(e){var t=e.isLoading,a=e.imageUrl,n=e.title,c=e.description;return r.a.createElement(st.a.Item,null,r.a.createElement(ht,null,r.a.createElement(mt,{isLoading:t,imageUrl:a}),r.a.createElement(bt,null,r.a.createElement(Q.a,{loading:t,active:!0},r.a.createElement(st.a.Item.Meta,{title:n,description:c||"<No description>"})))))}function pt(){var e=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 10px 20px;\n"]);return pt=function(){return e},e}var gt=C.c.div(pt());function Ot(e){var t=e.isLoading,a=e.series,n=e.hasMoreToLoad,c=e.onLoadMore;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{loading:t,active:!0,paragraph:!1},r.a.createElement("h3",null,"Series")),r.a.createElement(k,{titleWhenEmpty:"Character hasn't appeared in series"},(t||a.length)&&r.a.createElement(st.a,{itemLayout:"horizontal",dataSource:a,renderItem:function(e){var a=e.id,n=e.thumbnail,c=e.title,i=e.descritption;return r.a.createElement(vt,{isLoading:t&&!a,imageUrl:n?"".concat(n.path,".").concat(n.extension):"",title:c,description:i})},footer:n&&r.a.createElement(gt,null,r.a.createElement(Xe.a,{type:"link",onClick:c},"Load More..."))})))}function jt(){var e=Object(o.c)((function(e){var t,a=e.character.series,n=a.series,r=a.total,c=a.offset,i=a.count,o=c+i<r;if(o){var u=r-c+i;t=u>T?T:u}return{series:n,isLoading:he(e,"character/GET_SERIES_REQUEST","character/GET_INFO_REQUEST"),isSuccess:be(e,"character/GET_SERIES_REQUEST","character/GET_INFO_REQUEST"),isError:ve(e,"character/GET_SERIES_REQUEST","character/GET_INFO_REQUEST"),hasMoreToLoad:o,countInNextPage:t}})),t=e.series,a=e.isLoading,c=e.isSuccess,i=e.isError,u=e.hasMoreToLoad,f=e.countInNextPage,E=Object(n.useState)([]),m=Object(d.a)(E,2),h=m[0],b=m[1],v=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(a),p=Object(o.b)(),O=Object(l.g)().characterId,j=Object(n.useCallback)((function(){p(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_;return g({endpoint:function(n){var r=n.character.series,c=r.total,i=r.offset,o=r.limit,u=r.count;return"/characters/".concat(e,"/series?limit=").concat(t,"&orderBy=").concat(a).concat(i+u<c?"&offset=".concat(i+o):"")},method:"GET",types:["character/GET_SERIES_REQUEST","character/GET_SERIES_SUCCESS","character/GET_SERIES_FAILURE"]})}(O))}),[O,p]);return Object(n.useEffect)((function(){p({type:"character/CHARACTER_CLEAR_SERIES"})}),[p]),Object(n.useEffect)((function(){t.length||j()}),[j,t.length]),Object(n.useEffect)((function(){a&&b((function(e){return[].concat(Object(s.a)(e),Object(s.a)(function(e){return console.log("count:",e),Object(s.a)(new Array(e||T)).map((function(){return{id:0,title:"",description:"",thumbnail:null}}))}(f)))}))}),[a,f]),Object(n.useEffect)((function(){v&&c&&b(t)}),[c,v,t]),i?null:r.a.createElement(Ot,{isLoading:a,series:h,hasMoreToLoad:u,onLoadMore:j})}function St(){var e=Object(x.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin: 0 100px 50px 0;\n\n  button {\n    font-weight: bold;\n  }\n"]);return St=function(){return e},e}var yt=C.c.div(St());function Tt(){var e=Object(o.b)(),t=Object(o.c)((function(e){return{isLoadingCharacter:he(e,"character/GET_INFO_REQUEST","character/GET_SERIES_REQUEST"),isEditing:e.character.info.isEditing}})),a=t.isLoadingCharacter,n=t.isEditing;return r.a.createElement(yt,null,r.a.createElement(Xe.a,{type:"link",onClick:function(){return e({type:"character/CHARACTER_TOGGLE_EDIT"})},style:{visibility:a?"hidden":"visible"}},n?"Cancel":"Edit"))}function Rt(){return Object(o.c)((function(e){return{isError:ve(e,"character/GET_INFO_REQUEST","character/GET_SERIES_REQUEST")}})).isError?r.a.createElement(G,{title:"Ocorreu um erro ao buscar os detalhes do personagem",subtitle:"Por favor, tente novamente mais tarde"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(Tt,null),r.a.createElement(lt,null),r.a.createElement(jt,null))}var _t=a(366);function xt(){var e=Object(x.a)(["\n  white-space: nowrap;\n"]);return xt=function(){return e},e}function Ct(){var e=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Ct=function(){return e},e}function Lt(){var e=Object(x.a)(["\n  height: 100%;\n  padding: 100px 200px;\n"]);return Lt=function(){return e},e}var Ut=C.c.div(Lt()),wt=C.c.div(Ct()),It=C.c.span(xt());function Nt(e){var t=e.title,a=e.subtitle,n=e.routes,c=void 0===n?[]:n,i=e.onBack,o=e.history,l=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_t.a,{title:t&&r.a.createElement(It,null,t),subTitle:a&&r.a.createElement(It,null,a),breadcrumb:{routes:[{path:"/",breadcrumbName:"Home"}].concat(Object(s.a)(c)),itemRender:function(e){return r.a.createElement(u.b,{to:e.path},e.breadcrumbName)}},onBack:i&&function(){return i(o)},style:{border:"1px solid rgb(235, 237, 240)"}},r.a.createElement(wt,null,r.a.createElement("img",{src:"res/img/marvel-logo.png",alt:"Marvel Logo",style:{height:50}}))),r.a.createElement(Ut,null,l))}function At(e){var t=e.title,a=e.subtitle,n=e.routes,c=e.onBack,i=e.children,o=Object(Pe.a)(e,["title","subtitle","routes","onBack","children"]);return r.a.createElement(l.b,Object.assign({},o,{render:function(e){var o=e.history;return r.a.createElement(Nt,{title:t,subtitle:a,routes:n,onBack:c,history:o},i)}}))}var Gt=a(373);function kt(e){var t=e.characterName,a=e.characterId;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(l.d,null,r.a.createElement(At,{path:"/",exact:!0,title:"Marvel Characters"},r.a.createElement(Ie,null)),r.a.createElement(At,{path:"/character/:characterId",exact:!0,onBack:function(e){return e.push("/")},title:t||"Loading...",subtitle:a&&"ID: ".concat(a),routes:[{path:"/character/".concat(a),breadcrumbName:"Character"}]},r.a.createElement(Rt,null)),r.a.createElement(At,null,r.a.createElement(Gt.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist",extra:r.a.createElement(u.b,{to:"/"},"Back Home")})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ft=a(83),Qt={characters:[]};function Mt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"character/GET_SUCCESS":var a=t.payload.response.data,n=a.results,r=Object(Pe.a)(a,["results"]);return Object(f.a)({},e,{},r,{characters:[].concat(Object(s.a)(e.characters),Object(s.a)(rt(n)))});case"character/UPDATE":var c=t.payload;return Object(f.a)({},e,{characters:ct(e.characters,c)});default:return e}}var Ht={characters:[],searchText:""};function Bt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"character/SEARCH_REQUEST":return Object(f.a)({},e,{searchText:t.meta.searchText,characters:[]});case"character/SEARCH_SUCCESS":var a=t.payload.data,n=a.results,r=Object(Pe.a)(a,["results"]);return Object(f.a)({},e,{},r,{characters:[].concat(Object(s.a)(e.characters),Object(s.a)(rt(n,t.meta.searchText)))});case"character/SEARCH_RESET":return Ht;case"character/UPDATE":var c=t.payload;return Object(f.a)({},e,{characters:ct(e.characters,c)});default:return e}}var Dt={isSearchMode:!1},Pt={isEditing:!1,data:{}};var zt={series:[]};var Jt=Object(h.createMiddleware)({fetch:S,ok:function(e){return e}}),Wt=Object(Ft.a)(Jt)(Ft.d),qt=Object(Ft.c)({characters:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"character/SEARCH_REQUEST":e=Object(f.a)({},t,{isSearchMode:!0});break;case"character/SEARCH_RESET":e=Object(f.a)({},t,{isSearchMode:!1});break;default:e=t}return Object(f.a)({},e,{get:Mt(t.get,a),search:Bt(t.search,a)})},character:Object(Ft.c)({info:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"character/GET_INFO_SUCCESS":var a=t.payload.data.results[0],n=tt(a.id)||{};return Object(f.a)({},e,{data:Object(f.a)({},a,{},n)});case"character/GET_INFO_REQUEST":return Pt;case"character/CHARACTER_TOGGLE_EDIT":return Object(f.a)({},e,{isEditing:!e.isEditing});case"character/CHARACTER_UPDATE_INFO":return Object(f.a)({},e,{data:Object(f.a)({},e.data,{},t.payload),isEditing:!1});default:return e}},series:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"character/GET_SERIES_SUCCESS":var a=t.payload.data,n=a.results,r=Object(Pe.a)(a,["results"]);return Object(f.a)({},e,{},r,{series:[].concat(Object(s.a)(e.series),Object(s.a)(n))});case"character/CHARACTER_CLEAR_SERIES":return zt;default:return e}}}),status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload,r=Ee(a);if(!r)return e;var c=Object(d.a)(r,2),i=c[0],o=c[1],u=Object(f.a)({},e,Object(de.a)({},i,fe(o)));return n&&n.reset?Object(f.a)({},u,{},n.reset.map((function(e){return Ee(e)})).filter((function(e){return!!e})).reduce((function(e,t){var a=Object(d.a)(t,1)[0];return Object(f.a)({},e,Object(de.a)({},a,"idle"))}))):u}});function Vt(){var e=Object(x.a)(["\n  @font-face {\n    font-family: 'Recursive';\n    src: url('res/fonts/Recursive_VF_1.042.woff2') format('woff2-variations');\n    font-weight: 300 1000;\n  }\n\n  body {\n    font-family: 'Recursive';\n  }\n"]);return Vt=function(){return e},e}var $t,Kt=Object(C.a)(Vt()),Xt=Wt(qt,$t);i.a.render(r.a.createElement(o.a,{store:Xt},r.a.createElement(Kt,null),r.a.createElement((function(){var e=Object(o.c)((function(e){var t=e.character.info.data;return{characterName:t.name,characterId:t.id}})),t=e.characterName,a=e.characterId;return r.a.createElement(kt,{characterName:t,characterId:a})}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[237,1,2]]]);
//# sourceMappingURL=main.3b45fc2b.chunk.js.map