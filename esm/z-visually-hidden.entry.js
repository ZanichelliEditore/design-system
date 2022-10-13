import { r as registerInstance, h } from './index-a2ca4b97.js';

const stylesCss = ":host{border:0;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}";

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
