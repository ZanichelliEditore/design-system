import{r as t,h as o,H as s,g as e}from"./p-98268a57.js";import{v as i}from"./p-d79f69f2.js";const n=class{constructor(o){t(this,o),this.newestontop=!0,this.slotChangeHandler=()=>{const t=Array.from(this.hostElement.children).filter((t=>!this.notificationArray.includes(t)));t&&t.forEach((t=>{this.notificationArray.push(t);const o=t;t.remove(),this.hostElement.prepend(o)}))}}watchPropNewestontop(t){this.hostElement.append(...this.notificationArray.reverse()),t?this.hostElement.shadowRoot.addEventListener("slotchange",this.slotChangeHandler):this.hostElement.shadowRoot.removeEventListener("slotchange",this.slotChangeHandler)}componentWillLoad(){this.newestontop&&this.handleNewestOnTop()}handleNewestOnTop(){this.notificationArray=Array.from(this.hostElement.children),this.hostElement.append(...this.notificationArray.reverse()),this.hostElement.shadowRoot.addEventListener("slotchange",this.slotChangeHandler)}render(){return o(s,{class:this.position?this.position:i.topRight},o("slot",{name:"toasts"}))}get hostElement(){return e(this)}static get watchers(){return{newestontop:["watchPropNewestontop"]}}};n.style=":host{font-family:var(--font-family-sans);font-weight:var(--font-rg);position:fixed;display:flex;flex-direction:column;flex-wrap:nowrap;z-index:10000;margin-bottom:calc(var(--space-unit) * 2);margin-top:calc(var(--space-unit) * 2)}::slotted(z-toast-notification){width:100vw}::slotted(:not(:last-child)){margin-bottom:calc(var(--space-unit) * 1)}:host(.bottom-centre),:host(.bottom-right),:host(.bottom-left){justify-content:flex-end;align-items:flex-end;bottom:0}:host(.top-left),:host(.top-right),:host(.top-centre){justify-content:flex-start;align-items:flex-start;top:0}@media only screen and (min-width: 768px){:host{margin:calc(var(--space-unit) * 3)}:host(.top-centre){justify-content:flex-start;align-items:center;top:0;left:50%;transform:translateX(-50%)}:host(.top-left){justify-content:flex-start;align-items:flex-start;top:0;left:0}:host(.top-right){justify-content:flex-start;align-items:flex-end;top:0;right:0}:host(.bottom-centre){justify-content:flex-end;align-items:center;bottom:0;left:50%;transform:translateX(-50%)}:host(.bottom-right){justify-content:flex-end;align-items:flex-end;bottom:0;right:0}:host(.bottom-left){justify-content:flex-end;align-items:flex-start;bottom:0;left:0}::slotted(z-toast-notification){width:50vw}}@media only screen and (min-width: 1366px){:host{margin:calc(var(--space-unit) * 4)}::slotted(z-toast-notification){width:33vw}}";export{n as z_toast_notification_list}