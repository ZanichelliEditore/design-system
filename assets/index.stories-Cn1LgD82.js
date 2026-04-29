import{r as e}from"./lit-CgIPLKVa.js";import{i as t}from"./z-icon-BmF0hk_o.js";import{R as n}from"./beans-CNd94UMz.js";import"./z-color-picker-CN7rq2wh.js";import"./z-tool-eXgphxbV.js";var r={title:`ZTool`,component:`z-tool`,argTypes:{tooltipPosition:{options:Object.values(n),control:{type:`select`}},indicatorColor:{control:`color`},icon:{options:Object.keys(t),control:{type:`select`}}},args:{active:!1,disabled:!1,htmlAriaLabel:`Impostazioni`,icon:`gear`,indicatorColor:``,tooltip:`Impostazioni`,tooltipPosition:n.TOP}},i={render:t=>e`<div class="tool-container">
      <z-tool
        icon=${t.icon}
        tooltip=${t.tooltip}
        tooltip-position=${t.tooltipPosition}
        .indicatorColor=${t.indicatorColor}
        html-aria-label=${t.htmlAriaLabel}
        ?active=${t.active}
        ?disabled=${t.disabled}
      ></z-tool>
    </div>`},a={args:{active:!0},render:t=>e`<div class="tool-container">
      <z-tool
        icon=${t.icon}
        tooltip=${t.tooltip}
        tooltip-position=${t.tooltipPosition}
        .indicatorColor=${t.indicatorColor}
        html-aria-label=${t.htmlAriaLabel}
        ?active=${t.active}
        ?disabled=${t.disabled}
      ></z-tool>
    </div>`},o={args:{disabled:!0},render:t=>e`<div class="tool-container">
      <z-tool
        icon=${t.icon}
        tooltip=${t.tooltip}
        tooltip-position=${t.tooltipPosition}
        .indicatorColor=${t.indicatorColor}
        html-aria-label=${t.htmlAriaLabel}
        ?active=${t.active}
        ?disabled=${t.disabled}
      ></z-tool>
    </div>`},s={render:t=>e`<div class="tool-container">
      <z-tool
        icon=${t.icon}
        tooltip=${t.tooltip}
        tooltip-position=${t.tooltipPosition}
        .indicatorColor=${t.indicatorColor}
        html-aria-label=${t.htmlAriaLabel}
        ?active=${t.active}
        ?disabled=${t.disabled}
      >
        <z-toolbar html-aria-label=${t.htmlAriaLabel}>
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
    </div>`},c={args:{icon:`bg-color`,indicatorColor:`#ff0000`,tooltip:`Colore di sfondo`},parameters:{docs:{story:{inline:!1,height:`300px`}}},render:t=>e`<div class="tool-container">
      <z-tool
        icon=${t.icon}
        tooltip=${t.tooltip}
        tooltip-position=${t.tooltipPosition}
        .indicatorColor=${t.indicatorColor}
        html-aria-label=${t.htmlAriaLabel}
        ?active=${t.active}
        ?disabled=${t.disabled}
      >
        <z-color-picker></z-color-picker>
      </z-tool>
    </div>`};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};var l=[`Default`,`Active`,`Disabled`,`WithToolbar`,`ColorPicker`];export{a as Active,c as ColorPicker,i as Default,o as Disabled,s as WithToolbar,l as __namedExportsOrder,r as default};