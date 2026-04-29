import{r as e}from"./lit-CgIPLKVa.js";import{i as t,t as n}from"./chunk-L4EGOTBX-KlzQXQPc.js";import{a as r,n as i,o as a,r as o}from"./client-DQfH-YhT.js";import{_ as s,g as c}from"./beans-CNd94UMz.js";import{t as l}from"./storybook-utils-DtpJwcUL.js";import{t as u}from"./style-map-CH-uIwiZ.js";import"./z-button-ColY3FoG.js";import"./z-info-reveal-CFhKag0j.js";var d=()=>`:host{--cover-hero-overlay:linear-gradient(270deg, #0000 0%, #000000e6 100%);--cover-hero-text-color:var(--color-text-inverse);display:block;overflow:hidden}:host,*{box-sizing:border-box}:host .main-container{position:relative;width:100%;align-items:baseline}:host .content-container{color:var(--cover-hero-text-color);fill:var(--cover-hero-text-color)}:host .main-container .cover-container{position:relative;width:100%;padding-top:calc(100% / (var(--cover-hero-aspect-ratio, var(--image-aspect-ratio, 16/9))));background-color:var(--gray600)}::slotted([slot="cover"]){position:absolute;display:block;width:100%;height:100%;inset:0;object-fit:cover;object-position:top center}::slotted(z-info-reveal){position:absolute;z-index:1;right:var(--grid-margin);bottom:var(--grid-margin)}:host([variant="overlay"]:not([preserve-aspect-ratio=""],[preserve-aspect-ratio="true"])) .main-container{height:100%}:host([variant="overlay"]:not([preserve-aspect-ratio=""],[preserve-aspect-ratio="true"])) .main-container .cover-container{position:absolute;z-index:-1;height:100%;padding:0}:host([variant="overlay"]) .main-container .cover-container::after{position:absolute;top:0;left:0;width:100%;height:100%;background:var(--cover-hero-overlay);content:""}:host([variant="overlay"]:is([preserve-aspect-ratio=""],[preserve-aspect-ratio="true"])) .main-container .content-container{position:absolute;inset:0}:host([variant="overlay"]) .main-container .content-container{height:100%;padding:var(--grid-margin)}:host([variant="stacked"]){--cover-hero-text-color:var(--color-default-text)}:host([variant="stacked"]) .content-container ::slotted(*){padding:var(--grid-margin) 0}`;r(class extends i{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.variant=s.OVERLAY,this.contentPosition=c.TOP,this.preserveAspectRatio=!0}onImgLoad({target:e}){if(e instanceof Image&&e.closest(`[slot=cover]`)){let t=e.naturalWidth/e.naturalHeight;this.host.style.setProperty(`--image-aspect-ratio`,t.toString())}}renderContent(){return a(`div`,{class:`content-container`},a(`slot`,{name:`content`}))}render(){return a(o,{key:`d7cb07473c421ba2d4fea8ce062ad894892486ae`},this.variant===s.STACKED&&this.contentPosition===c.TOP&&this.renderContent(),a(`div`,{key:`dd94a7c2e470cb31a03676fbe4ee68bfa28381bd`,class:`main-container`},a(`div`,{key:`0389e21d23a296cae69535989bacd0aedd7c0e44`,class:`cover-container`},a(`slot`,{key:`02af1cf2fc056f7188bb57bcb022438619686b9a`,name:`cover`})),a(`slot`,{key:`a21ec701411c53123ca6487be762e8f10821b79d`,name:`info-reveal`}),this.variant===s.OVERLAY&&this.renderContent()),this.variant===s.STACKED&&this.contentPosition===c.BOTTOM&&this.renderContent())}get host(){return this}static get style(){return d()}},[257,`z-cover-hero`,{variant:[520],contentPosition:[520,`content-position`],preserveAspectRatio:[516,`preserve-aspect-ratio`]},[[2,`load`,`onImgLoad`]]]);var f={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZCoverHero`,tagName:`z-cover-hero`,customElement:!0,members:[{kind:`field`,name:`variant`,type:`any`,description:"Cover hero variant. Can be `OVERLAY` or `STACKED`.",default:`CoverHeroVariant.OVERLAY`},{kind:`field`,name:`contentPosition`,type:`any`,description:"Vertical content position (for `STACKED` variant).",default:`CoverHeroContentPosition.TOP`},{kind:`field`,name:`preserveAspectRatio`,type:`boolean`,description:"Whether to keep the image aspect ratio.\nIf set to `false`, the cssprop `--cover-hero-aspect-ratio` will not affect the component's size;\ninstead, the height of the component follows the content's one.\nNote: it may be necessary to set a min and/or max height to the component.",default:`true`}],events:[],cssProperties:[{name:`--cover-hero-overlay`,description:"overlay color of the cover hero (CSS `background` property). **Default**: `linear-gradient(270deg, #0000 0%, #000000e6 100%)`."},{name:`--cover-hero-text-color`,description:`color of the text.`},{name:`--cover-hero-aspect-ratio`,description:"aspect ratio to use for the image. You can pass a fraction or a number representing the ratio. **Default**: the intrinsic aspect ratio of the slotted image or `16/9`."}],slots:[{name:`cover`,description:`slot for the cover image.`},{name:`content`,description:`slot for the content.`},{name:`info-reveal`,description:`slot for the info reveal.`}]}],exports:[{kind:`js`,name:`ZCoverHero`,declaration:{name:`ZCoverHero`,module:`src/components/z-cover-hero/index.tsx`}},{kind:`custom-element-definition`,name:`z-cover-hero`,declaration:{name:`ZCoverHero`,module:`src/components/z-cover-hero/index.tsx`}}]}]};t({...n()||{},...f,modules:[...(n()||{}).modules||[],...f.modules]});var p={title:`ZCoverHero`,component:`z-cover-hero`,argTypes:{variant:{control:{type:`inline-radio`},options:Object.values(s)},contentPosition:{if:{arg:`variant`,eq:s.STACKED},control:{type:`inline-radio`},options:Object.values(c)},"--cover-hero-text-color":l(),"--cover-hero-overlay":{if:{arg:`variant`,eq:s.OVERLAY}},"--cover-hero-aspect-ratio":{if:{arg:`preserveAspectRatio`},control:{type:`text`}}},args:{variant:s.OVERLAY,contentPosition:c.TOP,preserveAspectRatio:!0,"--cover-hero-aspect-ratio":void 0,"--cover-hero-overlay":`linear-gradient(270deg, #0000 0%, #000000e6 100%)`,"--cover-hero-text-color":`var(--color-text-inverse)`}},m={render:t=>e`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        .contentPosition=${t.contentPosition}
        .variant=${t.variant}
        .preserveAspectRatio=${t.preserveAspectRatio}
        style=${u({"--cover-hero-overlay":t[`--cover-hero-overlay`],"--cover-hero-text-color":t[`--cover-hero-text-color`],"--cover-hero-aspect-ratio":t[`--cover-hero-aspect-ratio`]})}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
        <z-info-reveal
          slot="info-reveal"
          position="bottom_right"
        >
          <span>Lorem ipsum dolor sit amet.</span>
        </z-info-reveal>
      </z-cover-hero>
    </div>
  `},h={parameters:{controls:{exclude:[`variant`,`preserveAspectRatio`]}},args:{"--cover-hero-aspect-ratio":`16/8`},render:t=>e`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        style=${u({"--cover-hero-overlay":t[`--cover-hero-overlay`],"--cover-hero-text-color":t[`--cover-hero-text-color`],"--cover-hero-aspect-ratio":t[`--cover-hero-aspect-ratio`]})}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
        <z-info-reveal
          slot="info-reveal"
          position="bottom_right"
        >
          <span>Lorem ipsum dolor sit amet.</span>
        </z-info-reveal>
      </z-cover-hero>
    </div>
  `},g={parameters:{controls:{exclude:[`variant`,`preserveAspectRatio`]}},args:{"--cover-hero-aspect-ratio":``},render:t=>e`
    <div class="z-cover-hero-story-container z-cover-hero-auto-ratio">
      <z-cover-hero
        style=${u({"--cover-hero-overlay":t[`--cover-hero-overlay`],"--cover-hero-text-color":t[`--cover-hero-text-color`],"--cover-hero-aspect-ratio":t[`--cover-hero-aspect-ratio`]})}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/4934920/pexels-photo-4934920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
      </z-cover-hero>
    </div>
  `},_={argTypes:{variant:{table:{disable:!0}},preserveAspectRatio:{table:{disable:!0}},"--cover-hero-aspect-ratio":{table:{disable:!0}}},args:{textContent:`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`},render:t=>e`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        .preserveAspectRatio=${!1}
        style=${u({"--cover-hero-overlay":t[`--cover-hero-overlay`],"--cover-hero-text-color":t[`--cover-hero-text-color`]})}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>${t.textContent}</div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
      </z-cover-hero>
    </div>
  `},v={parameters:{controls:{exclude:[`variant`,`preserveAspectRatio`,`--cover-hero-aspect-ratio`,`--cover-hero-text-color`]}},args:{variant:s.STACKED},render:t=>e`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        .contentPosition=${t.contentPosition}
        .preserveAspectRatio=${t.preserveAspectRatio}
        .variant=${t.variant}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
        <z-info-reveal
          slot="info-reveal"
          position="bottom_right"
        >
          <span>Lorem ipsum dolor sit amet.</span>
        </z-info-reveal>
      </z-cover-hero>
    </div>
  `};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        .contentPosition=\${args.contentPosition}
        .variant=\${args.variant}
        .preserveAspectRatio=\${args.preserveAspectRatio}
        style=\${styleMap({
    "--cover-hero-overlay": args["--cover-hero-overlay"],
    "--cover-hero-text-color": args["--cover-hero-text-color"],
    "--cover-hero-aspect-ratio": args["--cover-hero-aspect-ratio"]
  })}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
        <z-info-reveal
          slot="info-reveal"
          position="bottom_right"
        >
          <span>Lorem ipsum dolor sit amet.</span>
        </z-info-reveal>
      </z-cover-hero>
    </div>
  \`
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["variant", "preserveAspectRatio"]
    }
  },
  args: {
    "--cover-hero-aspect-ratio": "16/8"
  },
  render: args => html\`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        style=\${styleMap({
    "--cover-hero-overlay": args["--cover-hero-overlay"],
    "--cover-hero-text-color": args["--cover-hero-text-color"],
    "--cover-hero-aspect-ratio": args["--cover-hero-aspect-ratio"]
  })}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
        <z-info-reveal
          slot="info-reveal"
          position="bottom_right"
        >
          <span>Lorem ipsum dolor sit amet.</span>
        </z-info-reveal>
      </z-cover-hero>
    </div>
  \`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["variant", "preserveAspectRatio"]
    }
  },
  args: {
    "--cover-hero-aspect-ratio": ""
  },
  render: args => html\`
    <div class="z-cover-hero-story-container z-cover-hero-auto-ratio">
      <z-cover-hero
        style=\${styleMap({
    "--cover-hero-overlay": args["--cover-hero-overlay"],
    "--cover-hero-text-color": args["--cover-hero-text-color"],
    "--cover-hero-aspect-ratio": args["--cover-hero-aspect-ratio"]
  })}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/4934920/pexels-photo-4934920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
      </z-cover-hero>
    </div>
  \`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  argTypes: {
    "variant": {
      table: {
        disable: true
      }
    },
    "preserveAspectRatio": {
      table: {
        disable: true
      }
    },
    "--cover-hero-aspect-ratio": {
      table: {
        disable: true
      }
    }
  },
  args: {
    textContent: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  render: args => html\`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        .preserveAspectRatio=\${false}
        style=\${styleMap({
    "--cover-hero-overlay": args["--cover-hero-overlay"],
    "--cover-hero-text-color": args["--cover-hero-text-color"]
  })}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>\${args.textContent}</div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
      </z-cover-hero>
    </div>
  \`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["variant", "preserveAspectRatio", "--cover-hero-aspect-ratio", "--cover-hero-text-color"]
    }
  },
  args: {
    variant: CoverHeroVariant.STACKED
  },
  render: args => html\`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        .contentPosition=\${args.contentPosition}
        .preserveAspectRatio=\${args.preserveAspectRatio}
        .variant=\${args.variant}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
        <z-info-reveal
          slot="info-reveal"
          position="bottom_right"
        >
          <span>Lorem ipsum dolor sit amet.</span>
        </z-info-reveal>
      </z-cover-hero>
    </div>
  \`
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`CustomAspectRatio`,`AutoAspectRatio`,`WithoutPreservingAspectRatio`,`StackedVariant`];export{g as AutoAspectRatio,h as CustomAspectRatio,m as Default,v as StackedVariant,_ as WithoutPreservingAspectRatio,y as __namedExportsOrder,p as default};