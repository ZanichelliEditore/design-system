import { r as registerInstance, h } from './index-90e18641.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-sb);display:inline-block}:host>button{cursor:pointer;outline:none;display:inline-block;box-sizing:border-box;margin:0;height:48px;line-height:48px;text-align:center;border:none;border-bottom:var(--border-size-large) solid transparent;color:var(--color-primary01);font-size:var(--font-size-2);font-family:var(--font-family-sans);font-weight:inherit;background:transparent;text-decoration:none;transition:border-bottom 0.2s ease, font-size 0.2s ease;min-width:56px}:host>button[disabled]{pointer-events:none;cursor:default;color:var(--color-disabled02)}:host>button:hover{border-bottom:var(--border-size-large) solid var(--color-hover-light);background-color:var(--color-background);text-decoration:none;transition:border-bottom 0.2s ease, background-color 0.2s ease}:host>button:focus{border-bottom:var(--border-size-large) solid var(--color-hover-light);box-shadow:var(--shadow-focus-primary);background-color:var(--color-background);text-decoration:none}:host>button.visited{border-color:var(--color-hover-light);text-decoration:none}:host>button.selected{border-bottom:var(--border-size-large) solid var(--color-primary01);font-size:var(--font-size-7);transition:border-bottom 0.2s ease, font-size 0.2s ease}";

const ZPaginationPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** selected status flag */
    this.isselected = false;
    /** disabled status flag */
    this.isdisabled = false;
    /** visited status flag */
    this.isvisited = false;
  }
  render() {
    return (h("button", { id: this.pageid, "aria-label": this.ariaLabel ? this.ariaLabel : `Go to page ${this.value}`, class: { selected: this.isselected, visited: this.isvisited }, disabled: this.isdisabled, type: "button" }, this.value));
  }
};
ZPaginationPage.style = stylesCss;

export { ZPaginationPage as z_pagination_page };