import{x as u}from"./lit-element-DGXdXVoE.js";import{Q as o,k as s}from"./index-BBy8evlc.js";import"./index-C9lRnTUH.js";import"./index-DTpSj2cQ.js";import{s as Y,g as I}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as tt,H as ot,h as et}from"./index-BZ0rSFNp.js";import"./index-DSmxu1eR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFu-skq.js";const st=':host{position:fixed;z-index:10000;display:flex;flex-flow:column nowrap;margin-top:calc(var(--space-unit) * 2);margin-bottom:calc(var(--space-unit) * 2);font-family:var(--font-family-sans);font-weight:var(--font-rg)}::slotted(z-toast-notification){width:100vw}::slotted(:not(:last-child)){margin-bottom:calc(var(--space-unit) * 1)}:host([position="bottom-centre"]),:host([position="bottom-right"]),:host([position="bottom-left"]){bottom:0;align-items:flex-end;justify-content:flex-end}:host([position="top-left"]),:host([position="top-right"]),:host([position="top-centre"]){top:0;align-items:flex-start;justify-content:flex-start}@media only screen and (min-width: 768px){:host{margin:calc(var(--space-unit) * 3)}:host([position="top-centre"]){top:0;left:50%;align-items:center;justify-content:flex-start;transform:translateX(-50%)}:host([position="top-left"]){top:0;left:0;align-items:flex-start;justify-content:flex-start}:host([position="top-right"]){top:0;right:0;align-items:flex-end;justify-content:flex-start}:host([position="bottom-centre"]){bottom:0;left:50%;align-items:center;justify-content:flex-end;transform:translateX(-50%)}:host([position="bottom-right"]){right:0;bottom:0;align-items:flex-end;justify-content:flex-end}:host([position="bottom-left"]){bottom:0;left:0;align-items:flex-start;justify-content:flex-end}::slotted(z-toast-notification){width:50vw}}@media only screen and (min-width: 1366px){:host{margin:calc(var(--space-unit) * 4)}::slotted(z-toast-notification){width:33vw}}',it=class extends ot{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.position=o.TOP_RIGHT,this.newestontop=!0}watchPropNewestontop(t){this.hostElement.append(...this.notificationArray.reverse()),t?this.hostElement.shadowRoot.addEventListener("slotchange",this.slotChangeHandler):this.hostElement.shadowRoot.removeEventListener("slotchange",this.slotChangeHandler)}componentWillLoad(){this.newestontop&&this.handleNewestOnTop()}handleNewestOnTop(){this.notificationArray=Array.from(this.hostElement.children),this.hostElement.append(...this.notificationArray.reverse()),this.hostElement.shadowRoot.addEventListener("slotchange",this.slotChangeHandler.bind(this))}slotChangeHandler(){const t=Array.from(this.hostElement.children).filter(e=>!this.notificationArray.includes(e));t&&t.forEach(e=>{this.notificationArray.push(e);const n=e;e.remove(),this.hostElement.prepend(n)})}render(){return et("slot",{key:"8e04135da1e048829f7276db7992506cee784dd4",name:"toasts"})}get hostElement(){return this}static get watchers(){return{newestontop:["watchPropNewestontop"]}}static get style(){return st}};tt(it,[1,"z-toast-notification-list",{position:[520],newestontop:[4]},void 0,{newestontop:["watchPropNewestontop"]}]);const _={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZToastNotificationList",tagName:"z-toast-notification-list",customElement:!0,members:[{kind:"field",name:"position",type:"any",description:"Set the position of toast notification list - top-left, top-centre, top-right, bottom-left, bottom-centre, bottom-right",default:"ToastNotificationPosition.TOP_RIGHT"},{kind:"field",name:"newestontop",type:"boolean",description:"Set the entry position of new notification in the list",default:"true"}],events:[]}],exports:[{kind:"js",name:"ZToastNotificationList",declaration:{name:"ZToastNotificationList",module:"src/components/z-toast-notification-list/index.tsx"}},{kind:"custom-element-definition",name:"z-toast-notification-list",declaration:{name:"ZToastNotificationList",module:"src/components/z-toast-notification-list/index.tsx"}}]}]};Y({...I()||{},..._,modules:[...(I()||{}).modules||[],..._.modules]});const i=(t,e=s.SLIDE_IN_DOWN,n)=>u`<div class="z-toast-notification-container">
    <z-toast-notification-list
      position="${t.position}"
      newestontop="${t.newestontop}"
    >
      ${n?u`<z-toast-notification
            slot="toasts"
            type="dark"
            heading="Notification"
            .transition=${e}
            draggablepercentage="50"
            autoclose="18000"
            closebutton
          >
            ${n}
          </z-toast-notification>`:u`<z-toast-notification
            slot="toasts"
            type="dark"
            heading="Notification"
            message="Autoclose 18s."
            .transition=${e}
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
  </div>`,Tt={title:"ZToastNotificationList",component:"z-toast-notification-list",argTypes:{position:{control:{type:"select"},options:Object.values(o)}},args:{newestontop:!0},render:t=>i(t)},a={args:{position:o.TOP_LEFT}},r={args:{position:o.TOP_LEFT},render:t=>i(t,s.SLIDE_IN_RIGHT)},c={args:{position:o.TOP_CENTRE}},p={args:{position:o.TOP_RIGHT}},l={args:{position:o.TOP_RIGHT},render:t=>i(t,s.SLIDE_IN_LEFT)},m={args:{position:o.BOTTOM_RIGHT},render:t=>i(t,s.SLIDE_IN_UP)},d={args:{position:o.BOTTOM_RIGHT},render:t=>i(t,s.SLIDE_IN_LEFT)},f={args:{position:o.BOTTOM_CENTRE},render:t=>i(t,s.SLIDE_IN_UP)},g={args:{position:o.BOTTOM_LEFT},render:t=>i(t,s.SLIDE_IN_UP)},T={args:{position:o.BOTTOM_LEFT},render:t=>i(t,s.SLIDE_IN_RIGHT)},h={args:{position:o.TOP_LEFT},render:t=>i(t,s.SLIDE_IN_DOWN,u`<span slot="message"
        >Autoclose 18s con
        <a
          href="#"
          class="z-link z-link-blue"
          >link</a
        ></span
      >`)};var N,S,E;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_LEFT
  }
} satisfies Story`,...(E=(S=a.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var L,y,O;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_RIGHT)
} satisfies Story`,...(O=(y=r.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var w,P,b;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_CENTRE
  }
} satisfies Story`,...(b=(P=c.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var R,x,z;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_RIGHT
  }
} satisfies Story`,...(z=(x=p.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var D,v,B;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.TOP_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_LEFT)
} satisfies Story`,...(B=(v=l.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var H,C,k;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,...(k=(C=m.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var F,G,M;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_RIGHT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_LEFT)
} satisfies Story`,...(M=(G=d.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var j,A,U;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_CENTRE
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,...(U=(A=f.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var $,W,Z;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_UP)
} satisfies Story`,...(Z=(W=g.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var X,Q,V;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    position: ToastNotificationPosition.BOTTOM_LEFT
  },
  render: args => template(args, ToastNotificationTransition.SLIDE_IN_RIGHT)
} satisfies Story`,...(V=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var q,J,K;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ht=["TopLeftSlideInDown","TopLeftSlideInRight","TopCentre","TopRightSlideInDown","TopRightSlideInLeft","BottomRightSlideInUp","BottomRightSlideInLeft","BottomCentre","BottomCentreSlideInUp","BottomLeftSlideInRight","TopLeftWithSlottedMessage"];export{f as BottomCentre,g as BottomCentreSlideInUp,T as BottomLeftSlideInRight,d as BottomRightSlideInLeft,m as BottomRightSlideInUp,c as TopCentre,a as TopLeftSlideInDown,r as TopLeftSlideInRight,h as TopLeftWithSlottedMessage,p as TopRightSlideInDown,l as TopRightSlideInLeft,ht as __namedExportsOrder,Tt as default};
