(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var rgb2Hsb = require('./lib/color_converter.js').rgb2Hsb
var hsb2Rgb = require('./lib/color_converter.js').hsb2Rgb
var rgb2Hsl = require('./lib/color_converter.js').rgb2Hsl
var hsl2Rgb = require('./lib/color_converter.js').hsl2Rgb

if (typeof window !== 'undefined') {
  window.rgb2Hsb = rgb2Hsb
  window.hsb2Rgb = hsb2Rgb
  window.rgb2Hsl = rgb2Hsl
  window.hsl2Rgb = hsl2Rgb
}

module.exports = {
  rgb2Hsb: rgb2Hsb,
  hsb2Rgb: hsb2Rgb,
  rgb2Hsl: rgb2Hsl,
  hsl2Rgb: hsl2Rgb
}

},{"./lib/color_converter.js":2}],2:[function(require,module,exports){
"use strict";module.exports.rgb2Hsb=function(a,r,e){a/=255,r/=255,e/=255;var t=void 0,o=void 0,s=void 0,n=Math.min(a,r,e),u=s=Math.max(a,r,e),d=u-n;if(u===n)t=0;else{switch(u){case a:t=(r-e)/d+(r<e?6:0);break;case r:t=2+(e-a)/d;break;case e:t=4+(a-r)/d}t=Math.round(60*t)}return o=0===u?0:1-n/u,[t,o=Math.round(100*o*100)/100,s=Math.round(100*s*100)/100]},module.exports.hsb2Rgb=function(a,r,e){r/=100,e/=100;var t=Math.floor(a/60)%6,o=a/60-t,s=e*(1-r),n=e*(1-o*r),u=e*(1-(1-o)*r),d=void 0,h=void 0,c=void 0;switch(t){case 0:d=e,h=u,c=s;break;case 1:d=n,h=e,c=s;break;case 2:d=s,h=e,c=u;break;case 3:d=s,h=n,c=e;break;case 4:d=u,h=s,c=e;break;case 5:d=e,h=s,c=n}return[Math.round(255*d),Math.round(255*h),Math.round(255*c)]},module.exports.rgb2Hsl=function(a,r,e){a/=255,r/=255,e/=255;var t=Math.min(a,r,e),o=Math.max(a,r,e),s=(t+o)/2,n=o-t,u=void 0,d=void 0;if(o===t)d=u=0;else{switch(d=.5<s?n/(2-o-t):n/(o+t),o){case a:u=(r-e)/n+(r<e?6:0);break;case r:u=2+(e-a)/n;break;case e:u=4+(a-r)/n}u=Math.round(60*u)}return[u,d=Math.round(100*d*100)/100,Math.round(100*s*100)/100]},module.exports.hsl2Rgb=function(a,r,e){a/=360,e/=100;var t=[];if(0===(r/=100))t=[Math.round(255*e),Math.round(255*e),Math.round(255*e)];else{var o=.5<=e?e+r-e*r:e*(1+r),s=2*e-o;t[0]=a+1/3,t[1]=a,t[2]=a-1/3;for(var n=0;n<t.length;n++){var u=t[n];switch(u<0?u+=1:1<u&&(u-=1),!0){case u<1/6:u=s+6*(o-s)*u;break;case 1/6<=u&&u<.5:u=o;break;case.5<=u&&u<2/3:u=s+(o-s)*(4-6*u);break;default:u=s}t[n]=Math.round(255*u)}}return t};
},{}]},{},[1]);
