import"./lit-element--ufgQf_M.js";import{x as l}from"./lit-html-rc9TYZL2.js";import{T as g,j as o}from"./index-Dk5nO_yw.js";import"./index-D1zTASq2.js";import"./index-DEc-TeJH.js";import"./index-9WVNbtLu.js";import"./chunk-L4EGOTBX-BzYVsoCE.js";import"./entry-preview-uRqU0LK7.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";import"./_commonjsHelpers-Cpj98o6Y.js";const B="Testo decisamente lungo, che non sta su 1 sola riga. Questo testo occupa varie righe ed è un esempio di come vengono posizionati gli elementi in caso di testo lungo.",W=t=>l`<div class="toast-container">
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
  </div>`,K={title:"ZToastNotification",component:"z-toast-notification",argTypes:{type:{control:{type:"select"},options:Object.values(g)},transition:{control:{type:"select"},options:Object.values(o)}},args:{heading:"Titolo",message:"Questo è un messaggio di prova.",closebutton:!0,autoclose:null,pauseonfocusloss:!1,type:g.DARK,isdraggable:!0,draggablepercentage:80},render:t=>W(t)},s={},e={args:{transition:o.SLIDE_IN_RIGHT}},a={args:{transition:o.SLIDE_IN_LEFT}},n={args:{transition:o.SLIDE_IN_DOWN,closebutton:!1}},i={args:{transition:o.SLIDE_IN_UP,message:B}},r={args:{transition:o.SLIDE_IN_DOWN},render:t=>l`<div class="toast-container slotted-button">
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
    </div>`},c={args:{transition:o.SLIDE_IN_DOWN},render:t=>l`<div class="toast-container slotted-button">
      <z-toast-notification
        heading="Titolo abbastanza lungo"
        message=${B}
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
    </div>`};var u,d,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{} satisfies Story",...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,b,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_RIGHT
  }
} satisfies Story`,...(f=(b=e.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var $,S,I;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_LEFT
  }
} satisfies Story`,...(I=(S=a.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var T,N,y;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    closebutton: false
  }
} satisfies Story`,...(y=(N=n.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var z,_,D;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_UP,
    message: longText
  }
} satisfies Story`,...(D=(_=i.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var L,v,h;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var E,x,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(x=c.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};const M=["NoSlideIn","SlideInRight","SlideInLeft","SlideInDownNoCloseButton","SlideInUpLongText","SlottedButton","SlottedButtonLongText"];export{s as NoSlideIn,n as SlideInDownNoCloseButton,a as SlideInLeft,e as SlideInRight,i as SlideInUpLongText,r as SlottedButton,c as SlottedButtonLongText,M as __namedExportsOrder,K as default};
