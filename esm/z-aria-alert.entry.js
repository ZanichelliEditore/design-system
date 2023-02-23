import { r as registerInstance, h, H as Host } from './index-a2ca4b97.js';
import { t as ZAriaAlertMode } from './index-525f32e2.js';

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
