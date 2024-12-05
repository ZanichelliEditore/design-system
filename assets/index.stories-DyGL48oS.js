import{x as y}from"./lit-element-DGXdXVoE.js";import{T as r,j as o}from"./index-JHKFBkCx.js";import"./index-Cw-PSUvi.js";import"./index-BAtxMdpG.js";import"./index-BpZkdoDR.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";import"./breakpoints-p3CVLX0Q.js";import"./_commonjsHelpers-Cpj98o6Y.js";const D=t=>y`<div class="toast-container">
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
  </div>`,w={title:"ZToastNotification",component:"z-toast-notification",argTypes:{type:{control:{type:"select"},options:Object.values(r)},transition:{control:{type:"select"},options:Object.values(o)}},args:{heading:"Titolo",message:"Questo è un messaggio di prova.",closebutton:!0,autoclose:null,pauseonfocusloss:!1,type:r.DARK,isdraggable:!0,draggablepercentage:80,transition:o.SLIDE_IN_RIGHT},render:t=>D(t)},s={},e={args:{transition:o.SLIDE_IN_LEFT}},a={args:{transition:o.SLIDE_IN_DOWN}},n={args:{transition:o.SLIDE_IN_UP}},i={args:{transition:o.SLIDE_IN_DOWN},render:t=>y`<div class="toast-container slotted-button">
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
          >button</z-button
        >
      </z-toast-notification>
    </div>`};var c,l,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{} satisfies Story",...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,g,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_LEFT
  }
} satisfies Story`,...(d=(g=e.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var m,b,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN
  }
} satisfies Story`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var S,I,$;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_UP
  }
} satisfies Story`,...($=(I=n.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var N,_,T;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
          >button</z-button
        >
      </z-toast-notification>
    </div>\`
} satisfies Story`,...(T=(_=i.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const B=["SlideInRight","SlideInLeft","SlideInDown","SlideInUp","SlottedButton"];export{a as SlideInDown,e as SlideInLeft,s as SlideInRight,n as SlideInUp,i as SlottedButton,B as __namedExportsOrder,w as default};
