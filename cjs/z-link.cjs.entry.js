'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = ":host{--font-size-link:inherit;--font-weight-link:inherit;font-family:var(--font-family-sans);font-size:var(--font-size-link);font-weight:var(--font-weight-link);line-height:inherit;outline:none}:host([big]){--font-size-link:16px;--font-weight-link:var(--font-sb)}a{display:inline-flex;align-items:center;padding:calc(var(--space-unit) * 0.5) 0;border-top:var(--border-size-medium) solid transparent;border-bottom:var(--border-size-medium) solid transparent;color:var(--color-link-primary);cursor:pointer;fill:var(--color-link-primary);text-decoration:none}a:hover,a:focus,a:active{text-decoration:underline}a.active{color:var(--color-active-link);fill:var(--color-active-link)}a:hover,a:focus{color:var(--color-hover-link);fill:var(--color-hover-link)}a:active{color:var(--color-pressed-link);fill:var(--color-pressed-link)}a:visited{color:var(--color-visited-link);fill:var(--color-visited-link)}a.disabled,a.inverse.disabled{color:var(--color-disabled03);cursor:default;fill:var(--color-disabled03);pointer-events:none}a.underline,a.underline:active,a.underline:hover,a.underline:visited,a.underline.disabled,a.underline.black,a.underline.white{text-decoration:underline}a.disabled,a.disabled:active,a.disabled:visited,a.disabled:hover{text-decoration:none}a.inverse{color:var(--color-inverse-link);fill:var(--color-inverse-link)}a.inverse.active{color:var(--color-inverse-active-link);fill:var(--color-inverse-active-link)}a.inverse:hover,a.inverse:focus{color:var(--color-inverse-hover-link);fill:var(--color-inverse-hover-link)}a.inverse:active{color:var(--color-inverse-pressed-link);fill:var(--color-inverse-pressed-link)}a.inverse:visited{color:var(--color-inverse-visited-link);fill:var(--color-inverse-visited-link)}a.black{color:var(--gray800);fill:var(--gray800);text-decoration:none}a.black:hover,a.black.active{color:var(--color-black);fill:var(--color-black)}a.black:visited{color:var(--gray800);fill:var(--gray800)}a.black:hover,a.black:focus,a.black:active{text-decoration:underline}a.black:active{color:var(--gray700);fill:var(--gray700)}a.white,a.white:active,a.white:hover,a.white.active{color:var(--bg-white);fill:var(--bg-white);text-decoration:none}a.white:visited{color:var(--bg-white);fill:var(--bg-white)}a.white:hover,a.white:focus,a.white:active{text-decoration:underline}a.white.disabled,a.black.disabled{color:var(--gray500);fill:var(--gray500)}a>z-icon:first-child{margin-right:var(--space-unit)}a>z-icon:last-child{margin-left:var(--space-unit)}";

const ZLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.zLinkClick = index.createEvent(this, "zLinkClick", 7);
    /** link target (optional) */
    this.target = "_self";
    /** tabindex link attribute (optional) */
    this.htmltabindex = 0;
    /** disable link flag (optional) */
    this.isdisabled = false;
    /** active link flag (optional) */
    this.isactive = false;
    /** white variant flag (optional) */
    this.iswhite = false;
    /** link text variant (optional) */
    this.textcolor = "primary";
    /** big link version */
    this.big = false;
    /** link icon position (optional) */
    this.iconposition = "left";
    /** draw underline on text (optional) */
    this.underline = false;
    this.iconSize = 18;
    this.emitZLinkClick = this.emitZLinkClick.bind(this);
    this.emitZLinkInteraction = this.emitZLinkInteraction.bind(this);
  }
  componentWillLoad() {
    if (this.iswhite) {
      console.warn("z-link iswhite prop is deprecated and will be dropped in a next release, please use textcolor prop instead");
    }
    if (this.big) {
      console.warn("z-link big prop is deprecated and will be dropped in a next release, please override --font-size-link and --font-weight-link variables instead");
    }
  }
  emitZLinkClick(e, linkId) {
    this.emitZLinkInteraction(e, linkId);
  }
  emitZLinkInteraction(e, linkId) {
    this.zLinkClick.emit({ e, linkId });
  }
  componentDidLoad() {
    if (this.icon) {
      const height = parseFloat(window.getComputedStyle(this.hostElement).getPropertyValue("font-size"));
      const currentSize = this.big ? 18 : Math.round(height * 1.125);
      if (!Number.isNaN(currentSize) && this.iconSize !== currentSize) {
        this.iconSize = currentSize;
      }
    }
  }
  render() {
    return (index.h("a", { id: this.htmlid, href: this.href ? this.href : null, class: {
        disabled: this.isdisabled,
        active: this.isactive,
        white: this.iswhite,
        [this.textcolor || ""]: true,
        underline: this.underline,
      }, target: this.target, role: this.href ? "link" : "button", tabindex: this.isdisabled ? -1 : this.htmltabindex, onClick: (e) => this.emitZLinkClick(e, this.htmlid) }, this.iconposition === "right" && index.h("slot", null), this.icon && (index.h("z-icon", { style: {
        "--z-icon-width": `${this.iconSize}px`,
        "--z-icon-height": `${this.iconSize}px`,
      }, name: this.icon })), this.iconposition === "left" && index.h("slot", null)));
  }
  get hostElement() { return index.getElement(this); }
};
ZLink.style = stylesCss;

exports.z_link = ZLink;
