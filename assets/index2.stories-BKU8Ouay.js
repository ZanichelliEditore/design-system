import{n as e}from"./chunk-DnJy8xQt.js";import{dt as t,ft as n,pt as r}from"./iframe-izO1_eE9.js";import{K as i,c as a}from"./beans-zckFsBZy.js";import{o,t as s}from"./storybook-utils-CXFqIWGM.js";import{t as c}from"./internal-BoedbH0F.js";var l=e((()=>{})),u,d,f,p,m,h,g,_,v,y;e((()=>{t(),c(),i(),o(),l(),u=(e=!0)=>r(n,null,e&&r(`img`,{slot:`cover`,src:`https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg`}),r(`span`,{class:`body-5`,slot:`metadata`},`metadata`),r(`a`,{href:`https://google.it`,target:`_blank`,slot:`title`},r(`span`,null,`Card title`)),r(`p`,{class:`body-3`,slot:`text`},`Some description for the content of the card.`),r(`button`,{slot:`action`},r(`z-icon`,{name:`share`})),r(`button`,{slot:`action`},r(`z-icon`,{name:`delete`}))),d={title:`ZCard`,component:`z-card`,argTypes:{variant:{control:{type:`select`},options:Object.values(a)}},args:{variant:null,showShadow:!1,clickable:!1},render:e=>r(`z-card`,{class:`demo-card`,...e,style:s(e)},u())},f={},p={args:{coverIcon:`play-filled`}},m={args:{"--z-card--color-cover-background":`var(--yellow500)`},render:e=>r(`z-card`,{class:`demo-card`,...e,style:s(e)},u(!1))},h={args:{"--z-card--text-border-radius":`4px`},parameters:{controls:{exclude:[`variant`]}},render:e=>r(`z-card`,{class:`text-variant-card primary-bg`,...e,variant:a.TEXT,style:{...s(e),"--z-card--text-background":`var(--color-primary01)`,color:`var(--color-text-inverse)`}},u(!1))},g={args:{"--z-card--text-border":`2px solid var(--gray800)`,"--z-card--text-border-radius":`4px`,"--z-card--text-padding":`16px 8px`},parameters:{controls:{exclude:[`variant`]}},render:e=>r(`z-card`,{class:`text-variant-card surface-bg`,...e,variant:a.TEXT,style:{...s(e),"--z-card--text-background":`var(--color-surface01)`}},u(!1))},_=()=>{let e=document.getElementById(`click-alert-container`);e&&(window.currentClickCount=(window.currentClickCount||0)+1,e.innerText=`Card click count: ${window.currentClickCount}`)},v={parameters:{controls:{exclude:[`clickable`,`show-shadow`]}},render:e=>r(n,null,r(`z-card`,{class:`demo-card`,...e,variant:e.variant,clickable:!0},r(`img`,{slot:`cover`,src:`https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg`}),r(`span`,{class:`body-5`,slot:`metadata`},`metadata`),r(`button`,{id:`btn-card`,onClick:_,slot:`title`},r(`span`,null,`Card title`)),r(`p`,{class:`body-3`,slot:`text`},`Some description for the content of the card.`),r(`button`,{slot:`action`},r(`z-icon`,{name:`share`})),r(`button`,{slot:`action`},r(`z-icon`,{name:`delete`}))),r(`div`,{id:`click-alert-container`},`Card click count: `,window.currentClickCount||0))},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    coverIcon: "play-filled"
  }
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "--z-card--color-cover-background": "var(--yellow500)"
  },
  render: args => <z-card class="demo-card" {...args} style={extractCSSVars(args)}>
      {cardContent(false)}
    </z-card>
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}},y=[`WithImage`,`WithImageAndIcon`,`ColorCover`,`TextVariantPrimaryBackground`,`TextVariantSurfaceBackgroundAndBordered`,`WithImageAndClickListener`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    coverIcon: "play-filled"
  }
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "--z-card--color-cover-background": "var(--yellow500)"
  },
  render: args => <z-card class="demo-card" {...args} style={extractCSSVars(args)}>
      {cardContent(false)}
    </z-card>
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}}}))();export{m as ColorCover,h as TextVariantPrimaryBackground,g as TextVariantSurfaceBackgroundAndBordered,f as WithImage,v as WithImageAndClickListener,p as WithImageAndIcon,y as __namedExportsOrder,d as default};