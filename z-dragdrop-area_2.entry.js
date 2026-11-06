import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-SFwvdS4t.js';
import { g as KeyboardCode } from './index-DdetsoIY.js';
import { R as ReactiveControllerHost, F as FocusTrapController } from './reactive-controller-Bp_OSSRX.js';
import './utils-CJc3A9NX.js';
import './breakpoints-Q-tWjk7P.js';

const stylesCss$1 = () => `:host{position:relative;display:flex;width:100%;height:232px;flex-direction:column;align-items:center;padding:calc(var(--space-unit) * 3);background-color:var(--color-surface02);background-image:repeating-linear-gradient(       0deg,       var(--color-surface03),       var(--color-surface03) 12px,       transparent 12px,       transparent 20px     ),     repeating-linear-gradient(       90deg,       var(--color-surface03),       var(--color-surface03) 12px,       transparent 12px,       transparent 20px     ),     repeating-linear-gradient(       180deg,       var(--color-surface03),       var(--color-surface03) 12px,       transparent 12px,       transparent 20px     ),     repeating-linear-gradient(       270deg,       var(--color-surface03),       var(--color-surface03) 12px,       transparent 12px,       transparent 20px     );background-position:0 0,     0 0,     100% 0,     0 100%;background-repeat:no-repeat;background-size:2px 100%,     100% 2px,     2px 100%,     100% 2px;border-radius:var(--border-radius-small);color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host,*{box-sizing:border-box}:host(.dragover) *{pointer-events:none}.dragover-container{position:absolute;z-index:1;top:0;left:0;display:none;width:100%;height:100%;background-color:var(--color-primary03);box-shadow:var(--shadow-focus-primary)}:host(.dragover) .dragover-container{display:flex;align-items:center;justify-content:center}`;

const ZDragdropArea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fileDropped = createEvent(this, "fileDropped", 7);
        /** State that indicates if the user is dragging a file over the drag & drop area */
        this.dragging = false;
    }
    onDrop(e) {
        e.preventDefault();
        this.dragging = false;
        if (e.dataTransfer.files.length) {
            this.fileDropped.emit(e.dataTransfer.files);
        }
    }
    render() {
        return (h(Host, { key: '82abca2596010f327e84e26f467f97335530bf6a', class: { dragover: this.dragging }, onDragOver: (e) => {
                e.preventDefault();
                this.dragging = true;
            }, onDragLeave: () => {
                this.dragging = false;
            }, onDrop: this.onDrop.bind(this) }, h("div", { key: '4cbbe1e986341df2960c366019a0d952fdcf011f', class: "dragover-container" }, h("z-button", { key: 'e5dfdbc943876a9f618083594d1f4f148a084052' }, this.dragAndDropLabel)), h("slot", { key: '87b3bbaa60996d169f7e220da1c3306de5237357' })));
    }
};
ZDragdropArea.style = stylesCss$1();

const stylesCss = () => `:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>dialog{padding:0;border:none;margin:0;background-color:transparent}:host>dialog:modal{width:100%;max-width:100%;max-height:100%}:host>dialog::backdrop{display:none}:host>dialog+.backdrop{display:none}:host>dialog:not([open]){display:none}:host>dialog[open]{display:block}::slotted([slot="modalContent"]){padding:var(--z-modal-content-padding, calc(var(--space-unit) * 2))}.modal-container{z-index:1010;display:flex;overflow:-moz-scrollbars-none;width:100%;height:100vh;flex-direction:column}.modal-container>.modal-content-scroll-outside{overflow:auto;background:var(--color-surface01)}.modal-container>header{padding:calc(var(--space-unit) * 1.75) calc(var(--space-unit) * 2);background:var(--color-background)}.modal-container>header button{padding:0;border:none;margin:0;margin-left:auto;background:transparent;cursor:pointer}.modal-container>header button:focus-visible{border-radius:50%;box-shadow:var(--shadow-focus-primary);outline:none !important}.modal-container>header button::after{position:absolute;top:6px;right:4px;display:block;width:40px;height:40px;background-color:transparent;content:""}.modal-container>header z-icon{--z-icon-width:calc(var(--space-unit) * 2.25);--z-icon-height:calc(var(--space-unit) * 2.25);display:flex;fill:var(--color-primary01-icon)}.modal-container>header>div{display:flex;width:100%;align-items:baseline;margin-right:calc(var(--space-unit) * 2)}.modal-container>header h1,.modal-container>header .subtitle{padding:0;margin:0;color:var(--color-default-text);font-weight:var(--font-sb)}.modal-container>header h1{font-size:var(--font-size-5);letter-spacing:0;line-height:1.4}.modal-container>header .subtitle{font-size:var(--font-size-3);font-weight:var(--font-rg);letter-spacing:0;line-height:1.5}.modal-container>header>div>h1 *:empty{display:none}.modal-container>header h1+.subtitle{margin-top:calc(var(--space-unit) * 0.5)}.modal-container-scroll-inside>.modal-content-scroll-inside{overflow:hidden auto;flex:1 auto;background:var(--color-surface01)}.modal-container-scroll-inside>.modal-content-scroll-inside::-webkit-scrollbar,.modal-container-scroll-outside>.modal-content-scroll-outside::-webkit-scrollbar{width:6px;background:linear-gradient(to right, transparent 0 1px, var(--gray200) 1px 5px, transparent 5px 6px)}.modal-container-scroll-inside>.modal-content-scroll-inside::-webkit-scrollbar-thumb,.modal-container-scroll-outside>.modal-content-scroll-outside::-webkit-scrollbar-thumb{background-color:var(--color-primary01)}.modal-container-scroll-inside>.modal-content-scroll-inside::-webkit-scrollbar-thumb:hover,.modal-container-scroll-outside>.modal-content-scroll-outside::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}@supports not selector(::-webkit-scrollbar-track){.modal-container-scroll-inside .modal-content-scroll-inside,.modal-container-scroll-outside .modal-content-scroll-outside{scrollbar-color:var(--color-primary01) transparent}}@media only screen and (min-width: 768px){.modal-background{position:fixed;top:0;left:0;overflow:hidden;width:100vw;height:100vh;background-color:var(--gray900);opacity:0.7}.modal-background.modal-background-scroll-outside{position:sticky}.modal-container-scroll-inside{position:fixed;top:calc(var(--space-unit) * 6);left:50%;overflow:hidden;width:auto;min-width:calc(var(--space-unit) * 40);height:auto;min-height:calc(var(--space-unit) * 40);max-height:calc(100vh - calc(var(--space-unit) * 6 * 2));border-radius:var(--border-radius);transform:translateX(-50%)}.modal-container-scroll-outside{position:absolute;top:calc(var(--space-unit) * 6);left:50%;display:block;overflow:initial;width:auto;min-width:calc(var(--space-unit) * 40);height:auto;min-height:calc(var(--space-unit) * 40);max-height:calc(100vh - calc(var(--space-unit) * 6 * 2));transform:translateX(-50%)}.modal-container>.modal-content-scroll-outside{overflow:initial}.modal-container-scroll-outside>header,.modal-container-scroll-inside>header{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius)}.modal-container-scroll-outside::after{display:block;height:calc(var(--space-unit) * 6);content:" "}.modal-dialog{position:fixed;top:0;left:0;height:auto;overflow-x:hidden;overflow-y:auto}.modal-content-scroll-outside{border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}.modal-dialog::-webkit-scrollbar{display:none}}@media (min-width: 1152px){.modal-container>header{padding-top:calc(var(--space-unit) * 1.5);padding-bottom:calc(var(--space-unit) * 1.5)}.modal-container>header h1{font-size:var(--font-size-6);font-weight:var(--font-sb);letter-spacing:0;line-height:1.333}.modal-container>header .subtitle{font-size:var(--font-size-4);font-weight:var(--font-rg);letter-spacing:0;line-height:1.5}.modal-container>header h1+.subtitle{margin-top:0}}`;

const ZModal = class extends ReactiveControllerHost {
    constructor(hostRef) {
        super();
        registerInstance(this, hostRef);
        this.modalClose = createEvent(this, "modalClose", 7);
        this.modalHeaderActive = createEvent(this, "modalHeaderActive", 7);
        this.modalBackgroundClick = createEvent(this, "modalBackgroundClick", 7);
        /** aria-label for close button (optional) */
        this.closeButtonLabel = "chiudi modale";
        /** add role "alertdialog" to dialog (optional, default is false) */
        this.alertdialog = false;
        /** if true, the modal is closable (optional, default is true) */
        this.closable = true;
        /** if true, the modal can scroll inside, if false the viewport can scroll */
        this.scrollInside = true;
        /** if true, the page scroll is locked when the modal is open (optional, default is true) */
        this.lockPageScroll = true;
        this.focusTrapController = new FocusTrapController(this, {
            isActive: () => { var _a; return !!((_a = this.dialog) === null || _a === void 0 ? void 0 : _a.open); },
        });
    }
    emitModalClose() {
        if (this.closable) {
            this.modalClose.emit({ modalid: this.modalid });
            this.resetPageScroll();
        }
    }
    emitModalHeaderActive() {
        this.modalHeaderActive.emit({ modalid: this.modalid });
    }
    emitBackgroundClick() {
        if (this.closable) {
            this.modalBackgroundClick.emit({ modalid: this.modalid });
            this.resetPageScroll();
        }
    }
    resetPageScroll() {
        if (this.lockPageScroll && document.body.style.overflowY === "hidden") {
            document.body.style.overflowY = "";
        }
    }
    async componentDidLoad() {
        if (typeof window.HTMLDialogElement !== "function") {
            /* workaround to fix `registerDialog` in test environment:
            stencil converts html elements to MockHTMLElement but this element is missing the `localName` property,
            which is used by `registerDialog` to recognize the element as dialog */
            if (!this.dialog.localName) {
                Object.defineProperty(this.dialog, "localName", { value: "dialog" });
            }
            /* imported dynamically so its browser-only, module-level side effects (e.g. reading `window.CustomEvent`)
            never run at module-evaluation time in non-browser environments (e.g. Next.js SSR) */
            const { default: dialogPolyfill } = await import('./dialog-polyfill.esm-BRkq64wS.js');
            dialogPolyfill.registerDialog(this.dialog);
            this.dialog.setAttribute("open", "true");
        }
        else {
            this.open();
        }
        if (this.lockPageScroll) {
            requestAnimationFrame(() => (document.body.style.overflowY = "hidden"));
        }
        super.componentDidLoad();
    }
    disconnectedCallback() {
        this.resetPageScroll();
        super.disconnectedCallback();
    }
    /** open modal */
    async open() {
        var _a;
        (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.showModal();
        this.focusTrapController.sync();
        if (this.lockPageScroll) {
            document.body.style.overflowY = "hidden";
        }
    }
    /** close modal */
    async close() {
        var _a;
        if (this.closable) {
            (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.close();
            this.focusTrapController.sync();
            this.resetPageScroll();
        }
    }
    handleKeyDown(e) {
        if (e.code === KeyboardCode.ESC && !this.closable) {
            e.preventDefault();
            return;
        }
        this.focusTrapController.handleWrapTab(e);
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
        return (h("dialog", { key: 'a026e645b988998615f3de851aeb8570aea2fef5', class: {
                "modal-dialog": !this.scrollInside,
            }, "aria-labelledby": "modal-title", "aria-describedby": "modal-content", role: this.alertdialog ? "alertdialog" : undefined, ref: (el) => (this.dialog = el), onClose: () => this.emitModalClose(), onCancel: (e) => this.handleEscape(e) }, h("div", { key: 'b33c29adaf79d1d1877920449abd6f855933b0c6', class: {
                "modal-container": true,
                "modal-container-scroll-inside": this.scrollInside,
                "modal-container-scroll-outside": !this.scrollInside,
            }, id: this.modalid }, h("header", { key: '0aca8cb8d108f740727f82cc931200fdfd46701f', onClick: this.emitModalHeaderActive.bind(this) }, h("div", { key: '98069316157067cef2c72cc9e755dc7a90c8053b' }, this.modaltitle && h("h1", { key: '9a2f63c8b2482e0fbf4f77d8d164f4513f01587c', id: "modal-title" }, this.modaltitle), this.closeButtonSlot()), this.modalsubtitle && (h("div", { key: 'c84e5555a066f07ce2c854ccdd5bb837b61413f9', class: "subtitle", id: "modal-subtitle" }, this.modalsubtitle))), h("div", { key: '0fef308aa9282ca3cdb3f3998e0dbcba7b535f7c', class: {
                "modal-content-scroll-inside": this.scrollInside,
                "modal-content-scroll-outside": !this.scrollInside,
            }, id: "modal-content" }, h("slot", { key: '8a0b16d630c6c2540b688c8b80cbca2dbd744ed0', name: "modalContent" }))), h("div", { key: 'd57cf53e6b6a992c82fce53393984795a3934879', class: {
                "modal-background": true,
                "modal-background-scroll-outside": !this.scrollInside,
            }, "data-action": "modalBackground", "data-modal": this.modalid, onClick: () => {
                this.emitBackgroundClick();
                this.close();
            } })));
    }
    get host() { return getElement(this); }
};
ZModal.style = stylesCss();

export { ZDragdropArea as z_dragdrop_area, ZModal as z_modal };
