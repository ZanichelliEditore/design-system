import{x as p}from"./lit-element-DGXdXVoE.js";import"./index-DWQ9dHDw.js";import"./index-DNByPIfU.js";import"./index-BEj-2O7q.js";import"./index-xgipIUMp.js";import"./index-BgXdBVh5.js";import{s as u,g as r}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as l,H as g,h as e}from"./index-8h8udRzn.js";import{q as o}from"./index-CcuDdGyi.js";import"./hammer-BXna0XTc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-B_2tKo6T.js";import"./breakpoints-C5kxgyOu.js";const k=`:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>z-pocket{width:100%}:host>z-pocket.closed{width:158px}:host>z-pocket>z-pocket-header{color:var(--color-primary01);fill:var(--color-primary01);font-size:12px;font-weight:var(--font-sb)}:host>z-pocket>z-pocket-header span.badge{display:inline-block;padding:0 calc(var(--space-unit) * 0.5);margin-left:var(--space-unit);background:var(--color-secondary02);border-radius:50%;color:var(--color-surface01)}:host>z-pocket>z-pocket-header>z-icon{margin-left:var(--space-unit)}:host>z-pocket>z-pocket-body>div.body{overflow:hidden;padding:var(--space-unit);margin:0 var(--space-unit)}:host>z-pocket.preview>z-pocket-body{position:relative}:host>z-pocket.preview>z-pocket-body>div.gradient{position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(rgb(255 0 0 / 0%), white)}:host>z-pocket.open>z-pocket-body>div.body{overflow:auto;max-height:calc(100vh - 166px);scrollbar-width:none}:host ::-webkit-scrollbar{width:0}@media only screen and (min-width: 768px){:host>z-pocket{width:768px;margin:0 calc((100% - 768px) / 2)}:host>z-pocket.closed{margin:0 calc((100% - 158px) / 2)}:host>z-pocket.open>z-pocket-body>div.body{max-height:326px}}@media only screen and (min-width: 1152px){:host>z-pocket.open>z-pocket-body>div.body{scrollbar-color:var(--color-primary01) var(--color-surface03);scrollbar-width:thin}:host ::-webkit-scrollbar{width:10px;background:linear-gradient(
      90deg,
      var(--color-surface01) 2px,
      var(--color-surface03) 4px,
      var(--color-surface01) 8px
    );border-radius:var(--border-radius)}:host ::-webkit-scrollbar-thumb{width:var(--space-unit);background-color:var(--color-primary01);border-radius:var(--border-radius)}}`,h=class extends g{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.pocketid=void 0,this.messages=void 0,this.status=o.PREVIEW}handlePocketToggle(s){s.detail.id===this.pocketid&&(this.status=s.detail.status)}renderHeader(){let s,i;switch(this.status){case o.PREVIEW:case o.CLOSED:s=e("span",null,"Messaggi ",e("span",{class:"badge"},this.messages)),i="chevron-up";break;case o.OPEN:s=e("span",null,"Riduci"),i="chevron-down";break}return e("z-pocket-header",{pocketid:this.pocketid},s,e("z-icon",{name:i,width:14,height:14}))}renderBody(){return e("z-pocket-body",{pocketid:this.pocketid},e("div",{class:"body"},e("slot",null)),e("div",{class:"gradient"}))}render(){return e("z-pocket",{key:"f8371e68f7175f3d24cdc08797f23caf5bcd5870",pocketid:this.pocketid,status:this.status,class:this.status},this.renderHeader(),this.renderBody())}static get style(){return k}};l(h,[1,"z-messages-pocket",{pocketid:[1],messages:[2],status:[1032]},[[16,"pocketToggle","handlePocketToggle"]]]);const c={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZMessagesPocket",tagName:"z-messages-pocket",customElement:!0,members:[{kind:"field",name:"pocketid",type:"string",description:"pocket id"},{kind:"field",name:"messages",type:"number",description:"number of messages"},{kind:"field",name:"status",type:"any",description:"pocket status",default:"PocketStatus.PREVIEW"}],events:[],slots:[{name:"-",description:"pocket body content"}]}],exports:[{kind:"js",name:"ZMessagesPocket",declaration:{name:"ZMessagesPocket",module:"src/snowflakes/myz/pocket/z-messages-pocket/index.tsx"}},{kind:"custom-element-definition",name:"z-messages-pocket",declaration:{name:"ZMessagesPocket",module:"src/snowflakes/myz/pocket/z-messages-pocket/index.tsx"}}]}]};u({...r()||{},...c,modules:[...(r()||{}).modules||[],...c.modules]});const L={title:"Snowflakes/Pocket/ZMessagesPocket",component:"z-messages-pocket",argTypes:{status:{control:{type:"select"},options:["preview","open","closed"]}},args:{pocketid:"my-pocket",messages:"3",status:"preview"}},a={render:t=>p`
    <z-messages-pocket
      pocketid="${t.pocketid}"
      messages="${t.messages}"
      status="${t.status}"
    >
      <z-pocket-message>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
        dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
      </z-pocket-message>
      <z-pocket-message>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
        dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
      </z-pocket-message>
      <z-pocket-message>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
        dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
      </z-pocket-message>
    </z-messages-pocket>
  `};var n,d,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => html\`
    <z-messages-pocket
      pocketid="\${args.pocketid}"
      messages="\${args.messages}"
      status="\${args.status}"
    >
      <z-pocket-message>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
        dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
      </z-pocket-message>
      <z-pocket-message>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
        dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
      </z-pocket-message>
      <z-pocket-message>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
        dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
      </z-pocket-message>
    </z-messages-pocket>
  \`
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const _=["ZMessagesPocket"];export{a as ZMessagesPocket,_ as __namedExportsOrder,L as default};
