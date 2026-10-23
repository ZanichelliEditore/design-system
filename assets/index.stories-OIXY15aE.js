import{n as e}from"./chunk-DnJy8xQt.js";import{dt as t,pt as n}from"./iframe-iOyjIY3n.js";import{F as r,K as i,L as a,f as o,s}from"./beans-zckFsBZy.js";var c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{t(),i(),c=`Testo decisamente lungo, che non sta su 1 sola riga. Questo testo occupa varie righe ed è un esempio di come vengono posizionati gli elementi in caso di testo lungo.`,l={title:`ZToastNotification`,component:`z-toast-notification`,argTypes:{type:{control:{type:`inline-radio`},options:Object.values(r)},transition:{control:{type:`select`},options:Object.values(a)}},args:{heading:`Titolo`,message:`Questo è un messaggio di prova.`,closebutton:!0,autoclose:void 0,pauseonfocusloss:!1,type:r.DARK,isdraggable:!0,draggablepercentage:80},render:e=>n(`div`,{class:`toast-container`},n(`z-toast-notification`,e))},u={args:{message:`Messaggio con <b>grassetto</b> e altro <i>html</i> renderizzato`}},d={args:{transition:a.SLIDE_IN_RIGHT}},f={args:{transition:a.SLIDE_IN_LEFT}},p={args:{transition:a.SLIDE_IN_DOWN,closebutton:!1}},m={args:{transition:a.SLIDE_IN_UP,message:c}},h={args:{transition:a.SLIDE_IN_DOWN},render:e=>n(`div`,{class:`toast-container`},n(`z-toast-notification`,e,n(`z-button`,{class:`slotted-button`,slot:`button`,size:o.SMALL,variant:s.TERTIARY},`button`)))},g={args:{transition:a.SLIDE_IN_DOWN,heading:`Titolo abbastanza lungo`,message:c},render:e=>n(`div`,{class:`toast-container`},n(`z-toast-notification`,e,n(`z-button`,{class:`slotted-button`,slot:`button`,size:o.SMALL,variant:s.TERTIARY},`button`)))},_={args:{transition:a.SLIDE_IN_DOWN},render:e=>n(`div`,{class:`toast-container`},n(`z-toast-notification`,e,n(`span`,{slot:`message`},`Messaggio con`,n(`a`,{href:`#`,class:`z-link z-link-blue`},`link`),`e `,n(`b`,null,`grassetto`))))},v={args:{transition:a.SLIDE_IN_DOWN,heading:`Titolo abbastanza lungo`},render:e=>n(`div`,{class:`toast-container`},n(`z-toast-notification`,e,n(`div`,{slot:`message`},n(`div`,null,c),n(`a`,{href:`#`,class:`z-link z-link-blue`},`link`))))},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Messaggio con <b>grassetto</b> e altro <i>html</i> renderizzato"
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_RIGHT
  }
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_LEFT
  }
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    closebutton: false
  }
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_UP,
    message: longText
  }
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN
  },
  render: args => <div class="toast-container">
      <z-toast-notification {...args}>
        <z-button class="slotted-button" slot="button" size={ControlSize.SMALL} variant={ButtonVariant.TERTIARY}>
          button
        </z-button>
      </z-toast-notification>
    </div>
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    heading: "Titolo abbastanza lungo",
    message: longText
  },
  render: args => <div class="toast-container">
      <z-toast-notification {...args}>
        <z-button class="slotted-button" slot="button" size={ControlSize.SMALL} variant={ButtonVariant.TERTIARY}>
          button
        </z-button>
      </z-toast-notification>
    </div>
} satisfies Story`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN
  },
  render: args => <div class="toast-container">
      <z-toast-notification {...args}>
        <span slot="message">
          Messaggio con
          <a href="#" class="z-link z-link-blue">
            link
          </a>
          e <b>grassetto</b>
        </span>
      </z-toast-notification>
    </div>
} satisfies Story`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    heading: "Titolo abbastanza lungo"
  },
  render: args => <div class="toast-container">
      <z-toast-notification {...args}>
        <div slot="message">
          <div>{longText}</div>
          <a href="#" class="z-link z-link-blue">
            link
          </a>
        </div>
      </z-toast-notification>
    </div>
} satisfies Story`,...v.parameters?.docs?.source}}},y=[`NoSlideIn`,`SlideInRight`,`SlideInLeft`,`SlideInDownNoCloseButton`,`SlideInUpLongText`,`SlottedButton`,`SlottedButtonLongText`,`SlottedMessage`,`SlottedMessageLongText`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Messaggio con <b>grassetto</b> e altro <i>html</i> renderizzato"
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_RIGHT
  }
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_LEFT
  }
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    closebutton: false
  }
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_UP,
    message: longText
  }
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN
  },
  render: args => <div class="toast-container">
      <z-toast-notification {...args}>
        <z-button class="slotted-button" slot="button" size={ControlSize.SMALL} variant={ButtonVariant.TERTIARY}>
          button
        </z-button>
      </z-toast-notification>
    </div>
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    heading: "Titolo abbastanza lungo",
    message: longText
  },
  render: args => <div class="toast-container">
      <z-toast-notification {...args}>
        <z-button class="slotted-button" slot="button" size={ControlSize.SMALL} variant={ButtonVariant.TERTIARY}>
          button
        </z-button>
      </z-toast-notification>
    </div>
} satisfies Story`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN
  },
  render: args => <div class="toast-container">
      <z-toast-notification {...args}>
        <span slot="message">
          Messaggio con
          <a href="#" class="z-link z-link-blue">
            link
          </a>
          e <b>grassetto</b>
        </span>
      </z-toast-notification>
    </div>
} satisfies Story`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    heading: "Titolo abbastanza lungo"
  },
  render: args => <div class="toast-container">
      <z-toast-notification {...args}>
        <div slot="message">
          <div>{longText}</div>
          <a href="#" class="z-link z-link-blue">
            link
          </a>
        </div>
      </z-toast-notification>
    </div>
} satisfies Story`,...v.parameters?.docs?.source}}}}))();export{u as NoSlideIn,p as SlideInDownNoCloseButton,f as SlideInLeft,d as SlideInRight,m as SlideInUpLongText,h as SlottedButton,g as SlottedButtonLongText,_ as SlottedMessage,v as SlottedMessageLongText,y as __namedExportsOrder,l as default};