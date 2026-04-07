import{x as a}from"./lit-element-DGXdXVoE.js";import{Q as c}from"./index-2GKZ5e5J.js";import"./index-DN_DTmEP.js";import{s as E,g as u}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as A,H as B,c as l,h as e,a as V}from"./index-BZ0rSFNp.js";import"./index-DrFu-skq.js";const j=':host{--z-notification--top-offset:0;--z-notification--content-max-width:100%;display:block;width:100%}.main-container{display:flex;max-width:var(--z-notification--content-max-width);align-items:flex-start;padding:calc(var(--space-unit) * 2);margin:0 auto;background-color:transparent;font-family:var(--font-family-sans)}:host([sticky]){position:sticky;top:var(--z-notification--top-offset)}:host([sticky]),:host([showshadow]){box-shadow:var(--shadow-3)}:host([type="success"]){background:var(--color-inverse-success)}:host([type="warning"]){background:var(--color-inverse-warning)}:host([type="error"]){background:var(--color-inverse-error)}.status-icon,.close-button{display:flex;height:20px;align-items:center}:host([type="success"]) .status-icon{fill:var(--color-default-success)}:host([type="warning"]) .status-icon{fill:var(--color-default-warning)}:host([type="error"]) .status-icon{fill:var(--color-default-error)}:host([borderposition="bottom"]){border-bottom:var(--border-size-medium) solid var(--color-surface03)}:host([borderposition="top"]){border-top:var(--border-size-medium) solid var(--color-surface03)}button{padding:0;border:none;margin:0;background:transparent;cursor:pointer;font-family:inherit}.status-icon+.content-container{margin-left:var(--space-unit)}.content-container{display:flex;flex:1 auto;flex-wrap:wrap;align-items:baseline;justify-content:space-between;row-gap:calc(var(--space-unit) * 2)}.content-text{color:var(--color-default-text);font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:20px}.action-button{color:var(--color-primary01);font-size:var(--font-size-1);font-weight:var(--font-sb);letter-spacing:0.32px;line-height:16px}.action-button:focus{box-shadow:var(--shadow-focus-primary);outline:none !important}.content-container+.close-button{margin-left:calc(var(--space-unit) * 2)}.close-button z-icon{fill:var(--color-primary01)}@media only screen and (min-width: 768px){.content-container{flex-wrap:nowrap}.content-text+.action-button{margin-left:calc(var(--space-unit) * 5)}}',I=class extends B{handleActionButtonClick(t){t.preventDefault(),this.notificationAction.emit()}handleCloseButtonClick(t){t.preventDefault(),this.notificationClose.emit()}constructor(){super(),this.__registerHost(),this.__attachShadow(),this.notificationAction=l(this,"notificationAction",7),this.notificationClose=l(this,"notificationClose",7),this.showclose=!1,this.showshadow=!1,this.sticky=!1,this.borderposition="bottom",this.handleActionButtonClick=this.handleActionButtonClick.bind(this),this.handleCloseButtonClick=this.handleCloseButtonClick.bind(this)}render(){var t;return e(V,{key:"6b86867d6947aae7c730ac315ae45a5070ce7c52"},e("div",{key:"78bcc9263697fcf66ba8ff053310bef36ed68255",class:"main-container"},this.contenticonname&&e("z-icon",{key:"4090723702ba6cf188e56e653b943b7fadeae838",class:"status-icon",name:this.contenticonname,width:16,height:16}),e("div",{key:"6e5c6b217be31a8ac8321876f838fde58e04da69",class:"content-container"},e("div",{key:"39328db53b2f80b6a397f61e9acb3e483d360caf",class:"content-text"},e("slot",{key:"7d5cfdd2f320cedced673907f16e5cbe0075021e"})),!!(!((t=this.actiontext)===null||t===void 0)&&t.trim())&&e("button",{key:"7ddaef7f8c5f301d9c946b4cdc5aaaa636ef4cff",class:"action-button",type:"button",onClick:this.handleActionButtonClick},this.actiontext)),this.showclose&&e("button",{key:"d76a34855a619d148f0bd5661bb50fe86cae34a0",class:"close-button",type:"button",onClick:this.handleCloseButtonClick},e("z-icon",{key:"1c744f3c09e13e776ad367a9e68886d70e965b53",name:"multiply-circle",width:16,height:16}))))}static get style(){return j}};A(I,[1,"z-notification",{contenticonname:[1],actiontext:[1],type:[520],showclose:[4],showshadow:[516],sticky:[516],borderposition:[513]}]);const m={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZNotification",tagName:"z-notification",customElement:!0,members:[{kind:"field",name:"contenticonname",type:"string",description:"Name of the icon on the left of the content"},{kind:"field",name:"actiontext",type:"string",description:"Action button text"},{kind:"field",name:"type",type:"any",description:"Alert variant type"},{kind:"field",name:"showclose",type:"boolean",description:"Enable close icon",default:"false"},{kind:"field",name:"showshadow",type:"boolean",description:"Enable shadow.",default:"false"},{kind:"field",name:"sticky",type:"boolean",description:"Enable sticky notification bar.",default:"false"},{kind:"field",name:"borderposition",type:"string",description:"Border position",default:'"bottom"'}],events:[{kind:"event",name:"notificationAction",description:"Call to action clicked"},{kind:"event",name:"notificationClose",description:"Close button clicked"}],cssProperties:[{name:"--z-notification--top-offset",description:"The top offset of the notification. Use it when `sticky` prop is set to `true` and you need the notification to stay under other sticky elements. Default: 0px."},{name:"--z-notification--content-max-width",description:"The max width of the notification content."}],slots:[{name:"-",description:"The text of the notification."}]}],exports:[{kind:"js",name:"ZNotification",declaration:{name:"ZNotification",module:"src/components/z-notification/index.tsx"}},{kind:"custom-element-definition",name:"z-notification",declaration:{name:"ZNotification",module:"src/components/z-notification/index.tsx"}}]}]};E({...u()||{},...m,modules:[...(u()||{}).modules||[],...m.modules]});const F={title:"ZNotification",component:"z-notification",argTypes:{type:{control:{type:"inline-radio"},options:Object.values(c)}},args:{"--z-notification--content-max-width":"100%",contenticonname:"checkmark-circle-filled",actiontext:"Annulla",showclose:!1,sticky:!1,type:c.SUCCESS}},o={render:t=>a`
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
  `},i={args:{borderposition:"top"},render:t=>a`
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
  `},r={render:t=>a`
    <z-notification
      .contenticonname=${t.contenticonname}
      .actiontext=${t.actiontext}
      .type=${t.type}
      .showclose=${t.showclose}
      .sticky=${t.sticky}
      style="--z-notification--content-max-width: ${t["--z-notification--content-max-width"]}"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
      Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna. Quisque molestie,
      justo non pretium egestas, lorem elit malesuada turpis, et malesuada sapien nunc a urna. Curabitur sagittis augue
      turpis, eu consectetur purus consectetur vitae.
    </z-notification>
  `},n={args:{notificationText:"Questo è il testo della notifica"},parameters:{controls:{exclude:["sticky"]}},render:t=>a`
    <div class="banner-notification-demo">
      <z-notification
        .contenticonname=${t.contenticonname}
        .actiontext=${t.actiontext}
        .type=${t.type}
        .showclose=${t.showclose}
        sticky="true"
        style="--z-notification--content-max-width: ${t["--z-notification--content-max-width"]}"
      >
        ${t.notificationText}
      </z-notification>
      <h2 class="heading-1-sb">Titolo della pagina</h2>
      <div class="body-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
        Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna. Quisque molestie,
        justo non pretium egestas, lorem elit malesuada turpis, et malesuada sapien nunc a urna. Curabitur sagittis
        augue turpis, eu consectetur purus consectetur vitae. Sed bibendum nisl diam, eget egestas enim elementum eget.
        Donec quis magna lobortis, tristique nunc in, fringilla lacus. Duis ac porta turpis. Aenean aliquam tortor sed
        felis interdum aliquet dignissim vel ligula. Donec auctor risus vitae nisi finibus, sed suscipit tellus
        fringilla. Sed malesuada gravida tincidunt. Duis tincidunt orci at magna egestas fermentum. Nulla laoreet ante
        felis, non molestie mi venenatis sit amet. Nullam sollicitudin tempus lacus ac maximus. Suspendisse erat magna,
        pellentesque ut lectus sit amet, aliquet scelerisque augue. In at felis facilisis, sodales tortor euismod,
        tincidunt tellus. Quisque vulputate dolor vitae nibh pharetra, a auctor turpis mattis. Nulla facilisi. Vivamus a
        facilisis ex. Vestibulum ultricies scelerisque sapien eu pharetra. Etiam ut porttitor lorem, id ullamcorper
        risus. Donec sed sollicitudin metus. Sed sapien lectus, bibendum quis lorem efficitur, pellentesque maximus
        lectus. Quisque quis lectus quis dolor ultrices facilisis placerat finibus nulla. Donec laoreet urna id varius
        facilisis. Nulla facilisi. Pellentesque dignissim aliquam interdum. Fusce ante mauris, blandit nec imperdiet
        mattis, dictum non sapien. Donec aliquet feugiat quam quis cursus. Curabitur et rutrum nunc. Phasellus ut lorem
        posuere, eleifend felis sed, lobortis arcu. Nam efficitur purus non dolor tincidunt, nec euismod lectus
        hendrerit. Sed eget rutrum odio, ac maximus lacus. Etiam rutrum purus diam, eu pellentesque elit vulputate eget.
        Donec nulla augue, euismod non mollis congue, laoreet vel orci. Cras eget suscipit felis. Phasellus eget erat eu
        nisl suscipit pulvinar. Nunc ullamcorper orci sit amet dui placerat, at vulputate libero finibus. Quisque
        dignissim risus dolor, a porta erat cursus vel. Sed cursus pellentesque magna fringilla varius. Proin sit amet
        posuere massa. Proin nisl massa, hendrerit non congue mattis, tincidunt in turpis. Etiam pharetra posuere est,
        non mollis sapien malesuada non. Quisque metus lectus, hendrerit vel accumsan et, ornare a eros. Donec tempor,
        elit ut pulvinar auctor, sapien velit consectetur justo, interdum lobortis risus ligula vitae nunc. Praesent
        quam felis, posuere et consequat consectetur, tempus non sem. Phasellus in ligula enim. Donec gravida, felis
        vitae elementum mattis, velit ipsum aliquam ipsum, a cursus nisi nisl nec sapien. Ut et orci nulla. Donec
        fringilla magna non risus imperdiet euismod. Sed viverra eget turpis et faucibus. Sed ante orci, interdum in
        ligula in, tincidunt feugiat arcu. In viverra efficitur urna laoreet tristique. Phasellus hendrerit, urna et
        condimentum aliquet, ex urna condimentum dui, vitae vestibulum mauris risus sit amet nunc. Quisque egestas est
        vel lorem commodo, eget vestibulum enim cursus. Cras lectus velit, fermentum eget mauris id, interdum cursus
        massa. Maecenas quis dui vehicula mauris condimentum finibus. Sed et magna velit. Duis eleifend dolor at
        sagittis ornare. Aenean commodo massa enim, ac varius augue varius quis.
      </div>
    </div>
  `},s={args:{notificationText:"Questo è il testo della notifica"},parameters:{controls:{exclude:["sticky"]}},render:t=>a`
    <div class="inline-notification-demo">
      <z-notification
        contenticonname=${t.contenticonname}
        actiontext=${t.actiontext}
        type=${t.type}
        showclose=${t.showclose}
        sticky="false"
        style="--z-notification--content-max-width: ${t["--z-notification--content-max-width"]}"
      >
        ${t.notificationText}
      </z-notification>
      <div class="content">
        <h2 class="heading-1">Titolo della scheda</h2>
        <div class="body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
          Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna.
        </div>
      </div>
    </div>
  `};var d,p,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
} satisfies Story`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,g,v,b,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    borderposition: "top"
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
      <div class="notification-container"><strong>NOVITÀ</strong>: Testo che descrive le novità.</div>
    </z-notification>
  \`
} satisfies Story`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:"To use the border top variant set the `borderposition` property to `top`.",...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.description}}};var x,w,k;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => html\`
    <z-notification
      .contenticonname=\${args.contenticonname}
      .actiontext=\${args.actiontext}
      .type=\${args.type}
      .showclose=\${args.showclose}
      .sticky=\${args.sticky}
      style="--z-notification--content-max-width: \${args["--z-notification--content-max-width"]}"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
      Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna. Quisque molestie,
      justo non pretium egestas, lorem elit malesuada turpis, et malesuada sapien nunc a urna. Curabitur sagittis augue
      turpis, eu consectetur purus consectetur vitae.
    </z-notification>
  \`
} satisfies Story`,...(k=(w=r.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var q,z,$,C,S;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    notificationText: "Questo è il testo della notifica"
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
        sticky="true"
        style="--z-notification--content-max-width: \${args["--z-notification--content-max-width"]}"
      >
        \${args.notificationText}
      </z-notification>
      <h2 class="heading-1-sb">Titolo della pagina</h2>
      <div class="body-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
        Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna. Quisque molestie,
        justo non pretium egestas, lorem elit malesuada turpis, et malesuada sapien nunc a urna. Curabitur sagittis
        augue turpis, eu consectetur purus consectetur vitae. Sed bibendum nisl diam, eget egestas enim elementum eget.
        Donec quis magna lobortis, tristique nunc in, fringilla lacus. Duis ac porta turpis. Aenean aliquam tortor sed
        felis interdum aliquet dignissim vel ligula. Donec auctor risus vitae nisi finibus, sed suscipit tellus
        fringilla. Sed malesuada gravida tincidunt. Duis tincidunt orci at magna egestas fermentum. Nulla laoreet ante
        felis, non molestie mi venenatis sit amet. Nullam sollicitudin tempus lacus ac maximus. Suspendisse erat magna,
        pellentesque ut lectus sit amet, aliquet scelerisque augue. In at felis facilisis, sodales tortor euismod,
        tincidunt tellus. Quisque vulputate dolor vitae nibh pharetra, a auctor turpis mattis. Nulla facilisi. Vivamus a
        facilisis ex. Vestibulum ultricies scelerisque sapien eu pharetra. Etiam ut porttitor lorem, id ullamcorper
        risus. Donec sed sollicitudin metus. Sed sapien lectus, bibendum quis lorem efficitur, pellentesque maximus
        lectus. Quisque quis lectus quis dolor ultrices facilisis placerat finibus nulla. Donec laoreet urna id varius
        facilisis. Nulla facilisi. Pellentesque dignissim aliquam interdum. Fusce ante mauris, blandit nec imperdiet
        mattis, dictum non sapien. Donec aliquet feugiat quam quis cursus. Curabitur et rutrum nunc. Phasellus ut lorem
        posuere, eleifend felis sed, lobortis arcu. Nam efficitur purus non dolor tincidunt, nec euismod lectus
        hendrerit. Sed eget rutrum odio, ac maximus lacus. Etiam rutrum purus diam, eu pellentesque elit vulputate eget.
        Donec nulla augue, euismod non mollis congue, laoreet vel orci. Cras eget suscipit felis. Phasellus eget erat eu
        nisl suscipit pulvinar. Nunc ullamcorper orci sit amet dui placerat, at vulputate libero finibus. Quisque
        dignissim risus dolor, a porta erat cursus vel. Sed cursus pellentesque magna fringilla varius. Proin sit amet
        posuere massa. Proin nisl massa, hendrerit non congue mattis, tincidunt in turpis. Etiam pharetra posuere est,
        non mollis sapien malesuada non. Quisque metus lectus, hendrerit vel accumsan et, ornare a eros. Donec tempor,
        elit ut pulvinar auctor, sapien velit consectetur justo, interdum lobortis risus ligula vitae nunc. Praesent
        quam felis, posuere et consequat consectetur, tempus non sem. Phasellus in ligula enim. Donec gravida, felis
        vitae elementum mattis, velit ipsum aliquam ipsum, a cursus nisi nisl nec sapien. Ut et orci nulla. Donec
        fringilla magna non risus imperdiet euismod. Sed viverra eget turpis et faucibus. Sed ante orci, interdum in
        ligula in, tincidunt feugiat arcu. In viverra efficitur urna laoreet tristique. Phasellus hendrerit, urna et
        condimentum aliquet, ex urna condimentum dui, vitae vestibulum mauris risus sit amet nunc. Quisque egestas est
        vel lorem commodo, eget vestibulum enim cursus. Cras lectus velit, fermentum eget mauris id, interdum cursus
        massa. Maecenas quis dui vehicula mauris condimentum finibus. Sed et magna velit. Duis eleifend dolor at
        sagittis ornare. Aenean commodo massa enim, ac varius augue varius quis.
      </div>
    </div>
  \`
} satisfies Story`,...($=(z=n.parameters)==null?void 0:z.docs)==null?void 0:$.source},description:{story:"To use the banner variant set the `sticky` property to `true`.",...(S=(C=n.parameters)==null?void 0:C.docs)==null?void 0:S.description}}};var T,D,N,P,Q;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    notificationText: "Questo è il testo della notifica"
  },
  parameters: {
    controls: {
      exclude: ["sticky"]
    }
  },
  render: args => html\`
    <div class="inline-notification-demo">
      <z-notification
        contenticonname=\${args.contenticonname}
        actiontext=\${args.actiontext}
        type=\${args.type}
        showclose=\${args.showclose}
        sticky="false"
        style="--z-notification--content-max-width: \${args["--z-notification--content-max-width"]}"
      >
        \${args.notificationText}
      </z-notification>
      <div class="content">
        <h2 class="heading-1">Titolo della scheda</h2>
        <div class="body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
          Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna.
        </div>
      </div>
    </div>
  \`
} satisfies Story`,...(N=(D=s.parameters)==null?void 0:D.docs)==null?void 0:N.source},description:{story:"To use the inline variant set the `sticky` property to `false`.",...(Q=(P=s.parameters)==null?void 0:P.docs)==null?void 0:Q.description}}};const G=["Default","BorderTop","LongText","BannerVariant","InlineVariant"];export{n as BannerVariant,i as BorderTop,o as Default,s as InlineVariant,r as LongText,G as __namedExportsOrder,F as default};
