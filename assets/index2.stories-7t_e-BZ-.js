import{n as e}from"./chunk-DnJy8xQt.js";import{X as t,nt as n}from"./iframe-e9i3gKXJ.js";import{n as r,o as i,t as a}from"./storybook-utils-X33q-Ruv.js";var o,s,c,l,u,d;e((()=>{t(),i(),o={title:`ZPagination`,component:`z-pagination`,argTypes:{totalPages:{control:{type:`number`,min:1}},visiblePages:{control:{type:`number`,min:1},if:{arg:`split`,truthy:!1}},currentPage:{control:{type:`number`,min:1}},skip:{control:{type:`number`,min:1}},edges:{if:{arg:`split`,truthy:!1}},split:{control:{type:`number`,min:1}},"--z-pagination-background-color":r(),"--z-pagination-background-color-hover":r()},args:{label:``,navArrows:!0,totalPages:201,visiblePages:5,currentPage:1,goToPage:!1,skip:0,edges:!1,"--z-pagination-background-color":`var(--color-background)`,"--z-pagination-background-color-hover":`var(--color-surface01)`},render:e=>n(`z-pagination`,{...e,style:a(e)})},s={parameters:{controls:{exclude:[`split`]}}},c={args:{split:1},parameters:{controls:{exclude:[`edges`,`visible-pages`]}}},l={args:{edges:!0},parameters:{controls:{exclude:[`split`]}}},u={args:{skip:10}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["split"]
    }
  }
} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    split: 1
  },
  parameters: {
    controls: {
      exclude: ["edges", "visible-pages"]
    }
  }
} satisfies Story`,...c.parameters?.docs?.source},description:{story:"> Note that enabling `split` will shut off `visiblePages` and `edges`.",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    edges: true
  },
  parameters: {
    controls: {
      exclude: ["split"]
    }
  }
} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    skip: 10
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d=[`VisiblePages`,`Split`,`Edges`,`Skip`]}))();export{l as Edges,u as Skip,c as Split,s as VisiblePages,d as __namedExportsOrder,o as default};