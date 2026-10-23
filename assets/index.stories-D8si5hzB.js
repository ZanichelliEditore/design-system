import{n as e}from"./chunk-DnJy8xQt.js";import{dt as t,ft as n,pt as r}from"./iframe-iOyjIY3n.js";import{D as i,K as a,O as o}from"./beans-zckFsBZy.js";import{n as s,o as c,t as l}from"./storybook-utils-CXFqIWGM.js";import{t as u}from"./internal-tluxuoMU.js";var d=e((()=>{})),f,p,m,h,g,_,v;e((()=>{t(),u(),a(),c(),d(),f={title:`ZNavigationTabs`,component:`z-navigation-tabs`,argTypes:{orientation:{options:Object.values(i),control:{type:`inline-radio`}},"--z-navigation-tabs-nav-buttons-bg":s(),"--z-navigation-tabs-nav-buttons-fg":s()},args:{"--z-navigation-tabs-nav-buttons-bg":``,"--z-navigation-tabs-nav-buttons-fg":``}},p=e=>{let t=e.target.querySelectorAll(`[role="tab"]`)?.[e.detail]?.getAttribute(`aria-controls`),n=Array.from(document.querySelectorAll(`[role="tabpanel"]`));n.forEach(e=>e.hidden=!0);let r=n.find(e=>e.id===t);r&&(r.hidden=!1)},m=()=>r(n,null,r(`button`,null,r(`z-icon`,{name:`house`}),r(`span`,null,`Home`)),r(`button`,null,r(`z-icon`,{name:`map`}),r(`span`,null,`Maps`)),r(`button`,{disabled:!0},r(`z-icon`,{name:`download`}),r(`span`,null,`Download`)),r(`button`,null,r(`z-icon`,{name:`user-avatar`}),r(`span`,null,`Users`)),r(`button`,null,r(`z-icon`,{name:`artist`}),r(`span`,null,`Artisti`)),r(`a`,{href:`https://www.google.com`,target:`_blank`,title:`Vai a Google`},r(`z-icon`,{name:`arrow-quad-north-east`}),r(`span`,null,`Link esterno`))),h={argTypes:{size:{options:Object.values(o),control:{type:`inline-radio`}}},args:{orientation:i.HORIZONTAL,size:o.BIG},parameters:{controls:{exclude:[`orientation`]}},render:e=>r(`z-navigation-tabs`,{...e,style:l(e),onSelected:p},m())},g={args:{orientation:i.VERTICAL},parameters:{controls:{exclude:[`orientation`]}},render:e=>r(`z-navigation-tabs`,{...e,onSelected:p,style:l(e)},m())},_={args:{orientation:i.HORIZONTAL},render:e=>r(`div`,{class:{"panels-story-wrapper":!0,[e.orientation]:!0}},r(`z-navigation-tabs`,{...e,style:l(e),size:o.BIG,selectedTab:0,onSelected:p},r(`button`,{"aria-controls":`panel-1`,"aria-label":`home`,id:`tab-1`},r(`z-icon`,{name:`house`}),r(`span`,null,`Home`)),r(`button`,{"aria-controls":`panel-2`,"aria-label":`info`,id:`tab-2`},r(`z-icon`,{name:`info`}),r(`span`,null,`Info`))),r(`div`,{class:`panel`,id:`panel-1`,role:`tabpanel`,"aria-labelledby":`tab-1`},r(`span`,null,`Pannello 1`),r(`span`,null,r(`z-icon`,{name:`house-filled`}))),r(`div`,{class:`panel`,id:`panel-2`,role:`tabpanel`,"aria-labelledby":`tab-2`,hidden:!0},r(`span`,null,`Pannello 2`),r(`span`,null,r(`z-icon`,{name:`info-filled`}))))},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  argTypes: {
    size: {
      options: Object.values(NavigationTabsSize),
      control: {
        type: "inline-radio"
      }
    }
  },
  args: {
    orientation: NavigationTabsOrientation.HORIZONTAL,
    size: NavigationTabsSize.BIG
  },
  parameters: {
    controls: {
      exclude: ["orientation"]
    }
  },
  render: args => <z-navigation-tabs {...args} style={extractCSSVars(args)} onSelected={onTabSelected}>
      {tabsTemplate()}
    </z-navigation-tabs>
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: NavigationTabsOrientation.VERTICAL
  },
  parameters: {
    controls: {
      exclude: ["orientation"]
    }
  },
  render: args => <z-navigation-tabs {...args} onSelected={onTabSelected} style={extractCSSVars(args)}>
      {tabsTemplate()}
    </z-navigation-tabs>
} satisfies Story`,...g.parameters?.docs?.source},description:{story:"When orientation is set to `VERTICAL`, the text of slotted tabs is hidden by default.\nBe sure to put an icon inside the tab to have something visible and don't forget to put an `aria-label` to provide a description for screen readers.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: NavigationTabsOrientation.HORIZONTAL
  },
  render: args => <div class={{
    "panels-story-wrapper": true,
    [args.orientation]: true
  }}>
      <z-navigation-tabs {...args} style={extractCSSVars(args)} size={NavigationTabsSize.BIG} selectedTab={0} onSelected={onTabSelected}>
        <button aria-controls="panel-1" aria-label="home" id="tab-1">
          <z-icon name="house" />
          <span>Home</span>
        </button>
        <button aria-controls="panel-2" aria-label="info" id="tab-2">
          <z-icon name="info" />
          <span>Info</span>
        </button>
      </z-navigation-tabs>
      <div class="panel" id="panel-1" role="tabpanel" aria-labelledby="tab-1">
        <span>Pannello 1</span>
        <span>
          <z-icon name="house-filled" />
        </span>
      </div>
      <div class="panel" id="panel-2" role="tabpanel" aria-labelledby="tab-2" hidden>
        <span>Pannello 2</span>
        <span>
          <z-icon name="info-filled" />
        </span>
      </div>
    </div>
} satisfies Story`,..._.parameters?.docs?.source},description:{story:"This story provides an example of how to handle a `ZNavigationTabs` with switchable `tabpanel`s, which is the most common use for the navigation tabs.\nEach panel must have the `tabpanel` role and the `aria-labelledby` attribute, referencing the tab that controls it (unless a different label is provided using `aria-label`).\nSimilarly, the `aria-controls` attribute must be set on the tabs with the `id` of the controlled panel.\n\nFor more details check the documentation: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab\\_role",..._.parameters?.docs?.description}}},v=[`Horizontal`,`Vertical`,`Tabpanels`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  argTypes: {
    size: {
      options: Object.values(NavigationTabsSize),
      control: {
        type: "inline-radio"
      }
    }
  },
  args: {
    orientation: NavigationTabsOrientation.HORIZONTAL,
    size: NavigationTabsSize.BIG
  },
  parameters: {
    controls: {
      exclude: ["orientation"]
    }
  },
  render: args => <z-navigation-tabs {...args} style={extractCSSVars(args)} onSelected={onTabSelected}>
      {tabsTemplate()}
    </z-navigation-tabs>
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: NavigationTabsOrientation.VERTICAL
  },
  parameters: {
    controls: {
      exclude: ["orientation"]
    }
  },
  render: args => <z-navigation-tabs {...args} onSelected={onTabSelected} style={extractCSSVars(args)}>
      {tabsTemplate()}
    </z-navigation-tabs>
} satisfies Story`,...g.parameters?.docs?.source},description:{story:"When orientation is set to `VERTICAL`, the text of slotted tabs is hidden by default.\nBe sure to put an icon inside the tab to have something visible and don't forget to put an `aria-label` to provide a description for screen readers.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: NavigationTabsOrientation.HORIZONTAL
  },
  render: args => <div class={{
    "panels-story-wrapper": true,
    [args.orientation]: true
  }}>
      <z-navigation-tabs {...args} style={extractCSSVars(args)} size={NavigationTabsSize.BIG} selectedTab={0} onSelected={onTabSelected}>
        <button aria-controls="panel-1" aria-label="home" id="tab-1">
          <z-icon name="house" />
          <span>Home</span>
        </button>
        <button aria-controls="panel-2" aria-label="info" id="tab-2">
          <z-icon name="info" />
          <span>Info</span>
        </button>
      </z-navigation-tabs>
      <div class="panel" id="panel-1" role="tabpanel" aria-labelledby="tab-1">
        <span>Pannello 1</span>
        <span>
          <z-icon name="house-filled" />
        </span>
      </div>
      <div class="panel" id="panel-2" role="tabpanel" aria-labelledby="tab-2" hidden>
        <span>Pannello 2</span>
        <span>
          <z-icon name="info-filled" />
        </span>
      </div>
    </div>
} satisfies Story`,..._.parameters?.docs?.source},description:{story:"This story provides an example of how to handle a `ZNavigationTabs` with switchable `tabpanel`s, which is the most common use for the navigation tabs.\nEach panel must have the `tabpanel` role and the `aria-labelledby` attribute, referencing the tab that controls it (unless a different label is provided using `aria-label`).\nSimilarly, the `aria-controls` attribute must be set on the tabs with the `id` of the controlled panel.\n\nFor more details check the documentation: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab\\_role",..._.parameters?.docs?.description}}}}))();export{h as Horizontal,_ as Tabpanels,g as Vertical,v as __namedExportsOrder,f as default};