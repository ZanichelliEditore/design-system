import{n as e}from"./chunk-DnJy8xQt.js";import{$ as t,Q as n,X as r,et as i,nt as a,rt as o,tt as s}from"./iframe-DCi19jo_.js";import{N as c,s as l}from"./index2-FE8JoBwn.js";import{n as u}from"./index3-DVurE89l.js";import{i as d,l as f}from"./utils-DgqwYHSA.js";import{n as p,t as m}from"./z-menu-section-D_oQAt8G.js";var h,g,_,v=e((()=>{a(),c(),f(),u(),h=e=>e?.tagName===`Z-MENU-SECTION`,g=o(class extends n{get focusableItem(){return this.items.find((e=>h(e)?e.htmlTabindex===0:e.tabIndex===0))}toggle(){this.hasContent&&(this.open=!this.open)}onLabelSlotChange(e){let t=e.target.assignedElements()[0];t.dataset.text=t?.textContent,this.setLabelA11yAttrs()}reflow(e=!1){if(this.floating){if(this.content&&this.hasContent){let{style:e}=this.content,{left:t}=this.host.getBoundingClientRect(),n=getComputedStyle(this.content).width,r=n?parseFloat(n.replace(`px`,``)):375;e.left=Math.min(window.innerWidth-t-r-30,0)+`px`}e&&(this.raf=requestAnimationFrame(this.reflow.bind(this,e)))}}checkContent(){this.hasHeader=!!this.host.querySelectorAll(`[slot=header]`).length,this.hasContent=!!this.host.querySelectorAll(`[slot=item]`).length||this.hasHeader}setItemTabindex(e,t){h(e)?e.htmlTabindex=t:e.tabIndex=t}setItemsA11yAttrs(){this.items.forEach(((e,t)=>{this.setItemTabindex(e,t===0?0:-1),h(e)||e.setAttribute(`role`,`menuitem`)}))}onItemsChange(){this.checkContent(),this.items=Array.from(this.host.children).filter((({slot:e})=>e===`item`)),this.setItemsA11yAttrs(),this.items.forEach((e=>{h(e)||(e.dataset.text=e.textContent)}))}moveFocus(e,t){h(e)?e.setFocus():(e.tabIndex=0,setTimeout((()=>{e.focus()}),100)),t&&this.setItemTabindex(t,-1)}onLabelClick(){this.toggle(),this.setFocus()}onLabelKeydown(e){if(e.key===l.ENTER||e.key===l.SPACE)return e.preventDefault(),e.stopPropagation(),this.toggle(),void(this.open&&this.moveFocus(this.items[0]));this.verticalContext&&(e.key!==l.ARROW_RIGHT||this.open||(e.preventDefault(),e.stopPropagation(),this.open=!0,this.moveFocus(this.items[0])))}async setFocus(){this.htmlTabindex=0,(this.hasContent?this.labelButton:this.host.firstElementChild).focus()}async focusLastItem(){let e=this.items[this.items.length-1];h(e)&&e.open?e.focusLastItem():this.moveFocus(e)}onOpenChanged(){if(!this.open)return cancelAnimationFrame(this.raf),this.closed.emit(),void this.items.forEach((e=>{h(e)&&e.open&&(e.open=!1)}));this.setItemsA11yAttrs(),this.opened.emit(),this.floating&&this.reflow(!0)}setLabelA11yAttrs(){if(this.hasContent&&this.labelButton)return void(this.labelButton.tabIndex=this.htmlTabindex);let e=this.host.firstElementChild;e.role=`menuitem`,e.tabIndex=this.htmlTabindex}onItemClick(e){let t=this.items.find((t=>d(t,e.target)));t&&this.items.forEach((e=>{e!==t&&(h(e)?e.htmlTabindex=-1:e.tabIndex=-1)}))}onKeyDown(e){if(this.hasContent)switch(e.key){case l.ESC:if(!this.open)break;e.stopPropagation(),e.preventDefault(),this.open=!1,this.setFocus();break;case l.ARROW_DOWN:{if(document.activeElement===this.host){if(this.verticalContext&&!this.open)break;e.stopPropagation(),e.preventDefault(),this.open||(this.open=!0),this.moveFocus(this.items[0]);break}let t=this.items.indexOf(this.focusableItem);if(this.verticalContext&&t===this.items.length-1){this.setItemTabindex(this.items[t],-1),this.htmlTabindex=0;break}e.stopPropagation(),e.preventDefault();let n=this.items[t+1];this.moveFocus(n??this.items[0],this.focusableItem);break}case l.ARROW_UP:{if(document.activeElement===this.host){if(this.verticalContext)break;e.stopPropagation(),e.preventDefault(),this.open||(this.open=!0),this.moveFocus(this.items[this.items.length-1],this.focusableItem);break}e.stopPropagation(),e.preventDefault();let t=this.items.indexOf(this.focusableItem);if(t===0&&this.verticalContext){this.setItemTabindex(this.focusableItem,-1),this.setFocus();break}let n=this.items[t-1]??this.items[this.items.length-1];if(h(n)&&n.open){this.setItemTabindex(this.focusableItem,-1),n.focusLastItem();break}this.moveFocus(n,this.focusableItem);break}case l.ARROW_LEFT:if(!this.open||!this.verticalContext)break;e.preventDefault(),e.stopPropagation(),this.open=!1,this.setFocus()}}constructor(e){super(),!1!==e&&this.__registerHost(),this.__attachShadow(),this.opened=i(this,`opened`,7),this.closed=i(this,`closed`,7),this.floating=!0,this.open=!1,this.verticalContext=!1,this.htmlTabindex=-1,this.items=[],this.toggle=this.toggle.bind(this),this.checkContent=this.checkContent.bind(this),this.onLabelSlotChange=this.onLabelSlotChange.bind(this),this.onLabelClick=this.onLabelClick.bind(this),this.onItemsChange=this.onItemsChange.bind(this),this.onLabelKeydown=this.onLabelKeydown.bind(this)}componentWillLoad(){this.setLabelA11yAttrs(),this.onItemsChange()}render(){return this.hasContent?s(t,null,s(`button`,{ref:e=>this.labelButton=e,class:`menu-label`,"aria-expanded":``+!!this.open,"aria-haspopup":``+this.hasContent,"aria-label":this.open?`Chiudi menù`:`Apri menù`,role:`menuitem`,tabIndex:this.htmlTabindex,onClick:this.onLabelClick,onKeyDown:this.onLabelKeydown},s(`slot`,{onSlotchange:this.onLabelSlotChange}),s(`z-icon`,{name:this.open?`chevron-up`:`chevron-down`})),s(`div`,{class:`content`,ref:e=>this.content=e},this.hasHeader&&s(`header`,{class:`header`},s(`slot`,{name:`header`,onSlotchange:this.checkContent})),s(`div`,{class:`items`,role:`menu`},s(`slot`,{name:`item`,onSlotchange:this.onItemsChange})))):s(`div`,{class:`menu-label`},s(`slot`,{onSlotchange:this.onLabelSlotChange}))}get host(){return this}static get watchers(){return{open:[{onOpenChanged:0}],htmlTabindex:[{setLabelA11yAttrs:0}]}}static get style(){return`:host,::slotted(*),*{box-sizing:border-box;outline:none}:host{position:relative;display:inline-flex;height:fit-content;flex-direction:column}::slotted(a){text-decoration:none}::slotted(*){color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}.menu-label{position:relative;display:flex;width:100%;align-items:center;padding:0;border:0;border-bottom:var(--border-size-large) solid transparent;margin:0;background:transparent;border-radius:0;color:inherit;text-align:left}button.menu-label{cursor:pointer}.menu-label:focus-visible,div.menu-label:focus-within{box-shadow:var(--shadow-focus-primary)}:host(:is([active],[open])) .menu-label ::slotted(*),.menu-label:focus-visible ::slotted(*),div.menu-label:focus-within ::slotted(*){color:var(--color-primary01);font-weight:var(--font-bd)}:host([vertical-context]) .menu-label{padding:var(--space-unit) 0;border-width:var(--border-size-small);border-color:var(--color-surface03)}:host(:is([active],[open])) .menu-label,.menu-label:hover,.menu-label:focus-visible,div.menu-label:focus-within{border-color:var(--color-primary01)}:host([vertical-context]:is([active],[open])) .menu-label::after,:host([vertical-context]) .menu-label:hover::after,:host([vertical-context]) .menu-label:focus-visible::after,:host([vertical-context]) div.menu-label:focus-within::after{position:absolute;bottom:calc(var(--border-size-small) * -1);left:0;width:100%;height:var(--border-size-large);background-color:var(--color-primary01);content:""}:host([vertical-context]) .menu-label ::slotted(*){padding:0}.menu-label ::slotted(*){display:inline-flex;width:100%;min-width:fit-content;padding-bottom:2px;margin:0;appearance:none;color:var(--z-menu-label-color, var(--color-default-text));font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:inherit;line-height:1.5;white-space:nowrap}.menu-label z-icon{margin-left:calc(var(--space-unit) * 1.5);fill:var(--color-default-icon)}::slotted([data-text]:not([slot]))::after{height:0;content:attr(data-text);content:attr(data-text) / "";font-weight:var(--font-bd);letter-spacing:normal;pointer-events:none;user-select:none;visibility:hidden}@media speech{::slotted([data-text]:not([slot]))::after{display:none}}::slotted([data-text]:not([slot])){display:inline-flex;flex-direction:column}.content{background:var(--color-surface01)}:host(:not([open])) .content{display:none}:host([floating]:not([vertical-context])) .content{position:absolute;top:100%;left:0;width:375px;min-width:100%;max-width:100vw;padding:0 calc(var(--space-unit) * 2);box-shadow:var(--shadow-2)}:host(:not([floating])) .content{width:100%}.header{display:flex;align-items:center;padding:var(--space-unit) 0 calc(var(--space-unit) * 2)}.header ::slotted(img[slot="header"]){width:calc(var(--space-unit) * 11.25);height:auto;object-fit:contain}.header ::slotted([slot="header"]:not(:first-child)){margin:auto 0;margin-left:calc(var(--space-unit) * 2.5);font-size:var(--font-size-3);font-weight:var(--font-sb);line-height:1.5}.items{display:flex;flex-direction:column;align-items:flex-start;background:inherit}.items>::slotted([slot="item"]){width:100%;margin:0;font-size:var(--font-size-3);line-height:1.5}.items>::slotted([slot="item"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}.items>::slotted([slot="item"]:not(z-menu-section)){padding:var(--space-unit) 0;border-bottom:var(--border-size-small) solid var(--color-surface03)}:host(:not([vertical-context])) .items>::slotted([slot="item"]:last-child){border-bottom:0}.items>::slotted([slot="item"]:hover),.items>::slotted([slot="item"]:focus:focus-visible),.items>::slotted([slot="item"]:active),.items>::slotted([slot="item"][active]),.items>::slotted([slot="item"][data-active]){border-color:var(--color-primary01);font-weight:var(--font-bd)}`}},[257,`z-menu`,{active:[516],floating:[516],open:[1540],verticalContext:[516,`vertical-context`],htmlTabindex:[1026,`html-tabindex`],hasHeader:[32],hasContent:[32],setFocus:[64],focusLastItem:[64]},[[4,`click`,`onItemClick`],[0,`keydown`,`onKeyDown`]],{open:[{onOpenChanged:0}],htmlTabindex:[{setLabelA11yAttrs:0}]}]),_=g})),y,b,x,S,C;e((()=>{r(),p(),v(),y={title:`ZMenu/ZMenu`,component:_,subcomponents:{ZMenuSection:m},args:{active:!1,floating:!0}},b={render:e=>s(`z-menu`,e,s(`h3`,null,`Menu label`),s(`a`,{href:``,slot:`item`},`Item 1`),s(`a`,{href:``,slot:`item`},`Item 2`),s(`z-menu-section`,{slot:`item`},s(`h3`,null,`Item 3`),s(`a`,{href:``,slot:`section`},`Item 3.1`),s(`a`,{href:``,slot:`section`},`Item 3.2`)),s(`z-menu-section`,{slot:`item`},s(`h3`,null,`Item 4`),s(`a`,{href:``,slot:`section`},`Item 4.1`),s(`a`,{href:``,slot:`section`},`Item 4.2`)),s(`a`,{href:``,slot:`item`},`Item 5`))},x={render:e=>s(`z-menu`,e,s(`img`,{slot:`header`,src:`https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg`}),s(`h4`,{slot:`header`},`Menu header`),s(`h3`,null,`Menu label`),s(`a`,{href:``,slot:`item`},`Item 1`),s(`a`,{href:``,slot:`item`},`Item 2`),s(`z-menu-section`,{slot:`item`},s(`h3`,null,`Item 3`),s(`a`,{href:``,slot:`section`},`Item 3.1`),s(`a`,{href:``,slot:`section`},`Item 3.2`)),s(`a`,{href:``,slot:`item`},`Item 4`))},S={parameters:{controls:{exclude:[`floating`]}},args:{active:!0},render:e=>s(`z-menu`,e,s(`a`,{href:`https://cataas.com/cat/gif`,target:`_blank`},`Click me`))},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <z-menu {...args}>
      <h3>Menu label</h3>
      <a href="" slot="item">
        Item 1
      </a>
      <a href="" slot="item">
        Item 2
      </a>
      <z-menu-section slot="item">
        <h3>Item 3</h3>
        <a href="" slot="section">
          Item 3.1
        </a>
        <a href="" slot="section">
          Item 3.2
        </a>
      </z-menu-section>
      <z-menu-section slot="item">
        <h3>Item 4</h3>
        <a href="" slot="section">
          Item 4.1
        </a>
        <a href="" slot="section">
          Item 4.2
        </a>
      </z-menu-section>
      <a href="" slot="item">
        Item 5
      </a>
    </z-menu>
} satisfies Story`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <z-menu {...args}>
      <img slot="header" src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg" />
      <h4 slot="header">Menu header</h4>
      <h3>Menu label</h3>
      <a href="" slot="item">
        Item 1
      </a>
      <a href="" slot="item">
        Item 2
      </a>
      <z-menu-section slot="item">
        <h3>Item 3</h3>
        <a href="" slot="section">
          Item 3.1
        </a>
        <a href="" slot="section">
          Item 3.2
        </a>
      </z-menu-section>
      <a href="" slot="item">
        Item 4
      </a>
    </z-menu>
} satisfies Story`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["floating"]
    }
  },
  args: {
    active: true
  },
  render: args => <z-menu {...args}>
      <a href="https://cataas.com/cat/gif" target="_blank">
        Click me
      </a>
    </z-menu>
} satisfies Story`,...S.parameters?.docs?.source}}},C=[`FloatingContentLayout`,`WithHeader`,`ActiveWithoutItems`]}))();export{S as ActiveWithoutItems,b as FloatingContentLayout,x as WithHeader,C as __namedExportsOrder,y as default};