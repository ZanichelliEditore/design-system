import{x as s}from"./lit-element-DGXdXVoE.js";import"./index-BfGcbr3R.js";import{s as D,g as m}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as O,H as q,h as t,a as h}from"./index-BZ0rSFNp.js";import{d as v}from"./placeholder-cover-BiuDk66X.js";import"./index-DrFu-skq.js";const U=":host{display:flex;overflow:hidden;min-width:0;height:calc(174px - var(--space-unit) * 2);max-height:calc(174px - var(--space-unit) * 2);padding:var(--space-unit);border:var(--border-size-medium) solid var(--color-surface02);border-radius:var(--border-size-large);cursor:pointer;font-family:var(--font-family-sans)}:host(:focus:focus-visible){z-index:1;box-shadow:var(--shadow-focus-primary);outline:none}.z-cover-container{position:relative;display:flex;width:119px;height:158px;align-items:center;justify-items:center}.z-cover-stack{width:100%;height:100%}.z-cover-shadow,.z-cover-img{width:117px;height:156px}.z-cover-container.has-multiple .z-cover-shadow,.z-cover-container.has-multiple .z-cover-img{width:105px;height:140px}.z-cover-shadow{position:absolute;z-index:1;background-color:var(--color-white)}.z-shadow-1{z-index:0;top:var(--space-unit);right:6px;border:var(--border-size-small) solid black}.z-shadow-2{z-index:0;top:calc(var(--space-unit) * 2);right:12px;border:var(--border-size-small) solid black}.z-cover-img{position:absolute;z-index:0;top:0;right:0;display:flex;align-items:start;justify-content:center;border:var(--border-size-small) solid black;background-color:var(--color-white);object-fit:cover;object-position:left}.z-cover-img>img{max-width:100%;max-height:100%}.z-cover-container.has-multiple .z-cover-img{left:12px}:host(.info-card:focus:focus-visible){z-index:1;box-shadow:var(--shadow-focus-primary);outline:none}.info-container{display:flex;overflow:hidden;min-width:0;flex:1;flex-direction:column;padding-left:calc(var(--space-unit) * 2)}.authors-label{overflow:hidden;color:var(--color-default-text);font-size:var(--font-size-2);font-weight:var(--font-rg);text-overflow:ellipsis;white-space:nowrap}.card-title{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;font-size:var(--font-size-3);font-weight:var(--font-bd);-webkit-line-clamp:2;line-clamp:2;line-height:1.5;word-break:break-word}.card-title>*{all:unset}.card-subtitle{overflow:hidden;color:var(--color-default-text);text-overflow:ellipsis;white-space:nowrap}.card-subtitle.info-subtitle{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;line-height:1.2;white-space:normal;word-break:break-word}.tags-container{display:flex;max-width:100%;flex-wrap:wrap;margin-top:calc(var(--space-unit) * 2);gap:var(--space-unit)}.volumes-label{display:flex;height:auto;flex-direction:column;margin-top:auto;color:var(--color-default-text);font-size:var(--font-size-1)}:host(.info-card){display:flex;height:calc(76px - var(--space-unit) * 2);max-height:calc(76px - var(--space-unit) * 2)}.info-icon-column{display:flex;width:50px;height:100%;align-items:center;justify-content:center}.info-icon-container{display:flex;width:34px;height:34px;align-items:center;justify-content:center;margin-bottom:calc(var(--space-unit) * 3);background-color:var(--gray50);border-radius:var(--border-size-large)}.card-title.info-title{display:-webkit-box;overflow:hidden;min-width:0;max-width:100%;max-height:2.4em;margin-top:0;margin-bottom:4px;-webkit-box-orient:vertical;font-size:var(--font-size-3);font-weight:var(--font-bd);-webkit-line-clamp:1;line-clamp:1;line-height:1.2;word-break:break-word}.info-icon{width:18px;height:18px;color:var(--color-default-text)}@media (max-width: 768px){.card-title{display:block;overflow:hidden;line-height:normal;text-overflow:ellipsis;white-space:nowrap}}",J=class extends q{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.hasMultipleCovers=!1,this.isInfoCard=!1,this.resizeHandler=()=>{this.setTooltipTitle(this.authorsRef),this.setTooltipTitle(this.titleRef),this.setTooltipTitle(this.subtitleRef)},this.renderOperaCard=()=>{const e=this.titleHtmlTag?`<${this.titleHtmlTag}>${this.cardTitle}</${this.titleHtmlTag}>`:this.cardTitle;return t(h,{tabIndex:0},t("div",{class:`z-cover-container ${this.hasMultipleCovers?"has-multiple":""}`},t("div",{class:"z-cover-stack"},this.hasMultipleCovers&&t("div",null,t("div",{class:"z-cover-shadow z-shadow-2"}),t("div",{class:"z-cover-shadow z-shadow-1"})),t("div",{class:"z-cover-img"},t("img",{src:this.cover||this.fallbackCover||v,alt:"",onError:()=>{this.fallbackCover?this.cover=this.fallbackCover:this.cover=v}})))),t("div",{class:"info-container"},this.authors&&t("span",{class:"authors-label",ref:a=>this.authorsRef=a},this.authors),t("div",{class:"card-title",ref:a=>this.titleRef=a,innerHTML:e}),t("span",{class:"card-subtitle",ref:a=>this.subtitleRef=a},this.cardSubtitle),t("div",{class:"tags-container"},t("slot",{name:"tags"})),t("div",{class:"volumes-label"},t("slot",{name:"volumes"}))))},this.renderInfoCard=()=>t(h,{tabIndex:0,class:"info-card"},t("div",{class:"info-icon-column"},t("div",{class:"info-icon-container"},t("z-icon",{class:"info-icon",name:"link",width:18,height:18}))),t("div",{class:"info-container"},t("span",{class:"card-title info-title",ref:e=>this.titleRef=e},this.cardTitle),t("span",{class:"card-subtitle info-subtitle",ref:e=>this.subtitleRef=e},this.cardSubtitle)))}setTooltipTitle(e){if(!e)return;const a=window.getComputedStyle(e),A=a.getPropertyValue("-webkit-line-clamp")!=="none";let p;if(A){const F=parseInt(a.lineHeight),P=parseInt(a.getPropertyValue("-webkit-line-clamp")),Z=F*P;p=e.scrollHeight>Z}else p=e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight;p?e.setAttribute("title",e.textContent.trim()):e.removeAttribute("title")}componentDidRender(){this.setTooltipTitle(this.authorsRef),this.setTooltipTitle(this.titleRef),this.setTooltipTitle(this.subtitleRef)}componentDidLoad(){window.addEventListener("resize",this.resizeHandler)}disconnectedCallback(){window.removeEventListener("resize",this.resizeHandler)}render(){return this.isInfoCard?this.renderInfoCard():this.renderOperaCard()}get hostElement(){return this}static get style(){return U}};O(J,[1,"z-result-card",{cardTitle:[1,"card-title"],cardSubtitle:[1,"card-subtitle"],authors:[1],cover:[1],fallbackCover:[1,"fallback-cover"],hasMultipleCovers:[4,"has-multiple-covers"],isInfoCard:[4,"is-info-card"],titleHtmlTag:[1,"title-html-tag"]}]);const f={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZResultCard",tagName:"z-result-card",customElement:!0,members:[{kind:"field",name:"cardTitle",type:"string",description:"The title of the card."},{kind:"field",name:"cardSubtitle",type:"string",description:"The subtitle of the card."},{kind:"field",name:"authors",type:"string",description:"The authors of the opera."},{kind:"field",name:"cover",type:"string",description:`The URL of the cover image.
This is used to display the cover image of the opera.`},{kind:"field",name:"fallbackCover",type:"string",description:"[optional] Fallback cover URL"},{kind:"field",name:"hasMultipleCovers",type:"boolean",description:`Indicates whether the card has multiple covers.
This is used to apply specific styles when there are multiple covers.`,default:"false"},{kind:"field",name:"isInfoCard",type:"boolean",description:`Indicates whether the card is an info page.
This can be used to apply specific styles or behaviors for info pages.`,default:"false"},{kind:"field",name:"titleHtmlTag",type:"string",description:`[optional]
Use for insert heading when needed.`}],events:[]}],exports:[{kind:"js",name:"ZResultCard",declaration:{name:"ZResultCard",module:"src/components/result-card/z-result-card/index.tsx"}},{kind:"custom-element-definition",name:"z-result-card",declaration:{name:"ZResultCard",module:"src/components/result-card/z-result-card/index.tsx"}}]}]};D({...m()||{},...f,modules:[...(m()||{}).modules||[],...f.modules]});const ee={title:"ZResultCard",component:"z-result-card",argTypes:{cardTitle:{control:"text"},cardSubtitle:{control:"text"},authors:{control:"text"},cover:{control:"text"},fallbackCover:{control:"text"},hasMultipleCovers:{control:"boolean"},isInfoCard:{control:"boolean"}}},r={cardTitle:"Title",cardSubtitle:"Subtitle",authors:"John Doe",cover:"https://place.abh.ai/s3fs-public/placeholder/DSC_0199_400x400.JPG",fallbackCover:"https://staticmy.zanichelli.it/copertine/dashboard/Dashboard_Book_Placeholder.jpg",hasMultipleCovers:!1,isInfoCard:!1,titleHtmlTag:"h2"},i={args:{...r},render:e=>s`
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
  `},l={args:{...r},render:e=>s`
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
  `},o={args:{...r,hasMultipleCovers:!0},render:e=>s`
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
  `},n={args:{...r,hasMultipleCovers:!0},render:e=>s`
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
  `},c={args:{...r,cardTitle:"This is a very long title that should wrap to the next line if it exceeds the width of the card, it goes on two rows for desktop devices and one row for mobile",cardSubtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis. Nunc volutpat viverra felis, eu iaculis ipsum tempus mattis. Phasellus euismod quam eget nisl pellentesque.",hasMultipleCovers:!0},render:e=>s`
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
  `},d={args:{...r,author:void 0},render:e=>s`
    <z-result-card
      .cardTitle=${e.cardTitle}
      .cardSubtitle=${e.cardSubtitle}
      .cover=${e.cover}
      fallback-cover=${e.fallbackCover}
      .hasMultipleCovers=${e.hasMultipleCovers}
      .isInfoCard=${e.isInfoCard}
      .titleHtmlTag=${e.titleHtmlTag}
    />
  `},u={args:{...r,cardTitle:"Info Card Title",cardSubtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis.",isInfoCard:!0},render:e=>s`
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
  `};var g,b,C;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var $,T,x;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var w,z,k;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(z=o.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var S,y,M;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(M=(y=n.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var I,H,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(H=c.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var R,L,j;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(j=(L=d.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var _,N,V;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const te=["SingleCover","SingleCoverLateralSpaces","MultipleCovers","MultipleCoversLateralSpaces","LongTitleAndSubtitle","OnlyTitleAndSubtitle","InfoCard"];export{u as InfoCard,c as LongTitleAndSubtitle,o as MultipleCovers,n as MultipleCoversLateralSpaces,d as OnlyTitleAndSubtitle,i as SingleCover,l as SingleCoverLateralSpaces,te as __namedExportsOrder,ee as default};
