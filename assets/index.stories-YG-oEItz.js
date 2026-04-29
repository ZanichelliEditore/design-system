import{r as e}from"./lit-CgIPLKVa.js";import{i as t}from"./z-icon-6rrsih2X.js";import{h as n,w as r}from"./beans-CNd94UMz.js";import"./z-button-BRN_Z_XJ.js";import"./z-info-reveal-CHdt1ObQ.js";var i={title:`ZInfoReveal`,component:`z-info-reveal`,argTypes:{icon:{control:{type:`select`},options:Object.keys(t).sort()},size:{control:{type:`inline-radio`},options:Object.values(n)},position:{options:Object.values(r),control:{type:`inline-radio`}}},parameters:{layout:`centered`}},a={args:{label:``,icon:`informationsource`,size:n.BIG,position:r.TOP_RIGHT},render:t=>e`
    <div class="z-info-reveal-story-wrapper">
      <z-button .size=${t.size}>Button</z-button>
      <z-info-reveal
        .label=${t.label}
        .icon=${t.icon}
        .size=${t.size}
        .position=${t.position}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
          Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
        </div>
      </z-info-reveal>
    </div>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "",
    icon: "informationsource",
    size: ControlSize.BIG,
    position: InfoRevealPosition.TOP_RIGHT
  },
  render: args => html\`
    <div class="z-info-reveal-story-wrapper">
      <z-button .size=\${args.size}>Button</z-button>
      <z-info-reveal
        .label=\${args.label}
        .icon=\${args.icon}
        .size=\${args.size}
        .position=\${args.position}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
          Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
        </div>
      </z-info-reveal>
    </div>
  \`
} satisfies StoryObj<ZInfoReveal>`,...a.parameters?.docs?.source}}};var o=[`Default`];export{a as Default,o as __namedExportsOrder,i as default};