import{r as e}from"./lit-CgIPLKVa.js";import{i as t,t as n}from"./chunk-L4EGOTBX-KlzQXQPc.js";import{a as r,i,n as a,o,r as s}from"./client-Dpr5AR8E.js";import"./z-icon-jtOHWf42.js";import{I as c}from"./beans-CNd94UMz.js";var l=()=>`:host{--z-notification--top-offset:0;--z-notification--content-max-width:100%;display:block;width:100%}.main-container{display:flex;max-width:var(--z-notification--content-max-width);align-items:flex-start;padding:calc(var(--space-unit) * 2) var(--z-notification--inline-padding, calc(var(--space-unit) * 2));margin:0 auto;background-color:transparent;font-family:var(--font-family-sans)}:host([sticky]){position:sticky;top:var(--z-notification--top-offset)}:host([sticky]),:host([showshadow]){box-shadow:var(--shadow-3)}:host([type="success"]){background:var(--color-inverse-success)}:host([type="warning"]){background:var(--color-inverse-warning)}:host([type="error"]){background:var(--color-inverse-error)}.status-icon,.close-button{display:flex;height:20px;align-items:center}:host([type="success"]) .status-icon{fill:var(--color-default-success)}:host([type="warning"]) .status-icon{fill:var(--color-default-warning)}:host([type="error"]) .status-icon{fill:var(--color-default-error)}:host([borderposition="bottom"]){border-bottom:var(--border-size-medium) solid var(--color-surface03)}:host([borderposition="top"]){border-top:var(--border-size-medium) solid var(--color-surface03)}button{padding:0;border:none;margin:0;background:transparent;cursor:pointer;font-family:inherit}.status-icon+.content-container{margin-left:var(--space-unit)}.content-container{display:flex;flex:1 auto;flex-wrap:wrap;align-items:baseline;justify-content:space-between;row-gap:calc(var(--space-unit) * 2)}.content-text{width:100%;color:var(--color-default-text);font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.action-button{color:var(--color-primary01);font-size:var(--font-size-1);font-weight:var(--font-sb);letter-spacing:0.32px;line-height:1.333;outline:none}.action-button:focus-visible{box-shadow:var(--shadow-focus-primary)}.content-container+.close-button{margin-left:calc(var(--space-unit) * 2)}.close-button z-icon{fill:var(--color-primary01)}@media (min-width: 768px){.content-container{flex-wrap:nowrap}.content-text+.action-button{margin-left:calc(var(--space-unit) * 5)}}`;r(class extends a{handleActionButtonClick(e){e.preventDefault(),this.notificationAction.emit()}handleCloseButtonClick(e){e.preventDefault(),this.notificationClose.emit()}constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.notificationAction=i(this,`notificationAction`,7),this.notificationClose=i(this,`notificationClose`,7),this.showclose=!1,this.showshadow=!1,this.sticky=!1,this.borderposition=`bottom`,this.handleActionButtonClick=this.handleActionButtonClick.bind(this),this.handleCloseButtonClick=this.handleCloseButtonClick.bind(this)}render(){return o(s,{key:`1a2395650f65a9364ab512155e866024429b86a4`},o(`div`,{key:`2526a782f79f8bc503f54b7f2173a1a5dd9c96e4`,class:`main-container`},this.contenticonname&&o(`z-icon`,{key:`ef09b791bc86556bad4e55f5ffa9a81ac33feb8b`,class:`status-icon`,name:this.contenticonname,width:16,height:16}),o(`div`,{key:`ad636d7fb72ed6b3e44b1cdf129fca868d4c8f53`,class:`content-container`},o(`div`,{key:`3e4731421b0bfb85bbf62d773a4173238ac089c3`,class:`content-text`},o(`slot`,{key:`c54da4b97617e1adf6e295ef3100a58f302b829c`})),!!this.actiontext?.trim()&&o(`button`,{key:`0bdc21eb0e9ded104c772b901881c943b50484b2`,class:`action-button`,type:`button`,onClick:this.handleActionButtonClick},this.actiontext)),this.showclose&&o(`button`,{key:`015751f845c4c1b6f4501be8df6c88507814b9b9`,class:`close-button`,type:`button`,onClick:this.handleCloseButtonClick},o(`z-icon`,{key:`4358eb88df35773a432d470ebf6adbdb3350708f`,name:`multiply-circle`,width:16,height:16}))))}static get style(){return l()}},[257,`z-notification`,{contenticonname:[1],actiontext:[1],type:[520],showclose:[4],showshadow:[516],sticky:[516],borderposition:[513]}]);var u={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZNotification`,tagName:`z-notification`,customElement:!0,members:[{kind:`field`,name:`contenticonname`,type:`string`,description:`Name of the icon on the left of the content`},{kind:`field`,name:`actiontext`,type:`string`,description:`Action button text`},{kind:`field`,name:`type`,type:`any`,description:`Alert variant type`},{kind:`field`,name:`showclose`,type:`boolean`,description:`Enable close icon`,default:`false`},{kind:`field`,name:`showshadow`,type:`boolean`,description:`Enable shadow.`,default:`false`},{kind:`field`,name:`sticky`,type:`boolean`,description:`Enable sticky notification bar.`,default:`false`},{kind:`field`,name:`borderposition`,type:`string`,description:`Border position`,default:`"bottom"`}],events:[{kind:`event`,name:`notificationAction`,description:`Call to action clicked`},{kind:`event`,name:`notificationClose`,description:`Close button clicked`}],cssProperties:[{name:`--z-notification--top-offset`,description:"The top offset of the notification. Use it when `sticky` prop is set to `true` and you need the notification to stay under other sticky elements. Default: 0px."},{name:`--z-notification--content-max-width`,description:"The max width of the notification content. Useful to align the content with other elements on the page, keeping the colored background full width. Default: 100%. Note: the content is automatically centered, so if you want to limit the width only for the slotted content, you can wrap it in a container with the desired width and leave the `z-notification` width to 100%."},{name:`--z-notification--inline-padding`,description:"The inline padding of the notification content. It can be useful to align the content when the `--z-notification--content-max-width` is set. Default: calc(var(--space-unit) * 2)."}],slots:[{name:`-`,description:`The text of the notification.`}]}],exports:[{kind:`js`,name:`ZNotification`,declaration:{name:`ZNotification`,module:`src/components/z-notification/index.tsx`}},{kind:`custom-element-definition`,name:`z-notification`,declaration:{name:`ZNotification`,module:`src/components/z-notification/index.tsx`}}]}]};t({...n()||{},...u,modules:[...(n()||{}).modules||[],...u.modules]});var d=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum. Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna. Quisque molestie, justo non pretium egestas, lorem elit malesuada turpis, et malesuada sapien nunc a urna. Curabitur sagittis augue turpis, eu consectetur purus consectetur vitae. Sed bibendum nisl diam, eget egestas enim elementum eget. Donec quis magna lobortis, tristique nunc in, fringilla lacus. Duis ac porta turpis. Aenean aliquam tortor sed felis interdum aliquet dignissim vel ligula. Donec auctor risus vitae nisi finibus, sed suscipit tellus fringilla. Sed malesuada gravida tincidunt. Duis tincidunt orci at magna egestas fermentum. Nulla laoreet ante felis, non molestie mi venenatis sit amet. Nullam sollicitudin tempus lacus ac maximus. Suspendisse erat magna, pellentesque ut lectus sit amet, aliquet scelerisque augue. In at felis facilisis, sodales tortor euismod, tincidunt tellus. Quisque vulputate dolor vitae nibh pharetra, a auctor turpis mattis. Nulla facilisi. Vivamus a facilisis ex. Vestibulum ultricies scelerisque sapien eu pharetra. Etiam ut porttitor lorem, id ullamcorper risus. Donec sed sollicitudin metus. Sed sapien lectus, bibendum quis lorem efficitur, pellentesque maximus lectus. Quisque quis lectus quis dolor ultrices facilisis placerat finibus nulla. Donec laoreet urna id varius facilisis. Nulla facilisi. Pellentesque dignissim aliquam interdum. Fusce ante mauris, blandit nec imperdiet mattis, dictum non sapien. Donec aliquet feugiat quam quis cursus. Curabitur et rutrum nunc. Phasellus ut lorem posuere, eleifend felis sed, lobortis arcu. Nam efficitur purus non dolor tincidunt, nec euismod lectus hendrerit. Sed eget rutrum odio, ac maximus lacus. Etiam rutrum purus diam, eu pellentesque elit vulputate eget. Donec nulla augue, euismod non mollis congue, laoreet vel orci. Cras eget suscipit felis. Phasellus eget erat eu nisl suscipit pulvinar. Nunc ullamcorper orci sit amet dui placerat, at vulputate libero finibus. Quisque dignissim risus dolor, a porta erat cursus vel. Sed cursus pellentesque magna fringilla varius. Proin sit amet posuere massa. Proin nisl massa, hendrerit non congue mattis, tincidunt in turpis. Etiam pharetra posuere est, non mollis sapien malesuada non. Quisque metus lectus, hendrerit vel accumsan et, ornare a eros. Donec tempor, elit ut pulvinar auctor, sapien velit consectetur justo, interdum lobortis risus ligula vitae nunc. Praesent quam felis, posuere et consequat consectetur, tempus non sem. Phasellus in ligula enim. Donec gravida, felis vitae elementum mattis, velit ipsum aliquam ipsum, a cursus nisi nisl nec sapien. Ut et orci nulla. Donec fringilla magna non risus imperdiet euismod. Sed viverra eget turpis et faucibus. Sed ante orci, interdum in ligula in, tincidunt feugiat arcu. In viverra efficitur urna laoreet tristique. Phasellus hendrerit, urna et condimentum aliquet, ex urna condimentum dui, vitae vestibulum mauris risus sit amet nunc. Quisque egestas est vel lorem commodo, eget vestibulum enim cursus. Cras lectus velit, fermentum eget mauris id, interdum cursus massa. Maecenas quis dui vehicula mauris condimentum finibus. Sed et magna velit. Duis eleifend dolor at sagittis ornare. Aenean commodo massa enim, ac varius augue varius quis.`,f={title:`ZNotification`,component:`z-notification`,argTypes:{type:{control:{type:`inline-radio`},options:Object.values(c)},borderposition:{control:{type:`inline-radio`},options:[`top`,`bottom`]}},args:{"--z-notification--content-max-width":`100%`,contenticonname:`checkmark-circle-filled`,borderposition:`bottom`,actiontext:`Annulla`,showclose:!1,sticky:!1,type:c.SUCCESS}},p={render:t=>e`
    <z-notification
      .contenticonname=${t.contenticonname}
      .actiontext=${t.actiontext}
      .type=${t.type}
      .showclose=${t.showclose}
      .sticky=${t.sticky}
      style="--z-notification--content-max-width: ${t[`--z-notification--content-max-width`]}"
    >
      <div class="notification-container"><strong>NOVITÀ</strong>: Testo che descrive le novità.</div>
    </z-notification>
  `},m={render:t=>e`
    <z-notification
      .contenticonname=${t.contenticonname}
      .actiontext=${t.actiontext}
      .type=${t.type}
      .showclose=${t.showclose}
      .sticky=${t.sticky}
      style="--z-notification--content-max-width: ${t[`--z-notification--content-max-width`]}"
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
        Curabitur volutpat mi purus, in maximus nisl volutpat quis. Suspendisse sed vestibulum magna. Quisque molestie,
        justo non pretium egestas, lorem elit malesuada turpis, et malesuada sapien nunc a urna. Curabitur sagittis
        augue turpis, eu consectetur purus consectetur vitae.
      </div>
    </z-notification>
  `},h={args:{"--z-notification--top-offset":`0`},parameters:{controls:{exclude:[`sticky`]}},render:t=>e`
    <div class="banner-notification-demo">
      <z-notification
        .contenticonname=${t.contenticonname}
        .actiontext=${t.actiontext}
        .type=${t.type}
        .showclose=${t.showclose}
        .sticky="true"
        style="--z-notification--top-offset: ${t[`--z-notification--top-offset`]}; --z-notification--content-max-width: ${t[`--z-notification--content-max-width`]}"
      >
        Questo è il testo della notifica
      </z-notification>
      <div class="heading-1-sb">Titolo della pagina</div>
      <div class="body-1">${d}</div>
    </div>
  `},g={args:{"--z-notification--content-max-width":`768px`},render:t=>e`
    <z-notification
      .contenticonname=${t.contenticonname}
      .actiontext=${t.actiontext}
      .type=${t.type}
      .showclose=${t.showclose}
      .sticky=${t.sticky}
      .borderposition=${t.borderposition}
      style="--z-notification--content-max-width: ${t[`--z-notification--content-max-width`]}"
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus magna imperdiet malesuada interdum.
        Curabitur volutpat mi purus, in maximus nisl volutpat quis.
      </div>
    </z-notification>
    <div
      class="z-notification-demo-page"
      style="max-width: ${t[`--z-notification--content-max-width`]}"
    >
      <div class="heading-1">Titolo della pagina</div>
      <div class="body-1">${d}</div>
    </div>
  `},_={parameters:{controls:{exclude:[`sticky`]}},render:t=>e`
    <div class="inline-notification-demo">
      <z-notification
        .contenticonname=${t.contenticonname}
        .actiontext=${t.actiontext}
        .type=${t.type}
        .showclose=${t.showclose}
        .sticky="false"
        style="--z-notification--content-max-width: ${t[`--z-notification--content-max-width`]}"
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
  `},v={args:{borderposition:`top`},render:t=>e`
    <div class="z-notification-border-position-demo">
      <z-notification
        .contenticonname=${t.contenticonname}
        .actiontext=${t.actiontext}
        .type=${t.type}
        .showclose=${t.showclose}
        .sticky=${t.sticky}
        .borderposition=${t.borderposition}
        style="--z-notification--content-max-width: ${t[`--z-notification--content-max-width`]}"
      >
        <div class="notification-container"><strong>NOVITÀ</strong>: Testo che descrive le novità.</div>
      </z-notification>
    </div>
  `};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,..._.parameters?.docs?.source},description:{story:"To have an inline notification keep the `sticky` property set to `false`.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source},description:{story:`The position of the border can be changed to correctly display the notification when put on the bottom of the screen.`,...v.parameters?.docs?.description}}};var y=[`Default`,`LongText`,`StickyBanner`,`CenteredContent`,`Inline`,`BorderPosition`];export{v as BorderPosition,g as CenteredContent,p as Default,_ as Inline,m as LongText,h as StickyBanner,y as __namedExportsOrder,f as default};