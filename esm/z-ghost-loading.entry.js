import { r as registerInstance, h, H as Host } from './index-a2ca4b97.js';

const stylesCss = ":host{display:inline-block;overflow:hidden;width:100%;height:100%;background:var(--color-surface02);border-radius:var(--border-radius);transform:translate3d(0, 0, 0)}:host::after{display:block;width:100%;height:100%;animation:progress 1.6s ease-in-out infinite;background-image:linear-gradient(\n    90deg,\n    var(--color-surface02) 0%,\n    var(--color-surface03) 95%,\n    var(--color-surface02) 100%\n  );content:\"\";filter:blur(6px)}@keyframes progress{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}";

const ZGhostLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null);
  }
};
ZGhostLoading.style = stylesCss;

export { ZGhostLoading as z_ghost_loading };
