'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = ":host{display:inline-block;font-family:var(--font-family-sans);font-weight:var(--font-sb)}:host>button{display:inline-block;min-width:56px;height:48px;box-sizing:border-box;border:none;border-bottom:var(--border-size-large) solid transparent;margin:0;background:transparent;color:var(--color-primary01);cursor:pointer;font-family:var(--font-family-sans);font-size:var(--font-size-2);font-weight:inherit;line-height:48px;outline:none;text-align:center;text-decoration:none;transition:border-bottom 0.2s ease, font-size 0.2s ease}:host>button[disabled]{color:var(--color-disabled02);cursor:default;pointer-events:none}:host>button:hover{border-bottom:var(--border-size-large) solid var(--color-hover-light);background-color:var(--color-background);text-decoration:none;transition:border-bottom 0.2s ease, background-color 0.2s ease}:host>button:focus{border-bottom:var(--border-size-large) solid var(--color-hover-light);background-color:var(--color-background);box-shadow:var(--shadow-focus-primary);text-decoration:none}:host>button.visited{border-color:var(--color-hover-light);text-decoration:none}:host>button.selected{border-bottom:var(--border-size-large) solid var(--color-primary01);font-size:var(--font-size-7);transition:border-bottom 0.2s ease, font-size 0.2s ease}";

const ZPaginationPage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** selected status flag */
    this.isselected = false;
    /** disabled status flag */
    this.isdisabled = false;
    /** visited status flag */
    this.isvisited = false;
    /** aria-label string */
    this.ariaLabel = "";
  }
  render() {
    return (index.h("button", { id: this.pageid, "aria-label": this.ariaLabel ? this.ariaLabel : `Go to page ${this.value}`, class: { selected: this.isselected, visited: this.isvisited }, disabled: this.isdisabled, type: "button" }, this.value));
  }
};
ZPaginationPage.style = stylesCss;

exports.z_pagination_page = ZPaginationPage;
