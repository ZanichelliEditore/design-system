'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dee3e21d.js');
const index$1 = require('./index-3735f277.js');

const stylesCss = ".sc-z-divider-h{display:block;padding:0;margin:0}.divider-horizontal.sc-z-divider-h{width:100%}.divider-vertical.sc-z-divider-h{height:100%}.divider-small.divider-horizontal.sc-z-divider-h{height:var(--border-size-small)}.divider-medium.divider-horizontal.sc-z-divider-h{height:var(--border-size-medium)}.divider-large.divider-horizontal.sc-z-divider-h{height:var(--border-size-large)}.divider-small.divider-vertical.sc-z-divider-h{width:var(--border-size-small)}.divider-medium.divider-vertical.sc-z-divider-h{width:var(--border-size-medium)}.divider-large.divider-vertical.sc-z-divider-h{width:var(--border-size-large)}";

const ZDivider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** [optional] Divider size */
    this.size = index$1.DividerSize.small;
    /** [optional] Divider color */
    this.color = "gray200";
    /** [optional] Divider orintation */
    this.orientation = index$1.DividerOrientation.horizontal;
  }
  render() {
    return (index.h(index.Host, { class: `divider-${this.size} divider-${this.orientation}`, style: { backgroundColor: `var(--${this.color})` } }));
  }
};
ZDivider.style = stylesCss;

exports.z_divider = ZDivider;
