import{n as e}from"./chunk-DnJy8xQt.js";import{dt as t,pt as n}from"./iframe-izO1_eE9.js";import{K as r,l as i,u as a}from"./beans-zckFsBZy.js";import{o,t as s}from"./storybook-utils-CXFqIWGM.js";var c=e((()=>{})),l,u,d,f,p,m;e((()=>{t(),r(),o(),c(),l={title:`ZCarousel`,component:`z-carousel`,decorators:[e=>n(`div`,{class:`z-carousel-story-container`},e())],render:e=>n(`z-carousel`,{...e,arrowsPosition:i.OVER,style:s(e)},[...Array(e.itemsCount)].map((e,t)=>n(`li`,null,n(`div`,{class:`carousel-box`},t+1))))},u={args:{label:``,"--z-carousel-gutter":`var(--space-unit)`,infinite:!1,fixedArrows:!0,itemsCount:8}},d={argTypes:{arrowsPosition:{control:{type:`inline-radio`},options:Object.values(i)},progressMode:{control:{type:`inline-radio`},options:Object.values(a)}},args:{label:`Carousel title`,progressMode:a.DOTS,arrowsPosition:i.BOTTOM,infinite:!1,fixedArrows:!0,itemsCount:8,single:!0},parameters:{layout:`centered`,controls:{exclude:[`single`]}}},f={args:{label:`Carousel title`,ghostLoadingHeight:265,isLoading:!0},parameters:{controls:{exclude:[`isLoading`]}}},p={args:{label:`Carousel title`,infinite:!1,"--z-carousel-gutter":`8px`},parameters:{controls:{exclude:[`infinite`]}},render:e=>n(`z-carousel`,{...e,style:s(e)},[...Array(8)].map(()=>n(`li`,null,n(`div`,{class:`carousel-box-loading`},n(`z-ghost-loading`,null)))))},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "",
    "--z-carousel-gutter": "var(--space-unit)",
    "infinite": false,
    "fixedArrows": true,
    "itemsCount": 8
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  argTypes: {
    arrowsPosition: {
      control: {
        type: "inline-radio"
      },
      options: Object.values(CarouselArrowsPosition)
    },
    progressMode: {
      control: {
        type: "inline-radio"
      },
      options: Object.values(CarouselProgressMode)
    }
  },
  args: {
    label: "Carousel title",
    progressMode: CarouselProgressMode.DOTS,
    arrowsPosition: CarouselArrowsPosition.BOTTOM,
    infinite: false,
    fixedArrows: true,
    itemsCount: 8,
    single: true
  },
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["single"]
    }
  }
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Carousel title",
    ghostLoadingHeight: 265,
    isLoading: true
  },
  parameters: {
    controls: {
      exclude: ["isLoading"]
    }
  }
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Carousel title",
    "infinite": false,
    "--z-carousel-gutter": "8px"
  },
  parameters: {
    controls: {
      exclude: ["infinite"]
    }
  },
  render: args => <z-carousel {...args} style={extractCSSVars(args)}>
      {[...new Array(8)].map(() => <li>
          <div class="carousel-box-loading">
            <z-ghost-loading></z-ghost-loading>
          </div>
        </li>)}
    </z-carousel>
} satisfies Story`,...p.parameters?.docs?.source}}},m=[`SlideshowWithArrowsOver`,`SingleMode`,`GhostLoading`,`LoadingItems`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "",
    "--z-carousel-gutter": "var(--space-unit)",
    "infinite": false,
    "fixedArrows": true,
    "itemsCount": 8
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  argTypes: {
    arrowsPosition: {
      control: {
        type: "inline-radio"
      },
      options: Object.values(CarouselArrowsPosition)
    },
    progressMode: {
      control: {
        type: "inline-radio"
      },
      options: Object.values(CarouselProgressMode)
    }
  },
  args: {
    label: "Carousel title",
    progressMode: CarouselProgressMode.DOTS,
    arrowsPosition: CarouselArrowsPosition.BOTTOM,
    infinite: false,
    fixedArrows: true,
    itemsCount: 8,
    single: true
  },
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["single"]
    }
  }
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Carousel title",
    ghostLoadingHeight: 265,
    isLoading: true
  },
  parameters: {
    controls: {
      exclude: ["isLoading"]
    }
  }
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Carousel title",
    "infinite": false,
    "--z-carousel-gutter": "8px"
  },
  parameters: {
    controls: {
      exclude: ["infinite"]
    }
  },
  render: args => <z-carousel {...args} style={extractCSSVars(args)}>
      {[...new Array(8)].map(() => <li>
          <div class="carousel-box-loading">
            <z-ghost-loading></z-ghost-loading>
          </div>
        </li>)}
    </z-carousel>
} satisfies Story`,...p.parameters?.docs?.source}}}}))();export{f as GhostLoading,p as LoadingItems,d as SingleMode,u as SlideshowWithArrowsOver,m as __namedExportsOrder,l as default};