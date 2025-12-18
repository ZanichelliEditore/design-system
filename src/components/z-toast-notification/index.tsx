import {Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h} from "@stencil/core";
import {KeyboardCode, ToastNotification, ToastNotificationTransition} from "../../beans";

import DOMPurify from "dompurify";
import Hammer from "hammerjs";

/**
 * ZToastNotification component.
 * @slot message - Custom HTML message
 * @slot button - Custom button
 */
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

  private sliderManager: HammerManager;

  private elapsedTime: number;

  private timeoutHandle: number;

  private startTime: number;

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

  private emitToastClose(cssClass: string, stopTimer: boolean): void {
    if (stopTimer && this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
    }
    this.timeoutHandle = null;
    this.elapsedTime = null;
    this.toastClose.emit();
    if (cssClass) {
      this.hostElement.classList.add(cssClass);
    } else {
      this.hostElement.parentNode.removeChild(this.hostElement);
    }
  }

  componentWillLoad(): void {
    this.validateAutoclose();
    this.percentage = 0;
  }

  componentDidLoad(): void {
    this.startTime = Date.now();
    if (this.autoclose) {
      if (this.pauseonfocusloss) {
        document.addEventListener("visibilitychange", this.visibilityChangeEventHandler);
      }
      if (!this.transition) {
        this.startClosingTimeout(this.autoclose);
      }
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
      default:
        return null;
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
      if (this.transition) {
        this.hostElement.classList.remove(this.transition);
      }
      const translateObj = {
        translate: `translateX(${this.percentage}%)`,
        translateBack: "translateX(0)",
      };

      this.hostElement.style.opacity = `${100 - Math.abs(this.percentage)}%`;
      if (e.eventType === Hammer.DIRECTION_LEFT || e.eventType === Hammer.DIRECTION_RIGHT) {
        this.hostElement.style.transform = translateObj.translate;
        if (Math.abs(this.percentage) > this.draggablepercentage && !this.isCloseEventCalled) {
          this.isCloseEventCalled = true;
          this.emitToastClose(e.direction === Hammer.DIRECTION_LEFT ? "slide-out-left" : "slide-out-right", true);
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
    this.timeoutHandle = window.setTimeout(() => this.emitToastClose(this.mapSlideOutClass(), false), time);
  }

  private renderContent(): HTMLDivElement {
    return (
      <div
        id="external-container"
        tabIndex={0}
        class={{[this.type]: !!this.type}}
      >
        <div id="inner-container">
          <div id="text">
            {this.heading && <span class="title">{this.heading}</span>}
            <span class="message">
              <slot name="message">
                <span innerHTML={DOMPurify.sanitize(this.message || " ")} />
              </slot>
            </span>
          </div>
          <div id="button">
            <slot name="button" />
          </div>
        </div>
        <div id="icon">
          {this.closebutton && (
            <z-icon
              tabIndex={0}
              name="multiply-circled"
              width={15}
              height={15}
              onClick={() => this.emitToastClose(this.mapSlideOutClass(), true)}
              onKeyPress={(e) => {
                if (e.code == KeyboardCode.SPACE || e.code == KeyboardCode.ENTER) {
                  e.preventDefault();
                  this.emitToastClose(this.mapSlideOutClass(), true);
                }
              }}
            />
          )}
        </div>
      </div>
    );
  }

  render(): HTMLZToastNotificationElement {
    return (
      <Host
        style={{"--percentuale": `${this.percentage}%`}}
        class={this.transition ? this.transition : ""}
        onAnimationEnd={(e: AnimationEvent) => {
          if (this.autoclose && e.animationName.includes("slidein")) {
            this.startClosingTimeout(this.autoclose);
          }
          if (e.animationName.includes("slideout")) {
            this.hostElement.parentNode.removeChild(this.hostElement);
          }
        }}
      >
        {this.renderContent()}
      </Host>
    );
  }
}
