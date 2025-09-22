import"./lit-element--ufgQf_M.js";import{x as s}from"./lit-html-rc9TYZL2.js";import"./index-DZahS5Lv.js";import{s as L,g as u}from"./chunk-L4EGOTBX-BzYVsoCE.js";import"./entry-preview-uRqU0LK7.js";import{d as _,H as j,h as t,a as p}from"./index-BZ0rSFNp.js";import"./index-DrFu-skq.js";const N=":host{display:flex;overflow:hidden;min-width:0;height:calc(174px - var(--space-unit) * 2);max-height:calc(174px - var(--space-unit) * 2);padding:var(--space-unit);border:var(--border-size-medium) solid var(--color-surface02);border-radius:var(--border-size-large);cursor:pointer;font-family:var(--font-family-sans)}:host(:focus:focus-visible){z-index:1;box-shadow:var(--shadow-focus-primary);outline:none}:host(.info-card:focus:focus-visible){z-index:1;box-shadow:var(--shadow-focus-primary);outline:none}.info-container{display:flex;overflow:hidden;min-width:0;flex:1;flex-direction:column;padding-left:calc(var(--space-unit) * 2)}.authors-label{overflow:hidden;color:var(--color-default-text);font-size:var(--font-size-2);font-weight:var(--font-rg);text-overflow:ellipsis;white-space:nowrap}.card-title{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;font-size:var(--font-size-3);font-weight:var(--font-bd);-webkit-line-clamp:2;line-clamp:2;line-height:1.5;word-break:break-word}.card-subtitle{overflow:hidden;color:var(--color-default-text);text-overflow:ellipsis;white-space:nowrap}.card-subtitle.info-subtitle{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;line-height:1.2;white-space:normal;word-break:break-word}.tags-container{display:flex;max-width:100%;flex-wrap:wrap;margin-top:calc(var(--space-unit) * 2);gap:var(--space-unit)}.volumes-label{display:flex;height:auto;flex-direction:column;margin-top:auto;color:var(--color-default-text);font-size:var(--font-size-1)}:host(.info-card){display:flex;height:calc(76px - var(--space-unit) * 2);max-height:calc(76px - var(--space-unit) * 2)}.info-icon-column{display:flex;width:50px;height:100%;align-items:center;justify-content:center}.info-icon-container{display:flex;width:34px;height:34px;align-items:center;justify-content:center;margin-bottom:calc(var(--space-unit) * 3);background-color:var(--gray50);border-radius:var(--border-size-large)}.card-title.info-title{display:-webkit-box;overflow:hidden;min-width:0;max-width:100%;max-height:2.4em;margin-top:0;margin-bottom:4px;-webkit-box-orient:vertical;font-size:var(--font-size-3);font-weight:var(--font-bd);-webkit-line-clamp:1;line-clamp:1;line-height:1.2;word-break:break-word}.info-icon{width:18px;height:18px;color:var(--color-default-text)}@media (max-width: 768px){.card-title{display:block;overflow:hidden;line-height:normal;text-overflow:ellipsis;white-space:nowrap}}",V=".z-cover-container{position:relative;display:flex;width:119px;height:158px;align-items:center;justify-items:center}.z-cover-stack{width:100%;height:100%}.z-cover-shadow,.z-cover-img{width:117px;min-width:117px;max-width:117px;height:156px;min-height:156px;max-height:156px}.z-cover-container.has-multiple .z-cover-shadow,.z-cover-container.has-multiple .z-cover-img{width:105px;min-width:105px;max-width:105px;height:140px;min-height:140px;max-height:140px}.z-cover-shadow{position:absolute;z-index:1;background-color:var(--color-white)}.z-shadow-1{z-index:1;top:var(--space-unit);right:6px;border:var(--border-size-small) solid black}.z-shadow-2{z-index:0;top:calc(var(--space-unit) * 2);right:12px;border:var(--border-size-small) solid black}.z-cover-img{position:absolute;z-index:2;top:0;right:0;border:var(--border-size-small) solid black;object-fit:cover;object-position:left}.z-cover-container.has-multiple .z-cover-img{left:12px}",A=class extends j{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.hasMultipleCovers=!1,this.isInfoCard=!1,this.resizeHandler=()=>{this.setTooltipTitle(this.authorsRef),this.setTooltipTitle(this.titleRef),this.setTooltipTitle(this.subtitleRef)},this.renderOperaCard=()=>t(p,{tabIndex:0},t("div",{class:`z-cover-container ${this.hasMultipleCovers?"has-multiple":""}`},t("div",{class:"z-cover-stack"},this.hasMultipleCovers&&t("div",null,t("div",{class:"z-cover-shadow z-shadow-2"}),t("div",{class:"z-cover-shadow z-shadow-1"})),t("img",{src:this.cover,alt:"Book Cover",class:"z-cover-img"}))),t("div",{class:"info-container"},this.authors&&t("span",{class:"authors-label",ref:e=>this.authorsRef=e},this.authors),t("span",{class:"card-title",ref:e=>this.titleRef=e},this.cardTitle),t("span",{class:"card-subtitle",ref:e=>this.subtitleRef=e},this.cardSubtitle),t("div",{class:"tags-container"},t("slot",{name:"tags"})),t("div",{class:"volumes-label"},t("slot",{name:"volumes"})))),this.renderInfoCard=()=>t(p,{tabIndex:0,class:"info-card"},t("div",{class:"info-icon-column"},t("div",{class:"info-icon-container"},t("z-icon",{class:"info-icon",name:"link",width:18,height:18}))),t("div",{class:"info-container"},t("span",{class:"card-title info-title",ref:e=>this.titleRef=e},this.cardTitle),t("span",{class:"card-subtitle info-subtitle",ref:e=>this.subtitleRef=e},this.cardSubtitle)))}setTooltipTitle(e){if(!e)return;const d=window.getComputedStyle(e),M=d.getPropertyValue("-webkit-line-clamp")!=="none";let c;if(M){const R=parseInt(d.lineHeight),E=parseInt(d.getPropertyValue("-webkit-line-clamp")),H=R*E;c=e.scrollHeight>H}else c=e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight;c?e.setAttribute("title",e.textContent.trim()):e.removeAttribute("title")}componentDidRender(){this.setTooltipTitle(this.authorsRef),this.setTooltipTitle(this.titleRef),this.setTooltipTitle(this.subtitleRef)}componentDidLoad(){window.addEventListener("resize",this.resizeHandler)}disconnectedCallback(){window.removeEventListener("resize",this.resizeHandler)}render(){return this.isInfoCard?this.renderInfoCard():this.renderOperaCard()}get hostElement(){return this}static get style(){return N+V}};_(A,[1,"z-result-card",{cardTitle:[1,"card-title"],cardSubtitle:[1,"card-subtitle"],authors:[1],cover:[1],hasMultipleCovers:[4,"has-multiple-covers"],isInfoCard:[4,"is-info-card"]}]);const h={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZResultCard",tagName:"z-result-card",customElement:!0,members:[{kind:"field",name:"cardTitle",type:"string",description:"The title of the card."},{kind:"field",name:"cardSubtitle",type:"string",description:"The subtitle of the card."},{kind:"field",name:"authors",type:"string",description:"The authors of the opera."},{kind:"field",name:"cover",type:"string",description:`The URL of the cover image.
This is used to display the cover image of the opera.`},{kind:"field",name:"hasMultipleCovers",type:"boolean",description:`Indicates whether the card has multiple covers.
This is used to apply specific styles when there are multiple covers.`,default:"false"},{kind:"field",name:"isInfoCard",type:"boolean",description:`Indicates whether the card is an info page.
This can be used to apply specific styles or behaviors for info pages.`,default:"false"}],events:[]}],exports:[{kind:"js",name:"ZResultCard",declaration:{name:"ZResultCard",module:"src/components/result-card/z-result-card/index.tsx"}},{kind:"custom-element-definition",name:"z-result-card",declaration:{name:"ZResultCard",module:"src/components/result-card/z-result-card/index.tsx"}}]}]};L({...u()||{},...h,modules:[...(u()||{}).modules||[],...h.modules]});const W={title:"ZResultCard",component:"z-result-card",argTypes:{cardTitle:{control:"text"},cardSubtitle:{control:"text"},authors:{control:"text"},cover:{control:"text"},hasMultipleCovers:{control:"boolean"},isInfoCard:{control:"boolean"}}},i={cardTitle:"Title",cardSubtitle:"Subtitle",authors:"John Doe",cover:"https://place.abh.ai/s3fs-public/placeholder/DSC_0199_400x400.JPG",hasMultipleCovers:!1,isInfoCard:!1},a={args:{...i},render:e=>s`
    <z-result-card
      .cardTitle=${e.cardTitle}
      .cardSubtitle=${e.cardSubtitle}
      .authors=${e.authors}
      .cover=${e.cover}
      .hasMultipleCovers=${e.hasMultipleCovers}
      .isInfoCard=${e.isInfoCard}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `},r={args:{...i,hasMultipleCovers:!0},render:e=>s`
    <z-result-card
      .cardTitle=${e.cardTitle}
      .cardSubtitle=${e.cardSubtitle}
      .authors=${e.authors}
      .cover=${e.cover}
      .hasMultipleCovers=${e.hasMultipleCovers}
      .isInfoCard=${e.isInfoCard}
    >
      <span slot="tags">Example tag</span>
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `},o={args:{...i,cardTitle:"This is a very long title that should wrap to the next line if it exceeds the width of the card, it goes on two rows for desktop devices and one row for mobile",cardSubtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis. Nunc volutpat viverra felis, eu iaculis ipsum tempus mattis. Phasellus euismod quam eget nisl pellentesque.",hasMultipleCovers:!0},render:e=>s`
    <z-result-card
      .cardTitle=${e.cardTitle}
      .cardSubtitle=${e.cardSubtitle}
      .authors=${e.authors}
      .cover=${e.cover}
      .hasMultipleCovers=${e.hasMultipleCovers}
      .isInfoCard=${e.isInfoCard}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `},l={args:{...i,author:void 0},render:e=>s`
    <z-result-card
      .cardTitle=${e.cardTitle}
      .cardSubtitle=${e.cardSubtitle}
      .cover=${e.cover}
      .hasMultipleCovers=${e.hasMultipleCovers}
      .isInfoCard=${e.isInfoCard}
    />
  `},n={args:{...i,cardTitle:"Info Card Title",cardSubtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis.",isInfoCard:!0},render:e=>s`
    <z-result-card
      .cardTitle=${e.cardTitle}
      .cardSubtitle=${e.cardSubtitle}
      .authors=${e.authors}
      .cover=${e.cover}
      .hasMultipleCovers=${e.hasMultipleCovers}
      .isInfoCard=${e.isInfoCard}
    />
  `};var m,v,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...args
  },
  render: args => html\`
    <z-result-card
      .cardTitle=\${args.cardTitle}
      .cardSubtitle=\${args.cardSubtitle}
      .authors=\${args.authors}
      .cover=\${args.cover}
      .hasMultipleCovers=\${args.hasMultipleCovers}
      .isInfoCard=\${args.isInfoCard}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  \`
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,b,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      .hasMultipleCovers=\${args.hasMultipleCovers}
      .isInfoCard=\${args.isInfoCard}
    >
      <span slot="tags">Example tag</span>
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  \`
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,C,z;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      .hasMultipleCovers=\${args.hasMultipleCovers}
      .isInfoCard=\${args.isInfoCard}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  \`
}`,...(z=(C=o.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var T,$,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...args,
    author: undefined
  },
  render: args => html\`
    <z-result-card
      .cardTitle=\${args.cardTitle}
      .cardSubtitle=\${args.cardSubtitle}
      .cover=\${args.cover}
      .hasMultipleCovers=\${args.hasMultipleCovers}
      .isInfoCard=\${args.isInfoCard}
    />
  \`
}`,...(S=($=l.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var y,k,I;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      .hasMultipleCovers=\${args.hasMultipleCovers}
      .isInfoCard=\${args.isInfoCard}
    />
  \`
}`,...(I=(k=n.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const B=["SingleCover","MultipleCovers","LongTitleAndSubtitle","OnlyTitleAndSubtitle","InfoCard"];export{n as InfoCard,o as LongTitleAndSubtitle,r as MultipleCovers,l as OnlyTitleAndSubtitle,a as SingleCover,B as __namedExportsOrder,W as default};
