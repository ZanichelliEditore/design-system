'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');

const stylesCss = ":host{display:inline-block;overflow:hidden;width:100%;height:100%;background:var(--color-surface02);border-radius:var(--border-radius);-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host::after{display:block;width:100%;height:100%;-webkit-animation:progress 1.6s ease-in-out infinite;animation:progress 1.6s ease-in-out infinite;background-image:-webkit-gradient(\n    linear,\n    left top, right top,\n    from(var(--color-surface02)),\n    color-stop(95%, var(--color-surface03)),\n    to(var(--color-surface02))\n  );background-image:linear-gradient(\n    90deg,\n    var(--color-surface02) 0%,\n    var(--color-surface03) 95%,\n    var(--color-surface02) 100%\n  );content:\"\";-webkit-filter:blur(6px);filter:blur(6px)}@-webkit-keyframes progress{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes progress{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}";
const ZGhostLoadingStyle0 = stylesCss;

const ZGhostLoading = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return index.h(index.Host, { key: 'dbc7747f3cf3b0578212c4d86f28410d40826cdc' });
    }
};
ZGhostLoading.style = ZGhostLoadingStyle0;

exports.z_ghost_loading = ZGhostLoading;

//# sourceMappingURL=z-ghost-loading.cjs.entry.js.map