import{r as i,c as t,h as n}from"./p-d17ebc2f.js";import{P as e}from"./p-c9d57d05.js";import{a as s}from"./p-d7668580.js";import"./p-b497e33e.js";const o=class{constructor(n){i(this,n),this.flipCard=t(this,"flipCard",7),this.htmltabindex=0,this.hiddenContent=!1,this.tooltip=!1,this.emitFlipCard=this.emitFlipCard.bind(this)}emitFlipCard(i=!1){this.flipCard.emit(i)}componentWillLoad(){this.setStringOrArray()}componentWillUpdate(){this.setStringOrArray()}componentDidRender(){this.handleContentHeight()}handleContentHeight(){if(this.contentWrapper||this.infoWrapper){if(this.contentWrapper.scrollHeight>this.contentWrapper.offsetHeight||this.infoWrapper.scrollHeight>this.infoWrapper.offsetHeight)return this.infoWrapper.style.height=this.contentWrapper.offsetHeight-this.onlineLicenseWrapper.offsetHeight-this.offlineLicenseWrapper.offsetHeight+"px",void(this.hiddenContent=!0);this.hiddenContent=!1}else this.hiddenContent=!1}setStringOrArray(){this.cardData="string"==typeof this.data?JSON.parse(this.data):this.data}renderCloseIcon(){return n("z-icon",{name:"multiply-circled-filled",height:18,width:18,onClick:()=>this.emitFlipCard(!1),tabindex:this.htmltabindex,onKeyUp:i=>{s(i,this.emitFlipCard,!1)}})}renderGeneralSection(){var i,t;const e=null===(i=null==this?void 0:this.cardData)||void 0===i?void 0:i.title,s=null===(t=null==this?void 0:this.cardData)||void 0===t?void 0:t.description;return n("section",{class:"info-wrapper "+(this.hiddenContent?"hidden":""),onClick:()=>{this.hiddenContent&&(this.tooltip=!this.tooltip)},ref:i=>this.infoWrapper=i},this.renderAuthor(),this.renderYear(),e,n("br",null),s)}renderAuthor(){var i;const t=null===(i=null==this?void 0:this.cardData)||void 0===i?void 0:i.author;return t?n("span",null,"Autore: ",n("b",null,t),n("br",null)):null}renderYear(){var i;const t=null===(i=null==this?void 0:this.cardData)||void 0===i?void 0:i.year;return t?n("span",null,"Anno: ",n("b",null,t),n("br",null)):null}renderTooltip(){if(!this.tooltip)return;if(!this.cardData)return;const{title:i,year:t,author:s,description:o}=this.cardData;return n("z-popover",{position:e.RIGHT,onClick:()=>this.tooltip=!1},`${i} ${t} ${s} ${o}`)}setExpirationLicenseMessage(i){return"online"===i&&this.cardData.onlineLicense.expired||"offline"===i&&this.cardData.offlineLicense.expired?n("span",{class:"expired"},"SCADUTA"):"online"===i&&this.cardData.onlineLicense.expiring||"offline"===i&&this.cardData.offlineLicense.expiring?n("span",{class:"expiring"},"IN SCADENZA"):void 0}renderOnlineLicenseSection(){var i;if(null===(i=null==this?void 0:this.cardData)||void 0===i?void 0:i.onlineLicense)return n("section",{ref:i=>this.onlineLicenseWrapper=i},n("span",{class:"license-heading"},n("span",null,"Licenza online"),this.setExpirationLicenseMessage("online")),"Scadenza il ",n("b",null,this.cardData.onlineLicense.expiration),n("br",null))}renderOfflineLicenseSection(){var i;if(null===(i=null==this?void 0:this.cardData)||void 0===i?void 0:i.offlineLicense)return n("section",{ref:i=>this.offlineLicenseWrapper=i},n("span",{class:"license-heading"},n("span",null,"Licenza offline"),this.setExpirationLicenseMessage("offline")),"Scadenza il ",n("b",null,this.cardData.offlineLicense.expiration),n("br",null),"Installazioni disponibili: ",n("b",null,this.cardData.offlineLicense.installations))}render(){return n("div",null,this.renderCloseIcon(),n("div",{class:"content-wrapper",ref:i=>this.contentWrapper=i},this.renderGeneralSection(),this.renderTooltip(),this.renderOnlineLicenseSection(),this.renderOfflineLicenseSection()),n("div",{class:"cta-wrapper"},n("slot",null)))}};o.style=':host{width:100%;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{position:relative;display:grid;width:calc(100% + calc(var(--space-unit) * 2));height:402px;box-sizing:border-box;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 3);border:var(--border-size-small) solid var(--color-primary01);margin-left:calc(-1 * var(--space-unit));background:var(--color-surface01);border-radius:0;box-shadow:0 2px 4px 0 rgb(66 69 72 / 35%)}:host>div>z-icon{position:absolute;top:var(--space-unit);right:var(--space-unit);cursor:pointer;fill:var(--color-primary01)}:host>div>div.cta-wrapper{display:flex;flex-flow:column nowrap;align-self:end;justify-content:space-between}:host>div>div.content-wrapper{position:relative;overflow:hidden;align-self:stretch}:host>div>div.content-wrapper>section{box-sizing:border-box;padding:var(--space-unit) 0;border-bottom:var(--border-size-small) solid var(--color-surface04);color:var(--color-surface05);font-size:14px;line-height:20px}:host>div>div.content-wrapper>section:last-child{border-bottom:none}:host>div>div.content-wrapper>section.info-wrapper{position:relative;overflow:hidden;box-sizing:border-box}:host>div>div.content-wrapper>section.info-wrapper.hidden::after{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg, rgb(255 0 0 / 0%), rgb(255 0 0 / 0%) 60%, white);content:"";pointer-events:none}:host>div>div.content-wrapper>section>span.license-heading{display:flex;justify-content:space-between}:host>div>div.content-wrapper>section>span.license-heading>span.expired{color:var(--color-secondary02);font-size:12px;font-weight:600}:host>div>div.content-wrapper>section>span.license-heading>span.expiring{color:var(--color-warning01);font-size:12px;font-weight:600}:host>div>div.content-wrapper>z-popover{position:absolute;top:0;left:calc(var(--space-unit) * 4)}';export{o as z_myz_card_info}