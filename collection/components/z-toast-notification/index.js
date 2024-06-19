import { Host, h } from "@stencil/core";
import { ToastNotificationTransition } from "../../beans";
import { mobileBreakpoint } from "../../constants/breakpoints";
import Hammer from "hammerjs";
export class ZToastNotification {
    constructor() {
        this.isCloseEventCalled = false;
        this.heading = undefined;
        this.message = undefined;
        this.closebutton = undefined;
        this.autoclose = undefined;
        this.pauseonfocusloss = true;
        this.type = undefined;
        this.isdraggable = true;
        this.draggablepercentage = 80;
        this.transition = undefined;
        this.percentage = undefined;
    }
    watchPropIsdraggable(newValue) {
        if (newValue) {
            this.sliderManager.get("pan").set({ enable: true });
        }
        else {
            this.sliderManager.get("pan").set({ enable: false });
        }
    }
    watchPropAutoclose(newValue) {
        clearTimeout(this.timeoutHandle);
        this.startClosingTimeout(newValue);
    }
    watchPropPauseonfocusloss(newValue) {
        if (this.autoclose) {
            if (newValue) {
                document.addEventListener("visibilitychange", this.visibilityChangeEventHandler);
            }
            else {
                document.removeEventListener("visibilitychange", this.visibilityChangeEventHandler);
            }
        }
    }
    emitToastClose(cssClass) {
        this.timeoutHandle = null;
        this.elapsedTime = null;
        this.hostElement.classList.add(cssClass);
        this.toastClose.emit();
    }
    componentWillLoad() {
        this.isMobile = window.innerWidth <= mobileBreakpoint;
        this.validateAutoclose();
        this.percentage = 0;
    }
    componentDidLoad() {
        this.isTextLong = this.detectWrap() || this.toastText.offsetHeight > 20;
        this.startTime = Date.now();
        if (this.autoclose && this.pauseonfocusloss) {
            document.addEventListener("visibilitychange", this.visibilityChangeEventHandler);
        }
        this.isdraggable && this.handleSlideOutDragAnimation();
    }
    visibilityChangeEventHandler() {
        if (document.visibilityState === "hidden") {
            this.timeoutHandle && this.onBlur();
        }
        else {
            this.elapsedTime && this.onFocus();
        }
    }
    validateAutoclose() {
        if (!this.autoclose && !this.closebutton) {
            console.error("At least one between autoclose and closebutton must be present");
        }
    }
    mapSlideOutClass() {
        switch (this.transition) {
            case ToastNotificationTransition.SLIDE_IN_DOWN:
                return ToastNotificationTransition.SLIDE_OUT_UP;
            case ToastNotificationTransition.SLIDE_IN_UP:
                return ToastNotificationTransition.SLIDE_OUT_DOWN;
            case ToastNotificationTransition.SLIDE_IN_LEFT:
                return ToastNotificationTransition.SLIDE_OUT_RIGHT;
            case ToastNotificationTransition.SLIDE_IN_RIGHT:
                return ToastNotificationTransition.SLIDE_OUT_LEFT;
        }
    }
    calculateDraggedPercentage(e) {
        const bounding = this.hostElement.getBoundingClientRect();
        return Math.round((100 * e.deltaX) / bounding.width);
    }
    handleSlideOutDragAnimation() {
        this.sliderManager = new Hammer(this.hostElement);
        this.sliderManager.get("pan").set({
            direction: Hammer.DIRECTION_HORIZONTAL,
        });
        this.sliderManager.on("pan", (e) => {
            this.percentage = this.calculateDraggedPercentage(e);
            this.hostElement.style.transition = "none";
            this.hostElement.classList.remove(this.transition);
            const translateObj = {
                translate: `translateX(${this.percentage}%)`,
                translateBack: "translateX(0)",
            };
            this.hostElement.style.opacity = `${100 - Math.abs(this.percentage)}%`;
            if (e.eventType === Hammer.DIRECTION_LEFT || e.eventType === Hammer.DIRECTION_RIGHT) {
                this.hostElement.style.transform = translateObj.translate;
                if (Math.abs(this.percentage) > this.draggablepercentage && !this.isCloseEventCalled) {
                    this.isCloseEventCalled = true;
                    this.emitToastClose(e.direction === Hammer.DIRECTION_LEFT ? "slide-out-left" : "slide-out-right");
                }
            }
            if (e.isFinal && Math.abs(this.percentage) < this.draggablepercentage) {
                this.hostElement.style.transform = translateObj.translateBack;
                this.hostElement.style.transition = "all 1s";
                this.hostElement.style.opacity = "100%";
                this.percentage = 0;
            }
        });
    }
    onFocus() {
        let time = this.autoclose;
        if (this.elapsedTime) {
            time = this.autoclose - this.elapsedTime;
        }
        if (time > 0) {
            this.startClosingTimeout(time);
        }
    }
    onBlur() {
        this.elapsedTime = Date.now() - this.startTime;
        clearTimeout(this.timeoutHandle);
    }
    startClosingTimeout(time) {
        this.timeoutHandle = window.setTimeout(() => this.emitToastClose(this.mapSlideOutClass()), time);
    }
    detectWrap() {
        const parentWidth = this.container.offsetWidth;
        const children = this.container.children;
        let totalWidth = 0;
        for (let i = 0; i < children.length; i++) {
            totalWidth += children[i].offsetWidth;
        }
        return totalWidth > parentWidth;
    }
    renderText() {
        return (h("div", { id: "text", ref: (el) => (this.toastText = el) }, h("span", { class: "title" }, this.heading), h("span", { class: "message" }, this.message)));
    }
    renderButton() {
        return (h("div", { id: "button" }, h("slot", { name: "button" })));
    }
    renderCloseIcon() {
        if (!this.closebutton) {
            return;
        }
        return (h("div", { id: "icon" }, h("z-icon", { tabIndex: 0, name: "multiply-circled", width: 15, height: 15, onClick: () => this.emitToastClose(this.mapSlideOutClass()), onKeyPress: (e) => {
                if (e.keyCode == 32 || e.keyCode == 13) {
                    e.preventDefault();
                    this.emitToastClose(this.mapSlideOutClass());
                }
            } })));
    }
    renderContainer() {
        return (h("div", { tabIndex: 0, id: "external-container", class: {
                [this.type]: !!this.type,
                "several-lines-padding": this.isTextLong,
            }, ref: (el) => (this.container = el) }, this.renderText(), this.renderButton(), this.renderCloseIcon()));
    }
    renderMobileContainer() {
        return (h("div", { id: "external-container", class: {
                [this.type]: !!this.type,
                "several-lines-padding": this.isTextLong,
                "mobile-wrapped": this.isTextLong,
            } }, h("div", { id: "flex-container", ref: (el) => (this.container = el) }, this.renderText(), this.renderButton()), this.renderCloseIcon()));
    }
    render() {
        return (h(Host, { key: 'bf20c69f253b702092fe078443eedb9e86fe223a', style: {
                "--percentuale": `${this.percentage}%`,
            }, class: this.transition ? this.transition : ToastNotificationTransition.SLIDE_IN_DOWN, onAnimationEnd: (e) => {
                if (this.autoclose && e.animationName.includes("slidein")) {
                    this.startClosingTimeout(this.autoclose);
                }
                if (e.animationName.includes("slideout")) {
                    this.hostElement.parentNode.removeChild(this.hostElement);
                }
            } }, this.isMobile ? this.renderMobileContainer() : this.renderContainer()));
    }
    static get is() { return "z-toast-notification"; }
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
            "heading": {
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
                    "text": "toast notification's title"
                },
                "attribute": "heading",
                "reflect": false
            },
            "message": {
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
                    "text": "toast notification's message"
                },
                "attribute": "message",
                "reflect": false
            },
            "closebutton": {
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
                    "text": "toggles closing button rendering"
                },
                "attribute": "closebutton",
                "reflect": false
            },
            "autoclose": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "toast notification closing timeout (ms)"
                },
                "attribute": "autoclose",
                "reflect": false
            },
            "pauseonfocusloss": {
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
                    "text": "toast notification autoclose can be paused"
                },
                "attribute": "pauseonfocusloss",
                "reflect": false,
                "defaultValue": "true"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ToastNotification",
                    "resolved": "ToastNotification.ACCENT | ToastNotification.DARK | ToastNotification.ERROR | ToastNotification.LIGHT | ToastNotification.SUCCESS | ToastNotification.WARNING",
                    "references": {
                        "ToastNotification": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::ToastNotification"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "toast notification type: dark, light, accent, error, success, warning"
                },
                "attribute": "type",
                "reflect": false
            },
            "isdraggable": {
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
                    "text": "toast notification can be draggable"
                },
                "attribute": "isdraggable",
                "reflect": false,
                "defaultValue": "true"
            },
            "draggablepercentage": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "toast notification draggable percentage"
                },
                "attribute": "draggablepercentage",
                "reflect": false,
                "defaultValue": "80"
            },
            "transition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ToastNotificationTransition",
                    "resolved": "ToastNotificationTransition.SLIDE_IN_DOWN | ToastNotificationTransition.SLIDE_IN_LEFT | ToastNotificationTransition.SLIDE_IN_RIGHT | ToastNotificationTransition.SLIDE_IN_UP | ToastNotificationTransition.SLIDE_OUT_DOWN | ToastNotificationTransition.SLIDE_OUT_LEFT | ToastNotificationTransition.SLIDE_OUT_RIGHT | ToastNotificationTransition.SLIDE_OUT_UP",
                    "references": {
                        "ToastNotificationTransition": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::ToastNotificationTransition"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "toast notification animation type: slide-in-left, slide-in-right, slide-in-down, slide-in-up"
                },
                "attribute": "transition",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "percentage": {}
        };
    }
    static get events() {
        return [{
                "method": "toastClose",
                "name": "toastClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "notification close event"
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
                "propName": "isdraggable",
                "methodName": "watchPropIsdraggable"
            }, {
                "propName": "autoclose",
                "methodName": "watchPropAutoclose"
            }, {
                "propName": "pauseonfocusloss",
                "methodName": "watchPropPauseonfocusloss"
            }];
    }
}
//# sourceMappingURL=index.js.map
