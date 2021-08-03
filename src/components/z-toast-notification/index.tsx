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
  @Prop() transition?: string = "slideInDown";

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

  handleSlideInAnimation(){
    const dimension = -this.hostElement.offsetWidth;

    const animation = this.hostElement.animate(
      [
        { transform: `translateX(${dimension}px)` },
        { transform: `translateX(0)` },
      ],
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

  handleSlideOutAnimation() {
    var sliderManager = new Hammer.Manager(this.toastContainer);
    sliderManager.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
    sliderManager.on("pan", (e) => {
      this.toastContainer.style.transform = "translateX( " + e.deltaX + "% )";
      var bounding = this.toastContainer.getBoundingClientRect();
      if (e.isFinal) {
        var draggablepx = (bounding.width / 100) * this.draggablepercentage;
        if (draggablepx + bounding.x < 0) {
          this.toastContainer.style.height = "0";
          this.emitToastClose();
        } else {
          this.toastContainer.style.transform = "translateX(0)";
        }
      }
    });
  }

  handleCloseAnimation(){
    const dimension = -this.hostElement.offsetWidth;

    const animation = this.hostElement.animate(
      [
        { transform: `translateX(0)` },
        { transform: `translateX(${dimension}px)` }
      ],
      {
        duration: 1000,
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
    const container = this.hostElement.shadowRoot.getElementById(
      "external-container"
    );
    if (this.toastText.offsetHeight > 20) {
      this.toastIcon.style.alignSelf = "flex-start";
      container.append(this.toastButton);
      this.toastButton.style.marginTop = "16px";
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
