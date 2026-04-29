import{r as e}from"./lit-CgIPLKVa.js";import{M as t,j as n}from"./beans-CNd94UMz.js";import"./z-list-element-CBl8wSgV.js";import"./z-list-BTBTMFG3.js";import"./z-list-group-DgbZ3Qf6.js";var r={title:`ZList/ZList`,component:`z-list`,argTypes:{size:{control:{type:`select`},options:Object.values(n)},listType:{control:{type:`select`},options:Object.values(t)}},args:{size:n.MEDIUM,listType:t.NONE},render:t=>e`
    <z-list
      .listType=${t.listType}
      size=${t.size}
    >
      <z-list-element
        .listType=${t.listType}
        size=${t.size}
        >Elemento 1</z-list-element
      >
      <z-list-element
        .listType=${t.listType}
        size=${t.size}
        >Elemento 2</z-list-element
      >
      <z-list-element
        .listType=${t.listType}
        size=${t.size}
        >Elemento 3</z-list-element
      >
    </z-list>
  `},i={},a={render:t=>e`<z-list>
      <z-list-group divider-type="header">
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          .listType=${t.listType}
          size=${t.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          .listType=${t.listType}
          size=${t.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          .listType=${t.listType}
          size=${t.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
      <z-list-group divider-type="header">
        <div slot="header-title">Gruppo 2</div>
        <z-list-element
          .listType=${t.listType}
          size=${t.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          .listType=${t.listType}
          size=${t.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          .listType=${t.listType}
          size=${t.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
    </z-list>`},o={render:t=>e`<z-list>
      <z-list-group divider-type="element">
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          .listType=${t.listType}
          size=${t.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          .listType=${t.listType}
          size=${t.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          .listType=${t.listType}
          size=${t.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
      <z-list-group divider-type="element">
        <div slot="header-title">Gruppo 2</div>
        <z-list-element
          .listType=${t.listType}
          size=${t.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          .listType=${t.listType}
          size=${t.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          .listType=${t.listType}
          size=${t.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
    </z-list>`},s={render:()=>e`<z-list>
      <z-list-group>
        <z-list-element clickable>Elemento 1</z-list-element>
        <z-list-element clickable>Elemento 2</z-list-element>
        <z-list-element clickable>Elemento 3</z-list-element>
      </z-list-group>
    </z-list>`},c={render:()=>e`<z-list size="large">
      <z-list-group divider-type="element">
        <z-list-element
          expandable
          align-button="left"
          expandable-style="accordion"
          ><span>Elemento 1</span><span slot="inner-content">INNER CONTENT 1 BUTTON LEFT</span></z-list-element
        >
        <z-list-element
          expandable
          align-button="right"
          expandable-style="menu"
          ><span>Elemento 2</span><span slot="inner-content">INNER CONTENT 2</span></z-list-element
        >
        <z-list-element
          expandable
          align-button="right"
          expandable-style="menu"
          ><span>Elemento 3</span><span slot="inner-content">INNER CONTENT 3</span></z-list-element
        >
      </z-list-group>
    </z-list>`},l={parameters:{controls:{exclude:[`size`,`listType`]}},args:{listType:t.UNORDERED}},u={parameters:{controls:{exclude:[`size`,`listType`]}},args:{listType:t.ORDERED}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{} satisfies Story`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => html\`<z-list>
      <z-list-group divider-type="header">
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          .listType=\${args.listType}
          size=\${args.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          .listType=\${args.listType}
          size=\${args.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          .listType=\${args.listType}
          size=\${args.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
      <z-list-group divider-type="header">
        <div slot="header-title">Gruppo 2</div>
        <z-list-element
          .listType=\${args.listType}
          size=\${args.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          .listType=\${args.listType}
          size=\${args.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          .listType=\${args.listType}
          size=\${args.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
    </z-list>\`
} satisfies Story`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => html\`<z-list>
      <z-list-group divider-type="element">
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          .listType=\${args.listType}
          size=\${args.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          .listType=\${args.listType}
          size=\${args.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          .listType=\${args.listType}
          size=\${args.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
      <z-list-group divider-type="element">
        <div slot="header-title">Gruppo 2</div>
        <z-list-element
          .listType=\${args.listType}
          size=\${args.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          .listType=\${args.listType}
          size=\${args.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          .listType=\${args.listType}
          size=\${args.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
    </z-list>\`
} satisfies Story`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`<z-list>
      <z-list-group>
        <z-list-element clickable>Elemento 1</z-list-element>
        <z-list-element clickable>Elemento 2</z-list-element>
        <z-list-element clickable>Elemento 3</z-list-element>
      </z-list-group>
    </z-list>\`
} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<z-list size="large">
      <z-list-group divider-type="element">
        <z-list-element
          expandable
          align-button="left"
          expandable-style="accordion"
          ><span>Elemento 1</span><span slot="inner-content">INNER CONTENT 1 BUTTON LEFT</span></z-list-element
        >
        <z-list-element
          expandable
          align-button="right"
          expandable-style="menu"
          ><span>Elemento 2</span><span slot="inner-content">INNER CONTENT 2</span></z-list-element
        >
        <z-list-element
          expandable
          align-button="right"
          expandable-style="menu"
          ><span>Elemento 3</span><span slot="inner-content">INNER CONTENT 3</span></z-list-element
        >
      </z-list-group>
    </z-list>\`
} satisfies Story`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["size", "listType"]
    }
  },
  args: {
    listType: ListType.UNORDERED
  }
} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["size", "listType"]
    }
  },
  args: {
    listType: ListType.ORDERED
  }
} satisfies Story`,...u.parameters?.docs?.source}}};var d=[`Default`,`HeaderDivider`,`ElementDivider`,`ClickableElements`,`ExpandableElements`,`UnorderedIndex`,`OrderedIndex`];export{s as ClickableElements,i as Default,o as ElementDivider,c as ExpandableElements,a as HeaderDivider,u as OrderedIndex,l as UnorderedIndex,d as __namedExportsOrder,r as default};