import{r as t,c as i,h as e,H as a,g as s}from"./p-98268a57.js";import{u as n}from"./p-d79f69f2.js";import{m as r}from"./p-d69e14fb.js";import{h as o}from"./p-e43e61ac.js";import"./p-112455b1.js";const l=class{constructor(e){t(this,e),this.toastClose=i(this,"toastClose",7),this.pauseonfocusloss=!0,this.isdraggable=!0,this.draggablepercentage=80,this.isCloseEventCalled=!1,this.visibilityChangeEventHandler=()=>{"hidden"===document.visibilityState?this.timeoutHandle&&this.onBlur():this.elapsedTime&&this.onFocus()}}watchPropIsdraggable(t){t?this.sliderManager.get("pan").set({enable:!0}):this.sliderManager.get("pan").set({enable:!1})}watchPropAutoclose(t){clearTimeout(this.timeoutHandle),this.startClosingTimeout(t)}watchPropPauseonfocusloss(t){this.autoclose&&(t?document.addEventListener("visibilitychange",this.visibilityChangeEventHandler):document.removeEventListener("visibilitychange",this.visibilityChangeEventHandler))}emitToastClose(t){this.timeoutHandle=null,this.elapsedTime=null,this.hostElement.classList.add(t),this.toastClose.emit()}componentWillLoad(){this.isMobile=window.innerWidth<=r,this.validateAutoclose()}componentDidLoad(){this.isTextLong=this.detectWrap()||this.toastText.offsetHeight>20,this.startTime=Date.now(),this.autoclose&&this.pauseonfocusloss&&document.addEventListener("visibilitychange",this.visibilityChangeEventHandler),this.isdraggable&&this.handleSlideOutDragAnimation(),this.percentage=0}validateAutoclose(){this.autoclose||this.closebutton||console.error("At least one between autoclose and closebutton must be present")}mapSlideOutClass(){switch(this.transition){case n.slideInDown:return n.slideOutUp;case n.slideInUp:return n.slideOutDown;case n.slideInLeft:return n.slideOutRight;case n.slideInRight:return n.slideOutLeft}}calculateDraggedPercentage(t){const i=this.hostElement.getBoundingClientRect();return Math.round(100*t.deltaX/i.width)}handleSlideOutDragAnimation(){this.sliderManager=new o(this.hostElement),this.sliderManager.get("pan").set({direction:o.DIRECTION_HORIZONTAL}),this.sliderManager.on("pan",(t=>{this.percentage=this.calculateDraggedPercentage(t),this.hostElement.style.transition="none",this.hostElement.classList.remove(this.transition);const i={translate:"translateX( "+this.percentage+"% )",translateBack:"translateX(0)"};this.hostElement.style.opacity=100-Math.abs(this.percentage)+"%",t.eventType!==o.DIRECTION_LEFT&&t.eventType!==o.DIRECTION_RIGHT||(this.hostElement.style.transform=i.translate,Math.abs(this.percentage)>this.draggablepercentage&&!this.isCloseEventCalled&&(this.isCloseEventCalled=!0,this.emitToastClose(t.direction===o.DIRECTION_LEFT?"slide-out-left":"slide-out-right"))),t.isFinal&&Math.abs(this.percentage)<this.draggablepercentage&&(this.hostElement.style.transform=i.translateBack,this.hostElement.style.transition="all 1s",this.hostElement.style.opacity="100%",this.percentage=0)}))}onFocus(){let t;t=this.autoclose,this.elapsedTime&&(t=this.autoclose-this.elapsedTime),t>0&&this.startClosingTimeout(t)}onBlur(){this.elapsedTime=Date.now()-this.startTime,clearTimeout(this.timeoutHandle)}startClosingTimeout(t){this.timeoutHandle=setTimeout((()=>this.emitToastClose(this.mapSlideOutClass())),t)}detectWrap(){const t=this.container.offsetWidth,i=this.container.children;let e=0;for(let t=0;t<i.length;t++)e+=i[t].offsetWidth;return e>t}renderText(){return e("div",{id:"text",ref:t=>this.toastText=t},e("span",{class:"title"},this.heading),e("span",{class:"message"},this.message))}renderButton(){return e("div",{id:"button"},e("slot",{name:"button"}))}renderCloseIcon(){return this.closebutton&&e("div",{id:"icon"},e("z-icon",{tabIndex:0,name:"multiply-circled",width:15,height:15,onClick:()=>this.emitToastClose(this.mapSlideOutClass()),onKeyPress:t=>{32!=t.keyCode&&13!=t.keyCode||(t.preventDefault(),this.emitToastClose(this.mapSlideOutClass()))}}))}renderContainer(){return e("div",{tabIndex:0,id:"external-container",class:{[this.type]:!!this.type,"several-lines-padding":this.isTextLong},ref:t=>this.container=t},this.renderText(),this.renderButton(),this.renderCloseIcon())}renderMobileContainer(){return e("div",{id:"external-container",class:{[this.type]:!!this.type,"several-lines-padding":this.isTextLong,"mobile-wrapped":this.isTextLong}},e("div",{id:"flex-container",ref:t=>this.container=t},this.renderText(),this.renderButton()),this.renderCloseIcon())}render(){return e(a,{style:{"--percentuale":`${this.percentage}%`},class:this.transition?this.transition:n.slideInDown,onAnimationEnd:t=>{this.autoclose&&t.animationName.includes("slidein")&&this.startClosingTimeout(this.autoclose),t.animationName.includes("slideout")&&this.hostElement.parentNode.removeChild(this.hostElement)}},this.isMobile?this.renderMobileContainer():this.renderContainer())}get hostElement(){return s(this)}static get watchers(){return{isdraggable:["watchPropIsdraggable"],autoclose:["watchPropAutoclose"],pauseonfocusloss:["watchPropPauseonfocusloss"]}}};l.style=":host{display:inline-block;min-width:200px;width:100vw}:host(.slide-in-left){animation:slideinleft 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-in-right){animation:slideinright 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-in-down){animation:slideindown 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-in-up){animation:slideinup 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-out-left){animation:slideoutleft 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-out-right){animation:slideoutright 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-out-down){animation:slideoutdown 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}:host(.slide-out-up){animation:slideoutup 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation-fill-mode:forwards}@keyframes slideinleft{0%{transform:translateX(100%)}100%{transform:translateX(0)}}@keyframes slideinright{0%{transform:translateX(-100%)}100%{transform:translateX(0)}}@keyframes slideinup{0%{transform:translateY(100%);opacity:0}100%{transform:translateY(0);opacity:100%}}@keyframes slideindown{0%{transform:translateY(-100%);opacity:0}100%{transform:translateY(0);opacity:100%}}@keyframes slideoutleft{0%{transform:translateX(var(--percentuale));opacity:calc(100-var(--percentuale))}100%{transform:translateX(-100%);opacity:0%}}@keyframes slideoutright{0%{transform:translateX(var(--percentuale));opacity:calc(100-var(--percentuale))}100%{transform:translateX(100%);opacity:0%}}@keyframes slideoutup{0%{transform:translateY(var(--percentuale));opacity:100%}100%{transform:translateY(-100%);opacity:0}}@keyframes slideoutdown{0%{transform:translateY(var(--percentuale));opacity:100%}100%{transform:translateY(100%);opacity:0}}:host>#external-container{font-family:var(--font-family-sans);font-weight:var(--font-rg);border-radius:4px;font-size:14px;letter-spacing:0.16px;box-sizing:border-box;min-height:52px;padding:calc(var(--space-unit) * 1) calc(var(--space-unit) * 2);display:flex;align-items:center;justify-content:space-between;box-shadow:var(--shadow-3)}:host>#external-container.mobile-wrapped>#icon{align-self:flex-start}:host>#external-container.several-lines-padding{padding:calc(var(--space-unit) * 2)}:host>#external-container>#flex-container{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;width:100%}:host>#external-container #text{color:var(--color-white);line-height:20px;margin-right:calc(var(--space-unit) * 2);letter-spacing:0.16px;text-align:left}:host>#external-container #text>.title{margin-right:4px;font-weight:600}:host>#external-container.mobile-wrapped #button ::slotted(z-button){margin-top:calc(var(--space-unit) * 2)}:host>#external-container #icon{cursor:pointer;fill:var(--color-white);margin-left:calc(var(--space-unit) * 2)}:host>#external-container.dark{background:var(--gray800)}:host>#external-container.light{background:var(--color-background)}:host>#external-container.light #icon,:host>#external-container.warning #text,:host>#external-container.warning #icon{fill:var(--color-icon01)}:host>#external-container.light #text,:host>#external-container.warning #text{color:var(--grey800)}:host>#external-container.accent{background:var(--color-primary01)}:host>#external-container.error{background:var(--color-error-default)}:host>#external-container.success{background:var(--color-success-default)}:host>#external-container.warning{background:var(--color-warning-default)}@media only screen and (min-width: 768px){:host{width:unset;max-width:50vw}:host>#external-container>#flex-container{flex-wrap:nowrap}:host>#external-container #text{width:100%}}@media only screen and (min-width: 1366px){:host{width:unset;max-width:33vw}}";export{l as z_toast_notification}