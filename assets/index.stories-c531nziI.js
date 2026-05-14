import{n as e}from"./chunk-DnJy8xQt.js";import{$ as t,Q as n,X as r,et as i,nt as a,rt as o,tt as s}from"./iframe-DCi19jo_.js";import{n as c}from"./index3-DVurE89l.js";var l,u,d=e((()=>{a(),c(),l=o(class extends n{toggle(){this.hasContent&&(this.open=!this.open,this.open?this.opened.emit():this.closed.emit())}handleClick(e){this.floating&&this.open&&!this.hostElement.contains(e.target)&&(this.reflow(),this.open=!1,this.closed.emit())}onOpenChanged(){this.open?this.reflow(!0):cancelAnimationFrame(this.raf)}constructor(e){super(),!1!==e&&this.__registerHost(),this.__attachShadow(),this.opened=i(this,`opened`,7),this.closed=i(this,`closed`,7),this.floating=!1,this.open=!1,this.verticalContext=!1,this.toggle=this.toggle.bind(this),this.checkContent=this.checkContent.bind(this),this.onLabelSlotChange=this.onLabelSlotChange.bind(this),this.onItemsChange=this.onItemsChange.bind(this)}componentWillLoad(){this.checkContent()}onLabelSlotChange(e){let t=e.target.assignedElements()[0];t.dataset.text=t?.textContent}reflow(e=!1){if(this.content){let{style:e}=this.content,{left:t}=this.hostElement.getBoundingClientRect(),n=getComputedStyle(this.content).width,r=n?parseFloat(n.replace(`px`,``)):375;e.left=Math.min(window.innerWidth-t-r-30,0)+`px`}e&&(this.raf=requestAnimationFrame(this.reflow.bind(this,e)))}checkContent(){this.hasHeader=!!this.hostElement.querySelectorAll(`[slot=header]`).length,this.hasContent=!!this.hostElement.querySelectorAll(`[slot=item]`).length||this.hasHeader}onItemsChange(){this.checkContent(),this.hostElement.querySelectorAll(`[slot=item]`).forEach((e=>{e.setAttribute(`role`,`menuitem`),e.dataset.text=e.textContent}))}renderMenuLabel(){return this.hasContent?s(`button`,{class:`menu-label`,"aria-expanded":this.open?`true`:`false`,"aria-label":this.open?`Chiudi menù`:`Apri menù`,onClick:this.toggle},s(`div`,{class:`menu-label-content`},s(`slot`,{onSlotchange:this.onLabelSlotChange}),s(`z-icon`,{name:this.open?`chevron-up`:`chevron-down`}))):s(`div`,{class:`menu-label`},s(`div`,{class:`menu-label-content`},s(`slot`,{onSlotchange:this.onLabelSlotChange})))}render(){return s(t,{key:`dde3e828c6617646ed848e91c53dc624fc23bc2d`},this.renderMenuLabel(),this.hasContent&&s(`div`,{key:`9888a27020733770e87e87f2ac6193dc0430e36b`,class:`content`,ref:e=>this.content=e},this.hasHeader&&s(`header`,{key:`09a21728b3cfc859dbdf59b2441326a610c2869f`,class:`header`},s(`slot`,{key:`72bbb4073b1e76569770dc7089526e9f9b055089`,name:`header`,onSlotchange:this.checkContent})),s(`div`,{key:`f53e86dea26861a62f3e924e67f14c97e42f7861`,class:`items`,role:`menu`},s(`slot`,{key:`2b6e230e79f472828b85ba40281c9781a14dcef6`,name:`item`,onSlotchange:this.onItemsChange}))))}get hostElement(){return this}static get watchers(){return{open:[{onOpenChanged:0}]}}static get style(){return`:host,::slotted(*),*{box-sizing:border-box}:host{--z-menu-label-color:var(--color-default-text);position:relative;display:inline-flex;flex-direction:column}::slotted(a){text-decoration:none}::slotted(*){color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}.menu-label{padding:0;border:0;margin:0;background:transparent;border-radius:0;color:inherit;outline:none;text-align:left}button.menu-label{cursor:pointer}.menu-label:focus-within{z-index:1;padding-right:calc(var(--space-unit) * 0.5);padding-left:calc(var(--space-unit) * 0.5);margin-right:calc(var(--space-unit) * -0.5);margin-left:calc(var(--space-unit) * -0.5);box-shadow:var(--shadow-focus-primary)}.menu-label .menu-label-content{position:relative;display:flex;align-items:center}:host(:is([active],[open])) .menu-label-content,.menu-label:focus-within .menu-label-content{font-weight:var(--font-bd)}:host(:is([active],[open])) .menu-label-content ::slotted(*),.menu-label:focus-within .menu-label-content ::slotted(*){letter-spacing:normal}:host .menu-label .menu-label-content ::slotted(*:not([slot]):focus:focus-visible){box-shadow:none !important}:host(:is([active],[open],[vertical-context])) .menu-label .menu-label-content::after,.menu-label .menu-label-content:hover::after,.menu-label:focus-within .menu-label-content::after{position:absolute;bottom:0;left:0;width:100%;content:"";pointer-events:none}:host([vertical-context]) .menu-label-content::after{height:var(--border-size-small);background-color:var(--color-surface03)}:host(:is([active],[open])) .menu-label .menu-label-content::after,.menu-label .menu-label-content:hover::after,.menu-label:focus-within .menu-label-content::after{height:var(--border-size-large);background-color:var(--color-primary01)}::slotted([data-text])::after{height:0;content:attr(data-text);content:attr(data-text) / "";font-weight:var(--font-bd);letter-spacing:normal;pointer-events:none;user-select:none;visibility:hidden}@media speech{::slotted([data-text])::after{display:none}}::slotted([data-text]){display:inline-flex;flex-direction:column}.menu-label .menu-label-content ::slotted(*){display:inline-flex;width:100%;margin:0;appearance:none;color:var(--z-menu-label-color);font-family:var(--font-family-sans);font-size:var(--font-size-5);font-weight:inherit;letter-spacing:0.36px;line-height:1.2;outline:none}.menu-label .menu-label-content ::slotted(*),.menu-label .menu-label-content z-icon{padding:var(--space-unit) 0}.menu-label .menu-label-content z-icon{margin-left:calc(var(--space-unit) * 1.5);fill:currentcolor}.content{background:var(--color-surface01)}:host(:not([open])) .content{display:none}:host([floating]) .content{position:absolute;top:100%;left:0;width:375px;min-width:100%;max-width:100vw;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2);box-shadow:var(--shadow-2)}:host(:not([floating])) .content{width:100%}.header{display:flex;align-items:center;padding:var(--space-unit) 0 calc(var(--space-unit) * 2)}.header ::slotted(img[slot="header"]){width:calc(var(--space-unit) * 11.25);height:auto;object-fit:contain}.header ::slotted([slot="header"]:not(:first-child)){margin:auto 0;margin-left:calc(var(--space-unit) * 2.5);font-size:var(--font-size-3);font-weight:var(--font-sb);line-height:1.5}.items{display:flex;flex-direction:column;align-items:flex-start;background:inherit}.items>::slotted([slot="item"]){width:100%;margin:0;font-size:var(--font-size-3);line-height:1.25;outline:none}.items>::slotted([slot="item"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}.items>::slotted([slot="item"]:not(z-menu-section)){padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5);border-bottom:var(--border-size-small) solid var(--color-surface05)}.items>::slotted([slot="item"]:hover),.items>::slotted([slot="item"]:focus:focus-visible),.items>::slotted([slot="item"]:active){border-color:var(--color-primary01);font-weight:var(--font-bd)}`}},[257,`z-menu-deprecated`,{active:[516],floating:[516],open:[1540],verticalContext:[516,`vertical-context`],hasHeader:[32],hasContent:[32]},[[4,`click`,`handleClick`]],{open:[{onOpenChanged:0}]}]),u=l})),f,p,m,h,g;e((()=>{r(),d(),f={title:`Deprecated/ZMenuDeprecated`,component:u,args:{active:!1,floating:!0,verticalContext:!1}},p={render:e=>s(`z-menu-deprecated`,{active:e.active,floating:e.floating,verticalContext:e.verticalContext},s(`h3`,null,`Menu label`),s(`a`,{href:``,slot:`item`},`Item 1`),s(`a`,{href:``,slot:`item`},`Item 2`),s(`z-menu-section-deprecated`,{slot:`item`},s(`h3`,null,`Item 3`),s(`a`,{href:``,slot:`item`},`Item 3.1`),s(`a`,{href:``,slot:`item`},`Item 3.2`)),s(`z-menu-section-deprecated`,{slot:`item`},s(`h3`,null,`Item 4`),s(`a`,{href:``,slot:`item`},`Item 4.1`),s(`a`,{href:``,slot:`item`},`Item 4.2`)),s(`a`,{href:``,slot:`item`},`Item 5`))},m={render:e=>s(`z-menu-deprecated`,{active:e.active,floating:e.floating,verticalContext:e.verticalContext},s(`img`,{slot:`header`,src:`https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg`}),s(`h4`,{slot:`header`},`Menu header`),s(`h3`,null,`Menu label`),s(`a`,{href:``,slot:`item`},`Item 1`),s(`a`,{href:``,slot:`item`},`Item 2`),s(`z-menu-section-deprecated`,{slot:`item`},s(`h3`,null,`Item 3`),s(`a`,{href:``,slot:`item`},`Item 3.1`),s(`a`,{href:``,slot:`item`},`Item 3.2`)),s(`a`,{href:``,slot:`item`},`Item 4`))},h={parameters:{controls:{exclude:[`floating`]}},render:e=>s(`z-menu-deprecated`,{active:!0,verticalContext:e.verticalContext},s(`a`,{href:`https://cataas.com/cat/gif`,target:`_blank`},`Click me`))},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <z-menu-deprecated active={args.active} floating={args.floating} verticalContext={args.verticalContext}>
      <h3>Menu label</h3>
      <a href="" slot="item">
        Item 1
      </a>
      <a href="" slot="item">
        Item 2
      </a>
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a href="" slot="item">
          Item 3.1
        </a>
        <a href="" slot="item">
          Item 3.2
        </a>
      </z-menu-section-deprecated>
      <z-menu-section-deprecated slot="item">
        <h3>Item 4</h3>
        <a href="" slot="item">
          Item 4.1
        </a>
        <a href="" slot="item">
          Item 4.2
        </a>
      </z-menu-section-deprecated>
      <a href="" slot="item">
        Item 5
      </a>
    </z-menu-deprecated>
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <z-menu-deprecated active={args.active} floating={args.floating} verticalContext={args.verticalContext}>
      <img slot="header" src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg" />
      <h4 slot="header">Menu header</h4>
      <h3>Menu label</h3>
      <a href="" slot="item">
        Item 1
      </a>
      <a href="" slot="item">
        Item 2
      </a>
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a href="" slot="item">
          Item 3.1
        </a>
        <a href="" slot="item">
          Item 3.2
        </a>
      </z-menu-section-deprecated>
      <a href="" slot="item">
        Item 4
      </a>
    </z-menu-deprecated>
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["floating"]
    }
  },
  render: args => <z-menu-deprecated active={true} verticalContext={args.verticalContext}>
      <a href="https://cataas.com/cat/gif" target="_blank">
        Click me
      </a>
    </z-menu-deprecated>
} satisfies Story`,...h.parameters?.docs?.source}}},g=[`FloatingContentLayout`,`WithHeader`,`ActiveWithoutItems`]}))();export{h as ActiveWithoutItems,p as FloatingContentLayout,m as WithHeader,g as __namedExportsOrder,f as default};