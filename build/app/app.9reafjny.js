/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='app']");if(s){publicPath=s.getAttribute('data-path');}
(function(publicPath){var __assign=Object.assign||function(n){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n};Context.activeRouter=function(){function n(){return{location:{pathname:Context.window.location.pathname,search:Context.window.location.search}}}function t(){i={}}function r(){for(var n=c,t=0;t<n.length;t++)(0,n[t])()}var o={},e={},i={},c=[];return{set:function(n){o=__assign({},o,n),t(),r()},get:function(t){return 0===Object.keys(o).length?n():t?o[t]:o},subscribe:function(n){if("function"!=typeof n)throw new Error("Expected listener to be a function.");var t=!0;return c.push(n),function(){if(t){t=!1;var r=c.indexOf(n);c.splice(r,1)}}},addToGroup:function(n,t){t in e||(e[t]=[]),e[t].push(n)},removeFromGroups:function(n){for(var t in e){var r=e[t];e[t]=r.filter(function(t){return t!==n})}},didGroupAlreadyMatch:function(n){return!!n&&!0===i[n]},setGroupMatched:function(n){i[n]=!0}}}();
})(publicPath);
(function(n,t,e,o,i){"use strict";function c(n,t){const e=n.n(t);e.t&&e.t.forEach(e=>{e.e||n.i.o(t,e.c,u(t,e.u),e.l,e.f)})}function u(n,t){return e=>{n.r?n.r[t](e):(n.s=n.s||[]).push(t,e)}}function l(n,t,e,o,i){if(t){const c=t.a,u=n.n(c);if(u&&u.t)if(o){const o=u.t.find(n=>n.c===e);o&&n.i.o(c,e,n=>t[o.u](n),o.l,o.f,i)}else n.i.d(c,e)}}function f(n,t){const e=n.s;if(e){for(t=0;t<e.length;t+=2)n.r[e[t]](e[t+1]);n.s=null}}function r(n,t,e,o){if(t.m){e.$defaultHolder||n.p(e,e.$defaultHolder=n.v(""),o[0]);let t,c,u,l=0;for(;l<o.length;l++){var i=o[l];1===n.b(i)&&null!=(t=n.h(i,"slot"))?(u=u||{})[t]?u[t].push(i):u[t]=[i]:c?c.push(i):c=[i]}e.y={g:c,w:u}}}function s(n,t,e){const o=new WeakMap,i={C:t.documentElement,N:t.head,j:t.body,b:n=>n.nodeType,T:n=>t.createElement(n),k:(n,e)=>t.createElementNS(n,e),x:n=>t.createTextNode(n),v:n=>t.createComment(n),p:(n,t,e)=>n.insertBefore(t,e),O:(n,t)=>n.removeChild(t),M:(n,t)=>n.appendChild(t),A:n=>n.childNodes,S:n=>n.parentNode,P:n=>n.nextSibling,B:n=>on(n.tagName),L:n=>n.textContent,R:(n,t)=>n.textContent=t,h:(n,t)=>n.getAttribute(t),q:(n,t,e)=>n.setAttribute(t,e),D:(n,t,e,o)=>n.setAttributeNS(t,e,o),H:(n,t)=>n.removeAttribute(t),I:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.z(e):"body"===o?i.j:"document"===o?t:"window"===o?n:e,o:(n,t,e,c,u,l,f,r)=>{const s=t;let a=n,d=o.get(n);if(d&&d[s]&&d[s](),"string"==typeof l?a=i.I(n,l):"object"==typeof l?a=l:(r=t.split(":")).length>1&&(a=i.I(n,r[0]),t=r[1]),!a)return;let m=e;(r=t.split(".")).length>1&&(t=r[0],m=(n=>{n.keyCode===nn[r[1]]&&e(n)})),f=i.F?{capture:!!c,passive:!!u}:!!c,a.addEventListener(t,m,f),d||o.set(n,d={}),d[s]=(()=>{a&&a.removeEventListener(t,m,f),d[s]=null})},d:(n,t)=>{const e=o.get(n);e&&(t?e[t]&&e[t]():(Object.keys(e).forEach(n=>{e[n]&&e[n]()}),o.delete(n)))}};e=n.CustomEvent;try{n.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.F=!0}))}catch(n){}return i.W=((n,t,o)=>n&&n.dispatchEvent(new e(t,o))),i.z=((n,t)=>(t=i.S(n))&&11===i.b(t)?t.host:t),i}function a(n,t,e,o,i){const c=11===e.Z.nodeType&&e.Z.host?e.Z.host:e.Z,u=t&&t._||X,l=e._||X;for(i in u)l&&null!=l[i]||null==u[i]||d(n,c,i,u[i],void 0,o);for(i in l)i in u&&l[i]===("value"===i||"checked"===i?c[i]:u[i])||d(n,c,i,u[i],l[i],o)}function d(n,t,e,o,i,c,u,l){if("class"!==e||c)if("style"===e){o=o||X,i=i||X;for(u in o)i[u]||(t.style[u]="");for(u in i)i[u]!==o[u]&&(t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.n(t);o&&o.G&&e in o.G?m(t,e,i):"ref"!==e&&(m(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(u=e!==(e=e.replace(/^xlink\:?/,"")),1!==ln[e]||i&&"false"!==i?"function"!=typeof i&&(u?t.setAttributeNS(fn,on(e),i):t.setAttribute(e,i)):u?t.removeAttributeNS(fn,on(e)):t.removeAttribute(e));else e=on(e.substring(2)),i?o||n.i.o(t,e,i):n.i.d(t,e);else if(o!==i){const n=null==o||""===o?Y:o.trim().split(/\s+/),e=null==i||""===i?Y:i.trim().split(/\s+/);let c=null==t.className||""===t.className?Y:t.className.trim().split(/\s+/);for(u=0,l=n.length;u<l;u++)-1===e.indexOf(n[u])&&(c=c.filter(t=>t!==n[u]));for(u=0,l=e.length;u<l;u++)-1===n.indexOf(e[u])&&(c=[...c,e[u]]);t.className=c.join(" ")}}function m(n,t,e){try{n[t]=e}catch(n){}}function p(n,t){function e(o,i,c){let u=0;if("function"==typeof o.J&&(o=o.J(Object.assign({},o._,{K:o.Q}))),"slot"===o.J&&!d){if(s){m&&t.q(i,m+"-slot","");let e,c=o._&&o._.name;if(e=tn(c)?s.w&&s.w[c]:s.g,tn(e)){for(n.U=!0;u<e.length;u++)t.M(i,t.O(t.S(e[u]),e[u]));n.U=!1}}return null}if(tn(o.V))o.Z=t.x(o.V);else{const i=o.Z=t.T(o.J);a(n,null,o,rn),null!==m&&i.X!==m&&t.q(i,i.X=m,"");const c=o.Q;if(c){let n;for(;u<c.length;++u)(n=e(c[u],i,u))&&t.M(i,n)}}return o.Z}function o(n,o,i,c,u){const l=n.$defaultHolder&&t.S(n.$defaultHolder)||n;let f;for(;c<=u;++c){var r=i[c];tn(r)&&(f=tn(r.V)?t.x(r.V):e(r,n,c),tn(f)&&(r.Z=f,t.p(l,f,o)))}}function i(n,e,o,i){for(;o<=i;++o)tn(e[o])&&t.O(n,e[o].Z)}function c(n,c,r){let s,a,d,m,p=0,v=0,b=c.length-1,h=c[0],y=c[b],$=r.length-1,g=r[0],w=r[$];for(;p<=b&&v<=$;)null==h?h=c[++p]:null==y?y=c[--b]:null==g?g=r[++v]:null==w?w=r[--$]:u(h,g)?(f(h,g),h=c[++p],g=r[++v]):u(y,w)?(f(y,w),y=c[--b],w=r[--$]):u(h,w)?(f(h,w),t.p(n,h.Z,t.P(y.Z)),h=c[++p],w=r[--$]):u(y,g)?(f(y,g),t.p(n,y.Z,h.Z),y=c[--b],g=r[++v]):(en(s)&&(s=l(c,p,b)),a=s[g.Y],en(a)?(m=e(g,n,v),g=r[++v]):((d=c[a]).J!==g.J?m=e(g,n,a):(f(d,g),c[a]=void 0,m=d.Z),g=r[++v]),m&&t.p(n,m,h.Z));p>b?o(n,null==r[$+1]?null:r[$+1].Z,r,v,$):v>$&&i(n,c,p,b)}function u(n,t){return n.J===t.J&&n.Y===t.Y}function l(n,t,e){let o,i,c,u={};for(o=t;o<=e;++o)null!=(c=n[o])&&void 0!==(i=c.Y)&&(u.nn=o);return u}function f(e,u){const l=u.Z=e.Z,f=e.Q,r=u.Q;if(en(u.V))"slot"!==u.J&&a(n,e,u,rn),tn(f)&&tn(r)?c(l,f,r):tn(r)?(tn(e.V)&&t.R(l,""),o(l,null,r,0,r.length-1)):tn(f)&&i(l,f,0,f.length-1);else if(l.y&&l.y.g){let n=l.y.g[0].parentElement;t.R(n,u.V),l.y.g=[n.childNodes[0]]}else e.V!==u.V&&t.R(l,u.V)}let r,s,d,m;return function n(e,o,i,c,u,l){return r=i,s=c,m=2===u||1===u&&!t.tn?"data-"+t.B(e.Z):null,r||m&&t.q(e.Z,m+"-host",""),f(e,o),o}}function v(n,t){n&&(n.en&&n.en(t?null:n.Z),n.Q&&n.Q.forEach(n=>{v(n,t)}))}function b(n,t,e){for(var o,i=!1,c=!1,u=arguments.length;u-- >2;)an.push(arguments[u]);for(;an.length;)if((e=an.pop())&&void 0!==e.pop)for(u=e.length;u--;)an.push(e[u]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].V+=e:void 0===o?o=[c?h(e):e]:o.push(c?h(e):e),i=c;const l=new sn;if(l.J=n,l.Q=o,t&&(l._=t,l.Y=t.on,l.en=t.ref,t.className&&(t.class=t.className),"object"==typeof t.class)){for(u in t.class)t.class[u]&&an.push(u);t.class=an.join(" "),an.length=0}return l}function h(n){const t=new sn;return t.V=n,t}function y(n,t,e,o){function i(){for(;f.length>0;)f.shift()();e=!1}function c(e){for(e=t(),i();r.length>0&&t()-e<40;)r.shift()();(o=r.length>0)&&n(u)}function u(e){for(i(),e=4+t();r.length>0&&t()<e;)r.shift()();(o=r.length>0)&&n(c)}const l=Promise.resolve(),f=[],r=[];return{add:(t,u)=>{3===u?(f.push(t),e||(e=!0,l.then(i))):(r.push(t),o||(o=!0,n(c)))}}}function $(n,t,e){const o={in:n[0],G:{mode:{cn:1},color:{cn:1,un:"color"}}};return o.ln=n[1],w(o,n[3],e),o.fn=n[4],o.m=n[5],n[6]&&(o.t=n[6].map(g)),o.rn=n[7],t[o.in]=o}function g(n){return{c:n[0],u:n[1],e:!!n[2],f:!!n[3],l:!!n[4]}}function w(n,t,e){if(t){n.G=n.G||{};for(var o=0;o<t.length;o++){var i=t[o];n.G[i[0]]={cn:i[1],un:i[2]?1===e?on(i[0]):cn(i[0]):0,sn:i[3],an:i[4]}}}}function C(n,t,e,o){const i=n[e[0]];i.dn=t[e[0]],w(i,e[1],o),i.mn=e[2],e[3]&&(i.pn=e[3].map(N)),i.vn=e[4],i.bn=e[5]}function N(n){return{c:n[0],u:n[1]||n[0],hn:!n[2],yn:!n[3],$n:!n[4]}}function j(n,t){if(tn(t)){if(3===n)return"false"!==t&&(""===t||!!t);if(4===n)return parseFloat(t)}return t}function T(n,t,e,o,i,c){if(o!==i&&n){e=on(e);for(c in n)if(n[c].un===e){t[c]=j(n[c].sn,i);break}}}function k(n,t,e){t&&t.forEach(t=>{e[t.u]={emit:o=>{const i={bubbles:t.hn,composed:t.$n,cancelable:t.yn,detail:o};n.gn(e.a,t.c,i)}}})}function x(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].cn;1===i||2===i?P(e,o,function n(){return(this.wn=this.wn||{})[o]},function t(e){A(n,this,o,e)}):6===i&&S(e,o,un)})}function E(n,t,e,o){o.a=e,e.wn=e.wn||{},t.G&&Object.keys(t.G).forEach(i=>{O(n,t,e,o,i)})}function O(n,t,e,o,i){const c=t.G[i],u=c.cn;if(1===u||5===u||2===u){if(5!==u){if(c.un&&(void 0===e.wn[i]||""===e.wn[i])){const n=e.getAttribute(c.un);null!=n&&(e.wn[i]=j(c.sn,n))}e.hasOwnProperty(i)&&(void 0===e.wn[i]&&(e.wn[i]=e[i]),n.isClient&&delete e[i])}o.hasOwnProperty(i)&&void 0===e.wn[i]&&(e.wn[i]=o[i]),P(o,i,function l(){const n=this.a;return n&&n.wn&&n.wn[i]},function f(t){const e=this.a;e&&1!==u&&A(n,e,i,t)}),M(t.bn,dn,e,o,i)}else if(3===u){var r=n.Cn(c.an);r&&S(o,i,r.Nn&&r.Nn(e)||r)}}function M(n,t,e,o,i){const c=n&&n.find(n=>n[0]===i);c&&(e.wn[t+i]=o[c[1]].bind(o))}function A(n,t,e,o){const i=t.wn=t.wn||{},c=i[e];o!==c&&(i[e]=o,i[dn+e]&&i[dn+e](o,c),t.r&&!n.jn&&z(n,t))}function S(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function P(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function B(n,t,e){return{create:R(n,t,e,"create"),componentOnReady:R(n,t,e,"componentOnReady")}}function L(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.j.querySelector(e)),i||(i=t[e]=n.T(e),n.M(n.j,i)),i.componentOnReady(o)})}function R(n,t,e,o){return function(){const i=arguments;return L(n,t,e).then(n=>n[o].apply(n,i))}}function q(n,t,e){try{e=n.n(t),t.r=new e.dn,E(n,e,t,t.r),k(n,e.pn,t.r);try{f(t)}catch(e){n.Tn(e,2,t)}}catch(e){t.r={},n.Tn(e,7,t,!0)}}function D(n,t,e){if(t.r&&!t.kn&&(!t.$activeLoading||!t.$activeLoading.length)){t.$activeLoading=null,t.xn=!0;try{v(t.En),t.On&&(t.On.forEach(n=>n(t)),t.On=null)}catch(e){n.Tn(e,4,t)}t.classList.add(e),H(t)}}function H(n,t,e){n.Mn&&((e=n.Mn.$activeLoading)&&((t=e.indexOf(n))>-1&&e.splice(t,1),!e.length&&n.Mn.$initLoad()),n.Mn=null)}function I(n,t,e,o){const i=t.r,c=e.mn;if(i.render||i.hostData||c){n.jn=!0;const c=i.render&&i.render();n.jn=!1;const u=t.En||new sn;u.Z=t,t.En=n.render(u,b(null,void 0,c),o,t.y,e.fn)}n.An(e,i.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}function z(n,t){t.Sn||(t.Sn=!0,n.Pn.add(()=>{t.Sn=!1,F(n,t)}))}function F(n,t){if(!t.kn){const e=!t.r;let o;if(e){const e=t.Mn;if(e&&!e.$rendered)return void(e.$onRender=e.$onRender||[]).push(()=>{F(n,t)});q(n,t);try{t.r.componentWillLoad&&(o=t.r.componentWillLoad())}catch(e){n.Tn(e,3,t)}}o&&o.then?o.then(()=>W(n,t,e)):W(n,t,e)}}function W(n,t,e){try{I(n,t,n.n(t),!e)}catch(e){n.Tn(e,8,t,!0)}try{e&&t.$initLoad()}catch(e){n.Tn(e,6,t,!0)}}function Z(n,t,e){e.$connected||(e.$connected=!0,e.kn=null,c(n,e),_(n,e),n.Pn.add(()=>{n.Bn(t,e),n.Ln(t,e,()=>z(n,e))},3))}function _(n,t,e){for(e=t;e=n.i.z(e);)if(n.Rn(e)){e.xn||(t.Mn=e,(e.$activeLoading=e.$activeLoading||[]).push(t));break}}function G(n,t){!n.U&&J(n.i,t)&&(t.kn=!0,H(t),v(t.En,!0),n.i.d(t),t.y&&(t.y=t.y.g=t.y.w=null),t.r&&(t.r.componentDidUnload&&t.r.componentDidUnload(),t.r=t.r.a=null),t.$activeLoading=t.$connected=t.$defaultHolder=t.qn=t.wn=t.En=t.Mn=t.xn=t.Sn=t.Dn=null)}function J(n,t){for(;t;){if(!n.S(t))return 9!==n.b(t);t=n.S(t)}}function K(n,t,e,o){e.connectedCallback=function(){Z(n,t,this)},e.attributeChangedCallback=function(n,e,o){T(t.G,this,n,e,o)},e.disconnectedCallback=function(){G(n,this)},e.componentOnReady=function(n,t){return n||(t=new Promise(t=>n=t)),Q(this,n),t},e.$initLoad=function(){D(n,this,o)},e.Hn=function(){z(n,this)},x(n,t.G,e)}function Q(n,t){n.kn||(n.xn?t(n):(n.On=n.On||[]).push(t))}function U(n,t){return n&&1===t.fn}function V(n,t){return 2===t.fn||1===t.fn&&!n}const X={},Y=[],nn={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},tn=n=>void 0!==n&&null!==n,en=n=>void 0===n||null===n,on=n=>n.toLowerCase(),cn=n=>n.replace(/([A-Z])/g,n=>"-"+on(n[0])),un=()=>{},ln={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},fn="http://www.w3.org/1999/xlink";let rn=!1;class sn{}const an=[],dn="$$dc",mn=n[o]=n[o]||{},pn=function vn(t,e,o,i,c,u){function f(n,t,e,o,i){function u(){clearTimeout(o),i.onerror=i.onload=null,N.O(N.S(i),i),g[e]=!1}e=c+t+(V(N.tn,n)?".sc":"")+".js",g[e]||(g[e]=!0,(i=N.T("script")).charset="utf-8",i.async=!0,i.src=e,o=setTimeout(u,12e4),i.onerror=i.onload=u,N.M(N.N,i))}const a={html:{}},d={},m={},v={},h={},g={},w={},N=s(o,i);t.enableListener=((n,t,e,o)=>l(T,n,t,e,o)),t.emit=((n,e,o)=>N.W(n,t.eventNameFn?t.eventNameFn(e):e,o)),t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.publicPath=c;const j=o.In=o.In||{},T={Bn:function k(n,e){e.mode||(e.mode=N.h(e,"mode")||t.mode),N.h(e,"data-ssrv")||U(N.tn,n)||r(N,n,e,e.childNodes),N.tn||1!==n.fn||(e.shadowRoot=e)},i:N,zn:function x(n,t){const e=n.in;if(!j[e]){j[e]=!0,K(T,n,t.prototype,u);{const e=[];for(var i in n.G)n.G[i].un&&e.push(n.G[i].un);t.observedAttributes=e}o.customElements.define(e,t)}},gn:t.emit,n:n=>a[N.B(n)],Cn:n=>t[n],isClient:!0,Rn:n=>!(!j[N.B(n)]&&!T.n(n)),Ln:function E(n,t,e,o){o=(n.ln[t.mode]||n.ln)[0],v[o]?e():((m[o]=m[o]||[]).push(e),f(n,o))},Tn:(n,t,e)=>void 0,Fn:n=>B(N,w,n),Pn:y(t=>n.requestAnimationFrame(t),()=>o.performance.now()),Wn:n=>(n||[]).map(n=>$(n,a))};T.render=p(T,N);const O=N.C;return O.$rendered=!0,O.$activeLoading=[],O.$initLoad=(()=>O.xn=!0),e.loadComponents=function n(e,o){const i=arguments;o(d,b,t,c);for(var u=2;u<i.length;u++)C(a,d,i[u]);var l=m[e];if(l){for(u=0;u<l.length;u++)l[u]();m[e]=null}v[e]=!0},e.loadStyles=function n(){const t=arguments;let e;for(var o=0;o<t.length;o+=2)h[t[o]]=e=N.T("template"),e.innerHTML=`<style>${t[o+1]}</style>`,e.id=`tmp-${t[o]}`,N.M(N.N,e)},T.An=((n,t,e)=>{{const o=h[n.in+"_"+t]||h[n.in];if(o){let t=N.N;if(N.tn)if(1===n.fn)t=e.shadowRoot;else for(;e=N.S(e);)if(e.host&&e.host.shadowRoot){t=e.host.shadowRoot;break}const i=t.Zn=t.Zn||{};if(!i[o.id]){{const n=o.content.cloneNode(!0),e=t.querySelector("[data-visibility]");N.p(t,n,e&&e.nextSibling||t._n)}i[o.id]=!0}}}}),T}(e,mn,n,t,i,hydratedCssClass);pn.Wn(mn.components).forEach(n=>pn.zn(n,class extends HTMLElement{}))})(window,document,Context,appNamespace,publicPath);
})({},"App","hydrated","/build/app/");