import { Component, Prop, h, Element, Host, Watch } from "@stencil/core";
import { ToastNotificationPositionsEnum, } from "../../../beans";
export class ZToastNotificationList {
  constructor() {
    /**Set the entry position of new notification in the list */
    this.newestontop = true;
    this.slotChangeHandler = () => {
      const difference = Array.from(this.hostElement.children).filter((elem) => !this.notificationArray.includes(elem));
      if (difference) {
        difference.forEach((elem) => {
          this.notificationArray.push(elem);
          const newElem = elem;
          elem.remove();
          this.hostElement.prepend(newElem);
        });
      }
    };
  }
  watchPropNewestontop(newValue) {
    this.hostElement.append(...this.notificationArray.reverse());
    if (newValue) {
      this.hostElement.shadowRoot.addEventListener("slotchange", this.slotChangeHandler);
    }
    else {
      this.hostElement.shadowRoot.removeEventListener("slotchange", this.slotChangeHandler);
    }
  }
  componentWillLoad() {
    this.newestontop && this.handleNewestOnTop();
  }
  handleNewestOnTop() {
    this.notificationArray = Array.from(this.hostElement.children);
    this.hostElement.append(...this.notificationArray.reverse());
    this.hostElement.shadowRoot.addEventListener("slotchange", this.slotChangeHandler);
  }
  render() {
    return (h(Host, { class: this.position
        ? this.position
        : ToastNotificationPositionsEnum.topRight },
      h("slot", { name: "toasts" })));
  }
  static get is() { return "z-toast-notification-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ToastNotificationPositionsTypes",
        "resolved": "ToastNotificationPositionsEnum.bottomCentre | ToastNotificationPositionsEnum.bottomLeft | ToastNotificationPositionsEnum.bottomRight | ToastNotificationPositionsEnum.topCentre | ToastNotificationPositionsEnum.topLeft | ToastNotificationPositionsEnum.topRight",
        "references": {
          "ToastNotificationPositionsTypes": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Set the position of toast notification list - top-left, top-centre, top-right, bottom-left, bottom-centre, bottom-right"
      },
      "attribute": "position",
      "reflect": false
    },
    "newestontop": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Set the entry position of new notification in the list"
      },
      "attribute": "newestontop",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "newestontop",
      "methodName": "watchPropNewestontop"
    }]; }
}
