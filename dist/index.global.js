var MajuDecorators=(()=>{var h=Object.defineProperty;var F=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var I=Object.prototype.hasOwnProperty;var U=e=>h(e,"__esModule",{value:!0});var H=(e,n)=>{for(var t in n)h(e,t,{get:n[t],enumerable:!0})},J=(e,n,t,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let u of q(n))!I.call(e,u)&&(t||u!=="default")&&h(e,u,{get:()=>n[u],enumerable:!(o=F(n,u))||o.enumerable});return e};var L=(e=>(n,t)=>e&&e.get(n)||(t=J(U({}),n,1),e&&e.set(n,t),t))(typeof WeakMap!="undefined"?new WeakMap:0);var me={};H(me,{autobind:()=>w,configurable:()=>K,decorate:()=>O,enumerable:()=>T,extendDescriptor:()=>$,getter:()=>E,nonconfigurable:()=>b,nonenumerable:()=>b,readonly:()=>b,setter:()=>G,time:()=>S});var{defineProperty:Q,getOwnPropertyDescriptor:V,getOwnPropertyNames:z,getOwnPropertySymbols:M}=Object;function X(e){if(!e||!e.hasOwnProperty)return!1;let n=["value","initializer","get","set"];for(let t=0,o=n.length;t<o;t++)if(e.hasOwnProperty(n[t]))return!0;return!1}function i(e,n){return X(n[n.length-1])?e(...n,[]):function(){return e(...Array.prototype.slice.call(arguments),n)}}function c(e){return function(t){return Q(this,e,{configurable:!0,writable:!0,enumerable:!0,value:t}),t}}function x(e,n){return e.bind?e.bind(n):function(){return e.apply(n,arguments)}}var D=M?function(e){return z(e).concat(M(e))}:z;function W(e){let n={};return D(e).forEach(t=>n[t]=V(e,t)),n}var{defineProperty:N,getPrototypeOf:Y}=Object,g;function Z(e,n){if(typeof WeakMap>"u")throw new Error(`Using @autobind on ${n.name}() requires WeakMap support due to its use of super.${n.name}()`);g||(g=new WeakMap),g.has(e)===!1&&g.set(e,new WeakMap);let t=g.get(e);return t.has(n)===!1&&t.set(n,x(n,e)),t.get(n)}function A(e){let n=W(e.prototype),t=D(n);for(let o=0,u=t.length;o<u;o++){let r=t[o],a=n[r];typeof a.value!="function"||r==="constructor"||N(e.prototype,r,R(e.prototype,r,a))}}function R(e,n,{value:t,configurable:o,enumerable:u}){if(typeof t!="function")throw new SyntaxError(`@autobind can only be used on functions, not: ${t}`);let{constructor:r}=e;return{configurable:o,enumerable:u,get(){if(this===e||this.constructor!==r&&Y(this).constructor===r)return t;if(this.constructor!==r&&n in this.constructor.prototype)return Z(this,t);let a=x(t,this);return N(this,n,{configurable:!0,writable:!0,enumerable:!1,value:a}),a},set:c(n)}}function B(e){if(e.length===1)return A(e[0]);let[n,t,o]=e;return R(n,t,o)}function w(...e){return e.length===0?function(...n){return B(n)}:B(e)}var{defineProperty:k,getOwnPropertyDescriptor:ee}=Object;function P(e,n,t,[o,...u]){t===void 0&&(t=ee(e,n));let{configurable:r,enumerable:a,writable:s}=t,l=t.get,y=t.set,d=t.value,p=!!l;return{configurable:r,enumerable:a,get(){let f=p?l.call(this):d,m={target:e,key:n,fn:f},_=o.call(this,m,...u);return k(this,n,{configurable:r,enumerable:a,value:_,writable:s}),_},set:p?y:c(n)}}function O(...e){return i(P,e)}var v={},te={time:console.time?console.time.bind(console):e=>{v[e]=new Date},timeEnd:console.timeEnd?console.timeEnd.bind(console):e=>{let t=new Date-v[e];delete v[e],console.log(`${e}: ${t}ms`)}};function ne({target:e,key:n,fn:t},o=null,u=te){let r=0;return o===null&&(o=`${e.constructor.name}.${n}`),function(...a){let s=`${o}-${r}`;return r++,u.time(s),Promise.resolve(t.apply(this,a)).then(()=>u.timeEnd(s))}}function S(...e){return i(P,[ne,...e])}function re(e,n,t){return t.configurable=!0,t}function K(...e){return i(re,e)}function oe(e,n,t){return t.enumerable=!0,t}function T(...e){return i(oe,e)}var{getPrototypeOf:ue,getOwnPropertyDescriptor:ae}=Object;function ie(e,n,t){let o=ue(e),u=ae(o,n),r={configurable:u.configurable||!0,enumerable:u.enumerable||!0,initializer:t.initializer};return t.get||t.set?(r.get=t.get||u.get,r.set=t.set||u.set):(r.value=t.value,r.writable=u.writable||!0),r}function $(...e){return i(ie,e)}var{defineProperty:se}=Object;function ce(e,n,t){let{configurable:o,enumerable:u,initializer:r,value:a}=t;return{configurable:o,enumerable:u,get(){if(this===e)return;let s=r?r.call(this):a;return se(this,n,{configurable:o,enumerable:u,writable:!0,value:s}),s},set:c(n)}}function b(...e){return i(ce,e)}var{defineProperty:le,getOwnPropertyDescriptor:j}=Object;function fe(e,n,t,[o,...u]){t===void 0&&(t=j(e,n));let{configurable:r,enumerable:a}=t,s=t.get,l=t.set;return{configurable:r,enumerable:a,get(){let d=j(e,n),p={target:e,key:n,fn:s},f=o.apply(this,[p,...u]),m=f.call(this);return le(this,n,{configurable:r,enumerable:a,get:f,set:d.set}),m},set:!!s?l:c(n)}}function E(...e){return i(fe,e)}var{defineProperty:pe,getOwnPropertyDescriptor:C}=Object;function de(e,n,t,[o,...u]){t===void 0&&(t=C(e,n));let{configurable:r,enumerable:a}=t,s=t.get,l=t.set;return{configurable:r,enumerable:a,get:s,set(y){let d=C(e,n),p={target:e,key:n,fn:l},f=o.apply(this,[p,...u]),m=f.call(this,y);return pe(this,n,{configurable:r,enumerable:a,get:d.get,set:f}),m}}}function G(...e){return i(de,e)}return L(me);})();
//# sourceMappingURL=index.global.js.map