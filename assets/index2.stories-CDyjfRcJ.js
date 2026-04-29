import{r as e}from"./lit-CgIPLKVa.js";import{n as t}from"./z-icon-BmF0hk_o.js";import{n}from"./storybook-utils-DtpJwcUL.js";var r={title:`ZIcon`,component:`z-icon`,argTypes:{fill:{options:n().map(e=>e.replace(`--`,``)),control:{type:`select`}}},args:{name:`download`,height:24,width:24,fill:`color-primary01`}},i={render:t=>e`<z-icon
      name=${t.name}
      height=${t.height}
      width=${t.width}
      fill=${t.fill}
    ></z-icon>`},a={args:{name:`download`,height:`1.125rem`,width:`1.125rem`,fill:`color-primary01`},render:t=>e`<z-icon
      name=${t.name}
      height=${t.height}
      width=${t.width}
      fill=${t.fill}
    ></z-icon>`},o={argTypes:{name:{options:t,control:{type:`select`}},indicatorColor:{control:{type:`color`}}},args:{name:t[0],fill:`color-black`,indicatorColor:`#ff0000`,width:64,height:64},render:t=>e`<z-icon
      name=${t.name}
      height=${t.height}
      width=${t.width}
      fill=${t.fill}
      .indicatorColor=${t.indicatorColor}
    ></z-icon>`};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => html\`<z-icon
      name=\${args.name}
      height=\${args.height}
      width=\${args.width}
      fill=\${args.fill}
    ></z-icon>\`
} satisfies Story`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}};var s=[`Default`,`ZIconRem`,`ColorIndicator`];export{o as ColorIndicator,i as Default,a as ZIconRem,s as __namedExportsOrder,r as default};