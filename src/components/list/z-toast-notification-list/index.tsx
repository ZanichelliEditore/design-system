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
  @Prop() newestontop?: boolean = true;

  componentWillLoad() {}

  render() {
    return (
      <Host class={
        this.position
          ? this.position
          : ToastNotificationPositionsEnum.topRight
      }>
        <div tabIndex={0} id="notification-stack" class={
          this.newestontop ? "newest-on-top" : ''
        }>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
