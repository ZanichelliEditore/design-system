'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');

const stylesCss = ":host{display:inline-block;overflow:hidden;width:100%;height:100%;background:var(--color-surface02);border-radius:var(--border-radius);transform:translate3d(0, 0, 0)}:host::after{display:block;width:100%;height:100%;animation:progress 1.6s ease-in-out infinite;background-image:linear-gradient(\n    90deg,\n    var(--color-surface02) 0%,\n    var(--color-surface03) 95%,\n    var(--color-surface02) 100%\n  );content:\"\";filter:blur(6px)}@keyframes progress{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}";
const ZGhostLoadingStyle0 = stylesCss;

const ZGhostLoading = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return index.h(index.Host, { key: 'efae0dd8d520db16bbb3bd49b434ba0fe8e45c33' });
    }
};
ZGhostLoading.style = ZGhostLoadingStyle0;

exports.z_ghost_loading = ZGhostLoading;

//# sourceMappingURL=z-ghost-loading.cjs.entry.js.map