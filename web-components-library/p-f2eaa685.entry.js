import{r as t,h as i,H as n,g as o}from"./p-d17ebc2f.js";import{d as s,a as e}from"./p-d7668580.js";import{T as c}from"./p-c9d57d05.js";import"./p-b497e33e.js";const l=class{constructor(i){t(this,i),this.links=[],this.visible=!1,this.visibleLink=""}handleFocusOutSkipToContent(t){this.isInSkipToContent(t.target)&&(this.visible=!1)}handleFocusSkipToContent(t){this.isInSkipToContent(t.target)&&(this.visible=!0)}componentDidLoad(){this.showFirstChild()}componentWillRender(){this.links&&(this.links="string"==typeof this.links?JSON.parse(this.links):this.links)}isInSkipToContent(t){return!!s(t).find((t=>"z-skip-to-content"===t.nodeName.toLowerCase()))}showFirstChild(){var t;const i=null===(t=this.hostElement.children)||void 0===t?void 0:t[0];i&&(this.visibleLink=i.id)}handleLinkClick(){this.visible=!1}render(){return i(n,{class:{[this.variant]:!0,"skip-to-content-visible":this.visible}},this.links.map(((t,n)=>{const o=`skip-to-content-${n}`;return i("z-link",{id:o,underline:!0,"aria-label":t.ariaLabel||t.label,class:"body-1-sb "+(o==this.visibleLink?"link-visible":"link-invisible"),href:t.href,textcolor:this.variant===c.DARK?"white":"black",onFocus:()=>this.visibleLink=o,onClick:()=>this.handleLinkClick(),onKeyUp:t=>e(t,this.handleLinkClick.bind(this))},t.label)})))}get hostElement(){return o(this)}};l.style=".sc-z-skip-to-content-h{position:absolute;left:-100%;height:60px;box-sizing:border-box;padding:calc(var(--space-unit) * 1.25) calc(var(--space-unit) * 3);background-color:#24f4ff;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.skip-to-content-visible.sc-z-skip-to-content-h,.sc-z-skip-to-content-h:focus{position:static;display:block}.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content{display:block;text-align:center}.sc-z-skip-to-content-h>z-link.link-invisible.sc-z-skip-to-content{overflow:hidden;width:0;height:0}.sc-z-skip-to-content-h>z-link.link-visible.sc-z-skip-to-content{width:initial;height:initial}.dark.sc-z-skip-to-content-h{background-color:var(--bg-grey-800);color:var(--color-white)}.light.sc-z-skip-to-content-h{border:2px solid var(--text-grey-800);background-color:var(--bg-white);color:var(--text-grey-800)}@media (min-width: 768px){.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content{text-align:left}}@media (min-width: 1152px){.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content{display:inline-block;padding:0 calc(var(--space-unit) * 3);border-right:1px solid var(--bg-grey-800)}.sc-z-skip-to-content-h>z-link.link-invisible.sc-z-skip-to-content{overflow:initial;width:initial;height:initial}.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content:first-child{padding-left:0}.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content:last-child,.dark.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content:last-child,.light.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content:last-child{padding-right:0;border-right:none}.dark.sc-z-skip-to-content-h>z-link.sc-z-skip-to-content{border-right:1px solid var(--bg-white)}}";export{l as z_skip_to_content}