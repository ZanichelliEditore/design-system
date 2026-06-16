import{n as e}from"./chunk-DnJy8xQt.js";import{X as t,nt as n}from"./iframe-L9IszzLp.js";import{g as r,q as i}from"./beans-GvJywrye.js";var a=e((()=>{})),o,s,c,l,u,d,f,p;e((()=>{t(),i(),a(),o={title:`ZToolbar`,component:`z-toolbar`,args:{htmlAriaLabel:`Toolbar principale`},decorators:[e=>n(`div`,{class:`toolbar-container`,onClick:e=>{let t=e.target.closest(`z-tool`);t&&!t.disabled&&!t.children.length&&(t.active=!t.active)}},e())],parameters:{docs:{description:{component:'This component mainly serves as a container for `z-tool` elements, but can also be nested inside a `z-tool` to create submenus.\n### Active state\nThe `active` state of each `z-tool` must be managed manually by the consumer. The component does not toggle `active` on click by itself. In these stories, a click listener (decorator) is applied to toggle `active` on tools without a submenu, for demonstration purposes.\n### Visual grouping with `z-divider`\nUse `<z-divider orientation="vertical">` between tools to visually separate them into groups. On tablet viewports and below, dividers are automatically hidden.\n### Mobile multiline layout with `--z-toolbar-columns`\nSet the CSS custom property `--z-toolbar-columns` on a parent element to control the number of columns in the toolbar grid. When set, the toolbar switches to a grid layout on tablet viewports and below (max-width: 1151px), wrapping tools across multiple rows with a separator line between rows.'}}}},s={render:e=>n(`z-toolbar`,{htmlAriaLabel:e.htmlAriaLabel},n(`z-tool`,{icon:`gear`,tooltip:`Impostazioni`}),n(`z-tool`,{icon:`download`,tooltip:`Scarica`}),n(`z-tool`,{icon:`upload`,tooltip:`Carica`}))},c={render:e=>n(`z-toolbar`,{htmlAriaLabel:e.htmlAriaLabel},n(`z-tool`,{icon:`gear`,tooltip:`Impostazioni`}),n(`z-tool`,{icon:`chevron-up`,tooltip:`Su`}),n(`z-tool`,{icon:`chevron-down`,tooltip:`Giù`}),n(`z-divider`,{orientation:r.VERTICAL}),n(`z-tool`,{icon:`download`,tooltip:`Scarica`}),n(`z-tool`,{icon:`upload`,tooltip:`Carica`}),n(`z-tool`,{icon:`copy`,tooltip:`Copia`}))},l={render:e=>n(`z-toolbar`,{htmlAriaLabel:e.htmlAriaLabel},n(`z-tool`,{icon:`bg-color`,tooltip:`Scegli un colore`},n(`z-color-picker`,null)),n(`z-tool`,{icon:`plus`,tooltip:`Apri sotto-toolbar`},n(`z-toolbar`,{htmlAriaLabel:`Sotto-toolbar`},n(`z-tool`,{icon:`chevron-up`,tooltip:`Su`}),n(`z-tool`,{icon:`chevron-down`,tooltip:`Giù`}),n(`z-divider`,{orientation:r.VERTICAL}),n(`z-tool`,{icon:`chevron-up`,tooltip:`Su`}),n(`z-tool`,{icon:`bg-color`,tooltip:`Scegli un colore`},n(`z-color-picker`,null)))),n(`z-tool`,{icon:`chevron-up`,tooltip:`Su`}),n(`z-tool`,{icon:`chevron-up`,tooltip:`Su`}),n(`z-divider`,{orientation:r.VERTICAL}),n(`z-tool`,{icon:`download`,tooltip:`Scarica`}),n(`z-tool`,{icon:`gear`,tooltip:`Impostazioni`},n(`z-toolbar`,{htmlAriaLabel:`Sotto-toolbar`},n(`z-tool`,{icon:`chevron-up`,tooltip:`Su`}),n(`z-tool`,{icon:`chevron-down`,tooltip:`Giù`}),n(`z-divider`,{orientation:r.VERTICAL}),n(`z-tool`,{icon:`chevron-up`,tooltip:`Su`}))),n(`z-tool`,{icon:`gear`,tooltip:`Impostazioni`},n(`z-toolbar`,{htmlAriaLabel:`Sotto-toolbar`},n(`z-tool`,{icon:`chevron-up`,tooltip:`Su`}),n(`z-tool`,{icon:`chevron-down`,tooltip:`Giù`}),n(`z-divider`,{orientation:r.VERTICAL}),n(`z-tool`,{icon:`chevron-up`,tooltip:`Su`}))),n(`z-tool`,{icon:`upload`,tooltip:`Carica`}))},u={render:e=>n(`z-toolbar`,{htmlAriaLabel:e.htmlAriaLabel},n(`z-tool`,{icon:`gear`,tooltip:`Impostazioni`}),n(`z-tool`,{icon:`download`,tooltip:`Scarica`,disabled:!0}),n(`z-tool`,{icon:`upload`,tooltip:`Carica`}))},d={render:e=>n(`z-toolbar`,{htmlAriaLabel:e.htmlAriaLabel},n(`z-tool`,{icon:`gear`,tooltip:`Impostazioni`,active:!0}),n(`z-tool`,{icon:`download`,tooltip:`Scarica`}),n(`z-tool`,{icon:`upload`,tooltip:`Carica`}))},f={args:{"--z-toolbar-columns":`4`},render:e=>n(`z-toolbar`,{class:`multiline-container`,htmlAriaLabel:e.htmlAriaLabel,style:{"--z-toolbar-columns":e[`--z-toolbar-columns`]}},n(`z-tool`,{icon:`gear`,tooltip:`Impostazioni`}),n(`z-tool`,{icon:`download`,tooltip:`Scarica`}),n(`z-divider`,{orientation:r.VERTICAL}),n(`z-tool`,{icon:`upload`,tooltip:`Carica`}),n(`z-tool`,{icon:`plus`,tooltip:`Aggiungi`},n(`z-toolbar`,{htmlAriaLabel:`Sotto-toolbar aggiungi`},n(`z-tool`,{icon:`chevron-up`,tooltip:`Su`}),n(`z-tool`,{icon:`chevron-down`,tooltip:`Giù`}),n(`z-tool`,{icon:`chevron-up`,tooltip:`Su`}),n(`z-tool`,{icon:`chevron-up`,tooltip:`Su`}),n(`z-tool`,{icon:`chevron-down`,tooltip:`Giù`}))),n(`z-divider`,{orientation:r.VERTICAL}),n(`z-tool`,{icon:`gear`,tooltip:`Impostazioni 2`}),n(`z-tool`,{icon:`download`,tooltip:`Scarica 2`}),n(`z-tool`,{icon:`plus`,tooltip:`Aggiungi`},n(`z-toolbar`,{htmlAriaLabel:`Sotto-toolbar aggiungi`},n(`z-tool`,{icon:`copy`,tooltip:`Copia`}),n(`z-tool`,{icon:`edit`,tooltip:`Modifica`}))),n(`z-tool`,{icon:`upload`,tooltip:`Carica 2`}),n(`z-tool`,{icon:`copy`,tooltip:`Copia 2`}),n(`z-tool`,{icon:`gear`,tooltip:`Impostazioni 3`,disabled:!0}),n(`z-tool`,{icon:`upload`,tooltip:`Carica 3`})),globals:{viewport:{value:`mobile`,isRotated:!1}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <z-toolbar htmlAriaLabel={args.htmlAriaLabel}>
      <z-tool icon="gear" tooltip="Impostazioni"></z-tool>
      <z-tool icon="download" tooltip="Scarica"></z-tool>
      <z-tool icon="upload" tooltip="Carica"></z-tool>
    </z-toolbar>
} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <z-toolbar htmlAriaLabel={args.htmlAriaLabel}>
      <z-tool icon="gear" tooltip="Impostazioni"></z-tool>
      <z-tool icon="chevron-up" tooltip="Su"></z-tool>
      <z-tool icon="chevron-down" tooltip="Giù"></z-tool>
      <z-divider orientation={DividerOrientation.VERTICAL}></z-divider>
      <z-tool icon="download" tooltip="Scarica"></z-tool>
      <z-tool icon="upload" tooltip="Carica"></z-tool>
      <z-tool icon="copy" tooltip="Copia"></z-tool>
    </z-toolbar>
} satisfies Story`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <z-toolbar htmlAriaLabel={args.htmlAriaLabel}>
      <z-tool icon="bg-color" tooltip="Scegli un colore">
        <z-color-picker></z-color-picker>
      </z-tool>
      <z-tool icon="plus" tooltip="Apri sotto-toolbar">
        <z-toolbar htmlAriaLabel="Sotto-toolbar">
          <z-tool icon="chevron-up" tooltip="Su"></z-tool>
          <z-tool icon="chevron-down" tooltip="Giù"></z-tool>
          <z-divider orientation={DividerOrientation.VERTICAL}></z-divider>
          <z-tool icon="chevron-up" tooltip="Su"></z-tool>
          <z-tool icon="bg-color" tooltip="Scegli un colore">
            <z-color-picker></z-color-picker>
          </z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool icon="chevron-up" tooltip="Su"></z-tool>
      <z-tool icon="chevron-up" tooltip="Su"></z-tool>
      <z-divider orientation={DividerOrientation.VERTICAL}></z-divider>
      <z-tool icon="download" tooltip="Scarica"></z-tool>
      <z-tool icon="gear" tooltip="Impostazioni">
        <z-toolbar htmlAriaLabel="Sotto-toolbar">
          <z-tool icon="chevron-up" tooltip="Su"></z-tool>
          <z-tool icon="chevron-down" tooltip="Giù"></z-tool>
          <z-divider orientation={DividerOrientation.VERTICAL}></z-divider>
          <z-tool icon="chevron-up" tooltip="Su"></z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool icon="gear" tooltip="Impostazioni">
        <z-toolbar htmlAriaLabel="Sotto-toolbar">
          <z-tool icon="chevron-up" tooltip="Su"></z-tool>
          <z-tool icon="chevron-down" tooltip="Giù"></z-tool>
          <z-divider orientation={DividerOrientation.VERTICAL}></z-divider>
          <z-tool icon="chevron-up" tooltip="Su"></z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool icon="upload" tooltip="Carica"></z-tool>
    </z-toolbar>
} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <z-toolbar htmlAriaLabel={args.htmlAriaLabel}>
      <z-tool icon="gear" tooltip="Impostazioni"></z-tool>
      <z-tool icon="download" tooltip="Scarica" disabled></z-tool>
      <z-tool icon="upload" tooltip="Carica"></z-tool>
    </z-toolbar>
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <z-toolbar htmlAriaLabel={args.htmlAriaLabel}>
      <z-tool icon="gear" tooltip="Impostazioni" active></z-tool>
      <z-tool icon="download" tooltip="Scarica"></z-tool>
      <z-tool icon="upload" tooltip="Carica"></z-tool>
    </z-toolbar>
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "--z-toolbar-columns": "4"
  },
  render: args => <z-toolbar class="multiline-container" htmlAriaLabel={args.htmlAriaLabel} style={{
    "--z-toolbar-columns": args["--z-toolbar-columns"]
  }}>
      <z-tool icon="gear" tooltip="Impostazioni"></z-tool>
      <z-tool icon="download" tooltip="Scarica"></z-tool>
      <z-divider orientation={DividerOrientation.VERTICAL}></z-divider>
      <z-tool icon="upload" tooltip="Carica"></z-tool>
      <z-tool icon="plus" tooltip="Aggiungi">
        <z-toolbar htmlAriaLabel="Sotto-toolbar aggiungi">
          <z-tool icon="chevron-up" tooltip="Su"></z-tool>
          <z-tool icon="chevron-down" tooltip="Giù"></z-tool>
          <z-tool icon="chevron-up" tooltip="Su"></z-tool>
          <z-tool icon="chevron-up" tooltip="Su"></z-tool>
          <z-tool icon="chevron-down" tooltip="Giù"></z-tool>
        </z-toolbar>
      </z-tool>
      <z-divider orientation={DividerOrientation.VERTICAL}></z-divider>
      <z-tool icon="gear" tooltip="Impostazioni 2"></z-tool>
      <z-tool icon="download" tooltip="Scarica 2"></z-tool>
      <z-tool icon="plus" tooltip="Aggiungi">
        <z-toolbar htmlAriaLabel="Sotto-toolbar aggiungi">
          <z-tool icon="copy" tooltip="Copia"></z-tool>
          <z-tool icon="edit" tooltip="Modifica"></z-tool>
        </z-toolbar>
      </z-tool>
      <z-tool icon="upload" tooltip="Carica 2"></z-tool>
      <z-tool icon="copy" tooltip="Copia 2"></z-tool>
      <z-tool icon="gear" tooltip="Impostazioni 3" disabled></z-tool>
      <z-tool icon="upload" tooltip="Carica 3"></z-tool>
    </z-toolbar>,
  globals: {
    viewport: {
      value: "mobile",
      isRotated: false
    }
  }
} satisfies Story`,...f.parameters?.docs?.source}}},p=[`Default`,`WithDividers`,`WithNestedToolbar`,`WithDisabledTool`,`WithActiveTool`,`MultilineMobile`]}))();export{s as Default,f as MultilineMobile,d as WithActiveTool,u as WithDisabledTool,c as WithDividers,l as WithNestedToolbar,p as __namedExportsOrder,o as default};