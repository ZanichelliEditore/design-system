import"./index-BEj-2O7q.js";import{s as c,g as r}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d,H as h,c as m,h as e,a as u}from"./index-8h8udRzn.js";import{j as i}from"./index-CcuDdGyi.js";import{m as p}from"./breakpoints-C5kxgyOu.js";import{H as n}from"./hammer-BXna0XTc.js";const g=":host{display:inline-block;width:100vw;min-width:200px;--percentuale:0}:host(.slide-in-left){animation:slideinleft 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-in-right){animation:slideinright 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-in-down){animation:slideindown 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-in-up){animation:slideinup 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-out-left){animation:slideoutleft 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-out-right){animation:slideoutright 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-out-down){animation:slideoutdown 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-out-up){animation:slideoutup 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}@keyframes slideinleft{0%{transform:translateX(100%)}100%{transform:translateX(0)}}@keyframes slideinright{0%{transform:translateX(-100%)}100%{transform:translateX(0)}}@keyframes slideinup{0%{opacity:0;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}@keyframes slideindown{0%{opacity:0;transform:translateY(-100%)}100%{opacity:1;transform:translateY(0)}}@keyframes slideoutleft{0%{opacity:calc(100% - var(--percentuale));transform:translateX(var(--percentuale))}100%{opacity:0;transform:translateX(-100%)}}@keyframes slideoutright{0%{opacity:calc(100% - var(--percentuale));transform:translateX(var(--percentuale))}100%{opacity:0;transform:translateX(100%)}}@keyframes slideoutup{0%{opacity:1;transform:translateY(var(--percentuale))}100%{opacity:0;transform:translateY(-100%)}}@keyframes slideoutdown{0%{opacity:1;transform:translateY(var(--percentuale))}100%{opacity:0;transform:translateY(100%)}}:host>#external-container{display:flex;min-height:52px;box-sizing:border-box;align-items:center;justify-content:space-between;padding:calc(var(--space-unit) * 1) calc(var(--space-unit) * 2);border-radius:4px;box-shadow:var(--shadow-3);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-rg);letter-spacing:0.16px}:host>#external-container.mobile-wrapped>#icon{align-self:flex-start}:host>#external-container.several-lines-padding{padding:calc(var(--space-unit) * 2)}:host>#external-container>#flex-container{display:flex;width:100%;flex-wrap:wrap;align-items:center;justify-content:space-between}:host>#external-container #text{margin-right:calc(var(--space-unit) * 2);color:var(--color-white);letter-spacing:0.16px;line-height:20px;text-align:left}:host>#external-container #text>.title{margin-right:4px;font-weight:600}:host>#external-container.mobile-wrapped #button ::slotted(z-button){margin-top:calc(var(--space-unit) * 2)}:host>#external-container #icon{margin-left:calc(var(--space-unit) * 2);cursor:pointer;fill:var(--color-white)}:host>#external-container.dark{background:var(--gray800)}:host>#external-container.light{background:var(--color-background)}:host>#external-container.light #icon,:host>#external-container.warning #text,:host>#external-container.warning #icon{fill:var(--color-primary01-icon)}:host>#external-container.light #text,:host>#external-container.warning #text{color:var(--gray800)}:host>#external-container.accent{background:var(--color-primary01)}:host>#external-container.error{background:var(--color-error-default)}:host>#external-container.success{background:var(--color-success-default)}:host>#external-container.warning{background:var(--color-warning-default)}@media only screen and (min-width: 768px){:host{width:unset;max-width:50vw}:host>#external-container>#flex-container{flex-wrap:nowrap}:host>#external-container #text{width:100%}}@media only screen and (min-width: 1366px){:host{width:unset;max-width:33vw}}",f=class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.toastClose=m(this,"toastClose",7),this.isCloseEventCalled=!1,this.heading=void 0,this.message=void 0,this.closebutton=void 0,this.autoclose=void 0,this.pauseonfocusloss=!0,this.type=void 0,this.isdraggable=!0,this.draggablepercentage=80,this.transition=void 0,this.percentage=void 0}watchPropIsdraggable(t){t?this.sliderManager.get("pan").set({enable:!0}):this.sliderManager.get("pan").set({enable:!1})}watchPropAutoclose(t){clearTimeout(this.timeoutHandle),this.startClosingTimeout(t)}watchPropPauseonfocusloss(t){this.autoclose&&(t?document.addEventListener("visibilitychange",this.visibilityChangeEventHandler):document.removeEventListener("visibilitychange",this.visibilityChangeEventHandler))}emitToastClose(t){this.timeoutHandle=null,this.elapsedTime=null,this.hostElement.classList.add(t),this.toastClose.emit()}componentWillLoad(){this.isMobile=window.innerWidth<=p,this.validateAutoclose(),this.percentage=0}componentDidLoad(){this.isTextLong=this.detectWrap()||this.toastText.offsetHeight>20,this.startTime=Date.now(),this.autoclose&&this.pauseonfocusloss&&document.addEventListener("visibilitychange",this.visibilityChangeEventHandler),this.isdraggable&&this.handleSlideOutDragAnimation()}visibilityChangeEventHandler(){document.visibilityState==="hidden"?this.timeoutHandle&&this.onBlur():this.elapsedTime&&this.onFocus()}validateAutoclose(){!this.autoclose&&!this.closebutton&&console.error("At least one between autoclose and closebutton must be present")}mapSlideOutClass(){switch(this.transition){case i.SLIDE_IN_DOWN:return i.SLIDE_OUT_UP;case i.SLIDE_IN_UP:return i.SLIDE_OUT_DOWN;case i.SLIDE_IN_LEFT:return i.SLIDE_OUT_RIGHT;case i.SLIDE_IN_RIGHT:return i.SLIDE_OUT_LEFT}}calculateDraggedPercentage(t){const a=this.hostElement.getBoundingClientRect();return Math.round(100*t.deltaX/a.width)}handleSlideOutDragAnimation(){this.sliderManager=new n(this.hostElement),this.sliderManager.get("pan").set({direction:n.DIRECTION_HORIZONTAL}),this.sliderManager.on("pan",t=>{this.percentage=this.calculateDraggedPercentage(t),this.hostElement.style.transition="none",this.hostElement.classList.remove(this.transition);const a={translate:`translateX(${this.percentage}%)`,translateBack:"translateX(0)"};this.hostElement.style.opacity=`${100-Math.abs(this.percentage)}%`,(t.eventType===n.DIRECTION_LEFT||t.eventType===n.DIRECTION_RIGHT)&&(this.hostElement.style.transform=a.translate,Math.abs(this.percentage)>this.draggablepercentage&&!this.isCloseEventCalled&&(this.isCloseEventCalled=!0,this.emitToastClose(t.direction===n.DIRECTION_LEFT?"slide-out-left":"slide-out-right"))),t.isFinal&&Math.abs(this.percentage)<this.draggablepercentage&&(this.hostElement.style.transform=a.translateBack,this.hostElement.style.transition="all 1s",this.hostElement.style.opacity="100%",this.percentage=0)})}onFocus(){let t=this.autoclose;this.elapsedTime&&(t=this.autoclose-this.elapsedTime),t>0&&this.startClosingTimeout(t)}onBlur(){this.elapsedTime=Date.now()-this.startTime,clearTimeout(this.timeoutHandle)}startClosingTimeout(t){this.timeoutHandle=window.setTimeout(()=>this.emitToastClose(this.mapSlideOutClass()),t)}detectWrap(){const t=this.container.offsetWidth,a=this.container.children;let o=0;for(let s=0;s<a.length;s++)o+=a[s].offsetWidth;return o>t}renderText(){return e("div",{id:"text",ref:t=>this.toastText=t},e("span",{class:"title"},this.heading),e("span",{class:"message"},this.message))}renderButton(){return e("div",{id:"button"},e("slot",{name:"button"}))}renderCloseIcon(){if(this.closebutton)return e("div",{id:"icon"},e("z-icon",{tabIndex:0,name:"multiply-circled",width:15,height:15,onClick:()=>this.emitToastClose(this.mapSlideOutClass()),onKeyPress:t=>{(t.keyCode==32||t.keyCode==13)&&(t.preventDefault(),this.emitToastClose(this.mapSlideOutClass()))}}))}renderContainer(){return e("div",{tabIndex:0,id:"external-container",class:{[this.type]:!!this.type,"several-lines-padding":this.isTextLong},ref:t=>this.container=t},this.renderText(),this.renderButton(),this.renderCloseIcon())}renderMobileContainer(){return e("div",{id:"external-container",class:{[this.type]:!!this.type,"several-lines-padding":this.isTextLong,"mobile-wrapped":this.isTextLong}},e("div",{id:"flex-container",ref:t=>this.container=t},this.renderText(),this.renderButton()),this.renderCloseIcon())}render(){return e(u,{key:"5bc7afbe682ed216258b7f9cd998b03177637f4f",style:{"--percentuale":`${this.percentage}%`},class:this.transition?this.transition:i.SLIDE_IN_DOWN,onAnimationEnd:t=>{this.autoclose&&t.animationName.includes("slidein")&&this.startClosingTimeout(this.autoclose),t.animationName.includes("slideout")&&this.hostElement.parentNode.removeChild(this.hostElement)}},this.isMobile?this.renderMobileContainer():this.renderContainer())}get hostElement(){return this}static get watchers(){return{isdraggable:["watchPropIsdraggable"],autoclose:["watchPropAutoclose"],pauseonfocusloss:["watchPropPauseonfocusloss"]}}static get style(){return g}};d(f,[1,"z-toast-notification",{heading:[1],message:[1],closebutton:[4],autoclose:[2],pauseonfocusloss:[4],type:[8],isdraggable:[4],draggablepercentage:[2],transition:[8],percentage:[32]},void 0,{isdraggable:["watchPropIsdraggable"],autoclose:["watchPropAutoclose"],pauseonfocusloss:["watchPropPauseonfocusloss"]}]);const l={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZToastNotification",tagName:"z-toast-notification",customElement:!0,members:[{kind:"field",name:"heading",type:"string",description:"toast notification's title"},{kind:"field",name:"message",type:"string",description:"toast notification's message"},{kind:"field",name:"closebutton",type:"boolean",description:"toggles closing button rendering"},{kind:"field",name:"autoclose",type:"number",description:"toast notification closing timeout (ms)"},{kind:"field",name:"pauseonfocusloss",type:"boolean",description:"toast notification autoclose can be paused",default:"true"},{kind:"field",name:"type",type:"any",description:"toast notification type: dark, light, accent, error, success, warning"},{kind:"field",name:"isdraggable",type:"boolean",description:"toast notification can be draggable",default:"true"},{kind:"field",name:"draggablepercentage",type:"number",description:"toast notification draggable percentage",default:"80"},{kind:"field",name:"transition",type:"any",description:"toast notification animation type: slide-in-left, slide-in-right, slide-in-down, slide-in-up"}],events:[{kind:"event",name:"toastClose",description:"notification close event"}]}],exports:[{kind:"js",name:"ZToastNotification",declaration:{name:"ZToastNotification",module:"src/components/z-toast-notification/index.tsx"}},{kind:"custom-element-definition",name:"z-toast-notification",declaration:{name:"ZToastNotification",module:"src/components/z-toast-notification/index.tsx"}}]}]};c({...r()||{},...l,modules:[...(r()||{}).modules||[],...l.modules]});