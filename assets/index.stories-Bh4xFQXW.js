import{x as e}from"./lit-element-DGXdXVoE.js";import{J as l}from"./index-C0TNZEjZ.js";import"./index-Bo_H2aQL.js";import{s as L,g as u}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as O,H as Q,c as d,h as i,a as I}from"./index-CedYZwFP.js";import"./index-DrFu-skq.js";import"./iframe-DzRr37qK.js";const j=()=>':host{--z-notification--top-offset:0;--z-notification--content-max-width:100%;display:block;width:100%}.main-container{display:flex;max-width:var(--z-notification--content-max-width);align-items:flex-start;padding:calc(var(--space-unit) * 2) var(--z-notification--inline-padding, calc(var(--space-unit) * 2));margin:0 auto;background-color:transparent;font-family:var(--font-family-sans)}:host([sticky]){position:sticky;top:var(--z-notification--top-offset)}:host([sticky]),:host([showshadow]){box-shadow:var(--shadow-3)}:host([type="success"]){background:var(--color-inverse-success)}:host([type="warning"]){background:var(--color-inverse-warning)}:host([type="error"]){background:var(--color-inverse-error)}.status-icon,.close-button{display:flex;height:20px;align-items:center}:host([type="success"]) .status-icon{fill:var(--color-default-success)}:host([type="warning"]) .status-icon{fill:var(--color-default-warning)}:host([type="error"]) .status-icon{fill:var(--color-default-error)}:host([borderposition="bottom"]){border-bottom:var(--border-size-medium) solid var(--color-surface03)}:host([borderposition="top"]){border-top:var(--border-size-medium) solid var(--color-surface03)}button{padding:0;border:none;margin:0;background:transparent;cursor:pointer;font-family:inherit}.status-icon+.content-container{margin-left:var(--space-unit)}.content-container{display:flex;flex:1 auto;flex-wrap:wrap;align-items:baseline;justify-content:space-between;row-gap:calc(var(--space-unit) * 2)}.content-text{width:100%;color:var(--color-default-text);font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.action-button{color:var(--color-primary01);font-size:var(--font-size-1);font-weight:var(--font-sb);letter-spacing:0.32px;line-height:1.333;outline:none}.action-button:focus-visible{box-shadow:var(--shadow-focus-primary)}.content-container+.close-button{margin-left:calc(var(--space-unit) * 2)}.close-button z-icon{fill:var(--color-primary01)}@media (min-width: 768px){.content-container{flex-wrap:nowrap}.content-text+.action-button{margin-left:calc(var(--space-unit) * 5)}}',M=class extends Q{handleActionButtonClick(t){t.preventDefault(),this.notificationAction.emit()}handleCloseButtonClick(t){t.preventDefault(),this.notificationClose.emit()}constructor(t){super(),t!==!1&&this.__registerHost(),this.__attachShadow(),this.notificationAction=d(this,"notificationAction",7),this.notificationClose=d(this,"notificationClose",7),this.showclose=!1,this.showshadow=!1,this.sticky=!1,this.borderposition="bottom",this.handleActionButtonClick=this.handleActionButtonClick.bind(this),this.handleCloseButtonClick=this.handleCloseButtonClick.bind(this)}render(){var t;return i(I,{key:"8694c2c207c1514c9da73612a91a1f98964756ce"},i("div",{key:"48d71fecf6c7594219e4a7c0327847a1ed8a3c59",class:"main-container"},this.contenticonname&&i("z-icon",{key:"8920f5d53f46dbc5f4cc568e53b19481794ad638",class:"status-icon",name:this.contenticonname,width:16,height:16}),i("div",{key:"e18a25e942394c7aa0c6a3d35d82ab0789d35933",class:"content-container"},i("div",{key:"e48fb95c78632d31dae71d98ee992c696793fcf0",class:"content-text"},i("slot",{key:"923ef07ce16f507226fd8f5e30e85f4ae37b0d8e"})),!!(!((t=this.actiontext)===null||t===void 0)&&t.trim())&&i("button",{key:"f475bf46b83dd74cb41a9d345b453d887eb753c3",class:"action-button",type:"button",onClick:this.handleActionButtonClick},this.actiontext)),this.showclose&&i("button",{key:"e9acc4eddd0b876b0235a4e3df40e12e5bba0dca",class:"close-button",type:"button",onClick:this.handleCloseButtonClick},i("z-icon",{key:"e0d0bb669586c3eea7f81e93223f0148c7769134",name:"multiply-circle",width:16,height:16}))))}static get style(){return j()}};O(M,[257,"z-notification",{contenticonname:[1],actiontext:[1],type:[520],showclose:[4],showshadow:[516],sticky:[516],borderposition:[513]}]);const m={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZNotification",tagName:"z-notification",customElement:!0,members:[{kind:"field",name:"contenticonname",type:"string",description:"Name of the icon on the left of the content"},{kind:"field",name:"actiontext",type:"string",description:"Action button text"},{kind:"field",name:"type",type:"any",description:"Alert variant type"},{kind:"field",name:"showclose",type:"boolean",description:"Enable close icon",default:"false"},{kind:"field",name:"showshadow",type:"boolean",description:"Enable shadow.",default:"false"},{kind:"field",name:"sticky",type:"boolean",description:"Enable sticky notification bar.",default:"false"},{kind:"field",name:"borderposition",type:"string",description:"Border position",default:'"bottom"'}],events:[{kind:"event",name:"notificationAction",description:"Call to action clicked"},{kind:"event",name:"notificationClose",description:"Close button clicked"}],cssProperties:[{name:"--z-notification--top-offset",description:"The top offset of the notification. Use it when `sticky` prop is set to `true` and you need the notification to stay under other sticky elements. Default: 0px."},{name:"--z-notification--content-max-width",description:"The max width of the notification content. Useful to align the content with other elements on the page, keeping the colored background full width. Default: 100%. Note: the content is automatically centered, so if you want to limit the width only for the slotted content, you can wrap it in a container with the desired width and leave the `z-notification` width to 100%."},{name:"--z-notification--inline-padding",description:"The inline padding of the notification content. It can be useful to align the content when the `--z-notification--content-max-width` is set. Default: calc(var(--space-unit) * 2)."}],slots:[{name:"-",description:"The text of the notification."}]}],exports:[{kind:"js",name:"ZNotification",declaration:{name:"ZNotification",module:"src/components/z-notification/index.tsx"}},{kind:"custom-element-definition",name:"z-notification",declaration:{name:"ZNotification",module:"src/components/z-notification/index.tsx"}}]}]};L({...u()||{},...m,modules:[...(u()||{}).modules||[],...m.modules]});const _="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum. Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna. Quisque molestie, justo non pretium egestas, lorem elit malesuada turpis, et malesuada sapien nunc a urna. Curabitur sagittis augue turpis, eu consectetur purus consectetur vitae. Sed bibendum nisl diam, eget egestas enim elementum eget. Donec quis magna lobortis, tristique nunc in, fringilla lacus. Duis ac porta turpis. Aenean aliquam tortor sed felis interdum aliquet dignissim vel ligula. Donec auctor risus vitae nisi finibus, sed suscipit tellus fringilla. Sed malesuada gravida tincidunt. Duis tincidunt orci at magna egestas fermentum. Nulla laoreet ante felis, non molestie mi venenatis sit amet. Nullam sollicitudin tempus lacus ac maximus. Suspendisse erat magna, pellentesque ut lectus sit amet, aliquet scelerisque augue. In at felis facilisis, sodales tortor euismod, tincidunt tellus. Quisque vulputate dolor vitae nibh pharetra, a auctor turpis mattis. Nulla facilisi. Vivamus a facilisis ex. Vestibulum ultricies scelerisque sapien eu pharetra. Etiam ut porttitor lorem, id ullamcorper risus. Donec sed sollicitudin metus. Sed sapien lectus, bibendum quis lorem efficitur, pellentesque maximus lectus. Quisque quis lectus quis dolor ultrices facilisis placerat finibus nulla. Donec laoreet urna id varius facilisis. Nulla facilisi. Pellentesque dignissim aliquam interdum. Fusce ante mauris, blandit nec imperdiet mattis, dictum non sapien. Donec aliquet feugiat quam quis cursus. Curabitur et rutrum nunc. Phasellus ut lorem posuere, eleifend felis sed, lobortis arcu. Nam efficitur purus non dolor tincidunt, nec euismod lectus hendrerit. Sed eget rutrum odio, ac maximus lacus. Etiam rutrum purus diam, eu pellentesque elit vulputate eget. Donec nulla augue, euismod non mollis congue, laoreet vel orci. Cras eget suscipit felis. Phasellus eget erat eu nisl suscipit pulvinar. Nunc ullamcorper orci sit amet dui placerat, at vulputate libero finibus. Quisque dignissim risus dolor, a porta erat cursus vel. Sed cursus pellentesque magna fringilla varius. Proin sit amet posuere massa. Proin nisl massa, hendrerit non congue mattis, tincidunt in turpis. Etiam pharetra posuere est, non mollis sapien malesuada non. Quisque metus lectus, hendrerit vel accumsan et, ornare a eros. Donec tempor, elit ut pulvinar auctor, sapien velit consectetur justo, interdum lobortis risus ligula vitae nunc. Praesent quam felis, posuere et consequat consectetur, tempus non sem. Phasellus in ligula enim. Donec gravida, felis vitae elementum mattis, velit ipsum aliquam ipsum, a cursus nisi nisl nec sapien. Ut et orci nulla. Donec fringilla magna non risus imperdiet euismod. Sed viverra eget turpis et faucibus. Sed ante orci, interdum in ligula in, tincidunt feugiat arcu. In viverra efficitur urna laoreet tristique. Phasellus hendrerit, urna et condimentum aliquet, ex urna condimentum dui, vitae vestibulum mauris risus sit amet nunc. Quisque egestas est vel lorem commodo, eget vestibulum enim cursus. Cras lectus velit, fermentum eget mauris id, interdum cursus massa. Maecenas quis dui vehicula mauris condimentum finibus. Sed et magna velit. Duis eleifend dolor at sagittis ornare. Aenean commodo massa enim, ac varius augue varius quis.",K={title:"ZNotification",component:"z-notification",argTypes:{type:{control:{type:"inline-radio"},options:Object.values(l)},borderposition:{control:{type:"inline-radio"},options:["top","bottom"]}},args:{"--z-notification--content-max-width":"100%",contenticonname:"checkmark-circle-filled",borderposition:"bottom",actiontext:"Annulla",showclose:!1,sticky:!1,type:l.SUCCESS}},a={render:t=>e`
    <z-notification
      .contenticonname=${t.contenticonname}
      .actiontext=${t.actiontext}
      .type=${t.type}
      .showclose=${t.showclose}
      .sticky=${t.sticky}
      style="--z-notification--content-max-width: ${t["--z-notification--content-max-width"]}"
    >
      <div class="notification-container"><strong>NOVITÀ</strong>: Testo che descrive le novità.</div>
    </z-notification>
  `},s={render:t=>e`
    <z-notification
      .contenticonname=${t.contenticonname}
      .actiontext=${t.actiontext}
      .type=${t.type}
      .showclose=${t.showclose}
      .sticky=${t.sticky}
      style="--z-notification--content-max-width: ${t["--z-notification--content-max-width"]}"
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
        Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna. Quisque molestie,
        justo non pretium egestas, lorem elit malesuada turpis, et malesuada sapien nunc a urna. Curabitur sagittis
        augue turpis, eu consectetur purus consectetur vitae.
      </div>
    </z-notification>
  `},c={args:{"--z-notification--top-offset":"0"},parameters:{controls:{exclude:["sticky"]}},render:t=>e`
    <div class="banner-notification-demo">
      <z-notification
        .contenticonname=${t.contenticonname}
        .actiontext=${t.actiontext}
        .type=${t.type}
        .showclose=${t.showclose}
        .sticky="true"
        style="--z-notification--top-offset: ${t["--z-notification--top-offset"]}; --z-notification--content-max-width: ${t["--z-notification--content-max-width"]}"
      >
        Questo è il testo della notifica
      </z-notification>
      <div class="heading-1-sb">Titolo della pagina</div>
      <div class="body-1">${_}</div>
    </div>
  `},r={args:{"--z-notification--content-max-width":"768px"},render:t=>e`
    <z-notification
      .contenticonname=${t.contenticonname}
      .actiontext=${t.actiontext}
      .type=${t.type}
      .showclose=${t.showclose}
      .sticky=${t.sticky}
      .borderposition=${t.borderposition}
      style="--z-notification--content-max-width: ${t["--z-notification--content-max-width"]}"
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
        Curabitur volutpat mi purus, in maximus nisl volutpat quis.
      </div>
    </z-notification>
    <div
      class="z-notification-demo-page"
      style="max-width: ${t["--z-notification--content-max-width"]}"
    >
      <div class="heading-1">Titolo della pagina</div>
      <div class="body-1">${_}</div>
    </div>
  `},n={parameters:{controls:{exclude:["sticky"]}},render:t=>e`
    <div class="inline-notification-demo">
      <z-notification
        .contenticonname=${t.contenticonname}
        .actiontext=${t.actiontext}
        .type=${t.type}
        .showclose=${t.showclose}
        .sticky="false"
        style="--z-notification--content-max-width: ${t["--z-notification--content-max-width"]}"
      >
        Questo è il testo della notifica
      </z-notification>
      <div class="content">
        <div class="heading-1">Titolo della scheda</div>
        <div class="body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
          Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna.
        </div>
      </div>
    </div>
  `},o={args:{borderposition:"top"},render:t=>e`
    <div class="z-notification-border-position-demo">
      <z-notification
        .contenticonname=${t.contenticonname}
        .actiontext=${t.actiontext}
        .type=${t.type}
        .showclose=${t.showclose}
        .sticky=${t.sticky}
        .borderposition=${t.borderposition}
        style="--z-notification--content-max-width: ${t["--z-notification--content-max-width"]}"
      >
        <div class="notification-container"><strong>NOVITÀ</strong>: Testo che descrive le novità.</div>
      </z-notification>
    </div>
  `};var p,f,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => html\`
    <z-notification
      .contenticonname=\${args.contenticonname}
      .actiontext=\${args.actiontext}
      .type=\${args.type}
      .showclose=\${args.showclose}
      .sticky=\${args.sticky}
      style="--z-notification--content-max-width: \${args["--z-notification--content-max-width"]}"
    >
      <div class="notification-container"><strong>NOVITÀ</strong>: Testo che descrive le novità.</div>
    </z-notification>
  \`
} satisfies Story`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,g,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => html\`
    <z-notification
      .contenticonname=\${args.contenticonname}
      .actiontext=\${args.actiontext}
      .type=\${args.type}
      .showclose=\${args.showclose}
      .sticky=\${args.sticky}
      style="--z-notification--content-max-width: \${args["--z-notification--content-max-width"]}"
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
        Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna. Quisque molestie,
        justo non pretium egestas, lorem elit malesuada turpis, et malesuada sapien nunc a urna. Curabitur sagittis
        augue turpis, eu consectetur purus consectetur vitae.
      </div>
    </z-notification>
  \`
} satisfies Story`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,x,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    "--z-notification--top-offset": "0"
  },
  parameters: {
    controls: {
      exclude: ["sticky"]
    }
  },
  render: args => html\`
    <div class="banner-notification-demo">
      <z-notification
        .contenticonname=\${args.contenticonname}
        .actiontext=\${args.actiontext}
        .type=\${args.type}
        .showclose=\${args.showclose}
        .sticky="true"
        style="--z-notification--top-offset: \${args["--z-notification--top-offset"]}; --z-notification--content-max-width: \${args["--z-notification--content-max-width"]}"
      >
        Questo è il testo della notifica
      </z-notification>
      <div class="heading-1-sb">Titolo della pagina</div>
      <div class="body-1">\${DEMO_LONG_TEXT}</div>
    </div>
  \`
} satisfies Story`,...(w=(x=c.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var z,k,$;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    "--z-notification--content-max-width": "768px"
  },
  render: args => html\`
    <z-notification
      .contenticonname=\${args.contenticonname}
      .actiontext=\${args.actiontext}
      .type=\${args.type}
      .showclose=\${args.showclose}
      .sticky=\${args.sticky}
      .borderposition=\${args.borderposition}
      style="--z-notification--content-max-width: \${args["--z-notification--content-max-width"]}"
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
        Curabitur volutpat mi purus, in maximus nisl volutpat quis.
      </div>
    </z-notification>
    <div
      class="z-notification-demo-page"
      style="max-width: \${args["--z-notification--content-max-width"]}"
    >
      <div class="heading-1">Titolo della pagina</div>
      <div class="body-1">\${DEMO_LONG_TEXT}</div>
    </div>
  \`
}`,...($=(k=r.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var C,q,S,T,N;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["sticky"]
    }
  },
  render: args => html\`
    <div class="inline-notification-demo">
      <z-notification
        .contenticonname=\${args.contenticonname}
        .actiontext=\${args.actiontext}
        .type=\${args.type}
        .showclose=\${args.showclose}
        .sticky="false"
        style="--z-notification--content-max-width: \${args["--z-notification--content-max-width"]}"
      >
        Questo è il testo della notifica
      </z-notification>
      <div class="content">
        <div class="heading-1">Titolo della scheda</div>
        <div class="body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
          Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna.
        </div>
      </div>
    </div>
  \`
} satisfies Story`,...(S=(q=n.parameters)==null?void 0:q.docs)==null?void 0:S.source},description:{story:"To have an inline notification keep the `sticky` property set to `false`.",...(N=(T=n.parameters)==null?void 0:T.docs)==null?void 0:N.description}}};var D,E,P,A,B;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    borderposition: "top"
  },
  render: args => html\`
    <div class="z-notification-border-position-demo">
      <z-notification
        .contenticonname=\${args.contenticonname}
        .actiontext=\${args.actiontext}
        .type=\${args.type}
        .showclose=\${args.showclose}
        .sticky=\${args.sticky}
        .borderposition=\${args.borderposition}
        style="--z-notification--content-max-width: \${args["--z-notification--content-max-width"]}"
      >
        <div class="notification-container"><strong>NOVITÀ</strong>: Testo che descrive le novità.</div>
      </z-notification>
    </div>
  \`
} satisfies Story`,...(P=(E=o.parameters)==null?void 0:E.docs)==null?void 0:P.source},description:{story:"The position of the border can be changed to correctly display the notification when put on the bottom of the screen.",...(B=(A=o.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};const R=["Default","LongText","StickyBanner","CenteredContent","Inline","BorderPosition"];export{o as BorderPosition,r as CenteredContent,a as Default,n as Inline,s as LongText,c as StickyBanner,R as __namedExportsOrder,K as default};
