import {
  Component,
  Prop,
  h,
  Element,
} from "@stencil/core";
import { ToastNotificationEnum, ToastNotificationTypes } from "../../beans";

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

  render() {
    return (
      <div
        class={this.type ? this.type : ToastNotificationEnum.dark}
      >
        <div id="text">
          <span class="title">{this.titolo}</span>
          <span class="message">{this.message}</span>
        </div>
        <div id="button">
          <slot name="button" />
        </div>
        <div id="icon">
          {this.closebutton && (
            <z-icon
              name="multiply-circled"
              width={15}
              height={15}
              
            />
          )}
        </div>
      </div>
    );
  }
}
