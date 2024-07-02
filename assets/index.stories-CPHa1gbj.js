import{x as a}from"./lit-element-DGXdXVoE.js";import{I as b,C as i}from"./index-CcuDdGyi.js";import"./index-BP8UqO_N.js";import"./index-Cls8S0RH.js";import"./index-BEj-2O7q.js";import"./chunk-GKNNPQCW-BkHQSocK.js";import"./index-8h8udRzn.js";import"./index-C946l9CK.js";import"./utils-B_2tKo6T.js";import"./breakpoints-C5kxgyOu.js";import"./index-BcZOdRiS.js";import"./index-BKVmbJ3p.js";import"./index-D_pLbWT4.js";import"./index-ByhoUAf1.js";const Z={title:"ZSelect",component:"z-select",argTypes:{status:{control:{type:"select",labels:{null:"-"}},options:[null,...Object.values(b)]},size:{control:{type:"inline-radio"},options:Object.values(i)}},args:{items:[{id:"item_1",selected:!1},{id:"item_2",selected:!0},{id:"item_3",selected:!1,disabled:!0},{id:"item_4",selected:!1}],label:"this is the label",ariaLabel:"",placeholder:"select placeholder",status:null,message:"helper text",size:i.BIG,disabled:!1,readonly:!1,htmlid:"",htmltitle:"",autocomplete:!1,noresultslabel:"Nessun risultato",hasGroupItems:!1,resetItem:"",isfixed:!1}},t={render:e=>a`
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
  `},s={args:{hasGroupItems:!0,items:[{id:"item_1",selected:!1,category:"Gruppo 1"},{id:"item_2",selected:!1,category:"Gruppo 1"},{id:"item_3",selected:!1,category:"Gruppo 2",disabled:!0},{id:"item_4",selected:!1,category:"Gruppo 2"},{id:"item_5",selected:!1,category:"Gruppo 3",disabled:!0},{id:"item_6",selected:!1,category:"Gruppo 3"}]},render:e=>a`
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
  `},l={args:{hasGroupItems:!0,items:[{id:"item_1",selected:!1,icon:"teacher"},{id:"item_2",selected:!1,icon:"teacher"},{id:"item_3",selected:!1,disabled:!0,icon:"teacher"}]},render:e=>a`
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
  `};var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
} satisfies Story`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var m,d,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    hasGroupItems: true,
    items: ([{
      id: "item_1",
      selected: false,
      category: "Gruppo 1"
    }, {
      id: "item_2",
      selected: false,
      category: "Gruppo 1"
    }, {
      id: "item_3",
      selected: false,
      category: "Gruppo 2",
      disabled: true
    }, {
      id: "item_4",
      selected: false,
      category: "Gruppo 2"
    }, {
      id: "item_5",
      selected: false,
      category: "Gruppo 3",
      disabled: true
    }, {
      id: "item_6",
      selected: false,
      category: "Gruppo 3"
    }] as SelectItem[])
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
} satisfies Story`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,$,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    hasGroupItems: true,
    items: ([{
      id: "item_1",
      selected: false,
      icon: "teacher"
    }, {
      id: "item_2",
      selected: false,
      icon: "teacher"
    }, {
      id: "item_3",
      selected: false,
      disabled: true,
      icon: "teacher"
    }] as SelectItem[])
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
} satisfies Story`,...(u=($=l.parameters)==null?void 0:$.docs)==null?void 0:u.source}}};const j=["Default","Groups","ZSelectWithIcons"];export{t as Default,s as Groups,l as ZSelectWithIcons,j as __namedExportsOrder,Z as default};
