import"./lit-element--ufgQf_M.js";import{x as c}from"./lit-html-rc9TYZL2.js";import{T as l,j as o}from"./index-Dk5nO_yw.js";import"./index-B6a-7KeA.js";import"./index-CHadWjDO.js";import"./index-9WVNbtLu.js";import"./chunk-L4EGOTBX-BzYVsoCE.js";import"./entry-preview-uRqU0LK7.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";import"./_commonjsHelpers-Cpj98o6Y.js";const h="Testo decisamente lungo, che non sta su 1 sola riga. Questo testo occupa varie righe ed è un esempio di come vengono posizionati gli elementi in caso di testo lungo.",E=t=>c`<div class="toast-container">
    <z-toast-notification
      heading="${t.heading}"
      message="${t.message}"
      closebutton="${t.closebutton}"
      autoclose="${t.autoclose}"
      pauseonfocusloss="${t.pauseonfocusloss}"
      type="${t.type}"
      isdraggable="${t.isdraggable}"
      draggablepercentage="${t.draggablepercentage}"
      transition="${t.transition}"
    ></z-toast-notification>
  </div>`,Q={title:"ZToastNotification",component:"z-toast-notification",argTypes:{type:{control:{type:"select"},options:Object.values(l)},transition:{control:{type:"select"},options:Object.values(o)}},args:{heading:"Titolo",message:"Questo è un messaggio di prova.",closebutton:!0,autoclose:null,pauseonfocusloss:!1,type:l.DARK,isdraggable:!0,draggablepercentage:80,transition:o.SLIDE_IN_RIGHT},render:t=>E(t)},e={},s={args:{transition:o.SLIDE_IN_LEFT}},n={args:{transition:o.SLIDE_IN_DOWN,closebutton:!1}},a={args:{transition:o.SLIDE_IN_UP,message:h}},i={args:{transition:o.SLIDE_IN_DOWN},render:t=>c`<div class="toast-container slotted-button">
      <z-toast-notification
        heading="${t.heading}"
        message="${t.message}"
        closebutton="${t.closebutton}"
        autoclose="${t.autoclose}"
        pauseonfocusloss="${t.pauseonfocusloss}"
        type="${t.type}"
        isdraggable="${t.isdraggable}"
        draggablepercentage="${t.draggablepercentage}"
        transition="${t.transition}"
      >
        <z-button
          slot="button"
          size="small"
          variant="tertiary"
          >button</z-button
        >
      </z-toast-notification>
    </div>`},r={args:{transition:o.SLIDE_IN_DOWN},render:t=>c`<div class="toast-container slotted-button">
      <z-toast-notification
        heading="Titolo abbastanza lungo"
        message=${h}
        closebutton="${t.closebutton}"
        autoclose="${t.autoclose}"
        pauseonfocusloss="${t.pauseonfocusloss}"
        type="${t.type}"
        isdraggable="${t.isdraggable}"
        draggablepercentage="${t.draggablepercentage}"
        transition="${t.transition}"
      >
        <z-button
          slot="button"
          size="small"
          variant="tertiary"
          >button</z-button
        >
      </z-toast-notification>
    </div>`};var g,u,d;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:"{} satisfies Story",...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,m,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_LEFT
  }
} satisfies Story`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,$,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    closebutton: false
  }
} satisfies Story`,...(S=($=n.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var I,T,N;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_UP,
    message: longText
  }
} satisfies Story`,...(N=(T=a.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var y,z,_;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN
  },
  render: args => html\`<div class="toast-container slotted-button">
      <z-toast-notification
        heading="\${args.heading}"
        message="\${args.message}"
        closebutton="\${args.closebutton}"
        autoclose="\${args.autoclose}"
        pauseonfocusloss="\${args.pauseonfocusloss}"
        type="\${args.type}"
        isdraggable="\${args.isdraggable}"
        draggablepercentage="\${args.draggablepercentage}"
        transition="\${args.transition}"
      >
        <z-button
          slot="button"
          size="small"
          variant="tertiary"
          >button</z-button
        >
      </z-toast-notification>
    </div>\`
} satisfies Story`,...(_=(z=i.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var D,v,L;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN
  },
  render: args => html\`<div class="toast-container slotted-button">
      <z-toast-notification
        heading="Titolo abbastanza lungo"
        message=\${longText}
        closebutton="\${args.closebutton}"
        autoclose="\${args.autoclose}"
        pauseonfocusloss="\${args.pauseonfocusloss}"
        type="\${args.type}"
        isdraggable="\${args.isdraggable}"
        draggablepercentage="\${args.draggablepercentage}"
        transition="\${args.transition}"
      >
        <z-button
          slot="button"
          size="small"
          variant="tertiary"
          >button</z-button
        >
      </z-toast-notification>
    </div>\`
} satisfies Story`,...(L=(v=r.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const A=["SlideInRight","SlideInLeft","SlideInDownNoCloseButton","SlideInUpLongText","SlottedButton","SlottedButtonLongText"];export{n as SlideInDownNoCloseButton,s as SlideInLeft,e as SlideInRight,a as SlideInUpLongText,i as SlottedButton,r as SlottedButtonLongText,A as __namedExportsOrder,Q as default};
