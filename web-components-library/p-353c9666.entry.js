import{r as e,h as t,g as i}from"./p-cc3c02fe.js";import{p as r}from"./p-025f494e.js";import{f as s,g as n,a as o}from"./p-955da62e.js";import"./p-2c886e8b.js";const a=':host{display:block;width:inherit;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{display:-ms-flexbox;display:flex;width:inherit;-ms-flex-direction:column;flex-direction:column}main{position:relative;overflow:hidden;width:100%}main z-icon.scroll{position:absolute;z-index:10;top:50%;width:auto;margin:0 var(--space-unit);cursor:pointer;fill:var(--color-primary01);-webkit-transition:0.6s ease;transition:0.6s ease}main .scroll.disabled{opacity:0.5;pointer-events:none}main .scroll.right{right:0}#slides{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;line-height:0px;overflow-y:hidden;-webkit-transition:all 300ms;transition:all 300ms}footer{display:grid;width:100%;height:56px;-ms-flex-align:center;align-items:center;border-top:var(--border-size-medium) solid var(--color-surface02);grid-template:2 / 2;grid-template-areas:"center center" "left right"}footer>div{width:100%;-ms-flex-align:center;align-items:center}footer .footer-center{grid-area:center}footer .footer-left{grid-area:left}footer .footer-right{grid-area:right}footer .bullet-container{display:-ms-flexbox;display:flex;min-height:60px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0 auto}footer .bullet-container .bullet{width:8px;height:8px;margin:var(--space-unit) 2px;background-color:var(--gray200);border-radius:50%;pointer-events:none}footer .bullet-container .bullet.selected{background-color:var(--gray400)}@media only screen and (min-width: 768px){footer{height:76px;border-top:var(--border-size-medium) solid var(--color-surface02);grid-template:1 / 1fr 2fr 1fr;grid-template-areas:"left center right"}footer .bullet-container .bullet{width:10px;height:10px;margin:var(--space-unit) 3px}}@media only screen and (min-width: 1025px){main z-icon.scroll{margin:0 10px}footer .bullet-container .bullet{width:16px;height:16px;margin:var(--space-unit) calc(var(--space-unit) * 0.5);cursor:pointer;pointer-events:auto}}';const l=a;function d(e){return Array.isArray(e)&&e.every((e=>typeof e==="string"))}const h=class{constructor(t){e(this,t);this.slideshowid=undefined;this.data=undefined;this.device=undefined;this.currentSlide=0}watchData(){this.parseLinks()}componentWillLoad(){this.parseLinks();this.setDevice();window.addEventListener("resize",this.handleResize.bind(this))}componentDidRender(){this.setStyle()}handleResize(){this.setDevice();this.setStyle()}parseLinks(){var e;switch(typeof this.data){case"string":{const t=(e=s(this.data))!==null&&e!==void 0?e:[];if(!d(t)){throw new Error("Passed data is invalid")}this.links=t;break}default:this.links=this.data;break}}setStyle(){const e=this.el.shadowRoot.querySelector("#slides");if(!e){return}const t=this.el.shadowRoot.querySelectorAll(".slide");const i=this.el.offsetWidth;const r=i*this.links.length;e.style.width=`${r}px`;e.style.transform=`translate(-${i*this.currentSlide}px)`;t.forEach((e=>{const t=e.querySelector("img");t.style.width=`${i}px`}))}setDevice(){this.device=n()}setCurrentSlide(e){this.currentSlide=e}getBulletDimension(){switch(this.device){case r.MOBILE:return 24;case r.TABLET:return 32;default:return 40}}renderSlides(e){return t("div",{id:"slides"},e.map(((e,i)=>t("div",{id:"slide"+i,class:`slide ${this.currentSlide!==i&&"hide"}`},t("img",{src:e})))))}renderScroll(e){let i=false,r=this.currentSlide;if(e==="left"){i=this.currentSlide===0;r--}else if(e==="right"){i=this.currentSlide===this.links.length-1;r++}return t("z-icon",{class:`scroll ${e} ${i&&"disabled"}`,width:this.getBulletDimension(),height:this.getBulletDimension(),name:`chevron-${e}-circle`,onClick:()=>{!i&&this.setCurrentSlide(r)},onKeyUp:e=>!i&&o(e,(()=>{this.setCurrentSlide(r)})),tabindex:0,role:"button"})}renderSlideshowMain(){return t("main",null,this.renderScroll("left"),this.renderSlides(this.links),this.renderScroll("right"))}renderBullet(e){return t("a",{class:`bullet ${this.currentSlide===e&&"selected"}`,onClick:()=>this.setCurrentSlide(e),onKeyUp:t=>o(t,(()=>this.setCurrentSlide(e))),tabindex:0,role:"button"})}renderSlideshowFooter(){return t("footer",null,t("div",{class:"footer-left"},t("slot",{name:"footer-left"})),t("div",{class:"footer-center"},t("div",{class:"bullet-container"},Object.keys(this.links).map((e=>this.renderBullet(parseInt(e)))))),t("div",{class:"footer-right"},t("slot",{name:"footer-right"})))}render(){if(!this.links||!this.links.length){return t("div",null)}return t("div",{id:this.slideshowid},this.renderSlideshowMain(),this.renderSlideshowFooter())}get el(){return i(this)}static get watchers(){return{data:["watchData"]}}};h.style=l;export{h as z_slideshow};
//# sourceMappingURL=p-353c9666.entry.js.map