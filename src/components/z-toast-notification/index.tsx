import {Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h} from "@stencil/core";
import {KeyboardCode, ToastNotification, ToastNotificationTransition} from "../../beans";

import DOMPurify from "dompurify";
import Hammer from "hammerjs";

/** Map of slide-in transitions to their corresponding slide-out transitions */
const SLIDE_OUT_TRANSITION_MAP = {
  [ToastNotificationTransition.SLIDE_IN_DOWN]: ToastNotificationTransition.SLIDE_OUT_UP,
  [ToastNotificationTransition.SLIDE_IN_UP]: ToastNotificationTransition.SLIDE_OUT_DOWN,
  [ToastNotificationTransition.SLIDE_IN_LEFT]: ToastNotificationTransition.SLIDE_OUT_RIGHT,
  [ToastNotificationTransition.SLIDE_IN_RIGHT]: ToastNotificationTransition.SLIDE_OUT_LEFT,
};

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

  /** Indicates if the toast notification has a slotted button. */
  @State()
  hasSlottedButton: boolean;

  /** notification close event */
  @Event()
  toastClose: EventEmitter;

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

  private close(closingTransition: string, stopTimer: boolean): void {
    if (stopTimer && this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
    }
    this.timeoutHandle = null;
    this.elapsedTime = null;
    this.toastClose.emit();
    if (closingTransition) {
      this.hostElement.classList.add(closingTransition);
    } else {
      this.hostElement.parentNode.removeChild(this.hostElement);
    }
  }

  private visibilityChangeEventHandler(): void {
    if (document.visibilityState === "hidden") {
      if (this.timeoutHandle) {
        this.onBlur();
      }
    } else if (this.elapsedTime) {
      this.onFocus();
    }
  }

  private validateAutoclose(): void {
    if (!this.autoclose && !this.closebutton) {
      console.error("At least one between autoclose and closebutton must be present");
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
          this.close(
            e.direction === Hammer.DIRECTION_LEFT
              ? ToastNotificationTransition.SLIDE_OUT_LEFT
              : ToastNotificationTransition.SLIDE_OUT_RIGHT,
            true
          );
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
    this.timeoutHandle = window.setTimeout(() => this.close(SLIDE_OUT_TRANSITION_MAP[this.transition], false), time);
  }

  private checkSlottedButton(): void {
    this.hasSlottedButton = !!this.hostElement.querySelector("[slot='button']");
  }

  componentWillLoad(): void {
    this.validateAutoclose();
    this.checkSlottedButton();
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

    if (this.isdraggable) {
      this.handleSlideOutDragAnimation();
    }
  }

  render(): HTMLZToastNotificationElement {
    return (
      <Host
        style={{"--percentuale": `${this.percentage}%`}}
        class={{[this.transition]: !!this.transition, [this.type]: !!this.type}}
        onAnimationEnd={(e: AnimationEvent) => {
          if (this.autoclose && e.animationName.includes("slidein")) {
            this.startClosingTimeout(this.autoclose);
          }
          if (e.animationName.includes("slideout")) {
            this.hostElement.parentNode.removeChild(this.hostElement);
          }
        }}
      >
        <div class="toast-notification-container">
          <div class="toast-notification-content">
            <div class="toast-notification-text">
              {this.heading && <span class="title">{this.heading}</span>}
              <span class="message">
                <slot name="message">{this.message && <span innerHTML={DOMPurify.sanitize(this.message)} />}</slot>
              </span>
            </div>
            <div
              class="button-container"
              hidden={!this.hasSlottedButton}
            >
              <slot
                name="button"
                onSlotchange={() => this.checkSlottedButton()}
              />
            </div>
          </div>
          {this.closebutton && (
            <button
              class="close-button"
              aria-label="Chiudi notifica"
              onClick={() => this.close(SLIDE_OUT_TRANSITION_MAP[this.transition], true)}
              onKeyDown={(e) => {
                if (e.code == KeyboardCode.SPACE || e.code == KeyboardCode.ENTER) {
                  e.preventDefault();
                  this.close(SLIDE_OUT_TRANSITION_MAP[this.transition], true);
                }
              }}
            >
              <z-icon name="multiply-circled" />
            </button>
          )}
        </div>
      </Host>
    );
  }
}
