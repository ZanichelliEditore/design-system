var __awaiter=this&&this.__awaiter||function(t,e,i,n){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function a(t){try{c(n.next(t))}catch(t){r(t)}}function s(t){try{c(n["throw"](t))}catch(t){r(t)}}function c(t){t.done?i(t.value):o(t.value).then(a,s)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,o,r,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(a&&(a=0,s[0]&&(i=0)),i)try{if(n=1,o&&(r=s[0]&2?o["return"]:s[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;if(o=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;o=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(s[0]===6&&i.label<r[1]){i.label=r[1];r=s;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(s);break}if(r[2])i.ops.pop();i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t];o=0}finally{n=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};import{r as registerInstance,c as createEvent,h,g as getElement}from"./index-ab5f1eaa.js";import{q as PocketStatus}from"./index-2255c6c8.js";import{H as Hammer}from"./hammer-f1ed46b5.js";import{a as handleKeyboardSubmit}from"./utils-7983d02c.js";import"./breakpoints-680e0e56.js";var stylesCss$2=":host{width:inherit;height:100%;margin:inherit;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{width:inherit;height:100%;margin:inherit}:host>div>div.background{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;width:0;height:0}:host>div>div.background.open{width:100%;height:100%}:host>div>div.content-wrapper{position:fixed;z-index:999;bottom:0;left:0;width:inherit;margin:inherit}:host>div>div.content-wrapper>div{margin:calc(var(--space-unit) * 0.5) calc(var(--space-unit) * 0.5) 0 calc(var(--space-unit) * 0.5);border-radius:var(--space-unit) var(--space-unit) 0 0;-webkit-box-shadow:0 -2px calc(var(--space-unit) * 0.5) 0 rgb(66 69 72 / 40%);box-shadow:0 -2px calc(var(--space-unit) * 0.5) 0 rgb(66 69 72 / 40%)}";var ZPocketStyle0=stylesCss$2;var ZPocket=function(){function t(t){registerInstance(this,t);this.pocketToggle=createEvent(this,"pocketToggle",7);this.pocketid=undefined;this.status=PocketStatus.PREVIEW}t.prototype.open=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.status=PocketStatus.OPEN;return[2]}))}))};t.prototype.close=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.status=PocketStatus.CLOSED;return[2]}))}))};t.prototype.emitPocketToggle=function(t,e){this.pocketToggle.emit({id:t,status:e})};t.prototype.handlePocketHeaderClick=function(t){if(t.detail.id&&t.detail.id===this.pocketid){switch(this.status){case PocketStatus.PREVIEW:case PocketStatus.CLOSED:this.status=PocketStatus.OPEN;break;case PocketStatus.OPEN:this.status=PocketStatus.CLOSED;break}}};t.prototype.handlePocketHeaderPan=function(t){if(t.detail.id&&t.detail.id===this.pocketid){if(t.detail.direction==="up"){this.status=PocketStatus.OPEN}else if(t.detail.direction==="down"){this.status=PocketStatus.CLOSED}}};t.prototype.watchStatusHandler=function(t){this.emitPocketToggle(this.pocketid,t)};t.prototype.componentWillLoad=function(){this.emitPocketToggle(this.pocketid,this.status)};t.prototype.handleBackgroundClick=function(t){if(t.target.dataset.action=="pocketBackground"){this.close()}};t.prototype.render=function(){var t=this;return h("div",{key:"45e8cd09d2390cda3ef219256245868d2c96a970"},h("div",{key:"3eb0f5af6a61188321d4258eaa8201f7ee24a607","data-action":"pocketBackground","data-pocket":this.pocketid,class:"background ".concat(this.status),onClick:function(e){return t.handleBackgroundClick(e)}}),h("div",{key:"453fc771bb812749b02687a4acf43eb60c8a32ec",id:this.pocketid,class:"content-wrapper"},h("div",{key:"d84500c28a276e0e30eb3eef88d8141dd047f290"},h("slot",{key:"dcd5b7827d6fc211ce38300af4aaa7efcbe71ef2"}))))};Object.defineProperty(t.prototype,"hostElement",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{status:["watchStatusHandler"]}},enumerable:false,configurable:true});return t}();ZPocket.style=ZPocketStyle0;var stylesCss$1=":host{display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>main{overflow:auto;border-right:var(--border-size-small) solid var(--color-surface03);border-left:var(--border-size-small) solid var(--color-surface03);background:var(--color-surface01);scrollbar-width:none}:host>main.preview{max-height:225px;-webkit-transition:all 200ms ease-in-out,\n    top 200ms ease-in-out;transition:all 200ms ease-in-out,\n    top 200ms ease-in-out}:host>main.open{max-height:calc(100vh - 48px);-webkit-transition:all 200ms ease-in-out,\n    top 200ms ease-in-out;transition:all 200ms ease-in-out,\n    top 200ms ease-in-out}:host>main.closed{height:0;-webkit-transition:all 200ms ease-in-out,\n    top 200ms ease-in-out;transition:all 200ms ease-in-out,\n    top 200ms ease-in-out}:host ::-webkit-scrollbar{width:0}@media only screen and (min-width: 768px){:host>main.preview{max-height:157px}}";var ZPocketBodyStyle0=stylesCss$1;var ZPocketBody=function(){function t(t){registerInstance(this,t);this.pocketid=undefined;this.status=PocketStatus.PREVIEW}t.prototype.handlePocketToggle=function(t){if(t.detail.id&&t.detail.id===this.pocketid){this.status=t.detail.status}};t.prototype.render=function(){return h("main",{key:"b617d3b45b165732ac7f354c52e789b141eef47a",class:this.status},h("slot",{key:"bfed72b7529e4ee7f05e929d332a5913f46445bf"}))};return t}();ZPocketBody.style=ZPocketBodyStyle0;var stylesCss=":host{display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>header{display:-ms-flexbox;display:flex;height:36px;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:var(--border-size-small) solid var(--color-surface03);background:var(--color-surface01);border-radius:var(--space-unit) var(--space-unit) 0 0;cursor:pointer}:host>header:focus{outline:none}:host>header::-moz-focus-inner{border:0}";var ZPocketHeaderStyle0=stylesCss;var ZPocketHeader=function(){function t(t){registerInstance(this,t);this.pocketHeaderClick=createEvent(this,"pocketHeaderClick",7);this.pocketHeaderPan=createEvent(this,"pocketHeaderPan",7);this.pocketid=undefined;this.emitPocketHeaderClick=this.emitPocketHeaderClick.bind(this)}t.prototype.emitPocketHeaderClick=function(){this.pocketHeaderClick.emit({id:this.pocketid})};t.prototype.emitPocketHeaderPan=function(t){this.pocketHeaderPan.emit({id:this.pocketid,direction:t})};t.prototype.componentDidLoad=function(){var t=this;var e=new Hammer(this.swipeWrap);e.get("pan").set({direction:Hammer.DIRECTION_VERTICAL});e.on("panup",(function(){return t.emitPocketHeaderPan("up")}));e.on("pandown",(function(){return t.emitPocketHeaderPan("down")}))};t.prototype.render=function(){var t=this;return h("header",{key:"e7f1ed78dd4b33c701d5bd0f648c9401d8a38313",role:"button",tabindex:0,onClick:function(){return t.emitPocketHeaderClick()},onKeyPress:function(e){return handleKeyboardSubmit(e,t.emitPocketHeaderClick)},ref:function(e){return t.swipeWrap=e}},h("slot",{key:"1d8bb012ac6dcdf3337d0c70df59b3b098e9de56"}))};return t}();ZPocketHeader.style=ZPocketHeaderStyle0;export{ZPocket as z_pocket,ZPocketBody as z_pocket_body,ZPocketHeader as z_pocket_header};
//# sourceMappingURL=z-pocket_3.entry.js.map