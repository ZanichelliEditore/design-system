import{n as e}from"./chunk-DnJy8xQt.js";import{X as t,nt as n}from"./iframe-CJGav67o.js";import{i as r,s as i}from"./iconset-BcOnkZIn.js";var a=e((()=>{})),o,s,c,l,u;e((()=>{t(),i(),a(),o={title:`CSS Components/ZLink`,parameters:{a11y:{disable:!0}},argTypes:{colorVariant:{options:[`z-link`,`z-link-blue`,`z-link-red`,`z-link-inverse`],control:{type:`inline-radio`}},icon:{options:[null,...Object.keys(r)],control:{type:`select`,labels:{null:`No icon`}}},"z-link-icon":{if:{arg:`icon`,truthy:!0}}},args:{colorVariant:`z-link`,text:`Zanichelli.it`,icon:null,"z-link-active":!1,"z-link-disabled":!1,"z-link-underline":!1,"z-link-icon":!1,"z-link-sb":!1}},s=e=>({"z-link":!0,"z-link-blue":e.colorVariant===`z-link-blue`,"z-link-red":e.colorVariant===`z-link-red`,"z-link-inverse":e.colorVariant===`z-link-inverse`,"z-link-active":e[`z-link-active`],"z-link-disabled":e[`z-link-disabled`],"z-link-underline":e[`z-link-underline`],"z-link-icon":e.icon||e[`z-link-icon`],"z-link-sb":e[`z-link-sb`]}),c={render:e=>n(`div`,{class:{"z-link-story":!0,"dark-bg":e.colorVariant===`z-link-inverse`}},n(`a`,{href:`zanichelli.it`,class:s(e)},e.icon?n(`z-icon`,{name:e.icon}):``,` `,e.text))},l={render:e=>n(`div`,{class:{"z-link-story":!0,"dark-bg":e.colorVariant===`z-link-inverse`}},n(`button`,{class:s(e)},e.icon?n(`z-icon`,{name:e.icon}):``,` `,e.text))},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div class={{
    "z-link-story": true,
    "dark-bg": args.colorVariant === "z-link-inverse"
  }}>
      <a href="zanichelli.it" class={getClasses(args)}>
        {args.icon ? <z-icon name={args.icon}></z-icon> : ""} {args.text}
      </a>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div class={{
    "z-link-story": true,
    "dark-bg": args.colorVariant === "z-link-inverse"
  }}>
      <button class={getClasses(args)}>
        {args.icon ? <z-icon name={args.icon}></z-icon> : ""} {args.text}
      </button>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"`z-link` class can also be used on buttons, to make them look like links.",...l.parameters?.docs?.description}}},u=[`ZLink`,`ZLinkButton`]}))();export{c as ZLink,l as ZLinkButton,u as __namedExportsOrder,o as default};