import{r as e}from"./lit-CgIPLKVa.js";import"./z-menu-deprecated-Cf-vDIWB.js";import"./z-menu-section-deprecated-C9V5xjQi.js";var t={title:`Deprecated/ZMenuDeprecated`,component:`z-menu`,args:{active:!1,floating:!0,verticalContext:!1}},n={render:t=>e`
    <z-menu-deprecated
      .active=${t.active}
      .floating=${t.floating}
      .verticalContext=${t.verticalContext}
    >
      <h3>Menu label</h3>
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
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="item"
          >Item 3.1</a
        >
        <a
          href=""
          slot="item"
          >Item 3.2</a
        >
      </z-menu-section-deprecated>
      <z-menu-section-deprecated slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="item"
          >Item 4.1</a
        >
        <a
          href=""
          slot="item"
          >Item 4.2</a
        >
      </z-menu-section-deprecated>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu-deprecated>
  `},r={render:t=>e`
    <z-menu-deprecated
      .active=${t.active}
      .floating=${t.floating}
      .verticalContext=${t.verticalContext}
    >
      <img
        slot="header"
        src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg"
      />
      <h4 slot="header">Menu header</h4>
      <h3>Menu label</h3>
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
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="item"
          >Item 3.1</a
        >
        <a
          href=""
          slot="item"
          >Item 3.2</a
        >
      </z-menu-section-deprecated>
      <a
        href=""
        slot="item"
        >Item 4</a
      >
    </z-menu-deprecated>
  `},i={parameters:{controls:{exclude:[`floating`]}},render:t=>e`
    <z-menu-deprecated
      .active=${!0}
      .verticalContext=${t.verticalContext}
    >
      <a
        href="https://cataas.com/cat/gif"
        target="_blank"
        >Click me</a
      >
    </z-menu-deprecated>
  `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-menu-deprecated
      .active=\${args.active}
      .floating=\${args.floating}
      .verticalContext=\${args.verticalContext}
    >
      <h3>Menu label</h3>
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
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="item"
          >Item 3.1</a
        >
        <a
          href=""
          slot="item"
          >Item 3.2</a
        >
      </z-menu-section-deprecated>
      <z-menu-section-deprecated slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="item"
          >Item 4.1</a
        >
        <a
          href=""
          slot="item"
          >Item 4.2</a
        >
      </z-menu-section-deprecated>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu-deprecated>
  \`
} satisfies Story`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-menu-deprecated
      .active=\${args.active}
      .floating=\${args.floating}
      .verticalContext=\${args.verticalContext}
    >
      <img
        slot="header"
        src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg"
      />
      <h4 slot="header">Menu header</h4>
      <h3>Menu label</h3>
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
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="item"
          >Item 3.1</a
        >
        <a
          href=""
          slot="item"
          >Item 3.2</a
        >
      </z-menu-section-deprecated>
      <a
        href=""
        slot="item"
        >Item 4</a
      >
    </z-menu-deprecated>
  \`
} satisfies Story`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["floating"]
    }
  },
  render: args => html\`
    <z-menu-deprecated
      .active=\${true}
      .verticalContext=\${args.verticalContext}
    >
      <a
        href="https://cataas.com/cat/gif"
        target="_blank"
        >Click me</a
      >
    </z-menu-deprecated>
  \`
} satisfies Story`,...i.parameters?.docs?.source}}};var a=[`FloatingContentLayout`,`WithHeader`,`ActiveWithoutItems`];export{i as ActiveWithoutItems,n as FloatingContentLayout,r as WithHeader,a as __namedExportsOrder,t as default};