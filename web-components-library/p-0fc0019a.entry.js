import{r as t,c as s,h as i,H as e,g as r}from"./p-d17ebc2f.js";import{W as o,X as n,c as a,B as l}from"./p-9ecf936d.js";const c=class{constructor(i){t(this,i),this.indexChange=s(this,"indexChange",7),this.single=!1,this.ghostLoadingHeight=100,this.current=0,this.scrollingTo=null}onIndexChange(){this.scrollingTo=this.current,this.itemsContainer.scroll({left:this.items[this.current].offsetLeft,behavior:"smooth"}),this.indexChange.emit({currentItem:this.current})}onSingleModeChange(){this.single&&!this.intersectionObserver&&this.setIntersectionObserver()}componentDidLoad(){this.itemsContainer=this.hostElement.querySelector(".z-carousel-items-container"),this.itemsContainer&&(this.items=Array.from(this.itemsContainer.querySelectorAll("li")),this.single&&this.setIntersectionObserver())}setIntersectionObserver(){this.intersectionObserver=new window.IntersectionObserver((t=>{const s=t.find((t=>t.isIntersecting));if(!s)return;const i=this.items.findIndex((t=>t===s.target));null!==this.scrollingTo&&i!==this.scrollingTo||(this.current=i,this.scrollingTo=null)}),{root:this.itemsContainer,threshold:.5}),this.items.forEach((t=>this.intersectionObserver.observe(t)))}onPrev(){if(this.single)return void(this.current=Math.max(0,this.current-1));const t=this.itemsContainer;t&&t.scrollBy({left:-t.clientWidth/2,behavior:"smooth"})}onNext(){if(this.single)return void(this.current=Math.min(this.current+1,this.items.length-1));const t=this.itemsContainer;t&&t.scrollBy({left:t.clientWidth/2,behavior:"smooth"})}canShowFooter(){return this.arrowsPosition===o.BOTTOM||this.progressMode===n.DOTS||this.progressMode===n.NUMBERS}goTo(t){this.current!==t&&(this.current=t)}render(){return this.isLoading?i(e,null,this.label&&i("div",{class:"heading-4 z-carousel-title"},this.label),i("div",{style:{height:`${this.ghostLoadingHeight}px`}},i("z-ghost-loading",null),i("div",{class:"loading-items-container"},i("slot",null)))):i(e,null,i("div",{class:"z-carousel-container"},this.label&&i("div",{class:"heading-4 z-carousel-title"},this.label),i("div",{class:"z-carousel-wrapper"},this.arrowsPosition===o.OVER&&i("z-button",{size:a.SMALL,"data-direction":"prev",icon:"chevron-left",onClick:this.onPrev.bind(this)}),i("ul",{class:"z-carousel-items-container"},i("slot",null)),this.arrowsPosition===o.OVER&&i("z-button",{size:a.SMALL,"data-direction":"next",icon:"chevron-right",onClick:this.onNext.bind(this)}))),this.canShowFooter()&&i("div",{class:"z-carousel-footer"},this.arrowsPosition===o.BOTTOM&&i("z-button",{size:a.SMALL,variant:l.TERTIARY,icon:"arrow-left-filled",onClick:this.onPrev.bind(this)}),this.progressMode===n.DOTS&&this.single&&this.items&&i("div",{class:"dots-progress"},this.items.map(((t,s)=>i("button",{type:"button",class:{current:this.current===s},onClick:()=>this.goTo(s)},i("z-icon",{name:this.current===s?"white-circle-filled":"black-circle-filled"}))))),this.progressMode===n.NUMBERS&&this.single&&this.items&&i("div",{class:"numbers-progress"},i("span",{class:"interactive-3 current"},this.current+1),i("span",{class:"interactive-3"},"di"),i("span",{class:"interactive-3"},this.items.length)),this.arrowsPosition===o.BOTTOM&&i("z-button",{size:a.SMALL,variant:l.TERTIARY,icon:"arrow-right-filled",onClick:this.onNext.bind(this)})))}get hostElement(){return r(this)}static get watchers(){return{current:["onIndexChange"],single:["onSingleModeChange"]}}};c.style='z-carousel{font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-carousel-gutter:0}z-carousel[single],z-carousel[single="true"]{display:flex;flex-direction:column;align-items:center;justify-content:center}z-carousel[single="true"] .z-carousel-container,z-carousel[single] .z-carousel-container{width:fit-content;max-width:100%}z-carousel .loading-items-container{display:none}.z-carousel-container{display:flex;flex-direction:column}.z-carousel-wrapper{position:relative}.z-carousel-title{margin-bottom:var(--space-unit);color:var(--gray800)}.z-carousel-items-container{display:flex;max-width:100%;flex-direction:row;margin:0;list-style:none;-ms-overflow-style:none;overflow-x:scroll;padding-inline-start:0;scroll-snap-type:x mandatory;scrollbar-width:none;}.z-carousel-items-container::-webkit-scrollbar{display:none}.z-carousel-items-container>*:not(:last-child){margin-right:var(--z-carousel-gutter)}z-carousel[single="true"] .z-carousel-items-container>*:not(:last-child),z-carousel[single] .z-carousel-items-container>*:not(:last-child){margin-right:0}.z-carousel-items-container>li{scroll-snap-align:center}z-button[data-direction]{--z-icon-width:32px;--z-icon-height:32px;position:absolute;bottom:50%;transform:translateY(50%)}z-button[data-direction="next"]{right:0}.z-carousel-footer{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:var(--space-unit)}.z-carousel-footer .number-progress,.z-carousel-footer .dots-progress{display:flex;align-items:center;justify-content:center}.z-carousel-footer .dots-progress button{display:flex;align-items:center;padding:0;border:none;margin:0;background-color:transparent}.z-carousel-footer .dots-progress button:not(.current){cursor:pointer}.z-carousel-footer .numbers-progress{margin:0 calc(var(--space-unit) / 2)}.z-carousel-footer .numbers-progress>*{margin-right:calc(var(--space-unit) / 2)}.z-carousel-footer .numbers-progress .current{font-weight:var(--font-sb)}.z-carousel-footer .dots-progress button.current z-icon{fill:var(--gray800)}.z-carousel-footer .dots-progress button:not(.current) z-icon{fill:var(--gray200)}';export{c as z_carousel}