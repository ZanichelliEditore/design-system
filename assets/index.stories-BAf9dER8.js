import"./lit-element--ufgQf_M.js";import{x as n}from"./lit-html-rc9TYZL2.js";import{c as g}from"./repeat-CnCsD31v.js";import{y as o,z as r,B as c}from"./index-Dk5nO_yw.js";import"./index-DxB01AEX.js";import"./index-B6a-7KeA.js";import{s as T,g as m}from"./chunk-L4EGOTBX-BzYVsoCE.js";import"./entry-preview-uRqU0LK7.js";import{d as L,H as S,c as k,h as i,a as I}from"./index-BZ0rSFNp.js";import"./directive-CF8sV3Lr.js";import"./index-9WVNbtLu.js";import"./index-DrFu-skq.js";const E=':host{font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-carousel-gutter:0;}:host([single]){display:flex;flex-direction:column;align-items:center;justify-content:center}:host([single]) .z-carousel-container{width:fit-content;max-width:100%}.z-carousel-container{display:flex;flex-direction:column}.z-carousel-title{margin-bottom:calc(var(--space-unit) * 2)}.z-carousel-wrapper{position:relative}.z-carousel-items-container{display:flex;max-width:100%;flex-direction:row;margin:0;box-shadow:var(--z-carousel-items-shadow, none);column-gap:var(--z-carousel-gutter);list-style:none;-ms-overflow-style:none;overflow-x:scroll;padding-inline-start:0;scroll-behavior:smooth;scroll-snap-type:x mandatory;scrollbar-width:none;}.z-carousel-items-container::-webkit-scrollbar{display:none}.z-carousel-items-container ::slotted(*){scroll-snap-align:center}.z-carousel-navigation-arrow[hidden]{display:none}.z-carousel-navigation-arrow[data-direction]{position:absolute;z-index:1;bottom:50%;transform:translateY(50%)}.z-carousel-navigation-arrow[data-direction="next"]{right:0}:host(:not([fixed-arrows])) .z-carousel-wrapper .z-carousel-navigation-arrow{display:none}.z-carousel-footer{display:flex;flex-direction:row;align-items:center;justify-content:center;column-gap:calc(var(--space-unit) * 3)}:host([arrows-position="bottom"]) .z-carousel-footer{margin-top:calc(var(--space-unit) * 0.75)}.z-carousel-footer .numbers-progress,.z-carousel-footer .dots-progress{display:flex;align-items:center;justify-content:center}.z-carousel-footer .dots-progress{column-gap:calc(var(--space-unit) * 3)}:host(:not([arrows-position="bottom"])) .z-carousel-footer .dots-progress{margin-top:calc(var(--space-unit) * 2)}.z-carousel-footer .dots-progress button{display:flex;width:calc(var(--space-unit) * 3);height:calc(var(--space-unit) * 3);align-items:center;padding:0;border:none;margin:0;background-color:var(--color-surface03);border-radius:calc(var(--space-unit) * 3)}.z-carousel-footer .dots-progress button.current{background-color:var(--color-primary01)}.z-carousel-footer .dots-progress button:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.z-carousel-footer .dots-progress button:not(.current){cursor:pointer}.z-carousel-footer .numbers-progress{column-gap:calc(var(--space-unit) / 2)}:host(:not([arrows-position="bottom"])) .z-carousel-footer .numbers-progress{margin-top:var(--space-unit)}.z-carousel-footer .numbers-progress .current{font-weight:var(--font-sb)}@media (min-width: 768px){:host(:not([fixed-arrows])) .z-carousel-wrapper:hover .z-carousel-navigation-arrow:not([hidden]){display:flex}}',_=class extends S{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.indexChange=k(this,"indexChange",7),this.single=!1,this.fixedArrows=!0,this.ghostLoadingHeight=100,this.infinite=!1,this.current=0,this.scrollingTo=null}onIndexChange(){this.indexChange.emit({currentItem:this.current})}onSingleModeChange(){this.single&&!this.intersectionObserver&&this.setIntersectionObserver()}onInfiniteModeChange(){this.checkNavigationValidity()}setIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(e=>{const t=e.find(({isIntersecting:a})=>a);if(!t)return;const s=this.items.findIndex(a=>a===t.target);this.highlightedIndicator=s,!(this.scrollingTo!==null&&s!==this.scrollingTo)&&(this.scrollingTo=null,this.current=s)},{root:this.itemsContainer,threshold:.5}),this.items.forEach(e=>this.intersectionObserver.observe(e))}onSlotChange(){this.items=Array.from(this.host.children),this.checkNavigationValidity(),this.setIntersectionObserver(),this.goTo(this.current)}onPrev(){if(this.single){this.goTo(this.infinite&&this.current-1<0?this.items.length-1:Math.max(0,this.current-1));return}this.itemsContainer.scrollBy({left:this.infinite&&this.itemsContainer.scrollLeft==0?this.itemsContainer.scrollWidth-this.itemsContainer.clientWidth:-this.itemsContainer.clientWidth/2,behavior:"smooth"})}onNext(){if(this.single){const e=this.infinite&&this.current+1>this.items.length-1?0:Math.min(this.current+1,this.items.length-1);return this.goTo(e)}this.itemsContainer.scrollBy({left:this.infinite&&this.itemsContainer.scrollLeft==this.itemsContainer.scrollWidth-this.itemsContainer.clientWidth?-this.itemsContainer.scrollWidth:this.itemsContainer.clientWidth/2,behavior:"smooth"})}checkNavigationValidity(){if(this.single){this.canNavigatePrev=this.current>0,this.canNavigateNext=this.current<this.items.length-1;return}this.canNavigatePrev=this.itemsContainer.scrollLeft>0,this.canNavigateNext=this.itemsContainer.scrollLeft<this.itemsContainer.scrollWidth-this.itemsContainer.clientWidth}canShowFooter(){return!this.canNavigatePrev&&!this.canNavigateNext?!1:this.arrowsPosition===o.BOTTOM||this.progressMode===r.DOTS||this.progressMode===r.NUMBERS}goTo(e){if(this.current===e)return;this.scrollingTo=e;const t=this.items.slice(0,e).reduce((s,a)=>s+=a.clientWidth,0);this.itemsContainer.scroll({left:t,behavior:"smooth"})}get canNavigate(){return this.canNavigatePrev||this.canNavigateNext}setupItems(){this.items=Array.from(this.host.children),this.items.forEach(e=>{e.setAttribute("aria-roledescription","slide")})}componentDidLoad(){var e,t;(e=this.itemsContainer)===null||e===void 0||e.addEventListener("scroll",this.checkNavigationValidity.bind(this),{passive:!0}),this.resizeObserver=new ResizeObserver(this.checkNavigationValidity.bind(this)),(t=this.resizeObserver)===null||t===void 0||t.observe(this.itemsContainer),this.setupItems(),this.single&&this.setIntersectionObserver(),this.checkNavigationValidity()}disconnectedCallback(){var e;(e=this.resizeObserver)===null||e===void 0||e.disconnect()}render(){return this.isLoading?i("div",{class:"z-carousel-container"},this.label&&i("div",{class:"heading-3-sb z-carousel-title"},this.label),i("div",{style:{height:`${this.ghostLoadingHeight}px`}},i("z-ghost-loading",null))):i(I,null,i("div",{class:"z-carousel-container","aria-roledescription":"carousel","aria-label":this.label||"Carousel"},this.label&&i("div",{class:"z-carousel-title heading-3-sb"},this.label),i("div",{class:"z-carousel-wrapper"},i("z-button",{class:"z-carousel-navigation-arrow",variant:c.SECONDARY,"data-direction":"prev",icon:"arrow-left",onClick:this.onPrev.bind(this),disabled:!this.infinite&&!this.canNavigatePrev,hidden:this.arrowsPosition!==o.OVER||!this.canNavigate,ariaLabel:this.single?"Mostra l'elemento precedente":"Mostra gli elementi precedenti"}),i("ul",{class:"z-carousel-items-container","aria-atomic":"false","aria-live":"polite",ref:e=>this.itemsContainer=e},i("slot",{onSlotchange:this.onSlotChange.bind(this)})),i("z-button",{class:"z-carousel-navigation-arrow",variant:c.SECONDARY,"data-direction":"next",icon:"arrow-right",onClick:this.onNext.bind(this),disabled:!this.infinite&&!this.canNavigateNext,hidden:this.arrowsPosition!==o.OVER||!this.canNavigate,ariaLabel:this.single?"Mostra l'elemento successivo":"Mostra gli elementi successivi"}))),this.canShowFooter()&&i("div",{class:"z-carousel-footer"},this.arrowsPosition===o.BOTTOM&&i("z-button",{class:"z-carousel-navigation-arrow",variant:c.TERTIARY,icon:"arrow-left",onClick:this.onPrev.bind(this),disabled:!this.infinite&&!this.canNavigatePrev,ariaLabel:this.single?"Mostra l'elemento precedente":"Mostra gli elementi precedenti"}),this.progressMode===r.DOTS&&this.single&&this.items&&i("div",{class:"dots-progress"},this.items.map((e,t)=>i("button",{type:"button",class:{current:this.highlightedIndicator===t},"aria-label":this.highlightedIndicator===t?"Elemento corrente":`Spostati all'elemento ${t+1}`,onClick:()=>this.goTo(t)}))),this.progressMode===r.NUMBERS&&this.single&&this.items&&i("div",{class:"numbers-progress interactive-1"},i("span",{class:"current"},this.current+1),i("span",null,"di"),i("span",null,this.items.length)),this.arrowsPosition===o.BOTTOM&&i("z-button",{class:"z-carousel-navigation-arrow",variant:c.TERTIARY,icon:"arrow-right",onClick:this.onNext.bind(this),disabled:!this.infinite&&!this.canNavigateNext,ariaLabel:this.single?"Mostra l'elemento successivo":"Mostra gli elementi successivi"})))}get host(){return this}static get watchers(){return{current:["onIndexChange"],single:["onSingleModeChange"],infinite:["onInfiniteModeChange"]}}static get style(){return E}};L(_,[1,"z-carousel",{isLoading:[4,"is-loading"],label:[1],single:[516],arrowsPosition:[520,"arrows-position"],progressMode:[8,"progress-mode"],fixedArrows:[516,"fixed-arrows"],ghostLoadingHeight:[2,"ghost-loading-height"],infinite:[4],current:[32],items:[32],highlightedIndicator:[32],canNavigatePrev:[32],canNavigateNext:[32]},void 0,{current:["onIndexChange"],single:["onSingleModeChange"],infinite:["onInfiniteModeChange"]}]);const p={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZCarousel",tagName:"z-carousel",customElement:!0,members:[{kind:"field",name:"isLoading",type:"boolean",description:"The z-carousel is on loading state"},{kind:"field",name:"label",type:"string",description:"The z-carousel title"},{kind:"field",name:"single",type:"boolean",description:"Shows only one content at a time",default:"false"},{kind:"field",name:"arrowsPosition",type:"any",description:"Arrow buttons position"},{kind:"field",name:"progressMode",type:"any",description:"Progress indicator type. Only available for `single` mode"},{kind:"field",name:"fixedArrows",type:"boolean",description:"Whether the navigation arrow buttons over the items are always visible or only on mouse hover.\nIf set to `false`, the arrows will not be visible on mobile.\nOnly meaningful with `arrowsPosition` set to `OVER`.",default:"true"},{kind:"field",name:"ghostLoadingHeight",type:"number",description:"The height of the ghost loader (only visible when `isLoading` is set to `true`)",default:"100"},{kind:"field",name:"infinite",type:"boolean",description:"When enabled, navigating next the last item will go back to the first item and vice versa.",default:"false"}],events:[{kind:"event",name:"indexChange",description:"Emitted on index change and only in `single` mode."}],cssProperties:[{name:"--z-carousel-gutter",description:"The gutter between items."},{name:"--z-carousel-items-shadow",description:"The shadow around the items."}],slots:[{name:"-",description:"Carousel items. Use `<li>` elements inside this slot."}]}],exports:[{kind:"js",name:"ZCarousel",declaration:{name:"ZCarousel",module:"src/components/z-carousel/index.tsx"}},{kind:"custom-element-definition",name:"z-carousel",declaration:{name:"ZCarousel",module:"src/components/z-carousel/index.tsx"}}]}]};T({...m()||{},...p,modules:[...(m()||{}).modules||[],...p.modules]});const q={title:"ZCarousel",component:"z-carousel",decorators:[e=>n`<div class="z-carousel-story-container">${e()}</div>`],parameters:{docs:{description:{component:"This component was conceived as a list of elements to respect the rules of accessibility (https://www.w3.org/WAI/tutorials/carousels/working-example/).\nPass any number of elements inside its main `slot`.\n@example```html\n<z-carousel>\n <li>element</li>\n <li>element</li>\n <li>element</li>\n</z-carousel>\n```\n> Note: always use `li` elements as direct children of `z-carousel`, as it wraps them with an `ul` element.\nYou can set the gutter between the elements by using the `--z-carousel-gutter` custom property.\n@example```css\nz-carousel {\n --z-carousel-gutter: calc(var(--space-unit) * 2);\n}```"}}}},d={args:{label:"","--z-carousel-gutter":"var(--space-unit)",infinite:!1,fixedArrows:!0,itemsCount:8},render:e=>n`<z-carousel
      .arrowsPosition=${o.OVER}
      .fixedArrows=${e.fixedArrows}
      .infinite=${e.infinite}
      label=${e.label}
      style="--z-carousel-gutter: ${e["--z-carousel-gutter"]}"
    >
      ${g([...new Array(e.itemsCount)].map((t,s)=>s),t=>t,(t,s)=>n`<li><div class="carousel-box">${s+1}</div></li>`)}
    </z-carousel>`},h={parameters:{layout:"centered"},argTypes:{arrowsPosition:{control:{type:"inline-radio"},options:Object.values(o)},progressMode:{control:{type:"inline-radio"},options:Object.values(r)}},args:{label:"Carousel title",progressMode:r.DOTS,arrowsPosition:o.BOTTOM,infinite:!1,fixedArrows:!0,itemsCount:8},render:e=>n`<z-carousel
      .arrowsPosition=${e.arrowsPosition}
      .fixedArrows=${e.fixedArrows}
      .infinite=${e.infinite}
      .progressMode=${e.progressMode}
      .single=${!0}
      label=${e.label}
    >
      ${g([...new Array(e.itemsCount)].map((t,s)=>s),t=>t,(t,s)=>n`<li><div class="carousel-box">${s+1}</div></li>`)}
    </z-carousel>`},l={args:{label:"Carousel title",ghostLoadingHeight:265},parameters:{controls:{exclude:["infinite"]}},render:e=>n`<z-carousel
      label=${e.label}
      .isLoading=${!0}
      .ghostLoadingHeight=${e.ghostLoadingHeight}
    ></z-carousel>`},u={args:{label:"Carousel title","--z-carousel-gutter":"8px"},parameters:{controls:{exclude:["infinite"]}},render:e=>n`<z-carousel
      label=${e.label}
      .infinite=${e.infinite}
      style="--z-carousel-gutter: ${e["--z-carousel-gutter"]}"
    >
      ${g(new Array(8),()=>n`<li>
            <div class="carousel-box-loading">
              <z-ghost-loading></z-ghost-loading>
            </div>
          </li>`)}
    </z-carousel>`};var f,v,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    "label": "",
    "--z-carousel-gutter": "var(--space-unit)",
    "infinite": false,
    "fixedArrows": true,
    "itemsCount": 8
  },
  render: args => html\`<z-carousel
      .arrowsPosition=\${CarouselArrowsPosition.OVER}
      .fixedArrows=\${args.fixedArrows}
      .infinite=\${args.infinite}
      label=\${args.label}
      style="--z-carousel-gutter: \${args["--z-carousel-gutter"]}"
    >
      \${repeat([...new Array(args.itemsCount)].map((_, i) => i), i => i, (_, index) => html\`<li><div class="carousel-box">\${index + 1}</div></li>\`)}
    </z-carousel>\`
} satisfies Story`,...(b=(v=d.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var w,z,y;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    layout: "centered"
  },
  argTypes: {
    arrowsPosition: {
      control: {
        type: "inline-radio"
      },
      options: Object.values(CarouselArrowsPosition)
    },
    progressMode: {
      control: {
        type: "inline-radio"
      },
      options: Object.values(CarouselProgressMode)
    }
  },
  args: {
    label: "Carousel title",
    progressMode: CarouselProgressMode.DOTS,
    arrowsPosition: CarouselArrowsPosition.BOTTOM,
    infinite: false,
    fixedArrows: true,
    itemsCount: 8
  },
  render: args => html\`<z-carousel
      .arrowsPosition=\${args.arrowsPosition}
      .fixedArrows=\${args.fixedArrows}
      .infinite=\${args.infinite}
      .progressMode=\${args.progressMode}
      .single=\${true}
      label=\${args.label}
    >
      \${repeat([...new Array(args.itemsCount)].map((_, i) => i), i => i, (_, index) => html\`<li><div class="carousel-box">\${index + 1}</div></li>\`)}
    </z-carousel>\`
} satisfies Story`,...(y=(z=h.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var x,C,$,M,O;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Carousel title",
    ghostLoadingHeight: 265
  },
  parameters: {
    controls: {
      exclude: ["infinite"]
    }
  },
  render: args => html\`<z-carousel
      label=\${args.label}
      .isLoading=\${true}
      .ghostLoadingHeight=\${args.ghostLoadingHeight}
    ></z-carousel>\`
} satisfies Story`,...($=(C=l.parameters)==null?void 0:C.docs)==null?void 0:$.source},description:{story:"You can handle ghost loading for the whole z-carousel by setting two properties:\n- `isLoading` (boolean): to show a `z-ghost-loading` component instead of the carousel content.\n- `ghostLoadingHeight` (number): to set the height of the `z-ghost-loading` component.\nYou can also manually handle ghost loading by putting <z-ghost-loading> elements as items.",...(O=(M=l.parameters)==null?void 0:M.docs)==null?void 0:O.description}}};var N,P,A;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    "label": "Carousel title",
    "--z-carousel-gutter": "8px"
  },
  parameters: {
    controls: {
      exclude: ["infinite"]
    }
  },
  render: args => html\`<z-carousel
      label=\${args.label}
      .infinite=\${args.infinite}
      style="--z-carousel-gutter: \${args["--z-carousel-gutter"]}"
    >
      \${repeat(new Array(8), () => html\`<li>
            <div class="carousel-box-loading">
              <z-ghost-loading></z-ghost-loading>
            </div>
          </li>\`)}
    </z-carousel>\`
} satisfies Story`,...(A=(P=u.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const J=["SlideshowWithArrowsOver","SingleMode","GhostLoading","LoadingItems"];export{l as GhostLoading,u as LoadingItems,h as SingleMode,d as SlideshowWithArrowsOver,J as __namedExportsOrder,q as default};
