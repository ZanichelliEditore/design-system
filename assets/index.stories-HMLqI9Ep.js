import{x as t}from"./lit-element-DGXdXVoE.js";import{P as e}from"./index-C0TNZEjZ.js";import{I as S}from"./index-CudiBDUm.js";import"./index-CYiQlHSq.js";import"./index-CDR2fkjB.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-jSWaPMNY.js";import"./iframe-C8K8X7fj.js";import"./utils-DvUzZReC.js";import"./breakpoints-p3CVLX0Q.js";import"./index-CCkqG16o.js";import"./index-CO4qvHTd.js";const E={title:"ZTool",component:"z-tool",argTypes:{tooltipPosition:{options:Object.values(e),control:{type:"select"}},indicatorColor:{control:"color"},icon:{options:Object.keys(S),control:{type:"select"}}},args:{active:!1,disabled:!1,htmlAriaLabel:"Impostazioni",icon:"gear",indicatorColor:"",tooltip:"Impostazioni",tooltipPosition:e.TOP}},i={render:o=>t`<div class="tool-container">
      <z-tool
        icon=${o.icon}
        tooltip=${o.tooltip}
        tooltip-position=${o.tooltipPosition}
        .indicatorColor=${o.indicatorColor}
        html-aria-label=${o.htmlAriaLabel}
        ?active=${o.active}
        ?disabled=${o.disabled}
      ></z-tool>
    </div>`},l={args:{active:!0},render:o=>t`<div class="tool-container">
      <z-tool
        icon=${o.icon}
        tooltip=${o.tooltip}
        tooltip-position=${o.tooltipPosition}
        .indicatorColor=${o.indicatorColor}
        html-aria-label=${o.htmlAriaLabel}
        ?active=${o.active}
        ?disabled=${o.disabled}
      ></z-tool>
    </div>`},a={args:{disabled:!0},render:o=>t`<div class="tool-container">
      <z-tool
        icon=${o.icon}
        tooltip=${o.tooltip}
        tooltip-position=${o.tooltipPosition}
        .indicatorColor=${o.indicatorColor}
        html-aria-label=${o.htmlAriaLabel}
        ?active=${o.active}
        ?disabled=${o.disabled}
      ></z-tool>
    </div>`},r={render:o=>t`<div class="tool-container">
      <z-tool
        icon=${o.icon}
        tooltip=${o.tooltip}
        tooltip-position=${o.tooltipPosition}
        .indicatorColor=${o.indicatorColor}
        html-aria-label=${o.htmlAriaLabel}
        ?active=${o.active}
        ?disabled=${o.disabled}
      >
        <z-toolbar html-aria-label=${o.htmlAriaLabel}>
          <z-tool
            icon="gear"
            tooltip="Impostazioni"
          ></z-tool>
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-down"
            tooltip="Giù"
          ></z-tool>
          <z-divider orientation="vertical"></z-divider>
          <z-tool
            icon="download"
            tooltip="Scarica"
          ></z-tool>
          <z-tool
            icon="upload"
            tooltip="Carica"
          ></z-tool>
          <z-tool
            icon="copy"
            tooltip="Copia"
          ></z-tool> </z-toolbar
      ></z-tool>
    </div>`},n={args:{icon:"bg-color",indicatorColor:"#ff0000",tooltip:"Colore di sfondo"},parameters:{docs:{story:{inline:!1,height:"300px"}}},render:o=>t`<div class="tool-container">
      <z-tool
        icon=${o.icon}
        tooltip=${o.tooltip}
        tooltip-position=${o.tooltipPosition}
        .indicatorColor=${o.indicatorColor}
        html-aria-label=${o.htmlAriaLabel}
        ?active=${o.active}
        ?disabled=${o.disabled}
      >
        <z-color-picker></z-color-picker>
      </z-tool>
    </div>`};var c,s,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => html\`<div class="tool-container">
      <z-tool
        icon=\${args.icon}
        tooltip=\${args.tooltip}
        tooltip-position=\${args.tooltipPosition}
        .indicatorColor=\${args.indicatorColor}
        html-aria-label=\${args.htmlAriaLabel}
        ?active=\${args.active}
        ?disabled=\${args.disabled}
      ></z-tool>
    </div>\`
} satisfies Story`,...(d=(s=i.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var p,m,$;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    active: true
  },
  render: args => html\`<div class="tool-container">
      <z-tool
        icon=\${args.icon}
        tooltip=\${args.tooltip}
        tooltip-position=\${args.tooltipPosition}
        .indicatorColor=\${args.indicatorColor}
        html-aria-label=\${args.htmlAriaLabel}
        ?active=\${args.active}
        ?disabled=\${args.disabled}
      ></z-tool>
    </div>\`
} satisfies Story`,...($=(m=l.parameters)==null?void 0:m.docs)==null?void 0:$.source}}};var z,b,v;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => html\`<div class="tool-container">
      <z-tool
        icon=\${args.icon}
        tooltip=\${args.tooltip}
        tooltip-position=\${args.tooltipPosition}
        .indicatorColor=\${args.indicatorColor}
        html-aria-label=\${args.htmlAriaLabel}
        ?active=\${args.active}
        ?disabled=\${args.disabled}
      ></z-tool>
    </div>\`
} satisfies Story`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,C,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => html\`<div class="tool-container">
      <z-tool
        icon=\${args.icon}
        tooltip=\${args.tooltip}
        tooltip-position=\${args.tooltipPosition}
        .indicatorColor=\${args.indicatorColor}
        html-aria-label=\${args.htmlAriaLabel}
        ?active=\${args.active}
        ?disabled=\${args.disabled}
      >
        <z-toolbar html-aria-label=\${args.htmlAriaLabel}>
          <z-tool
            icon="gear"
            tooltip="Impostazioni"
          ></z-tool>
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-down"
            tooltip="Giù"
          ></z-tool>
          <z-divider orientation="vertical"></z-divider>
          <z-tool
            icon="download"
            tooltip="Scarica"
          ></z-tool>
          <z-tool
            icon="upload"
            tooltip="Carica"
          ></z-tool>
          <z-tool
            icon="copy"
            tooltip="Copia"
          ></z-tool> </z-toolbar
      ></z-tool>
    </div>\`
} satisfies Story`,...(g=(C=r.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var u,f,P;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    icon: "bg-color",
    indicatorColor: "#ff0000",
    tooltip: "Colore di sfondo"
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        height: "300px"
      }
    }
  },
  render: args => html\`<div class="tool-container">
      <z-tool
        icon=\${args.icon}
        tooltip=\${args.tooltip}
        tooltip-position=\${args.tooltipPosition}
        .indicatorColor=\${args.indicatorColor}
        html-aria-label=\${args.htmlAriaLabel}
        ?active=\${args.active}
        ?disabled=\${args.disabled}
      >
        <z-color-picker></z-color-picker>
      </z-tool>
    </div>\`
} satisfies Story`,...(P=(f=n.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const M=["Default","Active","Disabled","WithToolbar","ColorPicker"];export{l as Active,n as ColorPicker,i as Default,a as Disabled,r as WithToolbar,M as __namedExportsOrder,E as default};
