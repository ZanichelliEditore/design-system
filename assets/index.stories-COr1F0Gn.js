import{x as o}from"./lit-element-DGXdXVoE.js";import{o as A}from"./style-map-DWZVjDvr.js";import{x as l}from"./index-Dk5nO_yw.js";import"./index-BfGcbr3R.js";import{s as D,g as h}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as L,H as V,h as a,a as d}from"./index-BZ0rSFNp.js";import"./directive-CF8sV3Lr.js";import"./index-DrFu-skq.js";const W=':host{--aspect-ratio:1.62;--z-card--border-color:var(--gray200);--z-card--color-cover-background:var(--color-surface01);--z-card--text-background:var(--color-surface01);--z-card--text-border-radius:none;--z-card--text-border:none;--z-card--text-padding:calc(var(--space-unit) * 2) var(--space-unit);position:relative;display:flex;flex-direction:column;font-family:var(--font-family-sans);font-weight:var(--font-rg)}*,::slotted(*){box-sizing:border-box}*:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}:host(:not([variant="overlay"])) .cover-container{position:relative;width:100%}.cover-container{padding-bottom:calc(100% / var(--aspect-ratio))}::slotted([slot="cover"]),.color-cover{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center}.cover-container>z-icon{--z-icon-width:calc(var(--space-unit) * 11);--z-icon-height:var(--z-icon-width);position:absolute;top:calc(50% - calc(var(--z-icon-height) / 2));left:calc(50% - calc(var(--z-icon-width) / 2));fill:var(--color-primary01)}.color-cover{background-color:var(--z-card--color-cover-background)}.content{display:flex;flex-direction:column;padding-top:var(--space-unit)}.color-cover .cover-content{display:flex;height:100%;flex-direction:column;justify-content:flex-end;padding:var(--space-unit)}::slotted([slot="metadata"]),::slotted([slot="title"]),::slotted([slot="text"]){display:-webkit-inline-box;overflow:hidden;-webkit-box-orient:vertical}::slotted([slot="title"]:not(:last-child)),::slotted([slot="text"]:not(:last-child)){margin-bottom:var(--space-unit)}::slotted([slot="title"])::before{position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;content:""}::slotted([slot="metadata"]:not(:last-child)){margin:0 0 calc(var(--space-unit) * 0.25);-webkit-line-clamp:1;line-clamp:1;text-transform:uppercase}::slotted([slot="title"]){margin:0;font-size:var(--font-size-3);font-weight:var(--font-sb);-webkit-line-clamp:2;line-clamp:2;text-decoration:none}::slotted([slot="title"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary);outline:none}::slotted([slot="text"]){margin:0;-webkit-line-clamp:3;line-clamp:3}.actions{position:relative;z-index:2;display:flex;flex-direction:row;align-items:center}::slotted([slot="action"]:not(:last-child)){margin-right:calc(var(--space-unit) * 2)}::slotted([slot="action"]:focus){box-shadow:var(--shadow-focus-primary);outline:none !important}:host([clickable]) ::slotted([slot="title"]:focus:focus-visible)::before{box-shadow:var(--shadow-focus-primary)}:host([clickable]) ::slotted([slot="title"]:focus:focus-visible){box-shadow:none !important;outline:none !important}:host([variant="text"]){border:var(--z-card--text-border);background-color:var(--z-card--text-background);border-radius:var(--z-card--text-border-radius)}:host([show-shadow])>.content,:host([variant="border"])>.content,:host([variant="shadow"])>.content{height:100%;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2)}:host([variant="text"])>.content{padding:var(--z-card--text-padding)}:host([variant="border"]) .actions,:host([variant="shadow"]) .actions{margin-top:auto}:host([variant="border"]){border:var(--border-size-small) solid var(--z-card--border-color)}:host([variant="border"][clickable]:hover)>.content{background:var(--color-background)}:host([variant="border"][clickable]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant="border"][clickable]:active){border-color:transparent}:host([variant="shadow"]),:host([show-shadow]){box-shadow:var(--shadow-2)}:host([variant="shadow"][clickable]:hover),:host([clickable][show-shadow]:hover){box-shadow:var(--shadow-4)}:host([variant="shadow"][clickable]:focus:focus-visible),:host([clickable][show-shadow]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant="shadow"][clickable]:active),:host([clickable][show-shadow]:active){box-shadow:none}:host([variant="overlay"]) .content{position:absolute;top:0;right:0;bottom:0;left:0;justify-content:flex-end;padding:var(--space-unit);background-image:linear-gradient(to top, rgb(0 0 0 / 100%), rgb(0 0 0 / 0%));color:var(--color-text-inverse);fill:var(--color-text-inverse)}',M=class extends V{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.showShadow=!1,this.clickable=!1}componentWillLoad(){this.hasCoverImage=this.host.querySelector('[slot="cover"]')!==null}renderColorCoverCard(){return[a("div",{class:"cover-container"},a("div",{class:"color-cover"},a("div",{class:"cover-content"},a("slot",{name:"metadata"}),a("slot",{name:"title"})))),a("div",{class:"content"},a("slot",{name:"text"}),a("div",{class:"actions"},a("slot",{name:"action"})))]}renderContent(){return a("div",{class:"content"},a("slot",{name:"metadata"}),a("slot",{name:"title"}),a("slot",{name:"text"}),a("div",{class:"actions"},a("slot",{name:"action"})))}render(){return this.variant===l.TEXT?a(d,null,this.renderContent()):this.variant===l.OVERLAY||this.hasCoverImage?a(d,null,a("div",{class:"cover-container"},this.hasCoverImage&&[a("slot",{name:"cover"}),this.variant!==l.OVERLAY&&this.coverIcon&&a("z-icon",{name:this.coverIcon})],!this.hasCoverImage&&a("div",{class:"color-cover"})),this.renderContent()):a(d,null,this.renderColorCoverCard())}get host(){return this}static get style(){return W}};L(M,[1,"z-card",{variant:[520],coverIcon:[1,"cover-icon"],showShadow:[516,"show-shadow"],clickable:[516],hasCoverImage:[32]}]);const b={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZCard",tagName:"z-card",customElement:!0,members:[{kind:"field",name:"variant",type:"any",description:`Card variant.
Can be one of "text", "border", "shadow", "overlay".
Leave it undefined for the default card.`},{kind:"field",name:"coverIcon",type:"string",description:"Name of the icon to place over the image cover"},{kind:"field",name:"showShadow",type:"boolean",description:"Enable shadow. Default: false.",default:"false"},{kind:"field",name:"clickable",type:"boolean",description:'Enable "clickable" styles like hover background and cursor, focus shadow on the whole card, etc.',default:"false"}],events:[],cssProperties:[{name:"--aspect-ratio",description:"Cover aspect ratio. Default: `1.62`"},{name:"--z-card--border-color",description:"Default: `var(--gray200)`"},{name:"--z-card--color-cover-background",description:"Cover color. Default: `var(--color-surface01)`"},{name:"--z-card--text-background",description:"Background color for the `text` variant. Default: `var(--color-surface01)`"},{name:"--z-card--text-border-radius",description:"Default: `none`"},{name:"--z-card--text-border",description:"Configure CSS `border`. Default: `none`"},{name:"--z-card--text-padding",description:"Configure CSS `padding`. Default: `none`"}],slots:[{name:"cover",description:"Image cover"},{name:"metadata",description:"Metadata"},{name:"title",description:"Title"},{name:"text",description:"Text content"},{name:"action",description:"Actions"}]}],exports:[{kind:"js",name:"ZCard",declaration:{name:"ZCard",module:"src/components/z-card/index.tsx"}},{kind:"custom-element-definition",name:"z-card",declaration:{name:"ZCard",module:"src/components/z-card/index.tsx"}}]}]};D({...h()||{},...b,modules:[...(h()||{}).modules||[],...b.modules]});var p=Object.freeze,O=Object.defineProperty,Z=(t,P)=>p(O(t,"raw",{value:p(t.slice())})),m;const K={title:"ZCard",component:"z-card",argTypes:{variant:{control:{type:"inline-radio",labels:{null:"default"}},options:[null,...Object.values(l)]}},args:{variant:null,showShadow:!1,clickable:!1}},n={render:t=>o`
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
  `},e={args:{coverIcon:"play-filled"},render:t=>o`
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
  `},r={args:{"--z-card--color-cover-background":"var(--yellow500)"},render:t=>o`
    <z-card
      class="demo-card"
      .variant="${t.variant}"
      .showShadow="${t.showShadow}"
      .clickable="${t.clickable}"
      style="--z-card--color-cover-background: ${t["--z-card--color-cover-background"]};"
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
  `},c={args:{"--z-card--text-border-radius":"4px"},parameters:{controls:{exclude:["variant"]}},render:t=>o`
    <z-card
      class="text-variant-card"
      variant="text"
      .showShadow="${t.showShadow}"
      .clickable="${t.clickable}"
      style=${A({"--z-card--text-background":"var(--color-primary01)","--z-card--text-border-radius":`${t["--z-card--text-border-radius"]}`,color:"var(--color-text-inverse)"})}
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
  `},s={args:{"--z-card--text-border":"2px solid var(--gray800)","--z-card--text-border-radius":"4px","--z-card--text-padding":"16px 8px"},parameters:{controls:{exclude:["variant"]}},render:t=>o`<z-card
      class="text-variant-card"
      variant="text"
      .showShadow="${t.showShadow}"
      .clickable="${t.clickable}"
      style=${A({"--z-card--text-background":"var(--color-surface01)","--z-card--text-border":`${t["--z-card--text-border"]}`,"--z-card--text-border-radius":`${t["--z-card--text-border-radius"]}`,"--z-card--text-padding":`${t["--z-card--text-padding"]}`})}
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
    </z-card>`},i={parameters:{controls:{exclude:["clickable","showShadow"]}},render:t=>o(m||(m=Z([`
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
  `])),t.variant)};var u,v,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
} satisfies Story`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,z,x;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(z=e.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var w,k,y;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
} satisfies Story`,...(y=(k=r.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var C,S,$;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...($=(S=c.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var I,_,B;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(_=s.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var E,j,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(T=(j=i.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const Q=["WithImage","WithImageAndIcon","ColorCover","TextVariantPrimaryBackground","TextVariantSurfaceBackgroundAndBordered","WithImageAndClickListener"];export{r as ColorCover,c as TextVariantPrimaryBackground,s as TextVariantSurfaceBackgroundAndBordered,n as WithImage,i as WithImageAndClickListener,e as WithImageAndIcon,Q as __namedExportsOrder,K as default};
