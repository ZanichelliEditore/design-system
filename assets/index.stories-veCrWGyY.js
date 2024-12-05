import{x as l}from"./lit-element-DGXdXVoE.js";import{I as b,C as i}from"./index-JHKFBkCx.js";import"./index-DjmSoT86.js";import"./index-SGHLPHNW.js";import"./index-BpZkdoDR.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";import"./index-6DVFO8oc.js";import"./utils-CCzSlYCN.js";import"./breakpoints-p3CVLX0Q.js";import"./index-C87dib6e.js";import"./index-CA3-KGCF.js";import"./index-BIo1aSLD.js";import"./index-C8ELqjGG.js";import"./index-BW87BpV5.js";const C={title:"ZSelect",component:"z-select",argTypes:{status:{control:{type:"select",labels:{null:"-"}},options:[null,...Object.values(b)]},size:{control:{type:"inline-radio"},options:Object.values(i)}},args:{items:[{id:"item_1",name:"item_1",selected:!1},{id:"item_2",name:"item_2",selected:!0},{id:"item_3",name:"item_3",selected:!1,disabled:!0},{id:"item_4",name:"item_4",selected:!1}],label:"this is the label",ariaLabel:"",placeholder:"select placeholder",status:null,message:"helper text",size:i.BIG,disabled:!1,readonly:!1,htmlid:"",htmltitle:"",autocomplete:!1,noresultslabel:"Nessun risultato",hasGroupItems:!1,resetItem:"",isfixed:!1}},t={render:e=>l`
    <z-select
      items=${JSON.stringify(e.items)}
      label=${e.label}
      aria-label=${e.ariaLabel}
      placeholder=${e.placeholder}
      name=${e.name}
      status=${e.status}
      message=${e.message}
      autocomplete=${e.autocomplete}
      noresultslabel=${e.noresultslabel}
      disabled=${e.disabled}
      readonly=${e.readonly}
      htmlid=${e.htmlid}
      htmltitle=${e.htmltitle}
      reset-item=${e.resetItem}
      isfixed=${e.isfixed}
      size=${e.size}
    ></z-select>
  `},s={args:{hasGroupItems:!0,items:[{id:"item_1",name:"item_1",selected:!1,category:"Gruppo 1"},{id:"item_2",name:"item_2",selected:!1,category:"Gruppo 1"},{id:"item_3",name:"item_3",selected:!1,category:"Gruppo 2",disabled:!0},{id:"item_4",name:"item_4",selected:!1,category:"Gruppo 2"},{id:"item_5",name:"item_5",selected:!1,category:"Gruppo 3",disabled:!0},{id:"item_6",name:"item_6",selected:!1,category:"Gruppo 3"}]},render:e=>l`
    <z-select
      items=${JSON.stringify(e.items)}
      label=${e.label}
      aria-label=${e.ariaLabel}
      placeholder=${e.placeholder}
      name=${e.name}
      status=${e.status}
      message=${e.message}
      autocomplete=${e.autocomplete}
      noresultslabel=${e.noresultslabel}
      disabled=${e.disabled}
      readonly=${e.readonly}
      htmlid=${e.htmlid}
      htmltitle=${e.htmltitle}
      .hasGroupItems=${e.hasGroupItems}
      reset-item=${e.resetItem}
      isfixed=${e.isfixed}
      size=${e.size}
    ></z-select>
  `},a={args:{hasGroupItems:!0,items:[{id:"item_1",name:"item_1",selected:!1,icon:"teacher"},{id:"item_2",name:"item_2",selected:!1,icon:"teacher"},{id:"item_3",name:"item_3",selected:!1,disabled:!0,icon:"teacher"}]},render:e=>l`
    <z-select
      items=${JSON.stringify(e.items)}
      label=${e.label}
      aria-label=${e.ariaLabel}
      placeholder=${e.placeholder}
      name=${e.name}
      status=${e.status}
      message=${e.message}
      autocomplete=${e.autocomplete}
      noresultslabel=${e.noresultslabel}
      disabled=${e.disabled}
      readonly=${e.readonly}
      htmlid=${e.htmlid}
      htmltitle=${e.htmltitle}
      reset-item=${e.resetItem}
      isfixed=${e.isfixed}
      size=${e.size}
    ></z-select>
  `};var n,r,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => html\`
    <z-select
      items=\${JSON.stringify(args.items)}
      label=\${args.label}
      aria-label=\${args.ariaLabel}
      placeholder=\${args.placeholder}
      name=\${args.name}
      status=\${args.status}
      message=\${args.message}
      autocomplete=\${args.autocomplete}
      noresultslabel=\${args.noresultslabel}
      disabled=\${args.disabled}
      readonly=\${args.readonly}
      htmlid=\${args.htmlid}
      htmltitle=\${args.htmltitle}
      reset-item=\${args.resetItem}
      isfixed=\${args.isfixed}
      size=\${args.size}
    ></z-select>
  \`
} satisfies Story`,...(m=(r=t.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};var o,d,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    hasGroupItems: true,
    items: [{
      id: "item_1",
      name: "item_1",
      selected: false,
      category: "Gruppo 1"
    }, {
      id: "item_2",
      name: "item_2",
      selected: false,
      category: "Gruppo 1"
    }, {
      id: "item_3",
      name: "item_3",
      selected: false,
      category: "Gruppo 2",
      disabled: true
    }, {
      id: "item_4",
      name: "item_4",
      selected: false,
      category: "Gruppo 2"
    }, {
      id: "item_5",
      name: "item_5",
      selected: false,
      category: "Gruppo 3",
      disabled: true
    }, {
      id: "item_6",
      name: "item_6",
      selected: false,
      category: "Gruppo 3"
    }] as SelectItem[]
  },
  render: args => html\`
    <z-select
      items=\${JSON.stringify(args.items)}
      label=\${args.label}
      aria-label=\${args.ariaLabel}
      placeholder=\${args.placeholder}
      name=\${args.name}
      status=\${args.status}
      message=\${args.message}
      autocomplete=\${args.autocomplete}
      noresultslabel=\${args.noresultslabel}
      disabled=\${args.disabled}
      readonly=\${args.readonly}
      htmlid=\${args.htmlid}
      htmltitle=\${args.htmltitle}
      .hasGroupItems=\${args.hasGroupItems}
      reset-item=\${args.resetItem}
      isfixed=\${args.isfixed}
      size=\${args.size}
    ></z-select>
  \`
} satisfies Story`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,$,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    hasGroupItems: true,
    items: [{
      id: "item_1",
      name: "item_1",
      selected: false,
      icon: "teacher"
    }, {
      id: "item_2",
      name: "item_2",
      selected: false,
      icon: "teacher"
    }, {
      id: "item_3",
      name: "item_3",
      selected: false,
      disabled: true,
      icon: "teacher"
    }] as SelectItem[]
  },
  render: args => html\`
    <z-select
      items=\${JSON.stringify(args.items)}
      label=\${args.label}
      aria-label=\${args.ariaLabel}
      placeholder=\${args.placeholder}
      name=\${args.name}
      status=\${args.status}
      message=\${args.message}
      autocomplete=\${args.autocomplete}
      noresultslabel=\${args.noresultslabel}
      disabled=\${args.disabled}
      readonly=\${args.readonly}
      htmlid=\${args.htmlid}
      htmltitle=\${args.htmltitle}
      reset-item=\${args.resetItem}
      isfixed=\${args.isfixed}
      size=\${args.size}
    ></z-select>
  \`
} satisfies Story`,...(u=($=a.parameters)==null?void 0:$.docs)==null?void 0:u.source}}};const D=["Default","Groups","ZSelectWithIcons"];export{t as Default,s as Groups,a as ZSelectWithIcons,D as __namedExportsOrder,C as default};
