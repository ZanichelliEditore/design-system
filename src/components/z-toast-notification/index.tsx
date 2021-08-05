import {
  Component,
  Prop,
  h,
  Event,
  EventEmitter,
  Element,
  Host,
} from "@stencil/core";
import {
  ToastNotificationEnum,
  ToastNotificationTransisionsEnum,
  ToastNotificationTransisionTypes,
  ToastNotificationTypes,
} from "../../beans";
import { mobileBreakpoint } from "../../constants/breakpoints";

@Component({
  tag: "z-toast-notification",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZToastNotification {
  @Element() hostElement: HTMLElement;

  @Prop() titolo?: string;
  @Prop() message: string;
  @Prop() closebutton: boolean;
  @Prop() autoclose?: number;
  @Prop() pauseonfocusloss?: boolean;
  @Prop() type?: ToastNotificationTypes;
  @Prop() isdraggable?: boolean = true;
  @Prop() draggablepercentage?: number = 80;
  @Prop() transition?: ToastNotificationTransisionTypes;

  private toastText: HTMLElement;
  private toastButton: HTMLElement;
  private toastIcon: HTMLElement;
  private toastContainer: HTMLElement;

  private elapsedTime: number;
  private timeoutHandle: any;
  private startTime: number;

  /** notification close event */
  @Event() toastClose: EventEmitter;
  emitToastClose() {
    this.timeoutHandle = null;
    this.elapsedTime = null;
    this.handleCloseAnimation();
  }

  /** notification action event */
  @Event() toastAction: EventEmitter;
  emitToastAction() {
    this.toastAction.emit();
    console.log("toast action!");
  }

  disconnectedCallback() {
    this.toastClose.emit();
  }

  componentDidLoad() {
    this.startTime = Date.now();
    this.setCorrectPaddingAndMargin();

    if (window.innerWidth <= mobileBreakpoint) {
      this.setMobileView();
    }
    if (this.autoclose && this.pauseonfocusloss) {
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          this.timeoutHandle && this.onBlur();
        } else {
          this.elapsedTime && this.onFocus();
        }
      });
    }

    this.handleSlideOutAnimation();
  }

  mapSlideOutDirection() {
    switch (this.transition) {
      case ToastNotificationTransisionsEnum.slideInDown:
        return Hammer.DIRECTION_UP;
      case ToastNotificationTransisionsEnum.slideInUp:
        return Hammer.DIRECTION_DOWN;
      case ToastNotificationTransisionsEnum.slideInLeft:
        return Hammer.DIRECTION_RIGHT;
      case ToastNotificationTransisionsEnum.slideInRight:
        return Hammer.DIRECTION_LEFT;
    }
  }

  mapSlideOuClass() {
    switch (this.transition) {
      case ToastNotificationTransisionsEnum.slideInDown:
        return ToastNotificationTransisionsEnum.slideOutUp;
      case ToastNotificationTransisionsEnum.slideInUp:
        return ToastNotificationTransisionsEnum.slideOutDown;
      case ToastNotificationTransisionsEnum.slideInLeft:
        return ToastNotificationTransisionsEnum.slideOutRight;
      case ToastNotificationTransisionsEnum.slideInRight:
        return ToastNotificationTransisionsEnum.slideOutLeft;
    }
  }

  mapSlideOutTranslate(event, bounding) {
    let draggablepx;
    switch (this.transition) {
      case ToastNotificationTransisionsEnum.slideInDown:
        draggablepx = (bounding.height / 100) * this.draggablepercentage;
        return {
          translate: "translateY( " + event.deltaY + "% )",
          condition:
            window.innerHeight + Math.abs(bounding.y) >
            window.innerHeight + draggablepx,
          translateBack: "translateY(0)",
        };
      case ToastNotificationTransisionsEnum.slideInUp:
        draggablepx = (bounding.height / 100) * this.draggablepercentage;
        return {
          translate: "translateY( " + event.deltaY + "% )",
          condition: false,
          translateBack: "translateY(0)",
        };
      case ToastNotificationTransisionsEnum.slideInLeft:
        draggablepx = (bounding.width / 100) * this.draggablepercentage;
        console.log(draggablepx);
        return {
          translate: "translateX( " + event.deltaX + "% )",
          condition: false,
          translateBack: "translateX(0)",
        };
      case ToastNotificationTransisionsEnum.slideInRight:
        draggablepx = (bounding.width / 100) * this.draggablepercentage;
        return {
          translate: "translateX( " + event.deltaX + "% )",
          condition: draggablepx + bounding.x < 0,
          translateBack: "translateX(0)",
        };
    }
  }

  handleSlideOutAnimation() {
    var sliderManager = new Hammer.Manager(this.hostElement);
    sliderManager.add(
      new Hammer.Pan({
        threshold: 0,
        pointers: 0,
        direction: Hammer.DIRECTION_ALL,
      })
    );
    sliderManager.on("pan", (e) => {
      this.hostElement.classList.remove(this.transition);
      var bounding = this.hostElement.getBoundingClientRect();
      const translateObj = this.mapSlideOutTranslate(e, bounding);
      if (e.direction === this.mapSlideOutDirection())
        this.hostElement.style.transform = translateObj.translate;
      if (e.isFinal) {
        if (translateObj.condition) {
          this.emitToastClose();
        } else {
          this.hostElement.style.transform = translateObj.translateBack;
        }
      }
    });
  }

  handleCloseAnimation() {
    this.hostElement.classList.add(this.mapSlideOuClass());
  }

  onFocus() {
    let time;
    time = this.autoclose;
    if (this.elapsedTime) {
      time = this.autoclose - this.elapsedTime;
    }
    if (time > 0) {
      console.log("Start Time!");
      this.startClosingTimeout(time);
    }
  }

  onBlur() {
    this.elapsedTime = Date.now() - this.startTime;
    console.log(`Stop time - Elapsed ${this.elapsedTime}ms`);
    clearTimeout(this.timeoutHandle);
  }

  startClosingTimeout(time: number) {
    this.timeoutHandle = setTimeout(() => this.emitToastClose(), time);
  }

  setCorrectPaddingAndMargin() {
    if (this.closebutton) this.toastButton.style.marginRight = "16px";

    if (this.toastText.offsetHeight > 20) {
      this.toastContainer.style.padding = "16px";
    } else {
      this.toastContainer.style.padding = "8px 16px";
    }
  }

  setMobileView() {
    if (this.toastText.offsetHeight > 20) {
      this.toastContainer.style.display = "block";
      this.toastIcon.style.alignSelf = "flex-start";
      this.toastContainer.append(this.toastButton);
    }
  }

  render() {
    return (
      <Host
        class={this.transition ? this.transition : "slide-in-down"}
        onAnimationEnd={() => {
          if (this.autoclose) {
            this.startClosingTimeout(this.autoclose);
          }
        }}
      >
        <div
          id="external-container"
          ref={(el) => (this.toastContainer = el as HTMLElement)}
          class={this.type ? this.type : ToastNotificationEnum.dark}
        >
          <div id="flex-container">
            <div id="text" ref={(el) => (this.toastText = el as HTMLElement)}>
              <span class="title">{this.titolo}</span>
              <span class="message">{this.message}</span>
            </div>
            <div
              id="button"
              onClick={() => this.emitToastAction()}
              ref={(el) => (this.toastButton = el as HTMLElement)}
            >
              <slot name="button" />
            </div>
            <div id="icon" ref={(el) => (this.toastIcon = el as HTMLElement)}>
              {this.closebutton && (
                <z-icon
                  name="multiply-circled"
                  width={15}
                  height={15}
                  onClick={() => this.emitToastClose()}
                />
              )}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
