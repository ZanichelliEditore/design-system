import { r as registerInstance, h, a as Host } from './index-f16bc2ca.js';

const stylesCss = ":host{display:inline-block;overflow:hidden;width:100%;height:100%;background:var(--color-surface02);border-radius:var(--border-radius);transform:translate3d(0, 0, 0)}:host::after{display:block;width:100%;height:100%;animation:progress 1.6s ease-in-out infinite;background-image:linear-gradient(\n    90deg,\n    var(--color-surface02) 0%,\n    var(--color-surface03) 95%,\n    var(--color-surface02) 100%\n  );content:\"\";filter:blur(6px)}@keyframes progress{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}";
const ZGhostLoadingStyle0 = stylesCss;

const ZGhostLoading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h(Host, { key: '8738533f14d7ef5917825e6632b63e995a410d24' });
    }
};
ZGhostLoading.style = ZGhostLoadingStyle0;

export { ZGhostLoading as z_ghost_loading };

//# sourceMappingURL=z-ghost-loading.entry.js.map