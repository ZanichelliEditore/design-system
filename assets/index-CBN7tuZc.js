import"./index-BBieR392.js";import"./index-yOVBEWgS.js";import"./index-BthCA59f.js";import"./index-RXeQJHrP.js";import"./index-Br9s0Xfc.js";import"./index-BEj-2O7q.js";import"./index-CPdUOJpP.js";import{s as y,g as d}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as z,H as S,c,h as t,a as k}from"./index-8h8udRzn.js";import{C as w,B as C,e as m,L as u}from"./index-CcuDdGyi.js";import{r as x,g as p,h as I}from"./utils-B_2tKo6T.js";const R=':host{--z-searchbar-tag-text-color:var(--color-primary03);--z-searchbar-tag-bg:var(--color-hover-primary);z-index:15;display:flex;column-gap:calc(var(--space-unit) * 2);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host,*{box-sizing:border-box}.input-container{position:relative;display:flex;width:100%;flex-direction:column}.results-wrapper{position:absolute;top:calc(100% - 1px);left:0;width:100%;padding:calc(var(--space-unit) / 4);border:var(--border-size-small) solid var(--color-surface03);border-top:none;background:var(--color-surface01)}.results{overflow:auto;max-height:var(--z-searchbar-results-height, 540px);padding:calc(var(--space-unit) / 2) calc(var(--space-unit) * 1.5);scrollbar-color:var(--color-primary01) transparent}.results::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.results::-webkit-scrollbar-track{background-color:transparent}.results::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.results .category-heading{display:block;font-size:var(--font-size-2);font-weight:var(--font-rg);line-height:var(--font-size-3)}.results .category-heading>*{display:block}.results .category-heading>.category{color:var(--color-text05);font-style:italic}.results .category-heading>.subcategory{margin-top:var(--space-unit);color:var(--color-default-text);text-transform:uppercase}.results z-list-element{display:block}.results z-list-element>.list-element{display:flex;justify-content:space-between}.results z-list-element>.list-element>z-tag{border:1px solid var(--gray800);font-size:var(--font-size-1);font-weight:var(--font-sb);--z-tag-bg:var(--z-searchbar-tag-bg);--z-tag-text-color:var(--z-searchbar-tag-text-color)}.results .item{--z-icon-height:12px;--z-icon-width:12px;display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;color:var(--color-default-text);column-gap:calc(var(--space-unit) * 1.5);fill:var(--color-default-icon);font-size:var(--font-size-2);line-height:var(--font-size-3)}.results .item.ellipsis>.item-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.results .item>.item-label mark{background:var(--color-primary03)}.results .item.has-category{padding-left:calc(var(--space-unit) * 3)}.results .item.item-search{--z-icon-height:16px;--z-icon-width:16px}.results .item-show-all{text-align:center}.results .item-no-results{display:block;font-size:var(--font-size-2);font-style:italic;line-height:var(--font-size-5)}.results .item-no-results>ul{padding-left:calc(var(--space-unit) * 2);margin:var(--space-unit)}@media (min-width: 768px){.results .category-heading{font-size:var(--font-size-3);line-height:var(--font-size-6)}.results .item{font-size:var(--font-size-3);line-height:var(--font-size-6)}.results .item.item-search{--z-icon-height:18px;--z-icon-width:18px}.results .item.ellipsis>.item-label{height:24px}}@media (min-width: 1152px){.results .item{cursor:pointer}.results .item-no-results{cursor:default;font-size:var(--font-size-3);line-height:var(--font-size-6)}}:host([size="small"]) .results :is(.item,.category-heading),:host([size="x-small"]) .results :is(.item,.category-heading){font-size:var(--font-size-2)}:host([size="small"]) .results .item:not(.has-category),:host([size="x-small"]) .results .item:not(.has-category){--z-icon-height:16px;--z-icon-width:16px}:host([size="small"])::part(list-item-container){min-height:calc(var(--space-unit) * 4.5);padding:0}:host([size="x-small"])::part(list-item-container){min-height:calc(var(--space-unit) * 4);padding:0}',L=class extends S{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.searchSubmit=c(this,"searchSubmit",7),this.searchTyping=c(this,"searchTyping",7),this.searchItemClick=c(this,"searchItemClick",7),this.resultsItemsList=null,this.htmlid=`searchbar-${x()}`,this.preventSubmit=!1,this.value=void 0,this.placeholder=void 0,this.autocomplete=!1,this.autocompleteMinChars=3,this.resultsCount=void 0,this.resultsEllipsis=!0,this.searchHelperLabel="Cerca {searchString}",this.resultsItems=void 0,this.sortResultsItems=!1,this.showSearchButton=!1,this.searchButtonIconOnly=!1,this.size=w.BIG,this.variant=C.PRIMARY,this.searchString=this.value,this.currResultsCount=0,this.showResults=!1,this.isMobile=!1}emitSearchSubmit(){this.searchSubmit.emit(this.inputRef.value)}emitSearchTyping(e){this.searchTyping.emit(e)}emitSearchItemClick(e){this.searchItemClick.emit(e)}watchItems(){this.resultsItemsList=this.getResultsItemsList()}watchResultsCount(){this.currResultsCount=this.resultsCount}watchValue(){this.searchString=this.value}watchSearchString(){this.emitSearchTyping(this.searchString),this.searchString||(this.currResultsCount=this.resultsCount)}disconnectedCallback(){this.resizeObserver.disconnect()}componentDidLoad(){this.resizeObserver=new ResizeObserver(()=>{p()===m.MOBILE&&!this.isMobile&&(this.isMobile=!0),p()!==m.MOBILE&&this.isMobile&&(this.isMobile=!1)}),this.resizeObserver.observe(this.element)}componentWillLoad(){this.resultsItemsList=this.getResultsItemsList(),this.currResultsCount=this.resultsCount}getResultsItemsList(){return typeof this.resultsItems=="string"?JSON.parse(this.resultsItems):this.resultsItems}getGroupedItems(e){const s={};return e.forEach(i=>{var r;const a=`${i==null?void 0:i.category}${i==null?void 0:i.subcategory}`;s[a]=(r=s[a])!==null&&r!==void 0?r:{category:i==null?void 0:i.category,subcategory:i==null?void 0:i.subcategory,items:[]},s[a].items.push(i)}),this.sortResultsItems?Object.keys(s).sort().reduce((i,r)=>(i[r]=Object.assign(Object.assign({},s[r]),{items:s[r].items.sort((a,o)=>{const n=a.label.toUpperCase(),l=o.label.toUpperCase();return n<l?-1:n>l?1:0})}),i),{}):s}checkResultsCount(e){return!this.currResultsCount||e<this.currResultsCount}handleStopTyping(e){e.stopPropagation(),this.searchString=e.detail.value}handleSubmit(){this.preventSubmit||this.emitSearchSubmit()}handleOutsideClick(e){const s=e.composedPath(),i=s.find(r=>r.nodeName==="Z-SEARCHBAR");if(!i||i.htmlid!==this.htmlid){this.showResults=!1;return}if(s.find(r=>{var a;return(r==null?void 0:r.nodeName)==="Z-INPUT"||((a=r==null?void 0:r.classList)===null||a===void 0?void 0:a.contains("results"))})){this.showResults=!0;return}this.showResults=!1}renderInput(){return t("z-input",{ref:e=>{this.inputRef=e},message:!1,placeholder:this.placeholder,onStopTyping:e=>this.handleStopTyping(e),onKeyUp:e=>I(e,()=>this.handleSubmit()),value:this.value,ariaLabel:this.placeholder,size:this.size})}renderButton(){if(!this.showSearchButton)return null;const e=this.searchButtonIconOnly?{icon:"search"}:null,s=this.searchButtonIconOnly?"":"CERCA",i=Object.assign({disabled:this.preventSubmit,variant:this.variant,size:this.size,onClick:()=>this.handleSubmit()},e);return t("z-button",Object.assign({},i),s)}renderResults(){return!this.showResults||!this.autocomplete||!this.searchString||this.searchString.length<this.autocompleteMinChars||!this.resultsItemsList?null:t("div",{class:"results-wrapper"},t("div",{class:"results"},this.renderResultsList()))}renderResultsList(){var e,s;return this.preventSubmit&&!(!((e=this.resultsItemsList)===null||e===void 0)&&e.length)?t("span",{class:"item item-no-results"},"Non abbiamo trovato risultati per ",t("b",null,this.searchString),t("br",null),t("br",null),"Cosa puoi fare?",t("ul",null,t("li",null,"Verificare di aver scritto bene"),t("li",null,"Provare a cercare un'altra parola"),t("li",null,"Provare a cercare qualcosa di più generico"))):t("z-list",{role:"listbox",id:`list-${this.htmlid}`},this.renderSearchHelper(!!(!((s=this.resultsItemsList)===null||s===void 0)&&s.length)),this.renderItems(),this.renderShowAllResults())}renderItems(){var e;if(!(!((e=this.resultsItemsList)===null||e===void 0)&&e.length))return[];const s=this.getGroupedItems(this.resultsItemsList),i=[];let r=0;return Object.values(s).forEach((a,o,n)=>{if(this.checkResultsCount(r)){const l=[];a.items.forEach((b,h,f)=>{if(this.checkResultsCount(r)){const v=o===n.length-1&&h===f.length-1;l.push(this.renderItem(b,h,!v))}r++}),l.length&&i.push(t("z-list-group",{"divider-type":u.ELEMENT},this.renderItemCategory(a),l))}}),i}renderItem(e,s,i){return t("z-list-element",{id:`list-item-${this.htmlid}-${s}`,role:"option",tabindex:0,dividerType:i?u.ELEMENT:void 0,clickable:!0,onClickItem:()=>this.emitSearchItemClick(e)},t("div",{class:"list-element"},t("span",{class:{item:!0,ellipsis:this.resultsEllipsis,"has-category":!!e.category}},(e==null?void 0:e.icon)&&t("z-icon",{class:"item-icon",name:e.icon}),t("span",{class:"item-label",title:e.label,innerHTML:this.renderItemLabel(e.label)})),(e==null?void 0:e.tag)&&t("z-tag",{icon:e.tag.icon},this.isMobile?"":e.tag.text)))}renderItemLabel(e){return this.searchString?e.replace(new RegExp(this.searchString.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gmi"),s=>`<mark>${s}</mark>`):e}renderItemCategory(e){return e!=null&&e.category?t("span",{class:"category-heading",slot:"header-title"},t("span",{class:"category"},e.category),(e==null?void 0:e.subcategory)&&t("span",{class:"subcategory"},e.subcategory)):null}renderSearchHelper(e=!0){return!this.autocomplete||this.preventSubmit||!this.searchString?null:t("z-list-element",{role:"option",tabindex:0,dividerType:e?u.ELEMENT:void 0,clickable:!0,id:`list-item-${this.htmlid}-search`,onClickItem:()=>this.emitSearchSubmit()},t("span",{class:"item item-search"},t("z-icon",{class:"search-icon",name:"left-magnifying-glass"}),t("span",{class:"item-label",innerHTML:this.searchHelperLabel.replace("{searchString}",`<mark>${this.searchString}</mark>`)})))}renderShowAllResults(){var e,s;return!this.currResultsCount||!this.searchString||!(!((e=this.resultsItemsList)===null||e===void 0)&&e.length)||this.currResultsCount>=((s=this.resultsItemsList)===null||s===void 0?void 0:s.length)?null:t("z-list-element",{role:"option",tabindex:0,clickable:!0,id:`list-item-${this.htmlid}-show-all`,onClickItem:()=>this.currResultsCount=0,color:"color-primary01"},t("div",{class:"item-show-all"},"Vedi tutti i risultati"))}render(){return t(k,{key:"c29fdee62c99bbd8e60449e646df5c9b31b850f9",onFocus:()=>this.showResults=!0,onClick:e=>this.handleOutsideClick(e),class:{"has-submit":this.showSearchButton,"has-results":this.autocomplete}},t("div",{key:"d23e421706db0d46bfbf3877a472e38b34e0a476",class:"input-container"},this.renderInput(),this.renderResults()),this.renderButton())}get element(){return this}static get watchers(){return{resultsItems:["watchItems"],resultsCount:["watchResultsCount"],value:["watchValue"],searchString:["watchSearchString"]}}static get style(){return R}};z(L,[1,"z-searchbar",{htmlid:[513],preventSubmit:[4,"prevent-submit"],value:[1],placeholder:[1],autocomplete:[4],autocompleteMinChars:[2,"autocomplete-min-chars"],resultsCount:[2,"results-count"],resultsEllipsis:[4,"results-ellipsis"],searchHelperLabel:[1,"search-helper-label"],resultsItems:[1,"results-items"],sortResultsItems:[4,"sort-results-items"],showSearchButton:[4,"show-search-button"],searchButtonIconOnly:[4,"search-button-icon-only"],size:[8],variant:[8],searchString:[32],currResultsCount:[32],showResults:[32],isMobile:[32]},[[4,"click","handleOutsideClick"]],{resultsItems:["watchItems"],resultsCount:["watchResultsCount"],value:["watchValue"],searchString:["watchSearchString"]}]);const g={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZSearchbar",tagName:"z-searchbar",customElement:!0,members:[{kind:"field",name:"htmlid",type:"string",description:"the id of the searchbar element",default:"`searchbar-${randomId()}`"},{kind:"field",name:"preventSubmit",type:"boolean",description:"Prevent submit action",default:"false"},{kind:"field",name:"value",type:"string",description:"Input search string"},{kind:"field",name:"placeholder",type:"string",description:"Search input placeholder"},{kind:"field",name:"autocomplete",type:"boolean",description:"Show autocomplete results",default:"false"},{kind:"field",name:"autocompleteMinChars",type:"number",description:"Minimun number of characters to dispatch typing event",default:"3"},{kind:"field",name:"resultsCount",type:"number",description:"Number of results shown - default all"},{kind:"field",name:"resultsEllipsis",type:"boolean",description:"Truncate results to single row",default:"true"},{kind:"field",name:"searchHelperLabel",type:"string",description:"Search helper text",default:'"Cerca {searchString}"'},{kind:"field",name:"resultsItems",type:"string",description:"Autocomplete results items"},{kind:"field",name:"sortResultsItems",type:"boolean",description:"Sort autocomplete results items",default:"false"},{kind:"field",name:"showSearchButton",type:"boolean",description:"Show submit button",default:"false"},{kind:"field",name:"searchButtonIconOnly",type:"boolean",description:"Set button icon without label",default:"false"},{kind:"field",name:"size",type:"any",description:"Available sizes: `big`, `small` and `x-small`. Defaults to `big`.",default:"ControlSize.BIG"},{kind:"field",name:"variant",type:"any",description:"Graphical variant: `primary`, `secondary`, `tertiary`. Defaults to `primary`.",default:"ButtonVariant.PRIMARY"}],events:[{kind:"event",name:"searchSubmit",description:"Emitted on search submit, return search string"},{kind:"event",name:"searchTyping",description:"Emitted on search typing, return search string"},{kind:"event",name:"searchItemClick",description:"Emitted on search result click, return item"}],cssProperties:[{name:"--z-searchbar-results-height",description:"Max height of the results container (default: 540px)"},{name:"--z-searchbar-tag-text-color",description:"Color of tag's text (default --color-primary03);"},{name:"--z-searchbar-tag-bg",description:"Color of tag's background (default --color-hover-primary);"}]}],exports:[{kind:"js",name:"ZSearchbar",declaration:{name:"ZSearchbar",module:"src/components/z-searchbar/index.tsx"}},{kind:"custom-element-definition",name:"z-searchbar",declaration:{name:"ZSearchbar",module:"src/components/z-searchbar/index.tsx"}}]}]};y({...d()||{},...g,modules:[...(d()||{}).modules||[],...g.modules]});