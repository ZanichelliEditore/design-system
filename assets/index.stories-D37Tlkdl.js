import{x as a}from"./lit-element-DGXdXVoE.js";import{C as s,n as r}from"./index-CjlG6izv.js";import{I as l}from"./index-DG5VvcyV.js";import"./index-BG26UsES.js";import"./index-Cm5ThayP.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";const y={title:"ZInfoReveal",component:"z-info-reveal",argTypes:{icon:{control:{type:"select"},options:Object.keys(l).sort()},size:{control:{type:"inline-radio"},options:Object.values(s)},position:{options:Object.values(r),control:{type:"inline-radio"}}},parameters:{layout:"centered"}},i={args:{label:"",icon:"informationsource",size:s.BIG,position:r.TOP_RIGHT},render:e=>a`
    <div class="z-info-reveal-story-wrapper">
      <z-button .size=${e.size}>Button</z-button>
      <z-info-reveal
        .label=${e.label}
        .icon=${e.icon}
        .size=${e.size}
        .position=${e.position}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
          Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
        </div>
      </z-info-reveal>
    </div>
  `};var o,n,t;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
} satisfies StoryObj<ZInfoReveal>`,...(t=(n=i.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const I=["Default"];export{i as Default,I as __namedExportsOrder,y as default};
