import{x as m}from"./lit-element-DGXdXVoE.js";import"./index-BpZkdoDR.js";import{s as p,g as r}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as b,H as h,c as f,h as e}from"./index-BZ0rSFNp.js";import{B as v}from"./breakpoints-p3CVLX0Q.js";import"./index-DrFu-skq.js";const g="button{display:flex;max-width:100%;height:36px;align-items:center;padding:0 var(--space-unit);border:var(--border-size-medium) solid var(--color-primary01);background-color:var(--color-surface01);border-radius:var(--border-radius);color:var(--color-primary01);cursor:pointer;fill:var(--color-primary01);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);outline:none}button::-moz-focus-inner{border:0}button:hover{border-color:var(--color-hover-primary);color:var(--color-hover-primary);fill:var(--color-hover-primary)}button:focus{border-color:var(--color-primary01);box-shadow:var(--shadow-focus-primary);color:var(--color-primary01);fill:var(--color-primary01)}button:active{border-color:var(--color-pressed-primary);box-shadow:var(--shadow-2);color:var(--color-pressed-primary);fill:var(--color-pressed-primary)}button.selected{border-color:var(--color-active-primary);background-color:var(--color-active-primary);color:var(--color-text-inverse);fill:var(--color-text-inverse)}button>span.ellipsis{overflow:hidden;padding:0;margin:0;text-overflow:ellipsis;white-space:nowrap}button>span.counter{margin-right:calc(var(--space-unit) * 2);margin-left:calc(var(--space-unit) / 2)}button>span.sort{margin-right:calc(var(--space-unit) / 2);white-space:nowrap}button>span{margin-right:calc(var(--space-unit) / 2)}@media (min-width: 768px){button{max-width:325px}}@media (min-width: 1152px){button{max-width:490px}}",y=class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.buttonSortClick=f(this,"buttonSortClick",7),this.buttonid=void 0,this.label=void 0,this.desclabel=void 0,this.counter=void 0,this.sortlabelasc="A-Z",this.sortlabeldesc="Z-A",this.isselected=!1,this.sortasc=!0,this.allowTooltip=!1}emitButtonSortClick(){this.isselected?this.sortasc=!this.sortasc:this.isselected=!0,this.buttonSortClick.emit({buttonid:this.buttonid,sortAsc:this.sortasc})}componentDidLoad(){this.elementHasEllipsis()&&window.innerWidth>v.TABLET&&(this.allowTooltip=!0)}setButtonTitle(){return this.allowTooltip?`${this.sortasc?this.label:this.desclabel}`:""}elementHasEllipsis(){return this.ellipsis.offsetWidth<this.ellipsis.scrollWidth}render(){return e("button",{key:"affcee923e69ab4dcff92f975a566563eea97958",title:this.setButtonTitle(),id:this.buttonid,class:{selected:this.isselected},onClick:()=>this.emitButtonSortClick()},e("span",{key:"a686b5f063c9faa80af53793065f12565300096b",ref:t=>this.ellipsis=t,class:"ellipsis"},!this.sortasc&&this.desclabel?this.desclabel:this.label),e("span",{key:"ebad3104c18c1eb15d00d59b52d66679fa6ae6e8",class:"counter"},this.counter&&` (${this.counter})`),e("span",{key:"6ceaae0d560172ce70845a6bfc4456a92d461dd4",class:"sort"},this.sortasc?this.sortlabelasc:this.sortlabeldesc),e("z-icon",{key:"d9ec01ded25079f7fafe0ff19b5e8e31cde3fbe9",name:"caret-up-down",width:16,height:16}))}static get style(){return g}};b(y,[1,"z-button-sort",{buttonid:[1],label:[1],desclabel:[1],counter:[2],sortlabelasc:[1],sortlabeldesc:[1],isselected:[1028],sortasc:[1028],allowTooltip:[32]}]);const i={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZButtonSort",tagName:"z-button-sort",customElement:!0,members:[{kind:"field",name:"buttonid",type:"string",description:"id, should be unique"},{kind:"field",name:"label",type:"string",description:"label content (ascending)"},{kind:"field",name:"desclabel",type:"string",description:"label content (descending)"},{kind:"field",name:"counter",type:"number",description:"occurrences counter (optional)"},{kind:"field",name:"sortlabelasc",type:"string",description:"sort label content (ascending) (optional)",default:'"A-Z"'},{kind:"field",name:"sortlabeldesc",type:"string",description:"sort label content (descending) (optional)",default:'"Z-A"'},{kind:"field",name:"isselected",type:"boolean",description:"selected flag (optional)",default:"false"},{kind:"field",name:"sortasc",type:"boolean",description:"sortable flag (optional)",default:"true"}],events:[{kind:"event",name:"buttonSortClick",description:"sorting direction click event, returns `buttonid` and `sortAsc`"}]}],exports:[{kind:"js",name:"ZButtonSort",declaration:{name:"ZButtonSort",module:"src/components/z-button-sort/index.tsx"}},{kind:"custom-element-definition",name:"z-button-sort",declaration:{name:"ZButtonSort",module:"src/components/z-button-sort/index.tsx"}}]}]};p({...r()||{},...i,modules:[...(r()||{}).modules||[],...i.modules]});const z={title:"ZButtonSort",args:{label:"sort",counter:3,desclabel:"label DESC",sortlabelasc:"1-9",sortlabeldesc:"9-1",isselected:!0,sortasc:!0},render:t=>m`<z-button-sort
      label="${t.label}"
      counter="${t.counter}"
      desclabel="${t.desclabel}"
      sortlabelasc="${t.sortlabelasc}"
      sortlabeldesc="${t.sortlabeldesc}"
      isselected="${t.isselected}"
      sortasc="${t.sortasc}"
    ></z-button-sort>`},o={},s={args:{label:"Testo molto lungo lungo lungo lunghissimo lunghissimo lunghissimo ancora di più"}};var a,l,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var c,d,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Testo molto lungo lungo lungo lunghissimo lunghissimo lunghissimo ancora di più"
  }
} satisfies Story`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const T=["Default","Ellipsis"];export{o as Default,s as Ellipsis,T as __namedExportsOrder,z as default};