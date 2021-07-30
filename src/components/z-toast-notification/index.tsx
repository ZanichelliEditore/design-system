import {
  Component,
  Prop,
  h,
  Event,
  EventEmitter,
  Element,
} from "@stencil/core";
import { ButtonSizeEnum, ButtonVariantEnum, ToastNotificationEnum, ToastNotificationTypes } from "../../beans";
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
  @Prop() type?: ToastNotificationTypes;

  private toastText: HTMLElement;
  private toastContainer: HTMLElement;

  /** notification close event */
  @Event() toastClose: EventEmitter;
  emitToastClose() {
    this.toastClose.emit();
    console.log("toast closed!");
  }

  @Event() toastAction: EventEmitter;
  emitToastAction() {
    this.toastAction.emit();
    console.log("toast action!");
  }

  componentDidLoad() {
    this.setCorrectPadding();

    if (this.autoclose && typeof this.autoclose === "number") {
      this.startClosingTimeout(this.autoclose);
    }

    if (window.innerWidth <= mobileBreakpoint) {
      this.setMobileView();
    }
  }

  setCorrectPadding() {
    if (this.toastText.offsetHeight > 20) {
      this.toastContainer.style.padding = "16px";
    } else {
      this.toastContainer.style.padding = "8px 16px";
    }
  }

  setMobileView() {
    if (this.toastText.offsetHeight > 20) {
      this.toastContainer.style.gridTemplateColumns = "4fr 0fr";
      this.toastContainer.style.gridTemplateRows = "auto 1fr";
      this.toastContainer.style.gridTemplateAreas = '"testo testo testo testo icona" "tasto"';
    }
  }

  startClosingTimeout(time: number) {
    setTimeout(() => this.emitToastClose(), time);
  }

  render() {
    return (
      <div
        class={this.type ? this.type : ToastNotificationEnum.dark}
        ref={(el) => (this.toastContainer = el as HTMLElement)}
      >
        <div id="text" ref={(el) => (this.toastText = el as HTMLElement)}>
          <span class="title">{this.titolo}</span>
          <span class="message">{this.message}</span>
        </div>
        <div id="button" onClick={() => this.emitToastAction()}>
          <slot name="button">
            <z-button variant={ButtonVariantEnum.tertiary} size={ButtonSizeEnum.small}>BUTTON</z-button>
          </slot>
        </div>
        <div id="icon">
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
    );
  }
}
