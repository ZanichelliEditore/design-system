import{x as a}from"./lit-element-DGXdXVoE.js";import{o as v}from"./style-map-DWZVjDvr.js";import{z as o,F as r}from"./index-C38_VAhp.js";import{a as $}from"./storybook-utils-DAVCxM-F.js";import"./index-C1pdL_Kg.js";import"./index-B9wR8RIJ.js";import{s as k,g as d}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as D,H as E,h as t,a as w}from"./index-BZ0rSFNp.js";import"./directive-CF8sV3Lr.js";import"./index-BSoUoz93.js";import"./index-DrFu-skq.js";const T=':host{--cover-hero-overlay:linear-gradient(270deg, #0000 0%, #000000e6 100%);--cover-hero-text-color:var(--color-text-inverse);display:block;overflow:hidden}:host,*{box-sizing:border-box}:host .main-container{position:relative;width:100%;align-items:baseline}:host .content-container{color:var(--cover-hero-text-color);fill:var(--cover-hero-text-color)}:host .main-container .cover-container{position:relative;width:100%;padding-top:calc(100% / (var(--cover-hero-aspect-ratio, var(--image-aspect-ratio, 16/9))));background-color:var(--gray600)}::slotted([slot="cover"]){position:absolute;display:block;width:100%;height:100%;inset:0;object-fit:cover;object-position:top center}::slotted(z-info-reveal){position:absolute;z-index:1;right:var(--grid-margin);bottom:var(--grid-margin)}:host([variant="overlay"]:not([preserve-aspect-ratio=""],[preserve-aspect-ratio="true"])) .main-container{height:100%}:host([variant="overlay"]:not([preserve-aspect-ratio=""],[preserve-aspect-ratio="true"])) .main-container .cover-container{position:absolute;z-index:-1;height:100%;padding:0}:host([variant="overlay"]) .main-container .cover-container::after{position:absolute;top:0;left:0;width:100%;height:100%;background:var(--cover-hero-overlay);content:""}:host([variant="overlay"]:is([preserve-aspect-ratio=""],[preserve-aspect-ratio="true"])) .main-container .content-container{position:absolute;inset:0}:host([variant="overlay"]) .main-container .content-container{height:100%;padding:var(--grid-margin)}:host([variant="stacked"]){--cover-hero-text-color:var(--color-default-text)}:host([variant="stacked"]) .content-container ::slotted(*){padding:var(--grid-margin) 0}',j=class extends E{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.variant=o.OVERLAY,this.contentPosition=r.TOP,this.preserveAspectRatio=!0}onImgLoad({target:e}){if(e instanceof Image&&e.closest("[slot=cover]")){const L=e.naturalWidth/e.naturalHeight;this.host.style.setProperty("--image-aspect-ratio",L.toString())}}renderContent(){return t("div",{class:"content-container"},t("slot",{name:"content"}))}render(){return t(w,{key:"f394df57feb9735b51d2bc97d01012bf5693e03a"},this.variant===o.STACKED&&this.contentPosition===r.TOP&&this.renderContent(),t("div",{key:"7b5d50d58572a5bc7cbb799e95e6d56295841063",class:"main-container"},t("div",{key:"3ae76388b59d4f0f1183bc63ab9c4804e5758fea",class:"cover-container"},t("slot",{key:"aa219461cede3b900e464f7c45fc17396e19a3c3",name:"cover"})),t("slot",{key:"820966ed99d884a30ab4b95751795c07265cbb30",name:"info-reveal"}),this.variant===o.OVERLAY&&this.renderContent()),this.variant===o.STACKED&&this.contentPosition===r.BOTTOM&&this.renderContent())}get host(){return this}static get style(){return T}};D(j,[1,"z-cover-hero",{variant:[520],contentPosition:[520,"content-position"],preserveAspectRatio:[516,"preserve-aspect-ratio"]},[[2,"load","onImgLoad"]]]);const m={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZCoverHero",tagName:"z-cover-hero",customElement:!0,members:[{kind:"field",name:"variant",type:"any",description:"Cover hero variant. Can be `OVERLAY` or `STACKED`.",default:"CoverHeroVariant.OVERLAY"},{kind:"field",name:"contentPosition",type:"any",description:"Vertical content position (for `STACKED` variant).",default:"CoverHeroContentPosition.TOP"},{kind:"field",name:"preserveAspectRatio",type:"boolean",description:"Whether to keep the image aspect ratio.\nIf set to `false`, the cssprop `--cover-hero-aspect-ratio` will not affect the component's size;\ninstead, the height of the component follows the content's one.\nNote: it may be necessary to set a min and/or max height to the component.",default:"true"}],events:[],cssProperties:[{name:"--cover-hero-overlay",description:"overlay color of the cover hero (CSS `background` property). **Default**: `linear-gradient(270deg, #0000 0%, #000000e6 100%)`."},{name:"--cover-hero-text-color",description:"color of the text."},{name:"--cover-hero-aspect-ratio",description:"aspect ratio to use for the image. You can pass a fraction or a number representing the ratio. **Default**: the intrinsic aspect ratio of the slotted image or `16/9`."}],slots:[{name:"cover",description:"slot for the cover image."},{name:"content",description:"slot for the content."},{name:"info-reveal",description:"slot for the info reveal."}]}],exports:[{kind:"js",name:"ZCoverHero",declaration:{name:"ZCoverHero",module:"src/components/z-cover-hero/index.tsx"}},{kind:"custom-element-definition",name:"z-cover-hero",declaration:{name:"ZCoverHero",module:"src/components/z-cover-hero/index.tsx"}}]}]};k({...d()||{},...m,modules:[...(d()||{}).modules||[],...m.modules]});const B={title:"ZCoverHero",component:"z-cover-hero",argTypes:{variant:{control:{type:"inline-radio"},options:Object.values(o)},contentPosition:{if:{arg:"variant",eq:o.STACKED},control:{type:"inline-radio"},options:Object.values(r)},"--cover-hero-text-color":$(),"--cover-hero-overlay":{if:{arg:"variant",eq:o.OVERLAY}},"--cover-hero-aspect-ratio":{if:{arg:"preserveAspectRatio"},control:{type:"text"}}},args:{variant:o.OVERLAY,contentPosition:r.TOP,preserveAspectRatio:!0,"--cover-hero-aspect-ratio":void 0,"--cover-hero-overlay":"linear-gradient(270deg, #0000 0%, #000000e6 100%)","--cover-hero-text-color":"var(--color-text-inverse)"}},i={render:e=>a`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        .contentPosition=${e.contentPosition}
        .variant=${e.variant}
        .preserveAspectRatio=${e.preserveAspectRatio}
        style=${v({"--cover-hero-overlay":e["--cover-hero-overlay"],"--cover-hero-text-color":e["--cover-hero-text-color"],"--cover-hero-aspect-ratio":e["--cover-hero-aspect-ratio"]})}
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
  `},n={parameters:{controls:{exclude:["variant","preserveAspectRatio"]}},args:{"--cover-hero-aspect-ratio":"16/8"},render:e=>a`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        style=${v({"--cover-hero-overlay":e["--cover-hero-overlay"],"--cover-hero-text-color":e["--cover-hero-text-color"],"--cover-hero-aspect-ratio":e["--cover-hero-aspect-ratio"]})}
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
  `},s={parameters:{controls:{exclude:["variant","preserveAspectRatio"]}},args:{"--cover-hero-aspect-ratio":""},render:e=>a`
    <div class="z-cover-hero-story-container z-cover-hero-auto-ratio">
      <z-cover-hero
        style=${v({"--cover-hero-overlay":e["--cover-hero-overlay"],"--cover-hero-text-color":e["--cover-hero-text-color"],"--cover-hero-aspect-ratio":e["--cover-hero-aspect-ratio"]})}
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
  `},c={argTypes:{variant:{table:{disable:!0}},preserveAspectRatio:{table:{disable:!0}},"--cover-hero-aspect-ratio":{table:{disable:!0}}},args:{textContent:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},render:e=>a`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        .preserveAspectRatio=${!1}
        style=${v({"--cover-hero-overlay":e["--cover-hero-overlay"],"--cover-hero-text-color":e["--cover-hero-text-color"]})}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>${e.textContent}</div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
      </z-cover-hero>
    </div>
  `},l={parameters:{controls:{exclude:["variant","preserveAspectRatio","--cover-hero-aspect-ratio","--cover-hero-text-color"]}},args:{variant:o.STACKED},render:e=>a`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        .contentPosition=${e.contentPosition}
        .preserveAspectRatio=${e.preserveAspectRatio}
        .variant=${e.variant}
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
  `};var p,u,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,b,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var z,x,f;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var A,q,C;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(C=(q=c.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var P,R,S;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(S=(R=l.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const F=["Default","CustomAspectRatio","AutoAspectRatio","WithoutPreservingAspectRatio","StackedVariant"];export{s as AutoAspectRatio,n as CustomAspectRatio,i as Default,l as StackedVariant,c as WithoutPreservingAspectRatio,F as __namedExportsOrder,B as default};
