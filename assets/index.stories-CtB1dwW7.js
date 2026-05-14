import{n as e}from"./chunk-DnJy8xQt.js";import{$ as t,Q as n,X as r,nt as i,rt as a,tt as o}from"./iframe-DCi19jo_.js";import{c as s,h as c,m as l,q as u,x as d}from"./beans-G7NAvoly.js";import{n as f,o as p,t as m}from"./storybook-utils-B8oonaCr.js";import{N as h,f as g,l as _}from"./index2-FE8JoBwn.js";var v,y,b=e((()=>{i(),h(),v=a(class extends n{constructor(e){super(),!1!==e&&this.__registerHost(),this.__attachShadow(),this.variant=g.OVERLAY,this.contentPosition=_.TOP,this.preserveAspectRatio=!0}onImgLoad({target:e}){e instanceof Image&&e.closest(`[slot=cover]`)&&this.host.style.setProperty(`--image-aspect-ratio`,``+e.naturalWidth/e.naturalHeight)}renderContent(){return o(`div`,{class:`content-container`},o(`slot`,{name:`content`}))}render(){return o(t,{key:`bb147f3b614268218fba165360012031572ec76b`},this.variant===g.STACKED&&this.contentPosition===_.TOP&&this.renderContent(),o(`div`,{key:`94c697c41b4d98ea9f5be00634a3de1fd214ea72`,class:`main-container`},o(`div`,{key:`e1a181735381dbc2472085c7e1d7082e1564185a`,class:`cover-container`},o(`slot`,{key:`1692cfa7f6a9ee926a262e04e8912a72f5a95cca`,name:`cover`})),o(`slot`,{key:`c13a059c162d85e46d3f116a8b1fd9e3a6e363f7`,name:`info-reveal`}),this.variant===g.OVERLAY&&this.renderContent()),this.variant===g.STACKED&&this.contentPosition===_.BOTTOM&&this.renderContent())}get host(){return this}static get style(){return`:host{--cover-hero-overlay:linear-gradient(270deg, #0000 0%, #000000e6 100%);--cover-hero-text-color:var(--color-text-inverse);display:block;overflow:hidden}:host,*{box-sizing:border-box}:host .main-container{position:relative;width:100%;align-items:baseline}:host .content-container{color:var(--cover-hero-text-color);fill:var(--cover-hero-text-color)}:host .main-container .cover-container{position:relative;width:100%;padding-top:calc(100% / (var(--cover-hero-aspect-ratio, var(--image-aspect-ratio, 16/9))));background-color:var(--gray600)}::slotted([slot="cover"]){position:absolute;display:block;width:100%;height:100%;inset:0;object-fit:cover;object-position:top center}::slotted(z-info-reveal){position:absolute;z-index:1;right:var(--grid-margin);bottom:var(--grid-margin)}:host([variant="overlay"]:not([preserve-aspect-ratio=""],[preserve-aspect-ratio="true"])) .main-container{height:100%}:host([variant="overlay"]:not([preserve-aspect-ratio=""],[preserve-aspect-ratio="true"])) .main-container .cover-container{position:absolute;z-index:-1;height:100%;padding:0}:host([variant="overlay"]) .main-container .cover-container::after{position:absolute;top:0;left:0;width:100%;height:100%;background:var(--cover-hero-overlay);content:""}:host([variant="overlay"]:is([preserve-aspect-ratio=""],[preserve-aspect-ratio="true"])) .main-container .content-container{position:absolute;inset:0}:host([variant="overlay"]) .main-container .content-container{height:100%;padding:var(--grid-margin)}:host([variant="stacked"]){--cover-hero-text-color:var(--color-default-text)}:host([variant="stacked"]) .content-container ::slotted(*){padding:var(--grid-margin) 0}`}},[257,`z-cover-hero`,{variant:[513],contentPosition:[513,`content-position`],preserveAspectRatio:[516,`preserve-aspect-ratio`]},[[2,`load`,`onImgLoad`]]]),y=v})),x=e((()=>{})),S,C,w,T,E,D,O;e((()=>{r(),u(),p(),b(),x(),S={title:`ZCoverHero`,component:y,argTypes:{variant:{control:{type:`inline-radio`},options:Object.values(c)},contentPosition:{if:{arg:`variant`,eq:c.STACKED},control:{type:`inline-radio`},options:Object.values(l)},"--cover-hero-text-color":f(),"--cover-hero-overlay":{if:{arg:`variant`,eq:c.OVERLAY}},"--cover-hero-aspect-ratio":{if:{arg:`preserveAspectRatio`},control:{type:`text`}}},args:{variant:c.OVERLAY,contentPosition:l.TOP,preserveAspectRatio:!0,"--cover-hero-overlay":`linear-gradient(270deg, #0000 0%, #000000e6 100%)`,"--cover-hero-text-color":`var(--color-text-inverse)`},render:e=>o(`div`,{class:`z-cover-hero-story-container`},o(`z-cover-hero`,{...e,style:m(e)},o(`img`,{slot:`cover`,src:`https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,alt:``}),o(`div`,{slot:`content`},o(`div`,null,`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`),o(`div`,{class:`buttons`},o(`z-button`,null,`Primary`),o(`z-button`,{variant:s.SECONDARY},`Secondary`))),o(`z-info-reveal`,{slot:`info-reveal`,position:d.BOTTOM_RIGHT},o(`span`,null,`Lorem ipsum dolor sit amet.`))))},C={},w={parameters:{controls:{exclude:[`variant`,`preserve-aspect-ratio`,`--cover-hero-overlay`]}},args:{"--cover-hero-aspect-ratio":`16/8`}},T={parameters:{controls:{exclude:[`variant`,`preserve-aspect-ratio`]}},args:{"--cover-hero-aspect-ratio":``},render:e=>o(`div`,{class:`z-cover-hero-story-container z-cover-hero-auto-ratio`},o(`z-cover-hero`,{...e,style:m(e)},o(`img`,{slot:`cover`,src:`https://images.pexels.com/photos/4934920/pexels-photo-4934920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,alt:``}),o(`div`,{slot:`content`},o(`div`,null,`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`),o(`div`,{class:`buttons`},o(`z-button`,null,`Primary`),o(`z-button`,{variant:s.SECONDARY},`Secondary`)))))},E={parameters:{controls:{exclude:[`variant`,`preserve-aspect-ratio`,`--cover-hero-aspect-ratio`]}},args:{textContent:`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`},render:e=>o(`div`,{class:`z-cover-hero-story-container`},o(`z-cover-hero`,{...e,preserveAspectRatio:!1,style:m(e)},o(`img`,{slot:`cover`,src:`https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,alt:``}),o(`div`,{slot:`content`},o(`div`,null,e.textContent),o(`div`,{class:`buttons`},o(`z-button`,null,`Primary`),o(`z-button`,{variant:s.SECONDARY},`Secondary`)))))},D={parameters:{controls:{exclude:[`variant`,`preserve-aspect-ratio`,`--cover-hero-aspect-ratio`,`--cover-hero-text-color`]}},args:{variant:c.STACKED},render:e=>o(`div`,{class:`z-cover-hero-story-container`},o(`z-cover-hero`,{...e,style:m(e)},o(`img`,{slot:`cover`,src:`https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,alt:``}),o(`div`,{slot:`content`},o(`div`,null,`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`),o(`div`,{class:`buttons`},o(`z-button`,null,`Primary`),o(`z-button`,{variant:s.SECONDARY},`Secondary`))),o(`z-info-reveal`,{slot:`info-reveal`,position:d.BOTTOM_RIGHT},o(`span`,null,`Lorem ipsum dolor sit amet.`))))},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{} satisfies Story`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["variant", "preserve-aspect-ratio", "--cover-hero-overlay"]
    }
  },
  args: {
    "--cover-hero-aspect-ratio": "16/8"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Default`,`CustomAspectRatio`,`AutoAspectRatio`,`WithoutPreservingAspectRatio`,`StackedVariant`]}))();export{T as AutoAspectRatio,w as CustomAspectRatio,C as Default,D as StackedVariant,E as WithoutPreservingAspectRatio,O as __namedExportsOrder,S as default};