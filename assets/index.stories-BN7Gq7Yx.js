import{n as e}from"./chunk-DnJy8xQt.js";import{Q as t,X as n,nt as r,rt as i,tt as a}from"./iframe-DCi19jo_.js";import{n as o}from"./index3-DVurE89l.js";import{n as s}from"./index26-hJ-A_m14.js";var c,l,u=e((()=>{r(),o(),s(),c=i(class extends t{constructor(e){super(),!1!==e&&this.__registerHost(),this.__attachShadow()}componentWillLoad(){this.inputrawdata&&this.parseinputrawdata(this.inputrawdata)}parseinputrawdata(e){this.list=[...JSON.parse(e)]}oninputrawdataChange(e){this.parseinputrawdata(e)}render(){let e=this.list?this.list.length-1:-1;return a(`ul`,{key:`8864b8d3a72f6feb8dd470c865bcbf20b922f31c`},this.list&&this.list.map(((t,n)=>a(`z-myz-list-item`,{listitemid:t.listitemid,text:t.text,link:t.link,linktarget:t.linktarget,icon:t.icon,underlined:e!=n}))))}static get watchers(){return{inputrawdata:[{oninputrawdataChange:0}]}}static get style(){return`ul{padding:0;margin:0}`}},[1,`z-myz-list`,{inputrawdata:[1],list:[1040]},void 0,{inputrawdata:[{oninputrawdataChange:0}]}]),l=c})),d,f,p;e((()=>{n(),u(),d={title:`Snowflakes/List/ZMyzList`,component:l},f={render:()=>a(`z-myz-list`,{inputrawdata:`[
        {"text":"list element 1","link":"http://www.zanichelli.it","listitemid":"id1","icon":"checkbox-checked"},
        {"text":"list element 2","link":"http://my.zanichelli.it","listitemid":"id2","icon":"checkbox"},
        {"text":""}
      ]`})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <z-myz-list inputrawdata='[
        {"text":"list element 1","link":"http://www.zanichelli.it","listitemid":"id1","icon":"checkbox-checked"},
        {"text":"list element 2","link":"http://my.zanichelli.it","listitemid":"id2","icon":"checkbox"},
        {"text":""}
      ]'></z-myz-list>
} satisfies StoryObj<ZMyzList>`,...f.parameters?.docs?.source}}},p=[`Default`]}))();export{f as Default,p as __namedExportsOrder,d as default};