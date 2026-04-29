import{r as e}from"./lit-CgIPLKVa.js";import"./z-stepper-item-CtZcoaan.js";var t={title:`ZStepper/ZStepperItem`,component:`z-stepper-item`,args:{pressed:!1,disabled:!1,checked:!1,index:1,text:`First Item`}},n={render:t=>e`<z-stepper-item
      index=${t.index}
      ?pressed=${t.pressed}
      ?disabled=${t.disabled}
      ?checked=${t.checked}
      >${t.text}</z-stepper-item
    >`},r={args:{pressed:!0},render:t=>e`<z-stepper-item
      index=${t.index}
      ?pressed=${t.pressed}
      ?disabled=${t.disabled}
      ?checked=${t.checked}
      >${t.text}</z-stepper-item
    >`},i={args:{disabled:!0},render:t=>e`<z-stepper-item
      index=${t.index}
      ?pressed=${t.pressed}
      ?disabled=${t.disabled}
      ?checked=${t.checked}
      >${t.text}</z-stepper-item
    >`},a={args:{checked:!0},render:t=>e`<z-stepper-item
      index=${t.index}
      ?pressed=${t.pressed}
      ?disabled=${t.disabled}
      ?checked=${t.checked}
      >${t.text}</z-stepper-item
    >`};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => html\`<z-stepper-item
      index=\${args.index}
      ?pressed=\${args.pressed}
      ?disabled=\${args.disabled}
      ?checked=\${args.checked}
      >\${args.text}</z-stepper-item
    >\`
}`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    pressed: true
  },
  render: args => html\`<z-stepper-item
      index=\${args.index}
      ?pressed=\${args.pressed}
      ?disabled=\${args.disabled}
      ?checked=\${args.checked}
      >\${args.text}</z-stepper-item
    >\`
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => html\`<z-stepper-item
      index=\${args.index}
      ?pressed=\${args.pressed}
      ?disabled=\${args.disabled}
      ?checked=\${args.checked}
      >\${args.text}</z-stepper-item
    >\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  },
  render: args => html\`<z-stepper-item
      index=\${args.index}
      ?pressed=\${args.pressed}
      ?disabled=\${args.disabled}
      ?checked=\${args.checked}
      >\${args.text}</z-stepper-item
    >\`
}`,...a.parameters?.docs?.source}}};var o=[`Default`,`Pressed`,`Disabled`,`Checked`];export{a as Checked,n as Default,i as Disabled,r as Pressed,o as __namedExportsOrder,t as default};