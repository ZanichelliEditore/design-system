import{s as B,g as _}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as A,H as z,c as H,h as I}from"./index-8h8udRzn.js";import{P as r,K as L}from"./index-CcuDdGyi.js";const F=':host{--z-popover-theme--surface:var(--color-surface01);--z-popover-theme--text:var(--color-default-text);--z-popover-padding:0;--z-popover-shadow-filter:drop-shadow(0 1px 2px var(--shadow-color-base));position:relative;display:none;min-width:calc(var(--space-unit) * 8);min-height:calc(var(--space-unit) * 4);align-items:center;justify-content:center;padding:var(--z-popover-padding);background:var(--z-popover-theme--surface);border-radius:var(--border-radius-small);color:var(--z-popover-theme--text);fill:currentcolor;filter:var(--z-popover-shadow-filter);font-family:var(--font-family-sans);text-align:center}:host([open][current-position]),:host([open="true"][current-position]){display:flex}:host([center][current-position="top"]),:host([center][current-position="bottom"]){transform:translateX(-50%)}:host([center][current-position="right"]),:host([center][current-position="left"]){transform:translateY(-50%)}:host([current-position^="top"]){margin:0 0 var(--space-unit)}:host([current-position^="bottom"]){margin:var(--space-unit) 0 0}:host([current-position^="left"]){margin:0 var(--space-unit) 0 0}:host([current-position^="right"]){margin:0 0 0 var(--space-unit)}:host([current-position])::before{--arrow-size:6px;--arrow-edge-offset:calc(100% - var(--space-unit) - (var(--arrow-size) / 2));--arrow-center-x-offset:calc(50% - (var(--arrow-size) / 2));--arrow-center-y-offset:calc(100% - (var(--arrow-size) / 2));position:absolute;display:block;width:var(--arrow-size);height:var(--arrow-size);background:var(--z-popover-theme--surface);content:"";transform:rotate(45deg)}:host([show-arrow="false"])::before,:host(:not([show-arrow]))::before{display:none}:host([current-position^="top"])::before{top:var(--arrow-center-y-offset)}:host([current-position^="bottom"])::before{bottom:var(--arrow-center-y-offset)}:host([current-position="top"])::before,:host([current-position="bottom"])::before{right:var(--arrow-edge-offset)}:host([current-position="right"])::before,:host([current-position="left"])::before{bottom:var(--arrow-edge-offset)}:host([current-position="right"])::before{right:var(--arrow-center-y-offset)}:host([current-position="left"])::before{left:var(--arrow-center-y-offset)}:host([current-position="top_right"])::before,:host([current-position="bottom_right"])::before{right:var(--arrow-edge-offset)}:host([current-position="top_left"])::before,:host([current-position="bottom_left"])::before{left:var(--arrow-edge-offset)}:host([current-position="right_top"])::before,:host([current-position="left_top"])::before{top:var(--arrow-edge-offset)}:host([current-position="right_top"])::before,:host([current-position="right_bottom"])::before{right:var(--arrow-center-y-offset)}:host([current-position="left_top"])::before,:host([current-position="left_bottom"])::before{left:var(--arrow-center-y-offset)}:host([current-position="right_bottom"])::before,:host([current-position="left_bottom"])::before{bottom:var(--arrow-edge-offset)}:host([center][current-position="top"])::before,:host([center][current-position="bottom"])::before{right:auto;left:var(--arrow-center-x-offset)}:host([center][current-position="right"])::before,:host([center][current-position="left"])::before{top:var(--arrow-center-x-offset);bottom:auto}::slotted(*){overflow:auto;flex:1 auto}',M=document.documentElement;function E(e){return e.parentNode.host?e.parentNode.host:e.parentNode}function G(e){let i=E(e);for(;i&&i!==M;){const{overflow:n,overflowX:f,overflowY:c}=window.getComputedStyle(i);if(n==="hidden"||c==="hidden"||f==="hidden"||i.scrollHeight>i.clientHeight&&n!=="visible"&&c!=="visible"||i.scrollWidth>i.clientWidth&&n!=="visible"&&f!=="visible")return i;i=E(i)}return M}function R(e,i){const n=e.getBoundingClientRect(),f=n.width,c=n.height;let o=0,d=0,s=e;for(;s&&s!=i;){if(d+=s.offsetLeft,s===document.body?o+=s.getBoundingClientRect().top+window.scrollY:o+=s.offsetTop,window.DOMMatrix){const h=window.getComputedStyle(s),u=h.transform||h.webkitTransform,p=new DOMMatrix(u);p&&(d+=p.m41,s!==document.body&&(o+=p.m42))}if(!s.offsetParent)break;s=s.offsetParent}let g,b;s===document.body?(g=window.innerWidth,b=window.innerHeight):(g=s.offsetWidth,b=s.offsetHeight);const O=g-d-n.width,$=b-o-n.height;return{top:o,right:O,bottom:$,left:d,width:f,height:c}}const N=class extends z{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.positionChange=H(this,"positionChange",7),this.openChange=H(this,"openChange",7),this.position=r.AUTO,this.open=!1,this.bindTo=void 0,this.showArrow=!1,this.center=!1,this.closable=!0,this.currentPosition=void 0}closePopoverWithKeyboard(e){this.closable&&e.key===L.ESC&&(this.open=!1)}handleOutsideClick(e){if(!(!this.closable||!this.open)&&!e.composedPath().includes(this.host)){const i=e.target;(this.bindTo instanceof z?this.bindTo.contains(i):i.closest(this.bindTo))&&e.stopPropagation(),this.open=!1,this.positionChange.emit({position:this.currentPosition})}}validatePosition(e){e&&!Object.values(r).includes(e)&&(this.position=r.AUTO),this.currentPosition=this.position,this.positionChange.emit({position:this.currentPosition})}onOpen(){if(cancelAnimationFrame(this.animationFrameRequestId),this.open){const e=()=>{this.open&&(this.setPosition(),this.animationFrameRequestId=requestAnimationFrame(e))};e()}else this.host.hasAttribute("current-position")&&(this.host.removeAttribute("current-position"),this.currentPosition=void 0);this.openChange.emit({open:this.open})}disconnectedCallback(){cancelAnimationFrame(this.animationFrameRequestId)}setPosition(){let e;if(typeof this.bindTo=="string"?e=this.host.ownerDocument.querySelector(this.bindTo):this.bindTo?e=this.bindTo:e=this.host.parentElement,!e)return;const i=G(e),n=i.getBoundingClientRect(),f=this.host.offsetParent,c=f?R(f,i):{top:0,right:0,bottom:0,left:0},o=R(e,i),d=o.top-i.scrollTop,s=n.height-(o.top+o.height)+i.scrollTop,g=o.left-i.scrollLeft,b=n.width-(o.left+o.width)+i.scrollLeft,O=Math.max(0,n.top+n.height-window.innerHeight),$=Math.max(0,n.left+n.width-window.innerWidth),h=Math.min(d,d+n.top),u=Math.min(s,s-O),p=Math.min(g,g+n.left),w=Math.min(b,b-$),k=h+u+o.height,C=p+w+o.width;let a=this.currentPosition;const m=[];this.position===r.AUTO&&(p/C>.6?m.push(r.LEFT):p/C<.4&&m.push(r.RIGHT),h/k>.9?m.unshift(r.TOP):h/k>.6?m.push(r.TOP):h/k<.1?m.unshift(r.BOTTOM):m.push(r.BOTTOM),a=m.join("_"));const t=this.host.style;t.position="absolute";const x=o.top-c.top,T=o.right-c.right,P=o.bottom-c.bottom,y=o.left-c.left,l=this.center?.5:0,v=this.center?.5:0;a===r.TOP||a===r.TOP_RIGHT?(t.top="auto",t.right="auto",t.bottom=`${P+o.height}px`,t.left=`${y+o.width*l}px`,t.maxHeight=`${h}px`,a===r.TOP_RIGHT&&(t.maxWidth=`${w+o.width*v}px`)):a===r.TOP_LEFT?(t.top="auto",t.right=`${T+o.width*l}px`,t.bottom=`${P+o.height}px`,t.left="auto",t.maxWidth=`${p}px`,t.maxHeight=`${h}px`):a===r.BOTTOM||a===r.BOTTOM_RIGHT?(t.top=`${x+o.height}px`,t.right="auto",t.bottom="auto",t.left=`${y+o.width*l}px`,t.maxHeight=`${u}px`,a===r.BOTTOM_RIGHT&&(t.maxWidth=`${w+o.width*v}px`)):a===r.BOTTOM_LEFT?(t.top=`${x+o.height}px`,t.right=`${T+o.width*l}px`,t.bottom="auto",t.left="auto",t.maxWidth=`${p}px`,t.maxHeight=`${u}px`):a===r.RIGHT||a===r.RIGHT_BOTTOM?(t.top=`${x+o.height*l}px`,t.right="auto",t.bottom="auto",t.left=`${y+o.width}px`,t.maxWidth=`${w}px`,t.maxHeight=`${u+o.height*v}px`):a===r.RIGHT_TOP?(t.top="auto",t.right="auto",t.bottom=`${P+o.height*l}px`,t.left=`${y+o.width}px`,t.maxWidth=`${w}px`,t.maxHeight=`${h+o.height*v}px`):a===r.LEFT||a===r.LEFT_BOTTOM?(t.top=`${x+o.height*l}px`,t.right=`${T+o.width}px`,t.bottom="auto",t.left="auto",t.maxWidth=`${p}px`,t.maxHeight=`${u+o.height*v}px`):a===r.LEFT_TOP&&(t.top="auto",t.right=`${T+o.width}px`,t.bottom=`${P+o.height*l}px`,t.left="auto",t.maxWidth=`${p}px`,t.maxHeight=`${h+o.height*v}px`),this.currentPosition=a||this.position,this.host.setAttribute("current-position",this.currentPosition)}componentWillLoad(){this.validatePosition(this.position),this.onOpen()}render(){return I("slot",{key:"41483346de64f7fcb1560313d2ba3af2823e246d"})}get host(){return this}static get watchers(){return{position:["validatePosition"],open:["onOpen"]}}static get style(){return F}};A(N,[1,"z-popover",{position:[520],open:[1540],bindTo:[8,"bind-to"],showArrow:[516,"show-arrow"],center:[516],closable:[4],currentPosition:[32]},[[8,"keyup","closePopoverWithKeyboard"],[18,"click","handleOutsideClick"]],{position:["validatePosition"],open:["onOpen"]}]);const W={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZPopover",tagName:"z-popover",customElement:!0,members:[{kind:"field",name:"position",type:"any",description:"Popover position.",default:"PopoverPosition.AUTO"},{kind:"field",name:"open",type:"boolean",description:"The open state of the popover.",default:"false"},{kind:"field",name:"bindTo",type:"any",description:`The selector or the element bound with the popover.
If string css selector is provided make sure to use a valid selector.`},{kind:"field",name:"showArrow",type:"boolean",description:"Whether to show popover's arrow.",default:"false"},{kind:"field",name:"center",type:"boolean",description:'Whether to center the popup on the main side (according to "position").',default:"false"},{kind:"field",name:"closable",type:"boolean",description:"If true, the popover can be closed by clicking outside of it or pressing the escape key.\nOtherwise, it will be closed only programmatically (by setting `open` to `false`).",default:"true"}],events:[{kind:"event",name:"positionChange",description:"Position change event."},{kind:"event",name:"openChange",description:"Open change event."}],cssProperties:[{name:"--z-popover-theme--surface",description:"background color of the popover."},{name:"--z-popover-theme--text",description:"foreground color of the popover."},{name:"--z-popover-padding",description:"padding of the popover."},{name:"--z-popover-shadow-filter",description:"drop-shadow filter of the popover. Defaults to `drop-shadow(0 1px 2px var(--shadow-color-base))`."}]}],exports:[{kind:"js",name:"ZPopover",declaration:{name:"ZPopover",module:"src/components/z-popover/index.tsx"}},{kind:"custom-element-definition",name:"z-popover",declaration:{name:"ZPopover",module:"src/components/z-popover/index.tsx"}}]}]};B({..._()||{},...W,modules:[...(_()||{}).modules||[],...W.modules]});