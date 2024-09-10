import{x as c}from"./lit-element-DGXdXVoE.js";import"./index-Cklm_X9i.js";import{s as p,g as s}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as u,H as h,h as a}from"./index-BJyMe-bF.js";import"./index-CAsmEsw1.js";import"./utils-ElT8mkfg.js";import"./index-C_NTAvuu.js";import"./breakpoints-C5kxgyOu.js";const z="ul{padding:0;margin:0}",y=class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inputrawdata=void 0,this.list=void 0}componentWillLoad(){this.inputrawdata&&this.parseinputrawdata(this.inputrawdata)}parseinputrawdata(t){this.list=[...JSON.parse(t)]}oninputrawdataChange(t){this.parseinputrawdata(t)}render(){const t=this.list?this.list.length-1:-1;return a("ul",{key:"7fda6b787fe0fd29d22810a6072fa36af4d0764a"},this.list&&this.list.map((i,d)=>a("z-myz-list-item",{listitemid:i.listitemid,text:i.text,link:i.link,linktarget:i.linktarget,icon:i.icon,underlined:t!=d})))}static get watchers(){return{inputrawdata:["oninputrawdataChange"]}}static get style(){return z}};u(y,[1,"z-myz-list",{inputrawdata:[1],list:[1040]},void 0,{inputrawdata:["oninputrawdataChange"]}]);const n={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZMyzList",tagName:"z-myz-list",customElement:!0,members:[{kind:"field",name:"inputrawdata",type:"string",description:"json stringified list data (mutable, optional)"},{kind:"field",name:"list",type:"unknown",description:"list item data (mutable, optional)"}],events:[]}],exports:[{kind:"js",name:"ZMyzList",declaration:{name:"ZMyzList",module:"src/snowflakes/myz/list/z-myz-list/index.tsx"}},{kind:"custom-element-definition",name:"z-myz-list",declaration:{name:"ZMyzList",module:"src/snowflakes/myz/list/z-myz-list/index.tsx"}}]}]};p({...s()||{},...n,modules:[...(s()||{}).modules||[],...n.modules]});const E={title:"Snowflakes/List/ZMyzList",component:"z-myz-list"},e={render:m=>c`<z-myz-list
      inputrawdata='[
        {"text":"list element 1","link":"http://www.zanichelli.it","listitemid":"id1","icon":"checkbox-checked"},
        {"text":"list element 2","link":"http://my.zanichelli.it","listitemid":"id2","icon":"checkbox"},
        {"text":""}
      ]'
    ></z-myz-list>`};var l,r,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => html\`<z-myz-list
      inputrawdata='[
        {"text":"list element 1","link":"http://www.zanichelli.it","listitemid":"id1","icon":"checkbox-checked"},
        {"text":"list element 2","link":"http://my.zanichelli.it","listitemid":"id2","icon":"checkbox"},
        {"text":""}
      ]'
    ></z-myz-list>\`
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const _=["ZMyzList"];export{e as ZMyzList,_ as __namedExportsOrder,E as default};
