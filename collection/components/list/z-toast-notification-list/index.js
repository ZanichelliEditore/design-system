import { h } from "@stencil/core";
import { ToastNotificationPosition } from "../../../beans";
export class ZToastNotificationList {
    constructor() {
        this.position = ToastNotificationPosition.TOP_RIGHT;
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
        if (this.newestontop) {
            this.handleNewestOnTop();
        }
    }
    handleNewestOnTop() {
        this.notificationArray = Array.from(this.hostElement.children);
        this.hostElement.append(...this.notificationArray.reverse());
        this.hostElement.shadowRoot.addEventListener("slotchange", this.slotChangeHandler.bind(this));
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
        return h("slot", { key: '8cabaa4c789ff5519e3e42e952464f4c137cc157', name: "toasts" });
    }
    static get is() { return "z-toast-notification-list"; }
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
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ToastNotificationPosition",
                    "resolved": "ToastNotificationPosition.BOTTOM_CENTRE | ToastNotificationPosition.BOTTOM_LEFT | ToastNotificationPosition.BOTTOM_RIGHT | ToastNotificationPosition.TOP_CENTRE | ToastNotificationPosition.TOP_LEFT | ToastNotificationPosition.TOP_RIGHT",
                    "references": {
                        "ToastNotificationPosition": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::ToastNotificationPosition"
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
                "reflect": true,
                "defaultValue": "ToastNotificationPosition.TOP_RIGHT"
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
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "newestontop",
                "methodName": "watchPropNewestontop"
            }];
    }
}
//# sourceMappingURL=index.js.map
