import{r as e}from"./lit-CgIPLKVa.js";import{T as t,h as n}from"./beans-CNd94UMz.js";import"./z-select-D5a_qIhY.js";var r={title:`ZSelect`,component:`z-select`,argTypes:{items:{control:{type:`object`}},status:{control:{type:`select`,labels:{null:`-`}},options:[null,...Object.values(t)]},size:{control:{type:`inline-radio`},options:Object.values(n)}},args:{items:[{id:`item_1`,name:`item_1`,selected:!1},{id:`item_2`,name:`item_2`,selected:!0},{id:`item_3`,name:`item_3`,selected:!1,disabled:!0},{id:`item_4`,name:`item_4`,selected:!1}],label:`this is the label`,ariaLabel:``,placeholder:`select placeholder`,status:null,message:`helper text`,size:n.BIG,name:`select-name`,disabled:!1,readonly:!1,htmlid:``,htmltitle:``,autocomplete:!1,noresultslabel:`Nessun risultato`,hasGroupItems:!1,hasTreeItems:!1,resetItem:``,isfixed:!1}},i={render:t=>e`
    <z-select
      items=${JSON.stringify(t.items)}
      label=${t.label}
      aria-label=${t.ariaLabel}
      placeholder=${t.placeholder}
      name=${t.name}
      status=${t.status}
      message=${t.message}
      autocomplete=${t.autocomplete}
      noresultslabel=${t.noresultslabel}
      disabled=${t.disabled}
      readonly=${t.readonly}
      htmlid=${t.htmlid}
      htmltitle=${t.htmltitle}
      reset-item=${t.resetItem}
      isfixed=${t.isfixed}
      size=${t.size}
    ></z-select>
  `},a={args:{hasGroupItems:!0,items:[{id:`item_1`,name:`item_1`,selected:!1,category:`Gruppo 1`},{id:`item_2`,name:`item_2`,selected:!1,category:`Gruppo 1`},{id:`item_3`,name:`item_3`,selected:!1,category:`Gruppo 2`,disabled:!0},{id:`item_4`,name:`item_4`,selected:!1,category:`Gruppo 2`},{id:`item_5`,name:`item_5`,selected:!1,category:`Gruppo 3`,disabled:!0},{id:`item_6`,name:`item_6`,selected:!1,category:`Gruppo 3`}]},render:t=>e`
    <z-select
      items=${JSON.stringify(t.items)}
      label=${t.label}
      aria-label=${t.ariaLabel}
      placeholder=${t.placeholder}
      name=${t.name}
      status=${t.status}
      message=${t.message}
      autocomplete=${t.autocomplete}
      noresultslabel=${t.noresultslabel}
      disabled=${t.disabled}
      readonly=${t.readonly}
      htmlid=${t.htmlid}
      htmltitle=${t.htmltitle}
      .hasGroupItems=${t.hasGroupItems}
      reset-item=${t.resetItem}
      isfixed=${t.isfixed}
      size=${t.size}
    ></z-select>
  `},o={args:{hasGroupItems:!0,items:[{id:`item_1`,name:`item_1`,selected:!1,icon:`teacher`},{id:`item_2`,name:`item_2`,selected:!1,icon:`teacher`},{id:`item_3`,name:`item_3`,selected:!1,disabled:!0,icon:`teacher`}]},render:t=>e`
    <z-select
      items=${JSON.stringify(t.items)}
      label=${t.label}
      aria-label=${t.ariaLabel}
      placeholder=${t.placeholder}
      name=${t.name}
      status=${t.status}
      message=${t.message}
      autocomplete=${t.autocomplete}
      noresultslabel=${t.noresultslabel}
      disabled=${t.disabled}
      readonly=${t.readonly}
      htmlid=${t.htmlid}
      htmltitle=${t.htmltitle}
      reset-item=${t.resetItem}
      isfixed=${t.isfixed}
      size=${t.size}
    ></z-select>
  `},s={args:{hasTreeItems:!0,hasGroupItems:!1,items:[{id:`padre`,name:`Padre`,selected:!1,category:`Sezione`,children:[{id:`figlio1aa`,name:`Figlio`,selected:!1,children:[]},{id:`figlio1b`,name:`Figlio 2`,selected:!1}]},{id:`padre3`,name:`Padre 3`,selected:!1,category:`Altra sezione`,children:[{id:`figlio3a`,name:`Figlio 3A`,selected:!1,children:[{id:`nipote3a-1`,name:`Nipote 3A-1`,selected:!1}]}]}]},render:t=>e`
    <z-select
      items=${JSON.stringify(t.items)}
      label=${t.label}
      aria-label=${t.ariaLabel}
      placeholder=${t.placeholder}
      name=${t.name}
      status=${t.status}
      message=${t.message}
      autocomplete=${t.autocomplete}
      noresultslabel=${t.noresultslabel}
      disabled=${t.disabled}
      readonly=${t.readonly}
      htmlid=${t.htmlid}
      htmltitle=${t.htmltitle}
      reset-item=${t.resetItem}
      isfixed=${t.isfixed}
      size=${t.size}
      .hasTreeItems=${t.hasTreeItems}
    ></z-select>
  `},c={args:{hasTreeItems:!0,hasGroupItems:!0,showChildrenOfMatchingParent:!1,items:[{id:`padreA`,name:`Padre A`,selected:!1,category:`Sezione`,children:[{id:`figlioA1`,name:`Figlio A1`,selected:!1,children:[]},{id:`figlioA2`,name:`Figlio A2`,selected:!1}]},{id:`padreB`,name:`Padre B`,selected:!1,category:`Altra sezione`,children:[{id:`figlioB1`,name:`Figlio B1`,selected:!1,children:[{id:`nipoteB1`,name:`Nipote B1`,selected:!1,children:[{id:`pronipoteB1`,name:`Pronipote B1`,selected:!1}]}]}]},{id:`altro`,name:`Altro`,selected:!1,category:`Altra sezione`,children:[]}]},render:t=>e`
    <z-select
      items=${JSON.stringify(t.items)}
      label=${t.label}
      aria-label=${t.ariaLabel}
      placeholder=${t.placeholder}
      name=${t.name}
      status=${t.status}
      message=${t.message}
      autocomplete=${t.autocomplete}
      noresultslabel=${t.noresultslabel}
      disabled=${t.disabled}
      readonly=${t.readonly}
      htmlid=${t.htmlid}
      htmltitle=${t.htmltitle}
      reset-item=${t.resetItem}
      isfixed=${t.isfixed}
      size=${t.size}
      .hasGroupItems=${t.hasGroupItems}
      .hasTreeItems=${t.hasTreeItems}
      .showChildrenOfMatchingParent=${t.showChildrenOfMatchingParent}
    ></z-select>
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};var l=[`Default`,`Groups`,`ZSelectWithIcons`,`ZSelectWithTreeItems`,`ZSelectWithGroupsAndTreeItems`];export{i as Default,a as Groups,c as ZSelectWithGroupsAndTreeItems,o as ZSelectWithIcons,s as ZSelectWithTreeItems,l as __namedExportsOrder,r as default};