import{r as o,h as t}from"./p-98268a57.js";const r=class{constructor(t){o(this,t),this.isselected=!1,this.isdisabled=!1,this.isvisited=!1}render(){return t("button",{id:this.pageid,"aria-label":this.ariaLabel?this.ariaLabel:`Go to page ${this.value}`,class:{selected:this.isselected,visited:this.isvisited},disabled:this.isdisabled,type:"button"},this.value)}};r.style=":host{font-family:var(--font-family-sans);font-weight:var(--font-sb);display:inline-block}:host>button{cursor:pointer;outline:none;display:inline-block;box-sizing:border-box;margin:0;height:48px;line-height:48px;text-align:center;border:none;border-bottom:var(--border-size-large) solid transparent;color:var(--color-primary01);font-size:var(--font-size-2);font-family:var(--font-family-sans);font-weight:inherit;background:transparent;text-decoration:none;transition:border-bottom 0.2s ease, font-size 0.2s ease;min-width:56px}:host>button[disabled]{pointer-events:none;cursor:default;color:var(--color-disabled02)}:host>button:hover{border-bottom:var(--border-size-large) solid var(--color-hover-light);background-color:var(--color-background);text-decoration:none;transition:border-bottom 0.2s ease, background-color 0.2s ease}:host>button:focus{border-bottom:var(--border-size-large) solid var(--color-hover-light);box-shadow:var(--shadow-focus-primary);background-color:var(--color-background);text-decoration:none}:host>button.visited{border-color:var(--color-hover-light);text-decoration:none}:host>button.selected{border-bottom:var(--border-size-large) solid var(--color-primary01);font-size:var(--font-size-7);transition:border-bottom 0.2s ease, font-size 0.2s ease}";export{r as z_pagination_page}