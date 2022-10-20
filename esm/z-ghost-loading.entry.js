import { r as registerInstance, h, H as Host } from './index-a2ca4b97.js';

const stylesCss = ":host{display:inline-block;overflow:hidden;width:100%;height:100%;background:var(--bg-neutral-100);border-radius:4px;transform:translate3d(0, 0, 0)}:host::after{display:block;width:100%;height:100%;animation:progress 1.6s ease-in-out infinite;background-image:linear-gradient(\n    90deg,\n    var(--bg-neutral-100) 0%,\n    var(--bg-neutral-150) 95%,\n    var(--bg-neutral-100) 100%\n  );box-shadow:#e8ebee20 0 0 1px;content:\" \"}@keyframes progress{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}";

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
