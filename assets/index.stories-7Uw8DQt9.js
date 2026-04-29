import{r as e}from"./lit-CgIPLKVa.js";import{U as t,V as n}from"./beans-CNd94UMz.js";import"./z-button-By8ffqVU.js";import"./z-toast-notification-C-KbsTGS.js";var r=`Testo decisamente lungo, che non sta su 1 sola riga. Questo testo occupa varie righe ed è un esempio di come vengono posizionati gli elementi in caso di testo lungo.`,i=t=>e`<div class="toast-container">
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
  </div>`,a={title:`ZToastNotification`,component:`z-toast-notification`,argTypes:{type:{control:{type:`inline-radio`},options:Object.values(n)},transition:{control:{type:`select`},options:Object.values(t)}},args:{heading:`Titolo`,message:`Questo è un messaggio di prova.`,closebutton:!0,autoclose:null,pauseonfocusloss:!1,type:n.DARK,isdraggable:!0,draggablepercentage:80},render:e=>i(e)},o={args:{message:`Messaggio con <b>grassetto</b> e altro <i>html</i> renderizzato`}},s={args:{transition:t.SLIDE_IN_RIGHT}},c={args:{transition:t.SLIDE_IN_LEFT}},l={args:{transition:t.SLIDE_IN_DOWN,closebutton:!1}},u={args:{transition:t.SLIDE_IN_UP,message:r}},d={args:{transition:t.SLIDE_IN_DOWN},render:t=>e`<div class="toast-container slotted-button">
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
    </div>`},f={args:{transition:t.SLIDE_IN_DOWN},render:t=>e`<div class="toast-container slotted-button">
      <z-toast-notification
        heading="Titolo abbastanza lungo"
        message=${r}
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
    </div>`},p={args:{transition:t.SLIDE_IN_DOWN},parameters:{controls:{exclude:[`message`]}},render:t=>e`<div class="toast-container">
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
    </div>`},m={args:{transition:t.SLIDE_IN_DOWN},parameters:{controls:{exclude:[`message`]}},render:t=>e`<div class="toast-container">
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
          >${r}
          <a
            href="#"
            class="z-link z-link-blue"
            >link</a
          ></span
        >
      </z-toast-notification>
    </div>`};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Messaggio con <b>grassetto</b> e altro <i>html</i> renderizzato"
  }
} satisfies Story`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_RIGHT
  }
} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_LEFT
  }
} satisfies Story`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    closebutton: false
  }
} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_UP,
    message: longText
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN
  },
  parameters: {
    controls: {
      exclude: ["message"]
    }
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
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN
  },
  parameters: {
    controls: {
      exclude: ["message"]
    }
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
} satisfies Story`,...m.parameters?.docs?.source}}};var h=[`NoSlideIn`,`SlideInRight`,`SlideInLeft`,`SlideInDownNoCloseButton`,`SlideInUpLongText`,`SlottedButton`,`SlottedButtonLongText`,`SlottedMessage`,`SlottedMessageLongText`];export{o as NoSlideIn,l as SlideInDownNoCloseButton,c as SlideInLeft,s as SlideInRight,u as SlideInUpLongText,d as SlottedButton,f as SlottedButtonLongText,p as SlottedMessage,m as SlottedMessageLongText,h as __namedExportsOrder,a as default};