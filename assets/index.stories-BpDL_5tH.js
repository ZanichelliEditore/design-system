import{n as e}from"./chunk-DnJy8xQt.js";import{dt as t,pt as n}from"./iframe-iOyjIY3n.js";import{K as r,f as i,s as a}from"./beans-zckFsBZy.js";var o=e((()=>{}));function s(e){let t=e.target.closest(`z-button`)?.dataset.to;if(!t)return;let n=document.querySelector(`#${t}-anchor`),r=n?.closest(`nav`);Array.from(r?.children??[]).forEach(e=>{let t=e.contains(n);t?e.setAttribute(`data-current`,``):e.removeAttribute(`data-current`),e.setAttribute(`aria-current`,t.toString())}),document.querySelector(`#${t}`)?.scrollIntoView()}var c,l,u,d;e((()=>{t(),r(),o(),c={title:`ZAnchorNavigation`,component:`z-anchor-navigation`,args:{hideUnselected:!1,collapsedLabel:`salta a`,isCollapsed:!1}},l={render:e=>n(`div`,{class:{"z-anchor-navigation-story-wrapper":!0,collapsed:e.isCollapsed}},n(`z-anchor-navigation`,e,n(`div`,null,n(`a`,{href:`#first-section`,target:`_self`},`First section`),n(`z-button`,{variant:a.TERTIARY,size:i.X_SMALL,icon:`share`})),n(`div`,null,n(`a`,{href:`#second-section`,target:`_self`},`Second section`)),n(`div`,null,n(`a`,{href:`#third-section`,target:`_self`},`Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines`),n(`button`,{type:`button`,"aria-label":`share`},n(`z-icon`,{name:`share`}))),n(`a`,{href:`#fourth-section`,target:`_self`},`Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines`)),n(`div`,null,n(`div`,{class:`section`,id:`first-section`},n(`h4`,null,`First section`),n(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),n(`div`,{class:`separator`}),n(`div`,{class:`section`,id:`second-section`},n(`h4`,null,`Second section`),n(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),n(`div`,{class:`separator`}),n(`div`,{class:`section`,id:`third-section`},n(`h4`,null,`Third section`),n(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),n(`div`,{class:`separator`}),n(`div`,{class:`section`,id:`fourth-section`},n(`h4`,null,`Fourth section`),n(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),n(`div`,{class:`separator`})))},u={args:{autoCurrent:!1},parameters:{controls:{exclude:[`auto-current`]}},render:e=>n(`div`,null,n(`div`,{class:`z-anchor-navigation-manual-current`},n(`z-button`,{size:i.X_SMALL,"data-to":`first-section`,onClick:s},`To first section`),n(`z-button`,{size:i.X_SMALL,"data-to":`second-section`,onClick:s},`To second section`),n(`z-button`,{size:i.X_SMALL,"data-to":`third-section`,onClick:s},`To third section`),n(`z-button`,{size:i.X_SMALL,"data-to":`fourth-section`,onClick:s},`Highlight fourth section`)),n(`div`,{class:`z-anchor-navigation-story-wrapper`},n(`z-anchor-navigation`,{collapsedLabel:e.collapsedLabel,hideUnselected:e.hideUnselected,autoCurrent:e.autoCurrent},n(`div`,null,n(`a`,{id:`first-section-anchor`},`First section`),n(`z-button`,{variant:a.TERTIARY,size:i.X_SMALL,icon:`share`})),n(`div`,null,n(`a`,{id:`second-section-anchor`},`Second section`)),n(`div`,null,n(`a`,{id:`third-section-anchor`},`Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines`),n(`button`,{type:`button`,"aria-label":`share`},n(`z-icon`,{name:`share`}))),n(`a`,{id:`fourth-section-anchor`},`Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines`)),n(`div`,{class:`z-anchor-navigation-demo-sections`},n(`div`,{class:`section`,id:`first-section`},n(`h4`,null,`First section`),n(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),n(`div`,{class:`separator`}),n(`div`,{class:`section`,id:`second-section`},n(`h4`,null,`Second section`),n(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),n(`div`,{class:`separator`}),n(`div`,{class:`section`,id:`third-section`},n(`h4`,null,`Third section`),n(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),n(`div`,{class:`separator`}),n(`div`,{class:`section`,id:`fourth-section`},n(`h4`,null,`Fourth section`),n(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?`)),n(`div`,{class:`separator`}))))},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryObj<ZAnchorNavigation>`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryObj<ZAnchorNavigation>`,...u.parameters?.docs?.source},description:{story:"Setting `autoCurrent` to `false` disables the automatic highlighting of the current section in the anchor navigation\nand allows manual handling.\nIn this story, for example, the highlighting of the current section is done by clicking on the related button.",...u.parameters?.docs?.description}}},d=[`Default`,`AutoCurrentDisabling`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryObj<ZAnchorNavigation>`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryObj<ZAnchorNavigation>`,...u.parameters?.docs?.source},description:{story:"Setting `autoCurrent` to `false` disables the automatic highlighting of the current section in the anchor navigation\nand allows manual handling.\nIn this story, for example, the highlighting of the current section is done by clicking on the related button.",...u.parameters?.docs?.description}}}}))();export{u as AutoCurrentDisabling,l as Default,d as __namedExportsOrder,c as default};