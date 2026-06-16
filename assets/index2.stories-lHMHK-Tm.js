import{n as e}from"./chunk-DnJy8xQt.js";import{X as t,nt as n}from"./iframe-L9IszzLp.js";import{n as r,t as i}from"./z-menu-section-Brd0RO2V.js";var a,o,s,c;e((()=>{t(),r(),a={title:`ZMenu/ZMenuSection`,component:i,args:{active:!1}},o={render:e=>n(`z-menu-section`,e,n(`h3`,null,`Label`),n(`a`,{href:``,slot:`section`},`Item 1`),n(`a`,{href:``,slot:`section`},`Item 2`),n(`a`,{href:``,slot:`section`,active:!0},`Item 3 - active`))},s={render:e=>n(`z-menu-section`,e,n(`h3`,null,`Label`))},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <z-menu-section {...args}>
      <h3>Label</h3>
      <a href="" slot="section">
        Item 1
      </a>
      <a href="" slot="section">
        Item 2
      </a>
      <a href="" slot="section"
    //@ts-expect-error - active is not typed as a valid prop for the anchor element, but it is supported by the component
    active={true}>
        Item 3 - active
      </a>
    </z-menu-section>
} satisfies Story`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <z-menu-section {...args}>
      <h3>Label</h3>
    </z-menu-section>
} satisfies Story`,...s.parameters?.docs?.source}}},c=[`WithItems`,`WithoutItems`]}))();export{o as WithItems,s as WithoutItems,c as __namedExportsOrder,a as default};