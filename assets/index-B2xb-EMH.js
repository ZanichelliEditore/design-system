import"./index-BpZkdoDR.js";import{s as S,g}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as A,H as T,c as m,h as l}from"./index-BZ0rSFNp.js";import{K as b}from"./index-BnC6Ywep.js";var c=window.CustomEvent;(!c||typeof c=="object")&&(c=function(t,o){o=o||{};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,!!o.bubbles,!!o.cancelable,o.detail||null),i},c.prototype=window.Event.prototype);function _(e,t){var o="on"+t.type.toLowerCase();return typeof e[o]=="function"&&e[o](t),e.dispatchEvent(t)}function L(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),o=function(i,a){return!(t[i]===void 0||t[i]===a)};if(t.opacity<1||o("zIndex","auto")||o("transform","none")||o("mixBlendMode","normal")||o("filter","none")||o("perspective","none")||t.isolation==="isolate"||t.position==="fixed"||t.webkitOverflowScrolling==="touch")return!0;e=e.parentElement}return!1}function h(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function E(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function z(e,t){for(var o=0;o<e.length;++o)if(e[o]===t)return!0;return!1}function f(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function M(e){var t=["button","input","keygen","select","textarea"],o=t.map(function(d){return d+":not([disabled])"});o.push('[tabindex]:not([disabled]):not([tabindex=""])');var i=e.querySelector(o.join(", "));if(!i&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),r=0;r<a.length&&!(a[r].tagName&&a[r].shadowRoot&&(i=M(a[r].shadowRoot),i));r++);return i}function v(e){return e.isConnected||document.body.contains(e)}function x(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var o=n.formSubmitter;if(!o){var i=e.target,a="getRootNode"in i&&i.getRootNode()||document;o=a.activeElement}return!o||o.form!==t?null:o}function I(e){if(!e.defaultPrevented){var t=e.target,o=n.imagemapUseValue,i=x(e);o===null&&i&&(o=i.value);var a=h(t);if(a){var r=i&&i.getAttribute("formmethod")||t.getAttribute("method");r==="dialog"&&(e.preventDefault(),o!=null?a.close(o):a.close())}}}function D(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",I,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var o=!1,i=(function(){o?this.downgradeModal():this.maybeHideModal(),o=!1}).bind(this),a,r=function(d){if(d.target===e){var u="DOMNodeRemoved";o|=d.type.substr(0,u.length)===u,window.clearTimeout(a),a=window.setTimeout(i,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(d){e.addEventListener(d,r)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}D.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&v(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),n.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var o=document.createEvent("MouseEvents");o.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(o),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=M(this.dialog_)),E(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!v(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!n.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");L(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,n.needsCentering(this.dialog_)?(n.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new c("close",{bubbles:!1,cancelable:!1});_(this.dialog_,t)}};var n={};n.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,o=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,o)+"px"};n.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var o=document.styleSheets[t],i=null;try{i=o.cssRules}catch{}if(i)for(var a=0;a<i.length;++a){var r=i[a],d=null;try{d=document.querySelectorAll(r.selectorText)}catch{}if(!(!d||!z(d,e))){var u=r.style.getPropertyValue("top"),p=r.style.getPropertyValue("bottom");if(u&&u!=="auto"||p&&p!=="auto")return!0}}}return!1};n.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!n.isInlinePositionSetByStylesheet(e)};n.forceRegisterDialog=function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new D(e)};n.registerDialog=function(e){e.showModal||n.forceRegisterDialog(e)};n.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var o=[];t.forEach(function(i){for(var a=0,r;r=i.removedNodes[a];++a){if(r instanceof Element)r.localName==="dialog"&&o.push(r);else continue;o=o.concat(r.querySelectorAll("dialog"))}}),o.length&&e(o)}))};n.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};n.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};n.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,o;o=this.pendingDialogStack[t];++t)o.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var i=this.pendingDialogStack[0];if(i){var a=i.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};n.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=h(e);){for(var t=0,o;o=this.pendingDialogStack[t];++t)if(o.dialog===e)return t===0;e=e.parentElement}return!1};n.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),E(t),this.forwardTab_!==void 0)){var o=this.pendingDialogStack[0],i=o.dialog,a=i.compareDocumentPosition(t);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?o.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};n.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new c("cancel",{bubbles:!1,cancelable:!0}),o=this.pendingDialogStack[0];o&&_(o.dialog,t)&&o.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};n.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(o){e.indexOf(o.dialog)!==-1?o.downgradeModal():o.maybeHideModal()})};n.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};n.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};n.dm=new n.DialogManager;n.formSubmitter=null;n.imagemapUseValue=null;if(window.HTMLDialogElement===void 0){var y=document.createElement("form");if(y.setAttribute("method","dialog"),y.method!=="dialog"){var s=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(s){var N=s.get;s.get=function(){return f(this)?"dialog":N.call(this)};var O=s.set;s.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):O.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",s)}}document.addEventListener("click",function(e){if(n.formSubmitter=null,n.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var o=e.composedPath();t=o.shift()||t}if(!(!t||!f(t.form))){var i=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!i){if(!(t.localName==="input"&&t.type==="image"))return;n.imagemapUseValue=e.offsetX+","+e.offsetY}var a=h(t);a&&(n.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,o=h(t);if(!o){var i=x(e),a=i&&i.getAttribute("formmethod")||t.getAttribute("method");a==="dialog"&&e.preventDefault()}});var H=HTMLFormElement.prototype.submit,B=function(){if(!f(this))return H.call(this);var e=h(this);e&&e.close()};HTMLFormElement.prototype.submit=B}const P=`:host{font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-modal-content-padding:calc(var(--space-unit) * 2)}:host>dialog{padding:0;border:none;margin:0;background-color:transparent}:host>dialog:modal{width:100%;max-width:100%;max-height:100%}:host>dialog::backdrop{display:none}:host>dialog+.backdrop{display:none}:host>dialog:not([open]){display:none}:host>dialog[open]{display:block}::slotted([slot="modalContent"]){padding:var(--z-modal-content-padding)}.modal-container{z-index:1010;display:flex;overflow:-moz-scrollbars-none;width:100%;height:100vh;flex-direction:column}.modal-container>.modal-content-scroll-outside{overflow:auto;background:var(--color-surface01)}.modal-container>header{padding:calc(var(--space-unit) * 1.75) calc(var(--space-unit) * 2) calc(var(--space-unit) * 1.75)
    calc(var(--space-unit) * 2);background:var(--color-background)}.modal-container>header button{padding:0;border:none;margin:0;margin-left:auto;background:transparent;cursor:pointer}.modal-container>header button:focus-visible{border-radius:50%;box-shadow:var(--shadow-focus-primary);outline:none !important}.modal-container>header button::after{position:absolute;top:6px;right:4px;display:block;width:40px;height:40px;background-color:transparent;content:""}.modal-container>header z-icon{--z-icon-width:calc(var(--space-unit) * 2.25);--z-icon-height:calc(var(--space-unit) * 2.25);display:flex;fill:var(--color-primary01-icon)}.modal-container>header>div{display:flex;width:100%;align-items:baseline;margin-right:calc(var(--space-unit) * 2)}.modal-container>header h1,.modal-container>header .subtitle{padding:0;margin:0;color:var(--color-default-text);font-weight:var(--font-sb)}.modal-container>header h1{font-size:var(--font-size-5);letter-spacing:0;line-height:1.4}.modal-container>header .subtitle{font-size:var(--font-size-3);font-weight:var(--font-rg);letter-spacing:0;line-height:1.5}.modal-container>header>div>h1 *:empty{display:none}.modal-container>header h1+.subtitle{margin-top:calc(var(--space-unit) * 0.5)}.modal-container-scroll-inside>.modal-content-scroll-inside{overflow:hidden auto;flex:1 auto;background:var(--color-surface01)}.modal-container-scroll-inside>.modal-content-scroll-inside::-webkit-scrollbar,.modal-container-scroll-outside>.modal-content-scroll-outside::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.modal-container-scroll-inside>.modal-content-scroll-inside::-webkit-scrollbar-thumb,.modal-container-scroll-outside>.modal-content-scroll-outside::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01)}.modal-container-scroll-inside>.modal-content-scroll-inside::-webkit-scrollbar-thumb:hover,.modal-container-scroll-outside>.modal-content-scroll-outside::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.modal-container-scroll-inside .modal-content-scroll-inside,.modal-container-scroll-outside .modal-content-scroll-outside{scrollbar-color:var(--color-primary01) transparent}@media only screen and (min-width: 768px){.modal-background{position:fixed;top:0;left:0;overflow:hidden;width:100vw;height:100vh;background-color:var(--gray900);opacity:0.7}.modal-background.modal-background-scroll-outside{position:sticky}.modal-container-scroll-inside{position:fixed;top:calc(var(--space-unit) * 6);left:50%;overflow:hidden;width:auto;min-width:calc(var(--space-unit) * 40);height:auto;min-height:calc(var(--space-unit) * 40);max-height:calc(100vh - calc(var(--space-unit) * 6 * 2));border-radius:var(--border-radius);transform:translateX(-50%)}.modal-container-scroll-outside{position:absolute;top:calc(var(--space-unit) * 6);left:50%;display:block;overflow:initial;width:auto;min-width:calc(var(--space-unit) * 40);height:auto;min-height:calc(var(--space-unit) * 40);max-height:calc(100vh - calc(var(--space-unit) * 6 * 2));transform:translateX(-50%)}.modal-container>.modal-content-scroll-outside{overflow:initial}.modal-container-scroll-outside>header,.modal-container-scroll-inside>header{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius)}.modal-container-scroll-outside::after{display:block;height:calc(var(--space-unit) * 6);content:" "}.modal-dialog{position:fixed;top:0;left:0;height:auto;overflow-x:hidden;overflow-y:auto}.modal-content-scroll-outside{border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}.modal-dialog::-webkit-scrollbar{display:none}}@media only screen and (min-width: 1152px){.modal-container>header{padding-top:calc(var(--space-unit) * 1.5);padding-bottom:calc(var(--space-unit) * 1.5)}.modal-container>header h1{font-size:var(--font-size-6);font-weight:var(--font-sb);letter-spacing:0;line-height:1.333}.modal-container>header .subtitle{font-size:var(--font-size-4);font-weight:var(--font-rg);letter-spacing:0;line-height:1.5}.modal-container>header h1+.subtitle{margin-top:0}}`,w=':is(button, input, select, textarea, [contenteditable=""], [contenteditable="true"], a[href], [tabindex], summary):not([disabled], [disabled=""], [tabindex="-1"], [aria-hidden="true"], [hidden])',F=class extends T{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.modalClose=m(this,"modalClose",7),this.modalHeaderActive=m(this,"modalHeaderActive",7),this.modalBackgroundClick=m(this,"modalBackgroundClick",7),this.modalid=void 0,this.modaltitle=void 0,this.modalsubtitle=void 0,this.closeButtonLabel="chiudi modale",this.alertdialog=!1,this.closable=!0,this.scrollInside=!0}emitModalClose(){this.closable&&this.modalClose.emit({modalid:this.modalid})}emitModalHeaderActive(){this.modalHeaderActive.emit({modalid:this.modalid})}emitBackgroundClick(){this.closable&&this.modalBackgroundClick.emit({modalid:this.modalid})}componentDidLoad(){typeof window.HTMLDialogElement!="function"?(this.dialog.localName||Object.defineProperty(this.dialog,"localName",{value:"dialog"}),n.registerDialog(this.dialog),this.dialog.setAttribute("open","true")):this.open()}async open(){var e;(e=this.dialog)===null||e===void 0||e.showModal()}async close(){var e;this.closable&&((e=this.dialog)===null||e===void 0||e.close())}get focusableElements(){return[...Array.from(this.host.shadowRoot.querySelectorAll(w)),...Array.from(this.host.querySelectorAll(w))].filter(e=>getComputedStyle(e).display!=="none")}handleKeyDown(e){if(e.code===b.ESC&&!this.closable&&e.preventDefault(),e.code!==b.TAB)return;const t=this.focusableElements,o=this.host.shadowRoot.activeElement,i=this.host.ownerDocument.activeElement,a=t[0],r=t[t.length-1];e.shiftKey&&(o==a||i==a)?(e.preventDefault(),r.focus()):!e.shiftKey&&(o==r||i==r)&&(e.preventDefault(),a.focus())}closeButtonSlot(){if(this.closable)return l("slot",{name:"modalCloseButton"},l("button",{"aria-label":this.closeButtonLabel,onClick:()=>this.close()},l("z-icon",{name:"multiply-circle-filled"})))}handleEscape(e){this.closable||e.preventDefault()}render(){return l("dialog",{key:"2df6de3359bcbd8fee7b2cf585856e743000aae3",class:{"modal-dialog":!this.scrollInside},"aria-labelledby":"modal-title","aria-describedby":"modal-content",role:this.alertdialog?"alertdialog":void 0,ref:e=>this.dialog=e,onClose:()=>this.emitModalClose(),onCancel:e=>this.handleEscape(e)},l("div",{key:"cf84d465497e4cede154e1df6fd11c3c6fa3284b",class:{"modal-container":!0,"modal-container-scroll-inside":this.scrollInside,"modal-container-scroll-outside":!this.scrollInside},id:this.modalid},l("header",{key:"423d0aaf6c3e1e4cc22916fff1cba20a09c5a756",onClick:this.emitModalHeaderActive.bind(this)},l("div",{key:"6caf90bce1e5a227dd0931f86df91b2c47c81721"},this.modaltitle&&l("h1",{key:"04e1dbe3bfc2c5b509134b8b196a5ace769b8d89",id:"modal-title"},this.modaltitle),this.closeButtonSlot()),this.modalsubtitle&&l("div",{key:"50971153f80e90e618cffff1461086f01bf05dd0",class:"subtitle",id:"modal-subtitle"},this.modalsubtitle)),l("div",{key:"0aaf7d014f065b926872a6fad9f7841c7090190f",class:{"modal-content-scroll-inside":this.scrollInside,"modal-content-scroll-outside":!this.scrollInside},id:"modal-content"},l("slot",{key:"62d1fd1f2775b3693f8ead12eea9478d4d474d8d",name:"modalContent"}))),l("div",{key:"824ea6cdb4545923457c96573766b2cda5dc710a",class:{"modal-background":!0,"modal-background-scroll-outside":!this.scrollInside},"data-action":"modalBackground","data-modal":this.modalid,onClick:()=>{this.emitBackgroundClick(),this.close()}}))}get host(){return this}static get style(){return P}};A(F,[1,"z-modal",{modalid:[1],modaltitle:[1],modalsubtitle:[1],closeButtonLabel:[1,"close-button-label"],alertdialog:[4],closable:[4],scrollInside:[4,"scroll-inside"],open:[64],close:[64]},[[0,"keydown","handleKeyDown"]]]);const k={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZModal",tagName:"z-modal",customElement:!0,members:[{kind:"field",name:"modalid",type:"string",description:"unique id"},{kind:"field",name:"modaltitle",type:"string",description:"title text (optional)"},{kind:"field",name:"modalsubtitle",type:"string",description:"subtitle (optional)"},{kind:"field",name:"closeButtonLabel",type:"string",description:"aria-label for close button (optional)",default:'"chiudi modale"'},{kind:"field",name:"alertdialog",type:"boolean",description:'add role "alertdialog" to dialog (optional, default is false)',default:"false"},{kind:"field",name:"closable",type:"boolean",description:"if true, the modal is closable (optional, default is true)",default:"true"},{kind:"field",name:"scrollInside",type:"boolean",description:"if true, the modal can scroll inside, if false the viewport can scroll",default:"true"}],events:[{kind:"event",name:"modalClose",description:"emitted on close button click, returns modalid"},{kind:"event",name:"modalHeaderActive",description:"emitted on modal header click, returns modalid"},{kind:"event",name:"modalBackgroundClick",description:"emitted on background click, returns modalid"}],cssProperties:[{name:"--z-modal-content-padding",description:"set a default padding for the modal content slot to 16px"}],slots:[{name:"modalCloseButton",description:"accept custom close button"},{name:"modalContent",description:"set the content of the modal"}]}],exports:[{kind:"js",name:"ZModal",declaration:{name:"ZModal",module:"src/components/z-modal/index.tsx"}},{kind:"custom-element-definition",name:"z-modal",declaration:{name:"ZModal",module:"src/components/z-modal/index.tsx"}}]}]};S({...g()||{},...k,modules:[...(g()||{}).modules||[],...k.modules]});