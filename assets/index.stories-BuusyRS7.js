import{x as o}from"./lit-element-DGXdXVoE.js";import{o as B}from"./style-map-DWZVjDvr.js";import{z as d}from"./index-CcuDdGyi.js";import"./index-BEj-2O7q.js";import{s as T,g as h}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as W,H as V,h as a,a as l}from"./index-8h8udRzn.js";import"./directive-CF8sV3Lr.js";const L=':host{--aspect-ratio:1.62;--z-card--border-color:var(--gray200);--z-card--color-cover-background:var(--color-surface01);--z-card--text-background:var(--color-surface01);--z-card--text-border-radius:none;--z-card--text-border:none;--z-card--text-padding:calc(var(--space-unit) * 2) var(--space-unit);position:relative;display:flex;flex-direction:column;font-family:var(--font-family-sans);font-weight:var(--font-rg)}*,::slotted(*){box-sizing:border-box}:host(:not([variant="overlay"])) .cover-container{position:relative;width:100%}.cover-container{padding-bottom:calc(100% / var(--aspect-ratio))}::slotted([slot="cover"]),.color-cover{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center}.cover-container>z-icon{--z-icon-width:calc(var(--space-unit) * 11);--z-icon-height:var(--z-icon-width);position:absolute;top:calc(50% - calc(var(--z-icon-height) / 2));left:calc(50% - calc(var(--z-icon-width) / 2));fill:var(--color-primary01)}.color-cover{background-color:var(--z-card--color-cover-background)}.content{display:flex;flex-direction:column;padding-top:var(--space-unit)}.color-cover .cover-content{display:flex;height:100%;flex-direction:column;justify-content:flex-end;padding:var(--space-unit)}::slotted([slot="metadata"]),::slotted([slot="title"]),::slotted([slot="text"]){display:-webkit-inline-box;overflow:hidden;-webkit-box-orient:vertical}::slotted([slot="title"]:not(:last-child)),::slotted([slot="text"]:not(:last-child)){margin-bottom:var(--space-unit)}::slotted([slot="title"])::before{position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;content:""}::slotted([slot="metadata"]:not(:last-child)){margin:0 0 calc(var(--space-unit) * 0.25);-webkit-line-clamp:1;text-transform:uppercase}::slotted([slot="title"]){margin:0;color:inherit;font-size:inherit;font-weight:var(--font-sb);-webkit-line-clamp:2;text-decoration:none}::slotted([slot="text"]){margin:0;-webkit-line-clamp:3}.actions{position:relative;z-index:2;display:flex;flex-direction:row;align-items:center}::slotted([slot="action"]:not(:last-child)){margin-right:calc(var(--space-unit) * 2)}:host([clickable]) ::slotted([slot="title"]:focus:focus-visible)::before{box-shadow:var(--shadow-focus-primary)}:host([clickable]) ::slotted([slot="title"]:focus:focus-visible){box-shadow:none !important;outline:none !important}:host([variant="text"]){border:var(--z-card--text-border);background-color:var(--z-card--text-background);border-radius:var(--z-card--text-border-radius)}:host([show-shadow])>.content,:host([variant="border"])>.content,:host([variant="shadow"])>.content{height:100%;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2)}:host([variant="text"])>.content{padding:var(--z-card--text-padding)}:host([variant="border"]) .actions,:host([variant="shadow"]) .actions{margin-top:auto}:host([variant="border"]){border:var(--border-size-small) solid var(--z-card--border-color)}:host([variant="border"][clickable]:hover)>.content{background:var(--color-background)}:host([variant="border"][clickable]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant="border"][clickable]:active){border-color:transparent}:host([variant="shadow"]),:host([show-shadow]){box-shadow:var(--shadow-2)}:host([variant="shadow"][clickable]:hover),:host([clickable][show-shadow]:hover){box-shadow:var(--shadow-4)}:host([variant="shadow"][clickable]:focus:focus-visible),:host([clickable][show-shadow]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant="shadow"][clickable]:active),:host([clickable][show-shadow]:active){box-shadow:none}:host([variant="overlay"]) .content{position:absolute;top:0;right:0;bottom:0;left:0;justify-content:flex-end;padding:var(--space-unit);background-image:linear-gradient(to top, rgb(0 0 0 / 100%), rgb(0 0 0 / 0%));color:var(--color-text-inverse);fill:var(--color-text-inverse)}',M=class extends V{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.variant=void 0,this.coverIcon=void 0,this.showShadow=!1,this.clickable=!1,this.hasCoverImage=void 0}componentWillLoad(){this.hasCoverImage=this.host.querySelector('[slot="cover"]')!==null}renderColorCoverCard(){return[a("div",{class:"cover-container"},a("div",{class:"color-cover"},a("div",{class:"cover-content"},a("slot",{name:"metadata"}),a("slot",{name:"title"})))),a("div",{class:"content"},a("slot",{name:"text"}),a("div",{class:"actions"},a("slot",{name:"action"})))]}renderContentDiv(){return a("div",{class:"content"},a("slot",{name:"metadata"}),a("slot",{name:"title"}),a("slot",{name:"text"}),a("div",{class:"actions"},a("slot",{name:"action"})))}render(){return this.variant===d.TEXT?a(l,null,this.renderContentDiv()):this.variant===d.OVERLAY||this.hasCoverImage?a(l,null,a("div",{class:"cover-container"},this.hasCoverImage&&[a("slot",{name:"cover"}),this.variant!==d.OVERLAY&&this.coverIcon&&a("z-icon",{name:this.coverIcon})],!this.hasCoverImage&&a("div",{class:"color-cover"})),this.renderContentDiv()):a(l,null,this.renderColorCoverCard())}get host(){return this}static get style(){return L}};W(M,[1,"z-card",{variant:[520],coverIcon:[1,"cover-icon"],showShadow:[516,"show-shadow"],clickable:[516],hasCoverImage:[32]}]);const b={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZCard",tagName:"z-card",customElement:!0,members:[{kind:"field",name:"variant",type:"any",description:`Card variant.
Can be one of "text", "border", "shadow", "overlay".
Leave it undefined for the default card.`},{kind:"field",name:"coverIcon",type:"string",description:"Name of the icon to place over the image cover"},{kind:"field",name:"showShadow",type:"boolean",description:"Enable shadow. Default: false.",default:"false"},{kind:"field",name:"clickable",type:"boolean",description:"Enable 'clickable' style like hover and focus style.",default:"false"}],events:[],cssProperties:[{name:"--aspect-ratio",description:"Cover aspect ratio. Default: `1.62`"},{name:"--z-card--border-color",description:"Default: `var(--gray200)`"},{name:"--z-card--color-cover-background",description:"Cover color. Default: `var(--color-surface01)`"},{name:"--z-card--text-background",description:"Background color for the `text` variant. Default: `var(--color-surface01)`"},{name:"--z-card--text-border-radius",description:"Default: `none`"},{name:"--z-card--text-border",description:"Configure CSS `border`. Default: `none`"},{name:"--z-card--text-padding",description:"Configure CSS `padding`. Default: `none`"}],slots:[{name:"cover",description:"Image cover"},{name:"metadata",description:"Metadata"},{name:"title",description:"Title"},{name:"text",description:"Text content"},{name:"action",description:"Actions"}]}],exports:[{kind:"js",name:"ZCard",declaration:{name:"ZCard",module:"src/components/z-card/index.tsx"}},{kind:"custom-element-definition",name:"z-card",declaration:{name:"ZCard",module:"src/components/z-card/index.tsx"}}]}]};T({...h()||{},...b,modules:[...(h()||{}).modules||[],...b.modules]});var p=Object.freeze,O=Object.defineProperty,Z=(t,P)=>p(O(t,"raw",{value:p(t.slice())})),m;const G={title:"ZCard",component:"z-card",argTypes:{variant:{control:{type:"inline-radio",labels:{null:"default"}},options:[null,...Object.values(d)]}},args:{variant:null,showShadow:!1,clickable:!1}},e={render:t=>o`
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
  `},n={args:{coverIcon:"play-filled"},render:t=>o`
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
      style=${B({"--z-card--text-background":"var(--color-primary01)","--z-card--text-border-radius":`${t["--z-card--text-border-radius"]}`,color:"var(--color-text-inverse)"})}
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
      style=${B({"--z-card--text-background":"var(--color-white)","--z-card--text-border":`${t["--z-card--text-border"]}`,"--z-card--text-border-radius":`${t["--z-card--text-border-radius"]}`,"--z-card--text-padding":`${t["--z-card--text-padding"]}`})}
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
    </z-card>`},i={render:t=>o(m||(m=Z([`
    <script>
      document.getElementById("btn-card").addEventListener("click", (e) => {
        // emit event, do stuff
        alert("Click on card");
      });
    <\/script>
    <z-card
      class="demo-card"
      .variant="`,`"
      .showShadow="`,`"
      .clickable="`,`"
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
  `])),t.variant,t.showShadow,t.clickable)};var v,u,g;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies Story`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,z,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(z=n.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var w,k,y;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
} satisfies Story`,...(y=(k=r.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var S,C,$;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} satisfies Story`,...($=(C=c.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var I,_,j;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    "--z-card--text-background": \`var(--color-white)\`,
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
} satisfies Story`,...(j=(_=s.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var E,D,A;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => html\`
    <script>
      document.getElementById("btn-card").addEventListener("click", (e) => {
        // emit event, do stuff
        alert("Click on card");
      });
    <\/script>
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
  \`
} satisfies Story`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const J=["WithImage","WithImageAndIcon","ColorCover","TextVariantPrimaryBackground","TextVariantWhiteBackgroundAndBordered","WithImageAndClick"];export{r as ColorCover,c as TextVariantPrimaryBackground,s as TextVariantWhiteBackgroundAndBordered,e as WithImage,i as WithImageAndClick,n as WithImageAndIcon,J as __namedExportsOrder,G as default};