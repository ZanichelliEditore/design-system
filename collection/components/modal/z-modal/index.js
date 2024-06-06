import { h } from "@stencil/core";
import dialogPolyfill from "dialog-polyfill";
import { KeyboardCode } from "../../../beans";
const FOCUSABLE_ELEMENTS_SELECTOR = ':is(button, input, select, textarea, [contenteditable=""], [contenteditable="true"], a[href], [tabindex], summary):not([disabled], [disabled=""], [tabindex="-1"], [aria-hidden="true"], [hidden])';
/**
 * @slot modalCloseButton - accept custom close button
 * @slot modalContent - set the content of the modal
 */
export class ZModal {
    constructor() {
        this.modalid = undefined;
        this.modaltitle = undefined;
        this.modalsubtitle = undefined;
        this.closeButtonLabel = "chiudi modale";
        this.alertdialog = false;
        this.closable = true;
        this.scrollInside = true;
    }
    emitModalClose() {
        if (this.closable) {
            this.modalClose.emit({ modalid: this.modalid });
        }
    }
    emitModalHeaderActive() {
        this.modalHeaderActive.emit({ modalid: this.modalid });
    }
    emitBackgroundClick() {
        if (this.closable) {
            this.modalBackgroundClick.emit({ modalid: this.modalid });
        }
    }
    componentDidLoad() {
        if (typeof window.HTMLDialogElement !== "function") {
            /* workaround to fix `registerDialog` in test environment:
            stencil converts html elements to MockHTMLElement but this element is missing the `localName` property,
            which is used by `registerDialog` to recognize the element as dialog */
            if (!this.dialog.localName) {
                Object.defineProperty(this.dialog, "localName", { value: "dialog" });
            }
            dialogPolyfill.registerDialog(this.dialog);
            this.dialog.setAttribute("open", "true");
        }
        else {
            this.open();
        }
    }
    /** open modal */
    async open() {
        var _a;
        (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.showModal();
    }
    /** close modal */
    async close() {
        var _a;
        if (this.closable) {
            (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.close();
        }
    }
    /**
     * Get a list of focusable elements in the dialog.
     * Remove elements with `display: none` from the list, because they're not focusable.
     *
     * N.B. The list is built on the assumption that elements inside shadow root are placed ALL before the `modalContent` slot.
     * Adding focusable elements after the `modalContent` slot would break the order of elements in the list.
     */
    get focusableElements() {
        return [
            ...Array.from(this.host.shadowRoot.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)),
            ...Array.from(this.host.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)),
        ].filter((element) => getComputedStyle(element).display !== "none");
    }
    handleKeyDown(e) {
        if (e.code !== KeyboardCode.TAB) {
            return;
        }
        const focusableElements = this.focusableElements;
        const shadowActiveElement = this.host.shadowRoot.activeElement;
        const activeElement = this.host.ownerDocument.activeElement;
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];
        if (e.shiftKey && (shadowActiveElement == firstFocusableElement || activeElement == firstFocusableElement)) {
            // shift + tab was pressed and current active element is the first focusable element
            e.preventDefault();
            lastFocusableElement.focus();
        }
        else if (!e.shiftKey && (shadowActiveElement == lastFocusableElement || activeElement == lastFocusableElement)) {
            // shift + tab was pressed and current active element is the first focusable element
            e.preventDefault();
            firstFocusableElement.focus();
        }
    }
    closeButtonSlot() {
        if (this.closable) {
            return (h("slot", { name: "modalCloseButton" }, h("button", { "aria-label": this.closeButtonLabel, onClick: () => this.close() }, h("z-icon", { name: "multiply-circle-filled" }))));
        }
    }
    handleEscape(e) {
        if (this.closable) {
            return;
        }
        e.preventDefault();
    }
    render() {
        return (h("dialog", { key: 'e2e7b6cf379e4d8a0636b926901047a752184ac8', class: {
                "modal-dialog": !this.scrollInside,
            }, "aria-labelledby": "modal-title", "aria-describedby": "modal-content", role: this.alertdialog ? "alertdialog" : undefined, ref: (el) => (this.dialog = el), onClose: () => this.emitModalClose(), onCancel: (e) => this.handleEscape(e) }, h("div", { key: 'fc3170c92b4b0bb67f23fd8b00a9540b64f9583a', class: {
                "modal-container": true,
                "modal-container-scroll-inside": this.scrollInside,
                "modal-container-scroll-outside": !this.scrollInside,
            }, id: this.modalid }, h("header", { key: '268f689959051dc304efd99dd64a4eb5ac47aa17', onClick: this.emitModalHeaderActive.bind(this) }, h("div", { key: '5651d45bddad36999eddf25863a7d398cc87cf91' }, this.modaltitle && h("h1", { id: "modal-title" }, this.modaltitle), this.closeButtonSlot()), this.modalsubtitle && h("h2", { id: "modal-subtitle" }, this.modalsubtitle)), h("div", { key: '93eae28fa449cc1830d533e93b46e580d4be4540', class: {
                "modal-content-scroll-inside": this.scrollInside,
                "modal-content-scroll-outside": !this.scrollInside,
            }, id: "modal-content" }, h("slot", { key: 'a38384cf4d2c4eadda052099f3d47f2457585555', name: "modalContent" }))), h("div", { key: '10f7f01194bd21059d9afb15c421eb9354b77302', class: {
                "modal-background": true,
                "modal-background-scroll-outside": !this.scrollInside,
            }, "data-action": "modalBackground", "data-modal": this.modalid, onClick: () => {
                this.emitBackgroundClick();
                this.close();
            } })));
    }
    static get is() { return "z-modal"; }
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
            "modalid": {
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
                    "text": "unique id"
                },
                "attribute": "modalid",
                "reflect": false
            },
            "modaltitle": {
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
                    "tags": [],
                    "text": "title text (optional)"
                },
                "attribute": "modaltitle",
                "reflect": false
            },
            "modalsubtitle": {
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
                    "tags": [],
                    "text": "subtitle (optional)"
                },
                "attribute": "modalsubtitle",
                "reflect": false
            },
            "closeButtonLabel": {
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
                    "text": "aria-label for close button (optional)"
                },
                "attribute": "close-button-label",
                "reflect": false,
                "defaultValue": "\"chiudi modale\""
            },
            "alertdialog": {
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
                    "text": "add role \"alertdialog\" to dialog (optional, default is false)"
                },
                "attribute": "alertdialog",
                "reflect": false,
                "defaultValue": "false"
            },
            "closable": {
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
                    "text": "if true, the modal is closable (optional, default is true)"
                },
                "attribute": "closable",
                "reflect": false,
                "defaultValue": "true"
            },
            "scrollInside": {
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
                    "text": "if true, the modal can scroll inside, if false the viewport can scroll"
                },
                "attribute": "scroll-inside",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get events() {
        return [{
                "method": "modalClose",
                "name": "modalClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "emitted on close button click, returns modalid"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "modalHeaderActive",
                "name": "modalHeaderActive",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "emitted on modal header click, returns modalid"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "modalBackgroundClick",
                "name": "modalBackgroundClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "emitted on background click, returns modalid"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "open": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "open modal",
                    "tags": []
                }
            },
            "close": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "close modal",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "host"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map
