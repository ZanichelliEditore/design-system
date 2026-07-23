import{n as e}from"./chunk-DnJy8xQt.js";import{$ as t,Z as n,at as r,et as i,it as a,rt as o}from"./iframe-DO3DjYxW.js";import{K as s,f as c,s as l}from"./beans-zckFsBZy.js";import{A as u,U as d,k as f}from"./index2-BFW8y5_u.js";import{n as p}from"./index3-wwUFGSuP.js";import{n as m}from"./index4-aKqlpkt4.js";var h,g,_,v=e((()=>{a(),u(),m(),p(),h=()=>`html{scroll-behavior:smooth}z-anchor-navigation nav{display:none;flex-direction:column;justify-content:flex-start;row-gap:calc(var(--space-unit) / 2)}z-anchor-navigation[collapsed] nav{display:flex;margin-top:var(--space-unit)}z-anchor-navigation nav a{display:-webkit-box;overflow:clip;width:100%;box-sizing:border-box;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);-webkit-box-orient:vertical;font-weight:inherit;-webkit-line-clamp:2;line-clamp:2;overflow-clip-margin:content-box;text-decoration:none}z-anchor-navigation nav>* a{color:inherit}z-anchor-navigation nav * a:not(:only-child){padding-right:calc(var(--space-unit) * 5)}@supports not (overflow-clip-margin: content-box){z-anchor-navigation nav a{display:inline-block;overflow:hidden;-webkit-line-clamp:none;line-clamp:none;text-overflow:ellipsis;white-space:nowrap}}z-anchor-navigation nav>*{position:relative;border-left:var(--border-size-large) solid var(--color-default-icon);color:var(--color-default-text);font-family:var(--font-family-sans);transition:background-color 0.3s ease-in-out,     border-color 0.3s ease-in-out,     color 0.3s ease-in-out}z-anchor-navigation nav>[data-current]{border-left-color:var(--color-primary01);color:var(--color-primary01);font-weight:var(--font-sb)}z-anchor-navigation nav>*>*:is(z-button,button){position:absolute;top:50%;right:0;transform:translateY(-50%);transition:opacity 0.3s ease-in-out}z-anchor-navigation nav>*:focus:focus-visible,z-anchor-navigation nav>*>*:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}z-anchor-navigation nav button{padding:0;border:none;margin:0;background-color:transparent}@media (min-width: 768px){z-anchor-navigation:not([is-collapsed]) z-button.toggle{display:none !important}z-anchor-navigation:not([is-collapsed]) nav{display:flex}z-anchor-navigation nav>*>:is(z-button,button){opacity:0;pointer-events:none}@media (hover: hover){z-anchor-navigation nav>:is([data-current],:hover,:focus,:focus-within)>:is(z-button,button){fill:var(--color-default-icon);opacity:1;pointer-events:unset}z-anchor-navigation nav>*:hover{border-left-color:var(--color-hover-primary);background-color:var(--color-background);color:var(--color-hover-primary)}}z-anchor-navigation[hide-unselected] nav>*:not([data-current],:hover,:focus,:focus-within){color:transparent;fill:transparent}}`,g=r(class extends t{constructor(e){super(),e!==!1&&this.__registerHost(),this.hideUnselected=!1,this.autoCurrent=!0,this.collapsedLabel=`salta a`,this.isCollapsed=!1,this.collapsed=!1}setCurrent(){let e=Array.from(this.nav.querySelectorAll(`a`)).find((e=>e.href===this.host.ownerDocument.location.href));Array.from(this.nav.children).forEach((t=>{let n=t instanceof HTMLAnchorElement?t:t.querySelector(`a`),r=n===e;n.setAttribute(`aria-current`,r.toString()),t.toggleAttribute(`data-current`,r)}))}toggleCollapsed(){this.collapsed=!this.collapsed}componentDidLoad(){this.autoCurrent&&(window.addEventListener(`hashchange`,this.setCurrent.bind(this)),this.setCurrent())}disconnectedCallback(){window.removeEventListener(`hashchange`,this.setCurrent)}render(){return o(i,{key:`f2cbf308e24c100b40858ad4370d7fb1b83c91b4`,collapsed:this.collapsed,class:`z-scrollbar`},o(`z-button`,{key:`964c11320f7dff05208327e7f591ea90bad3763c`,class:`toggle`,size:d.SMALL,variant:f.SECONDARY,icon:this.collapsed?`chevron-up`:`chevron-down`,onClick:this.toggleCollapsed.bind(this)},this.collapsedLabel),o(`nav`,{key:`21a8634ee51e4a1a824685e95ef58ed6a87e10e2`,ref:e=>this.nav=e},o(`slot`,{key:`bf93f6bd1d2948839da0e7e103f05ebd55135a33`})))}get host(){return this}static get style(){return h()}},[260,`z-anchor-navigation`,{hideUnselected:[516,`hide-unselected`],autoCurrent:[4,`auto-current`],collapsedLabel:[1,`collapsed-label`],isCollapsed:[516,`is-collapsed`],collapsed:[32]}]),_=g})),y=e((()=>{}));function b(e){let t=e.target.closest(`z-button`)?.dataset.to;if(!t)return;let n=document.querySelector(`#${t}-anchor`),r=n?.closest(`nav`);Array.from(r?.children??[]).forEach(e=>{let t=e.contains(n);t?e.setAttribute(`data-current`,``):e.removeAttribute(`data-current`),e.setAttribute(`aria-current`,t.toString())}),document.querySelector(`#${t}`)?.scrollIntoView()}var x,S,C,w;e((()=>{n(),s(),v(),y(),x={title:`ZAnchorNavigation`,component:_,args:{hideUnselected:!1,collapsedLabel:`salta a`,isCollapsed:!1}},S={render:e=>o(`div`,{class:{"z-anchor-navigation-story-wrapper":!0,collapsed:e.isCollapsed}},o(`z-anchor-navigation`,e,o(`div`,null,o(`a`,{href:`#first-section`,target:`_self`},`First section`),o(`z-button`,{variant:l.TERTIARY,size:c.X_SMALL,icon:`share`})),o(`div`,null,o(`a`,{href:`#second-section`,target:`_self`},`Second section`)),o(`div`,null,o(`a`,{href:`#third-section`,target:`_self`},`Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines`),o(`button`,{type:`button`,"aria-label":`share`},o(`z-icon`,{name:`share`}))),o(`a`,{href:`#fourth-section`,target:`_self`},`Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines`)),o(`div`,null,o(`div`,{class:`section`,id:`first-section`},o(`h4`,null,`First section`),o(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),o(`div`,{class:`separator`}),o(`div`,{class:`section`,id:`second-section`},o(`h4`,null,`Second section`),o(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),o(`div`,{class:`separator`}),o(`div`,{class:`section`,id:`third-section`},o(`h4`,null,`Third section`),o(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),o(`div`,{class:`separator`}),o(`div`,{class:`section`,id:`fourth-section`},o(`h4`,null,`Fourth section`),o(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),o(`div`,{class:`separator`})))},C={args:{autoCurrent:!1},parameters:{controls:{exclude:[`auto-current`]}},render:e=>o(`div`,null,o(`div`,{class:`z-anchor-navigation-manual-current`},o(`z-button`,{size:c.X_SMALL,"data-to":`first-section`,onClick:b},`To first section`),o(`z-button`,{size:c.X_SMALL,"data-to":`second-section`,onClick:b},`To second section`),o(`z-button`,{size:c.X_SMALL,"data-to":`third-section`,onClick:b},`To third section`),o(`z-button`,{size:c.X_SMALL,"data-to":`fourth-section`,onClick:b},`Highlight fourth section`)),o(`div`,{class:`z-anchor-navigation-story-wrapper`},o(`z-anchor-navigation`,{collapsedLabel:e.collapsedLabel,hideUnselected:e.hideUnselected,autoCurrent:e.autoCurrent},o(`div`,null,o(`a`,{id:`first-section-anchor`},`First section`),o(`z-button`,{variant:l.TERTIARY,size:c.X_SMALL,icon:`share`})),o(`div`,null,o(`a`,{id:`second-section-anchor`},`Second section`)),o(`div`,null,o(`a`,{id:`third-section-anchor`},`Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines`),o(`button`,{type:`button`,"aria-label":`share`},o(`z-icon`,{name:`share`}))),o(`a`,{id:`fourth-section-anchor`},`Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines`)),o(`div`,{class:`z-anchor-navigation-demo-sections`},o(`div`,{class:`section`,id:`first-section`},o(`h4`,null,`First section`),o(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),o(`div`,{class:`separator`}),o(`div`,{class:`section`,id:`second-section`},o(`h4`,null,`Second section`),o(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),o(`div`,{class:`separator`}),o(`div`,{class:`section`,id:`third-section`},o(`h4`,null,`Third section`),o(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),o(`div`,{class:`separator`}),o(`div`,{class:`section`,id:`fourth-section`},o(`h4`,null,`Fourth section`),o(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),o(`div`,{class:`separator`}))))},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div class={{
    "z-anchor-navigation-story-wrapper": true,
    "collapsed": args.isCollapsed
  }}>
      <z-anchor-navigation {...args}>
        <div>
          <a href="#first-section" target="_self">
            First section
          </a>
          <z-button variant={ButtonVariant.TERTIARY} size={ControlSize.X_SMALL} icon="share"></z-button>
        </div>
        <div>
          <a href="#second-section" target="_self">
            Second section
          </a>
        </div>
        <div>
          <a href="#third-section" target="_self">
            Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
            Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
          </a>
          <button type="button" aria-label="share">
            <z-icon name="share" />
          </button>
        </div>
        <a href="#fourth-section" target="_self">
          Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
          Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
        </a>
      </z-anchor-navigation>
      <div>
        <div class="section" id="first-section">
          <h4>First section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
          </p>
        </div>
        <div class="separator"></div>
        <div class="section" id="second-section">
          <h4>Second section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
          </p>
        </div>
        <div class="separator"></div>
        <div class="section" id="third-section">
          <h4>Third section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
          </p>
        </div>
        <div class="separator"></div>
        <div class="section" id="fourth-section">
          <h4>Fourth section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
          </p>
        </div>
        <div class="separator"></div>
      </div>
    </div>
} satisfies StoryObj<ZAnchorNavigation>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    autoCurrent: false
  },
  parameters: {
    controls: {
      exclude: ["auto-current"]
    }
  },
  render: args => <div>
      <div class="z-anchor-navigation-manual-current">
        <z-button size={ControlSize.X_SMALL} data-to="first-section" onClick={handleManualCurrentClick}>
          To first section
        </z-button>
        <z-button size={ControlSize.X_SMALL} data-to="second-section" onClick={handleManualCurrentClick}>
          To second section
        </z-button>
        <z-button size={ControlSize.X_SMALL} data-to="third-section" onClick={handleManualCurrentClick}>
          To third section
        </z-button>
        <z-button size={ControlSize.X_SMALL} data-to="fourth-section" onClick={handleManualCurrentClick}>
          Highlight fourth section
        </z-button>
      </div>
      <div class="z-anchor-navigation-story-wrapper">
        <z-anchor-navigation collapsedLabel={args.collapsedLabel} hideUnselected={args.hideUnselected} autoCurrent={args.autoCurrent}>
          <div>
            <a id="first-section-anchor">First section</a>
            <z-button variant={ButtonVariant.TERTIARY} size={ControlSize.X_SMALL} icon="share"></z-button>
          </div>
          <div>
            <a id="second-section-anchor">Second section</a>
          </div>
          <div>
            <a id="third-section-anchor">
              Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
              Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
            </a>
            <button type="button" aria-label="share">
              <z-icon name="share" />
            </button>
          </div>
          <a id="fourth-section-anchor">
            Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
            Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
          </a>
        </z-anchor-navigation>
        <div class="z-anchor-navigation-demo-sections">
          <div class="section" id="first-section">
            <h4>First section</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
              Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            </p>
          </div>
          <div class="separator"></div>
          <div class="section" id="second-section">
            <h4>Second section</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
              Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            </p>
          </div>
          <div class="separator"></div>
          <div class="section" id="third-section">
            <h4>Third section</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
              Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            </p>
          </div>
          <div class="separator"></div>
          <div class="section" id="fourth-section">
            <h4>Fourth section</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
              Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            </p>
          </div>
          <div class="separator"></div>
        </div>
      </div>
    </div>
} satisfies StoryObj<ZAnchorNavigation>`,...C.parameters?.docs?.source},description:{story:"Setting `autoCurrent` to `false` disables the automatic highlighting of the current section in the anchor navigation\nand allows manual handling.\nIn this story, for example, the highlighting of the current section is done by clicking on the related button.",...C.parameters?.docs?.description}}},w=[`Default`,`AutoCurrentDisabling`]}))();export{C as AutoCurrentDisabling,S as Default,w as __namedExportsOrder,x as default};