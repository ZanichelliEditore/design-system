import{x as Q}from"./lit-element-DGXdXVoE.js";import{Q as o,k as s}from"./index-BBy8evlc.js";import"./index-C9lRnTUH.js";import"./index-DFGVvGsv.js";import{s as V,g as T}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as q,H as J,h as K}from"./index-BZ0rSFNp.js";import"./index-DSmxu1eR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFu-skq.js";const Y=':host{position:fixed;z-index:10000;display:flex;flex-flow:column nowrap;margin-top:calc(var(--space-unit) * 2);margin-bottom:calc(var(--space-unit) * 2);font-family:var(--font-family-sans);font-weight:var(--font-rg)}::slotted(z-toast-notification){width:100vw}::slotted(:not(:last-child)){margin-bottom:calc(var(--space-unit) * 1)}:host([position="bottom-centre"]),:host([position="bottom-right"]),:host([position="bottom-left"]){bottom:0;align-items:flex-end;justify-content:flex-end}:host([position="top-left"]),:host([position="top-right"]),:host([position="top-centre"]){top:0;align-items:flex-start;justify-content:flex-start}@media only screen and (min-width: 768px){:host{margin:calc(var(--space-unit) * 3)}:host([position="top-centre"]){top:0;left:50%;align-items:center;justify-content:flex-start;transform:translateX(-50%)}:host([position="top-left"]){top:0;left:0;align-items:flex-start;justify-content:flex-start}:host([position="top-right"]){top:0;right:0;align-items:flex-end;justify-content:flex-start}:host([position="bottom-centre"]){bottom:0;left:50%;align-items:center;justify-content:flex-end;transform:translateX(-50%)}:host([position="bottom-right"]){right:0;bottom:0;align-items:flex-end;justify-content:flex-end}:host([position="bottom-left"]){bottom:0;left:0;align-items:flex-start;justify-content:flex-end}::slotted(z-toast-notification){width:50vw}}@media only screen and (min-width: 1366px){:host{margin:calc(var(--space-unit) * 4)}::slotted(z-toast-notification){width:33vw}}',tt=class extends J{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.position=o.TOP_RIGHT,this.newestontop=!0}watchPropNewestontop(t){this.hostElement.append(...this.notificationArray.reverse()),t?this.hostElement.shadowRoot.addEventListener("slotchange",this.slotChangeHandler):this.hostElement.shadowRoot.removeEventListener("slotchange",this.slotChangeHandler)}componentWillLoad(){this.newestontop&&this.handleNewestOnTop()}handleNewestOnTop(){this.notificationArray=Array.from(this.hostElement.children),this.hostElement.append(...this.notificationArray.reverse()),this.hostElement.shadowRoot.addEventListener("slotchange",this.slotChangeHandler.bind(this))}slotChangeHandler(){const t=Array.from(this.hostElement.children).filter(e=>!this.notificationArray.includes(e));t&&t.forEach(e=>{this.notificationArray.push(e);const X=e;e.remove(),this.hostElement.prepend(X)})}render(){return K("slot",{key:"4b5bffda977c50156e8328fcd7e6160b501dcf66",name:"toasts"})}get hostElement(){return this}static get watchers(){return{newestontop:["watchPropNewestontop"]}}static get style(){return Y}};q(tt,[1,"z-toast-notification-list",{position:[520],newestontop:[4]},void 0,{newestontop:["watchPropNewestontop"]}]);const h={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZToastNotificationList",tagName:"z-toast-notification-list",customElement:!0,members:[{kind:"field",name:"position",type:"any",description:"Set the position of toast notification list - top-left, top-centre, top-right, bottom-left, bottom-centre, bottom-right",default:"ToastNotificationPosition.TOP_RIGHT"},{kind:"field",name:"newestontop",type:"boolean",description:"Set the entry position of new notification in the list",default:"true"}],events:[]}],exports:[{kind:"js",name:"ZToastNotificationList",declaration:{name:"ZToastNotificationList",module:"src/components/z-toast-notification-list/index.tsx"}},{kind:"custom-element-definition",name:"z-toast-notification-list",declaration:{name:"ZToastNotificationList",module:"src/components/z-toast-notification-list/index.tsx"}}]}]};V({...T()||{},...h,modules:[...(T()||{}).modules||[],...h.modules]});const i=(t,e=s.SLIDE_IN_DOWN)=>Q`<div class="z-toast-notification-container">
    <z-toast-notification-list
      position="${t.position}"
      newestontop="${t.newestontop}"
    >
      <z-toast-notification
        slot="toasts"
        type="dark"
        heading="Notification"
        message="Autoclose 18s."
        .transition=${e}
        draggablepercentage="50"
        autoclose="18000"
        closebutton
      >
      </z-toast-notification>
      <z-toast-notification
        slot="toasts"
        type="dark"
        heading="Notification"
        message="Senza pulsante."
        .transition=${e}
        draggablepercentage="50"
        closebutton
      >
      </z-toast-notification>
      <z-toast-notification
        slot="toasts"
        type="dark"
        heading="Notification"
        message="Con pulsante"
        .transition=${e}
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
  </div>`,mt={title:"ZToastNotificationList",component:"z-toast-notification-list",argTypes:{position:{control:{type:"select"},options:Object.values(o)}},args:{newestontop:!0},render:t=>i(t)},n={args:{position:o.TOP_LEFT}},a={args:{position:o.TOP_LEFT},render:t=>i(t,s.SLIDE_IN_RIGHT)},r={args:{position:o.TOP_CENTRE}},c={args:{position:o.TOP_RIGHT}},p={args:{position:o.TOP_RIGHT},render:t=>i(t,s.SLIDE_IN_LEFT)},l={args:{position:o.BOTTOM_RIGHT},render:t=>i(t,s.SLIDE_IN_UP)},m={args:{position:o.BOTTOM_RIGHT},render:t=>i(t,s.SLIDE_IN_LEFT)},d={args:{position:o.BOTTOM_CENTRE},render:t=>i(t,s.SLIDE_IN_UP)},f={args:{position:o.BOTTOM_LEFT},render:t=>i(t,s.SLIDE_IN_UP)},g={args:{position:o.BOTTOM_LEFT},render:t=>i(t,s.SLIDE_IN_RIGHT)};var u,I,_;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_LEFT
  }
} satisfies Story`,...(_=(I=n.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var S,E,N;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_RIGHT)
} satisfies Story`,...(N=(E=a.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var L,y,w;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_CENTRE
  }
} satisfies Story`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var O,P,R;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_RIGHT
  }
} satisfies Story`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var b,x,v;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_LEFT)
} satisfies Story`,...(v=(x=p.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var z,B,D;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,...(D=(B=l.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var H,C,G;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_LEFT)
} satisfies Story`,...(G=(C=m.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var M,F,j;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_CENTRE
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,...(j=(F=d.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var k,U,A;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,...(A=(U=f.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var Z,$,W;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_RIGHT)
} satisfies Story`,...(W=($=g.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};const dt=["TopLeftSlideInDown","TopLeftSlideInRight","TopCentre","TopRightSlideInDown","TopRightSlideInLeft","BottomRightSlideInUp","BottomRightSlideInLeft","BottomCentre","BottomCentreSlideInUp","BottomLeftSlideInRight"];export{d as BottomCentre,f as BottomCentreSlideInUp,g as BottomLeftSlideInRight,m as BottomRightSlideInLeft,l as BottomRightSlideInUp,r as TopCentre,n as TopLeftSlideInDown,a as TopLeftSlideInRight,c as TopRightSlideInDown,p as TopRightSlideInLeft,dt as __namedExportsOrder,mt as default};
