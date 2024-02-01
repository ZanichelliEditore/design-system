import { r as registerInstance, h, H as Host } from './index-4968ce56.js';
import { u as ZAriaAlertMode } from './index-47f23745.js';

const ZAriaAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Aria live mode */
    this.mode = ZAriaAlertMode.POLITE;
  }
  render() {
    return (h(Host, { "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", null)));
  }
};

export { ZAriaAlert as z_aria_alert };
