import{x as t}from"./lit-element-DGXdXVoE.js";import{e as r}from"./class-map-CUbHFwPI.js";import{I as u}from"./index-DSmxu1eR.js";import"./directive-CF8sV3Lr.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";const $={title:"ZFab",argTypes:{icon:{options:Object.keys(u),control:{type:"select"}},size:{options:["default","z-fab-small","z-fab-x-small"],control:{type:"inline-radio"}},colorVariant:{options:["default","z-fab-primary03","z-fab-surface01","z-fab-surface02","z-fab-surface04"],control:{type:"inline-radio"}}},args:{colorVariant:"default",icon:"question-mark-circle",label:"Info",size:"default","z-fab-extendable":!1,"z-fab-extended":!0},parameters:{layout:"fullscreen",docs:{description:{component:"You can use the `.z-fab` class on a `<button>` or `<a>` with some additional configuration class:\n- Sizes: `.z-fab-small`, `.z-fab-x-small`. Default with no size classes, is `big`\n- Color variants: `.z-fab-primary03`, `.z-fab-surface01`, `.z-fab-surface02`, `.z-fab-surface04`. Default with no color classes, is `primary01`\n- `.z-fab-extended`: show the label (if any) near the icon\n- `.z-fab-extendable`: label will be shown only on mouse hover and only on desktop viewports (don't add the `.z-fab-extended` class in this case)\n\nSome css custom properties are also available to customize the component:\n- `--z-fab-right-offset`: the right offset of the fab button (Default: `--grid-margin`)\n- `--z-fab-bottom-offset`: the bottom offset of the fab button (Default: `--grid-margin`)\n- `--z-fab-icon-size`: the size of the icon (Default: `20px`)\n- `--z-fab-icon-fill`: the fill color of the icon (Default: `--color-inverse-icon`)\n\n> NB: for the `extended` and `extendable` versions, always wrap the text of the label with some element (e.g. a `<span>`)."}}},tags:["!autodocs"]},n={render:a=>t`
    <button
      class=${r({"z-fab":!0,"z-fab-small":a.size==="z-fab-small","z-fab-x-small":a.size==="z-fab-x-small","z-fab-primary03":a.colorVariant==="z-fab-primary03","z-fab-surface01":a.colorVariant==="z-fab-surface01","z-fab-surface02":a.colorVariant==="z-fab-surface02","z-fab-surface04":a.colorVariant==="z-fab-surface04","z-fab-extended":a["z-fab-extended"],"z-fab-extendable":a["z-fab-extendable"]})}
    >
      ${a.icon?t`<z-icon name=${a.icon}></z-icon>`:""}
      ${a.label?t`<span>${a.label}</span>`:""}
    </button>
  `},e={render:a=>t`
    <button
      class=${r({"z-fab":!0,"z-fab-small":a.size==="z-fab-small","z-fab-x-small":a.size==="z-fab-x-small","z-fab-primary03":a.colorVariant==="z-fab-primary03","z-fab-surface01":a.colorVariant==="z-fab-surface01","z-fab-surface02":a.colorVariant==="z-fab-surface02","z-fab-surface04":a.colorVariant==="z-fab-surface04","z-fab-extended":a["z-fab-extended"],"z-fab-extendable":a["z-fab-extendable"]})}
    >
      <z-icon name=${a.icon}></z-icon>
      <span>${a.label}</span>
    </button>
    <button
      class=${r({"z-fab":!0,fab2:!0,"z-fab-small":!0,"z-fab-surface01":!0})}
    >
      <z-icon name="support"></z-icon>
    </button>
  `};var o,s,f;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => html\`
    <button
      class=\${classMap({
    "z-fab": true,
    "z-fab-small": args.size === "z-fab-small",
    "z-fab-x-small": args.size === "z-fab-x-small",
    "z-fab-primary03": args.colorVariant === "z-fab-primary03",
    "z-fab-surface01": args.colorVariant === "z-fab-surface01",
    "z-fab-surface02": args.colorVariant === "z-fab-surface02",
    "z-fab-surface04": args.colorVariant === "z-fab-surface04",
    "z-fab-extended": args["z-fab-extended"],
    "z-fab-extendable": args["z-fab-extendable"]
  })}
    >
      \${args.icon ? html\`<z-icon name=\${args.icon}></z-icon>\` : ""}
      \${args.label ? html\`<span>\${args.label}</span>\` : ""}
    </button>
  \`
}`,...(f=(s=n.parameters)==null?void 0:s.docs)==null?void 0:f.source}}};var l,b,i,c,z;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => html\`
    <button
      class=\${classMap({
    "z-fab": true,
    "z-fab-small": args.size === "z-fab-small",
    "z-fab-x-small": args.size === "z-fab-x-small",
    "z-fab-primary03": args.colorVariant === "z-fab-primary03",
    "z-fab-surface01": args.colorVariant === "z-fab-surface01",
    "z-fab-surface02": args.colorVariant === "z-fab-surface02",
    "z-fab-surface04": args.colorVariant === "z-fab-surface04",
    "z-fab-extended": args["z-fab-extended"],
    "z-fab-extendable": args["z-fab-extendable"]
  })}
    >
      <z-icon name=\${args.icon}></z-icon>
      <span>\${args.label}</span>
    </button>
    <button
      class=\${classMap({
    "z-fab": true,
    "fab2": true,
    "z-fab-small": true,
    "z-fab-surface01": true
  })}
    >
      <z-icon name="support"></z-icon>
    </button>
  \`
}`,...(i=(b=e.parameters)==null?void 0:b.docs)==null?void 0:i.source},description:{story:'Multiple ZFab can be used in the same page (max 3), but only one can be "default". The other ones must have a smaller size and can\'t have the text.\nYou can space them by setting the `--z-fab-bottom-offset` CSS prop.',...(z=(c=e.parameters)==null?void 0:c.docs)==null?void 0:z.description}}};const w=["Default","Multiple"];export{n as Default,e as Multiple,w as __namedExportsOrder,$ as default};
