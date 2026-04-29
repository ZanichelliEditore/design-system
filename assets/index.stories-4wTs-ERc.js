import{r as e}from"./lit-CgIPLKVa.js";import{i as t,t as n}from"./chunk-L4EGOTBX-KlzQXQPc.js";import{a as r,n as i,o as a}from"./client-06BWhMJQ.js";import"./z-myz-list-item-DCgpJ7Uw.js";var o=()=>`ul{padding:0;margin:0}`;r(class extends i{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow()}componentWillLoad(){this.inputrawdata&&this.parseinputrawdata(this.inputrawdata)}parseinputrawdata(e){this.list=[...JSON.parse(e)]}oninputrawdataChange(e){this.parseinputrawdata(e)}render(){let e=this.list?this.list.length-1:-1;return a(`ul`,{key:`f2a9055a09757ed6d6d2f273ab5d3f123eda6445`},this.list&&this.list.map((t,n)=>a(`z-myz-list-item`,{listitemid:t.listitemid,text:t.text,link:t.link,linktarget:t.linktarget,icon:t.icon,underlined:e!=n})))}static get watchers(){return{inputrawdata:[{oninputrawdataChange:0}]}}static get style(){return o()}},[1,`z-myz-list`,{inputrawdata:[1],list:[1040]},void 0,{inputrawdata:[{oninputrawdataChange:0}]}]);var s={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZMyzList`,tagName:`z-myz-list`,customElement:!0,members:[{kind:`field`,name:`inputrawdata`,type:`string`,description:`json stringified list data (mutable, optional)`},{kind:`field`,name:`list`,type:`unknown`,description:`list item data (mutable, optional)`}],events:[]}],exports:[{kind:`js`,name:`ZMyzList`,declaration:{name:`ZMyzList`,module:`src/snowflakes/myz/list/z-myz-list/index.tsx`}},{kind:`custom-element-definition`,name:`z-myz-list`,declaration:{name:`ZMyzList`,module:`src/snowflakes/myz/list/z-myz-list/index.tsx`}}]}]};t({...n()||{},...s,modules:[...(n()||{}).modules||[],...s.modules]});var c={title:`Snowflakes/List/ZMyzList`,component:`z-myz-list`},l={render:t=>e`<z-myz-list
      inputrawdata='[
        {"text":"list element 1","link":"http://www.zanichelli.it","listitemid":"id1","icon":"checkbox-checked"},
        {"text":"list element 2","link":"http://my.zanichelli.it","listitemid":"id2","icon":"checkbox"},
        {"text":""}
      ]'
    ></z-myz-list>`};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => html\`<z-myz-list
      inputrawdata='[
        {"text":"list element 1","link":"http://www.zanichelli.it","listitemid":"id1","icon":"checkbox-checked"},
        {"text":"list element 2","link":"http://my.zanichelli.it","listitemid":"id2","icon":"checkbox"},
        {"text":""}
      ]'
    ></z-myz-list>\`
}`,...l.parameters?.docs?.source}}};var u=[`ZMyzList`];export{l as ZMyzList,u as __namedExportsOrder,c as default};