import{r as e}from"./lit-CgIPLKVa.js";import{m as t}from"./beans-CNd94UMz.js";import"./z-color-picker-Dy4qFbiR.js";var n={title:`ZColorPicker`,component:`z-color-picker`,argTypes:{lng:{control:{type:`inline-radio`},options:[`it`,`en`]},selectedColor:{control:{type:`select`,labels:Object.fromEntries(Object.entries(t).map(([e,t])=>[e,t.it]))},options:Object.keys(t)}},args:{lng:`it`,htmlAriaLabel:`Seleziona un colore`,selectedColor:void 0,disableTransparent:!1}},r={render:t=>e`<z-color-picker
      .selectedColor=${t.selectedColor}
      .disableTransparent=${t.disableTransparent}
    ></z-color-picker>`};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => html\`<z-color-picker
      .selectedColor=\${args.selectedColor}
      .disableTransparent=\${args.disableTransparent}
    ></z-color-picker>\`
} satisfies Story`,...r.parameters?.docs?.source}}};var i=[`Default`];export{r as Default,i as __namedExportsOrder,n as default};