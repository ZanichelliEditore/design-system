import{n as e}from"./chunk-DnJy8xQt.js";import{dt as t,pt as n}from"./iframe-iOyjIY3n.js";import{K as r,b as i,m as a,p as o,s}from"./beans-zckFsBZy.js";import{n as c,o as l,t as u}from"./storybook-utils-CXFqIWGM.js";var d=e((()=>{})),f,p,m,h,g,_,v;e((()=>{t(),r(),l(),d(),f={title:`ZCoverHero`,component:`z-cover-hero`,argTypes:{variant:{control:{type:`inline-radio`},options:Object.values(a)},contentPosition:{if:{arg:`variant`,eq:a.STACKED},control:{type:`inline-radio`},options:Object.values(o)},"--cover-hero-text-color":c(),"--cover-hero-overlay":{if:{arg:`variant`,eq:a.OVERLAY}},"--cover-hero-aspect-ratio":{if:{arg:`preserveAspectRatio`},control:{type:`text`}}},args:{variant:a.OVERLAY,contentPosition:o.TOP,preserveAspectRatio:!0,"--cover-hero-overlay":`linear-gradient(270deg, #0000 0%, #000000e6 100%)`,"--cover-hero-text-color":`var(--color-text-inverse)`},render:e=>n(`div`,{class:`z-cover-hero-story-container`},n(`z-cover-hero`,{...e,style:u(e)},n(`img`,{slot:`cover`,src:`https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,alt:``}),n(`div`,{slot:`content`},n(`div`,null,`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`),n(`div`,{class:`buttons`},n(`z-button`,null,`Primary`),n(`z-button`,{variant:s.SECONDARY},`Secondary`))),n(`z-info-reveal`,{slot:`info-reveal`,position:i.BOTTOM_RIGHT},n(`span`,null,`Lorem ipsum dolor sit amet.`))))},p={},m={parameters:{controls:{exclude:[`variant`,`preserve-aspect-ratio`,`--cover-hero-overlay`]}},args:{"--cover-hero-aspect-ratio":`16/8`}},h={parameters:{controls:{exclude:[`variant`,`preserve-aspect-ratio`]}},args:{"--cover-hero-aspect-ratio":``},render:e=>n(`div`,{class:`z-cover-hero-story-container z-cover-hero-auto-ratio`},n(`z-cover-hero`,{...e,style:u(e)},n(`img`,{slot:`cover`,src:`https://images.pexels.com/photos/4934920/pexels-photo-4934920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,alt:``}),n(`div`,{slot:`content`},n(`div`,null,`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`),n(`div`,{class:`buttons`},n(`z-button`,null,`Primary`),n(`z-button`,{variant:s.SECONDARY},`Secondary`)))))},g={parameters:{controls:{exclude:[`variant`,`preserve-aspect-ratio`,`--cover-hero-aspect-ratio`]}},args:{textContent:`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`},render:e=>n(`div`,{class:`z-cover-hero-story-container`},n(`z-cover-hero`,{...e,preserveAspectRatio:!1,style:u(e)},n(`img`,{slot:`cover`,src:`https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,alt:``}),n(`div`,{slot:`content`},n(`div`,null,e.textContent),n(`div`,{class:`buttons`},n(`z-button`,null,`Primary`),n(`z-button`,{variant:s.SECONDARY},`Secondary`)))))},_={parameters:{controls:{exclude:[`variant`,`preserve-aspect-ratio`,`--cover-hero-aspect-ratio`,`--cover-hero-text-color`]}},args:{variant:a.STACKED},render:e=>n(`div`,{class:`z-cover-hero-story-container`},n(`z-cover-hero`,{...e,style:u(e)},n(`img`,{slot:`cover`,src:`https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,alt:``}),n(`div`,{slot:`content`},n(`div`,null,`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`),n(`div`,{class:`buttons`},n(`z-button`,null,`Primary`),n(`z-button`,{variant:s.SECONDARY},`Secondary`))),n(`z-info-reveal`,{slot:`info-reveal`,position:i.BOTTOM_RIGHT},n(`span`,null,`Lorem ipsum dolor sit amet.`))))},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["variant", "preserve-aspect-ratio", "--cover-hero-overlay"]
    }
  },
  args: {
    "--cover-hero-aspect-ratio": "16/8"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`,`CustomAspectRatio`,`AutoAspectRatio`,`WithoutPreservingAspectRatio`,`StackedVariant`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["variant", "preserve-aspect-ratio", "--cover-hero-overlay"]
    }
  },
  args: {
    "--cover-hero-aspect-ratio": "16/8"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}}))();export{h as AutoAspectRatio,m as CustomAspectRatio,p as Default,_ as StackedVariant,g as WithoutPreservingAspectRatio,v as __namedExportsOrder,f as default};