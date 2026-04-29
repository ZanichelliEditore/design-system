import{r as e}from"./lit-CgIPLKVa.js";import{i as t,t as n}from"./chunk-L4EGOTBX-KlzQXQPc.js";import{a as r,n as i,o as a}from"./client-Dpr5AR8E.js";import{H as o,U as s}from"./beans-CNd94UMz.js";import"./z-button-By8ffqVU.js";import"./z-toast-notification-C-KbsTGS.js";var c=()=>`:host{position:fixed;z-index:10000;display:flex;flex-flow:column nowrap;margin-top:calc(var(--space-unit) * 2);margin-bottom:calc(var(--space-unit) * 2);font-family:var(--font-family-sans);font-weight:var(--font-rg)}::slotted(z-toast-notification){width:100vw}::slotted(:not(:last-child)){margin-bottom:calc(var(--space-unit) * 1)}:host([position="bottom-centre"]),:host([position="bottom-right"]),:host([position="bottom-left"]){bottom:0;align-items:flex-end;justify-content:flex-end}:host([position="top-left"]),:host([position="top-right"]),:host([position="top-centre"]){top:0;align-items:flex-start;justify-content:flex-start}@media only screen and (min-width: 768px){:host{margin:calc(var(--space-unit) * 3)}:host([position="top-centre"]){top:0;left:50%;align-items:center;justify-content:flex-start;transform:translateX(-50%)}:host([position="top-left"]){top:0;left:0;align-items:flex-start;justify-content:flex-start}:host([position="top-right"]){top:0;right:0;align-items:flex-end;justify-content:flex-start}:host([position="bottom-centre"]){bottom:0;left:50%;align-items:center;justify-content:flex-end;transform:translateX(-50%)}:host([position="bottom-right"]){right:0;bottom:0;align-items:flex-end;justify-content:flex-end}:host([position="bottom-left"]){bottom:0;left:0;align-items:flex-start;justify-content:flex-end}::slotted(z-toast-notification){width:50vw}}@media only screen and (min-width: 1366px){:host{margin:calc(var(--space-unit) * 4)}::slotted(z-toast-notification){width:33vw}}`;r(class extends i{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.position=o.TOP_RIGHT,this.newestontop=!0,this.notificationArray=[]}watchPropNewestontop(e){this.hostElement.append(...this.notificationArray.reverse()),e?this.hostElement.shadowRoot.addEventListener(`slotchange`,this.slotChangeHandler):this.hostElement.shadowRoot.removeEventListener(`slotchange`,this.slotChangeHandler)}componentWillLoad(){this.newestontop&&this.handleNewestOnTop()}handleNewestOnTop(){this.notificationArray=Array.from(this.hostElement.children),this.hostElement.append(...this.notificationArray.reverse()),this.hostElement.shadowRoot.addEventListener(`slotchange`,this.slotChangeHandler.bind(this))}slotChangeHandler(){let e=Array.from(this.hostElement.children).filter(e=>!this.notificationArray.includes(e));e&&e.forEach(e=>{this.notificationArray.push(e);let t=e;e.remove(),this.hostElement.prepend(t)})}render(){return a(`slot`,{key:`ee3ca57c9e650e682acdb657e9ac91732547c1ce`,name:`toasts`})}get hostElement(){return this}static get watchers(){return{newestontop:[{watchPropNewestontop:0}]}}static get style(){return c()}},[257,`z-toast-notification-list`,{position:[520],newestontop:[4]},void 0,{newestontop:[{watchPropNewestontop:0}]}]);var l={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZToastNotificationList`,tagName:`z-toast-notification-list`,customElement:!0,members:[{kind:`field`,name:`position`,type:`any`,description:`Set the position of toast notification list - top-left, top-centre, top-right, bottom-left, bottom-centre, bottom-right`,default:`ToastNotificationPosition.TOP_RIGHT`},{kind:`field`,name:`newestontop`,type:`boolean`,description:`Set the entry position of new notification in the list`,default:`true`}],events:[]}],exports:[{kind:`js`,name:`ZToastNotificationList`,declaration:{name:`ZToastNotificationList`,module:`src/components/z-toast-notification-list/index.tsx`}},{kind:`custom-element-definition`,name:`z-toast-notification-list`,declaration:{name:`ZToastNotificationList`,module:`src/components/z-toast-notification-list/index.tsx`}}]}]};t({...n()||{},...l,modules:[...(n()||{}).modules||[],...l.modules]});var u=(t,n=s.SLIDE_IN_DOWN,r)=>e`<div class="z-toast-notification-container">
    <z-toast-notification-list
      position="${t.position}"
      newestontop="${t.newestontop}"
    >
      ${r?e`<z-toast-notification
            slot="toasts"
            type="dark"
            heading="Notification"
            .transition=${n}
            draggablepercentage="50"
            autoclose="18000"
            closebutton
          >
            ${r}
          </z-toast-notification>`:e`<z-toast-notification
            slot="toasts"
            type="dark"
            heading="Notification"
            message="Autoclose 18s."
            .transition=${n}
            draggablepercentage="50"
            autoclose="18000"
            closebutton
          >
          </z-toast-notification>`}

      <z-toast-notification
        slot="toasts"
        type="dark"
        heading="Notification"
        message="Senza pulsante."
        .transition=${n}
        draggablepercentage="50"
        closebutton
      >
      </z-toast-notification>
      <z-toast-notification
        slot="toasts"
        type="dark"
        heading="Notification"
        message="Con pulsante"
        .transition=${n}
        draggablepercentage="50"
        closebutton
      >
        <z-button
          slot="button"
          size="small"
          >button</z-button
        >
      </z-toast-notification>
    </z-toast-notification-list>
  </div>`,d={title:`ZToastNotificationList`,component:`z-toast-notification-list`,argTypes:{position:{control:{type:`select`},options:Object.values(o)}},args:{newestontop:!0},render:e=>u(e)},f={args:{position:o.TOP_LEFT}},p={args:{position:o.TOP_LEFT},render:e=>u(e,s.SLIDE_IN_RIGHT)},m={args:{position:o.TOP_CENTRE}},h={args:{position:o.TOP_RIGHT}},g={args:{position:o.TOP_RIGHT},render:e=>u(e,s.SLIDE_IN_LEFT)},_={args:{position:o.BOTTOM_RIGHT},render:e=>u(e,s.SLIDE_IN_UP)},v={args:{position:o.BOTTOM_RIGHT},render:e=>u(e,s.SLIDE_IN_LEFT)},y={args:{position:o.BOTTOM_CENTRE},render:e=>u(e,s.SLIDE_IN_UP)},b={args:{position:o.BOTTOM_LEFT},render:e=>u(e,s.SLIDE_IN_UP)},x={args:{position:o.BOTTOM_LEFT},render:e=>u(e,s.SLIDE_IN_RIGHT)},S={args:{position:o.TOP_LEFT},render:t=>u(t,s.SLIDE_IN_DOWN,e`<span slot="message"
        >Autoclose 18s con
        <a
          href="#"
          class="z-link z-link-blue"
          >link</a
        ></span
      >`)};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_LEFT
  }
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_RIGHT)
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_CENTRE
  }
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_RIGHT
  }
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_LEFT)
} satisfies Story`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_LEFT)
} satisfies Story`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_CENTRE
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_RIGHT)
} satisfies Story`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_DOWN, html\`<span slot="message"
        >Autoclose 18s con
        <a
          href="#"
          class="z-link z-link-blue"
          >link</a
        ></span
      >\`)
} satisfies Story`,...S.parameters?.docs?.source}}};var C=[`TopLeftSlideInDown`,`TopLeftSlideInRight`,`TopCentre`,`TopRightSlideInDown`,`TopRightSlideInLeft`,`BottomRightSlideInUp`,`BottomRightSlideInLeft`,`BottomCentre`,`BottomCentreSlideInUp`,`BottomLeftSlideInRight`,`TopLeftWithSlottedMessage`];export{y as BottomCentre,b as BottomCentreSlideInUp,x as BottomLeftSlideInRight,v as BottomRightSlideInLeft,_ as BottomRightSlideInUp,m as TopCentre,f as TopLeftSlideInDown,p as TopLeftSlideInRight,S as TopLeftWithSlottedMessage,h as TopRightSlideInDown,g as TopRightSlideInLeft,C as __namedExportsOrder,d as default};