import{n as e}from"./chunk-DnJy8xQt.js";import{dt as t,pt as n}from"./iframe-iOyjIY3n.js";var r,i,a,o;e((()=>{t(),r={title:`ZMenu/ZMenuSection`,component:`z-menu-section`,args:{active:!1}},i={render:e=>n(`z-menu-section`,e,n(`h3`,null,`Label`),n(`a`,{href:``,slot:`section`},`Item 1`),n(`a`,{href:``,slot:`section`},`Item 2`),n(`a`,{href:``,slot:`section`,active:!0},`Item 3 - active`))},a={render:e=>n(`z-menu-section`,e,n(`h3`,null,`Label`))},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <z-menu-section {...args}>
      <h3>Label</h3>
    </z-menu-section>
} satisfies Story`,...a.parameters?.docs?.source}}},o=[`WithItems`,`WithoutItems`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <z-menu-section {...args}>
      <h3>Label</h3>
    </z-menu-section>
} satisfies Story`,...a.parameters?.docs?.source}}}}))();export{i as WithItems,a as WithoutItems,o as __namedExportsOrder,r as default};