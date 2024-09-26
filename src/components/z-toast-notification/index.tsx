import {Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h} from "@stencil/core";
import {ToastNotification, ToastNotificationTransition} from "../../beans";
import {Breakpoints} from "../../constants/breakpoints";

import Hammer from "hammerjs";

@Component({
  tag: "z-toast-notification",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZToastNotification {
  @Element() hostElement: HTMLZToastNotificationElement;

  /** toast notification's title */
  @Prop()
  heading?: string;

  /** toast notification's message */
  @Prop()
  message: string;

  /** toggles closing button rendering */
  @Prop()
  closebutton: boolean;

  /** toast notification closing timeout (ms) */
  @Prop()
  autoclose?: number;

  /** toast notification autoclose can be paused */
  @Prop()
  pauseonfocusloss?: boolean = true;

  /** toast notification type: dark, light, accent, error, success, warning */
  @Prop()
  type?: ToastNotification;

  /** toast notification can be draggable*/
  @Prop()
  isdraggable?: boolean = true;

  /** toast notification draggable percentage*/
  @Prop()
  draggablepercentage?: number = 80;

  /** toast notification animation type: slide-in-left, slide-in-right, slide-in-down, slide-in-up*/
  @Prop()
  transition?: ToastNotificationTransition;

  @State()
  percentage: number;

  private isTextLong: boolean;

  private container!: HTMLElement;

  private toastText!: HTMLElement;

  private sliderManager: HammerManager;

  private elapsedTime: number;

  private timeoutHandle: number;

  private startTime: number;

  private isMobile: boolean;

  private isCloseEventCalled = false;

  @Watch("isdraggable")
  watchPropIsdraggable(newValue: boolean): void {
    if (newValue) {
      this.sliderManager.get("pan").set({enable: true});
    } else {
      this.sliderManager.get("pan").set({enable: false});
    }
  }

  @Watch("autoclose")
  watchPropAutoclose(newValue: number): void {
    clearTimeout(this.timeoutHandle);
    this.startClosingTimeout(newValue);
  }

  @Watch("pauseonfocusloss")
  watchPropPauseonfocusloss(newValue: boolean): void {
    if (this.autoclose) {
      if (newValue) {
        document.addEventListener("visibilitychange", this.visibilityChangeEventHandler);
      } else {
        document.removeEventListener("visibilitychange", this.visibilityChangeEventHandler);
      }
    }
  }

  /** notification close event */
  @Event()
  toastClose: EventEmitter;

  private emitToastClose(cssClass: string): void {
    this.timeoutHandle = null;
    this.elapsedTime = null;
    this.hostElement.classList.add(cssClass);
    this.toastClose.emit();
  }

  componentWillLoad(): void {
    this.isMobile = window.innerWidth <= Breakpoints.MOBILE;
    this.validateAutoclose();
    this.percentage = 0;
  }

  componentDidLoad(): void {
    this.isTextLong = this.detectWrap() || this.toastText.offsetHeight > 20;
    this.startTime = Date.now();
    if (this.autoclose && this.pauseonfocusloss) {
      document.addEventListener("visibilitychange", this.visibilityChangeEventHandler);
    }

    this.isdraggable && this.handleSlideOutDragAnimation();
  }

  private visibilityChangeEventHandler(): void {
    if (document.visibilityState === "hidden") {
      this.timeoutHandle && this.onBlur();
    } else {
      this.elapsedTime && this.onFocus();
    }
  }

  private validateAutoclose(): void {
    if (!this.autoclose && !this.closebutton) {
      console.error("At least one between autoclose and closebutton must be present");
    }
  }

  private mapSlideOutClass(): ToastNotificationTransition {
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

  private calculateDraggedPercentage(e): number {
    const bounding = this.hostElement.getBoundingClientRect();

    return Math.round((100 * e.deltaX) / bounding.width);
  }

  private handleSlideOutDragAnimation(): void {
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

  private onFocus(): void {
    let time = this.autoclose;
    if (this.elapsedTime) {
      time = this.autoclose - this.elapsedTime;
    }
    if (time > 0) {
      this.startClosingTimeout(time);
    }
  }

  private onBlur(): void {
    this.elapsedTime = Date.now() - this.startTime;
    clearTimeout(this.timeoutHandle);
  }

  private startClosingTimeout(time: number): void {
    this.timeoutHandle = window.setTimeout(() => this.emitToastClose(this.mapSlideOutClass()), time);
  }

  private detectWrap(): boolean {
    const parentWidth = this.container.offsetWidth;
    const children = this.container.children;
    let totalWidth = 0;

    for (let i = 0; i < children.length; i++) {
      totalWidth += (children[i] as HTMLElement).offsetWidth;
    }

    return totalWidth > parentWidth;
  }

  private renderText(): HTMLDivElement {
    return (
      <div
        id="text"
        ref={(el) => (this.toastText = el as HTMLElement)}
      >
        <span class="title">{this.heading}</span>
        <span class="message">{this.message}</span>
      </div>
    );
  }

  private renderButton(): HTMLDivElement {
    return (
      <div id="button">
        <slot name="button" />
      </div>
    );
  }

  private renderCloseIcon(): HTMLDivElement {
    if (!this.closebutton) {
      return;
    }

    return (
      <div id="icon">
        <z-icon
          tabIndex={0}
          name="multiply-circled"
          width={15}
          height={15}
          onClick={() => this.emitToastClose(this.mapSlideOutClass())}
          onKeyPress={(e) => {
            if (e.keyCode == 32 || e.keyCode == 13) {
              e.preventDefault();
              this.emitToastClose(this.mapSlideOutClass());
            }
          }}
        />
      </div>
    );
  }

  private renderContainer(): HTMLDivElement {
    return (
      <div
        tabIndex={0}
        id="external-container"
        class={{
          [this.type]: !!this.type,
          "several-lines-padding": this.isTextLong,
        }}
        ref={(el) => (this.container = el as HTMLElement)}
      >
        {this.renderText()}
        {this.renderButton()}
        {this.renderCloseIcon()}
      </div>
    );
  }

  private renderMobileContainer(): HTMLDivElement {
    return (
      <div
        id="external-container"
        class={{
          [this.type]: !!this.type,
          "several-lines-padding": this.isTextLong,
          "mobile-wrapped": this.isTextLong,
        }}
      >
        <div
          id="flex-container"
          ref={(el) => (this.container = el as HTMLElement)}
        >
          {this.renderText()}
          {this.renderButton()}
        </div>
        {this.renderCloseIcon()}
      </div>
    );
  }

  render(): HTMLZToastNotificationElement {
    return (
      <Host
        style={{
          "--percentuale": `${this.percentage}%`,
        }}
        class={this.transition ? this.transition : ToastNotificationTransition.SLIDE_IN_DOWN}
        onAnimationEnd={(e: AnimationEvent) => {
          if (this.autoclose && e.animationName.includes("slidein")) {
            this.startClosingTimeout(this.autoclose);
          }
          if (e.animationName.includes("slideout")) {
            this.hostElement.parentNode.removeChild(this.hostElement);
          }
        }}
      >
        {this.isMobile ? this.renderMobileContainer() : this.renderContainer()}
      </Host>
    );
  }
}
