import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-ab5f1eaa.js';
import { s as ToastNotificationTransition } from './index-2255c6c8.js';
import { m as mobileBreakpoint } from './breakpoints-680e0e56.js';
import { H as Hammer } from './hammer-f1ed46b5.js';

const stylesCss = ":host{display:inline-block;width:100vw;min-width:200px;--percentuale:0}:host(.slide-in-left){-webkit-animation:slideinleft 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation:slideinleft 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}:host(.slide-in-right){-webkit-animation:slideinright 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation:slideinright 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}:host(.slide-in-down){-webkit-animation:slideindown 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation:slideindown 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}:host(.slide-in-up){-webkit-animation:slideinup 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation:slideinup 1s cubic-bezier(0.25, 0.1, 0.25, 0.1);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}:host(.slide-out-left){-webkit-animation:slideoutleft 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation:slideoutleft 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}:host(.slide-out-right){-webkit-animation:slideoutright 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation:slideoutright 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}:host(.slide-out-down){-webkit-animation:slideoutdown 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation:slideoutdown 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}:host(.slide-out-up){-webkit-animation:slideoutup 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);animation:slideoutup 0.5s cubic-bezier(0.25, 0.1, 0.25, 0.1);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes slideinleft{0%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slideinleft{0%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes slideinright{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slideinright{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes slideinup{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slideinup{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slideindown{0%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slideindown{0%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slideoutleft{0%{opacity:calc(100% - var(--percentuale));-webkit-transform:translateX(var(--percentuale));transform:translateX(var(--percentuale))}100%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes slideoutleft{0%{opacity:calc(100% - var(--percentuale));-webkit-transform:translateX(var(--percentuale));transform:translateX(var(--percentuale))}100%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@-webkit-keyframes slideoutright{0%{opacity:calc(100% - var(--percentuale));-webkit-transform:translateX(var(--percentuale));transform:translateX(var(--percentuale))}100%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes slideoutright{0%{opacity:calc(100% - var(--percentuale));-webkit-transform:translateX(var(--percentuale));transform:translateX(var(--percentuale))}100%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}}@-webkit-keyframes slideoutup{0%{opacity:1;-webkit-transform:translateY(var(--percentuale));transform:translateY(var(--percentuale))}100%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes slideoutup{0%{opacity:1;-webkit-transform:translateY(var(--percentuale));transform:translateY(var(--percentuale))}100%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@-webkit-keyframes slideoutdown{0%{opacity:1;-webkit-transform:translateY(var(--percentuale));transform:translateY(var(--percentuale))}100%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes slideoutdown{0%{opacity:1;-webkit-transform:translateY(var(--percentuale));transform:translateY(var(--percentuale))}100%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}}:host>#external-container{display:-ms-flexbox;display:flex;min-height:52px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:calc(var(--space-unit) * 1) calc(var(--space-unit) * 2);border-radius:4px;-webkit-box-shadow:var(--shadow-3);box-shadow:var(--shadow-3);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-rg);letter-spacing:0.16px}:host>#external-container.mobile-wrapped>#icon{-ms-flex-item-align:start;align-self:flex-start}:host>#external-container.several-lines-padding{padding:calc(var(--space-unit) * 2)}:host>#external-container>#flex-container{display:-ms-flexbox;display:flex;width:100%;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host>#external-container #text{margin-right:calc(var(--space-unit) * 2);color:var(--color-white);letter-spacing:0.16px;line-height:20px;text-align:left}:host>#external-container #text>.title{margin-right:4px;font-weight:600}:host>#external-container.mobile-wrapped #button ::slotted(z-button){margin-top:calc(var(--space-unit) * 2)}:host>#external-container #icon{margin-left:calc(var(--space-unit) * 2);cursor:pointer;fill:var(--color-white)}z-icon{display:inline-block;vertical-align:0}z-icon:focus{padding:calc(var(--space-unit) / 4);border-radius:50%;-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none !important}:host>#external-container.dark{background:var(--gray800)}:host>#external-container.light{background:var(--color-background)}:host>#external-container.light #icon,:host>#external-container.warning #text,:host>#external-container.warning #icon{fill:var(--color-primary01-icon)}:host>#external-container.light #text,:host>#external-container.warning #text{color:var(--gray800)}:host>#external-container.accent{background:var(--color-primary01)}:host>#external-container.error{background:var(--color-error-default)}:host>#external-container.success{background:var(--color-success-default)}:host>#external-container.warning{background:var(--color-warning-default)}@media only screen and (min-width: 768px){:host{width:unset;max-width:50vw}:host>#external-container>#flex-container{-ms-flex-wrap:nowrap;flex-wrap:nowrap}:host>#external-container #text{width:100%}}@media only screen and (min-width: 1366px){:host{width:unset;max-width:33vw}}";
const ZToastNotificationStyle0 = stylesCss;

const ZToastNotification = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toastClose = createEvent(this, "toastClose", 7);
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
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "isdraggable": ["watchPropIsdraggable"],
        "autoclose": ["watchPropAutoclose"],
        "pauseonfocusloss": ["watchPropPauseonfocusloss"]
    }; }
};
ZToastNotification.style = ZToastNotificationStyle0;

export { ZToastNotification as z_toast_notification };

//# sourceMappingURL=z-toast-notification.entry.js.map