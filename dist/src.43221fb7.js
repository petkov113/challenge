parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"I4sy":[function(require,module,exports) {

},{"./assets\\images\\bg-intro-desktop.svg":[["bg-intro-desktop.2ffe5aae.svg","avoI"],"avoI"],"./assets\\images\\bg-intro-mobile.svg":[["bg-intro-mobile.4922628e.svg","Ctk2"],"Ctk2"]}],"Focm":[function(require,module,exports) {
"use strict";require("./styles.scss");var e=document.getElementById("btn"),t=document.querySelector(".navigation__menu"),s=document.getElementById("modal");document.addEventListener("click",function(l){if("button-primary"!==l.target.className){if(l.target!==s&&"modal-close"!==l.target.id)return l.target.closest("#btn")?(e.classList.toggle("active"),void t.classList.toggle("active")):void 0;s.style.display="none"}else s.style.display="block"});
},{"./styles.scss":"I4sy"}]},{},["Focm"], null)
//# sourceMappingURL=/src.43221fb7.js.map