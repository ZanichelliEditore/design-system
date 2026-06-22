import{n as e}from"./chunk-DnJy8xQt.js";import{X as t,nt as n}from"./iframe-CJGav67o.js";import{B as r,J as i,M as a}from"./beans-NNuswqO1.js";import{o,t as s}from"./storybook-utils-X33q-Ruv.js";var c=e((()=>{})),l,u,d,f,p,m,h,g,_;e((()=>{t(),i(),o(),c(),l={title:`ZOffcanvas`,component:`z-offcanvas`,parameters:{layout:`fullscreen`,docs:{story:{inline:!1,iframeHeight:`600px`}}},argTypes:{variant:{control:{type:`inline-radio`},options:Object.values(a)},transitiondirection:{control:{type:`inline-radio`},options:Object.values(r)},showBackdrop:{control:{if:{arg:`variant`,eq:a.OVERLAY}}}},args:{open:!0,showBackdrop:!0,transitiondirection:r.RIGHT,variant:a.OVERLAY,"--z-offcanvas--top-space":`0px`,"--z-offcanvas--container-width":`375px`}},u=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna ac urna aliquet lacinia eu ac augue. Nullam consectetur rutrum ultrices. Cras eros ex, cursus nec nisi sed, porttitor fringilla metus. Etiam eleifend fringilla quam et tincidunt. Cras gravida, tortor at consectetur iaculis, lacus eros sagittis magna, ac iaculis orci augue in dolor. Nullam nibh orci, maximus vel tempor sit amet, scelerisque eget velit. Quisque dignissim non dolor iaculis scelerisque. Cras at lectus arcu. Morbi dignissim fermentum magna, sed interdum leo condimentum et. Sed vitae consectetur leo, vel placerat turpis. Donec sagittis rutrum felis, eu consequat tortor efficitur in. Vivamus non nunc vehicula, laoreet lorem id, molestie eros. Etiam ornare at turpis ut suscipit. Nulla non diam eget lorem hendrerit imperdiet. Integer maximus quam non ligula lacinia pharetra. Mauris ullamcorper ligula nec elit pellentesque, a pellentesque mauris tristique. Maecenas tortor enim, rutrum ornare tincidunt sed, tempor vitae urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce feugiat egestas mollis. In eleifend neque quis tellus bibendum sodales. Curabitur mattis, magna maximus volutpat dapibus, velit nibh dictum elit, eu sodales leo elit vel odio. Quisque sit amet lorem molestie sapien interdum faucibus. Nunc in ex nisi. In hac habitasse platea dictumst. Maecenas dictum, nunc at finibus dapibus, nunc ligula congue odio, in hendrerit dui mauris vel magna. Vivamus sapien dui, eleifend auctor ornare vitae, aliquet in mi. Ut eget risus ex. Vivamus pharetra tellus in volutpat faucibus. Suspendisse interdum sapien ut dui molestie ullamcorper. Ut iaculis, nunc tincidunt posuere convallis, metus lorem mattis mi, nec ullamcorper mi ligula sit amet leo. Fusce at lectus risus. Aliquam tempor sollicitudin ullamcorper. Quisque eget dignissim purus. Nullam convallis purus a sem varius tincidunt ut in dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fermentum rutrum nibh, nec vulputate nisi mollis in. Nullam venenatis metus nulla, at rhoncus neque gravida non. Nam vehicula mollis nunc nec faucibus. Phasellus eu turpis purus. Proin aliquam, ipsum non rutrum tincidunt, erat metus laoreet augue, facilisis ultricies magna tellus sed neque. Suspendisse quis tristique lorem. Pellentesque diam urna, congue et massa in, laoreet aliquet nibh.mybutton Ut vitae ligula eu elit ornare gravida. Vivamus ultricies, augue in fermentum tempus, purus ligula aliquet sapien, viverra condimentum tortor ante et est. Vivamus ex urna, gravida a enim auctor, ultrices ornare turpis. Quisque at lacus massa. Nulla facilisi. Ut id quam at ante sagittis posuere vitae sit amet sem. Fusce suscipit ante pellentesque felis facilisis tincidunt.`,f={parameters:{controls:{exclude:[`transitiondirection`]}},render:e=>n(`div`,{id:`offcanvas-story-container`},n(`z-offcanvas`,{...e,ref:e=>d=e,style:s(e),variant:a.OVERLAY},n(`div`,{slot:`canvasContent`},n(`div`,{class:`offcanvas-header`},n(`button`,{onClick:()=>d.open=!1},n(`z-icon`,{name:`multiply`}))),n(`p`,null,u),n(`a`,{href:`google.com`},`A link to google`))),n(`div`,{class:`offcanvas-story-content`},n(`div`,{class:`heading-2-sb`},`Page content`),u))},p={parameters:{controls:{exclude:[`transitiondirection`]}},render:e=>n(`div`,{id:`offcanvas-story-container`},n(`div`,{class:`offcanvas-story-content`},n(`div`,{class:`heading-2-sb`},`Page content`),u),n(`z-offcanvas`,{...e,style:s(e),variant:a.OVERLAY,transitiondirection:r.LEFT},n(`div`,{slot:`canvasContent`},n(`p`,null,u))))},m={parameters:{controls:{exclude:[`variant`,`transitiondirection`,`--z-offcanvas--top-space`,`--z-offcanvas--container-width`]}},args:{"--z-offcanvas--container-height":`90%`},render:e=>n(`div`,{id:`offcanvas-story-container`},n(`div`,{class:`offcanvas-story-content`},n(`div`,{class:`heading-2-sb`},`Page content`),u),n(`z-offcanvas`,{...e,style:s(e),variant:a.OVERLAY,transitiondirection:r.UP},n(`div`,{slot:`canvasContent`},n(`p`,null,u))))},h={parameters:{controls:{exclude:[`variant`,`--z-offcanvas--top-space`]}},args:{transitiondirection:r.RIGHT},render:e=>n(`div`,{class:{"pushcontent-story":!0,[e.transitiondirection]:!0},id:`offcanvas-story-container`},n(`z-offcanvas`,{...e,style:s(e),variant:a.PUSHCONTENT},n(`div`,{slot:`canvasContent`},n(`p`,null,`Offcanvas content`))),n(`div`,{class:`offcanvas-story-content`},n(`div`,{class:`heading-2-sb`},`Page content`),u))},g={render:e=>n(`div`,{id:`offcanvas-story-container`},n(`div`,{class:`offcanvas-story-content`},n(`div`,{class:`heading-2-sb`},`Page content`),n(`z-button`,{onClick:()=>d.open=!0},`apri offcanvas`),u),n(`z-offcanvas`,{...e,ref:e=>d=e},n(`div`,{slot:`canvasContent`},n(`div`,{class:`offcanvas-header`},n(`z-button`,{icon:`chevron-left`,onClick:()=>d.open=!1},`Chiudi`)),n(`z-select`,{resetItem:`Tutte le aree`,ariaLabel:`Filtra i risultati in base all’area del catalogo`,htmlid:`search-categories-1`,message:!1,placeholder:`Seleziona un’area`,items:[{id:`1`,name:`Opzione 1`,selected:!0},{id:`2`,name:`Opzione 2`,selected:!1},{id:`3`,name:`Opzione 3`,selected:!1},{id:`4`,name:`Opzione 4`,selected:!1},{id:`5`,name:`Opzione 5`,selected:!1}]}),n(`z-combobox`,{"html-aria-label":`Filtra i risultati in base alle materie del catalogo`,inputid:`search-categories-2`,label:`Materia`,searchlabel:`Materia`,searchplaceholder:`Cerca`,items:[{id:`12`,name:`Opzione 1`,checked:!1},{id:`22`,name:`Opzione 2`,checked:!1},{id:`32`,name:`Opzione 3`,checked:!1},{id:`42`,name:`Opzione 4`,checked:!1},{id:`52`,name:`Opzione 5`,checked:!1}]}),n(`z-combobox`,{"html-aria-label":`Filtra i risultati in base all’ambito`,inputid:`search-categories-3`,label:`Ambito`,searchlabel:`Ambito`,searchplaceholder:`Cerca`,items:[{id:`13`,name:`Opzione 1`,checked:!1},{id:`23`,name:`Opzione 2`,checked:!1}]}))))},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["transitiondirection"]
    }
  },
  render: args => <div id="offcanvas-story-container">
      <z-offcanvas {...args} ref={el => offcanvasRef = el} style={extractCSSVars(args)} variant={OffCanvasVariant.OVERLAY}>
        <div slot="canvasContent">
          <div class="offcanvas-header">
            <button onClick={() => offcanvasRef.open = false}>
              <z-icon name="multiply" />
            </button>
          </div>
          <p>{DEMO_TEXT}</p>
          <a href="google.com">A link to google</a>
        </div>
      </z-offcanvas>
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        {DEMO_TEXT}
      </div>
    </div>
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["transitiondirection"]
    }
  },
  render: args => <div id="offcanvas-story-container">
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        {DEMO_TEXT}
      </div>
      <z-offcanvas {...args} style={extractCSSVars(args)} variant={OffCanvasVariant.OVERLAY} transitiondirection={TransitionDirection.LEFT}>
        <div slot="canvasContent">
          <p>{DEMO_TEXT}</p>
        </div>
      </z-offcanvas>
    </div>
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["variant", "transitiondirection", "--z-offcanvas--top-space", "--z-offcanvas--container-width"]
    }
  },
  args: {
    "--z-offcanvas--container-height": "90%"
  },
  render: args => <div id="offcanvas-story-container">
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        {DEMO_TEXT}
      </div>
      <z-offcanvas {...args} style={extractCSSVars(args)} variant={OffCanvasVariant.OVERLAY} transitiondirection={TransitionDirection.UP}>
        <div slot="canvasContent">
          <p>{DEMO_TEXT}</p>
        </div>
      </z-offcanvas>
    </div>
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["variant", "--z-offcanvas--top-space"]
    }
  },
  args: {
    transitiondirection: TransitionDirection.RIGHT
  },
  render: args => <div class={{
    "pushcontent-story": true,
    [args.transitiondirection]: true
  }} id="offcanvas-story-container">
      <z-offcanvas {...args} style={extractCSSVars(args)} variant={OffCanvasVariant.PUSHCONTENT}>
        <div slot="canvasContent">
          <p>Offcanvas content</p>
        </div>
      </z-offcanvas>

      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        {DEMO_TEXT}
      </div>
    </div>
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div id="offcanvas-story-container">
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        <z-button onClick={() => offcanvasRef.open = true}>apri offcanvas</z-button>
        {DEMO_TEXT}
      </div>
      <z-offcanvas {...args} ref={el => offcanvasRef = el}>
        <div slot="canvasContent">
          <div class="offcanvas-header">
            <z-button icon="chevron-left" onClick={() => offcanvasRef.open = false}>
              Chiudi
            </z-button>
          </div>
          <z-select resetItem="Tutte le aree" ariaLabel="Filtra i risultati in base all’area del catalogo" htmlid="search-categories-1" message={false} placeholder="Seleziona un’area" items={[{
          id: "1",
          name: "Opzione 1",
          selected: true
        }, {
          id: "2",
          name: "Opzione 2",
          selected: false
        }, {
          id: "3",
          name: "Opzione 3",
          selected: false
        }, {
          id: "4",
          name: "Opzione 4",
          selected: false
        }, {
          id: "5",
          name: "Opzione 5",
          selected: false
        }]}></z-select>
          <z-combobox html-aria-label="Filtra i risultati in base alle materie del catalogo" inputid="search-categories-2" label="Materia" searchlabel="Materia" searchplaceholder="Cerca" items={[{
          id: "12",
          name: "Opzione 1",
          checked: false
        }, {
          id: "22",
          name: "Opzione 2",
          checked: false
        }, {
          id: "32",
          name: "Opzione 3",
          checked: false
        }, {
          id: "42",
          name: "Opzione 4",
          checked: false
        }, {
          id: "52",
          name: "Opzione 5",
          checked: false
        }]}></z-combobox>
          <z-combobox html-aria-label="Filtra i risultati in base all’ambito" inputid="search-categories-3" label="Ambito" searchlabel="Ambito" searchplaceholder="Cerca" items={[{
          id: "13",
          name: "Opzione 1",
          checked: false
        }, {
          id: "23",
          name: "Opzione 2",
          checked: false
        }]}></z-combobox>
        </div>
      </z-offcanvas>
    </div>
} satisfies Story`,...g.parameters?.docs?.source}}},_=[`OverlayTransitionDirectionRight`,`OverlayTransitionDirectionLeft`,`TransitionDirectionUp`,`PushContent`,`WithNestedComponents`]}))();export{p as OverlayTransitionDirectionLeft,f as OverlayTransitionDirectionRight,h as PushContent,m as TransitionDirectionUp,g as WithNestedComponents,_ as __namedExportsOrder,l as default};