import{r as t,c as r,h as o}from"./p-98268a57.js";const i=class{constructor(o){t(this,o),this.toggleClick=r(this,"toggleClick",7),this.isdisabled=!1,this.opened=!1}emitToggleClick(){this.isdisabled||(this.opened=!this.opened,this.toggleClick.emit(this.opened))}retrieveButtonClass(){let t=this.opened&&"isopen";return this.avoidclick&&(t+=" avoid-clicks"),t}render(){return o("button",{tabindex:this.avoidclick?"-1":"0",class:this.retrieveButtonClass(),disabled:this.isdisabled,onClick:()=>this.emitToggleClick()},o("z-icon",{name:this.opened?"chevron-down":"chevron-up",width:16,height:16}),this.label)}};i.style="button{font-family:var(--dashboard-font);font-weight:var(--font-sb);height:36px;border:var(--border-size-medium) solid;border-color:transparent;border-radius:var(--border-radius);color:var(--myz-blue);fill:var(--myz-blue);background-color:var(--bg-white);box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.2);text-transform:uppercase;font-size:14px;outline:none;padding-left:0px;padding-right:calc(var(--space-unit) * 2);transition:all 200ms linear;cursor:pointer}button::-moz-focus-inner{border:0}button:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button:focus{border-color:var(--myz-blue);color:var(--myz-blue);fill:var(--myz-blue);box-shadow:0px 0px 2px 2px var(--accent-dark)}button:active{border-color:var(--myz-blue-light);color:var(--myz-blue-light);fill:var(--myz-blue-light);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4)}button:disabled{color:var(--text-grey-700);fill:var(--text-grey-700)}z-icon{display:inline-block;margin:0 var(--space-unit) 0 calc(var(--space-unit) * 2);transform:rotate(360deg);transition:all 200ms linear}button.isopen{top:-20px}button.avoid-clicks{pointer-events:none}";export{i as z_toggle_button}