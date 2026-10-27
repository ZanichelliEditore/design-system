import{n as e}from"./chunk-DnJy8xQt.js";import{dt as t,pt as n}from"./iframe-izO1_eE9.js";import{E as r,K as i,T as a,_ as o,g as s,v as c,w as l}from"./beans-zckFsBZy.js";import{o as u,r as d}from"./storybook-utils-CXFqIWGM.js";var f,p,m;e((()=>{t(),i(),u(),f={title:`ZList/ZListElement`,component:`z-list-element`,argTypes:{alignButton:{control:{type:`inline-radio`},options:Object.values(o)},dividerColor:{control:{type:`select`},options:d().map(e=>e.replace(`--`,``))},dividerType:{control:{type:`inline-radio`},options:Object.values(l)},dividerSize:{control:{type:`inline-radio`},options:Object.values(s)},expandableStyle:{control:{type:`inline-radio`},options:Object.values(c)},size:{control:{type:`inline-radio`},options:Object.values(a)},color:{control:{type:`select`},options:d().map(e=>e.replace(`--`,``))},listType:{control:{type:`inline-radio`},options:Object.values(r)}},args:{alignButton:o.LEFT,clickable:!1,dividerColor:`color-surface03`,dividerType:l.NONE,dividerSize:s.SMALL,expandable:!1,expandableStyle:c.ACCORDION,listElementId:0,size:a.MEDIUM,color:`color-default-text`,disabled:!1,listElementPosition:`0`,listType:r.NONE}},p={render:e=>n(`z-list`,null,n(`z-list-element`,e,n(`span`,null,`Elemento 1`),n(`span`,{slot:`inner-content`},`Inner content`)),n(`z-list-element`,e,`Elemento 2`),n(`z-list-element`,e,`Elemento 3`))},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <z-list>
      <z-list-element {...args}>
        <span>Elemento 1</span>
        <span slot="inner-content">Inner content</span>
      </z-list-element>
      <z-list-element {...args}>Elemento 2</z-list-element>
      <z-list-element {...args}>Elemento 3</z-list-element>
    </z-list>
} satisfies Story`,...p.parameters?.docs?.source}}},m=[`Default`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <z-list>
      <z-list-element {...args}>
        <span>Elemento 1</span>
        <span slot="inner-content">Inner content</span>
      </z-list-element>
      <z-list-element {...args}>Elemento 2</z-list-element>
      <z-list-element {...args}>Elemento 3</z-list-element>
    </z-list>
} satisfies Story`,...p.parameters?.docs?.source}}}}))();export{p as Default,m as __namedExportsOrder,f as default};