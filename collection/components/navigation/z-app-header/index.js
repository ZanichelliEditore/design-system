import { h, Host } from '@stencil/core';
const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== 'undefined';
/**
 * @slot title
 * @slot subtitle
 * @slot stucked-title - Title for the stucked header. By default it uses the text from the `title` slot.
 */
export class ZAppHeader {
  constructor() {
    /**
     * Stuck mode for the header.
     * You can programmatically set it using an IntersectionObserver.
     * **Optional**
     */
    this.stuck = false;
    /**
     * Should place an overlay over the hero image.
     * Useful for legibility purpose.
     * **Optional**
     */
    this.overlay = false;
    /**
     * Control menu bar position in the header.
     * - auto: the menu bar is positioned near the title
     * - stack: the menu bar is positioned below the title
     * - offcanvas: the menu bar is not displayed and a burger icon appears to open the offcanvas menu
     *
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
  }
  emitStickingEvent() {
    this.sticking.emit(this.stucked);
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
    this.menuLength = menuElements.length;
    this.setMenuFloatingMode();
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
    this.emitStickingEvent();
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
    return h(Host, { "menu-length": this.menuLength }, h("div", { class: "heading-panel", ref: (el) => this.container = el }, h("div", { class: "hero-container" }, h("slot", { name: "hero" }, this.hero && h("img", { alt: "", src: this.hero }))), h("div", { class: "heading-container" }, h("div", { class: "heading-title" }, this.menuLength > 0 && h("button", { class: "drawer-trigger", "aria-label": "Apri menu", onClick: this.openDrawer }, h("z-icon", { name: "burger-menu" })), h("slot", { name: "title" })), h("div", { class: "heading-subtitle" }, h("slot", { name: "subtitle" }))), h("div", { class: "menu-container" }, !this.drawerOpen && this.flow !== 'offcanvas' && h("slot", { name: "menu", onSlotchange: () => this.collectMenuElements() }))), h("div", { class: "drawer-container" }, h("div", { class: "drawer-overlay", onClick: this.closeDrawer }), h("div", { class: "drawer-panel" }, h("button", { class: "drawer-close", "aria-label": "Chiudi menu", onClick: this.closeDrawer }, h("z-icon", { name: "close" })), h("div", { class: "drawer-content" }, this.drawerOpen && h("slot", { name: "menu", onSlotchange: () => this.collectMenuElements() })))), this.stucked && h("div", { class: "heading-stucked" }, this.menuLength > 0 && h("button", { class: "drawer-trigger", "aria-label": "Apri menu", onClick: this.openDrawer }, h("z-icon", { name: "burger-menu" })), h("div", { class: "heading-title" }, h("slot", { name: "stucked-title" }, this.title))));
  }
  openDrawer() {
    this.drawerOpen = true;
  }
  closeDrawer() {
    this.drawerOpen = false;
  }
  static get is() { return "z-app-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
  static get properties() {
    return {
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
          "original": "'auto'|'stack'|'offcanvas'",
          "resolved": "\"auto\" | \"offcanvas\" | \"stack\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Control menu bar position in the header.\n- auto: the menu bar is positioned near the title\n- stack: the menu bar is positioned below the title\n- offcanvas: the menu bar is not displayed and a burger icon appears to open the offcanvas menu\n\n**Optional**"
        },
        "attribute": "flow",
        "reflect": true,
        "defaultValue": "'auto'"
      },
      "drawerOpen": {
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
          "text": "The opening state of the drawer."
        },
        "attribute": "drawer-open",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "stucked": {},
      "menuLength": {}
    };
  }
  static get events() {
    return [{
        "method": "sticking",
        "name": "sticking",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the `stucked` state of the header changes"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "stuck",
        "methodName": "onStuckMode"
      }, {
        "propName": "stucked",
        "methodName": "onStucked"
      }, {
        "propName": "drawerOpen",
        "methodName": "setMenuFloatingMode"
      }];
  }
}
