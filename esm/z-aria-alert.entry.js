import { r as registerInstance, h, H as Host } from './index-fa9e549c.js';
import { g as ZAriaAlertMode } from './index-f928c852.js';

const ZAriaAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mode = ZAriaAlertMode.polite;
  }
  render() {
    return (h(Host, { "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", null)));
  }
};

export { ZAriaAlert as z_aria_alert };
