import{x as a}from"./lit-element-DGXdXVoE.js";import"./index-BdCALL6Q.js";import"./index-DSmxu1eR.js";import{s as D,g as m}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as F,H as O,h as t,a as h}from"./index-BZ0rSFNp.js";import"./index-DrFu-skq.js";const q=":host,*{box-sizing:border-box}:host{display:flex;overflow:hidden;min-width:0;height:11.125rem;padding:var(--space-unit);border:var(--border-size-medium) solid var(--color-surface02);background-color:var(--color-surface01);border-radius:var(--border-size-large);cursor:pointer;font-family:var(--font-family-sans);gap:calc(var(--space-unit) * 2)}z-book-cover{--z-book-cover-stack-shift-x:6px;--z-book-cover-stack-shift-y:8px;--z-book-cover-height:158px;--z-book-cover-border-radius:0}.info-container{display:flex;overflow:hidden;min-width:0;flex:1;flex-direction:column}.authors-label{overflow:hidden;color:var(--color-default-text);font-size:var(--font-size-2);font-weight:var(--font-rg);text-overflow:ellipsis;white-space:nowrap}.card-title{display:-webkit-box;overflow:hidden;margin:0;-webkit-box-orient:vertical;font-size:var(--font-size-3);font-weight:var(--font-bd);-webkit-line-clamp:2;line-clamp:2;line-height:1.5;word-break:break-word}.card-subtitle{overflow:hidden;color:var(--color-default-text);text-overflow:ellipsis;white-space:nowrap}.tags-container{display:flex;max-width:100%;flex-wrap:wrap;margin-top:calc(var(--space-unit) * 2);gap:var(--space-unit)}.volumes-label{display:flex;flex-grow:1;align-items:end;color:var(--color-default-text);font-size:var(--font-size-1)}:host(.info-card){height:5rem;gap:calc(var(--space-unit) * 1.5)}:host(.info-card) .info-icon-container{display:flex;align-items:center;align-self:flex-start;justify-content:center;padding:var(--space-unit);margin-bottom:calc(var(--space-unit) * 3);background-color:var(--gray50);border-radius:var(--border-size-large)}:host(.info-card) .info-icon{--z-icon-width:1.125rem;--z-icon-height:1.125rem;fill:var(--color-default-icon)}:host(.info-card) .card-title{display:-webkit-box;overflow:hidden;min-width:0;max-width:100%;max-height:2.4em;margin-top:0;margin-bottom:calc(var(--space-unit) / 2);-webkit-box-orient:vertical;font-size:var(--font-size-3);font-weight:var(--font-bd);-webkit-line-clamp:1;line-clamp:1;line-height:1.2;word-break:break-word}:host(.info-card) .card-subtitle{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;line-height:1.2;white-space:normal;word-break:break-word}@media (max-width: 767px){.card-title{display:block;overflow:hidden;line-height:normal;text-overflow:ellipsis;white-space:nowrap}}",W=class extends O{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.hasMultipleCovers=!1,this.isInfoCard=!1,this.resizeHandler=()=>{this.setTooltipTitle(this.authorsRef),this.setTooltipTitle(this.titleRef),this.setTooltipTitle(this.subtitleRef)},this.renderTitle=()=>{const e=this.titleHtmlTag||"div";return t(e,{class:"card-title",ref:s=>this.titleRef=s},this.cardTitle)},this.renderSubtitle=()=>t("span",{class:"card-subtitle",ref:e=>this.subtitleRef=e},this.cardSubtitle),this.renderOperaCard=()=>t(h,null,t("z-book-cover",{cover:this.cover,fallbackCover:this.fallbackCover,multiple:this.hasMultipleCovers,bordered:!0}),t("div",{class:"info-container"},this.authors&&t("span",{class:"authors-label",ref:e=>this.authorsRef=e},this.authors),this.renderTitle(),this.renderSubtitle(),t("div",{class:"tags-container"},t("slot",{name:"tags"})),t("div",{class:"volumes-label"},t("slot",{name:"volumes"})))),this.renderInfoCard=()=>t(h,{class:"info-card"},t("div",{class:"info-icon-container"},t("z-icon",{class:"info-icon",name:"link"})),t("div",{class:"info-container"},this.renderTitle(),this.renderSubtitle()))}setTooltipTitle(e){if(!e)return;const s=window.getComputedStyle(e),V=s.getPropertyValue("-webkit-line-clamp")!=="none";let p;if(V){const A=parseInt(s.lineHeight),P=parseInt(s.getPropertyValue("-webkit-line-clamp")),Z=A*P;p=e.scrollHeight>Z}else p=e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight;p?e.setAttribute("title",e.textContent.trim()):e.removeAttribute("title")}componentDidRender(){this.setTooltipTitle(this.authorsRef),this.setTooltipTitle(this.titleRef),this.setTooltipTitle(this.subtitleRef)}componentDidLoad(){window.addEventListener("resize",this.resizeHandler)}disconnectedCallback(){window.removeEventListener("resize",this.resizeHandler)}render(){return this.isInfoCard?this.renderInfoCard():this.renderOperaCard()}get hostElement(){return this}static get style(){return q}};F(W,[1,"z-result-card",{cardTitle:[1,"card-title"],cardSubtitle:[1,"card-subtitle"],authors:[1],cover:[1],fallbackCover:[1,"fallback-cover"],hasMultipleCovers:[4,"has-multiple-covers"],isInfoCard:[4,"is-info-card"],titleHtmlTag:[1,"title-html-tag"]}]);const v={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZResultCard",tagName:"z-result-card",customElement:!0,members:[{kind:"field",name:"cardTitle",type:"string",description:"The title of the card."},{kind:"field",name:"cardSubtitle",type:"string",description:"The subtitle of the card."},{kind:"field",name:"authors",type:"string",description:"The authors of the opera."},{kind:"field",name:"cover",type:"string",description:"The URL of the cover image of the opera."},{kind:"field",name:"fallbackCover",type:"string",description:"[optional] Fallback cover URL."},{kind:"field",name:"hasMultipleCovers",type:"boolean",description:"Whether to show a stack of covers to represent multiple books.",default:"false"},{kind:"field",name:"isInfoCard",type:"boolean",description:'Enables the "info" variant of the card.',default:"false"},{kind:"field",name:"titleHtmlTag",type:"string",description:"[optional] Set a specific heading level as html tag for the title."}],events:[],slots:[{name:"tags",description:"slot containing the descriptors for the opera variant"},{name:"volumes",description:"slot containing the volume count to be displayed in the opera variant"}]}],exports:[{kind:"js",name:"ZResultCard",declaration:{name:"ZResultCard",module:"src/components/z-result-card/index.tsx"}},{kind:"custom-element-definition",name:"z-result-card",declaration:{name:"ZResultCard",module:"src/components/z-result-card/index.tsx"}}]}]};D({...m()||{},...v,modules:[...(m()||{}).modules||[],...v.modules]});const Y={title:"ZResultCard",component:"z-result-card",argTypes:{cardTitle:{control:"text"},cardSubtitle:{control:"text"},authors:{control:"text"},cover:{control:"text"},fallbackCover:{control:"text"},hasMultipleCovers:{control:"boolean"},isInfoCard:{control:"boolean"}}},r={cardTitle:"Title",cardSubtitle:"Subtitle",authors:"John Doe",cover:"https://place.abh.ai/s3fs-public/placeholder/DSC_0199_400x400.JPG",fallbackCover:"https://staticmy.zanichelli.it/copertine/dashboard/Dashboard_Book_Placeholder.jpg",hasMultipleCovers:!1,isInfoCard:!1,titleHtmlTag:"h2"},l={args:{...r},render:e=>a`
    <z-result-card
      .cardTitle=${e.cardTitle}
      .cardSubtitle=${e.cardSubtitle}
      .authors=${e.authors}
      .cover=${e.cover}
      fallback-cover=${e.fallbackCover}
      .hasMultipleCovers=${e.hasMultipleCovers}
      .isInfoCard=${e.isInfoCard}
      .titleHtmlTag=${e.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `},i={args:{...r},render:e=>a`
    <z-result-card
      .cardTitle=${e.cardTitle}
      .cardSubtitle=${e.cardSubtitle}
      .authors=${e.authors}
      cover="https://statictestmy.zanichelli.it/catalogo/assets/small/m40003.9788808075475.jpg"
      fallback-cover=${e.fallbackCover}
      .hasMultipleCovers=${e.hasMultipleCovers}
      .isInfoCard=${e.isInfoCard}
      .titleHtmlTag=${e.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `},o={args:{...r,hasMultipleCovers:!0},render:e=>a`
    <z-result-card
      .cardTitle=${e.cardTitle}
      .cardSubtitle=${e.cardSubtitle}
      .authors=${e.authors}
      .cover=${e.cover}
      fallback-cover=${e.fallbackCover}
      .hasMultipleCovers=${e.hasMultipleCovers}
      .isInfoCard=${e.isInfoCard}
      .titleHtmlTag=${e.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `},n={args:{...r,hasMultipleCovers:!0},render:e=>a`
    <z-result-card
      .cardTitle=${e.cardTitle}
      .cardSubtitle=${e.cardSubtitle}
      .authors=${e.authors}
      cover=https://statictestmy.zanichelli.it/catalogo/assets/small/m40003.9788808075475.jpg
      fallback-cover=${e.fallbackCover}
      .hasMultipleCovers=${e.hasMultipleCovers}
      .isInfoCard=${e.isInfoCard}
      .titleHtmlTag=${e.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `},c={args:{...r,cardTitle:"This is a very long title that should wrap to the next line if it exceeds the width of the card, it goes on two rows for desktop devices and one row for mobile",cardSubtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis. Nunc volutpat viverra felis, eu iaculis ipsum tempus mattis. Phasellus euismod quam eget nisl pellentesque.",hasMultipleCovers:!0},render:e=>a`
    <z-result-card
      .cardTitle=${e.cardTitle}
      .cardSubtitle=${e.cardSubtitle}
      .authors=${e.authors}
      .cover=${e.cover}
      fallback-cover=${e.fallbackCover}
      .hasMultipleCovers=${e.hasMultipleCovers}
      .isInfoCard=${e.isInfoCard}
      .titleHtmlTag=${e.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `},d={args:{...r,author:void 0},render:e=>a`
    <z-result-card
      .cardTitle=${e.cardTitle}
      .cardSubtitle=${e.cardSubtitle}
      .cover=${e.cover}
      fallback-cover=${e.fallbackCover}
      .hasMultipleCovers=${e.hasMultipleCovers}
      .isInfoCard=${e.isInfoCard}
      .titleHtmlTag=${e.titleHtmlTag}
    />
  `},u={args:{...r,cardTitle:"Info Card Title",cardSubtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis.",isInfoCard:!0},render:e=>a`
    <z-result-card
      .cardTitle=${e.cardTitle}
      .cardSubtitle=${e.cardSubtitle}
      .authors=${e.authors}
      .cover=${e.cover}
      fallback-cover=${e.fallbackCover}
      .hasMultipleCovers=${e.hasMultipleCovers}
      .isInfoCard=${e.isInfoCard}
      .titleHtmlTag=${e.titleHtmlTag}
    />
  `};var f,g,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var C,$,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=($=i.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var k,x,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var S,z,M;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(M=(z=n.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var H,I,y;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(y=(I=c.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var E,R,L;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(L=(R=d.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var _,j,N;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(j=u.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const ee=["SingleCover","SingleCoverLateralSpaces","MultipleCovers","MultipleCoversLateralSpaces","LongTitleAndSubtitle","OnlyTitleAndSubtitle","InfoCard"];export{u as InfoCard,c as LongTitleAndSubtitle,o as MultipleCovers,n as MultipleCoversLateralSpaces,d as OnlyTitleAndSubtitle,l as SingleCover,i as SingleCoverLateralSpaces,ee as __namedExportsOrder,Y as default};
