'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');

const stylesCss = ":host{position:absolute;overflow:hidden;width:1px;height:1px;padding:0;border:0;margin:0 -1px -1px 0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}";
const ZVisuallyHiddenStyle0 = stylesCss;

const ZVisuallyHidden = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return index.h("slot", { key: 'ae350dcba13aae6abc2f746555896c973baea496' });
    }
};
ZVisuallyHidden.style = ZVisuallyHiddenStyle0;

exports.z_visually_hidden = ZVisuallyHidden;

//# sourceMappingURL=z-visually-hidden.cjs.entry.js.map