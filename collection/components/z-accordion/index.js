import { h } from "@stencil/core";
import { AccordionVariant, ControlSize } from "../../beans";
/**
 * Accordion component.
 *
 * @slot - Slot for the main content.
 * @slot tag - Slot for tags.
 * @cssprop --z-accordion-highlight-color - Color of the highlight band on the summary's left edge. Only applies when `highlight` is true. Default: `transparent`.
 * @cssprop --z-accordion-bg - Background color of the summary. Default: `--color-surface02`.
 * @cssprop --z-accordion-label-color - Label color. Default: `--color-default-text`.
 * @cssprop --z-accordion-disabled-label-color - Label color when disabled. Default: `--color-text03`.
 * @cssprop --z-accordion-content-bg - Background color of the accordion. Default: `--color-surface02`.
 * @cssprop --z-accordion-content-fg - Content text color. Default: `--color-default-text`.
 * @cssprop --z-accordion-hover-color - Hover color of the summary. Default: `--color-surface03`.
 * @cssprop --z-accordion-left-padding - Left padding of the summary. Default: `--space-unit` * 2.
 * @cssprop --z-accordion-right-padding - Right padding of the summary. Default: `--space-unit`.
 * @cssprop --z-accordion-label-font-weight - Font weight of the summary label. Default: `--font-sb`.
 */
export class ZAccordion {
    constructor() {
        this.label = undefined;
        this.icon = undefined;
        this.size = ControlSize.BIG;
        this.isDisabled = false;
        this.open = false;
        this.highlight = false;
        this.variant = AccordionVariant.DEFAULT;
        this.shadow = true;
    }
    onDisabledChange() {
        if (this.isDisabled) {
            this.open = false;
        }
    }
    /**
     * Handle `details` element toggle.
     * If currently disabled, prevent toggling by forcing the `open` state to `false`.
     * Unfortunately the "toggle" event is not cancelable and when catched, the `open` state is already changed.
     */
    onDetailsToggle() {
        if (this.isDisabled) {
            this.open = false;
            this.detailsElm.open = false;
            return;
        }
        this.open = this.detailsElm.open;
        this.toggled.emit(this.open);
    }
    render() {
        return (h("details", { key: '38787e09f78228eedda870ebd2380feae9f221ef', ref: (elm) => (this.detailsElm = elm), onToggle: this.onDetailsToggle.bind(this), open: this.open }, h("summary", { key: '5eebc1fe756b6ef603bd0170fd53aa9548e02dec', tabIndex: this.isDisabled ? -1 : null, part: "summary" }, this.icon && (h("z-icon", { key: '741eab4038e866bc34259348e66d0115a55ad333', class: "z-accordion-label-icon", name: this.icon })), h("span", { key: 'e82c28a47084aba4a031ce947ac22e73d9c0c26d', class: "z-accordion-label" }, this.label), h("span", { key: '20279a9c0935c533a909a124a1f87f266d5783a3', class: "z-accordion-tags" }, h("slot", { key: '697e5e1cfb5764da59ded7eec41a3e7a2edd56b4', name: "tag" })), h("z-icon", { key: '079968872230475ee1783077819387e205ebdf72', class: "z-accordion-chevron", name: this.open ? "chevron-up" : "chevron-down" })), !this.isDisabled && (h("div", { key: '4377a46e29de0d5e079f1e8011b3e6e10bf1a876', class: "z-accordion-content", part: "content" }, h("slot", { key: 'e998671e6f42b524ab26d2ef71931acf5ed680b7' })))));
    }
    static get is() { return "z-accordion"; }
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
                    "text": "Text label."
                },
                "attribute": "label",
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
                    "text": "Name of the z-icon to display before the label's text."
                },
                "attribute": "icon",
                "reflect": false
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ControlSize",
                    "resolved": "ControlSize.BIG | ControlSize.SMALL | ControlSize.X_SMALL",
                    "references": {
                        "ControlSize": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::ControlSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the component."
                },
                "attribute": "size",
                "reflect": true,
                "defaultValue": "ControlSize.BIG"
            },
            "isDisabled": {
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
                    "text": "Disabled state of the accordion."
                },
                "attribute": "is-disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The open state of the accordion."
                },
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            },
            "highlight": {
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
                    "text": "Enable highlight band on the `summary`'s left edge."
                },
                "attribute": "highlight",
                "reflect": true,
                "defaultValue": "false"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AccordionVariant",
                    "resolved": "AccordionVariant.BACKGROUND | AccordionVariant.DEFAULT",
                    "references": {
                        "AccordionVariant": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::AccordionVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accordion variant."
                },
                "attribute": "variant",
                "reflect": true,
                "defaultValue": "AccordionVariant.DEFAULT"
            },
            "shadow": {
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
                    "text": "Enable box-shadow on the accordion. Only applies when `variant` is `BACKGROUND`."
                },
                "attribute": "shadow",
                "reflect": true,
                "defaultValue": "true"
            }
        };
    }
    static get events() {
        return [{
                "method": "toggled",
                "name": "toggled",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event fired when the accordion is toggled."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "isDisabled",
                "methodName": "onDisabledChange"
            }];
    }
}
//# sourceMappingURL=index.js.map
