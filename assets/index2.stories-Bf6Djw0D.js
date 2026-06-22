import{n as e}from"./chunk-DnJy8xQt.js";import{X as t,Z as n,nt as r}from"./iframe-CJGav67o.js";import{B as i,J as a,P as o}from"./beans-NNuswqO1.js";import{n as s,o as c,t as l}from"./storybook-utils-X33q-Ruv.js";import{t as u}from"./internal-D8WYdOLq.js";var d=e((()=>{})),f,p,m,h,g,_,v,y,b,x,S;e((()=>{t(),u(),a(),c(),d(),f=e=>{let t=e.target.closest(`.popover-container`)?.querySelector(`z-popover`);t&&(t?.open?t.open=!1:t.open=!0)},p=e=>{if(e.draggable)return;let t=0,n=0,r=!1,i={x:0,y:0};e.style.position=`absolute`,e.draggable=!0,e.addEventListener(`mousedown`,a=>{a.preventDefault(),a.stopPropagation(),r=!0,t=e.offsetLeft-a.clientX,n=e.offsetTop-a.clientY,i={x:a.clientX,y:a.clientY}}),document.addEventListener(`mouseup`,t=>{t.preventDefault(),t.stopPropagation(),r=!1,!(i.x!==t.clientX||i.y!==t.clientY)&&setTimeout(()=>{f({...t,target:e})},0)}),document.addEventListener(`mousemove`,i=>{if(r){let r=e.parentElement,a=Math.max(Math.min(i.clientX+t,r.clientWidth-e.offsetWidth),0),o=Math.max(Math.min(i.clientY+n,r.clientHeight-e.offsetHeight),0);e.style.left=`${a}px`,e.style.top=`${o}px`}})},m={title:`ZPopover`,component:`z-popover`,argTypes:{position:{options:[null,...Object.values(o).filter(e=>e!==o.AUTO)],control:{type:`select`,labels:{null:`-`}}},"--z-popover-theme--surface":s(),"--z-popover-theme--text":s()},args:{position:null,"--z-popover-theme--surface":`var(--color-surface01)`,"--z-popover-theme--text":`var(--color-default-text)`,"--z-popover-padding":`0`},parameters:{docs:{story:{inline:!1,iframeHeight:500}},controls:{exclude:[`bind-to`]}}},h={args:{"--z-popover-padding":`var(--space-unit)`,"--z-popover-shadow-filter":`drop-shadow(0 1px 2px var(--shadow-color-base))`,center:!1,showArrow:!1,closable:!0},beforeEach:()=>{document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`#demo-trigger`);e&&p(e)})},render:e=>r(n,null,r(`div`,{class:`popover-container`},r(`z-popover`,{...e,style:l(e),bindTo:`#demo-trigger`},r(`div`,{class:`popover-content`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`)),r(`z-button`,{id:`demo-trigger`,icon:`plus-filled`})),r(`p`,{class:`heading-2`},`You can move the button to see the positioning adaptation while the popover is open.`))},g={args:{"--z-popover-theme--surface":`var(--color-surface01)`,"--z-popover-padding":`var(--space-unit)`,position:o.RIGHT_BOTTOM},render:e=>r(`div`,{class:`popover-container`},r(`z-popover`,{...e,style:l(e),bindTo:`#trigger`},r(`z-list`,null,r(`z-list-element`,{"divider-type":`element`},`Elemento 1`),r(`z-list-element`,{"divider-type":`element`},`Elemento 2`),r(`z-list-element`,null,`Elemento 3`))),r(`z-button`,{id:`trigger`,icon:`plus-filled`,onClick:f}))},_={args:{position:o.RIGHT,"--z-popover-padding":`var(--space-unit)`},render:e=>r(`div`,{class:`popover-container popover-container-tooltip`},r(`z-popover`,{...e,style:l(e),center:!0,showArrow:!0,bindTo:`#trigger`},r(`div`,{class:`popover-content`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`)),r(`z-button`,{id:`trigger`,icon:`plus-filled`,onClick:f}))},v={args:{position:o.TOP,"--z-popover-padding":`var(--space-unit)`},render:e=>r(`div`,{class:`popover-container popover-container-tooltip`},r(`div`,{class:`popover-internal-container`},r(`div`,{class:`popover-internal-container-2`},r(`z-popover`,{...e,style:l(e),center:!0,showArrow:!0,bindTo:`#trigger`},r(`div`,{class:`popover-content`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`)),r(`z-button`,{id:`trigger`,icon:`plus-filled`,onClick:f}))))},y=null,b=()=>{y&&(y.open=!0)},x={args:{position:o.TOP,"--z-popover-padding":`var(--space-unit)`},render:e=>r(`div`,{class:`popover-container`},r(`z-button`,{id:`offcanvas-trigger`,onClick:b},`open offcanvas`),r(`z-offcanvas`,{transitiondirection:i.UP,showBackdrop:!0,ref:e=>y=e},r(`div`,{slot:`canvasContent`},r(`z-popover`,{...e,style:l(e),"bind-to":`#popover-trigger`},r(`div`,{class:`popover-content`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`)),r(`z-button`,{id:`popover-trigger`,icon:`plus-filled`,onClick:f}))))},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "--z-popover-padding": "var(--space-unit)",
    "--z-popover-shadow-filter": "drop-shadow(0 1px 2px var(--shadow-color-base))",
    "center": false,
    "showArrow": false,
    "closable": true
  },
  beforeEach: () => {
    document.addEventListener("DOMContentLoaded", () => {
      const trigger = document.querySelector("#demo-trigger");
      if (trigger) {
        makeDraggable(trigger as HTMLElement);
      }
    });
  },
  render: args => <Fragment>
      <div class="popover-container">
        <z-popover {...args} style={extractCSSVars(args)} bindTo="#demo-trigger">
          <div class="popover-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
        </z-popover>
        <z-button id="demo-trigger" icon="plus-filled"></z-button>
      </div>
      <p class="heading-2">You can move the button to see the positioning adaptation while the popover is open.</p>
    </Fragment>
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "--z-popover-theme--surface": "var(--color-surface01)",
    "--z-popover-padding": "var(--space-unit)",
    "position": PopoverPosition.RIGHT_BOTTOM
  },
  render: args => <div class="popover-container">
      <z-popover {...args} style={extractCSSVars(args)} bindTo="#trigger">
        <z-list>
          <z-list-element divider-type="element">Elemento 1</z-list-element>
          <z-list-element divider-type="element">Elemento 2</z-list-element>
          <z-list-element>Elemento 3</z-list-element>
        </z-list>
      </z-popover>
      <z-button id="trigger" icon="plus-filled" onClick={openPopover}></z-button>
    </div>
} satisfies Story`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "position": PopoverPosition.RIGHT,
    "--z-popover-padding": "var(--space-unit)"
  },
  render: args => <div class="popover-container popover-container-tooltip">
      <z-popover {...args} style={extractCSSVars(args)} center={true} showArrow={true} bindTo="#trigger">
        <div class="popover-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </z-popover>
      <z-button id="trigger" icon="plus-filled" onClick={openPopover}></z-button>
    </div>
} satisfies Story`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "position": PopoverPosition.TOP,
    "--z-popover-padding": "var(--space-unit)"
  },
  render: args => <div class="popover-container popover-container-tooltip">
      <div class="popover-internal-container">
        <div class="popover-internal-container-2">
          <z-popover {...args} style={extractCSSVars(args)} center={true} showArrow={true} bindTo="#trigger">
            <div class="popover-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
          </z-popover>
          <z-button id="trigger" icon="plus-filled" onClick={openPopover}></z-button>
        </div>
      </div>
    </div>
} satisfies Story`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "position": PopoverPosition.TOP,
    "--z-popover-padding": "var(--space-unit)"
  },
  render: args => <div class="popover-container">
      <z-button id="offcanvas-trigger" onClick={openOffcanvas}>
        open offcanvas
      </z-button>
      <z-offcanvas transitiondirection={TransitionDirection.UP} showBackdrop ref={el => offcanvas = el}>
        <div slot="canvasContent">
          <z-popover {...args} style={extractCSSVars(args)} bind-to="#popover-trigger">
            <div class="popover-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
          </z-popover>
          <z-button id="popover-trigger" icon="plus-filled" onClick={openPopover}></z-button>
        </div>
      </z-offcanvas>
    </div>
} satisfies Story`,...x.parameters?.docs?.source}}},S=[`Demo`,`ContextualMenuLike`,`Tooltip`,`TooltipWithNestedContainer`,`PopoverInsideTransformedElement`]}))();export{g as ContextualMenuLike,h as Demo,x as PopoverInsideTransformedElement,_ as Tooltip,v as TooltipWithNestedContainer,S as __namedExportsOrder,m as default};