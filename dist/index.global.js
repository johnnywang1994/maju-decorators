var TsupDemo=(()=>{var d=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var C=Object.prototype.hasOwnProperty;var F=e=>d(e,"__esModule",{value:!0});var G=(e,t)=>{for(var r in t)d(e,r,{get:t[r],enumerable:!0})},j=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of k(t))!C.call(e,o)&&(r||o!=="default")&&d(e,o,{get:()=>t[o],enumerable:!(n=R(t,o))||n.enumerable});return e};var q=(e=>(t,r)=>e&&e.get(t)||(r=j(F({}),t,1),e&&e.set(t,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var ue={};G(ue,{autobind:()=>b,configurable:()=>D,decorate:()=>h,enumerable:()=>P,extendDescriptor:()=>O,nonconfigurable:()=>f,nonenumerable:()=>f,readonly:()=>f,time:()=>x});var{defineProperty:I,getOwnPropertyDescriptor:U,getOwnPropertyNames:S,getOwnPropertySymbols:T}=Object;function H(e){if(!e||!e.hasOwnProperty)return!1;let t=["value","initializer","get","set"];for(let r=0,n=t.length;r<n;r++)if(e.hasOwnProperty(t[r]))return!0;return!1}function i(e,t){return H(t[t.length-1])?e(...t,[]):function(){return e(...Array.prototype.slice.call(arguments),t)}}function c(e){return function(r){return I(this,e,{configurable:!0,writable:!0,enumerable:!0,value:r}),r}}function m(e,t){return e.bind?e.bind(t):function(){return e.apply(t,arguments)}}var y=T?function(e){return S(e).concat(T(e))}:S;function $(e){let t={};return y(e).forEach(r=>t[r]=U(e,r)),t}var{defineProperty:_,getPrototypeOf:J}=Object,l;function L(e,t){if(typeof WeakMap>"u")throw new Error(`Using @autobind on ${t.name}() requires WeakMap support due to its use of super.${t.name}()`);l||(l=new WeakMap),l.has(e)===!1&&l.set(e,new WeakMap);let r=l.get(e);return r.has(t)===!1&&r.set(t,m(t,e)),r.get(t)}function Q(e){let t=$(e.prototype),r=y(t);for(let n=0,o=r.length;n<o;n++){let u=r[n],a=t[u];typeof a.value!="function"||u==="constructor"||_(e.prototype,u,z(e.prototype,u,a))}}function z(e,t,{value:r,configurable:n,enumerable:o}){if(typeof r!="function")throw new SyntaxError(`@autobind can only be used on functions, not: ${r}`);let{constructor:u}=e;return{configurable:n,enumerable:o,get(){if(this===e||this.constructor!==u&&J(this).constructor===u)return r;if(this.constructor!==u&&t in this.constructor.prototype)return L(this,r);let a=m(r,this);return _(this,t,{configurable:!0,writable:!0,enumerable:!1,value:a}),a},set:c(t)}}function E(e){if(e.length===1)return Q(e[0]);let[t,r,n]=e;return z(t,r,n)}function b(...e){return e.length===0?function(...t){return E(t)}:E(e)}var{defineProperty:V}=Object;function g(e,t,r,[n,...o]){r===void 0&&(r=Object.getOwnPropertyDescriptor(e,t));let{configurable:u,enumerable:a,writable:s}=r,p=r.get,M=r.set,W=r.value,v=!!p;return{configurable:u,enumerable:a,get(){let B=v?p.call(this):W,N={target:e,key:t,fn:B},K=n.call(this,N,...o);return V(this,t,{configurable:u,enumerable:a,value:K,writable:s}),K},set:v?M:c(t)}}function h(...e){return i(g,e)}var w={},X={time:console.time?console.time.bind(console):e=>{w[e]=new Date},timeEnd:console.timeEnd?console.timeEnd.bind(console):e=>{let r=new Date-w[e];delete w[e],console.log(`${e}: ${r}ms`)}};function Y({target:e,key:t,fn:r},n=null,o=X){let u=0;return n===null&&(n=`${e.constructor.name}.${t}`),function(...a){let s=`${n}-${u}`;return u++,o.time(s),Promise.resolve(r.apply(this,a)).then(()=>o.timeEnd(s))}}function x(...e){return i(g,[Y,...e])}function Z(e,t,r){return r.configurable=!0,r}function D(...e){return i(Z,e)}function A(e,t,r){return r.enumerable=!0,r}function P(...e){return i(A,e)}var{getPrototypeOf:ee,getOwnPropertyDescriptor:te}=Object;function re(e,t,r){let n=ee(e),o=te(n,t),u={configurable:o.configurable||!0,enumerable:o.enumerable||!0,initializer:r.initializer};return r.get||r.set?(u.get=r.get||o.get,u.set=r.set||o.set):(u.value=r.value,u.writable=o.writable||!0),u}function O(...e){return i(re,e)}var{defineProperty:ne}=Object;function oe(e,t,r){let{configurable:n,enumerable:o,initializer:u,value:a}=r;return{configurable:n,enumerable:o,get(){if(this===e)return;let s=u?u.call(this):a;return ne(this,t,{configurable:n,enumerable:o,writable:!0,value:s}),s},set:c(t)}}function f(...e){return i(oe,e)}return q(ue);})();
//# sourceMappingURL=index.global.js.map