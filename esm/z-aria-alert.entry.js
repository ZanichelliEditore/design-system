import { r as registerInstance, h, H as Host } from './index-90e18641.js';
import { g as ZAriaAlertMode } from './index-e5e2b27f.js';

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
