import{n as e}from"./chunk-DnJy8xQt.js";import{_t as t,ft as n,gt as r,mt as i,pt as a,ut as o,vt as s}from"./iframe-CzRu_Q6e.js";import{K as c,s as l}from"./beans-zckFsBZy.js";import{n as u,o as d,t as f}from"./storybook-utils-BCDbkA4t.js";import{n as p}from"./index3-DRSC9954.js";var m,h,g,_=e((()=>{t(),p(),m=()=>`:host,*,::slotted(*){box-sizing:border-box}:host{--z-info-box--border-color:unset;--z-info-box--left-icon-color:var(--z-info-box--border-color, var(--color-primary01-icon));--z-info-box--background-color:var(--color-primary03);display:flex;flex-direction:column;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);border:var(--border-size-medium) solid var(--z-info-box--border-color, transparent);background:var(--z-info-box--background-color);border-radius:var(--border-radius);font-family:var(--font-family-sans);font-weight:var(--font-rg);gap:calc(var(--space-unit) * 2)}.main-content{display:flex;align-items:flex-start}.main-content .left-icon,.close-button{display:flex;height:1.25rem;align-items:center}.main-content .left-icon z-icon{--z-icon-width:1rem;--z-icon-height:1rem;fill:var(--z-info-box--left-icon-color)}::slotted([slot="content"]){color:var(--color-default-text);font-size:var(--font-size-2);line-height:1.25rem}.main-content .left-icon+::slotted([slot="content"]){margin-left:var(--space-unit)}:host([isclosable]) ::slotted([slot="content"]){margin-right:calc(var(--space-unit) * 2)}.close-button{padding:0;border:none;margin:0;margin-left:auto;background:none;cursor:pointer}.close-button z-icon{fill:var(--color-primary01-icon)}`,h=s(class extends n{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.infoBoxClose=i(this,`infoBoxClose`,7),this.isclosable=!0,this.closeButtonAriaLabel=`Chiudi pannello informazioni`}emitInfoBoxClose(){this.infoBoxClose.emit({boxid:this.boxid})}render(){return r(a,{key:`6402c135148e24414ef4df5805dd0e230a8671a1`,id:this.boxid},r(`div`,{key:`656285237abb06bc055db4ed4bf933edfe8028ef`,class:`main-content`},this.leftIcon&&r(`div`,{key:`40c6e5a4aac587f080362bb3bbfd97583d589d69`,class:`left-icon`},r(`z-icon`,{key:`737a02950ac7b498c48104b539913e5cad51f51d`,name:this.leftIcon})),r(`slot`,{key:`c301852f39cb9bf6e07c7460ef8c09fd86baf78e`,name:`content`}),this.isclosable&&r(`button`,{key:`c8b8f1cbea6be9b3047bbd112e315884512b18eb`,class:`close-button`,"aria-label":this.closeButtonAriaLabel,onClick:()=>this.emitInfoBoxClose()},r(`z-icon`,{key:`7d501f275f9e0a8fc76ce31e755325427e2b6d25`,name:`multiply`}))),r(`slot`,{key:`e516ac4cadbbe7a6c31528f6dc14545919758432`,name:`additional-content`}))}static get style(){return m()}},[257,`z-info-box`,{boxid:[1],isclosable:[516],closeButtonAriaLabel:[1,`close-button-aria-label`],leftIcon:[1,`left-icon`]}]),g=h})),v=e((()=>{})),y,b,x,S;e((()=>{o(),c(),d(),_(),v(),y={title:`ZInfoBox`,component:g,argTypes:{"--z-info-box--border-color":u([`transparent`]),"--z-info-box--background-color":u(),"--z-info-box--left-icon-color":u()},args:{isclosable:!0,"--z-info-box--background-color":`var(--color-primary03)`}},b={render:e=>r(`z-info-box`,{...e,style:f(e)},r(`span`,{slot:`content`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`))},x={args:{leftIcon:`info-filled`,"--z-info-box--border-color":`var(--color-default-error)`,"--z-info-box--background-color":`var(--color-inverse-error)`},render:e=>r(`z-info-box`,{class:`z-info-box-additional-content`,...e,style:f(e)},r(`div`,{slot:`content`},r(`div`,{class:`body-4-sb`},`Example title`),r(`div`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`)),r(`div`,{slot:`additional-content`},r(`div`,{class:`demo-box-card`},r(`div`,{class:`heading-4-sb`},`Example heading`),r(`div`,{class:`body-4`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit dignissim in.`),r(`z-button`,null,`Click me`)),r(`div`,{class:`demo-box-card`},r(`div`,{class:`heading-4-sb`},`Example heading`),r(`div`,{class:`body-4`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit dignissim in.`),r(`z-button`,{variant:l.SECONDARY},`Click me`))))},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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