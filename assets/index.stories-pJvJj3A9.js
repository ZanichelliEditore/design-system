import{r as e}from"./lit-CgIPLKVa.js";import"./z-menu-section-deprecated-C9V5xjQi.js";var t={title:`Deprecated/ZMenuSection`,component:`z-menu-section-deprecated`,args:{active:!1}},n={render:t=>e`
    <z-menu-section-deprecated .active=${t.active}>
      <h3>Label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <a
        href=""
        slot="item"
        active
        >Item 3 - active</a
      >
    </z-menu-section-deprecated>
  `},r={render:t=>e`
    <z-menu-section-deprecated .active=${t.active}>
      <h3>Label</h3>
    </z-menu-section-deprecated>
  `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-menu-section-deprecated .active=\${args.active}>
      <h3>Label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <a
        href=""
        slot="item"
        active
        >Item 3 - active</a
      >
    </z-menu-section-deprecated>
  \`
} satisfies Story`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-menu-section-deprecated .active=\${args.active}>
      <h3>Label</h3>
    </z-menu-section-deprecated>
  \`
} satisfies Story`,...r.parameters?.docs?.source}}};var i=[`WithItems`,`WithoutItems`];export{n as WithItems,r as WithoutItems,i as __namedExportsOrder,t as default};