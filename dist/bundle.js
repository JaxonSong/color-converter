(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var rgb2Hsb = require('./lib/color_converter.js').rgb2Hsb
var hsb2Rgb = require('./lib/color_converter.js').hsb2Rgb

if (typeof window !== 'undefined') {
  window.rgb2Hsb = rgb2Hsb
  window.hsb2Rgb = hsb2Rgb
}

module.exports = {
  rgb2Hsb: rgb2Hsb,
  hsb2Rgb: hsb2Rgb
}

},{"./lib/color_converter.js":2}],2:[function(require,module,exports){
"use strict";module.exports.rgb2Hsb=function(a,e,r){a/=255,e/=255,r/=255;var o=void 0,t=void 0,s=void 0,c=Math.min(a,e,r),d=s=Math.max(a,e,r),i=d-c;if(d===c)o=0;else{switch(d){case a:o=(e-r)/i+(e<r?6:0);break;case e:o=2+(r-a)/i;break;case r:o=4+(a-e)/i}o=Math.round(60*o)}return t=0===d?0:1-c/d,[o,t=Math.round(100*t*100)/100,s=Math.round(100*s*100)/100]},module.exports.hsb2Rgb=function(a,e,r){e/=100,r/=100;var o=Math.floor(a/60)%6,t=a/60-o,s=r*(1-e),c=r*(1-t*e),d=r*(1-(1-t)*e),i=void 0,n=void 0,u=void 0;switch(o){case 0:i=r,n=d,u=s;break;case 1:i=c,n=r,u=s;break;case 2:i=s,n=r,u=d;break;case 3:i=s,n=c,u=r;break;case 4:i=d,n=s,u=r;break;case 5:i=r,n=s,u=c}return[Math.round(255*i),Math.round(255*n),Math.round(255*u)]};
},{}]},{},[1]);
