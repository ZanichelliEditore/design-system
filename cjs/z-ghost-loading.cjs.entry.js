'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = ":host{display:inline-block;overflow:hidden;width:100%;height:100%;background:var(--bg-neutral-100);border-radius:4px;transform:translate3d(0, 0, 0)}:host::after{display:block;width:100%;height:100%;animation:progress 1.6s ease-in-out infinite;background-image:linear-gradient(\n    90deg,\n    var(--bg-neutral-100) 0%,\n    var(--bg-neutral-150) 95%,\n    var(--bg-neutral-100) 100%\n  );box-shadow:#e8ebee20 0 0 1px;content:\" \"}@keyframes progress{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}";

const ZGhostLoading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h(index.Host, null);
  }
};
ZGhostLoading.style = stylesCss;

exports.z_ghost_loading = ZGhostLoading;