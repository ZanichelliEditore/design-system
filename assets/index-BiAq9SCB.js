import"./index-BpZkdoDR.js";import{s as Fe,g as te}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as We,H as ze,c as Ve,h as y,a as qe}from"./index-BZ0rSFNp.js";import{j as x}from"./index-BnC6Ywep.js";import{B as Ge}from"./breakpoints-p3CVLX0Q.js";import{g as Be}from"./_commonjsHelpers-Cpj98o6Y.js";var ie={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(a){(function(l,X,F,p){var Ot=["","webkit","Moz","MS","ms","o"],ne=X.createElement("div"),se="function",U=Math.round,w=Math.abs,ft=Date.now;function dt(t,e,i){return setTimeout(pt(t,i),e)}function k(t,e,i){return Array.isArray(t)?(N(t,i[e],i),!0):!1}function N(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==p)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function xt(t,e,i){var n="DEPRECATED METHOD: "+e+`
`+i+` AT 
`;return function(){var s=new Error("get-stack-trace"),r=s&&s.stack?s.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=l.console&&(l.console.warn||l.console.log);return o&&o.call(l.console,n,r),t.apply(this,arguments)}}var I;typeof Object.assign!="function"?I=function(e){if(e===p||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),n=1;n<arguments.length;n++){var s=arguments[n];if(s!==p&&s!==null)for(var r in s)s.hasOwnProperty(r)&&(i[r]=s[r])}return i}:I=Object.assign;var At=xt(function(e,i,n){for(var s=Object.keys(i),r=0;r<s.length;)(!n||n&&e[s[r]]===p)&&(e[s[r]]=i[s[r]]),r++;return e},"extend","Use `assign`."),re=xt(function(e,i){return At(e,i,!0)},"merge","Use `assign`.");function m(t,e,i){var n=e.prototype,s;s=t.prototype=Object.create(n),s.constructor=t,s._super=n,i&&I(s,i)}function pt(t,e){return function(){return t.apply(e,arguments)}}function vt(t,e){return typeof t==se?t.apply(e&&e[0]||p,e):t}function St(t,e){return t===p?e:t}function Q(t,e,i){N($(e),function(n){t.addEventListener(n,i,!1)})}function K(t,e,i){N($(e),function(n){t.removeEventListener(n,i,!1)})}function wt(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function D(t,e){return t.indexOf(e)>-1}function $(t){return t.trim().split(/\s+/g)}function H(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function tt(t){return Array.prototype.slice.call(t,0)}function Dt(t,e,i){for(var n=[],s=[],r=0;r<t.length;){var o=t[r][e];H(s,o)<0&&n.push(t[r]),s[r]=o,r++}return n=n.sort(function(u,d){return u[e]>d[e]}),n}function et(t,e){for(var i,n,s=e[0].toUpperCase()+e.slice(1),r=0;r<Ot.length;){if(i=Ot[r],n=i?i+s:e,n in t)return n;r++}return p}var ae=1;function oe(){return ae++}function Mt(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||l}var le=/mobile|tablet|ip(ad|hone|od)|android/i,Lt="ontouchstart"in l,ce=et(l,"PointerEvent")!==p,he=Lt&&le.test(navigator.userAgent),W="touch",ue="pen",mt="mouse",fe="kinect",de=25,f=1,M=2,c=4,v=8,it=1,z=2,V=4,q=8,G=16,_=z|V,L=q|G,Rt=_|L,Ut=["x","y"],nt=["clientX","clientY"];function g(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(n){vt(t.options.enable,[t])&&i.handler(n)},this.init()}g.prototype={handler:function(){},init:function(){this.evEl&&Q(this.element,this.evEl,this.domHandler),this.evTarget&&Q(this.target,this.evTarget,this.domHandler),this.evWin&&Q(Mt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&K(this.element,this.evEl,this.domHandler),this.evTarget&&K(this.target,this.evTarget,this.domHandler),this.evWin&&K(Mt(this.element),this.evWin,this.domHandler)}};function pe(t){var e,i=t.options.inputClass;return i?e=i:ce?e=Tt:he?e=at:Lt?e=Et:e=rt,new e(t,ve)}function ve(t,e,i){var n=i.pointers.length,s=i.changedPointers.length,r=e&f&&n-s===0,o=e&(c|v)&&n-s===0;i.isFirst=!!r,i.isFinal=!!o,r&&(t.session={}),i.eventType=e,me(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function me(t,e){var i=t.session,n=e.pointers,s=n.length;i.firstInput||(i.firstInput=kt(e)),s>1&&!i.firstMultiple?i.firstMultiple=kt(e):s===1&&(i.firstMultiple=!1);var r=i.firstInput,o=i.firstMultiple,h=o?o.center:r.center,u=e.center=Ht(n);e.timeStamp=ft(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=gt(h,u),e.distance=st(h,u),ge(i,e),e.offsetDirection=Xt(e.deltaX,e.deltaY);var d=Yt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=d.x,e.overallVelocityY=d.y,e.overallVelocity=w(d.x)>w(d.y)?d.x:d.y,e.scale=o?ye(o.pointers,n):1,e.rotation=o?Ee(o.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,Te(i,e);var b=t.element;wt(e.srcEvent.target,b)&&(b=e.srcEvent.target),e.target=b}function ge(t,e){var i=e.center,n=t.offsetDelta||{},s=t.prevDelta||{},r=t.prevInput||{};(e.eventType===f||r.eventType===c)&&(s=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=s.x+(i.x-n.x),e.deltaY=s.y+(i.y-n.y)}function Te(t,e){var i=t.lastInterval||e,n=e.timeStamp-i.timeStamp,s,r,o,h;if(e.eventType!=v&&(n>de||i.velocity===p)){var u=e.deltaX-i.deltaX,d=e.deltaY-i.deltaY,b=Yt(n,u,d);r=b.x,o=b.y,s=w(b.x)>w(b.y)?b.x:b.y,h=Xt(u,d),t.lastInterval=e}else s=i.velocity,r=i.velocityX,o=i.velocityY,h=i.direction;e.velocity=s,e.velocityX=r,e.velocityY=o,e.direction=h}function kt(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:U(t.pointers[i].clientX),clientY:U(t.pointers[i].clientY)},i++;return{timeStamp:ft(),pointers:e,center:Ht(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Ht(t){var e=t.length;if(e===1)return{x:U(t[0].clientX),y:U(t[0].clientY)};for(var i=0,n=0,s=0;s<e;)i+=t[s].clientX,n+=t[s].clientY,s++;return{x:U(i/e),y:U(n/e)}}function Yt(t,e,i){return{x:e/t||0,y:i/t||0}}function Xt(t,e){return t===e?it:w(t)>=w(e)?t<0?z:V:e<0?q:G}function st(t,e,i){i||(i=Ut);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return Math.sqrt(n*n+s*s)}function gt(t,e,i){i||(i=Ut);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return Math.atan2(s,n)*180/Math.PI}function Ee(t,e){return gt(e[1],e[0],nt)+gt(t[1],t[0],nt)}function ye(t,e){return st(e[0],e[1],nt)/st(t[0],t[1],nt)}var Ie={mousedown:f,mousemove:M,mouseup:c},_e="mousedown",Ce="mousemove mouseup";function rt(){this.evEl=_e,this.evWin=Ce,this.pressed=!1,g.apply(this,arguments)}m(rt,g,{handler:function(e){var i=Ie[e.type];i&f&&e.button===0&&(this.pressed=!0),i&M&&e.which!==1&&(i=c),this.pressed&&(i&c&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[e],changedPointers:[e],pointerType:mt,srcEvent:e}))}});var be={pointerdown:f,pointermove:M,pointerup:c,pointercancel:v,pointerout:v},Ne={2:W,3:ue,4:mt,5:fe},Ft="pointerdown",Wt="pointermove pointerup pointercancel";l.MSPointerEvent&&!l.PointerEvent&&(Ft="MSPointerDown",Wt="MSPointerMove MSPointerUp MSPointerCancel");function Tt(){this.evEl=Ft,this.evWin=Wt,g.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}m(Tt,g,{handler:function(e){var i=this.store,n=!1,s=e.type.toLowerCase().replace("ms",""),r=be[s],o=Ne[e.pointerType]||e.pointerType,h=o==W,u=H(i,e.pointerId,"pointerId");r&f&&(e.button===0||h)?u<0&&(i.push(e),u=i.length-1):r&(c|v)&&(n=!0),!(u<0)&&(i[u]=e,this.callback(this.manager,r,{pointers:i,changedPointers:[e],pointerType:o,srcEvent:e}),n&&i.splice(u,1))}});var Pe={touchstart:f,touchmove:M,touchend:c,touchcancel:v},Oe="touchstart",xe="touchstart touchmove touchend touchcancel";function zt(){this.evTarget=Oe,this.evWin=xe,this.started=!1,g.apply(this,arguments)}m(zt,g,{handler:function(e){var i=Pe[e.type];if(i===f&&(this.started=!0),!!this.started){var n=Ae.call(this,e,i);i&(c|v)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,i,{pointers:n[0],changedPointers:n[1],pointerType:W,srcEvent:e})}}});function Ae(t,e){var i=tt(t.touches),n=tt(t.changedTouches);return e&(c|v)&&(i=Dt(i.concat(n),"identifier")),[i,n]}var Se={touchstart:f,touchmove:M,touchend:c,touchcancel:v},we="touchstart touchmove touchend touchcancel";function at(){this.evTarget=we,this.targetIds={},g.apply(this,arguments)}m(at,g,{handler:function(e){var i=Se[e.type],n=De.call(this,e,i);n&&this.callback(this.manager,i,{pointers:n[0],changedPointers:n[1],pointerType:W,srcEvent:e})}});function De(t,e){var i=tt(t.touches),n=this.targetIds;if(e&(f|M)&&i.length===1)return n[i[0].identifier]=!0,[i,i];var s,r,o=tt(t.changedTouches),h=[],u=this.target;if(r=i.filter(function(d){return wt(d.target,u)}),e===f)for(s=0;s<r.length;)n[r[s].identifier]=!0,s++;for(s=0;s<o.length;)n[o[s].identifier]&&h.push(o[s]),e&(c|v)&&delete n[o[s].identifier],s++;if(h.length)return[Dt(r.concat(h),"identifier"),h]}var Me=2500,Vt=25;function Et(){g.apply(this,arguments);var t=pt(this.handler,this);this.touch=new at(this.manager,t),this.mouse=new rt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}m(Et,g,{handler:function(e,i,n){var s=n.pointerType==W,r=n.pointerType==mt;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(s)Le.call(this,i,n);else if(r&&Re.call(this,n))return;this.callback(e,i,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function Le(t,e){t&f?(this.primaryTouch=e.changedPointers[0].identifier,qt.call(this,e)):t&(c|v)&&qt.call(this,e)}function qt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches,s=function(){var r=n.indexOf(i);r>-1&&n.splice(r,1)};setTimeout(s,Me)}}function Re(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var s=this.lastTouches[n],r=Math.abs(e-s.x),o=Math.abs(i-s.y);if(r<=Vt&&o<=Vt)return!0}return!1}var Gt=et(ne.style,"touchAction"),Bt=Gt!==p,Zt="compute",jt="auto",yt="manipulation",R="none",B="pan-x",Z="pan-y",ot=ke();function It(t,e){this.manager=t,this.set(e)}It.prototype={set:function(t){t==Zt&&(t=this.compute()),Bt&&this.manager.element.style&&ot[t]&&(this.manager.element.style[Gt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return N(this.manager.recognizers,function(e){vt(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Ue(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var n=this.actions,s=D(n,R)&&!ot[R],r=D(n,Z)&&!ot[Z],o=D(n,B)&&!ot[B];if(s){var h=t.pointers.length===1,u=t.distance<2,d=t.deltaTime<250;if(h&&u&&d)return}if(!(o&&r)&&(s||r&&i&_||o&&i&L))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function Ue(t){if(D(t,R))return R;var e=D(t,B),i=D(t,Z);return e&&i?R:e||i?e?B:Z:D(t,yt)?yt:jt}function ke(){if(!Bt)return!1;var t={},e=l.CSS&&l.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=e?l.CSS.supports("touch-action",i):!0}),t}var lt=1,T=2,Y=4,A=8,P=A,j=16,C=32;function O(t){this.options=I({},this.defaults,t||{}),this.id=oe(),this.manager=null,this.options.enable=St(this.options.enable,!0),this.state=lt,this.simultaneous={},this.requireFail=[]}O.prototype={defaults:{},set:function(t){return I(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(k(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=ct(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return k(t,"dropRecognizeWith",this)?this:(t=ct(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(k(t,"requireFailure",this))return this;var e=this.requireFail;return t=ct(t,this),H(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(k(t,"dropRequireFailure",this))return this;t=ct(t,this);var e=H(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function n(s){e.manager.emit(s,t)}i<A&&n(e.options.event+Jt(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=A&&n(e.options.event+Jt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=C},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(C|lt)))return!1;t++}return!0},recognize:function(t){var e=I({},t);if(!vt(this.options.enable,[this,e])){this.reset(),this.state=C;return}this.state&(P|j|C)&&(this.state=lt),this.state=this.process(e),this.state&(T|Y|A|j)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function Jt(t){return t&j?"cancel":t&A?"end":t&Y?"move":t&T?"start":""}function Qt(t){return t==G?"down":t==q?"up":t==z?"left":t==V?"right":""}function ct(t,e){var i=e.manager;return i?i.get(t):t}function E(){O.apply(this,arguments)}m(E,O,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(T|Y),s=this.attrTest(t);return n&&(i&v||!s)?e|j:n||s?i&c?e|A:e&T?e|Y:T:C}});function ht(){E.apply(this,arguments),this.pX=null,this.pY=null}m(ht,E,{defaults:{event:"pan",threshold:10,pointers:1,direction:Rt},getTouchAction:function(){var t=this.options.direction,e=[];return t&_&&e.push(Z),t&L&&e.push(B),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,s=t.direction,r=t.deltaX,o=t.deltaY;return s&e.direction||(e.direction&_?(s=r===0?it:r<0?z:V,i=r!=this.pX,n=Math.abs(t.deltaX)):(s=o===0?it:o<0?q:G,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=s,i&&n>e.threshold&&s&e.direction},attrTest:function(t){return E.prototype.attrTest.call(this,t)&&(this.state&T||!(this.state&T)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Qt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function _t(){E.apply(this,arguments)}m(_t,E,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[R]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&T)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function Ct(){O.apply(this,arguments),this._timer=null,this._input=null}m(Ct,O,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[jt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(c|v)&&!s)this.reset();else if(t.eventType&f)this.reset(),this._timer=dt(function(){this.state=P,this.tryEmit()},e.time,this);else if(t.eventType&c)return P;return C},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===P&&(t&&t.eventType&c?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=ft(),this.manager.emit(this.options.event,this._input)))}});function bt(){E.apply(this,arguments)}m(bt,E,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[R]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&T)}});function Nt(){E.apply(this,arguments)}m(Nt,E,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:_|L,pointers:1},getTouchAction:function(){return ht.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,i;return e&(_|L)?i=t.overallVelocity:e&_?i=t.overallVelocityX:e&L&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&w(i)>this.options.velocity&&t.eventType&c},emit:function(t){var e=Qt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function ut(){O.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}m(ut,O,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[yt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),t.eventType&f&&this.count===0)return this.failTimeout();if(n&&s&&i){if(t.eventType!=c)return this.failTimeout();var r=this.pTime?t.timeStamp-this.pTime<e.interval:!0,o=!this.pCenter||st(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!o||!r?this.count=1:this.count+=1,this._input=t;var h=this.count%e.taps;if(h===0)return this.hasRequireFailures()?(this._timer=dt(function(){this.state=P,this.tryEmit()},e.interval,this),T):P}return C},failTimeout:function(){return this._timer=dt(function(){this.state=C},this.options.interval,this),C},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==P&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function S(t,e){return e=e||{},e.recognizers=St(e.recognizers,S.defaults.preset),new Pt(t,e)}S.VERSION="2.0.7",S.defaults={domEvents:!1,touchAction:Zt,enable:!0,inputTarget:null,inputClass:null,preset:[[bt,{enable:!1}],[_t,{enable:!1},["rotate"]],[Nt,{direction:_}],[ht,{direction:_},["swipe"]],[ut],[ut,{event:"doubletap",taps:2},["tap"]],[Ct]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var He=1,Kt=2;function Pt(t,e){this.options=I({},S.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=pe(this),this.touchAction=new It(this,this.options.touchAction),$t(this,!0),N(this.options.recognizers,function(i){var n=this.add(new i[0](i[1]));i[2]&&n.recognizeWith(i[2]),i[3]&&n.requireFailure(i[3])},this)}Pt.prototype={set:function(t){return I(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?Kt:He},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,s=e.curRecognizer;(!s||s&&s.state&P)&&(s=e.curRecognizer=null);for(var r=0;r<n.length;)i=n[r],e.stopped!==Kt&&(!s||i==s||i.canRecognizeWith(s))?i.recognize(t):i.reset(),!s&&i.state&(T|Y|A)&&(s=e.curRecognizer=i),r++}},get:function(t){if(t instanceof O)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(k(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(k(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,i=H(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==p&&e!==p){var i=this.handlers;return N($(t),function(n){i[n]=i[n]||[],i[n].push(e)}),this}},off:function(t,e){if(t!==p){var i=this.handlers;return N($(t),function(n){e?i[n]&&i[n].splice(H(i[n],e),1):delete i[n]}),this}},emit:function(t,e){this.options.domEvents&&Ye(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(!(!i||!i.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&$t(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function $t(t,e){var i=t.element;if(i.style){var n;N(t.options.cssProps,function(s,r){n=et(i.style,r),e?(t.oldCssProps[n]=i.style[n],i.style[n]=s):i.style[n]=t.oldCssProps[n]||""}),e||(t.oldCssProps={})}}function Ye(t,e){var i=X.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}I(S,{INPUT_START:f,INPUT_MOVE:M,INPUT_END:c,INPUT_CANCEL:v,STATE_POSSIBLE:lt,STATE_BEGAN:T,STATE_CHANGED:Y,STATE_ENDED:A,STATE_RECOGNIZED:P,STATE_CANCELLED:j,STATE_FAILED:C,DIRECTION_NONE:it,DIRECTION_LEFT:z,DIRECTION_RIGHT:V,DIRECTION_UP:q,DIRECTION_DOWN:G,DIRECTION_HORIZONTAL:_,DIRECTION_VERTICAL:L,DIRECTION_ALL:Rt,Manager:Pt,Input:g,TouchAction:It,TouchInput:at,MouseInput:rt,PointerEventInput:Tt,TouchMouseInput:Et,SingleTouchInput:zt,Recognizer:O,AttrRecognizer:E,Tap:ut,Pan:ht,Swipe:Nt,Pinch:_t,Rotate:bt,Press:Ct,on:Q,off:K,each:N,merge:re,extend:At,assign:I,inherit:m,bindFn:pt,prefixed:et});var Xe=typeof l<"u"?l:typeof self<"u"?self:{};Xe.Hammer=S,a.exports?a.exports=S:l[F]=S})(window,document,"Hammer")})(ie);var Ze=ie.exports;const J=Be(Ze),je=":host{display:inline-block;width:100vw;min-width:200px;--percentuale:0}:host(.slide-in-left){animation:slideinleft 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-in-right){animation:slideinright 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-in-down){animation:slideindown 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-in-up){animation:slideinup 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-out-left){animation:slideoutleft 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-out-right){animation:slideoutright 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-out-down){animation:slideoutdown 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-out-up){animation:slideoutup 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}@keyframes slideinleft{0%{transform:translateX(100%)}100%{transform:translateX(0)}}@keyframes slideinright{0%{transform:translateX(-100%)}100%{transform:translateX(0)}}@keyframes slideinup{0%{opacity:0;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}@keyframes slideindown{0%{opacity:0;transform:translateY(-100%)}100%{opacity:1;transform:translateY(0)}}@keyframes slideoutleft{0%{opacity:calc(100% - var(--percentuale));transform:translateX(var(--percentuale))}100%{opacity:0;transform:translateX(-100%)}}@keyframes slideoutright{0%{opacity:calc(100% - var(--percentuale));transform:translateX(var(--percentuale))}100%{opacity:0;transform:translateX(100%)}}@keyframes slideoutup{0%{opacity:1;transform:translateY(var(--percentuale))}100%{opacity:0;transform:translateY(-100%)}}@keyframes slideoutdown{0%{opacity:1;transform:translateY(var(--percentuale))}100%{opacity:0;transform:translateY(100%)}}:host>#external-container{display:flex;min-height:52px;box-sizing:border-box;align-items:center;justify-content:space-between;padding:calc(var(--space-unit) * 1) calc(var(--space-unit) * 2);border-radius:4px;box-shadow:var(--shadow-3);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-rg);letter-spacing:0.16px}:host>#external-container.mobile-wrapped>#icon{align-self:flex-start}:host>#external-container.several-lines-padding{padding:calc(var(--space-unit) * 2)}:host>#external-container>#flex-container{display:flex;width:100%;flex-wrap:wrap;align-items:center;justify-content:space-between}:host>#external-container #text{margin-right:calc(var(--space-unit) * 2);color:var(--color-white);letter-spacing:0.16px;line-height:20px;text-align:left}:host>#external-container #text>.title{margin-right:4px;font-weight:600}:host>#external-container.mobile-wrapped #button ::slotted(z-button){margin-top:calc(var(--space-unit) * 2)}:host>#external-container #icon{margin-left:calc(var(--space-unit) * 2);cursor:pointer;fill:var(--color-white)}z-icon{display:inline-block;vertical-align:0}z-icon:focus{padding:calc(var(--space-unit) / 4);border-radius:50%;box-shadow:var(--shadow-focus-primary);outline:none !important}:host>#external-container.dark{background:var(--gray800)}:host>#external-container.light{background:var(--color-background)}:host>#external-container.light #icon,:host>#external-container.warning #text,:host>#external-container.warning #icon{fill:var(--color-primary01-icon)}:host>#external-container.light #text,:host>#external-container.warning #text{color:var(--gray800)}:host>#external-container.accent{background:var(--color-primary01)}:host>#external-container.error{background:var(--color-error-default)}:host>#external-container.success{background:var(--color-success-default)}:host>#external-container.warning{background:var(--color-warning-default)}@media only screen and (min-width: 768px){:host{width:unset;max-width:50vw}:host>#external-container>#flex-container{flex-wrap:nowrap}:host>#external-container #text{width:100%}}@media only screen and (min-width: 1366px){:host{width:unset;max-width:33vw}}",Je=class extends ze{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.toastClose=Ve(this,"toastClose",7),this.isCloseEventCalled=!1,this.heading=void 0,this.message=void 0,this.closebutton=void 0,this.autoclose=void 0,this.pauseonfocusloss=!0,this.type=void 0,this.isdraggable=!0,this.draggablepercentage=80,this.transition=void 0,this.percentage=void 0}watchPropIsdraggable(a){a?this.sliderManager.get("pan").set({enable:!0}):this.sliderManager.get("pan").set({enable:!1})}watchPropAutoclose(a){clearTimeout(this.timeoutHandle),this.startClosingTimeout(a)}watchPropPauseonfocusloss(a){this.autoclose&&(a?document.addEventListener("visibilitychange",this.visibilityChangeEventHandler):document.removeEventListener("visibilitychange",this.visibilityChangeEventHandler))}emitToastClose(a){this.timeoutHandle=null,this.elapsedTime=null,this.hostElement.classList.add(a),this.toastClose.emit()}componentWillLoad(){this.isMobile=window.innerWidth<=Ge.MOBILE,this.validateAutoclose(),this.percentage=0}componentDidLoad(){this.isTextLong=this.detectWrap()||this.toastText.offsetHeight>20,this.startTime=Date.now(),this.autoclose&&this.pauseonfocusloss&&document.addEventListener("visibilitychange",this.visibilityChangeEventHandler),this.isdraggable&&this.handleSlideOutDragAnimation()}visibilityChangeEventHandler(){document.visibilityState==="hidden"?this.timeoutHandle&&this.onBlur():this.elapsedTime&&this.onFocus()}validateAutoclose(){!this.autoclose&&!this.closebutton&&console.error("At least one between autoclose and closebutton must be present")}mapSlideOutClass(){switch(this.transition){case x.SLIDE_IN_DOWN:return x.SLIDE_OUT_UP;case x.SLIDE_IN_UP:return x.SLIDE_OUT_DOWN;case x.SLIDE_IN_LEFT:return x.SLIDE_OUT_RIGHT;case x.SLIDE_IN_RIGHT:return x.SLIDE_OUT_LEFT}}calculateDraggedPercentage(a){const l=this.hostElement.getBoundingClientRect();return Math.round(100*a.deltaX/l.width)}handleSlideOutDragAnimation(){this.sliderManager=new J(this.hostElement),this.sliderManager.get("pan").set({direction:J.DIRECTION_HORIZONTAL}),this.sliderManager.on("pan",a=>{this.percentage=this.calculateDraggedPercentage(a),this.hostElement.style.transition="none",this.hostElement.classList.remove(this.transition);const l={translate:`translateX(${this.percentage}%)`,translateBack:"translateX(0)"};this.hostElement.style.opacity=`${100-Math.abs(this.percentage)}%`,(a.eventType===J.DIRECTION_LEFT||a.eventType===J.DIRECTION_RIGHT)&&(this.hostElement.style.transform=l.translate,Math.abs(this.percentage)>this.draggablepercentage&&!this.isCloseEventCalled&&(this.isCloseEventCalled=!0,this.emitToastClose(a.direction===J.DIRECTION_LEFT?"slide-out-left":"slide-out-right"))),a.isFinal&&Math.abs(this.percentage)<this.draggablepercentage&&(this.hostElement.style.transform=l.translateBack,this.hostElement.style.transition="all 1s",this.hostElement.style.opacity="100%",this.percentage=0)})}onFocus(){let a=this.autoclose;this.elapsedTime&&(a=this.autoclose-this.elapsedTime),a>0&&this.startClosingTimeout(a)}onBlur(){this.elapsedTime=Date.now()-this.startTime,clearTimeout(this.timeoutHandle)}startClosingTimeout(a){this.timeoutHandle=window.setTimeout(()=>this.emitToastClose(this.mapSlideOutClass()),a)}detectWrap(){const a=this.container.offsetWidth,l=this.container.children;let X=0;for(let F=0;F<l.length;F++)X+=l[F].offsetWidth;return X>a}renderText(){return y("div",{id:"text",ref:a=>this.toastText=a},y("span",{class:"title"},this.heading),y("span",{class:"message"},this.message))}renderButton(){return y("div",{id:"button"},y("slot",{name:"button"}))}renderCloseIcon(){if(this.closebutton)return y("div",{id:"icon"},y("z-icon",{tabIndex:0,name:"multiply-circled",width:15,height:15,onClick:()=>this.emitToastClose(this.mapSlideOutClass()),onKeyPress:a=>{(a.keyCode==32||a.keyCode==13)&&(a.preventDefault(),this.emitToastClose(this.mapSlideOutClass()))}}))}renderContainer(){return y("div",{tabIndex:0,id:"external-container",class:{[this.type]:!!this.type,"several-lines-padding":this.isTextLong},ref:a=>this.container=a},this.renderText(),this.renderButton(),this.renderCloseIcon())}renderMobileContainer(){return y("div",{id:"external-container",class:{[this.type]:!!this.type,"several-lines-padding":this.isTextLong,"mobile-wrapped":this.isTextLong}},y("div",{id:"flex-container",ref:a=>this.container=a},this.renderText(),this.renderButton()),this.renderCloseIcon())}render(){return y(qe,{key:"8de57deae62cbc57c139b665b2a2cb89923710fe",style:{"--percentuale":`${this.percentage}%`},class:this.transition?this.transition:x.SLIDE_IN_DOWN,onAnimationEnd:a=>{this.autoclose&&a.animationName.includes("slidein")&&this.startClosingTimeout(this.autoclose),a.animationName.includes("slideout")&&this.hostElement.parentNode.removeChild(this.hostElement)}},this.isMobile?this.renderMobileContainer():this.renderContainer())}get hostElement(){return this}static get watchers(){return{isdraggable:["watchPropIsdraggable"],autoclose:["watchPropAutoclose"],pauseonfocusloss:["watchPropPauseonfocusloss"]}}static get style(){return je}};We(Je,[1,"z-toast-notification",{heading:[1],message:[1],closebutton:[4],autoclose:[2],pauseonfocusloss:[4],type:[8],isdraggable:[4],draggablepercentage:[2],transition:[8],percentage:[32]},void 0,{isdraggable:["watchPropIsdraggable"],autoclose:["watchPropAutoclose"],pauseonfocusloss:["watchPropPauseonfocusloss"]}]);const ee={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZToastNotification",tagName:"z-toast-notification",customElement:!0,members:[{kind:"field",name:"heading",type:"string",description:"toast notification's title"},{kind:"field",name:"message",type:"string",description:"toast notification's message"},{kind:"field",name:"closebutton",type:"boolean",description:"toggles closing button rendering"},{kind:"field",name:"autoclose",type:"number",description:"toast notification closing timeout (ms)"},{kind:"field",name:"pauseonfocusloss",type:"boolean",description:"toast notification autoclose can be paused",default:"true"},{kind:"field",name:"type",type:"any",description:"toast notification type: dark, light, accent, error, success, warning"},{kind:"field",name:"isdraggable",type:"boolean",description:"toast notification can be draggable",default:"true"},{kind:"field",name:"draggablepercentage",type:"number",description:"toast notification draggable percentage",default:"80"},{kind:"field",name:"transition",type:"any",description:"toast notification animation type: slide-in-left, slide-in-right, slide-in-down, slide-in-up"}],events:[{kind:"event",name:"toastClose",description:"notification close event"}]}],exports:[{kind:"js",name:"ZToastNotification",declaration:{name:"ZToastNotification",module:"src/components/z-toast-notification/index.tsx"}},{kind:"custom-element-definition",name:"z-toast-notification",declaration:{name:"ZToastNotification",module:"src/components/z-toast-notification/index.tsx"}}]}]};Fe({...te()||{},...ee,modules:[...(te()||{}).modules||[],...ee.modules]});