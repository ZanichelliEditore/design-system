import"./index-BpZkdoDR.js";import{s as o,g as s}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as r,H as c,c as n,h as e}from"./index-BZ0rSFNp.js";import{a as l}from"./utils-CvvJewYG.js";const d=":host li{all:unset;all:reset;width:100%;line-height:14px;list-style-type:none}:host li>span{display:flex;padding:calc(var(--space-unit) * 2) 0;color:var(--color-default-text);fill:var(--color-default-icon);font-family:var(--font-family-sans);font-size:16px;font-weight:var(--font-rg);letter-spacing:0.23px;line-height:14px}:host(.small) li>span{padding:calc(var(--space-unit) * 1.5) 0;font-size:var(--font-size-2)}:host(.x-small) li>span{padding:var(--space-unit) 0;font-size:var(--font-size-2)}:host(.small) li>span>z-icon,:host(.x-small) li>span>z-icon{--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:calc(var(--space-unit) * 0.5);padding:0}:host li>span.border{border-bottom:2px solid var(--color-surface03)}:host li span:hover,a:hover{color:var(--color-primary01);fill:var(--color-primary01)}a,a:visited,a:active{color:inherit;fill:inherit;text-decoration:none}:host li span z-icon{width:calc(var(--space-unit) * 2);height:calc(var(--space-unit) * 2);padding:0 calc(var(--space-unit) * 1.5) 0 0;background-repeat:no-repeat;background-size:contain;color:var(--color-primary01);fill:var(--color-primary01)}",m=class extends c{emitZListItemLinkClick(t,i){this.zListItemLinkClick.emit({e:t,linkId:i})}emitZListItemClick(t,i){this.zListItemClick.emit({e:t,listitemid:i})}constructor(){super(),this.__registerHost(),this.__attachShadow(),this.zListItemLinkClick=n(this,"zListItemLinkClick",7),this.zListItemClick=n(this,"zListItemClick",7),this.text=void 0,this.link=void 0,this.linktarget="_self",this.icon=void 0,this.listitemid=void 0,this.action=void 0,this.underlined=!0,this.emitZListItemLinkClick=this.emitZListItemLinkClick.bind(this),this.emitZListItemClick=this.emitZListItemClick.bind(this)}render(){const t=this.listitemid?`link_${this.listitemid}`:"";return e("li",{key:"c9f95747129ab805e3c6a956959bdae198a808b9",role:"button",id:this.listitemid,"data-action":this.action,onClick:i=>this.emitZListItemClick(i,this.listitemid),onKeyPress:i=>l(i,this.emitZListItemClick,this.listitemid)},e("span",{key:"db0b1bfb6b2b6210d2cb4dbd34043760cf218bd2",class:this.underlined&&"border"},this.icon&&e("z-icon",{key:"366ece048b9ca161fb2ddf6f41646b624c38ee66",name:this.icon}),this.link?e("a",{href:this.link?this.link:null,target:this.linktarget,id:t,onClick:i=>this.emitZListItemLinkClick(i,t),onKeyPress:i=>l(i,this.emitZListItemLinkClick,t),role:this.link?"link":"button",tabindex:"0"},this.text):e("span",{innerHTML:this.text}),e("slot",{key:"3619249ff3847da4794fd3d92af1c2cb8818ce83"})))}static get style(){return d}};r(m,[1,"z-myz-list-item",{text:[1],link:[1],linktarget:[1],icon:[1],listitemid:[1],action:[1],underlined:[4]}]);const a={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZMyzListItem",tagName:"z-myz-list-item",customElement:!0,members:[{kind:"field",name:"text",type:"string",description:"content text"},{kind:"field",name:"link",type:"string",description:"link url (optional)"},{kind:"field",name:"linktarget",type:"string",description:"link target (optional)",default:'"_self"'},{kind:"field",name:"icon",type:"string",description:"icon name (optional)"},{kind:"field",name:"listitemid",type:"string",description:"id (optional)"},{kind:"field",name:"action",type:"string",description:"data-action attribute (optional)"},{kind:"field",name:"underlined",type:"boolean",description:"underlined style flag",default:"true"}],events:[{kind:"event",name:"zListItemLinkClick",description:"emitted on list item link click, returns linkId"},{kind:"event",name:"zListItemClick",description:"emitted on list item click, returns listitemid"}]}],exports:[{kind:"js",name:"ZMyzListItem",declaration:{name:"ZMyzListItem",module:"src/snowflakes/myz/list/z-myz-list-item/index.tsx"}},{kind:"custom-element-definition",name:"z-myz-list-item",declaration:{name:"ZMyzListItem",module:"src/snowflakes/myz/list/z-myz-list-item/index.tsx"}}]}]};o({...s()||{},...a,modules:[...(s()||{}).modules||[],...a.modules]});