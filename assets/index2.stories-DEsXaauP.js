import{n as e}from"./chunk-DnJy8xQt.js";import{Q as t,X as n,nt as r,rt as i,tt as a}from"./iframe-DCi19jo_.js";import{I as o,L as s,R as c,p as l,q as u}from"./beans-G7NAvoly.js";import{N as d,Y as f}from"./index2-FE8JoBwn.js";var p,m,h=e((()=>{r(),d(),p=i(class extends t{constructor(e){super(),!1!==e&&this.__registerHost(),this.__attachShadow(),this.position=f.TOP_RIGHT,this.newestontop=!0,this.notificationArray=[]}watchPropNewestontop(e){this.hostElement.append(...this.notificationArray.reverse()),e?this.hostElement.shadowRoot.addEventListener(`slotchange`,this.slotChangeHandler):this.hostElement.shadowRoot.removeEventListener(`slotchange`,this.slotChangeHandler)}componentWillLoad(){this.newestontop&&this.handleNewestOnTop()}handleNewestOnTop(){this.notificationArray=Array.from(this.hostElement.children),this.hostElement.append(...this.notificationArray.reverse()),this.hostElement.shadowRoot.addEventListener(`slotchange`,this.slotChangeHandler.bind(this))}slotChangeHandler(){let e=Array.from(this.hostElement.children).filter((e=>!this.notificationArray.includes(e)));e&&e.forEach((e=>{this.notificationArray.push(e);let t=e;e.remove(),this.hostElement.prepend(t)}))}render(){return a(`slot`,{key:`0566f651d80145e7781e792714aab742850714f7`,name:`toasts`})}get hostElement(){return this}static get watchers(){return{newestontop:[{watchPropNewestontop:0}]}}static get style(){return`:host{position:fixed;z-index:10000;display:flex;flex-flow:column nowrap;margin-top:calc(var(--space-unit) * 2);margin-bottom:calc(var(--space-unit) * 2);font-family:var(--font-family-sans);font-weight:var(--font-rg)}::slotted(z-toast-notification){width:100vw}::slotted(:not(:last-child)){margin-bottom:calc(var(--space-unit) * 1)}:host([position="bottom-centre"]),:host([position="bottom-right"]),:host([position="bottom-left"]){bottom:0;align-items:flex-end;justify-content:flex-end}:host([position="top-left"]),:host([position="top-right"]),:host([position="top-centre"]){top:0;align-items:flex-start;justify-content:flex-start}@media only screen and (min-width: 768px){:host{margin:calc(var(--space-unit) * 3)}:host([position="top-centre"]){top:0;left:50%;align-items:center;justify-content:flex-start;transform:translateX(-50%)}:host([position="top-left"]){top:0;left:0;align-items:flex-start;justify-content:flex-start}:host([position="top-right"]){top:0;right:0;align-items:flex-end;justify-content:flex-start}:host([position="bottom-centre"]){bottom:0;left:50%;align-items:center;justify-content:flex-end;transform:translateX(-50%)}:host([position="bottom-right"]){right:0;bottom:0;align-items:flex-end;justify-content:flex-end}:host([position="bottom-left"]){bottom:0;left:0;align-items:flex-start;justify-content:flex-end}::slotted(z-toast-notification){width:50vw}}@media only screen and (min-width: 1366px){:host{margin:calc(var(--space-unit) * 4)}::slotted(z-toast-notification){width:33vw}}`}},[257,`z-toast-notification-list`,{position:[513],newestontop:[4]},void 0,{newestontop:[{watchPropNewestontop:0}]}]),m=p})),g=e((()=>{})),_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{n(),u(),h(),g(),_=(e,t=c.SLIDE_IN_DOWN,n)=>a(`div`,{class:`z-toast-notification-container`},a(`z-toast-notification-list`,{position:e.position,newestontop:e.newestontop},n?a(`z-toast-notification`,{slot:`toasts`,type:o.DARK,heading:`Notification`,transition:t,draggablepercentage:50,autoclose:18e3,closebutton:!0},n):a(`z-toast-notification`,{slot:`toasts`,type:o.DARK,heading:`Notification`,message:`Autoclose 18s.`,transition:t,draggablepercentage:50,autoclose:18e3,closebutton:!0}),a(`z-toast-notification`,{slot:`toasts`,type:o.DARK,heading:`Notification`,message:`Senza pulsante.`,transition:t,draggablepercentage:50,closebutton:!0}),a(`z-toast-notification`,{slot:`toasts`,type:o.DARK,heading:`Notification`,message:`Con pulsante`,transition:t,draggablepercentage:50,closebutton:!0},a(`z-button`,{slot:`button`,size:l.SMALL},`button`)))),v={title:`ZToastNotificationList`,component:m,argTypes:{position:{control:{type:`select`},options:Object.values(s)}},args:{newestontop:!0},render:e=>_(e)},y={args:{position:s.TOP_LEFT}},b={args:{position:s.TOP_LEFT},render:e=>_(e,c.SLIDE_IN_RIGHT)},x={args:{position:s.TOP_CENTRE}},S={args:{position:s.TOP_RIGHT}},C={args:{position:s.TOP_RIGHT},render:e=>_(e,c.SLIDE_IN_LEFT)},w={args:{position:s.BOTTOM_RIGHT},render:e=>_(e,c.SLIDE_IN_UP)},T={args:{position:s.BOTTOM_RIGHT},render:e=>_(e,c.SLIDE_IN_LEFT)},E={args:{position:s.BOTTOM_CENTRE},render:e=>_(e,c.SLIDE_IN_UP)},D={args:{position:s.BOTTOM_LEFT},render:e=>_(e,c.SLIDE_IN_UP)},O={args:{position:s.BOTTOM_LEFT},render:e=>_(e,c.SLIDE_IN_RIGHT)},k={args:{position:s.TOP_LEFT},render:e=>_(e,c.SLIDE_IN_DOWN,a(`span`,{slot:`message`},`Autoclose 18s con`,a(`a`,{href:`#`,class:`z-link z-link-blue`},`link`)))},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_LEFT
  }
} satisfies Story`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_RIGHT)
} satisfies Story`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_CENTRE
  }
} satisfies Story`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_RIGHT
  }
} satisfies Story`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_LEFT)
} satisfies Story`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_LEFT)
} satisfies Story`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_CENTRE
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_RIGHT)
} satisfies Story`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_DOWN, <span slot="message">
        Autoclose 18s con
        <a href="#" class="z-link z-link-blue">
          link
        </a>
      </span>)
} satisfies Story`,...k.parameters?.docs?.source}}},A=[`TopLeftSlideInDown`,`TopLeftSlideInRight`,`TopCentre`,`TopRightSlideInDown`,`TopRightSlideInLeft`,`BottomRightSlideInUp`,`BottomRightSlideInLeft`,`BottomCentre`,`BottomCentreSlideInUp`,`BottomLeftSlideInRight`,`TopLeftWithSlottedMessage`]}))();export{E as BottomCentre,D as BottomCentreSlideInUp,O as BottomLeftSlideInRight,T as BottomRightSlideInLeft,w as BottomRightSlideInUp,x as TopCentre,y as TopLeftSlideInDown,b as TopLeftSlideInRight,k as TopLeftWithSlottedMessage,S as TopRightSlideInDown,C as TopRightSlideInLeft,A as __namedExportsOrder,v as default};