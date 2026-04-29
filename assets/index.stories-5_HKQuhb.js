import{r as e}from"./lit-CgIPLKVa.js";import{A as t,M as n,b as r,j as i}from"./beans-CNd94UMz.js";import{t as a}from"./storybook-utils-DtpJwcUL.js";import"./z-list-element-CBl8wSgV.js";import"./z-list-BTBTMFG3.js";import"./z-list-group-DgbZ3Qf6.js";var o={title:`ZList/ZListGroup`,component:`z-list-group`,argTypes:{size:{control:{type:`inline-radio`},options:Object.values(i)},dividerType:{control:{type:`inline-radio`},options:Object.values(t)},dividerSize:{control:{type:`inline-radio`},options:Object.values(r)},dividerColor:a(),listType:{control:{type:`inline-radio`},options:Object.values(n)}},args:{size:i.SMALL,dividerType:t.HEADER,dividerSize:r.SMALL,dividerColor:`gray200`,listType:n.NONE,role:`group`}},s={render:t=>e`
    <z-list>
      <z-list-group
        size=${t.size}
        divider-type=${t.dividerType}
        divider-size=${t.dividerSize}
        divider-color=${t.dividerColor}
        list-type=${t.listType}
        role=${t.role}
      >
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          size=${t.size}
          list-type=${t.listType}
          divider-type=${t.dividerType}
          divider-size=${t.dividerSize}
          divider-color=${t.dividerColor}
          >Elemento 1</z-list-element
        >
        <z-list-element
          size=${t.size}
          list-type=${t.listType}
          divider-type=${t.dividerType}
          divider-size=${t.dividerSize}
          divider-color=${t.dividerColor}
          >Elemento 2</z-list-element
        >
        <z-list-element
          size=${t.size}
          list-type=${t.listType}
          divider-type=${t.dividerType}
          divider-size=${t.dividerSize}
          divider-color=${t.dividerColor}
          >Elemento 3</z-list-element
        >
      </z-list-group>
      <z-list-group
        size=${t.size}
        divider-type=${t.dividerType}
        divider-size=${t.dividerSize}
        divider-color=${t.dividerColor}
        list-type=${t.listType}
        role=${t.role}
      >
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          size=${t.size}
          list-type=${t.listType}
          divider-type=${t.dividerType}
          divider-size=${t.dividerSize}
          divider-color=${t.dividerColor}
          >Elemento 1</z-list-element
        >
        <z-list-element
          size=${t.size}
          list-type=${t.listType}
          divider-type=${t.dividerType}
          divider-size=${t.dividerSize}
          divider-color=${t.dividerColor}
          >Elemento 2</z-list-element
        >
        <z-list-element
          size=${t.size}
          list-type=${t.listType}
          divider-type=${t.dividerType}
          divider-size=${t.dividerSize}
          divider-color=${t.dividerColor}
          >Elemento 3</z-list-element
        >
      </z-list-group>
    </z-list>
  `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-list>
      <z-list-group
        size=\${args.size}
        divider-type=\${args.dividerType}
        divider-size=\${args.dividerSize}
        divider-color=\${args.dividerColor}
        list-type=\${args.listType}
        role=\${args.role}
      >
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          size=\${args.size}
          list-type=\${args.listType}
          divider-type=\${args.dividerType}
          divider-size=\${args.dividerSize}
          divider-color=\${args.dividerColor}
          >Elemento 1</z-list-element
        >
        <z-list-element
          size=\${args.size}
          list-type=\${args.listType}
          divider-type=\${args.dividerType}
          divider-size=\${args.dividerSize}
          divider-color=\${args.dividerColor}
          >Elemento 2</z-list-element
        >
        <z-list-element
          size=\${args.size}
          list-type=\${args.listType}
          divider-type=\${args.dividerType}
          divider-size=\${args.dividerSize}
          divider-color=\${args.dividerColor}
          >Elemento 3</z-list-element
        >
      </z-list-group>
      <z-list-group
        size=\${args.size}
        divider-type=\${args.dividerType}
        divider-size=\${args.dividerSize}
        divider-color=\${args.dividerColor}
        list-type=\${args.listType}
        role=\${args.role}
      >
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          size=\${args.size}
          list-type=\${args.listType}
          divider-type=\${args.dividerType}
          divider-size=\${args.dividerSize}
          divider-color=\${args.dividerColor}
          >Elemento 1</z-list-element
        >
        <z-list-element
          size=\${args.size}
          list-type=\${args.listType}
          divider-type=\${args.dividerType}
          divider-size=\${args.dividerSize}
          divider-color=\${args.dividerColor}
          >Elemento 2</z-list-element
        >
        <z-list-element
          size=\${args.size}
          list-type=\${args.listType}
          divider-type=\${args.dividerType}
          divider-size=\${args.dividerSize}
          divider-color=\${args.dividerColor}
          >Elemento 3</z-list-element
        >
      </z-list-group>
    </z-list>
  \`
}`,...s.parameters?.docs?.source}}};var c=[`Default`];export{s as Default,c as __namedExportsOrder,o as default};