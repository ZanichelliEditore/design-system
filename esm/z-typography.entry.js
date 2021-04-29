import { r as registerInstance, h, g as getElement, H as Host } from './index-604accea.js';

const stylesCss = ":host>*{font-family:var(--dashboard-font);margin:0}:host(.regular)>*{font-weight:var(--font-rg)}:host(.semibold)>*{font-weight:600}:host(.light)>*{font-weight:300}:host(.h1)>*{font-size:32px;line-height:40px}:host(.h2)>*{font-size:28px;line-height:36px}:host(.h3)>*{font-size:24px;line-height:32px}:host(.h4)>*{font-size:20px;line-height:28px}:host(.b1)>*{font-size:20px;line-height:28px}:host(.b2)>*{font-size:18px;line-height:28px}:host(.b3)>*{font-size:16px;line-height:24px}:host(.b4)>*{font-size:14px;line-height:20px}:host(.b5)>*{font-size:12px;line-height:16px}";

const ZTypography = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "regular";
  }
  render() {
    const el = document.createElement(this.component || "span");
    el.innerHTML = `<slot />`;
    this.hostElement.shadowRoot.appendChild(el);
    return (h(Host, { class: {
        [this.level]: Boolean(this.level),
        regular: this.variant === "regular",
        semibold: this.variant === "semibold",
        light: this.variant === "light"
      } }));
  }
  get hostElement() { return getElement(this); }
};
ZTypography.style = stylesCss;

export { ZTypography as z_typography };
