import { h, Host } from "@stencil/core";
import { NavigationTabsOrientation, NavigationTabsSize } from "../../beans";
import { ICONS } from "../../components/icons/icons";
/**
 * Single tab component to use inside `z-navigation-tabs`. It renders an anchor element.
 * This component uses the `tab` role:
 * @link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role
 * @deprecated Use a native `<a>` instead.
 */
export class ZNavigationTabLink {
    constructor() {
        this.ariaControls = undefined;
        this.tabId = undefined;
        this.selected = false;
        this.disabled = false;
        this.orientation = NavigationTabsOrientation.HORIZONTAL;
        this.size = NavigationTabsSize.BIG;
        this.htmlTitle = undefined;
        this.target = undefined;
        this.href = undefined;
        this.icon = undefined;
        this.label = undefined;
    }
    /**
     * Scroll into view to center the tab.
     */
    scrollToTab({ target: button }) {
        const scrollOptions = (this.orientation === NavigationTabsOrientation.HORIZONTAL
            ? { block: "nearest", inline: "center" }
            : { block: "center", inline: "nearest" });
        button.scrollIntoView(Object.assign({ behavior: "smooth" }, scrollOptions));
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.selected = true;
    }
    onSelected() {
        if (this.selected) {
            this.selectedEvent.emit();
        }
    }
    /**
     * Render the icon component using the icon's name passed from prop.
     * Use the `filled` version when the tab is `selected`.
     * @returns {HTMLElement}
     */
    renderIcon() {
        let icon = this.icon;
        const iconFilled = `${icon.replace(/-filled$/, "")}-filled`;
        if (this.selected && Object.keys(ICONS).includes(iconFilled)) {
            icon = iconFilled;
        }
        return h("z-icon", { name: icon });
    }
    render() {
        return (h(Host, { key: '77c729dd9c1bfd412d958eb477f2e227ba7fc7a7', role: "tab", id: this.tabId, "aria-selected": this.selected ? "true" : "false", "aria-controls": this.ariaControls }, h("a", { key: '3b70074a8637c2df922e6c5dcfc38f45c14ae770', tabIndex: this.selected ? 0 : -1, onFocus: this.scrollToTab.bind(this), href: this.disabled ? null : this.href, title: this.htmlTitle, target: this.target }, this.icon && this.renderIcon(), this.orientation === "horizontal" && this.label)));
    }
    static get is() { return "z-navigation-tab-link"; }
    static get originalStyleUrls() {
        return {
            "$": ["../navigation-tab.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["../navigation-tab.css"]
        };
    }
    static get properties() {
        return {
            "ariaControls": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "link",
                            "text": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"
                        }],
                    "text": "`aria-controls` attribute of the tab.\nIdentifies the element (with `role=tabpanel`) whose contents or presence are controlled by this tab.\nThe value must be the `id` of the element it controls."
                },
                "attribute": "aria-controls",
                "reflect": false
            },
            "tabId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "link",
                            "text": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby"
                        }, {
                            "name": "deprecated",
                            "text": "Use native `id` attribute instead"
                        }],
                    "text": "`id` attribute of the tab.\nSet this id to the `aria-labelledby` attribute of the controlled `tabpanel` element."
                },
                "attribute": "tab-id",
                "reflect": false
            },
            "selected": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Whether the tab is selected."
                },
                "attribute": "selected",
                "reflect": true,
                "defaultValue": "false"
            },
            "disabled": {
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
                    "text": "Whether the tab is disabled."
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "orientation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NavigationTabsOrientation",
                    "resolved": "NavigationTabsOrientation.HORIZONTAL | NavigationTabsOrientation.VERTICAL",
                    "references": {
                        "NavigationTabsOrientation": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::NavigationTabsOrientation"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tab orientation. Do not set this manually: `z-navigation-tabs` will handle this."
                },
                "attribute": "orientation",
                "reflect": true,
                "defaultValue": "NavigationTabsOrientation.HORIZONTAL"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NavigationTabsSize",
                    "resolved": "NavigationTabsSize.BIG | NavigationTabsSize.SMALL",
                    "references": {
                        "NavigationTabsSize": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::NavigationTabsSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tab size. Do not set this manually: `z-navigation-tabs` will handle this."
                },
                "attribute": "size",
                "reflect": true,
                "defaultValue": "NavigationTabsSize.BIG"
            },
            "htmlTitle": {
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
                    "text": "Html title attribute for the anchor element."
                },
                "attribute": "html-title",
                "reflect": false
            },
            "target": {
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
                    "text": "Html `target` attribute for the anchor element."
                },
                "attribute": "target",
                "reflect": false
            },
            "href": {
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
                    "text": "Url to set to the anchor element."
                },
                "attribute": "href",
                "reflect": false
            },
            "icon": {
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
                    "text": "Name of the icon to use.\nThe `filled` version will be automatically used (if found) when the tab is `selected`."
                },
                "attribute": "icon",
                "reflect": false
            },
            "label": {
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
                    "text": "Label to show in the tab."
                },
                "attribute": "label",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "selectedEvent",
                "name": "selected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The tab has been selected."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "selected",
                "methodName": "onSelected"
            }];
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "onClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map
