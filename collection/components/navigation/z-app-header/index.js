import { h, Host } from "@stencil/core";
const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== "undefined";
/**
 * @slot title - Slot for the main title
 * @slot subtitle - Slot for the subtitle. It will not appear in stuck header.
 * @slot stucked-title - Title for the stuck header. By default it uses the text from the `title` slot.
 * @cssprop --app-header-content-max-width - Use it to set header's content max width. Useful when the project use a fixed width layout. Defaults to `100%`.
 * @cssprop --app-header-height - Defaults to `auto`.
 * @cssprop --app-header-typography-1-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `24px`.
 * @cssprop --app-header-typography-2-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `28px`.
 * @cssprop --app-header-typography-3-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `32px`.
 * @cssprop --app-header-typography-4-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `36px`.
 * @cssprop --app-header-typography-5-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `42px`.
 * @cssprop --app-header-typography-6-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `48px`.
 * @cssprop --app-header-typography-7-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `54px`.
 * @cssprop --app-header-typography-8-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `60px`.
 * @cssprop --app-header-typography-9-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `68px`.
 * @cssprop --app-header-typography-10-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `76px`.
 * @cssprop --app-header-typography-11-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `84px`.
 * @cssprop --app-header-typography-12-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `92px`.
 * @cssprop --app-header-typography-1-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.33`.
 * @cssprop --app-header-typography-2-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.29`.
 * @cssprop --app-header-typography-3-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.25`.
 * @cssprop --app-header-typography-4-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.24`.
 * @cssprop --app-header-typography-5-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.24`.
 * @cssprop --app-header-typography-6-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.25`.
 * @cssprop --app-header-typography-7-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.2`.
 * @cssprop --app-header-typography-8-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.26`.
 * @cssprop --app-header-typography-9-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.24`.
 * @cssprop --app-header-typography-10-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.26`.
 * @cssprop --app-header-typography-11-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.2`.
 * @cssprop --app-header-typography-12-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.2`.
 * @cssprop --app-header-typography-1-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-0.2 / 1em)`.
 * @cssprop --app-header-typography-2-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-0.4 / 1em)`.
 * @cssprop --app-header-typography-3-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-0.6 / 1em)`.
 * @cssprop --app-header-typography-4-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-0.8 / 1em)`.
 * @cssprop --app-header-typography-5-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1 / 1em)`.
 * @cssprop --app-header-typography-6-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1.2 / 1em)`.
 * @cssprop --app-header-typography-7-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1.4 / 1em)`.
 * @cssprop --app-header-typography-8-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1.6 / 1em)`.
 * @cssprop --app-header-typography-9-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1.8 / 1em)`.
 * @cssprop --app-header-typography-10-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-2 / 1em)`.
 * @cssprop --app-header-typography-11-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-2.2 / 1em)`.
 * @cssprop --app-header-typography-12-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-2.4 / 1em)`.
 * @cssprop --app-header-top-offset - Top offset for the stuck header. Useful when there are other fixed elements above the header. Defaults to `48px` (the height of the main topbar).
 * @cssprop --app-header-drawer-trigger-size - The size of the drawer icon. Defaults to `--space-unit * 4`.
 * @cssprop --app-header-bg - Header background color. Defaults to `--color-white`.
 * @cssprop --app-header-stucked-bg - Stuck header background color. Defaults to `--color-white`.
 * @cssprop --app-header-text-color - Text color. Defaults to `--gray800`.
 * @cssprop --app-header-stucked-text-color - Stuck header text color. Defaults to `--gray800`.
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
    this.flow = "auto";
    /**
     * The opening state of the drawer.
     */
    this.drawerOpen = false;
    /**
     * The stuck state of the bar.
     */
    this._stuck = false;
    this.observer = SUPPORT_INTERSECTION_OBSERVER &&
      new IntersectionObserver(([entry]) => {
        this._stuck = !entry.isIntersecting;
      }, {
        threshold: 0.5,
      });
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.collectMenuElements.bind(this);
  }
  emitStickingEvent() {
    this.sticking.emit(this._stuck);
  }
  componentDidLoad() {
    this.collectMenuElements();
    this.onStuckMode();
  }
  get title() {
    const titleElement = this.hostElement.querySelector('[slot="title"]');
    if (titleElement === null) {
      return "";
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
    const menuElements = (this.menuElements = this.hostElement.querySelectorAll('[slot="menu"]'));
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
    this._stuck = false;
    if (this.observer) {
      this.observer.unobserve(this.container);
    }
  }
  onStuck() {
    const scrollParent = this.scrollParent;
    if (!scrollParent) {
      return;
    }
    this.emitStickingEvent();
  }
  setMenuFloatingMode() {
    if (this.menuElements.length === 0) {
      return;
    }
    const elements = this.menuElements;
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].open = false;
      elements[i].floating = !this.drawerOpen;
    }
  }
  render() {
    return (h(Host, { "menu-length": this.menuLength }, h("div", { class: "heading-panel", ref: (el) => (this.container = el) }, h("div", { class: "hero-container" }, h("slot", { name: "hero" }, this.hero && (h("img", { alt: "", src: this.hero })))), h("div", { class: "heading-container" }, h("div", { class: "heading-title" }, this.menuLength > 0 && (h("button", { class: "drawer-trigger", "aria-label": "Apri menu", onClick: this.openDrawer }, h("z-icon", { name: "burger-menu" }))), h("slot", { name: "title" })), h("div", { class: "heading-subtitle" }, h("slot", { name: "subtitle" }))), h("div", { class: "menu-container" }, !this.drawerOpen && this.flow !== "offcanvas" && (h("slot", { name: "menu", onSlotchange: () => this.collectMenuElements() })))), h("div", { class: "drawer-container" }, h("div", { class: "drawer-overlay", onClick: this.closeDrawer }), h("div", { class: "drawer-panel" }, h("button", { class: "drawer-close", "aria-label": "Chiudi menu", onClick: this.closeDrawer }, h("z-icon", { name: "close" })), h("div", { class: "drawer-content" }, this.drawerOpen && (h("slot", { name: "menu", onSlotchange: () => this.collectMenuElements() }))))), this._stuck && (h("div", { class: "heading-stuck" }, h("div", { class: "heading-stuck-content" }, this.menuLength > 0 && (h("button", { class: "drawer-trigger", "aria-label": "Apri menu", onClick: this.openDrawer }, h("z-icon", { name: "burger-menu" }))), h("div", { class: "heading-title" }, h("slot", { name: "stucked-title" }, this.title)))))));
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
          "original": "\"auto\" | \"stack\" | \"offcanvas\"",
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
        "defaultValue": "\"auto\""
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
      "_stuck": {},
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
          "text": "Emitted when the `stuck` state of the header changes"
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
        "propName": "_stuck",
        "methodName": "onStuck"
      }, {
        "propName": "drawerOpen",
        "methodName": "setMenuFloatingMode"
      }];
  }
}
