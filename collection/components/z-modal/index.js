import { h } from "@stencil/core";
import dialogPolyfill from "dialog-polyfill";
import { KeyboardCode } from "../../beans";
import { mobileBreakpoint } from "../../constants/breakpoints";
const FOCUSABLE_ELEMENTS_SELECTOR = ':is(button, input, select, textarea, [contenteditable=""], [contenteditable="true"], a[href], [tabindex], summary):not([disabled], [disabled=""], [tabindex="-1"], [aria-hidden="true"], [hidden])';
/**
 * @slot modalCloseButton - accept custom close button
 * @slot modalContent - set the content of the modal
 * @cssprop --z-modal-content-padding - set a default padding for the modal content slot to 16px
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
    handlePageOverflow() {
        const mobileMediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
        document.body.style["overflow-y"] = mobileMediaQuery.matches ? "hidden" : "";
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
        this.handlePageOverflow();
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
        if (e.code === KeyboardCode.ESC && !this.closable) {
            e.preventDefault();
        }
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
        return (h("dialog", { key: '15eba99f071f5b0b57743e44b916c4ea6970f07a', class: {
                "modal-dialog": !this.scrollInside,
            }, "aria-labelledby": "modal-title", "aria-describedby": "modal-content", role: this.alertdialog ? "alertdialog" : undefined, ref: (el) => (this.dialog = el), onClose: () => this.emitModalClose(), onCancel: (e) => this.handleEscape(e) }, h("div", { key: '82ac5037fd70c3661dce7bd34300dd249aa1e052', class: {
                "modal-container": true,
                "modal-container-scroll-inside": this.scrollInside,
                "modal-container-scroll-outside": !this.scrollInside,
            }, id: this.modalid }, h("header", { key: '4885ed46b798305fc01456487c500aa89fbced3e', onClick: this.emitModalHeaderActive.bind(this) }, h("div", { key: '87d47369f0bb766cead5aee4889b0f7fbf96ded3' }, this.modaltitle && h("h1", { key: '79974d32cd15dc7c423f7cdd570f7eeb88c66b3f', id: "modal-title" }, this.modaltitle), this.closeButtonSlot()), this.modalsubtitle && (h("div", { key: 'da3e80cba34e51cf4c635839e7e989872144625f', class: "subtitle", id: "modal-subtitle" }, this.modalsubtitle))), h("div", { key: 'a4fea6c1784848e10390553f879873a7140d87d3', class: {
                "modal-content-scroll-inside": this.scrollInside,
                "modal-content-scroll-outside": !this.scrollInside,
            }, id: "modal-content" }, h("slot", { key: '2ff2465682aeb86fac11b7dd3edd788946295bc7', name: "modalContent" }))), h("div", { key: '1ad45c5b879fd7ae2d3d3560e7ad4199e8c0268d', class: {
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
