import { r as registerInstance, h, H as Host } from './index-90e18641.js';

const stylesCss = ":host{display:inline-block;width:100%;height:100%;background:var(--bg-neutral-100);overflow:hidden;border-radius:4px;transform:translate3d(0, 0, 0)}:host::after{content:' ';display:block;width:100%;height:100%;box-shadow:#e8ebee20 0px 0px 1px;background-image:linear-gradient(\n        90deg,\n        var(--bg-neutral-100) 0%,\n        var(--bg-neutral-150) 95%,\n        var(--bg-neutral-100) 100%\n    );animation:progress 1.6s ease-in-out infinite}@keyframes progress{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}";

const ZGhostLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null));
  }
};
ZGhostLoading.style = stylesCss;

export { ZGhostLoading as z_ghost_loading };