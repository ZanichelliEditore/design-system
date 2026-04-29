import{r as e}from"./lit-CgIPLKVa.js";import{i as t,t as n}from"./chunk-L4EGOTBX-KlzQXQPc.js";import{a as r,n as i,o as a,r as o}from"./client-DQfH-YhT.js";import{D as s}from"./beans-CNd94UMz.js";import"./z-divider-CgfPFqSg.js";import"./z-button-ColY3FoG.js";import"./z-tool-eXgphxbV.js";var c=()=>`:host,*{box-sizing:border-box}:host{display:flex;width:fit-content;align-items:center;padding:0;border:var(--border-size-small) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:calc(var(--border-radius) + var(--border-size-small));box-shadow:var(--shadow-4);gap:calc(var(--space-unit) / 2)}::slotted(z-divider){height:calc(var(--space-unit) * 4.5) !important}@media (max-width: 767px){:host{--z-toolbar-columns:6;position:relative;display:grid;max-width:100%;background:repeating-linear-gradient(         to bottom,         transparent 0,         transparent calc(var(--space-unit) * 5.5),         var(--color-surface03) calc(var(--space-unit) * 5.5),         var(--color-surface03) calc(var(--space-unit) * 5.5 + 1px)       )       center / calc(100% - var(--space-unit)) 100% no-repeat var(--color-surface01);gap:var(--border-size-small) calc(var(--space-unit) / 2);grid-template-columns:repeat(var(--z-toolbar-columns, auto-fill), minmax(44px, auto))}::slotted(z-divider){display:none !important}}`;r(class extends i{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.currentFocusIndex=0,this.toolItems=[]}componentDidLoad(){this.collectToolItems(),this.updateTabIndexes();let e=parseInt(getComputedStyle(this.hostElement).getPropertyValue(`--z-toolbar-columns`)||`6`);e=this.toolItems.length<=e?this.toolItems.length:e,this.hostElement.style.setProperty(`--z-toolbar-columns`,e.toString())}collectToolItems(){this.toolItems=Array.from(this.hostElement.querySelectorAll(`z-tool:not(:scope z-tool z-tool)`))}updateTabIndexes(){this.toolItems.forEach((e,t)=>{e.setTabIndex(t===this.currentFocusIndex?0:-1)})}focusToolAt(e,t=`next`){let n=this.toolItems[e];if(n){if(this.currentFocusIndex=e,!n.disabled){n.setFocus(),this.updateTabIndexes();return}t===`next`?this.focusNextTool():this.focusPreviousTool()}}focusNextTool(){let e=(this.currentFocusIndex+1)%this.toolItems.length;this.focusToolAt(e)}focusPreviousTool(){let e=(this.currentFocusIndex-1+this.toolItems.length)%this.toolItems.length;this.focusToolAt(e,`previous`)}closeSiblingSubmenusOnOpen(e){if(e.detail!==!0)return;let t=e.target.closest(`z-tool`);!t||!this.toolItems.includes(t)||this.toolItems.forEach(e=>{e!==t&&e.open&&(e.open=!1)})}closeSiblingTooltipsOnOpen(e){if(e.detail!==!0)return;let t=e.target;this.toolItems.includes(t)&&this.toolItems.forEach(e=>{e!==t&&e.closeTooltip()})}handleKeyDown(e){let t=e.target.closest(`z-tool`);if(!t||!this.toolItems.includes(t))return;let n=this.toolItems.indexOf(t);switch(n!==-1&&(this.currentFocusIndex=n),e.key){case s.ARROW_RIGHT:e.preventDefault(),this.focusNextTool();break;case s.ARROW_LEFT:e.preventDefault(),this.focusPreviousTool();break}}handleFocusIn(e){let t=e.target.closest(`z-tool`),n=this.toolItems.indexOf(t);n!==-1&&n!==this.currentFocusIndex&&(this.currentFocusIndex=n,this.updateTabIndexes())}render(){return a(o,{key:`e7f4127e81ad400abaf2851238d9fff7194e6ca6`,role:`toolbar`,"aria-label":this.htmlAriaLabel},a(`slot`,{key:`fa6e6baf517bdc0c03579f9991c4651a49655ad8`,onSlotchange:()=>{this.collectToolItems(),this.updateTabIndexes()}}))}get hostElement(){return this}static get style(){return c()}},[257,`z-toolbar`,{htmlAriaLabel:[1,`html-aria-label`],currentFocusIndex:[32]},[[0,`toggleSubmenu`,`closeSiblingSubmenusOnOpen`],[0,`toggleTooltip`,`closeSiblingTooltipsOnOpen`],[0,`keydown`,`handleKeyDown`],[0,`focusin`,`handleFocusIn`]]]);var l={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZToolbar`,tagName:`z-toolbar`,customElement:!0,members:[{kind:`field`,name:`htmlAriaLabel`,type:`string`,description:`Accessible label for the toolbar.`}],events:[],cssProperties:[{name:`--z-toolbar-columns`,description:"Number of items per row in the toolbar. Only applies on mobile viewport, when the toolbar can be displayed in a multi-row layout. Default: `6`."}]}],exports:[{kind:`js`,name:`ZToolbar`,declaration:{name:`ZToolbar`,module:`src/components/z-toolbar/index.tsx`}},{kind:`custom-element-definition`,name:`z-toolbar`,declaration:{name:`ZToolbar`,module:`src/components/z-toolbar/index.tsx`}}]}]};t({...n()||{},...l,modules:[...(n()||{}).modules||[],...l.modules]});var u={title:`ZToolbar`,component:`z-toolbar`,args:{htmlAriaLabel:`Toolbar principale`},decorators:[t=>e`<div
        class="toolbar-container"
        @click=${e=>{let t=e.target.closest(`z-tool`);t&&!t.disabled&&!t.children.length&&(t.active=!t.active)}}
      >
        ${t()}
      </div>`],parameters:{docs:{description:{component:'This component mainly serves as a container for `z-tool` elements, but can also be nested inside a `z-tool` to create submenus.\n### Active state\nThe `active` state of each `z-tool` must be managed manually by the consumer. The component does not toggle `active` on click by itself. In these stories, a click listener (decorator) is applied to toggle `active` on tools without a submenu, for demonstration purposes.\n### Visual grouping with `z-divider`\nUse `<z-divider orientation="vertical">` between tools to visually separate them into groups. On tablet viewports and below, dividers are automatically hidden.\n### Mobile multiline layout with `--z-toolbar-columns`\nSet the CSS custom property `--z-toolbar-columns` on a parent element to control the number of columns in the toolbar grid. When set, the toolbar switches to a grid layout on tablet viewports and below (max-width: 1151px), wrapping tools across multiple rows with a separator line between rows.'}}}},d={render:t=>e`
    <z-toolbar html-aria-label=${t.htmlAriaLabel}>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica"
      ></z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
    </z-toolbar>
  `},f={render:t=>e`
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
      ></z-tool>
    </z-toolbar>
  `},p={render:t=>e`
    <z-toolbar html-aria-label=${t.htmlAriaLabel}>
      <z-tool
        icon="bg-color"
        tooltip="Scegli un colore"
      >
        <z-color-picker></z-color-picker>
      </z-tool>
      <z-tool
        icon="plus"
        tooltip="Apri sotto-toolbar"
      >
        <z-toolbar html-aria-label="Sotto-toolbar">
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
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="bg-color"
            tooltip="Scegli un colore"
          >
            <z-color-picker></z-color-picker>
          </z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool
        icon="chevron-up"
        tooltip="Su"
      ></z-tool>
      <z-tool
        icon="chevron-up"
        tooltip="Su"
      ></z-tool>
      <z-divider orientation="vertical"></z-divider>
      <z-tool
        icon="download"
        tooltip="Scarica"
      ></z-tool>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      >
        <z-toolbar html-aria-label="Sotto-toolbar">
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
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      >
        <z-toolbar html-aria-label="Sotto-toolbar">
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
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
    </z-toolbar>
  `},m={render:t=>e`
    <z-toolbar html-aria-label=${t.htmlAriaLabel}>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica"
        disabled
      ></z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
    </z-toolbar>
  `},h={render:t=>e`
    <z-toolbar html-aria-label=${t.htmlAriaLabel}>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
        active
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica"
      ></z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
    </z-toolbar>
  `},g={args:{"--z-toolbar-columns":`4`},parameters:{viewport:{defaultViewport:`mobile`}},render:t=>e`
    <z-toolbar
      class="multiline-container"
      html-aria-label=${t.htmlAriaLabel}
      style="--z-toolbar-columns: ${t[`--z-toolbar-columns`]};"
    >
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica"
      ></z-tool>
      <z-divider orientation="vertical"></z-divider>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
      <z-tool
        icon="plus"
        tooltip="Aggiungi"
      >
        <z-toolbar html-aria-label="Sotto-toolbar aggiungi">
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-down"
            tooltip="Giù"
          ></z-tool>
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-down"
            tooltip="Giù"
          ></z-tool>
        </z-toolbar>
      </z-tool>
      <z-divider orientation="vertical"></z-divider>
      <z-tool
        icon="gear"
        tooltip="Impostazioni 2"
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica 2"
      ></z-tool>
      <z-tool
        icon="plus"
        tooltip="Aggiungi"
      >
        <z-toolbar html-aria-label="Sotto-toolbar aggiungi">
          <z-tool
            icon="copy"
            tooltip="Copia"
          ></z-tool>
          <z-tool
            icon="edit"
            tooltip="Modifica"
          ></z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica 2"
      ></z-tool>
      <z-tool
        icon="copy"
        tooltip="Copia 2"
      ></z-tool>
      <z-tool
        icon="gear"
        tooltip="Impostazioni 3"
        disabled
      ></z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica 3"
      ></z-tool>
    </z-toolbar>
  `};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-toolbar html-aria-label=\${args.htmlAriaLabel}>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica"
      ></z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
    </z-toolbar>
  \`
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => html\`
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
      ></z-tool>
    </z-toolbar>
  \`
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-toolbar html-aria-label=\${args.htmlAriaLabel}>
      <z-tool
        icon="bg-color"
        tooltip="Scegli un colore"
      >
        <z-color-picker></z-color-picker>
      </z-tool>
      <z-tool
        icon="plus"
        tooltip="Apri sotto-toolbar"
      >
        <z-toolbar html-aria-label="Sotto-toolbar">
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
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="bg-color"
            tooltip="Scegli un colore"
          >
            <z-color-picker></z-color-picker>
          </z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool
        icon="chevron-up"
        tooltip="Su"
      ></z-tool>
      <z-tool
        icon="chevron-up"
        tooltip="Su"
      ></z-tool>
      <z-divider orientation="vertical"></z-divider>
      <z-tool
        icon="download"
        tooltip="Scarica"
      ></z-tool>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      >
        <z-toolbar html-aria-label="Sotto-toolbar">
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
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      >
        <z-toolbar html-aria-label="Sotto-toolbar">
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
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
    </z-toolbar>
  \`
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-toolbar html-aria-label=\${args.htmlAriaLabel}>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica"
        disabled
      ></z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
    </z-toolbar>
  \`
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-toolbar html-aria-label=\${args.htmlAriaLabel}>
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
        active
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica"
      ></z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
    </z-toolbar>
  \`
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "--z-toolbar-columns": "4"
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  },
  render: args => html\`
    <z-toolbar
      class="multiline-container"
      html-aria-label=\${args.htmlAriaLabel}
      style="--z-toolbar-columns: \${args["--z-toolbar-columns"]};"
    >
      <z-tool
        icon="gear"
        tooltip="Impostazioni"
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica"
      ></z-tool>
      <z-divider orientation="vertical"></z-divider>
      <z-tool
        icon="upload"
        tooltip="Carica"
      ></z-tool>
      <z-tool
        icon="plus"
        tooltip="Aggiungi"
      >
        <z-toolbar html-aria-label="Sotto-toolbar aggiungi">
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-down"
            tooltip="Giù"
          ></z-tool>
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-down"
            tooltip="Giù"
          ></z-tool>
        </z-toolbar>
      </z-tool>
      <z-divider orientation="vertical"></z-divider>
      <z-tool
        icon="gear"
        tooltip="Impostazioni 2"
      ></z-tool>
      <z-tool
        icon="download"
        tooltip="Scarica 2"
      ></z-tool>
      <z-tool
        icon="plus"
        tooltip="Aggiungi"
      >
        <z-toolbar html-aria-label="Sotto-toolbar aggiungi">
          <z-tool
            icon="copy"
            tooltip="Copia"
          ></z-tool>
          <z-tool
            icon="edit"
            tooltip="Modifica"
          ></z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica 2"
      ></z-tool>
      <z-tool
        icon="copy"
        tooltip="Copia 2"
      ></z-tool>
      <z-tool
        icon="gear"
        tooltip="Impostazioni 3"
        disabled
      ></z-tool>
      <z-tool
        icon="upload"
        tooltip="Carica 3"
      ></z-tool>
    </z-toolbar>
  \`
} satisfies Story`,...g.parameters?.docs?.source}}};var _=[`Default`,`WithDividers`,`WithNestedToolbar`,`WithDisabledTool`,`WithActiveTool`,`MultilineMobile`];export{d as Default,g as MultilineMobile,h as WithActiveTool,m as WithDisabledTool,f as WithDividers,p as WithNestedToolbar,_ as __namedExportsOrder,u as default};