import{r,h as e}from"./p-d17ebc2f.js";import{L as t}from"./p-c9d57d05.js";const i=class{constructor(e){r(this,e),this.ispressed=!1,this.ishighlighted=!1}retrieveClass(){let r="";return this.cardtype===t.REAL?r+="real":this.cardtype===t.TRIAL?r+="trial":this.cardtype===t.TEMP&&(r+="temp"),this.faded?r+=" faded":this.ispressed?r+=" pressed":this.ishighlighted&&(r+=" highlighted"),r}render(){return e("div",{class:this.retrieveClass(),tabindex:"0"},e("slot",null))}};i.style=":host{--card-overflow:hidden}div{display:flex;overflow:var(--card-overflow);width:auto;width:256px;height:522px;box-sizing:border-box;flex-direction:column;border:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius)}div.real,div.trial,div.temp{border-color:var(--accent)}div.faded{border:var(--border-size-medium) solid var(--color-surface02)}div.highlighted{box-shadow:var(--shadow-4);outline:none}div.pressed{box-shadow:var(--shadow-8);outline:none}div:focus{box-shadow:var(--shadow-focus-primary);outline:none}";const a=class{constructor(e){r(this,e)}render(){return e("div",null,e("slot",{name:"alert"}),e("slot",{name:"cover"}))}};a.style=":host{width:auto;height:340px}:host>div{position:relative;display:flex;width:auto;height:340px;align-items:center;justify-content:center}";const o=class{constructor(e){r(this,e)}hadleOnImageError(){this.img=this.defaultimg}render(){return e("img",{class:this.faded&&"faded",onError:this.hadleOnImageError.bind(this),alt:this.titolo,src:this.img})}};o.style="img{display:block;max-width:100%;height:340px;margin:auto;object-fit:cover}img.faded{opacity:0.3}";const s=class{constructor(e){r(this,e),this.allowTooltip=!1}getTitle(){return this.allowTooltip?this.titolo:""}componentDidLoad(){this.elementHasEllipsis()&&(this.allowTooltip=!0)}elementHasEllipsis(){return this.ellipsis.offsetWidth<this.ellipsis.scrollWidth}retrieveClass(){return{real:this.cardtype===t.REAL,trial:this.cardtype===t.TRIAL,temp:this.cardtype===t.TEMP,faded:this.faded}}render(){return e("header",{class:this.retrieveClass()},e("slot",{name:"aria-heading"}),e("span",{class:"card-title",ref:r=>this.ellipsis=r,title:this.getTitle()},this.titolo),e("slot",{name:"icon"}))}};s.style='header{position:relative;display:flex;width:auto;height:calc(var(--space-unit) * 6);flex-direction:row;align-items:flex-start;justify-content:space-between;border-bottom:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius) var(--border-radius) var(--border-no-radius) var(--border-no-radius)}slot[name="aria-heading"]::slotted(*){position:absolute;overflow:hidden !important;width:1px !important;height:1px !important;padding:0 !important;border:0 none !important;margin:-1px !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important}header.real,header.trial,header.temp{border-bottom:var(--border-size-medium) solid var(--accent);background-color:var(--accent-lighter)}.card-title{overflow:hidden;height:calc(var(--space-unit) * 2);padding:calc(var(--space-unit) * 2);margin:0;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:12px;font-weight:var(--font-sb);letter-spacing:0.22px;line-height:calc(var(--space-unit) * 2);text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}.faded{border-bottom:var(--border-size-medium) solid var(--color-surface02)}.faded.real,.faded.trial,.faded.temp{border-top:var(--border-size-medium) solid var(--accent);border-right:var(--border-size-medium) solid var(--accent);border-left:var(--border-size-medium) solid var(--accent)}';export{i as z_myz_card,a as z_myz_card_body,o as z_myz_card_cover,s as z_myz_card_header}