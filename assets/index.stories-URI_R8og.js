import{x as l}from"./lit-element-DGXdXVoE.js";import{a as d}from"./index-Dk5nO_yw.js";import{g as p}from"./storybook-utils-DX4XXC0w.js";import"./index-CNGVfLp2.js";import"./index-COUg6hie.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";const T={title:"Deprecated/ZSectionTitle",component:"z-section-title",argTypes:{dividerPosition:{options:Object.values(d),control:{type:"inline-radio"}},"--z-section-title--divider-color":p()},args:{uppercase:!0,"--z-section-title--divider-color":"var(--red500)"},parameters:{docs:{description:{component:"⚠️ This component is **deprecated** and may be removed soon.\nUse the typography tokens or classes instead (see `Typography/Typography classes` section)."}}}},t={args:{dividerPosition:d.BEFORE},render:e=>l`
    <z-section-title
      .dividerPosition=${e.dividerPosition}
      .uppercase=${e.uppercase}
      .style="--z-section-title--divider-color: ${e["--z-section-title--divider-color"]}"
    >
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  `},i={parameters:{controls:{exclude:["dividerPosition"]}},render:e=>l`
    <z-section-title
      .uppercase=${e.uppercase}
      .style="--z-section-title--divider-color: ${e["--z-section-title--divider-color"]}"
    >
      <h5 slot="secondary-title">Secondary title</h5>
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  `};var r,o,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    dividerPosition: ZSectionTitleDividerPosition.BEFORE
  },
  render: args => html\`
    <z-section-title
      .dividerPosition=\${args.dividerPosition}
      .uppercase=\${args.uppercase}
      .style="--z-section-title--divider-color: \${args["--z-section-title--divider-color"]}"
    >
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  \`
} satisfies Story`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var n,a,c;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["dividerPosition"]
    }
  },
  render: args => html\`
    <z-section-title
      .uppercase=\${args.uppercase}
      .style="--z-section-title--divider-color: \${args["--z-section-title--divider-color"]}"
    >
      <h5 slot="secondary-title">Secondary title</h5>
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  \`
} satisfies Story`,...(c=(a=i.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const $=["PrimaryTitleOnly","SecondaryTitle"];export{t as PrimaryTitleOnly,i as SecondaryTitle,$ as __namedExportsOrder,T as default};
