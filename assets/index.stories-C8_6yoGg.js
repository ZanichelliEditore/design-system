import{r as e}from"./lit-CgIPLKVa.js";import{i as t,t as n}from"./chunk-L4EGOTBX-KlzQXQPc.js";import{a as r,n as i,o as a,r as o}from"./client-Dpr5AR8E.js";import"./z-icon-jtOHWf42.js";import{d as s}from"./beans-CNd94UMz.js";import{t as c}from"./style-map-CH-uIwiZ.js";import{t as l}from"./taggedTemplateLiteral-BA-xtlkT.js";var u=()=>`:host{--aspect-ratio:1.62;--z-card--border-color:var(--gray200);--z-card--color-cover-background:var(--color-surface01);--z-card--text-background:var(--color-surface01);--z-card--text-border-radius:none;--z-card--text-border:none;--z-card--text-padding:calc(var(--space-unit) * 2) var(--space-unit);position:relative;display:flex;flex-direction:column;font-family:var(--font-family-sans);font-weight:var(--font-rg)}*,::slotted(*){box-sizing:border-box}*:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}:host(:not([variant="overlay"])) .cover-container{position:relative;width:100%}.cover-container{padding-bottom:calc(100% / var(--aspect-ratio))}::slotted([slot="cover"]),.color-cover{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center}.cover-container>z-icon{--z-icon-width:calc(var(--space-unit) * 11);--z-icon-height:var(--z-icon-width);position:absolute;top:calc(50% - calc(var(--z-icon-height) / 2));left:calc(50% - calc(var(--z-icon-width) / 2));fill:var(--color-primary01)}.color-cover{background-color:var(--z-card--color-cover-background)}.content{display:flex;flex-direction:column;padding-top:var(--space-unit)}.color-cover .cover-content{display:flex;height:100%;flex-direction:column;justify-content:flex-end;padding:var(--space-unit)}::slotted([slot="metadata"]),::slotted([slot="title"]),::slotted([slot="text"]){display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical}::slotted([slot="title"]:not(:last-child)),::slotted([slot="text"]:not(:last-child)){margin-bottom:var(--space-unit)}::slotted([slot="title"])::before{position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;content:""}::slotted([slot="metadata"]){width:100%;-webkit-line-clamp:1;line-clamp:1;text-transform:uppercase}::slotted([slot="metadata"]:not(:last-child)){margin:0 0 calc(var(--space-unit) * 0.25)}::slotted([slot="title"]){margin:0;font-size:var(--font-size-3);font-weight:var(--font-sb);-webkit-line-clamp:2;line-clamp:2;text-decoration:none}::slotted([slot="title"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary);outline:none}::slotted([slot="text"]){width:100%;margin:0;-webkit-line-clamp:3;line-clamp:3}.actions{display:flex;align-items:center}:host(:not([variant="overlay"])) .actions{margin-top:auto}::slotted([slot="action"]){position:relative;z-index:2}::slotted([slot="action"]:not(:last-child)){margin-right:calc(var(--space-unit) * 2)}::slotted([slot="action"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary);outline:none !important}:host([clickable]) ::slotted([slot="title"]:focus:focus-visible){box-shadow:none !important;outline:none !important}:host([clickable]) ::slotted([slot="title"]:focus:focus-visible)::before{box-shadow:var(--shadow-focus-primary)}:host([variant="text"]){border:var(--z-card--text-border);background-color:var(--z-card--text-background);border-radius:var(--z-card--text-border-radius)}:host([variant="text"]) [slot="text"]::before{border-radius:var(--z-card--text-border-radius)}:host([show-shadow])>.content,:host([variant="border"])>.content,:host([variant="shadow"])>.content{height:100%;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2)}:host([variant="text"])>.content{padding:var(--z-card--text-padding)}:host([variant="border"]){border:var(--border-size-small) solid var(--z-card--border-color)}:host([variant="border"][clickable]:hover)>.content{background:var(--color-background)}:host([variant="border"][clickable]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant="border"][clickable]:active){border-color:transparent}:host([variant="shadow"]),:host([show-shadow]){box-shadow:var(--shadow-2)}:host([variant="shadow"][clickable]:hover),:host([clickable][show-shadow]:hover){box-shadow:var(--shadow-4)}:host([variant="shadow"][clickable]:focus:focus-visible),:host([clickable][show-shadow]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant="shadow"][clickable]:active),:host([clickable][show-shadow]:active){box-shadow:none}:host([variant="overlay"]) .content{position:absolute;top:0;right:0;bottom:0;left:0;justify-content:flex-end;padding:var(--space-unit);background-image:linear-gradient(to top, rgb(0 0 0 / 100%), rgb(0 0 0 / 0%));color:var(--color-text-inverse);fill:var(--color-text-inverse)}`;r(class extends i{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.showShadow=!1,this.clickable=!1}componentWillLoad(){this.hasCoverImage=this.host.querySelector(`[slot="cover"]`)!==null}renderColorCoverCard(){return[a(`div`,{class:`cover-container`},a(`div`,{class:`color-cover`},a(`div`,{class:`cover-content`},a(`slot`,{name:`metadata`}),a(`slot`,{name:`title`})))),a(`div`,{class:`content`},a(`slot`,{name:`text`}),a(`div`,{class:`actions`},a(`slot`,{name:`action`})))]}renderContent(){return a(`div`,{class:`content`},a(`slot`,{name:`metadata`}),a(`slot`,{name:`title`}),a(`slot`,{name:`text`}),a(`div`,{class:`actions`},a(`slot`,{name:`action`})))}render(){return this.variant===s.TEXT?a(o,null,this.renderContent()):this.variant===s.OVERLAY||this.hasCoverImage?a(o,null,a(`div`,{class:`cover-container`},this.hasCoverImage&&[a(`slot`,{name:`cover`}),this.variant!==s.OVERLAY&&this.coverIcon&&a(`z-icon`,{name:this.coverIcon})],!this.hasCoverImage&&a(`div`,{class:`color-cover`})),this.renderContent()):a(o,null,this.renderColorCoverCard())}get host(){return this}static get style(){return u()}},[257,`z-card`,{variant:[520],coverIcon:[1,`cover-icon`],showShadow:[516,`show-shadow`],clickable:[516],hasCoverImage:[32]}]);var d={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZCard`,tagName:`z-card`,customElement:!0,members:[{kind:`field`,name:`variant`,type:`any`,description:`Card variant.
Can be one of "text", "border", "shadow", "overlay".
Leave it undefined for the default card.`},{kind:`field`,name:`coverIcon`,type:`string`,description:`Name of the icon to place over the image cover`},{kind:`field`,name:`showShadow`,type:`boolean`,description:`Enable shadow. Default: false.`,default:`false`},{kind:`field`,name:`clickable`,type:`boolean`,description:'Enable "clickable" styles like hover background and cursor, focus shadow on the whole card, etc.\nAlways set this to `true` when putting an `<a>` tag in the `title` slot.',default:`false`}],events:[],cssProperties:[{name:`--aspect-ratio`,description:"Cover aspect ratio. Default: `1.62`"},{name:`--z-card--border-color`,description:"Default: `var(--gray200)`"},{name:`--z-card--color-cover-background`,description:"Cover color. Default: `var(--color-surface01)`"},{name:`--z-card--text-background`,description:"Background color for the `text` variant. Default: `var(--color-surface01)`"},{name:`--z-card--text-border-radius`,description:"Default: `none`"},{name:`--z-card--text-border`,description:"Configure CSS `border`. Default: `none`"},{name:`--z-card--text-padding`,description:"Configure CSS `padding`. Default: `none`"}],slots:[{name:`cover`,description:`Image cover`},{name:`metadata`,description:`Metadata`},{name:`title`,description:"Using an `<a>` tag here will make the whole card clickable as if the link was wrapping it."},{name:`text`,description:``},{name:`action`,description:'Interactive elements to place at the bottom of the card. To put non-interactive elements here when using an `<a>` tag in the `title` slot, and use this as a sort of "footer", set `z-index: 0` on each of those elements.'}]}],exports:[{kind:`js`,name:`ZCard`,declaration:{name:`ZCard`,module:`src/components/z-card/index.tsx`}},{kind:`custom-element-definition`,name:`z-card`,declaration:{name:`ZCard`,module:`src/components/z-card/index.tsx`}}]}]};t({...n()||{},...d,modules:[...(n()||{}).modules||[],...d.modules]});var f,p={title:`ZCard`,component:`z-card`,argTypes:{variant:{control:{type:`inline-radio`,labels:{null:`default`}},options:[null,...Object.values(s)]}},args:{variant:null,showShadow:!1,clickable:!1}},m={render:t=>e`
    <z-card
      class="demo-card"
      .variant="${t.variant}"
      .showShadow="${t.showShadow}"
      .clickable="${t.clickable}"
    >
      <img
        slot="cover"
        src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg"
      />
      <span
        class="body-5"
        slot="metadata"
      >
        metadata
      </span>
      <a
        href="https://google.it"
        target="_blank"
        slot="title"
      >
        <span>Card title</span>
      </a>
      <p
        class="body-3"
        slot="text"
      >
        Some description for the content of the card.
      </p>
      <button slot="action"><z-icon name="share"></z-icon></button>
      <button slot="action"><z-icon name="delete"></z-icon></button>
    </z-card>
  `},h={args:{coverIcon:`play-filled`},render:t=>e`
    <z-card
      class="demo-card"
      cover-icon="${t.coverIcon}"
      .variant="${t.variant}"
      .showShadow="${t.showShadow}"
      .clickable="${t.clickable}"
    >
      <img
        slot="cover"
        src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg"
      />
      <h2
        class="body-5"
        slot="metadata"
      >
        metadata
      </h2>
      <a
        href="https://google.it"
        target="_blank"
        slot="title"
      >
        <span>Card title</span>
      </a>
      <p
        class="body-3"
        slot="text"
      >
        Some description for the content of the card.
      </p>
      <button slot="action"><z-icon name="share"></z-icon></button>
      <button slot="action"><z-icon name="delete"></z-icon></button>
    </z-card>
  `},g={args:{"--z-card--color-cover-background":`var(--yellow500)`},render:t=>e`
    <z-card
      class="demo-card"
      .variant="${t.variant}"
      .showShadow="${t.showShadow}"
      .clickable="${t.clickable}"
      style="--z-card--color-cover-background: ${t[`--z-card--color-cover-background`]};"
    >
      <h2
        class="body-5"
        slot="metadata"
      >
        metadata
      </h2>
      <a
        href="https://google.it"
        target="_blank"
        slot="title"
      >
        <span>Card title</span>
      </a>
      <p
        class="body-3"
        slot="text"
      >
        Some description for the content of the card.
      </p>
      <button slot="action"><z-icon name="share"></z-icon></button>
      <button slot="action"><z-icon name="delete"></z-icon></button>
    </z-card>
  `},_={args:{"--z-card--text-border-radius":`4px`},parameters:{controls:{exclude:[`variant`]}},render:t=>e`
    <z-card
      class="text-variant-card"
      variant="text"
      .showShadow="${t.showShadow}"
      .clickable="${t.clickable}"
      style=${c({"--z-card--text-background":`var(--color-primary01)`,"--z-card--text-border-radius":`${t[`--z-card--text-border-radius`]}`,color:`var(--color-text-inverse)`})}
    >
      <h2
        class="body-5"
        slot="metadata"
      >
        metadata
      </h2>
      <a
        href="https://google.it"
        target="_blank"
        slot="title"
      >
        <span>Card title</span>
      </a>
      <p
        class="body-3"
        slot="text"
      >
        Some description for the content of the card.
      </p>
      <button slot="action">
        <z-icon
          name="share"
          fill="color-surface01"
        ></z-icon>
      </button>
      <button slot="action">
        <z-icon
          name="delete"
          fill="color-surface01"
        ></z-icon>
      </button>
    </z-card>
  `},v={args:{"--z-card--text-border":`2px solid var(--gray800)`,"--z-card--text-border-radius":`4px`,"--z-card--text-padding":`16px 8px`},parameters:{controls:{exclude:[`variant`]}},render:t=>e`<z-card
      class="text-variant-card"
      variant="text"
      .showShadow="${t.showShadow}"
      .clickable="${t.clickable}"
      style=${c({"--z-card--text-background":`var(--color-surface01)`,"--z-card--text-border":`${t[`--z-card--text-border`]}`,"--z-card--text-border-radius":`${t[`--z-card--text-border-radius`]}`,"--z-card--text-padding":`${t[`--z-card--text-padding`]}`})}
    >
      <h2
        class="body-5"
        slot="metadata"
      >
        metadata
      </h2>
      <a
        href="https://google.it"
        target="_blank"
        slot="title"
      >
        <span>Card title</span>
      </a>
      <p
        class="body-3"
        slot="text"
      >
        Some description for the content of the card.
      </p>
      <button slot="action">
        <z-icon
          name="share"
          fill="color-primary01"
        ></z-icon>
      </button>
      <button slot="action">
        <z-icon
          name="delete"
          fill="color-primary01"
        ></z-icon>
      </button>
    </z-card>`},y={parameters:{controls:{exclude:[`clickable`,`showShadow`]}},render:t=>e(f||=l([`
    <script>
      window.cardClickCount = 0;
      document.getElementById("btn-card").addEventListener("click", (e) => {
        window.cardClickCount = window.cardClickCount + 1;
        const alertBox = document.getElementById("click-alert-container");
        if (!alertBox) {
          return;
        }

        alertBox.innerText = "Card click count: " + window.cardClickCount;
      });
    <\/script>
    <z-card
      class="demo-card"
      variant=`,`
      clickable
    >
      <img
        slot="cover"
        src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg"
      />
      <span
        class="body-5"
        slot="metadata"
      >
        metadata
      </span>
      <button
        id="btn-card"
        slot="title"
      >
        <span>Card title</span>
      </button>
      <p
        class="body-3"
        slot="text"
      >
        Some description for the content of the card.
      </p>
      <button slot="action"><z-icon name="share"></z-icon></button>
      <button slot="action"><z-icon name="delete"></z-icon></button>
    </z-card>
    <div id="click-alert-container">Card click count: 0</div>
  `]),t.variant)};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-card
      class="demo-card"
      .variant="\${args.variant}"
      .showShadow="\${args.showShadow}"
      .clickable="\${args.clickable}"
    >
      <img
        slot="cover"
        src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg"
      />
      <span
        class="body-5"
        slot="metadata"
      >
        metadata
      </span>
      <a
        href="https://google.it"
        target="_blank"
        slot="title"
      >
        <span>Card title</span>
      </a>
      <p
        class="body-3"
        slot="text"
      >
        Some description for the content of the card.
      </p>
      <button slot="action"><z-icon name="share"></z-icon></button>
      <button slot="action"><z-icon name="delete"></z-icon></button>
    </z-card>
  \`
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    coverIcon: "play-filled"
  },
  render: args => html\`
    <z-card
      class="demo-card"
      cover-icon="\${args.coverIcon}"
      .variant="\${args.variant}"
      .showShadow="\${args.showShadow}"
      .clickable="\${args.clickable}"
    >
      <img
        slot="cover"
        src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg"
      />
      <h2
        class="body-5"
        slot="metadata"
      >
        metadata
      </h2>
      <a
        href="https://google.it"
        target="_blank"
        slot="title"
      >
        <span>Card title</span>
      </a>
      <p
        class="body-3"
        slot="text"
      >
        Some description for the content of the card.
      </p>
      <button slot="action"><z-icon name="share"></z-icon></button>
      <button slot="action"><z-icon name="delete"></z-icon></button>
    </z-card>
  \`
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "--z-card--color-cover-background": "var(--yellow500)"
  },
  render: args => html\`
    <z-card
      class="demo-card"
      .variant="\${args.variant}"
      .showShadow="\${args.showShadow}"
      .clickable="\${args.clickable}"
      style="--z-card--color-cover-background: \${args["--z-card--color-cover-background"]};"
    >
      <h2
        class="body-5"
        slot="metadata"
      >
        metadata
      </h2>
      <a
        href="https://google.it"
        target="_blank"
        slot="title"
      >
        <span>Card title</span>
      </a>
      <p
        class="body-3"
        slot="text"
      >
        Some description for the content of the card.
      </p>
      <button slot="action"><z-icon name="share"></z-icon></button>
      <button slot="action"><z-icon name="delete"></z-icon></button>
    </z-card>
  \`
} satisfies Story`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "--z-card--text-border-radius": "4px"
  },
  parameters: {
    controls: {
      exclude: ["variant"]
    }
  },
  render: args => html\`
    <z-card
      class="text-variant-card"
      variant="text"
      .showShadow="\${args.showShadow}"
      .clickable="\${args.clickable}"
      style=\${styleMap({
    "--z-card--text-background": "var(--color-primary01)",
    "--z-card--text-border-radius": \`\${args["--z-card--text-border-radius"]}\`,
    "color": "var(--color-text-inverse)"
  })}
    >
      <h2
        class="body-5"
        slot="metadata"
      >
        metadata
      </h2>
      <a
        href="https://google.it"
        target="_blank"
        slot="title"
      >
        <span>Card title</span>
      </a>
      <p
        class="body-3"
        slot="text"
      >
        Some description for the content of the card.
      </p>
      <button slot="action">
        <z-icon
          name="share"
          fill="color-surface01"
        ></z-icon>
      </button>
      <button slot="action">
        <z-icon
          name="delete"
          fill="color-surface01"
        ></z-icon>
      </button>
    </z-card>
  \`
} satisfies Story`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
  render: args => html\`<z-card
      class="text-variant-card"
      variant="text"
      .showShadow="\${args.showShadow}"
      .clickable="\${args.clickable}"
      style=\${styleMap({
    "--z-card--text-background": \`var(--color-surface01)\`,
    "--z-card--text-border": \`\${args["--z-card--text-border"]}\`,
    "--z-card--text-border-radius": \`\${args["--z-card--text-border-radius"]}\`,
    "--z-card--text-padding": \`\${args["--z-card--text-padding"]}\`
  })}
    >
      <h2
        class="body-5"
        slot="metadata"
      >
        metadata
      </h2>
      <a
        href="https://google.it"
        target="_blank"
        slot="title"
      >
        <span>Card title</span>
      </a>
      <p
        class="body-3"
        slot="text"
      >
        Some description for the content of the card.
      </p>
      <button slot="action">
        <z-icon
          name="share"
          fill="color-primary01"
        ></z-icon>
      </button>
      <button slot="action">
        <z-icon
          name="delete"
          fill="color-primary01"
        ></z-icon>
      </button>
    </z-card>\`
} satisfies Story`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["clickable", "showShadow"]
    }
  },
  render: args => html\`
    <script>
      window.cardClickCount = 0;
      document.getElementById("btn-card").addEventListener("click", (e) => {
        window.cardClickCount = window.cardClickCount + 1;
        const alertBox = document.getElementById("click-alert-container");
        if (!alertBox) {
          return;
        }

        alertBox.innerText = "Card click count: " + window.cardClickCount;
      });
    <\/script>
    <z-card
      class="demo-card"
      variant=\${args.variant}
      clickable
    >
      <img
        slot="cover"
        src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg"
      />
      <span
        class="body-5"
        slot="metadata"
      >
        metadata
      </span>
      <button
        id="btn-card"
        slot="title"
      >
        <span>Card title</span>
      </button>
      <p
        class="body-3"
        slot="text"
      >
        Some description for the content of the card.
      </p>
      <button slot="action"><z-icon name="share"></z-icon></button>
      <button slot="action"><z-icon name="delete"></z-icon></button>
    </z-card>
    <div id="click-alert-container">Card click count: 0</div>
  \`
} satisfies Story`,...y.parameters?.docs?.source}}};var b=[`WithImage`,`WithImageAndIcon`,`ColorCover`,`TextVariantPrimaryBackground`,`TextVariantSurfaceBackgroundAndBordered`,`WithImageAndClickListener`];export{g as ColorCover,_ as TextVariantPrimaryBackground,v as TextVariantSurfaceBackgroundAndBordered,m as WithImage,y as WithImageAndClickListener,h as WithImageAndIcon,b as __namedExportsOrder,p as default};