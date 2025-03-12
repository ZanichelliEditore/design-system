import{x as a}from"./lit-element-DGXdXVoE.js";import{i as d}from"./index-Dm3VcLdc.js";import{a as p}from"./storybook-utils-DAVCxM-F.js";import"./index-DJ369FTX.js";import"./index-Co94XOLL.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";const $={title:"ZSectionTitle",component:"z-section-title",argTypes:{dividerPosition:{options:Object.values(d),control:{type:"inline-radio"}},"--z-section-title--divider-color":p()},args:{uppercase:!0,"--z-section-title--divider-color":"var(--red500)"}},i={args:{dividerPosition:d.BEFORE},render:e=>a`
    <z-section-title
      .dividerPosition=${e.dividerPosition}
      .uppercase=${e.uppercase}
      .style="--z-section-title--divider-color: ${e["--z-section-title--divider-color"]}"
    >
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  `},t={parameters:{controls:{exclude:["dividerPosition"]}},render:e=>a`
    <z-section-title
      .uppercase=${e.uppercase}
      .style="--z-section-title--divider-color: ${e["--z-section-title--divider-color"]}"
    >
      <h5 slot="secondary-title">Secondary title</h5>
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  `};var r,o,s;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
} satisfies Story`,...(s=(o=i.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var n,l,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
} satisfies Story`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const T=["PrimaryTitleOnly","SecondaryTitle"];export{i as PrimaryTitleOnly,t as SecondaryTitle,T as __namedExportsOrder,$ as default};
