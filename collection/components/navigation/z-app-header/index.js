import { Component, h, Element, Prop, State, Watch, Host } from '@stencil/core';
const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== 'undefined';
export class ZAppHeader {
  constructor() {
    /**
     * Stuck mode for the header.
     * You can programmatically set it using an IntersectionObserver.
     * **Optional**
     */
    this.stuck = false;
    /**
     * Collapse the menu container into a side drawer, for a better experience on mobile devices.
     * **Optional**
     */
    this.drawer = false;
    /**
     * Should place an overlay over the hero image.
     * Useful for legibility purpose.
     * **Optional**
     */
    this.overlay = false;
    /**
     * Control menu bar position in the header.
     * **Optional**
     */
    this.flow = 'auto';
    /**
     * The opening state of the drawer.
     */
    this.drawerOpen = false;
    /**
     * The stucked state of the bar.
     */
    this.stucked = false;
    this.observer = SUPPORT_INTERSECTION_OBSERVER && new IntersectionObserver(([entry]) => {
      this.stucked = !entry.isIntersecting;
    }, {
      threshold: 0.5
    });
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.setStuckPosition = this.setStuckPosition.bind(this);
  }
  componentDidLoad() {
    this.collectMenuElements();
    this.onStuckMode();
  }
  get title() {
    const titleElement = this.hostElement.querySelector('[slot="title"]');
    if (!titleElement) {
      return '';
    }
    return titleElement.textContent.trim();
  }
  get scrollParent() {
    const parent = this.hostElement.offsetParent;
    if (parent === document.body || parent === document.documentElement) {
      return window;
    }
    return parent;
  }
  collectMenuElements() {
    const menuElements = this.menuElements = this.hostElement.querySelectorAll('[slot="menu"]');
    this.hostElement.setAttribute('data-menu-length', `${menuElements.length}`);
    this.setMenuFloatingMode();
  }
  setStuckPosition() {
    const topbar = this.hostElement.ownerDocument.querySelector('z-app-topbar');
    const top = topbar ? topbar.clientHeight : 0;
    this.hostElement.style.setProperty('--stuck-top', `${top}px`);
  }
  onStuckMode() {
    if (this.stuck) {
      this.enableStuckObserver();
    }
    else {
      this.disableStuckMode();
    }
  }
  enableStuckObserver() {
    if (this.observer) {
      this.observer.observe(this.container);
    }
  }
  disableStuckMode() {
    this.stucked = false;
    if (this.observer) {
      this.observer.unobserve(this.container);
    }
  }
  onStucked() {
    const scrollParent = this.scrollParent;
    if (!scrollParent) {
      return;
    }
    if (this.stucked) {
      this.setStuckPosition();
      scrollParent.addEventListener('scroll', this.setStuckPosition);
    }
    else {
      scrollParent.removeEventListener('scroll', this.setStuckPosition);
    }
  }
  setMenuFloatingMode() {
    if (!this.menuElements) {
      return;
    }
    const elements = this.menuElements;
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].open = false;
      elements[i].floating = !this.drawerOpen;
    }
  }
  render() {
    return h(Host, null,
      h("div", { class: "heading-panel", ref: (el) => this.container = el },
        h("div", { class: "hero-container" },
          h("slot", { name: "hero" }, this.hero && h("img", { alt: "", src: this.hero }))),
        h("div", { class: "heading-container" },
          h("div", { class: "heading-title" },
            h("button", { class: "drawer-trigger", onClick: this.openDrawer },
              h("z-icon", { name: "burger-menu" })),
            h("slot", { name: "title" })),
          h("div", { class: "heading-subtitle" },
            h("slot", { name: "subtitle" }))),
        h("div", { class: "menu-container" }, (!this.drawerOpen) && h("slot", { name: "menu", onSlotchange: () => this.collectMenuElements() }))),
      h("div", { class: "drawer-container", "data-open": this.drawerOpen },
        h("div", { class: "drawer-overlay", onClick: this.closeDrawer }),
        h("div", { class: "drawer-panel" },
          h("button", { class: "drawer-close", onClick: this.closeDrawer },
            h("z-icon", { name: "close" })),
          h("div", { class: "drawer-content" }, this.drawerOpen && h("slot", { name: "menu", onSlotchange: () => this.collectMenuElements() })))),
      this.stucked && h("div", { class: "heading-stucked" },
        h("button", { class: "drawer-trigger", onClick: this.openDrawer },
          h("z-icon", { name: "burger-menu" })),
        h("div", { class: "heading-title" }, this.title)));
  }
  openDrawer() {
    this.drawerOpen = true;
  }
  closeDrawer() {
    this.drawerOpen = false;
  }
  static get is() { return "z-app-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "stuck": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Stuck mode for the header.\nYou can programmatically set it using an IntersectionObserver.\n**Optional**"
      },
      "attribute": "stuck",
      "reflect": true,
      "defaultValue": "false"
    },
    "drawer": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Collapse the menu container into a side drawer, for a better experience on mobile devices.\n**Optional**"
      },
      "attribute": "drawer",
      "reflect": true,
      "defaultValue": "false"
    },
    "hero": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Set the hero image source for the header.\nYou can also use a slot=\"hero\" node for advanced customisation.\n**Optional**"
      },
      "attribute": "hero",
      "reflect": false
    },
    "overlay": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Should place an overlay over the hero image.\nUseful for legibility purpose.\n**Optional**"
      },
      "attribute": "overlay",
      "reflect": true,
      "defaultValue": "false"
    },
    "flow": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'auto'|'stack'",
        "resolved": "\"auto\" | \"stack\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Control menu bar position in the header.\n**Optional**"
      },
      "attribute": "flow",
      "reflect": true,
      "defaultValue": "'auto'"
    }
  }; }
  static get states() { return {
    "drawerOpen": {},
    "stucked": {}
  }; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "stuck",
      "methodName": "onStuckMode"
    }, {
      "propName": "stucked",
      "methodName": "onStucked"
    }, {
      "propName": "drawerOpen",
      "methodName": "setMenuFloatingMode"
    }]; }
}
