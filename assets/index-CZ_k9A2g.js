import"./index-BpZkdoDR.js";import{s as d,g as a}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as h,H as m,c as i,h as e,a as u}from"./index-BZ0rSFNp.js";const f=':host,::slotted(*),*{box-sizing:border-box}:host{position:relative;display:inline-flex;flex-direction:column;--z-menu-label-color:var(--color-default-text)}::slotted(a){text-decoration:none}::slotted(*){color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}.menu-label{padding:0;border:0;margin:0;background:transparent;border-radius:0;color:inherit;outline:none;text-align:left}button.menu-label{cursor:pointer}.menu-label:focus-within{z-index:1;padding-right:calc(var(--space-unit) * 0.5);padding-left:calc(var(--space-unit) * 0.5);margin-right:calc(var(--space-unit) * -0.5);margin-left:calc(var(--space-unit) * -0.5);box-shadow:var(--shadow-focus-primary)}.menu-label .menu-label-content{position:relative;display:flex;align-items:center}:host(:is([active],[open])) .menu-label-content,.menu-label:focus-within .menu-label-content{font-weight:var(--font-bd)}:host(:is([active],[open])) .menu-label-content ::slotted(*),.menu-label:focus-within .menu-label-content ::slotted(*){letter-spacing:normal}:host .menu-label .menu-label-content ::slotted(*:not([slot]):focus:focus-visible){box-shadow:none !important}:host(:is([active],[open],[vertical-context])) .menu-label .menu-label-content::after,.menu-label .menu-label-content:hover::after,.menu-label:focus-within .menu-label-content::after{position:absolute;bottom:0;left:0;width:100%;content:"";pointer-events:none}:host([vertical-context]) .menu-label-content::after{height:var(--border-size-small);background-color:var(--color-surface03)}:host(:is([active],[open])) .menu-label .menu-label-content::after,.menu-label .menu-label-content:hover::after,.menu-label:focus-within .menu-label-content::after{height:var(--border-size-large);background-color:var(--color-primary01)}::slotted([data-text])::after{height:0;content:attr(data-text);content:attr(data-text) / "";font-weight:var(--font-bd);letter-spacing:normal;pointer-events:none;user-select:none;visibility:hidden}@media speech{::slotted([data-text])::after{display:none}}::slotted([data-text]){display:inline-flex;flex-direction:column}.menu-label .menu-label-content ::slotted(*){display:inline-flex;width:100%;margin:0;appearance:none;color:var(--z-menu-label-color);font-family:var(--font-family-sans);font-size:var(--font-size-5);font-weight:inherit;letter-spacing:0.36px;line-height:1.2;outline:none}.menu-label .menu-label-content ::slotted(*),.menu-label .menu-label-content z-icon{padding:var(--space-unit) 0}.menu-label .menu-label-content z-icon{margin-left:calc(var(--space-unit) * 1.5);fill:currentcolor}.content{background:var(--color-surface01)}:host(:not([open])) .content{display:none}:host([floating]) .content{position:absolute;top:100%;left:0;width:375px;min-width:100%;max-width:100vw;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2);box-shadow:var(--shadow-2)}:host(:not([floating])) .content{width:100%}.header{display:flex;align-items:center;padding:var(--space-unit) 0 calc(var(--space-unit) * 2)}.header ::slotted(img[slot="header"]){width:calc(var(--space-unit) * 11.25);height:auto;object-fit:contain}.header ::slotted([slot="header"]:not(:first-child)){margin:auto 0;margin-left:calc(var(--space-unit) * 2.5);font-size:var(--font-size-3);font-weight:var(--font-sb);line-height:1.5}.items{display:flex;flex-direction:column;align-items:flex-start;background:inherit}.items>::slotted([slot="item"]){width:100%;margin:0;font-size:var(--font-size-3);line-height:1.25;outline:none}.items>::slotted([slot="item"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}.items>::slotted([slot="item"]:not(z-menu-section)){padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5);border-bottom:var(--border-size-small) solid var(--color-surface05)}.items>::slotted([slot="item"]:hover),.items>::slotted([slot="item"]:focus:focus-visible),.items>::slotted([slot="item"]:active){border-color:var(--color-primary01);font-weight:var(--font-bd)}',p=class extends m{toggle(){this.hasContent&&(this.open=!this.open,this.open?this.opened.emit():this.closed.emit())}handleClick(n){!this.floating||!this.open||this.hostElement.contains(n.target)||(this.reflow(),this.open=!1,this.closed.emit())}onOpenChanged(){this.open?this.reflow(!0):cancelAnimationFrame(this.raf)}constructor(){super(),this.__registerHost(),this.__attachShadow(),this.opened=i(this,"opened",7),this.closed=i(this,"closed",7),this.active=void 0,this.floating=!1,this.open=!1,this.verticalContext=!1,this.hasHeader=void 0,this.hasContent=void 0,this.toggle=this.toggle.bind(this),this.checkContent=this.checkContent.bind(this),this.onLabelSlotChange=this.onLabelSlotChange.bind(this),this.onItemsChange=this.onItemsChange.bind(this)}componentWillLoad(){this.checkContent()}onLabelSlotChange(n){const t=n.target.assignedElements()[0];t.dataset.text=t==null?void 0:t.textContent}reflow(n=!1){if(this.content){const{style:t}=this.content,{left:l}=this.hostElement.getBoundingClientRect(),o=getComputedStyle(this.content).width,r=o?parseFloat(o.replace("px","")):375,c=30;t.left=`${Math.min(window.innerWidth-l-r-c,0)}px`}n&&(this.raf=requestAnimationFrame(this.reflow.bind(this,n)))}checkContent(){this.hasHeader=!!this.hostElement.querySelectorAll("[slot=header]").length,this.hasContent=!!this.hostElement.querySelectorAll("[slot=item]").length||this.hasHeader}onItemsChange(){this.checkContent(),this.hostElement.querySelectorAll("[slot=item]").forEach(t=>{t.setAttribute("role","menuitem"),t.dataset.text=t.textContent})}renderMenuLabel(){return this.hasContent?e("button",{class:"menu-label","aria-expanded":this.open?"true":"false","aria-label":this.open?"Chiudi menù":"Apri menù",onClick:this.toggle},e("div",{class:"menu-label-content"},e("slot",{onSlotchange:this.onLabelSlotChange}),e("z-icon",{name:this.open?"chevron-up":"chevron-down"}))):e("div",{class:"menu-label"},e("div",{class:"menu-label-content"},e("slot",{onSlotchange:this.onLabelSlotChange})))}render(){return e(u,{key:"63dd0afe2071d5c4dd47ce602ce89bb18e1beeed"},this.renderMenuLabel(),this.hasContent&&e("div",{key:"57c1f7e18b749043e1c34e47bf8dee07038b4843",class:"content",ref:n=>this.content=n},this.hasHeader&&e("header",{key:"150d2dc8cc1bff6bf1483dd30c54626b94164795",class:"header"},e("slot",{key:"773a9601462ab75608360206f9f42e44b463b0d3",name:"header",onSlotchange:this.checkContent})),e("div",{key:"8cb4535f8b7ccaea16deb90c323fb1ccddca262e",class:"items",role:"menu"},e("slot",{key:"58d0e8746563d4fcfe5975ab2e20c18f6d2e70a9",name:"item",onSlotchange:this.onItemsChange}))))}get hostElement(){return this}static get watchers(){return{open:["onOpenChanged"]}}static get style(){return f}};h(p,[1,"z-menu-deprecated",{active:[516],floating:[516],open:[1540],verticalContext:[516,"vertical-context"],hasHeader:[32],hasContent:[32]},[[4,"click","handleClick"]],{open:["onOpenChanged"]}]);const s={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZMenuDeprecated",tagName:"z-menu-deprecated",customElement:!0,members:[{kind:"field",name:"active",type:"boolean",description:"Flag to set the active status of the menu."},{kind:"field",name:"floating",type:"boolean",description:`Flag to set the display mode of the list.
If true, the list will be absolutely positioned under the menu label,
stacked beneath it otherwise.`,default:"false"},{kind:"field",name:"open",type:"boolean",description:"The opening state of the menu.",default:"false"},{kind:"field",name:"verticalContext",type:"boolean",description:"Tells the component that it's placed in a vertical context with other `ZMenu`s (e.g. in the ZAppHeader's offcanvas).\nA small border is placed under it as a separator from other elements.",default:"false"}],events:[{kind:"event",name:"opened",description:"The menu has been opened."},{kind:"event",name:"closed",description:"The menu has been closed."}],cssProperties:[{name:"--z-menu-label-color",description:"Color of the label's text."}],slots:[{name:"-",description:"Menu label"},{name:"header",description:"Header to display as the first entry of the open menu."},{name:"item",description:"Single entry of the section. Can be slotted multiple times to insert items onto the menu. Use `z-menu-section` for submenus."}]}],exports:[{kind:"js",name:"ZMenuDeprecated",declaration:{name:"ZMenuDeprecated",module:"src/components/deprecated/z-menu-deprecated/index.tsx"}},{kind:"custom-element-definition",name:"z-menu-deprecated",declaration:{name:"ZMenuDeprecated",module:"src/components/deprecated/z-menu-deprecated/index.tsx"}}]}]};d({...a()||{},...s,modules:[...(a()||{}).modules||[],...s.modules]});