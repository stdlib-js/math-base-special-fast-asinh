"use strict";var a=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(s){throw (e=0, s)}};};var u=a(function(p,t){
var q=require('@stdlib/math-base-assert-is-infinite/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),i=require('@stdlib/math-base-special-ln/dist'),n=require('@stdlib/math-base-special-sqrt/dist');function f(r){return r===0||v(r)||q(r)?r:r>0?i(r+n(r*r+1)):-i(-r+n(r*r+1))}t.exports=f
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
