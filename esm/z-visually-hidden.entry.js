import { r as registerInstance, h } from './index-4968ce56.js';

const stylesCss = ":host{position:absolute;overflow:hidden;width:1px;height:1px;padding:0;border:0;margin:0 -1px -1px 0;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}";

const ZVisuallyHidden = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("slot", null);
  }
};
ZVisuallyHidden.style = stylesCss;

export { ZVisuallyHidden as z_visually_hidden };
