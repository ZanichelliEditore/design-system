import{K as r,e}from"./index-CcuDdGyi.js";import{d as s,t as c,m as i}from"./breakpoints-C5kxgyOu.js";function E(t){switch(t){case!0:case"true":case 1:case"1":case"on":case"yes":return!0;case!1:case"false":case 0:case"0":case"off":case"no":return!1;default:return t}}function p(){return Math.random().toString(36).replace("0.","")}function h(t,n,...a){(t.code===r.ENTER||t.code===r.SPACE)&&(t.preventDefault(),n(...a))}function w(t,n,...a){t.code===r.ENTER&&(t.preventDefault(),n(...a))}function u(t=null){return t||(t=document.activeElement),t&&t.shadowRoot&&t.shadowRoot.activeElement?(t=t.shadowRoot.activeElement,u(t)):t}function o(t,n=[]){return n.push(t),t.parentElement?(t=t.parentElement,o(t,n)):t.parentNode&&t.parentNode.host?(t=t.parentNode.host,o(t,n)):n}function b(){switch(!0){case window.innerWidth<=i:return e.MOBILE;case window.innerWidth<=c:return e.TABLET;case window.innerWidth<=s:return e.DESKTOP;default:return e.DESKTOP_WIDE}}function l(t){try{return JSON.parse(t)}catch{return!1}}export{h as a,E as b,o as c,u as d,l as e,b as g,w as h,p as r};