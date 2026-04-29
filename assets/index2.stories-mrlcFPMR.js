import{r as e}from"./lit-CgIPLKVa.js";import{L as t,W as n}from"./beans-CNd94UMz.js";import"./z-offcanvas-B9b04eDS.js";var r={title:`ZOffcanvas`,component:`z-offcanvas`,parameters:{layout:`fullscreen`,docs:{story:{inline:!1,iframeHeight:`600px`}}},argTypes:{variant:{control:{type:`inline-radio`},options:Object.values(t)},transitiondirection:{control:{type:`inline-radio`},options:Object.values(n)},showBackdrop:{control:{if:{arg:`variant`,eq:t.OVERLAY}}}},args:{open:!0,showBackdrop:!0,"--z-offcanvas--top-space":`0px`,"--z-offcanvas--container-width":`375px`}},i=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna ac urna aliquet lacinia eu ac augue. Nullam consectetur rutrum ultrices. Cras eros ex, cursus nec nisi sed, porttitor fringilla metus. Etiam eleifend fringilla quam et tincidunt. Cras gravida, tortor at consectetur iaculis, lacus eros sagittis magna, ac iaculis orci augue in dolor. Nullam nibh orci, maximus vel tempor sit amet, scelerisque eget velit. Quisque dignissim non dolor iaculis scelerisque. Cras at lectus arcu. Morbi dignissim fermentum magna, sed interdum leo condimentum et. Sed vitae consectetur leo, vel placerat turpis. Donec sagittis rutrum felis, eu consequat tortor efficitur in. Vivamus non nunc vehicula, laoreet lorem id, molestie eros. Etiam ornare at turpis ut suscipit. Nulla non diam eget lorem hendrerit imperdiet. Integer maximus quam non ligula lacinia pharetra. Mauris ullamcorper ligula nec elit pellentesque, a pellentesque mauris tristique. Maecenas tortor enim, rutrum ornare tincidunt sed, tempor vitae urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce feugiat egestas mollis. In eleifend neque quis tellus bibendum sodales. Curabitur mattis, magna maximus volutpat dapibus, velit nibh dictum elit, eu sodales leo elit vel odio. Quisque sit amet lorem molestie sapien interdum faucibus. Nunc in ex nisi. In hac habitasse platea dictumst. Maecenas dictum, nunc at finibus dapibus, nunc ligula congue odio, in hendrerit dui mauris vel magna. Vivamus sapien dui, eleifend auctor ornare vitae, aliquet in mi. Ut eget risus ex. Vivamus pharetra tellus in volutpat faucibus. Suspendisse interdum sapien ut dui molestie ullamcorper. Ut iaculis, nunc tincidunt posuere convallis, metus lorem mattis mi, nec ullamcorper mi ligula sit amet leo. Fusce at lectus risus. Aliquam tempor sollicitudin ullamcorper. Quisque eget dignissim purus. Nullam convallis purus a sem varius tincidunt ut in dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fermentum rutrum nibh, nec vulputate nisi mollis in. Nullam venenatis metus nulla, at rhoncus neque gravida non. Nam vehicula mollis nunc nec faucibus. Phasellus eu turpis purus. Proin aliquam, ipsum non rutrum tincidunt, erat metus laoreet augue, facilisis ultricies magna tellus sed neque. Suspendisse quis tristique lorem. Pellentesque diam urna, congue et massa in, laoreet aliquet nibh.mybutton Ut vitae ligula eu elit ornare gravida. Vivamus ultricies, augue in fermentum tempus, purus ligula aliquet sapien, viverra condimentum tortor ante et est. Vivamus ex urna, gravida a enim auctor, ultrices ornare turpis. Quisque at lacus massa. Nulla facilisi. Ut id quam at ante sagittis posuere vitae sit amet sem. Fusce suscipit ante pellentesque felis facilisis tincidunt.`,a={render:r=>e`<div id="offcanvas-story-container">
      <z-offcanvas
        .variant=${t.OVERLAY}
        .open=${r.open}
        .transitiondirection=${n.RIGHT}
        .showBackdrop=${r.showBackdrop}
        style="--z-offcanvas--top-space: ${r[`--z-offcanvas--top-space`]}; --z-offcanvas--container-width: ${r[`--z-offcanvas--container-width`]}"
      >
        <div slot="canvasContent">
          <p>${i}</p>
        </div>
      </z-offcanvas>
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        ${i}
      </div>
    </div>`},o={render:r=>e`<div id="offcanvas-story-container">
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        ${i}
      </div>
      <z-offcanvas
        .variant=${t.OVERLAY}
        .open=${r.open}
        .transitiondirection=${n.LEFT}
        .showBackdrop=${r.showBackdrop}
        style="--z-offcanvas--top-space: ${r[`--z-offcanvas--top-space`]}; --z-offcanvas--container-width: ${r[`--z-offcanvas--container-width`]}"
      >
        <div slot="canvasContent">
          <p>${i}</p>
        </div>
      </z-offcanvas>
      ${r.transitiondirection===`right`?e`<div class="offcanvas-story-content"></div>`:``}
    </div>`},s={parameters:{controls:{exclude:[`variant`,`transitiondirection`,`--z-offcanvas--top-space`,`--z-offcanvas--container-width`]}},args:{"--z-offcanvas--container-height":`90%`},render:r=>e`<div id="offcanvas-story-container">
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        ${i}
      </div>
      <z-offcanvas
        .open=${r.open}
        .variant=${t.OVERLAY}
        .transitiondirection=${n.UP}
        .showBackdrop=${r.showBackdrop}
        style="--z-offcanvas--container-height: ${r[`--z-offcanvas--container-height`]}"
      >
        <div slot="canvasContent">
          <p>${i}</p>
        </div>
      </z-offcanvas>
    </div>`},c={parameters:{controls:{exclude:[`variant`,`--z-offcanvas--top-space`]}},args:{transitiondirection:n.RIGHT},render:n=>e`<div
      class="pushcontent-story ${n.transitiondirection}"
      id="offcanvas-story-container"
    >
      <z-offcanvas
        .open=${n.open}
        .variant=${t.PUSHCONTENT}
        .transitiondirection=${n.transitiondirection}
        style="--z-offcanvas--container-width: ${n[`--z-offcanvas--container-width`]}"
      >
        <div slot="canvasContent">
          <p>Offcanvas content</p>
        </div>
      </z-offcanvas>

      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        ${i}
      </div>
    </div>`};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};var l=[`OverlayTransitionDirectionRight`,`OverlayTransitionDirectionLeft`,`TransitionDirectionUp`,`PushContent`];export{o as OverlayTransitionDirectionLeft,a as OverlayTransitionDirectionRight,c as PushContent,s as TransitionDirectionUp,l as __namedExportsOrder,r as default};