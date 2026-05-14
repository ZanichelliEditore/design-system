import{n as e}from"./chunk-DnJy8xQt.js";import{$ as t,Q as n,X as r,Z as i,et as a,nt as o,rt as s,tt as c}from"./iframe-DCi19jo_.js";import{o as l,t as u}from"./storybook-utils-B8oonaCr.js";import{D as d,K as f,N as p,T as m,r as h,s as g}from"./index2-FE8JoBwn.js";import{n as _}from"./index3-DVurE89l.js";import{n as v}from"./index5-8ycZPmMN.js";import{t as y}from"./internal-Ce2lMkVW.js";import{n as b,t as x}from"./breakpoints-4TVSwq90.js";import{i as S,l as C}from"./utils-DgqwYHSA.js";import{n as w}from"./index8-BUi0fD0F.js";import{n as T}from"./index7-DEERto7O.js";import{t as E}from"./index6-DgIJtwdv.js";import{n as D}from"./index9-dW95rbKq.js";import{t as O}from"./index10-Jl7tvIqc.js";import{n as k}from"./index11-D6JlOlzz.js";import{n as A}from"./index12-CjEzRuH6.js";import{n as j}from"./index14-gBKYvlfi.js";import{t as M}from"./index13-D7RjXblf.js";var N,P,F,I=e((()=>{o(),p(),b(),C(),v(),E(),_(),T(),w(),D(),O(),k(),A(),M(),j(),N=typeof IntersectionObserver<`u`,P=s(class extends n{onStuck(){this.scrollParent&&this.sticking.emit(this._stuck)}setMenuFloatingMode(){this.menuElements.length!==0&&this.menuElements.forEach((e=>{e.open=!1,e.verticalContext=this.drawerOpen}))}onStuckChange(){var e,t;this.container&&(this.stuck?(e=this.stuckIntersecObserver)==null||e.observe(this.container):(this._stuck=!1,(t=this.stuckIntersecObserver)==null||t.unobserve(this.container)))}get title(){return this.hostElement.querySelector(`[slot="title"]`)?.textContent.trim()}get scrollParent(){let e=this.hostElement.offsetParent;return e===document.body||e===document.documentElement?window:e}get canShowMenu(){return!this.enableOffcanvas&&this.menuElements.length>0&&!this.isMobile&&!this.drawerOpen}get focusableMenu(){return this.menuElements.find((e=>e.htmlTabindex===0))}openDrawer(){this.drawerOpen=!0,this.menuElements.forEach(((e,t)=>e.htmlTabindex=t===0?0:-1)),setTimeout((()=>this.menuElements[0].setFocus()),400)}closeDrawer(){this.drawerOpen=!1,setTimeout((()=>this.burgerButton.focus()),100)}collectMenuElements(){this.menuElements=Array.from(this.hostElement.querySelectorAll(`[slot="menu"]`)),this.menuElements.forEach(((e,t)=>e.htmlTabindex=t===0?0:-1)),this.menuLength=this.menuElements.length,this.enableOffcanvas||(this.menuWidth=this.menuElements.reduce(((e,t)=>e+t.getBoundingClientRect().width),0)+32*(this.menuLength-1)),this.setMenuFloatingMode()}setupMenuResizeObserver(){this.enableOffcanvas||(this.menuResizeObserver=new ResizeObserver((e=>{if(this.isMobile)return void(this.enableOffcanvas=!0);let t=e[0].contentBoxSize[0].inlineSize;this.menuWidth!==0&&(this.menuWidth>t&&!this.enableOffcanvas?this.enableOffcanvas=!0:this.menuWidth<=t&&this.enableOffcanvas&&(this.enableOffcanvas=!1))})),this.menuResizeObserver.observe(this.container))}hasSlot(e){return this.hostElement.querySelector(`[slot="${e}"]`)!==null}moveFocus(e,t){e.htmlTabindex=-1,t.setFocus()}onOffcanvasKeydown(e){if(e.key!==g.TAB||!this.drawerOpen)return;let t=e.target.closest(`z-menu`);t?(e.preventDefault(),e.stopPropagation(),t.htmlTabindex=0,this.closeDrawerButton.focus()):e.target===this.closeDrawerButton&&(e.preventDefault(),e.stopPropagation(),e.shiftKey?(this.menuElements.filter((e=>e.open)).pop()??this.menuElements[this.menuLength-1]).setFocus():(this.menuElements.find((e=>e.open))??this.menuElements[0]).setFocus())}manageMenus(e){let t=this.menuElements.find((t=>S(t,e.target)));t?this.menuElements.forEach((e=>{e!==t&&(e.htmlTabindex=-1,this.drawerOpen||(e.open=!1))})):this.drawerOpen||this.menuElements.forEach((e=>{e.open=!1}))}handleKeydown(e){if(e.key===g.ESC&&this.drawerOpen)return void this.closeDrawer();if(!this.menuElements.some((t=>t.contains(e.target))))return;let t=this.focusableMenu,n=this.menuElements.indexOf(t),r;e.key===g.ARROW_RIGHT&&!t.verticalContext||e.key===g.ARROW_DOWN&&t.verticalContext?r=this.menuElements[n+1]??this.menuElements[0]:(e.key===g.ARROW_LEFT&&!t.verticalContext||e.key===g.ARROW_UP&&t.verticalContext)&&(r=this.menuElements[n-1]??this.menuElements[this.menuLength-1]),r&&(e.key===g.ARROW_UP&&t.verticalContext&&r.open?(t.htmlTabindex=-1,r.focusLastItem()):this.moveFocus(t,r))}renderSeachbar(){if(!this.isMobile||this.searchPageUrl||!this._stuck)return this.searchPageUrl&&(this.isMobile||this.isTablet)?c(`z-button`,{class:`search-page-button`,variant:m.SECONDARY,href:this.searchPageUrl,icon:`search`,size:d.X_SMALL}):c(`z-searchbar`,{value:this.searchString,placeholder:this.searchPlaceholder,showSearchButton:!0,searchButtonIconOnly:this.isMobile||this.isTablet,searchButtonLabel:this.isMobile||this.isTablet?void 0:this.searchButtonLabel,size:d.X_SMALL,variant:m.SECONDARY,preventSubmit:this.searchString.length<3,onSearchTyping:e=>this.searchString=e.detail})}renderProductLogos(){return c(i,null,this.enableZLogo&&c(`span`,{class:`z-logo`},c(`img`,{alt:`Logo Zanichelli`})),this.hostElement.querySelector(`[slot='product-logo']`)&&c(`span`,{class:`product-logo`},c(`slot`,{name:`product-logo`})))}renderMenuButton(){return this.menuLength>0&&(this.enableOffcanvas||this._stuck||this.isMobile)&&c(`button`,{ref:e=>this.burgerButton=e,class:`drawer-trigger`,"aria-label":`Apri menu`,"aria-haspopup":`menu`,"aria-expanded":``+this.drawerOpen,"aria-controls":`offcanvas-menu`,onClick:this.openDrawer},c(`z-icon`,{name:`burger-menu`}))}renderOffcanvas(){return c(`z-offcanvas`,{id:`offcanvas-menu`,variant:h.OVERLAY,transitiondirection:f.RIGHT,open:this.drawerOpen,onCanvasOpenStatusChanged:e=>this.drawerOpen=e.detail,onKeyDown:this.onOffcanvasKeydown},c(`div`,{slot:`canvasContent`},c(`button`,{ref:e=>this.closeDrawerButton=e,class:`drawer-close`,"aria-label":`Chiudi menu`,onClick:this.closeDrawer,"aria-hidden":``+!this.drawerOpen,disabled:!this.drawerOpen},c(`z-icon`,{name:`close`})),c(`div`,{class:`drawer-content`,"aria-hidden":``+!this.drawerOpen},c(`slot`,{name:`menu`,onSlotchange:this.collectMenuElements}))))}renderStuck(){return c(`div`,{class:`heading-stuck`},c(`div`,{class:`heading-stuck-content`},this.renderMenuButton(),c(`div`,{class:`heading-title`},this.renderProductLogos(),c(`div`,{class:`stucked-title`},c(`slot`,{name:`stucked-title`},this.title))),this.enableSearch&&this.renderSeachbar()))}constructor(e){super(),!1!==e&&this.__registerHost(),this.__attachShadow(),this.sticking=a(this,`sticking`,7),this.stuck=!1,this.enableOffcanvas=!1,this.enableSearch=!1,this.searchPlaceholder=`Cerca`,this.searchString=``,this.enableZLogo=!0,this.drawerOpen=!1,this._stuck=!1,this.isMobile=!0,this.isTablet=!1,this.menuElements=[],this.stuckIntersecObserver=N?new IntersectionObserver((([e])=>{this._stuck=!e.isIntersecting}),{threshold:.5}):void 0,this.openDrawer=this.openDrawer.bind(this),this.closeDrawer=this.closeDrawer.bind(this),this.collectMenuElements=this.collectMenuElements.bind(this),this.onOffcanvasKeydown=this.onOffcanvasKeydown.bind(this)}componentWillLoad(){this.collectMenuElements();let e=window.matchMedia(`(max-width: ${x.MOBILE}px)`);this.isMobile=e.matches,e.addEventListener(`change`,(e=>this.isMobile=e.matches));let t=window.matchMedia(`(min-width: ${x.MOBILE+1}px) and (max-width: ${x.TABLET}px)`);this.isTablet=t.matches,t.addEventListener(`change`,(e=>this.isTablet=e.matches))}componentDidLoad(){this.onStuckChange(),this.setupMenuResizeObserver()}disconnectedCallback(){var e;(e=this.menuResizeObserver)==null||e.disconnect()}render(){let e=this.hasSlot(`top-subtitle`);return c(t,{key:`29eb67fcb31381b63f1d20f0fb22ce2253932bb2`,"menu-length":this.menuLength},c(`div`,{key:`01dcda1a83310098f2d4703f76ae6f4731997711`,class:{"heading-panel":!0,"has-menubar":this.menuLength>0&&!this.enableOffcanvas},ref:e=>this.container=e},c(`div`,{key:`83860972e655b2d4404e961edf68631bbda29ed7`,class:{"heading-container":!0,"has-top-subtitle":e}},(!this.enableSearch&&this.isMobile||!this.isMobile)&&c(`div`,{key:`a25fc5861e22ba02e34efb2050554668c36714d3`,class:{"top-subtitle":!0,"has-product-logo":e&&this.hasSlot(`product-logo`)}},c(`slot`,{key:`ba15310cf6e5d5427050df3faa622c99b3f45d95`,name:`top-subtitle`})),c(`div`,{key:`1bca5a0651b7480a164938515b6d6f8034a7db4e`,class:`heading-title`},c(`slot`,{key:`c7619b9b4ce26478072e27fd813e41b2aea89b9e`,name:`menu-button`},this.renderMenuButton()),!this._stuck&&this.renderProductLogos(),c(`slot`,{key:`4b52adf6c13f82ede23be0dd6e96b6d40820f77a`,name:`title`}),this.enableSearch&&!this.isMobile&&this.renderSeachbar()),this.enableSearch&&this.isMobile&&this.renderSeachbar()),c(`nav`,{key:`656eacd8c90e00abfc5ed41dd4c81c4b2d71e16d`,class:`menu-container`,"aria-label":this.title||void 0},this.canShowMenu&&c(`div`,{key:`ca3dfcc5b5d521a4037e6a5284fa711ed95cc77d`,role:`menubar`,"aria-label":this.title||void 0},c(`slot`,{key:`23b691dcee91dfc2eccc4bf46edda6fbcdf40f4c`,name:`menu`,onSlotchange:this.collectMenuElements})))),this.renderOffcanvas(),this._stuck&&this.renderStuck())}get hostElement(){return this}static get watchers(){return{_stuck:[{onStuck:0}],drawerOpen:[{setMenuFloatingMode:0}],stuck:[{onStuckChange:0}]}}static get style(){return`:host{position:relative;display:block;box-shadow:var(--shadow-2)}:host,*{box-sizing:border-box}.heading-panel{--title-line-height:1.333;--title-font-size:var(--font-size-6);position:relative;display:flex;width:100%;max-width:var(--app-header-content-max-width, 100%);flex-direction:column;flex-grow:0;flex-shrink:0;align-items:baseline;padding:calc(var(--space-unit) * 2);margin:0 auto;background:var(--app-header-bg, var(--color-surface01))}:host(:empty) .heading-panel{padding:0}.heading-container{position:relative;z-index:1;display:flex;width:100%;max-width:100%;flex:1 auto;flex-direction:column;justify-content:flex-start}.heading-panel.has-menubar{padding-bottom:0}.heading-panel .heading-container{flex-direction:column-reverse}:host([enable-search]) .heading-panel .heading-container{flex-direction:column}:host([enable-search][search-page-url]) .heading-panel .heading-container{flex-direction:row}.heading-title{display:flex;width:100%;flex-direction:row;align-items:flex-start}.heading-title:not(:last-child){margin-right:var(--space-unit)}.z-logo,.search-page-button{display:flex;height:calc(var(--title-font-size) * var(--title-line-height));align-items:center}.z-logo img{height:24px;margin:0 var(--space-unit) 0 0;content:url('data:image/svg+xml,<svg width="61" height="32" viewBox="0 0 61 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9874 32C7.1595 32 0 24.8349 0 16C0 7.16513 7.1595 0 15.9874 0H45.0126C53.8405 0 61 7.16513 61 16C61 24.8349 53.8405 32 45.0126 32H15.9874Z" fill="%23E2011A"/><path d="M58.5435 15.9992C58.5435 23.4743 52.4892 29.5403 45.0129 29.5403C37.5367 29.5403 31.4824 23.4813 31.4824 15.9992C31.4824 8.51701 37.5367 2.45801 45.0129 2.45801C52.4892 2.45801 58.5435 8.51701 58.5435 15.9992Z" fill="white"/><path d="M40.7107 8.01862H49.8976V11.3158L44.139 21.7077H50.0384V24.6457H39.9785V21.4048L45.7371 10.9636H40.7107V8.01862Z" fill="%23E2011A"/><path d="M12.2914 24.6449C10.982 24.6449 10.271 23.8136 10.271 22.6722V7.04565H12.1718V22.9822H13.981V24.6449H12.2914Z" fill="white"/><path d="M25.6461 24.6448C24.2452 24.6448 23.675 23.7853 23.5342 22.6439H23.4145C22.8935 24.1446 21.5841 24.9266 19.8735 24.9266C17.2828 24.9266 15.7622 23.4964 15.7622 21.2137C15.7622 18.931 17.4236 17.6206 20.9928 17.6206H23.4145V16.4088C23.4145 14.6756 22.4641 13.7245 20.5141 13.7245C19.0428 13.7245 18.0642 14.4361 17.4025 15.5563L16.262 14.4854C16.9308 13.175 18.4021 12.0829 20.6126 12.0829C23.5623 12.0829 25.3152 13.6259 25.3152 16.2186V22.9751H26.7162V24.6378H25.6461V24.6448ZM23.4145 21.0799V19.0578H20.8942C18.733 19.0578 17.7545 19.7272 17.7545 20.9108V21.411C17.7545 22.6228 18.7049 23.3132 20.1762 23.3132C22.0558 23.3132 23.4074 22.341 23.4074 21.0799H23.4145Z" fill="white"/></svg>')}.product-logo{display:none}.product-logo ::slotted([slot="product-logo"]){width:32px;height:32px;margin-right:var(--space-unit)}.product-logo ::slotted([slot="product-logo"]) img{width:100%;height:100%;object-fit:cover}::slotted([slot="title"]),::slotted([slot="stucked-title"]),.stucked-title{margin:0;color:var(--app-header-text-color, var(--color-default-text));font-family:var(--font-family-serif);font-weight:var(--font-sb)}::slotted([slot="title"]){display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;font-size:var(--title-font-size);-webkit-line-clamp:2;line-clamp:2;line-height:var(--title-line-height);text-overflow:ellipsis}::slotted(a:is([slot="title"],[slot="stucked-title"])){text-decoration:none}:host([enable-search]) ::slotted([slot="title"])+*{margin-left:calc(var(--space-unit) * 2)}:host([enable-offcanvas]:not([menu-length="0"])) .top-subtitle{padding-left:calc(var(--space-unit) * 4 + var(--space-unit))}::slotted([slot="top-subtitle"]){display:-webkit-box;overflow:hidden;max-width:80%;margin:0;-webkit-box-orient:vertical;color:var(--color-default-text);font-family:var(--font-family-sans);font-size:var(--font-size-2);font-style:italic;font-weight:var(--font-rg);-webkit-line-clamp:2;line-clamp:2}.search-page-button{margin-left:auto}.menu-container{display:flex;flex:1 auto;column-gap:calc(var(--space-unit) * 4)}.menu-container:focus:focus-visible{outline:none}:host([menu-length="0"]) .menu-container,.menu-container:empty{display:none}.menu-container ::slotted([open]){position:relative;z-index:3}.menu-container ::slotted([slot="menu"]:not(:last-child))::after{position:absolute;top:calc(1.5em / 2);right:calc(var(--space-unit) * -2);width:var(--border-size-small);height:1em;background-color:var(--color-default-icon);content:"";font-size:var(--font-size-3);transform:translateY(-50%)}z-searchbar{z-index:0;display:flex;width:100%;align-items:center}.heading-stuck{position:fixed;z-index:20;top:var(--app-header-top-offset, 48px);left:0;width:100%;max-width:100%;animation:slide-stuck-heading-in 250ms ease-out;background:var(--app-header-stucked-bg, var(--color-surface01));box-shadow:var(--shadow-2);color:var(--app-header-stucked-text-color, var(--color-default-text))}.heading-stuck-content{display:flex;max-width:var(--app-header-content-max-width, 100%);align-items:center;padding:var(--space-unit) var(--grid-margin);margin:0 auto}.heading-stuck .heading-title{--title-font-size:var(--font-size-5);--title-line-height:1.4;overflow:hidden;align-items:center}.heading-stuck .stucked-title{overflow:hidden;font-size:var(--title-font-size);line-height:var(--title-line-height);text-overflow:ellipsis;white-space:nowrap}.drawer-trigger,::slotted([slot="menu-button"]){display:flex;height:calc(var(--title-font-size) * var(--title-line-height));align-items:center;padding:0;border:0;margin-right:var(--space-unit);appearance:none;background:none;border-radius:0;color:inherit;cursor:pointer;outline:none}.drawer-trigger:focus:focus-visible z-icon{box-shadow:var(--shadow-focus-primary)}.drawer-trigger z-icon{--z-icon-width:calc(var(--space-unit) * 4);--z-icon-height:calc(var(--space-unit) * 4);fill:var(--color-default-icon)}.drawer-content{display:none}z-offcanvas{--z-offcanvas--top-space:var(--app-header-top-offset)}z-offcanvas[open] .drawer-content{display:flex;width:100%;flex:1 auto;flex-direction:column}z-offcanvas[open] .drawer-content ::slotted(z-menu){width:100%}.drawer-close{--z-icon-width:calc(var(--space-unit) * 4);--z-icon-height:calc(var(--space-unit) * 4);padding:0;border:0;margin:var(--space-unit) 0 calc(var(--space-unit) * 2.5);appearance:none;background:transparent;border-radius:0;cursor:pointer;outline:none}.drawer-close z-icon{fill:var(--color-default-icon)}.drawer-close:focus:focus-visible{box-shadow:var(--shadow-focus-primary)}@media (max-width: 767px){:host([enable-search]) .heading-panel .heading-container{row-gap:calc(var(--space-unit) * 1.5)}}@media (min-width: 768px){.heading-panel{--title-font-size:var(--font-size-9);padding:calc(var(--space-unit) * 1.5) var(--grid-margin) calc(var(--space-unit) * 1.25)}:host([enable-search][search-page-url]) .heading-panel .heading-container{flex-direction:column}.heading-panel .heading-container{flex-direction:column;margin-right:auto}.z-logo img{height:32px}.product-logo{display:flex;height:calc(var(--title-font-size) * var(--title-line-height));align-items:center}.has-top-subtitle .z-logo{display:none}.top-subtitle.has-product-logo{padding-left:calc(32px + var(--space-unit))}z-searchbar{width:30%;height:calc(var(--title-font-size) * var(--title-line-height));margin-left:auto}.menu-container{flex:initial}.menu-container>[role="menubar"]{display:contents}:host(:not([enable-offcanvas])) .menu-container{margin-top:calc((var(--space-unit) * 1.75))}:host(:not([enable-offcanvas])) .heading-container .drawer-trigger{display:none}.heading-stuck .heading-title{--title-font-size:var(--font-size-8);--title-line-height:1.5}.heading-stuck-content{padding:6px var(--grid-margin)}:host(:not([enable-offcanvas],[menu-length="0"])){padding-left:0}}@media (min-width: 1152px){z-searchbar{min-width:calc(var(--space-unit) * 45)}}@keyframes slide-stuck-heading-in{0%{transform:translate3d(0, -100%, 0)}100%{transform:none}}`}},[257,`z-app-header`,{stuck:[516],enableOffcanvas:[1540,`enable-offcanvas`],enableSearch:[516,`enable-search`],searchPlaceholder:[1,`search-placeholder`],searchButtonLabel:[1,`search-button-label`],searchString:[1025,`search-string`],searchPageUrl:[1,`search-page-url`],enableZLogo:[516,`enable-z-logo`],drawerOpen:[1028,`drawer-open`],_stuck:[32],menuLength:[32],isMobile:[32],isTablet:[32]},[[5,`focusin`,`manageMenus`],[5,`click`,`manageMenus`],[1,`keydown`,`handleKeydown`]],{_stuck:[{onStuck:0}],drawerOpen:[{setMenuFloatingMode:0}],stuck:[{onStuckChange:0}]}]),F=P})),L=e((()=>{})),R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{r(),y(),l(),I(),L(),R={title:`ZAppHeader`,component:F,parameters:{layout:`fullscreen`},subcomponents:{ZMenu:`z-menu`,ZMenuSection:`z-menu-section`},args:{"--app-header-content-max-width":`100%`,enableSearch:!1,searchPageUrl:``,searchPlaceholder:`Digita qui quello che vuoi`,searchButtonLabel:`Cliccami`,enableZLogo:!1,enableOffcanvas:!1}},z=()=>c(i,null,c(`a`,{href:``,slot:`item`},`Item 1`),c(`z-menu-section`,{slot:`item`},c(`h3`,null,`Item 2`),c(`a`,{href:``,slot:`section`},`Item 2.1`),c(`a`,{href:``,slot:`section`},`Item 2.2`)),c(`z-menu-section`,{slot:`item`},c(`h3`,null,`Item 3`),c(`a`,{href:``,slot:`section`},`Item 3.1`),c(`a`,{href:``,slot:`section`},`Item 3.2`)),c(`a`,{href:``,slot:`item`},`Item 4`),c(`z-menu-section`,{slot:`item`},c(`h3`,null,`Item 5`),c(`a`,{href:``,slot:`section`},`Item 5.1`),c(`a`,{href:``,slot:`section`},`Item 5.2`))),B=()=>c(i,null,c(`z-menu`,{slot:`menu`},c(`h3`,null,`Menu label 1`),z()),c(`z-menu`,{slot:`menu`},c(`a`,{href:``},`Menu label 2`)),c(`z-menu`,{slot:`menu`},c(`h3`,null,`Menu label 3`),z()),c(`z-menu`,{slot:`menu`},c(`h3`,null,`Menu label 4`),z())),V={parameters:{controls:{exclude:[`enable-offcanvas`,`search-placeholder`,`search-button-label`]}},render:e=>c(`z-app-header`,{...e,style:u(e)},c(`a`,{slot:`title`,href:`zanichelli.it`},`Applicazione`))},H={parameters:{controls:{exclude:[`enable-offcanvas`,`search-placeholder`,`search-button-label`]}},render:e=>c(`z-app-header`,{...e,style:u(e)},c(`div`,{slot:`title`},`Applicazione`),c(`div`,{class:`story-product-logo`,slot:`product-logo`}))},U={parameters:{controls:{exclude:[`enable-offcanvas`,`enable-z-logo`,`search-placeholder`,`search-button-label`]}},render:e=>c(`z-app-header`,{...e,style:u(e)},c(`div`,{slot:`top-subtitle`},`Payoff dell'applicazione`),c(`div`,{slot:`title`},`Applicazione`))},W={parameters:{controls:{exclude:[`enable-offcanvas`,`enable-z-logo`,`search-placeholder`,`search-button-label`]}},render:e=>c(`z-app-header`,{...e,enableZLogo:!1,style:u(e)},c(`div`,{slot:`top-subtitle`},`Payoff dell'applicazione`),c(`div`,{slot:`title`},`Applicazione`),c(`div`,{class:`story-product-logo`,slot:`product-logo`}))},G={parameters:{controls:{exclude:[`enable-offcanvas`,`search-placeholder`,`search-button-label`]}},render:e=>c(`z-app-header`,{...e,style:u(e)},c(`button`,{slot:`menu-button`},c(`z-icon`,{name:`gear`})),c(`a`,{href:`zanichelli.it`,slot:`title`},`Applicazione`))},K={parameters:{controls:{exclude:[`enable-z-logo`,`search-placeholder`,`search-button-label`]}},render:e=>c(`z-app-header`,{...e,style:u(e)},c(`div`,{slot:`top-subtitle`},`Payoff dell'applicazione`),c(`div`,{slot:`title`},`Applicazione`),B())},q={parameters:{controls:{exclude:[`enable-z-logo`,`search-placeholder`,`search-button-label`]}},render:e=>c(`z-app-header`,{...e,enableZLogo:!1,style:u(e)},c(`div`,{slot:`top-subtitle`},`Payoff dell'applicazione`),c(`div`,{slot:`title`},`Applicazione`),c(`div`,{class:`story-product-logo`,slot:`product-logo`}),B())},J={parameters:{controls:{exclude:[`enable-offcanvas`,`enable-z-logo`,`enable-search`,`search-page-url`,`search-placeholder`,`search-button-label`]}},render:e=>c(`z-app-header`,{style:u(e)},c(`div`,{slot:`title`},`Fondamenti di fisica 8e - Meccanica, Onde, Termodinamica, Elettromagnetismo, Ottica`),c(`div`,{slot:`top-subtitle`},`Jearl Walker, David Halliday, Robert Resnick`),B())},Y={args:{enableOffcanvas:!0},parameters:{controls:{exclude:[`search-placeholder`,`search-button-label`]}},render:e=>c(`z-app-header`,{...e,style:u(e)},c(`div`,{slot:`title`},`Applicazione`),B())},X={decorators:[e=>c(i,null,c(`div`,{style:{padding:`16px var(--grid-margin)`}},`Scroll to see `,c(`code`,null,`stuck`),` prop in action.`),c(`div`,{style:{height:`200vh`}},e()))],parameters:{docs:{story:{inline:!1,iframeHeight:`400px`}},controls:{exclude:[`enable-offcanvas`,`search-placeholder`,`search-button-label`]}},render:e=>c(`z-app-header`,{...e,stuck:!0,style:u({...e,"--app-header-top-offset":`0`})},c(`div`,{slot:`title`},`Fondamenti di fisica 8e - Meccanica, Onde, Termodinamica, Elettromagnetismo, Ottica`),B())},Z={parameters:{controls:{exclude:[`search-page-url`,`enable-search`,`enable-offcanvas`]}},decorators:[e=>c(i,null,c(`div`,{style:{padding:`16px var(--grid-margin)`}},`The prop `,c(`code`,null,`searchPageUrl`),` only affects the component in tablet and mobile viewports.`),e())],render:e=>c(`z-app-header`,{...e,enableSearch:!0,searchPageUrl:`https://www.zanichelli.it`,style:u(e)},c(`div`,{slot:`title`},`Applicazione`),c(`div`,{slot:`subtitle`},`Payoff dell'applicazione`),B())},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["enable-offcanvas", "search-placeholder", "search-button-label"]
    }
  },
  render: args => <z-app-header {...args} style={extractCSSVars(args)}>
      <a slot="title" href="zanichelli.it">
        Applicazione
      </a>
    </z-app-header>
} satisfies Story`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["enable-offcanvas", "search-placeholder", "search-button-label"]
    }
  },
  render: args => <z-app-header {...args} style={extractCSSVars(args)}>
      <div slot="title">Applicazione</div>
      <div class="story-product-logo" slot="product-logo"></div>
    </z-app-header>
} satisfies Story`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["enable-offcanvas", "enable-z-logo", "search-placeholder", "search-button-label"]
    }
  },
  render: args => <z-app-header {...args} style={extractCSSVars(args)}>
      <div slot="top-subtitle">Payoff dell'applicazione</div>
      <div slot="title">Applicazione</div>
    </z-app-header>
} satisfies Story`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["enable-offcanvas", "enable-z-logo", "search-placeholder", "search-button-label"]
    }
  },
  render: args => <z-app-header {...args} enableZLogo={false} style={extractCSSVars(args)}>
      <div slot="top-subtitle">Payoff dell'applicazione</div>
      <div slot="title">Applicazione</div>
      <div class="story-product-logo" slot="product-logo"></div>
    </z-app-header>
} satisfies Story`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["enable-offcanvas", "search-placeholder", "search-button-label"]
    }
  },
  render: args => <z-app-header {...args} style={extractCSSVars(args)}>
      <button slot="menu-button">
        <z-icon name="gear" />
      </button>
      <a href="zanichelli.it" slot="title">
        Applicazione
      </a>
    </z-app-header>
} satisfies Story`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["enable-z-logo", "search-placeholder", "search-button-label"]
    }
  },
  render: args => <z-app-header {...args} style={extractCSSVars(args)}>
      <div slot="top-subtitle">Payoff dell'applicazione</div>
      <div slot="title">Applicazione</div>
      {menuTemplate()}
    </z-app-header>
} satisfies Story`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["enable-z-logo", "search-placeholder", "search-button-label"]
    }
  },
  render: args => <z-app-header {...args} enableZLogo={false} style={extractCSSVars(args)}>
      <div slot="top-subtitle">Payoff dell'applicazione</div>
      <div slot="title">Applicazione</div>
      <div class="story-product-logo" slot="product-logo"></div>
      {menuTemplate()}
    </z-app-header>
} satisfies Story`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["enable-offcanvas", "enable-z-logo", "enable-search", "search-page-url", "search-placeholder", "search-button-label"]
    }
  },
  render: args => <z-app-header style={extractCSSVars(args)}>
      <div slot="title">Fondamenti di fisica 8e - Meccanica, Onde, Termodinamica, Elettromagnetismo, Ottica</div>
      <div slot="top-subtitle">Jearl Walker, David Halliday, Robert Resnick</div>
      {menuTemplate()}
    </z-app-header>
} satisfies Story`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    enableOffcanvas: true
  },
  parameters: {
    controls: {
      exclude: ["search-placeholder", "search-button-label"]
    }
  },
  render: args => <z-app-header {...args} style={extractCSSVars(args)}>
      <div slot="title">Applicazione</div>
      {menuTemplate()}
    </z-app-header>
} satisfies Story`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Fragment>
        <div style={{
      padding: "16px var(--grid-margin)"
    }}>
          Scroll to see <code>stuck</code> prop in action.
        </div>
        <div style={{
      height: "200vh"
    }}>{Story()}</div>
      </Fragment>],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: "400px"
      }
    },
    controls: {
      exclude: ["enable-offcanvas", "search-placeholder", "search-button-label"]
    }
  },
  render: args => <z-app-header {...args} stuck style={extractCSSVars({
    ...args,
    "--app-header-top-offset": "0"
  })}>
      <div slot="title">Fondamenti di fisica 8e - Meccanica, Onde, Termodinamica, Elettromagnetismo, Ottica</div>
      {menuTemplate()}
    </z-app-header>
} satisfies Story`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["search-page-url", "enable-search", "enable-offcanvas"]
    }
  },
  decorators: [Story => <Fragment>
        <div style={{
      padding: "16px var(--grid-margin)"
    }}>
          The prop <code>searchPageUrl</code> only affects the component in tablet and mobile viewports.
        </div>
        {Story()}
      </Fragment>],
  render: args => <z-app-header {...args} enableSearch searchPageUrl="https://www.zanichelli.it" style={extractCSSVars(args)}>
      <div slot="title">Applicazione</div>
      <div slot="subtitle">Payoff dell'applicazione</div>
      {menuTemplate()}
    </z-app-header>
} satisfies Story`,...Z.parameters?.docs?.source}}},Q=[`Title`,`ProductLogo`,`TopTitle`,`TopTitleWithProductLogo`,`CustomMenuButton`,`MenuWithTopTitle`,`MenuWithTopTitleAndProductLogo`,`LongTitle`,`OffcanvasMenu`,`Stuck`,`SearchPageButton`]}))();export{G as CustomMenuButton,J as LongTitle,K as MenuWithTopTitle,q as MenuWithTopTitleAndProductLogo,Y as OffcanvasMenu,H as ProductLogo,Z as SearchPageButton,X as Stuck,V as Title,U as TopTitle,W as TopTitleWithProductLogo,Q as __namedExportsOrder,R as default};