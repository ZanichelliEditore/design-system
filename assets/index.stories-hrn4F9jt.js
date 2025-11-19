import{x as t}from"./lit-element-DGXdXVoE.js";import{O as i,n as e}from"./index-BBy8evlc.js";import"./index-DLG_Muox.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";const D={title:"ZOffcanvas",component:"z-offcanvas",parameters:{layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:"600px"}}},argTypes:{variant:{control:{type:"inline-radio"},options:Object.values(i)},transitiondirection:{control:{type:"inline-radio"},options:Object.values(e)},showBackdrop:{control:{if:{arg:"variant",eq:i.OVERLAY}}}},args:{open:!0,showBackdrop:!0,"--z-offcanvas--top-space":"0px","--z-offcanvas--container-width":"375px"}},a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna ac urna aliquet lacinia eu ac augue. Nullam consectetur rutrum ultrices. Cras eros ex, cursus nec nisi sed, porttitor fringilla metus. Etiam eleifend fringilla quam et tincidunt. Cras gravida, tortor at consectetur iaculis, lacus eros sagittis magna, ac iaculis orci augue in dolor. Nullam nibh orci, maximus vel tempor sit amet, scelerisque eget velit. Quisque dignissim non dolor iaculis scelerisque. Cras at lectus arcu. Morbi dignissim fermentum magna, sed interdum leo condimentum et. Sed vitae consectetur leo, vel placerat turpis. Donec sagittis rutrum felis, eu consequat tortor efficitur in. Vivamus non nunc vehicula, laoreet lorem id, molestie eros. Etiam ornare at turpis ut suscipit. Nulla non diam eget lorem hendrerit imperdiet. Integer maximus quam non ligula lacinia pharetra. Mauris ullamcorper ligula nec elit pellentesque, a pellentesque mauris tristique. Maecenas tortor enim, rutrum ornare tincidunt sed, tempor vitae urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce feugiat egestas mollis. In eleifend neque quis tellus bibendum sodales. Curabitur mattis, magna maximus volutpat dapibus, velit nibh dictum elit, eu sodales leo elit vel odio. Quisque sit amet lorem molestie sapien interdum faucibus. Nunc in ex nisi. In hac habitasse platea dictumst. Maecenas dictum, nunc at finibus dapibus, nunc ligula congue odio, in hendrerit dui mauris vel magna. Vivamus sapien dui, eleifend auctor ornare vitae, aliquet in mi. Ut eget risus ex. Vivamus pharetra tellus in volutpat faucibus. Suspendisse interdum sapien ut dui molestie ullamcorper. Ut iaculis, nunc tincidunt posuere convallis, metus lorem mattis mi, nec ullamcorper mi ligula sit amet leo. Fusce at lectus risus. Aliquam tempor sollicitudin ullamcorper. Quisque eget dignissim purus. Nullam convallis purus a sem varius tincidunt ut in dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fermentum rutrum nibh, nec vulputate nisi mollis in. Nullam venenatis metus nulla, at rhoncus neque gravida non. Nam vehicula mollis nunc nec faucibus. Phasellus eu turpis purus. Proin aliquam, ipsum non rutrum tincidunt, erat metus laoreet augue, facilisis ultricies magna tellus sed neque. Suspendisse quis tristique lorem. Pellentesque diam urna, congue et massa in, laoreet aliquet nibh.mybutton Ut vitae ligula eu elit ornare gravida. Vivamus ultricies, augue in fermentum tempus, purus ligula aliquet sapien, viverra condimentum tortor ante et est. Vivamus ex urna, gravida a enim auctor, ultrices ornare turpis. Quisque at lacus massa. Nulla facilisi. Ut id quam at ante sagittis posuere vitae sit amet sem. Fusce suscipit ante pellentesque felis facilisis tincidunt.",s={render:n=>t`<div id="offcanvas-story-container">
      <z-offcanvas
        .variant=${i.OVERLAY}
        .open=${n.open}
        .transitiondirection=${e.RIGHT}
        .showBackdrop=${n.showBackdrop}
        style="--z-offcanvas--top-space: ${n["--z-offcanvas--top-space"]}; --z-offcanvas--container-width: ${n["--z-offcanvas--container-width"]}"
      >
        <div slot="canvasContent">
          <p>${a}</p>
        </div>
      </z-offcanvas>
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        ${a}
      </div>
    </div>`},o={render:n=>t`<div id="offcanvas-story-container">
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        ${a}
      </div>
      <z-offcanvas
        .variant=${i.OVERLAY}
        .open=${n.open}
        .transitiondirection=${e.LEFT}
        .showBackdrop=${n.showBackdrop}
        style="--z-offcanvas--top-space: ${n["--z-offcanvas--top-space"]}; --z-offcanvas--container-width: ${n["--z-offcanvas--container-width"]}"
      >
        <div slot="canvasContent">
          <p>${a}</p>
        </div>
      </z-offcanvas>
      ${n.transitiondirection==="right"?t`<div class="offcanvas-story-content"></div>`:""}
    </div>`},r={parameters:{controls:{exclude:["variant","transitiondirection","--z-offcanvas--top-space","--z-offcanvas--container-width"]}},args:{"--z-offcanvas--container-height":"90%"},render:n=>t`<div id="offcanvas-story-container">
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        ${a}
      </div>
      <z-offcanvas
        .open=${n.open}
        .variant=${i.OVERLAY}
        .transitiondirection=${e.UP}
        .showBackdrop=${n.showBackdrop}
        style="--z-offcanvas--container-height: ${n["--z-offcanvas--container-height"]}"
      >
        <div slot="canvasContent">
          <p>${a}</p>
        </div>
      </z-offcanvas>
    </div>`},c={parameters:{controls:{exclude:["variant","--z-offcanvas--top-space"]}},args:{transitiondirection:e.RIGHT},render:n=>t`<div
      class="pushcontent-story ${n.transitiondirection}"
      id="offcanvas-story-container"
    >
      <z-offcanvas
        .open=${n.open}
        .variant=${i.PUSHCONTENT}
        .transitiondirection=${n.transitiondirection}
        style="--z-offcanvas--container-width: ${n["--z-offcanvas--container-width"]}"
      >
        <div slot="canvasContent">
          <p>Offcanvas content</p>
        </div>
      </z-offcanvas>

      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        ${a}
      </div>
    </div>`};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => html\`<div id="offcanvas-story-container">
      <z-offcanvas
        .variant=\${OffCanvasVariant.OVERLAY}
        .open=\${args.open}
        .transitiondirection=\${TransitionDirection.RIGHT}
        .showBackdrop=\${args.showBackdrop}
        style="--z-offcanvas--top-space: \${args["--z-offcanvas--top-space"]}; --z-offcanvas--container-width: \${args["--z-offcanvas--container-width"]}"
      >
        <div slot="canvasContent">
          <p>\${DEMO_TEXT}</p>
        </div>
      </z-offcanvas>
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        \${DEMO_TEXT}
      </div>
    </div>\`
} satisfies Story`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var v,f,p;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => html\`<div id="offcanvas-story-container">
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        \${DEMO_TEXT}
      </div>
      <z-offcanvas
        .variant=\${OffCanvasVariant.OVERLAY}
        .open=\${args.open}
        .transitiondirection=\${TransitionDirection.LEFT}
        .showBackdrop=\${args.showBackdrop}
        style="--z-offcanvas--top-space: \${args["--z-offcanvas--top-space"]}; --z-offcanvas--container-width: \${args["--z-offcanvas--container-width"]}"
      >
        <div slot="canvasContent">
          <p>\${DEMO_TEXT}</p>
        </div>
      </z-offcanvas>
      \${args.transitiondirection === "right" ? html\`<div class="offcanvas-story-content"></div>\` : ""}
    </div>\`
} satisfies Story`,...(p=(f=o.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var m,g,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["variant", "transitiondirection", "--z-offcanvas--top-space", "--z-offcanvas--container-width"]
    }
  },
  args: {
    "--z-offcanvas--container-height": "90%"
  },
  render: args => html\`<div id="offcanvas-story-container">
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        \${DEMO_TEXT}
      </div>
      <z-offcanvas
        .open=\${args.open}
        .variant=\${OffCanvasVariant.OVERLAY}
        .transitiondirection=\${TransitionDirection.UP}
        .showBackdrop=\${args.showBackdrop}
        style="--z-offcanvas--container-height: \${args["--z-offcanvas--container-height"]}"
      >
        <div slot="canvasContent">
          <p>\${DEMO_TEXT}</p>
        </div>
      </z-offcanvas>
    </div>\`
} satisfies Story`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var $,z,y;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["variant", "--z-offcanvas--top-space"]
    }
  },
  args: {
    transitiondirection: TransitionDirection.RIGHT
  },
  render: args => html\`<div
      class="pushcontent-story \${args.transitiondirection}"
      id="offcanvas-story-container"
    >
      <z-offcanvas
        .open=\${args.open}
        .variant=\${OffCanvasVariant.PUSHCONTENT}
        .transitiondirection=\${args.transitiondirection}
        style="--z-offcanvas--container-width: \${args["--z-offcanvas--container-width"]}"
      >
        <div slot="canvasContent">
          <p>Offcanvas content</p>
        </div>
      </z-offcanvas>

      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        \${DEMO_TEXT}
      </div>
    </div>\`
} satisfies Story`,...(y=(z=c.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};const P=["OverlayTransitionDirectionRight","OverlayTransitionDirectionLeft","TransitionDirectionUp","PushContent"];export{o as OverlayTransitionDirectionLeft,s as OverlayTransitionDirectionRight,c as PushContent,r as TransitionDirectionUp,P as __namedExportsOrder,D as default};
