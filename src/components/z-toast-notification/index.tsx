import {
  Component,
  Prop,
  h,
  Event,
  EventEmitter,
  Element,
} from "@stencil/core";
import { ToastNotificationEnum, ToastNotificationTypes } from "../../beans";
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
  @Prop() autoclose?: boolean | number = 5000;
  @Prop() pauseonfocusloss?: boolean;
  @Prop() type?: ToastNotificationTypes;
  @Prop() isdraggable?: boolean = true;
  @Prop() draggablepercentage?: number = 80;
  @Prop() transition?: string = "slideInLeft";

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

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        this.timeoutHandle && this.onBlur();
      } else {
        this.elapsedTime && this.onFocus();
      }
    });

    this.handleSlideInAnimation();

    this.handleSlideOutAnimation();
  }

  buildSlideInAnimationKeyframe() {
    switch (this.transition) {
      case "slideInDown":
        const slideInDowndimension = this.hostElement.offsetHeight;

        return [
          { transform: `translateY(-${Math.abs(slideInDowndimension)}px)` },
          { transform: `translateY(0)` },
        ];
      case "slideInUp":
        const slideInUpdimension =
          window.innerHeight + this.hostElement.offsetHeight;
        return [
          { transform: `translateY(${slideInUpdimension}px)` },
          { transform: `translateY(0)` },
        ];
      case "slideInLeft":
        const slideInLeftdimension =
          window.innerWidth + this.hostElement.offsetWidth;
        return [
          { transform: `translateX(${slideInLeftdimension}px)` },
          { transform: `translateX(0)` },
        ];
      case "slideInRight":
        const slideInRightdimension = -this.hostElement.offsetWidth;
        return [
          { transform: `translateX(${slideInRightdimension}px)` },
          { transform: `translateX(0)` },
        ];
    }
  }

  buildSlideOutAnimationKeyframe() {
    switch (this.transition) {
      case "slideInDown":
        const slideInDowndimension = this.hostElement.offsetHeight;
        return [
          { transform: `translateY(0)` },
          { transform: `translateY(-${slideInDowndimension}px)` },
        ];
      case "slideInUp":
        const slideInUpdimension =
          window.innerHeight + this.hostElement.offsetHeight;
        return [
          { transform: `translateY(0)` },
          { transform: `translateY(${slideInUpdimension}px)` },
        ];
      case "slideInLeft":
        const slideInLeftdimension =
          window.innerWidth + this.hostElement.offsetWidth;
        return [
          { transform: `translateX(0)` },
          { transform: `translateX(${slideInLeftdimension}px)` },
        ];
      case "slideInRight":
        const slideInRightdimension = -this.hostElement.offsetWidth;
        return [
          { transform: `translateX(${slideInRightdimension}px)` },
          { transform: `translateX(0)` },
        ];
    }
  }

  handleSlideInAnimation() {
    const animation = this.hostElement.animate(
      this.buildSlideInAnimationKeyframe(),
      {
        duration: 1000,
        fill: "forwards",
        easing: "cubic-bezier(0.25, 0.1, 0.25, 0.1)",
      }
    );

    animation.onfinish = () => {
      if (this.autoclose && typeof this.autoclose === "number") {
        this.startClosingTimeout(this.autoclose);
      }
    };
  }

  mapSlideOutDirection() {
    switch (this.transition) {
      case "slideInDown":
        return Hammer.DIRECTION_UP;
      case "slideInUp":
        return Hammer.DIRECTION_DOWN;
      case "slideInLeft":
        return Hammer.DIRECTION_RIGHT;
      case "slideInRight":
        return Hammer.DIRECTION_LEFT;
    }
  }

  mapSlideOutTranslate(event, bounding) {
    let draggablepx;
    switch (this.transition) {
      case "slideInDown":
        draggablepx = (bounding.height / 100) * this.draggablepercentage;
        return {
          translate: "translateY( " + event.deltaY + "% )",
          condition: (window.innerHeight + Math.abs(bounding.y) > window.innerHeight + draggablepx),
          translateBack: "translateY(0)",
        };
      case "slideInUp":
        draggablepx = (bounding.height / 100) * this.draggablepercentage;
        return {
          translate: "translateY( " + event.deltaY + "% )",
          condition: false,
          translateBack: "translateY(0)",
        };
      case "slideInLeft":
        draggablepx = (bounding.width / 100) * this.draggablepercentage;
        console.log(draggablepx);
        return {
          translate: "translateX( " + event.deltaX + "% )",
          condition: (bounding.x > window.innerWidth - draggablepx),
          translateBack: "translateX(0)",
        };
      case "slideInRight":
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
      var bounding = this.hostElement.getBoundingClientRect();
      const translateObj = this.mapSlideOutTranslate(e, bounding);
      if (e.direction === this.mapSlideOutDirection())
        this.hostElement.style.transform = translateObj.translate;
      if (e.isFinal) {
        console.log(bounding.x, bounding.y)
        if (translateObj.condition) {
          this.hostElement.style.height = "0";
          this.emitToastClose();
        } else {
          this.hostElement.style.transform = translateObj.translateBack;
        }
      }
    });
  }

  handleCloseAnimation() {
    const animation = this.hostElement.animate(
      this.buildSlideOutAnimationKeyframe(),
      {
        duration: 500,
        fill: "forwards",
        easing: "cubic-bezier(0.25, 0.1, 0.25, 0.1)",
      }
    );

    animation.onfinish = () => {
      this.hostElement.parentNode.removeChild(this.hostElement);
    };
  }

  onFocus() {
    let time;
    time = this.autoclose;
    if (this.elapsedTime && typeof this.autoclose === "number") {
      time = this.autoclose - this.elapsedTime;
    }
    if (time > 0 && typeof this.autoclose === "number") {
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
    );
  }
}
