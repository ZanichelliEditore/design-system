import{r as e}from"./lit-CgIPLKVa.js";import{i as t,t as n}from"./chunk-L4EGOTBX-KlzQXQPc.js";import{a as r,n as i,o as a,r as o}from"./client-Dpr5AR8E.js";import"./z-icon-jtOHWf42.js";import"./z-book-cover-6ZFIvlSl.js";var s=()=>`:host,*{box-sizing:border-box}:host{display:flex;overflow:hidden;min-width:0;height:11.125rem;padding:var(--space-unit);border:var(--border-size-medium) solid var(--color-surface02);background-color:var(--color-surface01);border-radius:var(--border-size-large);cursor:pointer;font-family:var(--font-family-sans);gap:calc(var(--space-unit) * 2)}z-book-cover{--z-book-cover-stack-shift-x:6px;--z-book-cover-stack-shift-y:8px;--z-book-cover-height:158px;--z-book-cover-border-radius:0}.info-container{display:flex;overflow:hidden;min-width:0;flex:1;flex-direction:column}.authors-label{overflow:hidden;color:var(--color-default-text);font-size:var(--font-size-2);font-weight:var(--font-rg);text-overflow:ellipsis;white-space:nowrap}.card-title{display:-webkit-box;overflow:hidden;margin:0;-webkit-box-orient:vertical;font-size:var(--font-size-3);font-weight:var(--font-bd);-webkit-line-clamp:2;line-clamp:2;line-height:1.5;word-break:break-word}.card-subtitle{overflow:hidden;color:var(--color-default-text);text-overflow:ellipsis;white-space:nowrap}.tags-container{display:flex;max-width:100%;flex-wrap:wrap;margin-top:calc(var(--space-unit) * 2);gap:var(--space-unit)}.volumes-label{display:flex;flex-grow:1;align-items:end;color:var(--color-default-text);font-size:var(--font-size-1)}:host(.info-card){height:5rem;gap:calc(var(--space-unit) * 1.5)}:host(.info-card) .info-icon-container{display:flex;align-items:center;align-self:flex-start;justify-content:center;padding:var(--space-unit);margin-bottom:calc(var(--space-unit) * 3);background-color:var(--gray50);border-radius:var(--border-size-large)}:host(.info-card) .info-icon{--z-icon-width:1.125rem;--z-icon-height:1.125rem;fill:var(--color-default-icon)}:host(.info-card) .card-title{display:-webkit-box;overflow:hidden;min-width:0;max-width:100%;max-height:2.4em;margin-top:0;margin-bottom:calc(var(--space-unit) / 2);-webkit-box-orient:vertical;font-size:var(--font-size-3);font-weight:var(--font-bd);-webkit-line-clamp:1;line-clamp:1;line-height:1.2;word-break:break-word}:host(.info-card) .card-subtitle{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;line-height:1.2;white-space:normal;word-break:break-word}@media (max-width: 767px){.card-title{display:block;overflow:hidden;line-height:normal;text-overflow:ellipsis;white-space:nowrap}}`;r(class extends i{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow(),this.hasMultipleCovers=!1,this.isInfoCard=!1,this.resizeHandler=()=>{this.setTooltipTitle(this.authorsRef),this.setTooltipTitle(this.titleRef),this.setTooltipTitle(this.subtitleRef)},this.renderTitle=()=>a(this.titleHtmlTag||`div`,{class:`card-title`,ref:e=>this.titleRef=e},this.cardTitle),this.renderSubtitle=()=>a(`span`,{class:`card-subtitle`,ref:e=>this.subtitleRef=e},this.cardSubtitle),this.renderOperaCard=()=>a(o,null,a(`z-book-cover`,{cover:this.cover,fallbackCover:this.fallbackCover,multiple:this.hasMultipleCovers,bordered:!0}),a(`div`,{class:`info-container`},this.authors&&a(`span`,{class:`authors-label`,ref:e=>this.authorsRef=e},this.authors),this.renderTitle(),this.renderSubtitle(),a(`div`,{class:`tags-container`},a(`slot`,{name:`tags`})),a(`div`,{class:`volumes-label`},a(`slot`,{name:`volumes`})))),this.renderInfoCard=()=>a(o,{class:`info-card`},a(`div`,{class:`info-icon-container`},a(`z-icon`,{class:`info-icon`,name:`link`})),a(`div`,{class:`info-container`},this.renderTitle(),this.renderSubtitle()))}setTooltipTitle(e){if(!e)return;let t=window.getComputedStyle(e),n=t.getPropertyValue(`-webkit-line-clamp`)!==`none`,r;if(n){let n=parseInt(t.lineHeight)*parseInt(t.getPropertyValue(`-webkit-line-clamp`));r=e.scrollHeight>n}else r=e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight;r?e.setAttribute(`title`,e.textContent.trim()):e.removeAttribute(`title`)}componentDidRender(){this.setTooltipTitle(this.authorsRef),this.setTooltipTitle(this.titleRef),this.setTooltipTitle(this.subtitleRef)}componentDidLoad(){window.addEventListener(`resize`,this.resizeHandler)}disconnectedCallback(){window.removeEventListener(`resize`,this.resizeHandler)}render(){return this.isInfoCard?this.renderInfoCard():this.renderOperaCard()}get hostElement(){return this}static get style(){return s()}},[257,`z-result-card`,{cardTitle:[1,`card-title`],cardSubtitle:[1,`card-subtitle`],authors:[1],cover:[1],fallbackCover:[1,`fallback-cover`],hasMultipleCovers:[4,`has-multiple-covers`],isInfoCard:[4,`is-info-card`],titleHtmlTag:[1,`title-html-tag`]}]);var c={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZResultCard`,tagName:`z-result-card`,customElement:!0,members:[{kind:`field`,name:`cardTitle`,type:`string`,description:`The title of the card.`},{kind:`field`,name:`cardSubtitle`,type:`string`,description:`The subtitle of the card.`},{kind:`field`,name:`authors`,type:`string`,description:`The authors of the opera.`},{kind:`field`,name:`cover`,type:`string`,description:`The URL of the cover image of the opera.`},{kind:`field`,name:`fallbackCover`,type:`string`,description:`[optional] Fallback cover URL.`},{kind:`field`,name:`hasMultipleCovers`,type:`boolean`,description:`Whether to show a stack of covers to represent multiple books.`,default:`false`},{kind:`field`,name:`isInfoCard`,type:`boolean`,description:`Enables the "info" variant of the card.`,default:`false`},{kind:`field`,name:`titleHtmlTag`,type:`string`,description:`[optional] Set a specific heading level as html tag for the title.`}],events:[],slots:[{name:`tags`,description:`slot containing the descriptors for the opera variant`},{name:`volumes`,description:`slot containing the volume count to be displayed in the opera variant`}]}],exports:[{kind:`js`,name:`ZResultCard`,declaration:{name:`ZResultCard`,module:`src/components/z-result-card/index.tsx`}},{kind:`custom-element-definition`,name:`z-result-card`,declaration:{name:`ZResultCard`,module:`src/components/z-result-card/index.tsx`}}]}]};t({...n()||{},...c,modules:[...(n()||{}).modules||[],...c.modules]});var l={title:`ZResultCard`,component:`z-result-card`,argTypes:{cardTitle:{control:`text`},cardSubtitle:{control:`text`},authors:{control:`text`},cover:{control:`text`},fallbackCover:{control:`text`},hasMultipleCovers:{control:`boolean`},isInfoCard:{control:`boolean`}}},u={cardTitle:`Title`,cardSubtitle:`Subtitle`,authors:`John Doe`,cover:`https://place.abh.ai/s3fs-public/placeholder/DSC_0199_400x400.JPG`,fallbackCover:`https://staticmy.zanichelli.it/copertine/dashboard/Dashboard_Book_Placeholder.jpg`,hasMultipleCovers:!1,isInfoCard:!1,titleHtmlTag:`h2`},d={args:{...u},render:t=>e`
    <z-result-card
      .cardTitle=${t.cardTitle}
      .cardSubtitle=${t.cardSubtitle}
      .authors=${t.authors}
      .cover=${t.cover}
      fallback-cover=${t.fallbackCover}
      .hasMultipleCovers=${t.hasMultipleCovers}
      .isInfoCard=${t.isInfoCard}
      .titleHtmlTag=${t.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `},f={args:{...u},render:t=>e`
    <z-result-card
      .cardTitle=${t.cardTitle}
      .cardSubtitle=${t.cardSubtitle}
      .authors=${t.authors}
      cover="https://statictestmy.zanichelli.it/catalogo/assets/small/m40003.9788808075475.jpg"
      fallback-cover=${t.fallbackCover}
      .hasMultipleCovers=${t.hasMultipleCovers}
      .isInfoCard=${t.isInfoCard}
      .titleHtmlTag=${t.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `},p={args:{...u,hasMultipleCovers:!0},render:t=>e`
    <z-result-card
      .cardTitle=${t.cardTitle}
      .cardSubtitle=${t.cardSubtitle}
      .authors=${t.authors}
      .cover=${t.cover}
      fallback-cover=${t.fallbackCover}
      .hasMultipleCovers=${t.hasMultipleCovers}
      .isInfoCard=${t.isInfoCard}
      .titleHtmlTag=${t.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `},m={args:{...u,hasMultipleCovers:!0},render:t=>e`
    <z-result-card
      .cardTitle=${t.cardTitle}
      .cardSubtitle=${t.cardSubtitle}
      .authors=${t.authors}
      cover=https://statictestmy.zanichelli.it/catalogo/assets/small/m40003.9788808075475.jpg
      fallback-cover=${t.fallbackCover}
      .hasMultipleCovers=${t.hasMultipleCovers}
      .isInfoCard=${t.isInfoCard}
      .titleHtmlTag=${t.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `},h={args:{...u,cardTitle:`This is a very long title that should wrap to the next line if it exceeds the width of the card, it goes on two rows for desktop devices and one row for mobile`,cardSubtitle:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis. Nunc volutpat viverra felis, eu iaculis ipsum tempus mattis. Phasellus euismod quam eget nisl pellentesque.`,hasMultipleCovers:!0},render:t=>e`
    <z-result-card
      .cardTitle=${t.cardTitle}
      .cardSubtitle=${t.cardSubtitle}
      .authors=${t.authors}
      .cover=${t.cover}
      fallback-cover=${t.fallbackCover}
      .hasMultipleCovers=${t.hasMultipleCovers}
      .isInfoCard=${t.isInfoCard}
      .titleHtmlTag=${t.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `},g={args:{...u,author:void 0},render:t=>e`
    <z-result-card
      .cardTitle=${t.cardTitle}
      .cardSubtitle=${t.cardSubtitle}
      .cover=${t.cover}
      fallback-cover=${t.fallbackCover}
      .hasMultipleCovers=${t.hasMultipleCovers}
      .isInfoCard=${t.isInfoCard}
      .titleHtmlTag=${t.titleHtmlTag}
    />
  `},_={args:{...u,cardTitle:`Info Card Title`,cardSubtitle:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis.`,isInfoCard:!0},render:t=>e`
    <z-result-card
      .cardTitle=${t.cardTitle}
      .cardSubtitle=${t.cardSubtitle}
      .authors=${t.authors}
      .cover=${t.cover}
      fallback-cover=${t.fallbackCover}
      .hasMultipleCovers=${t.hasMultipleCovers}
      .isInfoCard=${t.isInfoCard}
      .titleHtmlTag=${t.titleHtmlTag}
    />
  `};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...args
  },
  render: args => html\`
    <z-result-card
      .cardTitle=\${args.cardTitle}
      .cardSubtitle=\${args.cardSubtitle}
      .authors=\${args.authors}
      .cover=\${args.cover}
      fallback-cover=\${args.fallbackCover}
      .hasMultipleCovers=\${args.hasMultipleCovers}
      .isInfoCard=\${args.isInfoCard}
      .titleHtmlTag=\${args.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  \`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...args
  },
  render: args => html\`
    <z-result-card
      .cardTitle=\${args.cardTitle}
      .cardSubtitle=\${args.cardSubtitle}
      .authors=\${args.authors}
      cover="https://statictestmy.zanichelli.it/catalogo/assets/small/m40003.9788808075475.jpg"
      fallback-cover=\${args.fallbackCover}
      .hasMultipleCovers=\${args.hasMultipleCovers}
      .isInfoCard=\${args.isInfoCard}
      .titleHtmlTag=\${args.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  \`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    hasMultipleCovers: true
  },
  render: args => html\`
    <z-result-card
      .cardTitle=\${args.cardTitle}
      .cardSubtitle=\${args.cardSubtitle}
      .authors=\${args.authors}
      .cover=\${args.cover}
      fallback-cover=\${args.fallbackCover}
      .hasMultipleCovers=\${args.hasMultipleCovers}
      .isInfoCard=\${args.isInfoCard}
      .titleHtmlTag=\${args.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  \`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    hasMultipleCovers: true
  },
  render: args => html\`
    <z-result-card
      .cardTitle=\${args.cardTitle}
      .cardSubtitle=\${args.cardSubtitle}
      .authors=\${args.authors}
      cover=https://statictestmy.zanichelli.it/catalogo/assets/small/m40003.9788808075475.jpg
      fallback-cover=\${args.fallbackCover}
      .hasMultipleCovers=\${args.hasMultipleCovers}
      .isInfoCard=\${args.isInfoCard}
      .titleHtmlTag=\${args.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  \`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    cardTitle: "This is a very long title that should wrap to the next line if it exceeds the width of the card, it goes on two rows for desktop devices and one row for mobile",
    cardSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis. Nunc volutpat viverra felis, eu iaculis ipsum tempus mattis. Phasellus euismod quam eget nisl pellentesque.",
    hasMultipleCovers: true
  },
  render: args => html\`
    <z-result-card
      .cardTitle=\${args.cardTitle}
      .cardSubtitle=\${args.cardSubtitle}
      .authors=\${args.authors}
      .cover=\${args.cover}
      fallback-cover=\${args.fallbackCover}
      .hasMultipleCovers=\${args.hasMultipleCovers}
      .isInfoCard=\${args.isInfoCard}
      .titleHtmlTag=\${args.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  \`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    author: undefined
  },
  render: args => html\`
    <z-result-card
      .cardTitle=\${args.cardTitle}
      .cardSubtitle=\${args.cardSubtitle}
      .cover=\${args.cover}
      fallback-cover=\${args.fallbackCover}
      .hasMultipleCovers=\${args.hasMultipleCovers}
      .isInfoCard=\${args.isInfoCard}
      .titleHtmlTag=\${args.titleHtmlTag}
    />
  \`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    cardTitle: "Info Card Title",
    cardSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis.",
    isInfoCard: true
  },
  render: args => html\`
    <z-result-card
      .cardTitle=\${args.cardTitle}
      .cardSubtitle=\${args.cardSubtitle}
      .authors=\${args.authors}
      .cover=\${args.cover}
      fallback-cover=\${args.fallbackCover}
      .hasMultipleCovers=\${args.hasMultipleCovers}
      .isInfoCard=\${args.isInfoCard}
      .titleHtmlTag=\${args.titleHtmlTag}
    />
  \`
}`,..._.parameters?.docs?.source}}};var v=[`SingleCover`,`SingleCoverLateralSpaces`,`MultipleCovers`,`MultipleCoversLateralSpaces`,`LongTitleAndSubtitle`,`OnlyTitleAndSubtitle`,`InfoCard`];export{_ as InfoCard,h as LongTitleAndSubtitle,p as MultipleCovers,m as MultipleCoversLateralSpaces,g as OnlyTitleAndSubtitle,d as SingleCover,f as SingleCoverLateralSpaces,v as __namedExportsOrder,l as default};