import{n as e}from"./chunk-DnJy8xQt.js";import{$ as t,Q as n,X as r,Z as i,it as a,nt as o,rt as s}from"./iframe-e9i3gKXJ.js";import{J as c,l}from"./beans-NNuswqO1.js";import{o as u,t as d}from"./storybook-utils-X33q-Ruv.js";import{H as f,P as p}from"./index2-D8kPOPlZ.js";import{n as m}from"./index3-DmUKOwU9.js";import{t as h}from"./internal-BvzTEniA.js";var g,_,v,y=e((()=>{s(),p(),m(),g=()=>`:host{--aspect-ratio:1.62;--z-card--border-color:var(--gray200);--z-card--color-cover-background:var(--color-surface01);--z-card--text-background:var(--color-surface01);--z-card--text-border-radius:none;--z-card--text-border:none;--z-card--text-padding:calc(var(--space-unit) * 2) var(--space-unit);position:relative;display:flex;flex-direction:column;font-family:var(--font-family-sans);font-weight:var(--font-rg)}*,::slotted(*){box-sizing:border-box}*:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}:host(:not([variant="overlay"])) .cover-container{position:relative;width:100%}.cover-container{padding-bottom:calc(100% / var(--aspect-ratio))}::slotted([slot="cover"]),.color-cover{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center}.cover-container>z-icon{--z-icon-width:calc(var(--space-unit) * 11);--z-icon-height:var(--z-icon-width);position:absolute;top:calc(50% - calc(var(--z-icon-height) / 2));left:calc(50% - calc(var(--z-icon-width) / 2));fill:var(--color-primary01)}.color-cover{background-color:var(--z-card--color-cover-background)}.content{display:flex;flex-direction:column;padding-top:var(--space-unit)}.color-cover .cover-content{display:flex;height:100%;flex-direction:column;justify-content:flex-end;padding:var(--space-unit)}::slotted([slot="metadata"]),::slotted([slot="title"]),::slotted([slot="text"]){display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical}::slotted([slot="title"]:not(:last-child)),::slotted([slot="text"]:not(:last-child)){margin-bottom:var(--space-unit)}::slotted([slot="title"])::before{position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;content:""}::slotted([slot="metadata"]){width:100%;-webkit-line-clamp:1;line-clamp:1;text-transform:uppercase}::slotted([slot="metadata"]:not(:last-child)){margin:0 0 calc(var(--space-unit) * 0.25)}::slotted([slot="title"]){margin:0;font-size:var(--font-size-3);font-weight:var(--font-sb);-webkit-line-clamp:2;line-clamp:2;text-decoration:none}::slotted([slot="title"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary);outline:none}::slotted([slot="text"]){width:100%;margin:0;-webkit-line-clamp:3;line-clamp:3}.actions{display:flex;align-items:center}:host(:not([variant="overlay"])) .actions{margin-top:auto}::slotted([slot="action"]){position:relative;z-index:2}::slotted([slot="action"]:not(:last-child)){margin-right:calc(var(--space-unit) * 2)}::slotted([slot="action"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary);outline:none !important}:host([clickable]) ::slotted([slot="title"]:focus:focus-visible){box-shadow:none !important;outline:none !important}:host([clickable]) ::slotted([slot="title"]:focus:focus-visible)::before{box-shadow:var(--shadow-focus-primary)}:host([variant="text"]){border:var(--z-card--text-border);background-color:var(--z-card--text-background);border-radius:var(--z-card--text-border-radius)}:host([variant="text"]) [slot="text"]::before{border-radius:var(--z-card--text-border-radius)}:host([show-shadow])>.content,:host([variant="border"])>.content,:host([variant="shadow"])>.content{height:100%;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2)}:host([variant="text"])>.content{padding:var(--z-card--text-padding)}:host([variant="border"]){border:var(--border-size-small) solid var(--z-card--border-color)}:host([variant="border"][clickable]:hover)>.content{background:var(--color-background)}:host([variant="border"][clickable]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant="border"][clickable]:active){border-color:transparent}:host([variant="shadow"]),:host([show-shadow]){box-shadow:var(--shadow-2)}:host([variant="shadow"][clickable]:hover),:host([clickable][show-shadow]:hover){box-shadow:var(--shadow-4)}:host([variant="shadow"][clickable]:focus:focus-visible),:host([clickable][show-shadow]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant="shadow"][clickable]:active),:host([clickable][show-shadow]:active){box-shadow:none}:host([variant="overlay"]) .content{position:absolute;top:0;right:0;bottom:0;left:0;justify-content:flex-end;padding:var(--space-unit);background-image:linear-gradient(to top, rgb(0 0 0 / 100%), rgb(0 0 0 / 0%));color:var(--color-text-inverse);fill:var(--color-text-inverse)}`,_=a(class extends n{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.showShadow=!1,this.clickable=!1}componentWillLoad(){this.hasCoverImage=this.host.querySelector(`[slot="cover"]`)!==null}renderColorCoverCard(){return[o(`div`,{class:`cover-container`},o(`div`,{class:`color-cover`},o(`div`,{class:`cover-content`},o(`slot`,{name:`metadata`}),o(`slot`,{name:`title`})))),o(`div`,{class:`content`},o(`slot`,{name:`text`}),o(`div`,{class:`actions`},o(`slot`,{name:`action`})))]}renderContent(){return o(`div`,{class:`content`},o(`slot`,{name:`metadata`}),o(`slot`,{name:`title`}),o(`slot`,{name:`text`}),o(`div`,{class:`actions`},o(`slot`,{name:`action`})))}render(){return this.variant===f.TEXT?o(t,null,this.renderContent()):this.variant===f.OVERLAY||this.hasCoverImage?o(t,null,o(`div`,{class:`cover-container`},this.hasCoverImage&&[o(`slot`,{name:`cover`}),this.variant!==f.OVERLAY&&this.coverIcon&&o(`z-icon`,{name:this.coverIcon})],!this.hasCoverImage&&o(`div`,{class:`color-cover`})),this.renderContent()):o(t,null,this.renderColorCoverCard())}get host(){return this}static get style(){return g()}},[257,`z-card`,{variant:[513],coverIcon:[1,`cover-icon`],showShadow:[516,`show-shadow`],clickable:[516],hasCoverImage:[32]}]),v=_})),b=e((()=>{})),x,S,C,w,T,E,D,O,k,A;e((()=>{r(),h(),c(),u(),y(),b(),x=(e=!0)=>o(i,null,e&&o(`img`,{slot:`cover`,src:`https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg`}),o(`span`,{class:`body-5`,slot:`metadata`},`metadata`),o(`a`,{href:`https://google.it`,target:`_blank`,slot:`title`},o(`span`,null,`Card title`)),o(`p`,{class:`body-3`,slot:`text`},`Some description for the content of the card.`),o(`button`,{slot:`action`},o(`z-icon`,{name:`share`})),o(`button`,{slot:`action`},o(`z-icon`,{name:`delete`}))),S={title:`ZCard`,component:v,argTypes:{variant:{control:{type:`inline-radio`,labels:{null:`default`}},options:[null,...Object.values(l)]}},args:{variant:null,showShadow:!1,clickable:!1},render:e=>o(`z-card`,{class:`demo-card`,...e,style:d(e)},x())},C={},w={args:{coverIcon:`play-filled`}},T={args:{"--z-card--color-cover-background":`var(--yellow500)`}},E={args:{"--z-card--text-border-radius":`4px`},parameters:{controls:{exclude:[`variant`]}},render:e=>o(`z-card`,{class:`text-variant-card primary-bg`,...e,variant:l.TEXT,style:{...d(e),"--z-card--text-background":`var(--color-primary01)`,color:`var(--color-text-inverse)`}},x(!1))},D={args:{"--z-card--text-border":`2px solid var(--gray800)`,"--z-card--text-border-radius":`4px`,"--z-card--text-padding":`16px 8px`},parameters:{controls:{exclude:[`variant`]}},render:e=>o(`z-card`,{class:`text-variant-card surface-bg`,...e,variant:l.TEXT,style:{...d(e),"--z-card--text-background":`var(--color-surface01)`}},x(!1))},O=()=>{let e=document.getElementById(`click-alert-container`);e&&(window.currentClickCount=(window.currentClickCount||0)+1,e.innerText=`Card click count: ${window.currentClickCount}`)},k={parameters:{controls:{exclude:[`clickable`,`show-shadow`]}},render:e=>o(i,null,o(`z-card`,{class:`demo-card`,...e,variant:e.variant,clickable:!0},o(`img`,{slot:`cover`,src:`https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg`}),o(`span`,{class:`body-5`,slot:`metadata`},`metadata`),o(`button`,{id:`btn-card`,onClick:O,slot:`title`},o(`span`,null,`Card title`)),o(`p`,{class:`body-3`,slot:`text`},`Some description for the content of the card.`),o(`button`,{slot:`action`},o(`z-icon`,{name:`share`})),o(`button`,{slot:`action`},o(`z-icon`,{name:`delete`}))),o(`div`,{id:`click-alert-container`},`Card click count: `,window.currentClickCount||0))},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{} satisfies Story`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    coverIcon: "play-filled"
  }
} satisfies Story`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    "--z-card--color-cover-background": "var(--yellow500)"
  }
} satisfies Story`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    "--z-card--text-border-radius": "4px"
  },
  parameters: {
    controls: {
      exclude: ["variant"]
    }
  },
  render: args => <z-card class="text-variant-card primary-bg" {...args} variant={CardVariant.TEXT} style={{
    ...extractCSSVars(args),
    "--z-card--text-background": "var(--color-primary01)",
    "color": "var(--color-text-inverse)"
  }}>
      {cardContent(false)}
    </z-card>
} satisfies Story`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    "--z-card--text-border": "2px solid var(--gray800)",
    "--z-card--text-border-radius": "4px",
    "--z-card--text-padding": "16px 8px"
  },
  parameters: {
    controls: {
      exclude: ["variant"]
    }
  },
  render: args => <z-card class="text-variant-card surface-bg" {...args} variant={CardVariant.TEXT} style={{
    ...extractCSSVars(args),
    "--z-card--text-background": "var(--color-surface01)"
  }}>
      {cardContent(false)}
    </z-card>
} satisfies Story`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["clickable", "show-shadow"]
    }
  },
  render: args => <Fragment>
      <z-card class="demo-card" {...args} variant={args.variant} clickable>
        <img slot="cover" src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg" />
        <span class="body-5" slot="metadata">
          metadata
        </span>
        <button id="btn-card" onClick={onCardButtonClick} slot="title">
          <span>Card title</span>
        </button>
        <p class="body-3" slot="text">
          Some description for the content of the card.
        </p>
        <button slot="action">
          <z-icon name="share"></z-icon>
        </button>
        <button slot="action">
          <z-icon name="delete"></z-icon>
        </button>
      </z-card>
      <div id="click-alert-container">Card click count: {window["currentClickCount"] || 0}</div>
    </Fragment>
} satisfies Story`,...k.parameters?.docs?.source}}},A=[`WithImage`,`WithImageAndIcon`,`ColorCover`,`TextVariantPrimaryBackground`,`TextVariantSurfaceBackgroundAndBordered`,`WithImageAndClickListener`]}))();export{T as ColorCover,E as TextVariantPrimaryBackground,D as TextVariantSurfaceBackgroundAndBordered,C as WithImage,k as WithImageAndClickListener,w as WithImageAndIcon,A as __namedExportsOrder,S as default};