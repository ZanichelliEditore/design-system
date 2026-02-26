import{x as i}from"./lit-element-DGXdXVoE.js";import{o as p}from"./style-map-DWZVjDvr.js";import{P as n}from"./index-BBy8evlc.js";import{g}from"./storybook-utils-DX4XXC0w.js";import"./index-Dl8ZI2Jk.js";import"./index-Bq5XZh4f.js";import"./index-BmQSwon9.js";import"./index-B2FCpeaq.js";import"./index-Cq1ipkkm.js";import"./directive-CF8sV3Lr.js";import"./index-KOgRmbf5.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";import"./index-CMdrQeyy.js";import"./utils-CkA37blO.js";import"./breakpoints-p3CVLX0Q.js";var z=Object.freeze,A=Object.defineProperty,H=(e,o)=>z(A(e,"raw",{value:z(e.slice())})),f;const q=e=>{var r;const o=(r=e.target.closest(".popover-container"))==null?void 0:r.querySelector("z-popover");o&&(o!=null&&o.open?o.open=!1:o.open=!0)},Y=e=>{if(e.draggable)return;let o=0,r=0,v=!1,m={x:0,y:0};e.style.position="absolute",e.draggable=!0,e.addEventListener("mousedown",t=>{t.preventDefault(),t.stopPropagation(),v=!0,o=e.offsetLeft-t.clientX,r=e.offsetTop-t.clientY,m={x:t.clientX,y:t.clientY}}),document.addEventListener("mouseup",t=>{t.preventDefault(),t.stopPropagation(),v=!1,!(m.x!==t.clientX||m.y!==t.clientY)&&setTimeout(()=>{q({...t,target:e})},0)}),document.addEventListener("mousemove",t=>{if(v){const u=e.parentElement,_=Math.max(Math.min(t.clientX+o,u.clientWidth-e.offsetWidth),0),D=Math.max(Math.min(t.clientY+r,u.clientHeight-e.offsetHeight),0);e.style.left=`${_}px`,e.style.top=`${D}px`}})},ne={title:"ZPopover",component:"z-popover",argTypes:{position:{options:[null,...Object.values(n).filter(e=>e!==n.AUTO)],control:{type:"select",labels:{null:"-"}}},"--z-popover-theme--surface":g(),"--z-popover-theme--text":g()},args:{position:null,"--z-popover-theme--surface":"var(--color-surface01)","--z-popover-theme--text":"var(--color-default-text)","--z-popover-padding":"0"},parameters:{onTriggerClick:q,docs:{story:{inline:!1,iframeHeight:500}}}},a={args:{"--z-popover-padding":"var(--space-unit)","--z-popover-shadow-filter":"drop-shadow(0 1px 2px var(--shadow-color-base))",center:!1,showArrow:!1,closable:!0},render:e=>(document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#demo-trigger");o&&Y(o)}),i`
      <div class="popover-container">
        <z-popover
          style=${p({"--z-popover-theme--surface":e["--z-popover-theme--surface"],"--z-popover-theme--text":e["--z-popover-theme--text"],"--z-popover-padding":e["--z-popover-padding"]})}
          .position=${e.position}
          .center=${e.center}
          .showArrow=${e.showArrow}
          bind-to="#demo-trigger"
        >
          <div class="popover-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
        </z-popover>
        <z-button
          id="demo-trigger"
          icon="plus-filled"
        ></z-button>
      </div>
      <p class="heading-2">You can move the button to see the positioning adaptation while the popover is open.</p>
    `)},s={args:{"--z-popover-theme--surface":"var(--color-surface01)","--z-popover-padding":"var(--space-unit)",position:n.RIGHT_BOTTOM},render:(e,{parameters:o})=>i`
    <div class="popover-container">
      <z-popover
        style=${p({"--z-popover-theme--surface":e["--z-popover-theme--surface"],"--z-popover-theme--text":e["--z-popover-theme--text"],"--z-popover-padding":e["--z-popover-padding"]})}
        .position=${e.position}
        bind-to="#trigger"
      >
        <z-list>
          <z-list-element divider-type="element">Elemento 1</z-list-element>
          <z-list-element divider-type="element">Elemento 2</z-list-element>
          <z-list-element>Elemento 3</z-list-element>
        </z-list>
      </z-popover>
      <z-button
        id="trigger"
        icon="plus-filled"
        .onclick=${o.onTriggerClick}
      ></z-button>
    </div>
  `},d={args:{position:n.RIGHT,"--z-popover-padding":"var(--space-unit)"},render:(e,{parameters:o})=>i` <div class="popover-container popover-container-tooltip">
      <z-popover
        style=${p({"--z-popover-theme--surface":e["--z-popover-theme--surface"],"--z-popover-theme--text":e["--z-popover-theme--text"],"--z-popover-padding":e["--z-popover-padding"]})}
        .position=${e.position}
        center="true"
        show-arrow="true"
        bind-to="#trigger"
      >
        <div class="popover-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </z-popover>
      <z-button
        id="trigger"
        icon="plus-filled"
        .onclick=${o.onTriggerClick}
      ></z-button>
    </div>`},c={args:{position:n.TOP,"--z-popover-padding":"var(--space-unit)"},render:(e,{parameters:o})=>i` <div class="popover-container popover-container-tooltip">
      <div class="popover-internal-container">
        <div class="popover-internal-container-2">
          <z-popover
            style=${p({"--z-popover-theme--surface":e["--z-popover-theme--surface"],"--z-popover-theme--text":e["--z-popover-theme--text"],"--z-popover-padding":e["--z-popover-padding"]})}
            .position=${e.position}
            center="true"
            show-arrow="true"
            bind-to="#trigger"
          >
            <div class="popover-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
          </z-popover>
          <z-button
            id="trigger"
            icon="plus-filled"
            .onclick=${o.onTriggerClick}
          ></z-button>
        </div>
      </div>
    </div>`},l={args:{position:n.TOP,"--z-popover-padding":"var(--space-unit)"},render:(e,{parameters:o})=>i(f||(f=H([`<div class="popover-container">
      <script>
        document.addEventListener("DOMContentLoaded", () => {
          const offcanvasTrigger = document.querySelector("#offcanvas-trigger");
          if (offcanvasTrigger) {
            offcanvasTrigger.addEventListener("click", () => {
              const offcanvas = document.querySelector(".popover-container z-offcanvas");
              if (offcanvas) {
                offcanvas.open = true;
              }
            });
          }
        });
      <\/script>
      <z-button id="offcanvas-trigger">open offcanvas</z-button>
      <z-offcanvas
        transitiondirection="up"
        show-backdrop
      >
        <div slot="canvasContent">
          <z-popover
            style=`,`
            .position=`,`
            bind-to="#popover-trigger"
          >
            <div class="popover-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
          </z-popover>
          <z-button
            id="popover-trigger"
            icon="plus-filled"
            .onclick=`,`
          ></z-button>
        </div>
      </z-offcanvas>
    </div>`])),p({"--z-popover-theme--surface":e["--z-popover-theme--surface"],"--z-popover-theme--text":e["--z-popover-theme--text"],"--z-popover-padding":e["--z-popover-padding"]}),e.position,o.onTriggerClick)};var h,b,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    "--z-popover-padding": "var(--space-unit)",
    "--z-popover-shadow-filter": "drop-shadow(0 1px 2px var(--shadow-color-base))",
    "center": false,
    "showArrow": false,
    "closable": true
  },
  render: args => {
    document.addEventListener("DOMContentLoaded", () => {
      const trigger = document.querySelector("#demo-trigger");
      if (trigger) {
        makeDraggable(trigger as HTMLElement);
      }
    });
    return html\`
      <div class="popover-container">
        <z-popover
          style=\${styleMap({
      "--z-popover-theme--surface": args["--z-popover-theme--surface"],
      "--z-popover-theme--text": args["--z-popover-theme--text"],
      "--z-popover-padding": args["--z-popover-padding"]
    })}
          .position=\${args.position}
          .center=\${args.center}
          .showArrow=\${args.showArrow}
          bind-to="#demo-trigger"
        >
          <div class="popover-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
        </z-popover>
        <z-button
          id="demo-trigger"
          icon="plus-filled"
        ></z-button>
      </div>
      <p class="heading-2">You can move the button to see the positioning adaptation while the popover is open.</p>
    \`;
  }
} satisfies Story`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,T,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    "--z-popover-theme--surface": "var(--color-surface01)",
    "--z-popover-padding": "var(--space-unit)",
    "position": PopoverPosition.RIGHT_BOTTOM
  },
  render: (args, {
    parameters
  }) => html\`
    <div class="popover-container">
      <z-popover
        style=\${styleMap({
    "--z-popover-theme--surface": args["--z-popover-theme--surface"],
    "--z-popover-theme--text": args["--z-popover-theme--text"],
    "--z-popover-padding": args["--z-popover-padding"]
  })}
        .position=\${args.position}
        bind-to="#trigger"
      >
        <z-list>
          <z-list-element divider-type="element">Elemento 1</z-list-element>
          <z-list-element divider-type="element">Elemento 2</z-list-element>
          <z-list-element>Elemento 3</z-list-element>
        </z-list>
      </z-popover>
      <z-button
        id="trigger"
        icon="plus-filled"
        .onclick=\${parameters.onTriggerClick}
      ></z-button>
    </div>
  \`
} satisfies Story`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var $,k,S;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    "position": PopoverPosition.RIGHT,
    "--z-popover-padding": "var(--space-unit)"
  },
  render: (args, {
    parameters
  }) => html\` <div class="popover-container popover-container-tooltip">
      <z-popover
        style=\${styleMap({
    "--z-popover-theme--surface": args["--z-popover-theme--surface"],
    "--z-popover-theme--text": args["--z-popover-theme--text"],
    "--z-popover-padding": args["--z-popover-padding"]
  })}
        .position=\${args.position}
        center="true"
        show-arrow="true"
        bind-to="#trigger"
      >
        <div class="popover-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </z-popover>
      <z-button
        id="trigger"
        icon="plus-filled"
        .onclick=\${parameters.onTriggerClick}
      ></z-button>
    </div>\`
} satisfies Story`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var L,P,C;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    "position": PopoverPosition.TOP,
    "--z-popover-padding": "var(--space-unit)"
  },
  render: (args, {
    parameters
  }) => html\` <div class="popover-container popover-container-tooltip">
      <div class="popover-internal-container">
        <div class="popover-internal-container-2">
          <z-popover
            style=\${styleMap({
    "--z-popover-theme--surface": args["--z-popover-theme--surface"],
    "--z-popover-theme--text": args["--z-popover-theme--text"],
    "--z-popover-padding": args["--z-popover-padding"]
  })}
            .position=\${args.position}
            center="true"
            show-arrow="true"
            bind-to="#trigger"
          >
            <div class="popover-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
          </z-popover>
          <z-button
            id="trigger"
            icon="plus-filled"
            .onclick=\${parameters.onTriggerClick}
          ></z-button>
        </div>
      </div>
    </div>\`
} satisfies Story`,...(C=(P=c.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var E,M,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    "position": PopoverPosition.TOP,
    "--z-popover-padding": "var(--space-unit)"
  },
  render: (args, {
    parameters
  }) => html\`<div class="popover-container">
      <script>
        document.addEventListener("DOMContentLoaded", () => {
          const offcanvasTrigger = document.querySelector("#offcanvas-trigger");
          if (offcanvasTrigger) {
            offcanvasTrigger.addEventListener("click", () => {
              const offcanvas = document.querySelector(".popover-container z-offcanvas");
              if (offcanvas) {
                offcanvas.open = true;
              }
            });
          }
        });
      <\/script>
      <z-button id="offcanvas-trigger">open offcanvas</z-button>
      <z-offcanvas
        transitiondirection="up"
        show-backdrop
      >
        <div slot="canvasContent">
          <z-popover
            style=\${styleMap({
    "--z-popover-theme--surface": args["--z-popover-theme--surface"],
    "--z-popover-theme--text": args["--z-popover-theme--text"],
    "--z-popover-padding": args["--z-popover-padding"]
  })}
            .position=\${args.position}
            bind-to="#popover-trigger"
          >
            <div class="popover-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
          </z-popover>
          <z-button
            id="popover-trigger"
            icon="plus-filled"
            .onclick=\${parameters.onTriggerClick}
          ></z-button>
        </div>
      </z-offcanvas>
    </div>\`
} satisfies Story`,...(O=(M=l.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const re=["Demo","ContextualMenuLike","Tooltip","TooltipWithNestedContainer","PopoverInsideTransformedElement"];export{s as ContextualMenuLike,a as Demo,l as PopoverInsideTransformedElement,d as Tooltip,c as TooltipWithNestedContainer,re as __namedExportsOrder,ne as default};
