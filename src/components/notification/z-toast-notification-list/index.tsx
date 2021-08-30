import { Component, Prop, h, Element, Host} from "@stencil/core";
import {
  ToastNotificationPositionsEnum,
  ToastNotificationPositionsTypes,
} from "../../../beans";

@Component({
  tag: "z-toast-notification-list",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZToastNotificationList {
  @Element() hostElement: HTMLElement;

  @Prop() position: ToastNotificationPositionsTypes;
  @Prop() newestOnTop: boolean = true;

  componentWillLoad() {}

  render() {
    return (
      <Host class={
        this.position
          ? this.position
          : ToastNotificationPositionsEnum.topRight
      }>
          <slot></slot>
      </Host>
    );
  }
}
