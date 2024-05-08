'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');

const stylesCss = ":host{position:absolute;overflow:hidden;width:1px;height:1px;padding:0;border:0;margin:0 -1px -1px 0;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}";
const ZVisuallyHiddenStyle0 = stylesCss;

const ZVisuallyHidden = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return index.h("slot", { key: '65fd2ab29bc68aa93203b219daa615d80bc6bdba' });
    }
};
ZVisuallyHidden.style = ZVisuallyHiddenStyle0;

exports.z_visually_hidden = ZVisuallyHidden;

//# sourceMappingURL=z-visually-hidden.cjs.entry.js.map