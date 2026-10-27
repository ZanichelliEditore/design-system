import{n as e}from"./chunk-DnJy8xQt.js";import{dt as t,ft as n,pt as r}from"./iframe-izO1_eE9.js";import{K as i,f as a,t as o}from"./beans-zckFsBZy.js";import{i as s,s as c}from"./iconset-BfOAkyaN.js";import{n as l,o as u,t as d}from"./storybook-utils-CXFqIWGM.js";import{t as f}from"./internal-BoedbH0F.js";var p,m,h,g,_,v,y;e((()=>{t(),f(),i(),c(),u(),p=l(),m=()=>({...p,options:[...p.options],control:{...p.control,labels:{...p.control.labels}}}),h={title:`ZAccordion`,component:`z-accordion`,argTypes:{"--z-accordion-bg":m(),"--z-accordion-label-color":m(),"--z-accordion-disabled-label-color":{...m(),if:{arg:`isDisabled`,truthy:!0}},"--z-accordion-content-bg":m(),"--z-accordion-content-fg":m(),"--z-accordion-hover-color":m(),"--z-accordion-highlight-color":{...m(),if:{arg:`highlight`,truthy:!0}},icon:{options:Object.keys(s).sort(),control:{type:`select`}},shadow:{if:{arg:`variant`,eq:o.BACKGROUND}},size:{options:Object.values(a),control:{type:`inline-radio`}},variant:{options:Object.values(o),control:{type:`inline-radio`}}},args:{"--z-accordion-highlight-color":`var(--color-primary01)`,"--z-accordion-right-padding":`var(--space-unit)`,"--z-accordion-left-padding":`calc(var(--space-unit) * 2)`,"--z-accordion-label-font-weight":`var(--font-sb)`,highlight:!1,icon:null,isDisabled:!1,label:`Text label`,open:!1,shadow:!0,size:a.BIG,variant:o.DEFAULT},render:e=>r(`z-accordion`,{...e,style:d(e)},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem.`),parameters:{docs:{description:{component:"To add the highlight band on the left, set the `highlight` property to `true` then set the `--z-accordion-highlight-color` CSS variable to the desired color."}}}},g={},_={argTypes:{"--z-accordion-highlight-color2":{...m(),if:{arg:`highlight`,truthy:!0}},"--z-accordion-highlight-color3":{...m(),if:{arg:`highlight`,truthy:!0}},"--z-accordion-highlight-color4":{...m(),if:{arg:`highlight`,truthy:!0}}},args:{"--z-accordion-highlight-color2":`var(--color-primary01)`,"--z-accordion-highlight-color3":`var(--color-primary01)`,"--z-accordion-highlight-color4":`var(--color-primary01)`},parameters:{controls:{exclude:[`open`]}},render:e=>r(n,null,h.render(e),h.render({...e,"--z-accordion-highlight-color":e[`--z-accordion-highlight-color2`]}),h.render({...e,"--z-accordion-highlight-color":e[`--z-accordion-highlight-color3`]}),h.render({...e,"--z-accordion-highlight-color":e[`--z-accordion-highlight-color4`]}))},v={render:e=>r(`z-accordion`,{...e,style:d(e)},r(`z-tag`,{slot:`tag`},`Tag 1`),r(`z-tag`,{slot:`tag`},`Tag 2`),r(`z-tag`,{slot:`tag`},`Tag 3`),`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem.`)},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  argTypes: {
    "--z-accordion-highlight-color2": {
      ...createColorTokenArgConfig(),
      if: {
        arg: "highlight",
        truthy: true
      }
    },
    "--z-accordion-highlight-color3": {
      ...createColorTokenArgConfig(),
      if: {
        arg: "highlight",
        truthy: true
      }
    },
    "--z-accordion-highlight-color4": {
      ...createColorTokenArgConfig(),
      if: {
        arg: "highlight",
        truthy: true
      }
    }
  },
  args: {
    "--z-accordion-highlight-color2": "var(--color-primary01)",
    "--z-accordion-highlight-color3": "var(--color-primary01)",
    "--z-accordion-highlight-color4": "var(--color-primary01)"
  },
  parameters: {
    controls: {
      exclude: ["open"]
    }
  },
  render: args => <Fragment>
      {StoryMeta.render(args)}
      {StoryMeta.render({
      ...args,
      "--z-accordion-highlight-color": args["--z-accordion-highlight-color2"]
    } as ZAccordionStoriesArgs)}
      {StoryMeta.render({
      ...args,
      "--z-accordion-highlight-color": args["--z-accordion-highlight-color3"]
    } as ZAccordionStoriesArgs)}
      {StoryMeta.render({
      ...args,
      "--z-accordion-highlight-color": args["--z-accordion-highlight-color4"]
    } as ZAccordionStoriesArgs)}
    </Fragment>
} satisfies Story`,..._.parameters?.docs?.source},description:{story:"When multiple `ZAccordion`s are placed in stack, the style is automatically optimized through global styles.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <z-accordion {...args} style={extractCSSVars(args)}>
      <z-tag slot="tag">Tag 1</z-tag>
      <z-tag slot="tag">Tag 2</z-tag>
      <z-tag slot="tag">Tag 3</z-tag>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede,
      qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita
      summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens,
      torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero
      sum nescius esse utilitatem in historia, non modo voluptatem.
    </z-accordion>
} satisfies Story`,...v.parameters?.docs?.source}}},y=[`Default`,`Stack`,`WithTags`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  argTypes: {
    "--z-accordion-highlight-color2": {
      ...createColorTokenArgConfig(),
      if: {
        arg: "highlight",
        truthy: true
      }
    },
    "--z-accordion-highlight-color3": {
      ...createColorTokenArgConfig(),
      if: {
        arg: "highlight",
        truthy: true
      }
    },
    "--z-accordion-highlight-color4": {
      ...createColorTokenArgConfig(),
      if: {
        arg: "highlight",
        truthy: true
      }
    }
  },
  args: {
    "--z-accordion-highlight-color2": "var(--color-primary01)",
    "--z-accordion-highlight-color3": "var(--color-primary01)",
    "--z-accordion-highlight-color4": "var(--color-primary01)"
  },
  parameters: {
    controls: {
      exclude: ["open"]
    }
  },
  render: args => <Fragment>
      {StoryMeta.render(args)}
      {StoryMeta.render({
      ...args,
      "--z-accordion-highlight-color": args["--z-accordion-highlight-color2"]
    } as ZAccordionStoriesArgs)}
      {StoryMeta.render({
      ...args,
      "--z-accordion-highlight-color": args["--z-accordion-highlight-color3"]
    } as ZAccordionStoriesArgs)}
      {StoryMeta.render({
      ...args,
      "--z-accordion-highlight-color": args["--z-accordion-highlight-color4"]
    } as ZAccordionStoriesArgs)}
    </Fragment>
} satisfies Story`,..._.parameters?.docs?.source},description:{story:"When multiple `ZAccordion`s are placed in stack, the style is automatically optimized through global styles.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <z-accordion {...args} style={extractCSSVars(args)}>
      <z-tag slot="tag">Tag 1</z-tag>
      <z-tag slot="tag">Tag 2</z-tag>
      <z-tag slot="tag">Tag 3</z-tag>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede,
      qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita
      summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens,
      torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero
      sum nescius esse utilitatem in historia, non modo voluptatem.
    </z-accordion>
} satisfies Story`,...v.parameters?.docs?.source}}}}))();export{g as Default,_ as Stack,v as WithTags,y as __namedExportsOrder,h as default};