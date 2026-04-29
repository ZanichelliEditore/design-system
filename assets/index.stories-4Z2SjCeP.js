import{r as e}from"./lit-CgIPLKVa.js";import{i as t}from"./z-icon-jtOHWf42.js";import{t as n}from"./class-map-BbCMXtX9.js";var r={title:`ZFab`,argTypes:{icon:{options:Object.keys(t),control:{type:`select`}},size:{options:[`default`,`z-fab-small`,`z-fab-x-small`],control:{type:`inline-radio`}},colorVariant:{options:[`default`,`z-fab-primary03`,`z-fab-surface01`,`z-fab-surface02`,`z-fab-surface04`],control:{type:`inline-radio`}}},args:{colorVariant:`default`,icon:`question-mark-circle`,label:`Info`,size:`default`,"z-fab-extendable":!1,"z-fab-extended":!0},parameters:{layout:`fullscreen`,docs:{description:{component:"You can use the `.z-fab` class on a `<button>` or `<a>` with some additional configuration class:\n- Sizes: `.z-fab-small`, `.z-fab-x-small`. Default with no size classes, is `big`\n- Color variants: `.z-fab-primary03`, `.z-fab-surface01`, `.z-fab-surface02`, `.z-fab-surface04`. Default with no color classes, is `primary01`\n- `.z-fab-extended`: show the label (if any) near the icon\n- `.z-fab-extendable`: label will be shown only on mouse hover and only on desktop viewports (don't add the `.z-fab-extended` class in this case)\n\nSome css custom properties are also available to customize the component:\n- `--z-fab-right-offset`: the right offset of the fab button (Default: `--grid-margin`)\n- `--z-fab-bottom-offset`: the bottom offset of the fab button (Default: `--grid-margin`)\n- `--z-fab-icon-size`: the size of the icon (Default: `20px`)\n- `--z-fab-icon-fill`: the fill color of the icon (Default: `--color-inverse-icon`)\n\n> NB: for the `extended` and `extendable` versions, always wrap the text of the label with some element (e.g. a `<span>`)."}}},tags:[`!autodocs`]},i={render:t=>e`
    <button
      class=${n({"z-fab":!0,"z-fab-small":t.size===`z-fab-small`,"z-fab-x-small":t.size===`z-fab-x-small`,"z-fab-primary03":t.colorVariant===`z-fab-primary03`,"z-fab-surface01":t.colorVariant===`z-fab-surface01`,"z-fab-surface02":t.colorVariant===`z-fab-surface02`,"z-fab-surface04":t.colorVariant===`z-fab-surface04`,"z-fab-extended":t[`z-fab-extended`],"z-fab-extendable":t[`z-fab-extendable`]})}
    >
      ${t.icon?e`<z-icon name=${t.icon}></z-icon>`:``}
      ${t.label?e`<span>${t.label}</span>`:``}
    </button>
  `},a={render:t=>e`
    <button
      class=${n({"z-fab":!0,"z-fab-small":t.size===`z-fab-small`,"z-fab-x-small":t.size===`z-fab-x-small`,"z-fab-primary03":t.colorVariant===`z-fab-primary03`,"z-fab-surface01":t.colorVariant===`z-fab-surface01`,"z-fab-surface02":t.colorVariant===`z-fab-surface02`,"z-fab-surface04":t.colorVariant===`z-fab-surface04`,"z-fab-extended":t[`z-fab-extended`],"z-fab-extendable":t[`z-fab-extendable`]})}
    >
      <z-icon name=${t.icon}></z-icon>
      <span>${t.label}</span>
    </button>
    <button
      class=${n({"z-fab":!0,fab2:!0,"z-fab-small":!0,"z-fab-surface01":!0})}
    >
      <z-icon name="support"></z-icon>
    </button>
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:`Multiple ZFab can be used in the same page (max 3), but only one can be "default". The other ones must have a smaller size and can't have the text.
You can space them by setting the \`--z-fab-bottom-offset\` CSS prop.`,...a.parameters?.docs?.description}}};var o=[`Default`,`Multiple`];export{i as Default,a as Multiple,o as __namedExportsOrder,r as default};