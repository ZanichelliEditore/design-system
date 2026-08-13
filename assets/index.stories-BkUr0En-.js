import{n as e}from"./chunk-DnJy8xQt.js";import{_t as t,ft as n,gt as r,pt as i,ut as a,vt as o}from"./iframe-CzRu_Q6e.js";import{K as s,b as c,m as l,p as u,s as d}from"./beans-zckFsBZy.js";import{n as f,o as p,t as m}from"./storybook-utils-BCDbkA4t.js";import{A as h,c as g,u as _}from"./index2-BFW8y5_u.js";var v,y,b,x=e((()=>{t(),h(),v=()=>`:host{--cover-hero-overlay:linear-gradient(270deg, #0000 0%, #000000e6 100%);--cover-hero-text-color:var(--color-text-inverse);display:block;overflow:hidden}:host,*{box-sizing:border-box}:host .main-container{position:relative;width:100%;align-items:baseline}:host .content-container{color:var(--cover-hero-text-color);fill:var(--cover-hero-text-color)}:host .main-container .cover-container{position:relative;width:100%;padding-top:calc(100% / (var(--cover-hero-aspect-ratio, var(--image-aspect-ratio, 16/9))));background-color:var(--gray600)}::slotted([slot="cover"]){position:absolute;display:block;width:100%;height:100%;inset:0;object-fit:cover;object-position:top center}::slotted(z-info-reveal){position:absolute;z-index:1;right:var(--grid-margin);bottom:var(--grid-margin)}:host([variant="overlay"]:not([preserve-aspect-ratio=""],[preserve-aspect-ratio="true"])) .main-container{height:100%}:host([variant="overlay"]:not([preserve-aspect-ratio=""],[preserve-aspect-ratio="true"])) .main-container .cover-container{position:absolute;z-index:-1;height:100%;padding:0}:host([variant="overlay"]) .main-container .cover-container::after{position:absolute;top:0;left:0;width:100%;height:100%;background:var(--cover-hero-overlay);content:""}:host([variant="overlay"]:is([preserve-aspect-ratio=""],[preserve-aspect-ratio="true"])) .main-container .content-container{position:absolute;inset:0}:host([variant="overlay"]) .main-container .content-container{height:100%;padding:var(--grid-margin)}:host([variant="stacked"]){--cover-hero-text-color:var(--color-default-text)}:host([variant="stacked"]) .content-container ::slotted(*){padding:var(--grid-margin) 0}`,y=o(class extends n{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.variant=g.OVERLAY,this.contentPosition=_.TOP,this.preserveAspectRatio=!0}onImgLoad({target:e}){if(e instanceof Image&&e.closest(`[slot=cover]`)){let t=e.naturalWidth/e.naturalHeight;this.host.style.setProperty(`--image-aspect-ratio`,t.toString())}}renderContent(){return r(`div`,{class:`content-container`},r(`slot`,{name:`content`}))}render(){return r(i,{key:`ccca2bdf0d64f98bf93189dd1f1159eab6545a8c`},this.variant===g.STACKED&&this.contentPosition===_.TOP&&this.renderContent(),r(`div`,{key:`c5e46251171a0f0ae0db92b952e3d63d44d7566b`,class:`main-container`},r(`div`,{key:`5a4743da41427dce51dc4ee828326809c30617d7`,class:`cover-container`},r(`slot`,{key:`38a2bf70658820b4f96cd262abda25d985890a52`,name:`cover`})),r(`slot`,{key:`c355a2229e9887ddfb5af960bd2468bd633008d1`,name:`info-reveal`}),this.variant===g.OVERLAY&&this.renderContent()),this.variant===g.STACKED&&this.contentPosition===_.BOTTOM&&this.renderContent())}get host(){return this}static get style(){return v()}},[257,`z-cover-hero`,{variant:[513],contentPosition:[513,`content-position`],preserveAspectRatio:[516,`preserve-aspect-ratio`]},[[2,`load`,`onImgLoad`]]]),b=y})),S=e((()=>{})),C,w,T,E,D,O,k;e((()=>{a(),s(),p(),x(),S(),C={title:`ZCoverHero`,component:b,argTypes:{variant:{control:{type:`inline-radio`},options:Object.values(l)},contentPosition:{if:{arg:`variant`,eq:l.STACKED},control:{type:`inline-radio`},options:Object.values(u)},"--cover-hero-text-color":f(),"--cover-hero-overlay":{if:{arg:`variant`,eq:l.OVERLAY}},"--cover-hero-aspect-ratio":{if:{arg:`preserveAspectRatio`},control:{type:`text`}}},args:{variant:l.OVERLAY,contentPosition:u.TOP,preserveAspectRatio:!0,"--cover-hero-overlay":`linear-gradient(270deg, #0000 0%, #000000e6 100%)`,"--cover-hero-text-color":`var(--color-text-inverse)`},render:e=>r(`div`,{class:`z-cover-hero-story-container`},r(`z-cover-hero`,{...e,style:m(e)},r(`img`,{slot:`cover`,src:`https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,alt:``}),r(`div`,{slot:`content`},r(`div`,null,`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`),r(`div`,{class:`buttons`},r(`z-button`,null,`Primary`),r(`z-button`,{variant:d.SECONDARY},`Secondary`))),r(`z-info-reveal`,{slot:`info-reveal`,position:c.BOTTOM_RIGHT},r(`span`,null,`Lorem ipsum dolor sit amet.`))))},w={},T={parameters:{controls:{exclude:[`variant`,`preserve-aspect-ratio`,`--cover-hero-overlay`]}},args:{"--cover-hero-aspect-ratio":`16/8`}},E={parameters:{controls:{exclude:[`variant`,`preserve-aspect-ratio`]}},args:{"--cover-hero-aspect-ratio":``},render:e=>r(`div`,{class:`z-cover-hero-story-container z-cover-hero-auto-ratio`},r(`z-cover-hero`,{...e,style:m(e)},r(`img`,{slot:`cover`,src:`https://images.pexels.com/photos/4934920/pexels-photo-4934920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,alt:``}),r(`div`,{slot:`content`},r(`div`,null,`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`),r(`div`,{class:`buttons`},r(`z-button`,null,`Primary`),r(`z-button`,{variant:d.SECONDARY},`Secondary`)))))},D={parameters:{controls:{exclude:[`variant`,`preserve-aspect-ratio`,`--cover-hero-aspect-ratio`]}},args:{textContent:`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`},render:e=>r(`div`,{class:`z-cover-hero-story-container`},r(`z-cover-hero`,{...e,preserveAspectRatio:!1,style:m(e)},r(`img`,{slot:`cover`,src:`https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,alt:``}),r(`div`,{slot:`content`},r(`div`,null,e.textContent),r(`div`,{class:`buttons`},r(`z-button`,null,`Primary`),r(`z-button`,{variant:d.SECONDARY},`Secondary`)))))},O={parameters:{controls:{exclude:[`variant`,`preserve-aspect-ratio`,`--cover-hero-aspect-ratio`,`--cover-hero-text-color`]}},args:{variant:l.STACKED},render:e=>r(`div`,{class:`z-cover-hero-story-container`},r(`z-cover-hero`,{...e,style:m(e)},r(`img`,{slot:`cover`,src:`https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,alt:``}),r(`div`,{slot:`content`},r(`div`,null,`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`),r(`div`,{class:`buttons`},r(`z-button`,null,`Primary`),r(`z-button`,{variant:d.SECONDARY},`Secondary`))),r(`z-info-reveal`,{slot:`info-reveal`,position:c.BOTTOM_RIGHT},r(`span`,null,`Lorem ipsum dolor sit amet.`))))},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{} satisfies Story`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["variant", "preserve-aspect-ratio", "--cover-hero-overlay"]
    }
  },
  args: {
    "--cover-hero-aspect-ratio": "16/8"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["variant", "preserve-aspect-ratio"]
    }
  },
  args: {
    "--cover-hero-aspect-ratio": ""
  },
  render: args => <div class="z-cover-hero-story-container z-cover-hero-auto-ratio">
      <z-cover-hero {...args} style={extractCSSVars(args)}>
        <img slot="cover" src="https://images.pexels.com/photos/4934920/pexels-photo-4934920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div slot="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div class="buttons">
            <z-button>Primary</z-button>
            <z-button variant={ButtonVariant.SECONDARY}>Secondary</z-button>
          </div>
        </div>
      </z-cover-hero>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["variant", "preserve-aspect-ratio", "--cover-hero-aspect-ratio"]
    }
  },
  args: {
    textContent: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  render: args => <div class="z-cover-hero-story-container">
      <z-cover-hero {...args} preserveAspectRatio={false} style={extractCSSVars(args)}>
        <img slot="cover" src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div slot="content">
          <div>{args.textContent}</div>
          <div class="buttons">
            <z-button>Primary</z-button>
            <z-button variant={ButtonVariant.SECONDARY}>Secondary</z-button>
          </div>
        </div>
      </z-cover-hero>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["variant", "preserve-aspect-ratio", "--cover-hero-aspect-ratio", "--cover-hero-text-color"]
    }
  },
  args: {
    variant: CoverHeroVariant.STACKED
  },
  render: args => <div class="z-cover-hero-story-container">
      <z-cover-hero {...args} style={extractCSSVars(args)}>
        <img slot="cover" src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div slot="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div class="buttons">
            <z-button>Primary</z-button>
            <z-button variant={ButtonVariant.SECONDARY}>Secondary</z-button>
          </div>
        </div>
        <z-info-reveal slot="info-reveal" position={InfoRevealPosition.BOTTOM_RIGHT}>
          <span>Lorem ipsum dolor sit amet.</span>
        </z-info-reveal>
      </z-cover-hero>
    </div>
}`,...O.parameters?.docs?.source}}},k=[`Default`,`CustomAspectRatio`,`AutoAspectRatio`,`WithoutPreservingAspectRatio`,`StackedVariant`]}))();export{E as AutoAspectRatio,T as CustomAspectRatio,w as Default,O as StackedVariant,D as WithoutPreservingAspectRatio,k as __namedExportsOrder,C as default};