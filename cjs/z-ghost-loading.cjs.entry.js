'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = ":host{display:inline-block;width:100%;height:100%;background:var(--bg-neutral-100);overflow:hidden;border-radius:4px;transform:translate3d(0, 0, 0)}:host::after{content:' ';display:block;width:100%;height:100%;box-shadow:#e8ebee20 0px 0px 1px;background-image:linear-gradient(\n        90deg,\n        var(--bg-neutral-100) 0%,\n        var(--bg-neutral-150) 95%,\n        var(--bg-neutral-100) 100%\n    );animation:progress 1.6s ease-in-out infinite}@keyframes progress{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}";

const ZGhostLoading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null));
  }
};
ZGhostLoading.style = stylesCss;

exports.z_ghost_loading = ZGhostLoading;
