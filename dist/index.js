var x=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var I=Object.getOwnPropertyNames;var U=Object.prototype.hasOwnProperty;var H=e=>x(e,"__esModule",{value:!0});var J=(e,n)=>{for(var t in n)x(e,t,{get:n[t],enumerable:!0})},L=(e,n,t,u)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of I(n))!U.call(e,o)&&(t||o!=="default")&&x(e,o,{get:()=>n[o],enumerable:!(u=q(n,o))||u.enumerable});return e};var Q=(e=>(n,t)=>e&&e.get(n)||(t=L(H({}),n,1),e&&e.set(n,t),t))(typeof WeakMap!="undefined"?new WeakMap:0);var ge={};J(ge,{autobind:()=>P,configurable:()=>T,decorate:()=>v,enumerable:()=>$,extendDescriptor:()=>E,getter:()=>G,nonconfigurable:()=>b,nonenumerable:()=>b,readonly:()=>b,setter:()=>_,time:()=>K});var{defineProperty:V,getOwnPropertyDescriptor:X,getOwnPropertyNames:M,getOwnPropertySymbols:W}=Object;function Y(e){if(!e||!e.hasOwnProperty)return!1;let n=["value","initializer","get","set"];for(let t=0,u=n.length;t<u;t++)if(e.hasOwnProperty(n[t]))return!0;return!1}function a(e,n){return Y(n[n.length-1])?e(...n,[]):function(){return e(...Array.prototype.slice.call(arguments),n)}}function f(e){return function(t){return V(this,e,{configurable:!0,writable:!0,enumerable:!0,value:t}),t}}function D(e,n){return e.bind?e.bind(n):function(){return e.apply(n,arguments)}}var w=W?function(e){return M(e).concat(W(e))}:M;function B(e){let n={};return w(e).forEach(t=>n[t]=X(e,t)),n}var{defineProperty:R,getPrototypeOf:Z}=Object,y;function A(e,n){if(typeof WeakMap>"u")throw new Error(`Using @autobind on ${n.name}() requires WeakMap support due to its use of super.${n.name}()`);y||(y=new WeakMap),y.has(e)===!1&&y.set(e,new WeakMap);let t=y.get(e);return t.has(n)===!1&&t.set(n,D(n,e)),t.get(n)}function k(e){let n=B(e.prototype),t=w(n);for(let u=0,o=t.length;u<o;u++){let r=t[u],i=n[r];typeof i.value!="function"||r==="constructor"||R(e.prototype,r,j(e.prototype,r,i))}}function j(e,n,{value:t,configurable:u,enumerable:o}){if(typeof t!="function")throw new SyntaxError(`@autobind can only be used on functions, not: ${t}`);let{constructor:r}=e;return{configurable:u,enumerable:o,get(){if(this===e||this.constructor!==r&&Z(this).constructor===r)return t;if(this.constructor!==r&&n in this.constructor.prototype)return A(this,t);let i=D(t,this);return R(this,n,{configurable:!0,writable:!0,enumerable:!1,value:i}),i},set:f(n)}}function N(e){if(e.length===1)return k(e[0]);let[n,t,u]=e;return j(n,t,u)}function P(...e){return e.length===0?function(...n){return N(n)}:N(e)}var{defineProperty:ee,getOwnPropertyDescriptor:te}=Object;function O(e,n,t,[u,...o]){t===void 0&&(t=te(e,n));let{configurable:r,enumerable:i,writable:s}=t,c=t.get,h=t.set,m=t.value,d=!!c;return{configurable:r,enumerable:i,get(){let p=d?c.call(this):m,g={target:e,key:n,fn:p},z=u.call(this,g,...o);return ee(this,n,{configurable:r,enumerable:i,value:z,writable:s}),z},set:d?h:f(n)}}function v(...e){return a(O,e)}var S={},ne={time:console.time?console.time.bind(console):e=>{S[e]=new Date},timeEnd:console.timeEnd?console.timeEnd.bind(console):e=>{let t=new Date-S[e];delete S[e],console.log(`${e}: ${t}ms`)}};function re({target:e,key:n,fn:t},u=null,o=ne){let r=0;return u===null&&(u=`${e.constructor.name}.${n}`),function(...i){let s=`${u}-${r}`;r++,o.time(s);let c=t.apply(this,i);return!!c&&typeof c=="function"?Promise.resolve(c).then(()=>o.timeEnd(s)):(o.timeEnd(s),c)}}function K(...e){return a(O,[re,...e])}function oe(e,n,t){return t.configurable=!0,t}function T(...e){return a(oe,e)}function ue(e,n,t){return t.enumerable=!0,t}function $(...e){return a(ue,e)}var{getPrototypeOf:ie,getOwnPropertyDescriptor:ae}=Object;function se(e,n,t){let u=ie(e),o=ae(u,n),r={configurable:o.configurable||!0,enumerable:o.enumerable||!0,initializer:t.initializer};return t.get||t.set?(r.get=t.get||o.get,r.set=t.set||o.set):(r.value=t.value,r.writable=o.writable||!0),r}function E(...e){return a(se,e)}var{defineProperty:ce}=Object;function le(e,n,t){let{configurable:u,enumerable:o,initializer:r,value:i}=t;return{configurable:u,enumerable:o,get(){if(this===e)return;let s=r?r.call(this):i;return ce(this,n,{configurable:u,enumerable:o,writable:!0,value:s}),s},set:f(n)}}function b(...e){return a(le,e)}var{defineProperty:fe,getOwnPropertyDescriptor:C}=Object;function pe(e,n,t,[u,...o]){t===void 0&&(t=C(e,n));let{configurable:r,enumerable:i}=t,s=t.get,c=t.set;return{configurable:r,enumerable:i,get(){let m=C(e,n),d={target:e,key:n,fn:s},p=u.apply(this,[d,...o]),g=p.call(this);return fe(this,n,{configurable:r,enumerable:i,get:p,set:m.set}),g},set:!!s?c:f(n)}}function G(...e){return a(pe,e)}var{defineProperty:de,getOwnPropertyDescriptor:F}=Object;function me(e,n,t,[u,...o]){t===void 0&&(t=F(e,n));let{configurable:r,enumerable:i}=t,s=t.get,c=t.set;return{configurable:r,enumerable:i,get:s,set(h){let m=F(e,n),d={target:e,key:n,fn:c},p=u.apply(this,[d,...o]),g=p.call(this,h);return de(this,n,{configurable:r,enumerable:i,get:m.get,set:p}),g}}}function _(...e){return a(me,e)}module.exports=Q(ge);0&&(module.exports={autobind,configurable,decorate,enumerable,extendDescriptor,getter,nonconfigurable,nonenumerable,readonly,setter,time});
//# sourceMappingURL=index.js.map