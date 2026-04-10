import{x as i}from"./lit-element-DGXdXVoE.js";import{C as t}from"./index-8S3OXAZj.js";import{a as f}from"./storybook-utils-DX4XXC0w.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BYI030T8.js";import"./iframe-ZSMUqasm.js";const S={title:"ZIcon",component:"z-icon",argTypes:{fill:{options:f().map(o=>o.replace("--","")),control:{type:"select"}}},args:{name:"download",height:24,width:24,fill:"color-primary01"}},r={render:o=>i`<z-icon
      name=${o.name}
      height=${o.height}
      width=${o.width}
      fill=${o.fill}
    ></z-icon>`},n={args:{name:"download",height:"1.125rem",width:"1.125rem",fill:"color-primary01"},render:o=>i`<z-icon
      name=${o.name}
      height=${o.height}
      width=${o.width}
      fill=${o.fill}
    ></z-icon>`},e={argTypes:{name:{options:t,control:{type:"select"}},indicatorColor:{control:{type:"color"}}},args:{name:t[0],fill:"color-black",indicatorColor:"#ff0000",width:64,height:64},render:o=>i`<z-icon
      name=${o.name}
      height=${o.height}
      width=${o.width}
      fill=${o.fill}
      .indicatorColor=${o.indicatorColor}
    ></z-icon>`};var a,l,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => html\`<z-icon
      name=\${args.name}
      height=\${args.height}
      width=\${args.width}
      fill=\${args.fill}
    ></z-icon>\`
} satisfies Story`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var s,m,h;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    name: "download",
    height: "1.125rem",
    width: "1.125rem",
    fill: "color-primary01"
  },
  render: args => html\`<z-icon
      name=\${args.name}
      height=\${args.height}
      width=\${args.width}
      fill=\${args.fill}
    ></z-icon>\`
} satisfies Story`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var d,p,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes: {
    name: {
      options: COLOR_INDICATOR_ICONS,
      control: {
        type: "select"
      }
    },
    indicatorColor: {
      control: {
        type: "color"
      }
    }
  },
  args: {
    name: COLOR_INDICATOR_ICONS[0],
    fill: "color-black",
    indicatorColor: "#ff0000",
    width: 64,
    height: 64
  },
  render: args => html\`<z-icon
      name=\${args.name}
      height=\${args.height}
      width=\${args.width}
      fill=\${args.fill}
      .indicatorColor=\${args.indicatorColor}
    ></z-icon>\`
} satisfies Story`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const R=["Default","ZIconRem","ColorIndicator"];export{e as ColorIndicator,r as Default,n as ZIconRem,R as __namedExportsOrder,S as default};
