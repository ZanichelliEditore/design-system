import{r,h as t}from"./p-98268a57.js";const e=class{constructor(t){r(this,t)}renderLegacyChip(){return t("div",null,t("span",{class:"boldtext"},this.boldtext)," ",this.regulartext)}render(){return null!=this.boldtext||null!=this.regulartext?this.renderLegacyChip():t("div",null,t("slot",null))}};e.style=":host>div{display:inline-block;min-height:28px;line-height:28px;padding:0 calc(var(--space-unit) * 1.5);background-color:var(--bg-white);border:var(--border-size-small) solid var(--bg-grey-200);border-radius:14px;color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-size:12px}.boldtext{font-weight:bold}";export{e as z_chip_deprecated}