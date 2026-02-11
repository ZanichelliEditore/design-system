import{x as s}from"./lit-element-DGXdXVoE.js";import{T as p,k as o}from"./index-BBy8evlc.js";import"./index-C9lRnTUH.js";import"./index-DTpSj2cQ.js";import"./index-DSmxu1eR.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";import"./_commonjsHelpers-Cpj98o6Y.js";const d="Testo decisamente lungo, che non sta su 1 sola riga. Questo testo occupa varie righe ed è un esempio di come vengono posizionati gli elementi in caso di testo lungo.",F=t=>s`<div class="toast-container">
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
  </div>`,X={title:"ZToastNotification",component:"z-toast-notification",argTypes:{type:{control:{type:"select"},options:Object.values(p)},transition:{control:{type:"select"},options:Object.values(o)}},args:{heading:"Titolo",message:"Questo è un messaggio di prova.",closebutton:!0,autoclose:null,pauseonfocusloss:!1,type:p.DARK,isdraggable:!0,draggablepercentage:80},render:t=>F(t)},a={args:{message:"Messaggio con <b>grassetto</b> e altro <i>html</i> renderizzato"}},n={args:{transition:o.SLIDE_IN_RIGHT}},e={args:{transition:o.SLIDE_IN_LEFT}},i={args:{transition:o.SLIDE_IN_DOWN,closebutton:!1}},r={args:{transition:o.SLIDE_IN_UP,message:d}},l={args:{transition:o.SLIDE_IN_DOWN},render:t=>s`<div class="toast-container slotted-button">
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
    </div>`},c={args:{transition:o.SLIDE_IN_DOWN},render:t=>s`<div class="toast-container slotted-button">
      <z-toast-notification
        heading="Titolo abbastanza lungo"
        message=${d}
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
    </div>`},g={args:{transition:o.SLIDE_IN_DOWN},render:t=>s`<div class="toast-container">
      <z-toast-notification
        heading="${t.heading}"
        closebutton="${t.closebutton}"
        autoclose="${t.autoclose}"
        pauseonfocusloss="${t.pauseonfocusloss}"
        type="${t.type}"
        isdraggable="${t.isdraggable}"
        draggablepercentage="${t.draggablepercentage}"
        transition="${t.transition}"
      >
        <span slot="message"
          >Messaggio con
          <a
            href="#"
            class="z-link z-link-blue"
            >link</a
          >
          e <b>grassetto</b></span
        >
      </z-toast-notification>
    </div>`},u={args:{transition:o.SLIDE_IN_DOWN},render:t=>s`<div class="toast-container">
      <z-toast-notification
        heading="Titolo abbastanza lungo"
        closebutton="${t.closebutton}"
        autoclose="${t.autoclose}"
        pauseonfocusloss="${t.pauseonfocusloss}"
        type="${t.type}"
        isdraggable="${t.isdraggable}"
        draggablepercentage="${t.draggablepercentage}"
        transition="${t.transition}"
      >
        <span slot="message"
          >${d}
          <a
            href="#"
            class="z-link z-link-blue"
            >link</a
          ></span
        >
      </z-toast-notification>
    </div>`};var b,m,$;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    message: "Messaggio con <b>grassetto</b> e altro <i>html</i> renderizzato"
  }
} satisfies Story`,...($=(m=a.parameters)==null?void 0:m.docs)==null?void 0:$.source}}};var f,S,z;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_RIGHT
  }
} satisfies Story`,...(z=(S=n.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var I,T,N;e.parameters={...e.parameters,docs:{...(I=e.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_LEFT
  }
} satisfies Story`,...(N=(T=e.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var y,_,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    closebutton: false
  }
} satisfies Story`,...(h=(_=i.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var D,v,L;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_UP,
    message: longText
  }
} satisfies Story`,...(L=(v=r.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var E,k,x;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var O,W,M;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(W=c.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var B,R,U;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN
  },
  render: args => html\`<div class="toast-container">
      <z-toast-notification
        heading="\${args.heading}"
        closebutton="\${args.closebutton}"
        autoclose="\${args.autoclose}"
        pauseonfocusloss="\${args.pauseonfocusloss}"
        type="\${args.type}"
        isdraggable="\${args.isdraggable}"
        draggablepercentage="\${args.draggablepercentage}"
        transition="\${args.transition}"
      >
        <span slot="message"
          >Messaggio con
          <a
            href="#"
            class="z-link z-link-blue"
            >link</a
          >
          e <b>grassetto</b></span
        >
      </z-toast-notification>
    </div>\`
} satisfies Story`,...(U=(R=g.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var j,w,C;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN
  },
  render: args => html\`<div class="toast-container">
      <z-toast-notification
        heading="Titolo abbastanza lungo"
        closebutton="\${args.closebutton}"
        autoclose="\${args.autoclose}"
        pauseonfocusloss="\${args.pauseonfocusloss}"
        type="\${args.type}"
        isdraggable="\${args.isdraggable}"
        draggablepercentage="\${args.draggablepercentage}"
        transition="\${args.transition}"
      >
        <span slot="message"
          >\${longText}
          <a
            href="#"
            class="z-link z-link-blue"
            >link</a
          ></span
        >
      </z-toast-notification>
    </div>\`
} satisfies Story`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const Y=["NoSlideIn","SlideInRight","SlideInLeft","SlideInDownNoCloseButton","SlideInUpLongText","SlottedButton","SlottedButtonLongText","SlottedMessage","SlottedMessageLongText"];export{a as NoSlideIn,i as SlideInDownNoCloseButton,e as SlideInLeft,n as SlideInRight,r as SlideInUpLongText,l as SlottedButton,c as SlottedButtonLongText,g as SlottedMessage,u as SlottedMessageLongText,Y as __namedExportsOrder,X as default};
