import { r as registerInstance, c as createEvent, h } from './index-a2ca4b97.js';
import { T as ThemeVariant } from './index-9d028352.js';

const stylesCss = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}button{display:flex;align-content:center;justify-content:center;padding:0;border:none;background-color:transparent}button>z-icon{color:var(--bg-white);fill:currentcolor}button>z-icon.light{color:var(--bg-grey-900);fill:currentcolor}";

const ZAppSwitcher = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.appButtonClick = createEvent(this, "appButtonClick", 7);
    /** theme variant, default 'dark' */
    this.theme = ThemeVariant.DARK;
    this.isopen = false;
    this.emitAppButtonClick = this.emitAppButtonClick.bind(this);
  }
  emitAppButtonClick() {
    this.isopen = !this.isopen;
    this.appButtonClick.emit({ isopen: this.isopen });
  }
  render() {
    return (h("button", { title: "app-switcher", onClick: () => this.emitAppButtonClick() }, h("z-icon", { name: "app-switcher", class: this.theme })));
  }
};
ZAppSwitcher.style = stylesCss;

export { ZAppSwitcher as z_app_switcher };
