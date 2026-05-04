import{r as e}from"./lit-CgIPLKVa.js";import{i as t,t as n}from"./chunk-L4EGOTBX-KlzQXQPc.js";import{a as r,i,n as a,o,r as s}from"./client-C9JD6DZT.js";import"./z-icon-0wx6NWiZ.js";import{F as c,N as l,P as u}from"./beans-CNd94UMz.js";import{t as d}from"./storybook-utils-DtpJwcUL.js";import{t as f}from"./style-map-CH-uIwiZ.js";var p=()=>`z-navigation-tabs{position:relative;z-index:0;display:flex;overflow:hidden;flex-direction:row;font-family:var(--font-family-sans);font-weight:var(--font-rg)}z-navigation-tabs,z-navigation-tabs *{box-sizing:border-box}z-navigation-tabs>nav::-webkit-scrollbar{display:none}z-navigation-tabs .navigation-button{position:absolute;z-index:1;display:flex;align-items:center;justify-content:center;padding:0;border:none;margin:0;background-color:var(--z-navigation-tabs-nav-buttons-bg, var(--color-surface01));border-radius:var(--border-no-radius);box-shadow:0 0 4px 1px var(--shadow-color-base);cursor:pointer;fill:var(--z-navigation-tabs-nav-buttons-fg, var(--color-primary01));outline:none}z-navigation-tabs .navigation-button:disabled{display:none}z-navigation-tabs>nav{z-index:0;display:flex;overflow:auto;align-items:center;justify-content:flex-start;scroll-behavior:smooth;scrollbar-width:none}z-navigation-tabs[orientation="horizontal"]>nav{width:100%}z-navigation-tabs[orientation="horizontal"] .navigation-button{top:0;width:calc(var(--space-unit) * 4);height:100%}z-navigation-tabs[orientation="horizontal"] .navigation-button:first-child{left:0}z-navigation-tabs[orientation="horizontal"] .navigation-button:last-child{right:0}z-navigation-tabs[orientation="vertical"]{width:fit-content;flex-direction:column}z-navigation-tabs[orientation="vertical"]>nav{height:100%;flex-direction:column;align-items:stretch}z-navigation-tabs[orientation="vertical"] .navigation-button{left:0;width:100%;height:calc(var(--space-unit) * 4)}z-navigation-tabs[orientation="vertical"] .navigation-button:first-child{top:0}z-navigation-tabs[orientation="vertical"] .navigation-button:last-child{bottom:0}z-navigation-tabs[size="small"][orientation="vertical"] .navigation-button{height:calc(var(--space-unit) * 4)}z-navigation-tabs>nav>*{position:relative;z-index:0;display:inline-flex;width:auto;align-items:center;justify-content:center;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 5);border:none;margin:0;background-color:unset;border-radius:var(--border-no-radius);color:var(--color-primary01);cursor:pointer;fill:currentcolor;font-family:var(--font-family-sans);font-size:inherit;gap:var(--space-unit);letter-spacing:inherit;line-height:inherit;outline:none;text-align:center;white-space:nowrap}z-navigation-tabs>nav>a{text-decoration:none}z-navigation-tabs>nav>*:focus:focus-visible{z-index:1;box-shadow:inset 0 0 2px 2px var(--shadow-color-base)}z-navigation-tabs>nav>:not([disabled]):hover{background-color:var(--color-background)}z-navigation-tabs>nav>button[disabled]{color:var(--color-disabled03);cursor:not-allowed;fill:currentcolor;pointer-events:all}z-navigation-tabs>nav>:not([disabled]):hover,nav>[aria-selected="true"]{color:var(--color-hover-primary);fill:currentcolor}z-navigation-tabs>nav>:not([disabled]):hover::after,nav>[aria-selected="true"]::after{position:absolute;background-color:var(--color-hover-primary);content:""}z-navigation-tabs[orientation="horizontal"]>nav>:not([disabled]):hover::after,z-navigation-tabs[orientation="horizontal"]>nav>[aria-selected="true"]::after{bottom:0;left:0;width:100%;height:var(--border-size-large)}z-navigation-tabs>nav>* z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);display:flex;margin:0}z-navigation-tabs[size="small"][orientation="horizontal"]>nav>*{padding:var(--space-unit) calc(var(--space-unit) * 2)}z-navigation-tabs[size="small"][orientation="horizontal"]>nav>:not([disabled]):hover::after,z-navigation-tabs[size="small"][orientation="horizontal"]>nav>[aria-selected="true"]::after{height:var(--border-size-medium)}z-navigation-tabs[size="small"]:not([orientation="vertical"])>nav>* z-icon{--z-icon-width:14px;--z-icon-height:14px}z-navigation-tabs[orientation="vertical"]>nav>*{padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 2)}z-navigation-tabs[orientation="vertical"]>nav>*>:not(z-icon){display:none}z-navigation-tabs[orientation="vertical"]>nav>:not([disabled]):hover::after,z-navigation-tabs[orientation="vertical"]>nav>[aria-selected="true"]::after{top:0;right:0;width:var(--border-size-large);height:100%}`;r(class extends a{constructor(e){super(),e!==!1&&this.__registerHost(),this.selected=i(this,`selected`,7),this.ariaLabel=``,this.orientation=u.HORIZONTAL,this.size=c.BIG,this.selectedTab=void 0,this.focusedTab=void 0}get direction(){return this.orientation==u.HORIZONTAL?`Left`:`Top`}get dimension(){return this.orientation==u.HORIZONTAL?`Width`:`Height`}get tabs(){return Array.from(this.nav.children)}scrollToTab(e){let t=e.parentElement;t&&setTimeout(()=>{let n=this.orientation===u.HORIZONTAL,r=t.getBoundingClientRect(),i=e.getBoundingClientRect(),a=n?i.left-r.left:i.top-r.top,o=n?t.clientWidth:t.clientHeight,s=n?e.clientWidth:e.clientHeight,c=a-o/2+s/2;t.scrollTo({[n?`left`:`top`]:t[n?`scrollLeft`:`scrollTop`]+c,behavior:`smooth`})},100)}navigateBackwards(){this.nav.scrollBy({[this.direction.toLowerCase()]:0-this.nav[`client${this.dimension}`]/2,behavior:`smooth`})}navigateForward(){this.nav.scrollBy({[this.direction.toLowerCase()]:this.nav[`scroll${this.direction}`]+this.nav[`client${this.dimension}`]/2,behavior:`smooth`})}isArrowNavigation(e){return Object.values(l).includes(e.key)}checkScrollVisible(){this.nav&&(this.canNavigate=this.nav[`scroll${this.dimension}`]>this.nav[`client${this.dimension}`])}checkScrollEnabled(){this.nav&&(this.canNavigateNext=this.nav[`scroll${this.direction}`]+this.nav[`client${this.dimension}`]<this.nav[`scroll${this.dimension}`],this.canNavigatePrev=this.nav[`scroll${this.direction}`]>0)}onTabSelected(){this.tabs.forEach((e,t)=>{let n=e.querySelector(`z-icon`),r=n?.name.replace(`-filled`,``);if(t!==this.selectedTab){e.setAttribute(`aria-selected`,`false`),e.tabIndex=-1,n&&(n.name=r);return}n&&(n.name=`${r}-filled`),e.setAttribute(`aria-selected`,`true`)}),this.selected.emit(this.selectedTab),this.selectedTab!==void 0&&this.scrollToTab(this.tabs[this.selectedTab])}handleTabClick(e){let t=e.target.closest(`[role='tab']`);this.tabs.some(e=>e.contains(t))&&(this.selectedTab=this.tabs.indexOf(t))}onTabFocusIn(e){let t=this.tabs.findIndex(t=>t.contains(e.target));t!==-1&&(this.selectedTab!==void 0&&(this.tabs[this.selectedTab].tabIndex=-1),this.focusedTab=t,this.tabs[this.focusedTab].tabIndex=-1,this.scrollToTab(this.tabs[this.focusedTab]))}navigateThroughTabs(e){if(!this.tabs.some(t=>t.contains(e.target))||!this.isArrowNavigation(e))return!0;if(e.preventDefault(),e.key===l.RIGHT&&this.orientation==u.HORIZONTAL||e.key===l.DOWN&&this.orientation==u.VERTICAL?(this.focusedTab++,this.focusedTab>=this.tabs.length&&(this.focusedTab=0)):(e.key===l.LEFT&&this.orientation==u.HORIZONTAL||e.key===l.UP&&this.orientation==u.VERTICAL)&&(this.focusedTab--,this.focusedTab<0&&(this.focusedTab=this.tabs.length-1)),this.tabs[this.focusedTab].hasAttribute(`disabled`)&&this.tabs[this.focusedTab].getAttribute(`disabled`)!==`false`)return this.navigateThroughTabs(e);this.tabs[this.focusedTab].focus(),this.scrollToTab(this.tabs[this.focusedTab])}onTabFocusOut(e){this.tabs.some(t=>t.contains(e.relatedTarget))||(this.tabs[this.selectedTab??0].tabIndex=0,this.focusedTab=void 0)}connectedCallback(){this.resizeObserver=new ResizeObserver(()=>this.checkScrollVisible())}componentDidLoad(){this.tabs.forEach(e=>{e.setAttribute(`role`,`tab`),e.tabIndex=-1});let e=this.selectedTab??this.tabs.findIndex(e=>e.ariaSelected===`true`);e===-1?this.tabs[0].tabIndex=0:(this.selectedTab=e,this.tabs[e].tabIndex=0,this.onTabSelected()),this.resizeObserver.observe(this.nav)}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.disconnect()}render(){return o(s,{key:`f14f35fa5b0877f746d455a11e3424490e54c2c5`,class:{"interactive-2":this.size===c.SMALL,"interactive-1":this.size!==c.SMALL},scrollable:this.canNavigate},o(`button`,{key:`36bd7faaf517ad9a7ba7fbffdc6f2f1b71dc5667`,class:`navigation-button`,onClick:this.navigateBackwards.bind(this),tabIndex:-1,disabled:!this.canNavigatePrev,"aria-label":`Mostra elementi precedenti`,hidden:!this.canNavigate},o(`z-icon`,{key:`c498e465a694ef5d73bda2cc887c798740064935`,name:this.orientation===u.HORIZONTAL?`chevron-left`:`chevron-up`,width:16,height:16})),o(`nav`,{key:`ea2157923676411c959c762486f7695ba90f363f`,role:`tablist`,"aria-label":this.ariaLabel,ref:e=>this.nav=e??this.nav,onScroll:this.checkScrollEnabled.bind(this),"aria-orientation":this.orientation},o(`slot`,{key:`599474b1592c46679a299689406e2091933d5ddb`})),o(`button`,{key:`4fd97815d92e1af7cefe43536d4833cea4f4dc74`,class:`navigation-button`,onClick:this.navigateForward.bind(this),tabIndex:-1,disabled:!this.canNavigateNext,"aria-label":`Mostra elementi successivi`,hidden:!this.canNavigate},o(`z-icon`,{key:`b55c2b43a0e656a2a06c4623d160ad211ae8b029`,name:this.orientation===u.HORIZONTAL?`chevron-right`:`chevron-down`,width:16,height:16})))}get host(){return this}static get watchers(){return{canNavigate:[{checkScrollEnabled:0}],selectedTab:[{onTabSelected:0}]}}static get style(){return p()}},[260,`z-navigation-tabs`,{ariaLabel:[1,`aria-label`],orientation:[520],size:[520],selectedTab:[1026,`selected-tab`],canNavigate:[32],canNavigatePrev:[32],canNavigateNext:[32]},[[0,`click`,`handleTabClick`],[0,`focusin`,`onTabFocusIn`],[0,`keydown`,`navigateThroughTabs`],[0,`focusout`,`onTabFocusOut`]],{canNavigate:[{checkScrollEnabled:0}],selectedTab:[{onTabSelected:0}]}]);var m={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZNavigationTabs`,tagName:`z-navigation-tabs`,customElement:!0,members:[{kind:`field`,name:`ariaLabel`,type:`string`,description:"Set `aria-label` attribute to the internal `<nav>` element with `tablist` role.",default:`""`},{kind:`field`,name:`orientation`,type:`any`,description:`Navigation tabs orientation.`,default:`NavigationTabsOrientation.HORIZONTAL`},{kind:`field`,name:`size`,type:`any`,description:`Navigation tabs size.`,default:`NavigationTabsSize.BIG`},{kind:`field`,name:`selectedTab`,type:`number`,description:"Index of the selected tab.\nUseful to programmatically select a tab.\nThe tab can also be selected by setting the `aria-selected` attribute to `true` on the desired tab.",default:`undefined`}],events:[{kind:`event`,name:`selected`,description:"Emitted when the selected tab changes.\nContains the index of the new selected tab in the `detail` of the event."}],cssProperties:[{name:`--z-navigation-tabs-nav-buttons-bg`,description:`Navigation buttons background color.`},{name:`--z-navigation-tabs-nav-buttons-fg`,description:`Navigation buttons foreground color.`}],slots:[{name:`-`,description:"Main slot. Use `<button>` or `<a>` tags as children."}]}],exports:[{kind:`js`,name:`ZNavigationTabs`,declaration:{name:`ZNavigationTabs`,module:`src/components/z-navigation-tabs/index.tsx`}},{kind:`custom-element-definition`,name:`z-navigation-tabs`,declaration:{name:`ZNavigationTabs`,module:`src/components/z-navigation-tabs/index.tsx`}}]}]};t({...n()||{},...m,modules:[...(n()||{}).modules||[],...m.modules]});var h={title:`ZNavigationTabs`,component:`z-navigation-tabs`,argTypes:{orientation:{options:Object.values(u),control:{type:`inline-radio`}},"--z-navigation-tabs-nav-buttons-bg":d(),"--z-navigation-tabs-nav-buttons-fg":d()},args:{"--z-navigation-tabs-nav-buttons-bg":void 0,"--z-navigation-tabs-nav-buttons-fg":void 0}};document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`z-navigation-tabs`);e?.addEventListener(`selected`,({detail:t})=>{let n=e.querySelectorAll(`[role="tab"]`)?.[t]?.getAttribute(`aria-controls`),r=Array.from(document.querySelectorAll(`[role="tabpanel"]`));r.forEach(e=>e.hidden=!0);let i=r.find(e=>e.id===n);i&&(i.hidden=!1)})});var g=()=>e`<button>
      <z-icon name="house"></z-icon>
      <span>Home</span>
    </button>
    <button>
      <z-icon name="map"></z-icon>
      <span>Maps</span>
    </button>
    <button disabled>
      <z-icon name="download"></z-icon>
      <span>Download</span>
    </button>
    <button>
      <z-icon name="user-avatar"></z-icon>
      <span>Users</span>
    </button>
    <button>
      <z-icon name="artist"></z-icon>
      <span>Artisti</span>
    </button>
    <a
      href="https://www.google.com"
      target="_blank"
      title="Vai a Google"
    >
      <z-icon name="arrow-quad-north-east"></z-icon>
      <span>Link esterno</span>
    </a>`,_={argTypes:{size:{options:Object.values(c),control:{type:`inline-radio`}}},args:{orientation:u.HORIZONTAL,size:c.BIG,ariaLabel:``},parameters:{controls:{exclude:[`orientation`]}},render:t=>e`
    <z-navigation-tabs
      orientation=${t.orientation}
      size=${t.size}
      .ariaLabel=${t.ariaLabel}
      style=${f({"--z-navigation-tabs-nav-buttons-bg":t[`--z-navigation-tabs-nav-buttons-bg`],"--z-navigation-tabs-nav-buttons-fg":t[`--z-navigation-tabs-nav-buttons-fg`]})}
    >
      ${g()}
    </z-navigation-tabs>
  `},v={args:{orientation:u.VERTICAL,ariaLabel:``},parameters:{controls:{exclude:[`orientation`]}},render:t=>e`
    <z-navigation-tabs
      orientation=${t.orientation}
      .ariaLabel=${t.ariaLabel}
      style=${f({"--z-navigation-tabs-nav-buttons-bg":t[`--z-navigation-tabs-nav-buttons-bg`],"--z-navigation-tabs-nav-buttons-fg":t[`--z-navigation-tabs-nav-buttons-fg`]})}
    >
      ${g()}
    </z-navigation-tabs>
  `},y={args:{ariaLabel:``,orientation:u.HORIZONTAL},render:t=>e`
    <div class="panels-story-wrapper ${t.orientation}">
      <z-navigation-tabs
        orientation=${t.orientation}
        size=${c.BIG}
        .ariaLabel=${t.ariaLabel}
        .selectedTab=${0}
        style=${f({"--z-navigation-tabs-nav-buttons-bg":t[`--z-navigation-tabs-nav-buttons-bg`],"--z-navigation-tabs-nav-buttons-fg":t[`--z-navigation-tabs-nav-buttons-fg`]})}
      >
        <button
          aria-controls="panel-1"
          aria-label="home"
          id="tab-1"
        >
          <z-icon name="house" />
          <span>Home</span>
        </button>
        <button
          aria-controls="panel-2"
          aria-label="info"
          id="tab-2"
        >
          <z-icon name="info" />
          <span>Info</span>
        </button>
      </z-navigation-tabs>
      <div
        class="panel"
        id="panel-1"
        role="tabpanel"
        aria-labelledby="tab-1"
      >
        <span>Pannello 1</span>
        <span><z-icon name="house-filled" /></span>
      </div>
      <div
        class="panel"
        id="panel-2"
        role="tabpanel"
        aria-labelledby="tab-2"
        hidden
      >
        <span>Pannello 2</span>
        <span><z-icon name="info-filled" /></span>
      </div>
    </div>
  `};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    size: NavigationTabsSize.BIG,
    ariaLabel: ""
  },
  parameters: {
    controls: {
      exclude: ["orientation"]
    }
  },
  render: args => html\`
    <z-navigation-tabs
      orientation=\${args.orientation}
      size=\${args.size}
      .ariaLabel=\${args.ariaLabel}
      style=\${styleMap({
    "--z-navigation-tabs-nav-buttons-bg": args["--z-navigation-tabs-nav-buttons-bg"],
    "--z-navigation-tabs-nav-buttons-fg": args["--z-navigation-tabs-nav-buttons-fg"]
  })}
    >
      \${tabsTemplate()}
    </z-navigation-tabs>
  \`
} satisfies Story`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: NavigationTabsOrientation.VERTICAL,
    ariaLabel: ""
  },
  parameters: {
    controls: {
      exclude: ["orientation"]
    }
  },
  render: args => html\`
    <z-navigation-tabs
      orientation=\${args.orientation}
      .ariaLabel=\${args.ariaLabel}
      style=\${styleMap({
    "--z-navigation-tabs-nav-buttons-bg": args["--z-navigation-tabs-nav-buttons-bg"],
    "--z-navigation-tabs-nav-buttons-fg": args["--z-navigation-tabs-nav-buttons-fg"]
  })}
    >
      \${tabsTemplate()}
    </z-navigation-tabs>
  \`
} satisfies Story`,...v.parameters?.docs?.source},description:{story:"When orientation is set to `VERTICAL`, the text of slotted tabs is hidden by default.\nBe sure to put an icon inside the tab to have something visible and don't forget to put an `aria-label` to provide a description for screen readers.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: "",
    orientation: NavigationTabsOrientation.HORIZONTAL
  },
  render: args => html\`
    <div class="panels-story-wrapper \${args.orientation}">
      <z-navigation-tabs
        orientation=\${args.orientation}
        size=\${NavigationTabsSize.BIG}
        .ariaLabel=\${args.ariaLabel}
        .selectedTab=\${0}
        style=\${styleMap({
    "--z-navigation-tabs-nav-buttons-bg": args["--z-navigation-tabs-nav-buttons-bg"],
    "--z-navigation-tabs-nav-buttons-fg": args["--z-navigation-tabs-nav-buttons-fg"]
  })}
      >
        <button
          aria-controls="panel-1"
          aria-label="home"
          id="tab-1"
        >
          <z-icon name="house" />
          <span>Home</span>
        </button>
        <button
          aria-controls="panel-2"
          aria-label="info"
          id="tab-2"
        >
          <z-icon name="info" />
          <span>Info</span>
        </button>
      </z-navigation-tabs>
      <div
        class="panel"
        id="panel-1"
        role="tabpanel"
        aria-labelledby="tab-1"
      >
        <span>Pannello 1</span>
        <span><z-icon name="house-filled" /></span>
      </div>
      <div
        class="panel"
        id="panel-2"
        role="tabpanel"
        aria-labelledby="tab-2"
        hidden
      >
        <span>Pannello 2</span>
        <span><z-icon name="info-filled" /></span>
      </div>
    </div>
  \`
} satisfies Story`,...y.parameters?.docs?.source},description:{story:"This story provides an example of how to handle a `ZNavigationTabs` with switchable `tabpanel`s, which is the most common use for the navigation tabs.\nEach panel must have the `tabpanel` role and the `aria-labelledby` attribute, referencing the tab that controls it (unless a different label is provided using `aria-label`).\nSimilarly, the `aria-controls` attribute must be set on the tabs with the `id` of the controlled panel.\n\nFor more details check the documentation: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab\\_role",...y.parameters?.docs?.description}}};var b=[`Horizontal`,`Vertical`,`Tabpanels`];export{_ as Horizontal,y as Tabpanels,v as Vertical,b as __namedExportsOrder,h as default};