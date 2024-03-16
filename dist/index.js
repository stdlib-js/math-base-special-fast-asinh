"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=s(function(o,t){
var a=require('@stdlib/math-base-assert-is-infinite/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),i=require('@stdlib/math-base-special-ln/dist'),n=require('@stdlib/math-base-special-sqrt/dist');function v(r){return r===0||q(r)||a(r)?r:r>0?i(r+n(r*r+1)):-i(-r+n(r*r+1))}t.exports=v
});var f=u();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
