'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-4e1850d7.js');

const stylesCss = ":host{position:fixed;z-index:10000;display:flex;flex-flow:column nowrap;margin-top:calc(var(--space-unit) * 2);margin-bottom:calc(var(--space-unit) * 2);font-family:var(--font-family-sans);font-weight:var(--font-rg)}::slotted(z-toast-notification){width:100vw}::slotted(:not(:last-child)){margin-bottom:calc(var(--space-unit) * 1)}:host([position=\"bottom-centre\"]),:host([position=\"bottom-right\"]),:host([position=\"bottom-left\"]){bottom:0;align-items:flex-end;justify-content:flex-end}:host([position=\"top-left\"]),:host([position=\"top-right\"]),:host([position=\"top-centre\"]){top:0;align-items:flex-start;justify-content:flex-start}@media only screen and (min-width: 768px){:host{margin:calc(var(--space-unit) * 3)}:host([position=\"top-centre\"]){top:0;left:50%;align-items:center;justify-content:flex-start;transform:translateX(-50%)}:host([position=\"top-left\"]){top:0;left:0;align-items:flex-start;justify-content:flex-start}:host([position=\"top-right\"]){top:0;right:0;align-items:flex-end;justify-content:flex-start}:host([position=\"bottom-centre\"]){bottom:0;left:50%;align-items:center;justify-content:flex-end;transform:translateX(-50%)}:host([position=\"bottom-right\"]){right:0;bottom:0;align-items:flex-end;justify-content:flex-end}:host([position=\"bottom-left\"]){bottom:0;left:0;align-items:flex-start;justify-content:flex-end}::slotted(z-toast-notification){width:50vw}}@media only screen and (min-width: 1366px){:host{margin:calc(var(--space-unit) * 4)}::slotted(z-toast-notification){width:33vw}}";

const ZToastNotificationList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**Set the position of toast notification list - top-left, top-centre, top-right, bottom-left, bottom-centre, bottom-right */
    this.position = index$1.ToastNotificationPosition.TOP_RIGHT;
    /**Set the entry position of new notification in the list */
    this.newestontop = true;
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
  slotChangeHandler() {
    const difference = Array.from(this.hostElement.children).filter((elem) => !this.notificationArray.includes(elem));
    if (difference) {
      difference.forEach((elem) => {
        this.notificationArray.push(elem);
        const newElem = elem;
        elem.remove();
        this.hostElement.prepend(newElem);
      });
    }
  }
  render() {
    return index.h("slot", { name: "toasts" });
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "newestontop": ["watchPropNewestontop"]
  }; }
};
ZToastNotificationList.style = stylesCss;

exports.z_toast_notification_list = ZToastNotificationList;
