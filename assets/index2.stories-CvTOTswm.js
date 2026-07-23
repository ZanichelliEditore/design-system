import{n as e}from"./chunk-DnJy8xQt.js";import{$ as t,Z as n,at as r,it as i,rt as a}from"./iframe-DO3DjYxW.js";import{F as o,I as s,K as c,L as l,f as u}from"./beans-zckFsBZy.js";import{A as d,q as f}from"./index2-BFW8y5_u.js";var p,m,h,g=e((()=>{i(),d(),p=()=>`:host{position:fixed;z-index:10000;display:flex;flex-flow:column nowrap;margin-top:calc(var(--space-unit) * 2);margin-bottom:calc(var(--space-unit) * 2);font-family:var(--font-family-sans);font-weight:var(--font-rg)}::slotted(z-toast-notification){width:100vw}::slotted(:not(:last-child)){margin-bottom:calc(var(--space-unit) * 1)}:host([position="bottom-centre"]),:host([position="bottom-right"]),:host([position="bottom-left"]){bottom:0;align-items:flex-end;justify-content:flex-end}:host([position="top-left"]),:host([position="top-right"]),:host([position="top-centre"]){top:0;align-items:flex-start;justify-content:flex-start}@media only screen and (min-width: 768px){:host{margin:calc(var(--space-unit) * 3)}:host([position="top-centre"]){top:0;left:50%;align-items:center;justify-content:flex-start;transform:translateX(-50%)}:host([position="top-left"]){top:0;left:0;align-items:flex-start;justify-content:flex-start}:host([position="top-right"]){top:0;right:0;align-items:flex-end;justify-content:flex-start}:host([position="bottom-centre"]){bottom:0;left:50%;align-items:center;justify-content:flex-end;transform:translateX(-50%)}:host([position="bottom-right"]){right:0;bottom:0;align-items:flex-end;justify-content:flex-end}:host([position="bottom-left"]){bottom:0;left:0;align-items:flex-start;justify-content:flex-end}::slotted(z-toast-notification){width:50vw}}@media only screen and (min-width: 1366px){:host{margin:calc(var(--space-unit) * 4)}::slotted(z-toast-notification){width:33vw}}`,m=r(class extends t{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.position=f.TOP_RIGHT,this.newestontop=!0,this.notificationArray=[]}watchPropNewestontop(e){this.hostElement.append(...this.notificationArray.reverse()),e?this.hostElement.shadowRoot.addEventListener(`slotchange`,this.slotChangeHandler):this.hostElement.shadowRoot.removeEventListener(`slotchange`,this.slotChangeHandler)}componentWillLoad(){this.newestontop&&this.handleNewestOnTop()}handleNewestOnTop(){this.notificationArray=Array.from(this.hostElement.children),this.hostElement.append(...this.notificationArray.reverse()),this.hostElement.shadowRoot.addEventListener(`slotchange`,this.slotChangeHandler.bind(this))}slotChangeHandler(){let e=Array.from(this.hostElement.children).filter((e=>!this.notificationArray.includes(e)));e&&e.forEach((e=>{this.notificationArray.push(e);let t=e;e.remove(),this.hostElement.prepend(t)}))}render(){return a(`slot`,{key:`1b22ad1308d152ae0a89b6e0d711765fc400458b`,name:`toasts`})}get hostElement(){return this}static get watchers(){return{newestontop:[{watchPropNewestontop:0}]}}static get style(){return p()}},[257,`z-toast-notification-list`,{position:[513],newestontop:[4]},void 0,{newestontop:[{watchPropNewestontop:0}]}]),h=m})),_=e((()=>{})),v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{n(),c(),g(),_(),v=(e,t=l.SLIDE_IN_DOWN,n)=>a(`div`,{class:`z-toast-notification-container`},a(`z-toast-notification-list`,{position:e.position,newestontop:e.newestontop},n?a(`z-toast-notification`,{slot:`toasts`,type:o.DARK,heading:`Notification`,transition:t,draggablepercentage:50,autoclose:18e3,closebutton:!0},n):a(`z-toast-notification`,{slot:`toasts`,type:o.DARK,heading:`Notification`,message:`Autoclose 18s.`,transition:t,draggablepercentage:50,autoclose:18e3,closebutton:!0}),a(`z-toast-notification`,{slot:`toasts`,type:o.DARK,heading:`Notification`,message:`Senza pulsante.`,transition:t,draggablepercentage:50,closebutton:!0}),a(`z-toast-notification`,{slot:`toasts`,type:o.DARK,heading:`Notification`,message:`Con pulsante`,transition:t,draggablepercentage:50,closebutton:!0},a(`z-button`,{slot:`button`,size:u.SMALL},`button`)))),y={title:`ZToastNotificationList`,component:h,argTypes:{position:{control:{type:`select`},options:Object.values(s)}},args:{newestontop:!0},render:e=>v(e)},b={args:{position:s.TOP_LEFT}},x={args:{position:s.TOP_LEFT},render:e=>v(e,l.SLIDE_IN_RIGHT)},S={args:{position:s.TOP_CENTRE}},C={args:{position:s.TOP_RIGHT}},w={args:{position:s.TOP_RIGHT},render:e=>v(e,l.SLIDE_IN_LEFT)},T={args:{position:s.BOTTOM_RIGHT},render:e=>v(e,l.SLIDE_IN_UP)},E={args:{position:s.BOTTOM_RIGHT},render:e=>v(e,l.SLIDE_IN_LEFT)},D={args:{position:s.BOTTOM_CENTRE},render:e=>v(e,l.SLIDE_IN_UP)},O={args:{position:s.BOTTOM_LEFT},render:e=>v(e,l.SLIDE_IN_UP)},k={args:{position:s.BOTTOM_LEFT},render:e=>v(e,l.SLIDE_IN_RIGHT)},A={args:{position:s.TOP_LEFT},render:e=>v(e,l.SLIDE_IN_DOWN,a(`span`,{slot:`message`},`Autoclose 18s con`,a(`a`,{href:`#`,class:`z-link z-link-blue`},`link`)))},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_LEFT
  }
} satisfies Story`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_RIGHT)
} satisfies Story`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_CENTRE
  }
} satisfies Story`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_RIGHT
  }
} satisfies Story`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_LEFT)
} satisfies Story`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_LEFT)
} satisfies Story`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_CENTRE
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_RIGHT)
} satisfies Story`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_DOWN, <span slot="message">
        Autoclose 18s con
        <a href="#" class="z-link z-link-blue">
          link
        </a>
      </span>)
} satisfies Story`,...A.parameters?.docs?.source}}},j=[`TopLeftSlideInDown`,`TopLeftSlideInRight`,`TopCentre`,`TopRightSlideInDown`,`TopRightSlideInLeft`,`BottomRightSlideInUp`,`BottomRightSlideInLeft`,`BottomCentre`,`BottomCentreSlideInUp`,`BottomLeftSlideInRight`,`TopLeftWithSlottedMessage`]}))();export{D as BottomCentre,O as BottomCentreSlideInUp,k as BottomLeftSlideInRight,E as BottomRightSlideInLeft,T as BottomRightSlideInUp,S as TopCentre,b as TopLeftSlideInDown,x as TopLeftSlideInRight,A as TopLeftWithSlottedMessage,C as TopRightSlideInDown,w as TopRightSlideInLeft,j as __namedExportsOrder,y as default};