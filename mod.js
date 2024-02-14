// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;function n(t){return t!=t}function o(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var e=o();var a=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,r){return null!=t&&i.call(t,r)}var f="function"==typeof Symbol?Symbol:void 0,c="function"==typeof f?f.toStringTag:"";var l=e&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return a.call(t);n=t[c],r=u(t,c);try{t[c]=void 0}catch(r){return a.call(t)}return o=a.call(t),r?t[c]=n:delete t[c],o}:function(t){return a.call(t)},y="function"==typeof Uint32Array;var v="function"==typeof Uint32Array?Uint32Array:null;var p,b="function"==typeof Uint32Array?Uint32Array:void 0;p=function(){var t,r,n;if("function"!=typeof v)return!1;try{r=new v(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(y&&n instanceof Uint32Array||"[object Uint32Array]"===l(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?b:function(){throw new Error("not implemented")};var A=p,m=o();var S=Object.prototype.toString;var d="function"==typeof Symbol?Symbol:void 0,g="function"==typeof d?d.toStringTag:"";var w=m&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return S.call(t);n=t[g],r=u(t,g);try{t[g]=void 0}catch(r){return S.call(t)}return o=S.call(t),r?t[g]=n:delete t[g],o}:function(t){return S.call(t)},U="function"==typeof Float64Array;var h="function"==typeof Float64Array?Float64Array:null;var F,N="function"==typeof Float64Array?Float64Array:void 0;F=function(){var t,r,n;if("function"!=typeof h)return!1;try{r=new h([1,3.14,-3.14,NaN]),n=r,t=(U&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?N:function(){throw new Error("not implemented")};var T=F,s=o();var I=Object.prototype.toString;var j="function"==typeof Symbol?Symbol:void 0,E="function"==typeof j?j.toStringTag:"";var O=s&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return I.call(t);n=t[E],r=u(t,E);try{t[E]=void 0}catch(r){return I.call(t)}return o=I.call(t),r?t[E]=n:delete t[E],o}:function(t){return I.call(t)},V="function"==typeof Uint8Array;var Y="function"==typeof Uint8Array?Uint8Array:null;var _,x="function"==typeof Uint8Array?Uint8Array:void 0;_=function(){var t,r,n;if("function"!=typeof Y)return!1;try{r=new Y(r=[1,3.14,-3.14,256,257]),n=r,t=(V&&n instanceof Uint8Array||"[object Uint8Array]"===O(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?x:function(){throw new Error("not implemented")};var G=_,P=o();var q=Object.prototype.toString;var M="function"==typeof Symbol?Symbol:void 0,k="function"==typeof M?M.toStringTag:"";var z=P&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return q.call(t);n=t[k],r=u(t,k);try{t[k]=void 0}catch(r){return q.call(t)}return o=q.call(t),r?t[k]=n:delete t[k],o}:function(t){return q.call(t)},B="function"==typeof Uint16Array;var C="function"==typeof Uint16Array?Uint16Array:null;var D,H="function"==typeof Uint16Array?Uint16Array:void 0;D=function(){var t,r,n;if("function"!=typeof C)return!1;try{r=new C(r=[1,3.14,-3.14,65536,65537]),n=r,t=(B&&n instanceof Uint16Array||"[object Uint16Array]"===z(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?H:function(){throw new Error("not implemented")};var J,K={uint16:D,uint8:G};(J=new K.uint16(1))[0]=4660;var L=52===new K.uint8(J.buffer)[0],Q=!0===L?1:0,R=new T(1),W=new A(R.buffer);function X(t){return R[0]=t,W[Q]}var Z=o();var $=Object.prototype.toString;var tt="function"==typeof Symbol?Symbol:void 0,rt="function"==typeof tt?tt.toStringTag:"";var nt=Z&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return $.call(t);n=t[rt],r=u(t,rt);try{t[rt]=void 0}catch(r){return $.call(t)}return o=$.call(t),r?t[rt]=n:delete t[rt],o}:function(t){return $.call(t)},ot="function"==typeof Float64Array;var et="function"==typeof Float64Array?Float64Array:null;var at,it="function"==typeof Float64Array?Float64Array:void 0;at=function(){var t,r,n;if("function"!=typeof et)return!1;try{r=new et([1,3.14,-3.14,NaN]),n=r,t=(ot&&n instanceof Float64Array||"[object Float64Array]"===nt(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?it:function(){throw new Error("not implemented")};var ut=!0===L?1:0,ft=new at(1),ct=new A(ft.buffer);var lt=Number.NEGATIVE_INFINITY;var yt=.6931471803691238,vt=1.9082149292705877e-10;function pt(t){var r,o,e,a,i,u,f,c,l,y,v,p;return 0===t?lt:n(t)||t<0?NaN:(i=0,(o=X(t))<1048576&&(i-=54,o=X(t*=0x40000000000000)),o>=2146435072?t+t:(i+=(o>>20)-1023|0,i+=(c=(o&=1048575)+614244&1048576|0)>>20|0,f=(t=function(t,r){return ft[0]=t,ct[ut]=r>>>0,ft[0]}(t,o|1072693248^c))-1,(1048575&2+o)<3?0===f?0===i?0:i*yt+i*vt:(u=f*f*(.5-.3333333333333333*f),0===i?f-u:i*yt-(u-i*vt-f)):(c=o-398458|0,l=440401-o|0,a=(v=(p=(y=f/(2+f))*y)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(v),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(v),u=e+a,(c|=l)>0?(r=.5*f*f,0===i?f-(r-y*(r+u)):i*yt-(r-(y*(r+u)+i*vt)-f)):0===i?f-y*(f-u):i*yt-(y*(f-u)-i*vt-f))))}var bt=Math.sqrt;function At(o){return 0===o||n(o)||function(n){return n===t||n===r}(o)?o:o>0?pt(o+bt(o*o+1)):-pt(-o+bt(o*o+1))}export{At as default};
//# sourceMappingURL=mod.js.map
