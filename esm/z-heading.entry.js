import { r as registerInstance, h } from './index-fa9e549c.js';

const ZHeading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "regular";
  }
  render() {
    return (h("z-typography", { component: this.component || `h${this.level}`, level: `h${this.level}`, variant: this.variant }, h("slot", null)));
  }
};

export { ZHeading as z_heading };
