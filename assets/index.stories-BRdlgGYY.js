import{x as n}from"./lit-element-DGXdXVoE.js";import"./index-DKeQRlLO.js";import"./index-Cr-W7by1.js";import"./index-C-1WeHiO.js";import{s as F,g as p}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as G,H as D,h as d,a as W}from"./index-BZ0rSFNp.js";import{K as u}from"./index-2GKZ5e5J.js";import"./index-DN_DTmEP.js";import"./index-B5cFspp0.js";import"./index-ChyBFYPc.js";import"./utils-Di3zQexw.js";import"./breakpoints-p3CVLX0Q.js";import"./index-DrFu-skq.js";const M=`:host,*{box-sizing:border-box}:host{display:flex;width:fit-content;align-items:center;padding:0;border:var(--border-size-small) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:calc(var(--border-radius) + var(--border-size-small));box-shadow:var(--shadow-4);gap:calc(var(--space-unit) / 2)}::slotted(z-divider){height:calc(var(--space-unit) * 4.5) !important}@media (max-width: 767px){:host{--z-toolbar-columns:6;position:relative;display:grid;max-width:100%;background:repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent calc(var(--space-unit) * 5.5),
        var(--color-surface03) calc(var(--space-unit) * 5.5),
        var(--color-surface03) calc(var(--space-unit) * 5.5 + 1px)
      )
      center / calc(100% - var(--space-unit)) 100% no-repeat var(--color-surface01);gap:var(--border-size-small) calc(var(--space-unit) / 2);grid-template-columns:repeat(var(--z-toolbar-columns, auto-fill), minmax(44px, auto))}::slotted(z-divider){display:none !important}}`,_=class extends D{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.currentFocusIndex=0,this.toolItems=[]}componentDidLoad(){this.collectToolItems(),this.updateTabIndexes();let o=parseInt(getComputedStyle(this.hostElement).getPropertyValue("--z-toolbar-columns")||"6");o=this.toolItems.length<=o?this.toolItems.length:o,this.hostElement.style.setProperty("--z-toolbar-columns",o.toString())}collectToolItems(){this.toolItems=Array.from(this.hostElement.querySelectorAll("z-tool:not(:scope z-tool z-tool)"))}updateTabIndexes(){this.toolItems.forEach((o,l)=>{o.setTabIndex(l===this.currentFocusIndex?0:-1)})}focusToolAt(o,l="next"){const t=this.toolItems[o];if(t){if(this.currentFocusIndex=o,!t.disabled){t.setFocus(),this.updateTabIndexes();return}l==="next"?this.focusNextTool():this.focusPreviousTool()}}focusNextTool(){const o=(this.currentFocusIndex+1)%this.toolItems.length;this.focusToolAt(o)}focusPreviousTool(){const o=(this.currentFocusIndex-1+this.toolItems.length)%this.toolItems.length;this.focusToolAt(o,"previous")}closeSiblingSubmenusOnOpen(o){if(o.detail!==!0)return;const l=o.target.closest("z-tool");!l||!this.toolItems.includes(l)||this.toolItems.forEach(t=>{t!==l&&t.open&&(t.open=!1)})}closeSiblingTooltipsOnOpen(o){if(o.detail!==!0)return;const l=o.target;this.toolItems.includes(l)&&this.toolItems.forEach(t=>{t!==l&&t.closeTooltip()})}handleKeyDown(o){const t=o.target.closest("z-tool");if(!t||!this.toolItems.includes(t))return;const i=this.toolItems.indexOf(t);switch(i!==-1&&(this.currentFocusIndex=i),o.key){case u.ARROW_RIGHT:o.preventDefault(),this.focusNextTool();break;case u.ARROW_LEFT:o.preventDefault(),this.focusPreviousTool();break}}handleFocusIn(o){const t=o.target.closest("z-tool"),i=this.toolItems.indexOf(t);i!==-1&&i!==this.currentFocusIndex&&(this.currentFocusIndex=i,this.updateTabIndexes())}render(){return d(W,{key:"fdec4a62f1e8ff451d17643cfef4dcc87c71f43d",role:"toolbar","aria-label":this.htmlAriaLabel},d("slot",{key:"8f75a8ecebdb63c23f9fc6204c3dfb884a44f492",onSlotchange:()=>{this.collectToolItems(),this.updateTabIndexes()}}))}get hostElement(){return this}static get style(){return M}};G(_,[1,"z-toolbar",{htmlAriaLabel:[1,"html-aria-label"],currentFocusIndex:[32]},[[0,"toggleSubmenu","closeSiblingSubmenusOnOpen"],[0,"toggleTooltip","closeSiblingTooltipsOnOpen"],[0,"keydown","handleKeyDown"],[0,"focusin","handleFocusIn"]]]);const m={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZToolbar",tagName:"z-toolbar",customElement:!0,members:[{kind:"field",name:"htmlAriaLabel",type:"string",description:"Accessible label for the toolbar."}],events:[],cssProperties:[{name:"--z-toolbar-columns",description:"Number of items per row in the toolbar. Only applies on mobile viewport, when the toolbar can be displayed in a multi-row layout. Default: `6`."}]}],exports:[{kind:"js",name:"ZToolbar",declaration:{name:"ZToolbar",module:"src/components/z-toolbar/index.tsx"}},{kind:"custom-element-definition",name:"z-toolbar",declaration:{name:"ZToolbar",module:"src/components/z-toolbar/index.tsx"}}]}]};F({...p()||{},...m,modules:[...(p()||{}).modules||[],...m.modules]});const Y={title:"ZToolbar",component:"z-toolbar",args:{htmlAriaLabel:"Toolbar principale"},decorators:[o=>n`<div
        class="toolbar-container"
        @click=${l=>{const t=l.target.closest("z-tool");t&&!t.disabled&&!t.children.length&&(t.active=!t.active)}}
      >
        ${o()}
      </div>`],parameters:{docs:{description:{component:'This component mainly serves as a container for `z-tool` elements, but can also be nested inside a `z-tool` to create submenus.\n### Active state\nThe `active` state of each `z-tool` must be managed manually by the consumer. The component does not toggle `active` on click by itself. In these stories, a click listener (decorator) is applied to toggle `active` on tools without a submenu, for demonstration purposes.\n### Visual grouping with `z-divider`\nUse `<z-divider orientation="vertical">` between tools to visually separate them into groups. On tablet viewports and below, dividers are automatically hidden.\n### Mobile multiline layout with `--z-toolbar-columns`\nSet the CSS custom property `--z-toolbar-columns` on a parent element to control the number of columns in the toolbar grid. When set, the toolbar switches to a grid layout on tablet viewports and below (max-width: 1151px), wrapping tools across multiple rows with a separator line between rows.'}}}},e={render:o=>n`
    <z-toolbar html-aria-label=${o.htmlAriaLabel}>
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
  `},a={render:o=>n`
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
      ></z-tool>
    </z-toolbar>
  `},r={render:o=>n`
    <z-toolbar html-aria-label=${o.htmlAriaLabel}>
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
  `},c={render:o=>n`
    <z-toolbar html-aria-label=${o.htmlAriaLabel}>
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
  `},s={render:o=>n`
    <z-toolbar html-aria-label=${o.htmlAriaLabel}>
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
  `},z={args:{"--z-toolbar-columns":"4"},parameters:{viewport:{defaultViewport:"mobile"}},render:o=>n`
    <z-toolbar
      class="multiline-container"
      html-aria-label=${o.htmlAriaLabel}
      style="--z-toolbar-columns: ${o["--z-toolbar-columns"]};"
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
  `};var b,h,g;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
} satisfies Story`,...(g=(h=e.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,f,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var I,w,x;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(w=r.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var y,T,A;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var C,k,L;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(k=s.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var E,$,O;z.parameters={...z.parameters,docs:{...(E=z.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=($=z.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const oo=["Default","WithDividers","WithNestedToolbar","WithDisabledTool","WithActiveTool","MultilineMobile"];export{e as Default,z as MultilineMobile,s as WithActiveTool,c as WithDisabledTool,a as WithDividers,r as WithNestedToolbar,oo as __namedExportsOrder,Y as default};
