import"./lit-element--ufgQf_M.js";import{x as o}from"./lit-html-rc9TYZL2.js";import{M as u}from"./index-BBy8evlc.js";import"./index-DZahS5Lv.js";import{s as z,g as r}from"./chunk-L4EGOTBX-BzYVsoCE.js";import"./entry-preview-uRqU0LK7.js";import{d as D,H as T,c,h as t,a as N}from"./index-BZ0rSFNp.js";import"./index-DrFu-skq.js";const P=':host{--z-notification--top-offset:0;display:flex;width:100%;box-sizing:border-box;align-items:flex-start;padding:calc(var(--space-unit) * 2);border-bottom:var(--border-size-medium) solid var(--color-surface03);font-family:var(--font-family-sans);outline:none}:host[sticky]{position:sticky;top:var(--z-notification--top-offset)}:host[sticky],:host([showshadow]){box-shadow:var(--shadow-3)}:host([type="success"]){background:var(--color-inverse-success)}:host([type="warning"]){background:var(--color-inverse-warning)}:host([type="error"]){background:var(--color-inverse-error)}.status-icon,.close-button{display:flex;height:20px;align-items:center}:host([type="success"]) .status-icon{fill:var(--color-default-success)}:host([type="warning"]) .status-icon{fill:var(--color-default-warning)}:host([type="error"]) .status-icon{fill:var(--color-default-error)}:host>button,.content-container>button{padding:0;border:none;margin:0;background:transparent;cursor:pointer;font-family:inherit}.status-icon+.content-container{margin-left:var(--space-unit)}.content-container{display:flex;flex:1 auto;flex-wrap:wrap;align-items:baseline;justify-content:space-between;row-gap:calc(var(--space-unit) * 2)}.content-text{max-width:800px;color:var(--color-default-text);font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:20px}.action-button{color:var(--color-primary01);font-size:var(--font-size-1);font-weight:var(--font-sb);letter-spacing:0.32px;line-height:16px}.action-button:focus{box-shadow:var(--shadow-focus-primary);outline:none !important}.content-container+.close-button{margin-left:calc(var(--space-unit) * 2)}.close-button z-icon{fill:var(--color-primary01)}@media only screen and (min-width: 768px){.content-container{flex-wrap:nowrap}.content-text+.action-button{margin-left:calc(var(--space-unit) * 5)}}',Q=class extends T{handleActionButtonClick(e){e.preventDefault(),this.notificationAction.emit()}handleCloseButtonClick(e){e.preventDefault(),this.notificationClose.emit()}constructor(){super(),this.__registerHost(),this.__attachShadow(),this.notificationAction=c(this,"notificationAction",7),this.notificationClose=c(this,"notificationClose",7),this.showclose=!1,this.showshadow=!1,this.sticky=!1,this.handleActionButtonClick=this.handleActionButtonClick.bind(this),this.handleCloseButtonClick=this.handleCloseButtonClick.bind(this)}render(){var e;return t(N,{key:"af938ed0e90dd6e6359a5925b4249e79824da032"},this.contenticonname&&t("z-icon",{key:"04871261c9f933e96485a48c5d9b89daa19ca1c1",class:"status-icon",name:this.contenticonname,width:16,height:16}),t("div",{key:"6f9dbd97844b65cede8f5abff04928d4719c50c8",class:"content-container"},t("div",{key:"ec25baa623abbafb4f8c3d0b03f100a527bcfa10",class:"content-text"},t("slot",{key:"3348e731f5c45ef2ba4b76e9c1a07fc0fe12f27a"})),!!(!((e=this.actiontext)===null||e===void 0)&&e.trim())&&t("button",{key:"511b67aac6485def9e84e3c745eda91e6f8b467e",class:"action-button",type:"button",onClick:this.handleActionButtonClick},this.actiontext)),this.showclose&&t("button",{key:"ce02a3d60e7511cf1fc9671fe7285fa401938e6f",class:"close-button",type:"button",onClick:this.handleCloseButtonClick},t("z-icon",{key:"399ec16fcb0aa47b2b1222c7ed5898540d680479",name:"multiply-circle",width:16,height:16})))}static get style(){return P}};D(Q,[1,"z-notification",{contenticonname:[1],actiontext:[1],type:[520],showclose:[4],showshadow:[516],sticky:[516]}]);const l={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZNotification",tagName:"z-notification",customElement:!0,members:[{kind:"field",name:"contenticonname",type:"string",description:"Name of the icon on the left of the content"},{kind:"field",name:"actiontext",type:"string",description:"Action button text"},{kind:"field",name:"type",type:"any",description:"Alert variant type"},{kind:"field",name:"showclose",type:"boolean",description:"Enable close icon",default:"false"},{kind:"field",name:"showshadow",type:"boolean",description:"Enable shadow.",default:"false"},{kind:"field",name:"sticky",type:"boolean",description:"Enable sticky notification bar.",default:"false"}],events:[{kind:"event",name:"notificationAction",description:"Call to action clicked"},{kind:"event",name:"notificationClose",description:"Close button clicked"}],cssProperties:[{name:"--z-notification--top-offset",description:"The top offset of the notification. Use it when `sticky` prop is set to `true` and you need the notification to stay under other sticky elements. Default: 0px."}],slots:[{name:"-",description:"The text of the notification."}]}],exports:[{kind:"js",name:"ZNotification",declaration:{name:"ZNotification",module:"src/components/z-notification/index.tsx"}},{kind:"custom-element-definition",name:"z-notification",declaration:{name:"ZNotification",module:"src/components/z-notification/index.tsx"}}]}]};z({...r()||{},...l,modules:[...(r()||{}).modules||[],...l.modules]});const M={title:"ZNotification",component:"z-notification",argTypes:{type:{control:{type:"inline-radio"},options:Object.values(u)}},args:{contenticonname:"checkmark-circle-filled",actiontext:"Annulla",showclose:!1,sticky:!1,type:u.SUCCESS}},s={render:e=>o`
    <z-notification
      .contenticonname=${e.contenticonname}
      .actiontext=${e.actiontext}
      .type=${e.type}
      .showclose=${e.showclose}
      .sticky=${e.sticky}
    >
      <div class="notification-container"><strong>NOVITÀ</strong>: Testo che descrive le novità.</div>
    </z-notification>
  `},a={render:e=>o`
    <z-notification
      .contenticonname=${e.contenticonname}
      .actiontext=${e.actiontext}
      .type=${e.type}
      .showclose=${e.showclose}
      .sticky=${e.sticky}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
      Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna. Quisque molestie,
      justo non pretium egestas, lorem elit malesuada turpis, et malesuada sapien nunc a urna. Curabitur sagittis augue
      turpis, eu consectetur purus consectetur vitae.
    </z-notification>
  `},i={args:{notificationText:"Questo è il testo della notifica"},parameters:{controls:{exclude:["sticky"]}},render:e=>o`
    <div class="banner-notification-demo">
      <z-notification
        .contenticonname=${e.contenticonname}
        .actiontext=${e.actiontext}
        .type=${e.type}
        .showclose=${e.showclose}
        sticky="true"
      >
        ${e.notificationText}
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
  `},n={args:{notificationText:"Questo è il testo della notifica"},parameters:{controls:{exclude:["sticky"]}},render:e=>o`
    <div class="inline-notification-demo">
      <z-notification
        contenticonname=${e.contenticonname}
        actiontext=${e.actiontext}
        type=${e.type}
        showclose=${e.showclose}
        sticky="false"
      >
        ${e.notificationText}
      </z-notification>
      <div class="content">
        <h2 class="heading-1">Titolo della scheda</h2>
        <div class="body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
          Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna.
        </div>
      </div>
    </div>
  `};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => html\`
    <z-notification
      .contenticonname=\${args.contenticonname}
      .actiontext=\${args.actiontext}
      .type=\${args.type}
      .showclose=\${args.showclose}
      .sticky=\${args.sticky}
    >
      <div class="notification-container"><strong>NOVITÀ</strong>: Testo che descrive le novità.</div>
    </z-notification>
  \`
} satisfies Story`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var f,g,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => html\`
    <z-notification
      .contenticonname=\${args.contenticonname}
      .actiontext=\${args.actiontext}
      .type=\${args.type}
      .showclose=\${args.showclose}
      .sticky=\${args.sticky}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
      Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna. Quisque molestie,
      justo non pretium egestas, lorem elit malesuada turpis, et malesuada sapien nunc a urna. Curabitur sagittis augue
      turpis, eu consectetur purus consectetur vitae.
    </z-notification>
  \`
} satisfies Story`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,b,y,x,q;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies Story`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"To use the banner variant set the `sticky` property to `true`.",...(q=(x=i.parameters)==null?void 0:x.docs)==null?void 0:q.description}}};var k,w,C,$,S;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:"To use the inline variant set the `sticky` property to `false`.",...(S=($=n.parameters)==null?void 0:$.docs)==null?void 0:S.description}}};const Z=["Default","LongText","BannerVariant","InlineVariant"];export{i as BannerVariant,s as Default,n as InlineVariant,a as LongText,Z as __namedExportsOrder,M as default};
