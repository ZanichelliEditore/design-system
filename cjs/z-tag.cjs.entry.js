'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-195ca522.js');

const stylesCss = ".sc-z-tag-h{--z-icon-width:14px;--z-icon-height:14px;--z-tag-text-color:var(--color-primary03);--z-tag-bg:var(--color-hover-primary);display:flex;width:fit-content;max-width:inherit;height:fit-content;max-height:inherit;padding:calc(var(--space-unit) / 2);background-color:var(--z-tag-bg);border-radius:var(--border-radius);color:var(--z-tag-text-color);fill:var(--z-tag-text-color);font-family:var(--font-family-sans);line-height:14px;text-transform:uppercase}.sc-z-tag-h>z-icon.sc-z-tag{margin-right:var(--space-unit)}.expandable.sc-z-tag-h>z-icon.sc-z-tag{margin-right:0;transition:margin-right 0.3s ease-out}.sc-z-tag-h:not(.expandable)>z-icon.sc-z-tag:not(:last-child),.expandable.sc-z-tag-h:hover>z-icon.sc-z-tag:not(:last-child){margin-right:var(--space-unit);transition:margin-right 0.3s ease-out 0s}.expandable.sc-z-tag-h>div.sc-z-tag{overflow:hidden;max-width:0;max-height:0}.expandable.sc-z-tag-h:hover>div.sc-z-tag{max-width:100%;max-height:100%}";

const ZTag = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: {
        "body-5-sb": true,
        "expandable": this.expandable && !!this.icon,
      } }, this.icon && index.h("z-icon", { name: this.icon }), index.h("div", null, index.h("slot", null))));
  }
};
ZTag.style = stylesCss;

exports.z_tag = ZTag;
