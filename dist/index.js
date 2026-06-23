"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var d=t(function(G,v){
var b=require('@stdlib/stats-strided-distances-dsquared-euclidean/dist'),g=require('@stdlib/stats-strided-distances-dcorrelation/dist'),w=require('@stdlib/stats-strided-distances-dcityblock/dist'),D=require('@stdlib/stats-strided-distances-dcosine-distance/dist'),T={sqeuclidean:b,correlation:g,cityblock:w,cosine:D};v.exports=T
});var q=t(function(H,l){
var j=require('@stdlib/error-tools-fmtprodmsg/dist'),h=d();function A(e,r,a,n,s,u){var i=h[r]||null;if(i===null)throw new TypeError(j("invalid argument. Second argument must be a supported distance metric. Value: `%s`.",r));return i(e,a,n,s,u)}l.exports=A
});var p=t(function(I,m){
var B=require('@stdlib/error-tools-fmtprodmsg/dist'),L=d();function R(e,r,a,n,s,u,i,x){var c=L[r]||null;if(c===null)throw new TypeError(B("invalid argument. Second argument must be a supported distance metric. Value: `%s`.",r));return c.ndarray(e,a,n,s,u,i,x)}m.exports=R
});var k=t(function(J,f){
var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=q(),V=p();S(y,"ndarray",V);f.exports=y
});var _=require("path").join,O=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),C=k(),o,E=O(_(__dirname,"./native.js"));z(E)?o=C:o=E;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
