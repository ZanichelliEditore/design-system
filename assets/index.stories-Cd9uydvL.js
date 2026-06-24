import{n as e}from"./chunk-DnJy8xQt.js";import{X as t,Z as n,nt as r}from"./iframe-e9i3gKXJ.js";import{i,s as a}from"./iconset-BcOnkZIn.js";import{t as o}from"./internal-BvzTEniA.js";var s=e((()=>{})),c,l,u,d;e((()=>{t(),o(),a(),s(),c={title:`CSS Components/ZFab`,argTypes:{icon:{options:Object.keys(i),control:{type:`select`}},size:{options:[`default`,`z-fab-small`,`z-fab-x-small`],control:{type:`inline-radio`}},colorVariant:{options:[`default`,`z-fab-primary03`,`z-fab-surface01`,`z-fab-surface02`,`z-fab-surface04`],control:{type:`inline-radio`}}},args:{colorVariant:`default`,icon:`question-mark-circle`,label:`Info`,size:`default`,"z-fab-extendable":!1,"z-fab-extended":!0},parameters:{layout:`fullscreen`,a11y:{disable:!0},docs:{description:{component:"You can use the `.z-fab` class on a `<button>` or `<a>` with some additional configuration class:\n- Sizes: `.z-fab-small`, `.z-fab-x-small`. Default with no size classes, is `big`\n- Color variants: `.z-fab-primary03`, `.z-fab-surface01`, `.z-fab-surface02`, `.z-fab-surface04`. Default with no color classes, is `primary01`\n- `.z-fab-extended`: show the label (if any) near the icon\n- `.z-fab-extendable`: label will be shown only on mouse hover and only on desktop viewports (don't add the `.z-fab-extended` class in this case)\n\nSome css custom properties are also available to customize the component:\n- `--z-fab-right-offset`: the right offset of the fab button (Default: `--grid-margin`)\n- `--z-fab-bottom-offset`: the bottom offset of the fab button (Default: `--grid-margin`)\n- `--z-fab-icon-size`: the size of the icon (Default: `20px`)\n- `--z-fab-icon-fill`: the fill color of the icon (Default: `--color-inverse-icon`)\n\n> NB: for the `extended` and `extendable` versions, always wrap the text of the label with some element (e.g. a `<span>`)."}}},tags:[`!autodocs`]},l={render:e=>r(`button`,{class:{"z-fab":!0,"z-fab-small":e.size===`z-fab-small`,"z-fab-x-small":e.size===`z-fab-x-small`,"z-fab-primary03":e.colorVariant===`z-fab-primary03`,"z-fab-surface01":e.colorVariant===`z-fab-surface01`,"z-fab-surface02":e.colorVariant===`z-fab-surface02`,"z-fab-surface04":e.colorVariant===`z-fab-surface04`,"z-fab-extended":e[`z-fab-extended`],"z-fab-extendable":e[`z-fab-extendable`]}},e.icon?r(`z-icon`,{name:e.icon}):``,e.label?r(`span`,null,e.label):``)},u={render:e=>r(n,null,r(`button`,{class:{"z-fab":!0,"z-fab-small":e.size===`z-fab-small`,"z-fab-x-small":e.size===`z-fab-x-small`,"z-fab-primary03":e.colorVariant===`z-fab-primary03`,"z-fab-surface01":e.colorVariant===`z-fab-surface01`,"z-fab-surface02":e.colorVariant===`z-fab-surface02`,"z-fab-surface04":e.colorVariant===`z-fab-surface04`,"z-fab-extended":e[`z-fab-extended`],"z-fab-extendable":e[`z-fab-extendable`]}},r(`z-icon`,{name:e.icon}),r(`span`,null,e.label)),r(`button`,{class:{"z-fab":!0,fab2:!0,"z-fab-small":!0,"z-fab-surface01":!0}},r(`z-icon`,{name:`support`})))},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <button class={{
    "z-fab": true,
    "z-fab-small": args.size === "z-fab-small",
    "z-fab-x-small": args.size === "z-fab-x-small",
    "z-fab-primary03": args.colorVariant === "z-fab-primary03",
    "z-fab-surface01": args.colorVariant === "z-fab-surface01",
    "z-fab-surface02": args.colorVariant === "z-fab-surface02",
    "z-fab-surface04": args.colorVariant === "z-fab-surface04",
    "z-fab-extended": args["z-fab-extended"],
    "z-fab-extendable": args["z-fab-extendable"]
  }}>
      {args.icon ? <z-icon name={args.icon}></z-icon> : ""}
      {args.label ? <span>{args.label}</span> : ""}
    </button>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Fragment>
      <button class={{
      "z-fab": true,
      "z-fab-small": args.size === "z-fab-small",
      "z-fab-x-small": args.size === "z-fab-x-small",
      "z-fab-primary03": args.colorVariant === "z-fab-primary03",
      "z-fab-surface01": args.colorVariant === "z-fab-surface01",
      "z-fab-surface02": args.colorVariant === "z-fab-surface02",
      "z-fab-surface04": args.colorVariant === "z-fab-surface04",
      "z-fab-extended": args["z-fab-extended"],
      "z-fab-extendable": args["z-fab-extendable"]
    }}>
        <z-icon name={args.icon}></z-icon>
        <span>{args.label}</span>
      </button>
      <button class={{
      "z-fab": true,
      "fab2": true,
      "z-fab-small": true,
      "z-fab-surface01": true
    }}>
        <z-icon name="support"></z-icon>
      </button>
    </Fragment>
}`,...u.parameters?.docs?.source},description:{story:`Multiple ZFab can be used in the same page (max 3), but only one can be "default". The other ones must have a smaller size and can't have the text.
You can space them by setting the \`--z-fab-bottom-offset\` CSS prop.`,...u.parameters?.docs?.description}}},d=[`Default`,`Multiple`]}))();export{l as Default,u as Multiple,d as __namedExportsOrder,c as default};