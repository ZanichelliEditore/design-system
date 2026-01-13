import{x as t}from"./lit-element-DGXdXVoE.js";import{h as S,C as r}from"./index-BBy8evlc.js";import"./index-CxvGCLMH.js";import"./index-ClXOsKYV.js";import"./index-Di9u4Hee.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";import"./index-CW6pj5xv.js";import"./utils-D8xbZiRf.js";import"./breakpoints-p3CVLX0Q.js";import"./index-Bo5KRhcs.js";import"./index-WQmFnIG7.js";import"./index-CHNVhXXx.js";import"./index-B2kWetX-.js";import"./index-B-nNKwOH.js";const v={title:"ZSelect",component:"z-select",argTypes:{items:{control:{type:"object"}},status:{control:{type:"select",labels:{null:"-"}},options:[null,...Object.values(S)]},size:{control:{type:"inline-radio"},options:Object.values(r)}},args:{items:[{id:"item_1",name:"item_1",selected:!1},{id:"item_2",name:"item_2",selected:!0},{id:"item_3",name:"item_3",selected:!1,disabled:!0},{id:"item_4",name:"item_4",selected:!1}],label:"this is the label",ariaLabel:"",placeholder:"select placeholder",status:null,message:"helper text",size:r.BIG,name:"select-name",disabled:!1,readonly:!1,htmlid:"",htmltitle:"",autocomplete:!1,noresultslabel:"Nessun risultato",hasGroupItems:!1,hasTreeItems:!1,resetItem:"",isfixed:!1}},s={render:e=>t`
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
  `},a={args:{hasGroupItems:!0,items:[{id:"item_1",name:"item_1",selected:!1,category:"Gruppo 1"},{id:"item_2",name:"item_2",selected:!1,category:"Gruppo 1"},{id:"item_3",name:"item_3",selected:!1,category:"Gruppo 2",disabled:!0},{id:"item_4",name:"item_4",selected:!1,category:"Gruppo 2"},{id:"item_5",name:"item_5",selected:!1,category:"Gruppo 3",disabled:!0},{id:"item_6",name:"item_6",selected:!1,category:"Gruppo 3"}]},render:e=>t`
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
  `},l={args:{hasGroupItems:!0,items:[{id:"item_1",name:"item_1",selected:!1,icon:"teacher"},{id:"item_2",name:"item_2",selected:!1,icon:"teacher"},{id:"item_3",name:"item_3",selected:!1,disabled:!0,icon:"teacher"}]},render:e=>t`
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
  `},n={args:{hasTreeItems:!0,hasGroupItems:!1,items:[{id:"padre",name:"Padre",selected:!1,category:"Sezione",children:[{id:"figlio1aa",name:"Figlio",selected:!1,children:[]},{id:"figlio1b",name:"Figlio 2",selected:!1}]},{id:"padre3",name:"Padre 3",selected:!1,category:"Altra sezione",children:[{id:"figlio3a",name:"Figlio 3A",selected:!1,children:[{id:"nipote3a-1",name:"Nipote 3A-1",selected:!1}]}]}]},render:e=>t`
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
      .hasTreeItems=${e.hasTreeItems}
    ></z-select>
  `},i={args:{hasTreeItems:!0,hasGroupItems:!0,showChildrenOfMatchingParent:!1,items:[{id:"padreA",name:"Padre A",selected:!1,category:"Sezione",children:[{id:"figlioA1",name:"Figlio A1",selected:!1,children:[]},{id:"figlioA2",name:"Figlio A2",selected:!1}]},{id:"padreB",name:"Padre B",selected:!1,category:"Altra sezione",children:[{id:"figlioB1",name:"Figlio B1",selected:!1,children:[{id:"nipoteB1",name:"Nipote B1",selected:!1,children:[{id:"pronipoteB1",name:"Pronipote B1",selected:!1}]}]}]},{id:"altro",name:"Altro",selected:!1,category:"Altra sezione",children:[]}]},render:e=>t`
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
      .hasGroupItems=${e.hasGroupItems}
      .hasTreeItems=${e.hasTreeItems}
      .showChildrenOfMatchingParent=${e.showChildrenOfMatchingParent}
    ></z-select>
  `};var m,o,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies Story`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,$,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} satisfies Story`,...(p=($=a.parameters)==null?void 0:$.docs)==null?void 0:p.source}}};var h,u,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,b,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    hasTreeItems: true,
    hasGroupItems: false,
    items: [{
      id: "padre",
      name: "Padre",
      selected: false,
      category: "Sezione",
      children: [{
        id: "figlio1aa",
        name: "Figlio",
        selected: false,
        children: []
      }, {
        id: "figlio1b",
        name: "Figlio 2",
        selected: false
      }]
    }, {
      id: "padre3",
      name: "Padre 3",
      selected: false,
      category: "Altra sezione",
      children: [{
        id: "figlio3a",
        name: "Figlio 3A",
        selected: false,
        children: [{
          id: "nipote3a-1",
          name: "Nipote 3A-1",
          selected: false
        }]
      }]
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
      .hasTreeItems=\${args.hasTreeItems}
    ></z-select>
  \`
} satisfies Story`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var z,I,_;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    hasTreeItems: true,
    hasGroupItems: true,
    showChildrenOfMatchingParent: false,
    items: [{
      id: "padreA",
      name: "Padre A",
      selected: false,
      category: "Sezione",
      children: [{
        id: "figlioA1",
        name: "Figlio A1",
        selected: false,
        children: []
      }, {
        id: "figlioA2",
        name: "Figlio A2",
        selected: false
      }]
    }, {
      id: "padreB",
      name: "Padre B",
      selected: false,
      category: "Altra sezione",
      children: [{
        id: "figlioB1",
        name: "Figlio B1",
        selected: false,
        children: [{
          id: "nipoteB1",
          name: "Nipote B1",
          selected: false,
          children: [{
            id: "pronipoteB1",
            name: "Pronipote B1",
            selected: false
          }]
        }]
      }]
    }, {
      id: "altro",
      name: "Altro",
      selected: false,
      category: "Altra sezione",
      children: []
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
      .hasGroupItems=\${args.hasGroupItems}
      .hasTreeItems=\${args.hasTreeItems}
      .showChildrenOfMatchingParent=\${args.showChildrenOfMatchingParent}
    ></z-select>
  \`
} satisfies Story`,...(_=(I=i.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const D=["Default","Groups","ZSelectWithIcons","ZSelectWithTreeItems","ZSelectWithGroupsAndTreeItems"];export{s as Default,a as Groups,i as ZSelectWithGroupsAndTreeItems,l as ZSelectWithIcons,n as ZSelectWithTreeItems,D as __namedExportsOrder,v as default};
