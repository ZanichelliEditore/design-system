import{x as d}from"./lit-element-DGXdXVoE.js";import{o as h}from"./style-map-DWZVjDvr.js";import{N as i,G as o,H as r}from"./index-BnC6Ywep.js";import{a as f}from"./storybook-utils-DAVCxM-F.js";import"./index-BpZkdoDR.js";import{s as R,g as m}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as C,H as Z,c as M,h as e,a as V}from"./index-BZ0rSFNp.js";import"./directive-CF8sV3Lr.js";import"./index-DrFu-skq.js";const B='z-navigation-tabs{position:relative;z-index:0;display:flex;overflow:hidden;flex-direction:row;font-family:var(--font-family-sans);font-weight:var(--font-rg)}z-navigation-tabs,z-navigation-tabs *{box-sizing:border-box}z-navigation-tabs>nav::-webkit-scrollbar{display:none}z-navigation-tabs .navigation-button{position:absolute;z-index:1;display:flex;align-items:center;justify-content:center;padding:0;border:none;margin:0;background-color:var(--z-navigation-tabs-nav-buttons-bg, var(--color-surface01));border-radius:var(--border-no-radius);box-shadow:0 0 4px 1px var(--shadow-color-base);cursor:pointer;fill:var(--z-navigation-tabs-nav-buttons-fg, var(--color-primary01));outline:none}z-navigation-tabs .navigation-button:disabled{display:none}z-navigation-tabs>nav{z-index:0;display:flex;overflow:auto;align-items:center;justify-content:flex-start;scroll-behavior:smooth;scrollbar-width:none}z-navigation-tabs[orientation="horizontal"]>nav{width:100%}z-navigation-tabs[orientation="horizontal"] .navigation-button{top:0;width:calc(var(--space-unit) * 4);height:100%}z-navigation-tabs[orientation="horizontal"] .navigation-button:first-child{left:0}z-navigation-tabs[orientation="horizontal"] .navigation-button:last-child{right:0}z-navigation-tabs[orientation="vertical"]{width:fit-content;flex-direction:column}z-navigation-tabs[orientation="vertical"]>nav{height:100%;flex-direction:column;align-items:stretch}z-navigation-tabs[orientation="vertical"] .navigation-button{left:0;width:100%;height:calc(var(--space-unit) * 4)}z-navigation-tabs[orientation="vertical"] .navigation-button:first-child{top:0}z-navigation-tabs[orientation="vertical"] .navigation-button:last-child{bottom:0}z-navigation-tabs[size="small"][orientation="vertical"] .navigation-button{height:calc(var(--space-unit) * 4)}z-navigation-tabs>nav>*{position:relative;z-index:0;display:inline-flex;width:auto;align-items:center;justify-content:center;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 5);border:none;margin:0;background-color:unset;border-radius:var(--border-no-radius);color:var(--color-primary01);cursor:pointer;fill:currentcolor;font-family:var(--font-family-sans);font-size:inherit;gap:var(--space-unit);letter-spacing:inherit;line-height:inherit;outline:none;text-align:center;white-space:nowrap}z-navigation-tabs>nav>a{text-decoration:none}z-navigation-tabs>nav>*:focus:focus-visible{z-index:1;box-shadow:inset 0 0 4px 3px var(--blue800)}z-navigation-tabs>nav>:not([disabled]):hover{background-color:var(--color-background)}z-navigation-tabs>nav>button[disabled]{color:var(--color-disabled03);cursor:not-allowed;fill:currentcolor;pointer-events:all}z-navigation-tabs>nav>:not([disabled]):hover,nav>[aria-selected="true"]{color:var(--color-hover-primary);fill:currentcolor}z-navigation-tabs>nav>:not([disabled]):hover::after,nav>[aria-selected="true"]::after{position:absolute;background-color:var(--color-hover-primary);content:""}z-navigation-tabs[orientation="horizontal"]>nav>:not([disabled]):hover::after,z-navigation-tabs[orientation="horizontal"]>nav>[aria-selected="true"]::after{bottom:0;left:0;width:100%;height:var(--border-size-large)}z-navigation-tabs>nav>* z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);display:flex;margin:0}z-navigation-tabs[size="small"][orientation="horizontal"]>nav>*{padding:var(--space-unit) calc(var(--space-unit) * 2)}z-navigation-tabs[size="small"][orientation="horizontal"]>nav>:not([disabled]):hover::after,z-navigation-tabs[size="small"][orientation="horizontal"]>nav>[aria-selected="true"]::after{height:var(--border-size-medium)}z-navigation-tabs[size="small"]:not([orientation="vertical"])>nav>* z-icon{--z-icon-width:14px;--z-icon-height:14px}z-navigation-tabs[orientation="vertical"]>nav>*{padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 2)}z-navigation-tabs[orientation="vertical"]>nav>*>:not(z-icon){display:none}z-navigation-tabs[orientation="vertical"]>nav>:not([disabled]):hover::after,z-navigation-tabs[orientation="vertical"]>nav>[aria-selected="true"]::after{top:0;right:0;width:var(--border-size-large);height:100%}',P=class extends Z{constructor(){super(),this.__registerHost(),this.selected=M(this,"selected",7),this.focusedTab=void 0,this.ariaLabel="",this.orientation=i.HORIZONTAL,this.size=o.BIG,this.selectedTab=void 0,this.canNavigate=void 0,this.canNavigatePrev=void 0,this.canNavigateNext=void 0}get direction(){return this.orientation==i.HORIZONTAL?"Left":"Top"}get dimension(){return this.orientation==i.HORIZONTAL?"Width":"Height"}get tabs(){return Array.from(this.nav.children)}scrollToTab(a){const t=this.orientation===i.HORIZONTAL?{block:"nearest",inline:"center"}:{block:"center",inline:"nearest"};a.scrollIntoView(Object.assign({behavior:"smooth"},t))}navigateBackwards(){this.nav.scrollBy({[this.direction.toLowerCase()]:0-this.nav[`client${this.dimension}`]/2,behavior:"smooth"})}navigateForward(){this.nav.scrollBy({[this.direction.toLowerCase()]:this.nav[`scroll${this.direction}`]+this.nav[`client${this.dimension}`]/2,behavior:"smooth"})}isArrowNavigation(a){return Object.values(r).includes(a.key)}checkScrollVisible(){this.nav&&(this.canNavigate=this.nav[`scroll${this.dimension}`]>this.nav[`client${this.dimension}`])}checkScrollEnabled(){this.nav&&(this.canNavigateNext=this.nav[`scroll${this.direction}`]+this.nav[`client${this.dimension}`]<this.nav[`scroll${this.dimension}`],this.canNavigatePrev=this.nav[`scroll${this.direction}`]>0)}onTabSelected(){this.tabs.forEach((a,t)=>{const n=a.querySelector("z-icon"),s=n==null?void 0:n.name.replace("-filled","");if(t!==this.selectedTab){a.setAttribute("aria-selected","false"),a.tabIndex=-1,n&&(n.name=s);return}n&&(n.name=`${s}-filled`),a.setAttribute("aria-selected","true")}),this.selected.emit(this.selectedTab),this.selectedTab!==void 0&&this.scrollToTab(this.tabs[this.selectedTab])}handleTabClick(a){const t=a.target.closest("[role='tab']");this.tabs.some(n=>n.contains(t))&&(this.selectedTab=this.tabs.indexOf(t))}onTabFocusIn(a){const t=this.tabs.findIndex(n=>n.contains(a.target));t!==-1&&(this.selectedTab!==void 0&&(this.tabs[this.selectedTab].tabIndex=-1),this.focusedTab=t,this.tabs[this.focusedTab].tabIndex=-1,this.scrollToTab(this.tabs[this.focusedTab]))}navigateThroughTabs(a){if(!this.tabs.some(t=>t.contains(a.target))||!this.isArrowNavigation(a))return!0;if(a.preventDefault(),a.key===r.RIGHT&&this.orientation==i.HORIZONTAL||a.key===r.DOWN&&this.orientation==i.VERTICAL?(this.focusedTab++,this.focusedTab>=this.tabs.length&&(this.focusedTab=0)):(a.key===r.LEFT&&this.orientation==i.HORIZONTAL||a.key===r.UP&&this.orientation==i.VERTICAL)&&(this.focusedTab--,this.focusedTab<0&&(this.focusedTab=this.tabs.length-1)),this.tabs[this.focusedTab].hasAttribute("disabled")&&this.tabs[this.focusedTab].getAttribute("disabled")!=="false")return this.navigateThroughTabs(a);this.tabs[this.focusedTab].focus(),this.scrollToTab(this.tabs[this.focusedTab])}onTabFocusOut(a){var t;this.tabs.some(n=>n.contains(a.relatedTarget))||(this.tabs[(t=this.selectedTab)!==null&&t!==void 0?t:0].tabIndex=0,this.focusedTab=void 0)}connectedCallback(){this.resizeObserver=new ResizeObserver(()=>this.checkScrollVisible())}componentDidLoad(){var a;this.tabs.forEach(n=>{n.setAttribute("role","tab"),n.tabIndex=-1});const t=(a=this.selectedTab)!==null&&a!==void 0?a:this.tabs.findIndex(n=>n.ariaSelected==="true");t!==-1?(this.selectedTab=t,this.tabs[t].tabIndex=0,this.onTabSelected()):this.tabs[0].tabIndex=0,this.resizeObserver.observe(this.nav)}disconnectedCallback(){var a;(a=this.resizeObserver)===null||a===void 0||a.disconnect()}render(){return e(V,{key:"d192d751519659abe6a7276077871c62b0c09132",class:{"interactive-2":this.size===o.SMALL,"interactive-1":this.size!==o.SMALL},scrollable:this.canNavigate},e("button",{key:"9306e51dafe13daf47d02f2bc2c1165bbca852bf",class:"navigation-button",onClick:this.navigateBackwards.bind(this),tabIndex:-1,disabled:!this.canNavigatePrev,"aria-label":"Mostra elementi precedenti",hidden:!this.canNavigate},e("z-icon",{key:"12c02634275c9465042b782f797876c892afb88f",name:this.orientation===i.HORIZONTAL?"chevron-left":"chevron-up",width:16,height:16})),e("nav",{key:"87fcc53d787cc5889ab3098f5815190baad83f60",role:"tablist","aria-label":this.ariaLabel,ref:a=>this.nav=a??this.nav,onScroll:this.checkScrollEnabled.bind(this),"aria-orientation":this.orientation},e("slot",{key:"8b4b0be5170b59d9d3acebbb510e64630a92f024"})),e("button",{key:"3c50cddedd525a8e392ae199da12edbdfcfa3f0f",class:"navigation-button",onClick:this.navigateForward.bind(this),tabIndex:-1,disabled:!this.canNavigateNext,"aria-label":"Mostra elementi successivi",hidden:!this.canNavigate},e("z-icon",{key:"0224c950d506b47926392395953a4e2a0bb76aa5",name:this.orientation===i.HORIZONTAL?"chevron-right":"chevron-down",width:16,height:16})))}get host(){return this}static get watchers(){return{canNavigate:["checkScrollEnabled"],selectedTab:["onTabSelected"]}}static get style(){return B}};C(P,[4,"z-navigation-tabs",{ariaLabel:[1,"aria-label"],orientation:[520],size:[520],selectedTab:[1026,"selected-tab"],canNavigate:[32],canNavigatePrev:[32],canNavigateNext:[32]},[[0,"click","handleTabClick"],[0,"focusin","onTabFocusIn"],[0,"keydown","navigateThroughTabs"],[0,"focusout","onTabFocusOut"]],{canNavigate:["checkScrollEnabled"],selectedTab:["onTabSelected"]}]);const z={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZNavigationTabs",tagName:"z-navigation-tabs",customElement:!0,members:[{kind:"field",name:"ariaLabel",type:"string",description:"Set `aria-label` attribute to the internal `<nav>` element with `tablist` role.",default:'""'},{kind:"field",name:"orientation",type:"any",description:"Navigation tabs orientation.",default:"NavigationTabsOrientation.HORIZONTAL"},{kind:"field",name:"size",type:"any",description:"Navigation tabs size.",default:"NavigationTabsSize.BIG"},{kind:"field",name:"selectedTab",type:"number",description:"Index of the selected tab.\nUseful to programmatically select a tab.\nThe tab can also be selected by setting the `aria-selected` attribute to `true` on the desired tab.",default:"undefined"}],events:[{kind:"event",name:"selected",description:"Emitted when the selected tab changes.\nContains the index of the new selected tab in the `detail` of the event."}],cssProperties:[{name:"--z-navigation-tabs-nav-buttons-bg",description:"Navigation buttons background color."},{name:"--z-navigation-tabs-nav-buttons-fg",description:"Navigation buttons foreground color."}],slots:[{name:"-",description:"Main slot. Use `<button>` or `<a>` tags as children."}]}],exports:[{kind:"js",name:"ZNavigationTabs",declaration:{name:"ZNavigationTabs",module:"src/components/z-navigation-tabs/index.tsx"}},{kind:"custom-element-definition",name:"z-navigation-tabs",declaration:{name:"ZNavigationTabs",module:"src/components/z-navigation-tabs/index.tsx"}}]}]};R({...m()||{},...z,modules:[...(m()||{}).modules||[],...z.modules]});const Q={title:"ZNavigationTabs",component:"z-navigation-tabs",argTypes:{orientation:{options:Object.values(i),control:{type:"inline-radio"}},"--z-navigation-tabs-nav-buttons-bg":f(),"--z-navigation-tabs-nav-buttons-fg":f()},args:{"--z-navigation-tabs-nav-buttons-bg":void 0,"--z-navigation-tabs-nav-buttons-fg":void 0}};document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector("z-navigation-tabs");a==null||a.addEventListener("selected",({detail:t})=>{var u,p;const n=(p=(u=a.querySelectorAll('[role="tab"]'))==null?void 0:u[t])==null?void 0:p.getAttribute("aria-controls"),s=Array.from(document.querySelectorAll('[role="tabpanel"]'));s.forEach(v=>v.hidden=!0);const g=s.find(v=>v.id===n);g&&(g.hidden=!1)})});const H=()=>d`<button>
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
    </a>`,c={argTypes:{size:{options:Object.values(o),control:{type:"inline-radio"}}},args:{orientation:i.HORIZONTAL,size:o.BIG,ariaLabel:""},parameters:{controls:{exclude:["orientation"]}},render:a=>d`
    <z-navigation-tabs
      orientation=${a.orientation}
      size=${a.size}
      .ariaLabel=${a.ariaLabel}
      style=${h({"--z-navigation-tabs-nav-buttons-bg":a["--z-navigation-tabs-nav-buttons-bg"],"--z-navigation-tabs-nav-buttons-fg":a["--z-navigation-tabs-nav-buttons-fg"]})}
    >
      ${H()}
    </z-navigation-tabs>
  `},l={args:{orientation:i.VERTICAL,ariaLabel:""},parameters:{controls:{exclude:["orientation"]}},render:a=>d`
    <z-navigation-tabs
      orientation=${a.orientation}
      .ariaLabel=${a.ariaLabel}
      style=${h({"--z-navigation-tabs-nav-buttons-bg":a["--z-navigation-tabs-nav-buttons-bg"],"--z-navigation-tabs-nav-buttons-fg":a["--z-navigation-tabs-nav-buttons-fg"]})}
    >
      ${H()}
    </z-navigation-tabs>
  `},b={args:{ariaLabel:"",orientation:i.HORIZONTAL},render:a=>d`
    <div class="panels-story-wrapper ${a.orientation}">
      <z-navigation-tabs
        orientation=${a.orientation}
        size=${o.BIG}
        .ariaLabel=${a.ariaLabel}
        .selectedTab=${0}
        style=${h({"--z-navigation-tabs-nav-buttons-bg":a["--z-navigation-tabs-nav-buttons-bg"],"--z-navigation-tabs-nav-buttons-fg":a["--z-navigation-tabs-nav-buttons-fg"]})}
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
  `};var T,y,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(y=c.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var x,L,k,w,O;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(L=l.parameters)==null?void 0:L.docs)==null?void 0:k.source},description:{story:"When orientation is set to `VERTICAL`, the text of slotted tabs is hidden by default.\nBe sure to put an icon inside the tab to have something visible and don't forget to put an `aria-label` to provide a description for screen readers.",...(O=(w=l.parameters)==null?void 0:w.docs)==null?void 0:O.description}}};var I,$,A,S,E;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=($=b.parameters)==null?void 0:$.docs)==null?void 0:A.source},description:{story:"This story provides an example of how to handle a `ZNavigationTabs` with switchable `tabpanel`s, which is the most common use for the navigation tabs.\nEach panel must have the `tabpanel` role and the `aria-labelledby` attribute, referencing the tab that controls it (unless a different label is provided using `aria-label`).\nSimilarly, the `aria-controls` attribute must be set on the tabs with the `id` of the controlled panel.\n\nFor more details check the documentation: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab\\_role",...(E=(S=b.parameters)==null?void 0:S.docs)==null?void 0:E.description}}};const X=["Horizontal","Vertical","Tabpanels"];export{c as Horizontal,b as Tabpanels,l as Vertical,X as __namedExportsOrder,Q as default};