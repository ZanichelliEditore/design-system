import { Component, Prop, h, Element, Host } from "@stencil/core";
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

  private notificationArray: Element[];

  componentWillLoad() {
    this.newestontop && this.handleNewestOnTop();
  }

  handleNewestOnTop() {
    this.notificationArray = Array.from(this.hostElement.children);
    this.hostElement.append(...this.notificationArray.reverse());

    this.hostElement.shadowRoot.addEventListener("slotchange", () => {
      const difference = Array.from(this.hostElement.children).filter(
        (elem) => !this.notificationArray.includes(elem)
      );
      if (difference) {
        difference.forEach((elem) => {
          this.notificationArray.push(elem);
          const newElem = elem;
          elem.remove();
          this.hostElement.prepend(newElem);
        });
      }
    });
  }

  render() {
    return (
      <Host
        class={
          this.position
            ? this.position
            : ToastNotificationPositionsEnum.topRight
        }
      >
        <slot name="toasts"></slot>
      </Host>
    );
  }
}
