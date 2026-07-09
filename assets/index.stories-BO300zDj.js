import{n as e}from"./chunk-DnJy8xQt.js";import{$ as t,Z as n,at as r,et as i,it as a,rt as o,tt as s}from"./iframe-C2Ij1bKG.js";import{K as c,s as l}from"./beans-zckFsBZy.js";import{n as u,o as d,t as f}from"./storybook-utils-BCDbkA4t.js";import{n as p}from"./index3-Ce5rv4en.js";var m,h,g,_=e((()=>{a(),p(),m=()=>`:host,*,::slotted(*){box-sizing:border-box}:host{--z-info-box--border-color:unset;--z-info-box--left-icon-color:var(--z-info-box--border-color, var(--color-primary01-icon));--z-info-box--background-color:var(--color-primary03);display:flex;flex-direction:column;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);border:var(--border-size-medium) solid var(--z-info-box--border-color, transparent);background:var(--z-info-box--background-color);border-radius:var(--border-radius);font-family:var(--font-family-sans);font-weight:var(--font-rg);gap:calc(var(--space-unit) * 2)}.main-content{display:flex;align-items:flex-start}.main-content .left-icon,.close-button{display:flex;height:1.25rem;align-items:center}.main-content .left-icon z-icon{--z-icon-width:1rem;--z-icon-height:1rem;fill:var(--z-info-box--left-icon-color)}::slotted([slot="content"]){color:var(--color-default-text);font-size:var(--font-size-2);line-height:1.25rem}.main-content .left-icon+::slotted([slot="content"]){margin-left:var(--space-unit)}:host([isclosable]) ::slotted([slot="content"]){margin-right:calc(var(--space-unit) * 2)}.close-button{padding:0;border:none;margin:0;margin-left:auto;background:none;cursor:pointer}.close-button z-icon{fill:var(--color-primary01-icon)}`,h=r(class extends t{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.infoBoxClose=s(this,`infoBoxClose`,7),this.isclosable=!0,this.closeButtonAriaLabel=`Chiudi pannello informazioni`}emitInfoBoxClose(){this.infoBoxClose.emit({boxid:this.boxid})}render(){return o(i,{key:`9a10d9eb99bec3ab96a9f2d76f22a82b88ef5d93`,id:this.boxid},o(`div`,{key:`3c1a9b5aed8fcd4e7edfd6103184043797db0611`,class:`main-content`},this.leftIcon&&o(`div`,{key:`4937f035f9734d141e3040d2b306eedc760fd52d`,class:`left-icon`},o(`z-icon`,{key:`6ddcc20b0985831563a297c47181902bf7724513`,name:this.leftIcon})),o(`slot`,{key:`2f0cbf4d39f61c3525e386400ec6246bd7c9e836`,name:`content`}),this.isclosable&&o(`button`,{key:`977c3bc85ce7b21d4651258c912d54a43e031b52`,class:`close-button`,"aria-label":this.closeButtonAriaLabel,onClick:()=>this.emitInfoBoxClose()},o(`z-icon`,{key:`374bd9fa23bfda2f053f4d48c3fad67b75edee7e`,name:`multiply`}))),o(`slot`,{key:`72945f9fee87f68a7de5f2aae470d8331b887dac`,name:`additional-content`}))}static get style(){return m()}},[257,`z-info-box`,{boxid:[1],isclosable:[516],closeButtonAriaLabel:[1,`close-button-aria-label`],leftIcon:[1,`left-icon`]}]),g=h})),v=e((()=>{})),y,b,x,S;e((()=>{n(),c(),d(),_(),v(),y={title:`ZInfoBox`,component:g,argTypes:{"--z-info-box--border-color":u([`transparent`]),"--z-info-box--background-color":u(),"--z-info-box--left-icon-color":u()},args:{isclosable:!0,"--z-info-box--background-color":`var(--color-primary03)`}},b={render:e=>o(`z-info-box`,{...e,style:f(e)},o(`span`,{slot:`content`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`))},x={args:{leftIcon:`info-filled`,"--z-info-box--border-color":`var(--color-default-error)`,"--z-info-box--background-color":`var(--color-inverse-error)`},render:e=>o(`z-info-box`,{class:`z-info-box-additional-content`,...e,style:f(e)},o(`div`,{slot:`content`},o(`div`,{class:`body-4-sb`},`Example title`),o(`div`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`)),o(`div`,{slot:`additional-content`},o(`div`,{class:`demo-box-card`},o(`div`,{class:`heading-4-sb`},`Example heading`),o(`div`,{class:`body-4`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit dignissim in.`),o(`z-button`,null,`Click me`)),o(`div`,{class:`demo-box-card`},o(`div`,{class:`heading-4-sb`},`Example heading`),o(`div`,{class:`body-4`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit dignissim in.`),o(`z-button`,{variant:l.SECONDARY},`Click me`))))},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <z-info-box {...args} style={extractCSSVars(args)}>
      <span slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
        dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </span>
    </z-info-box>
} satisfies Meta<ZInfoBoxStoriesArgs>`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "leftIcon": "info-filled",
    "--z-info-box--border-color": "var(--color-default-error)",
    "--z-info-box--background-color": "var(--color-inverse-error)"
  },
  render: args => <z-info-box class="z-info-box-additional-content" {...args} style={extractCSSVars(args)}>
      <div slot="content">
        <div class="body-4-sb">Example title</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
          dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </div>
      </div>
      <div slot="additional-content">
        <div class="demo-box-card">
          <div class="heading-4-sb">Example heading</div>
          <div class="body-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
            dignissim in.
          </div>
          <z-button>Click me</z-button>
        </div>

        <div class="demo-box-card">
          <div class="heading-4-sb">Example heading</div>
          <div class="body-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
            dignissim in.
          </div>
          <z-button variant={ButtonVariant.SECONDARY}>Click me</z-button>
        </div>
      </div>
    </z-info-box>
} satisfies Meta<ZInfoBoxStoriesArgs>`,...x.parameters?.docs?.source}}},S=[`Default`,`AdditionalContent`]}))();export{x as AdditionalContent,b as Default,S as __namedExportsOrder,y as default};