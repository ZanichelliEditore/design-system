import { Component, Prop, h, Element, Host, Watch } from "@stencil/core";
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
  /**Set the position of toast notification list - top-left, top-centre, top-right, bottom-left, bottom-centre, bottom-right */
  @Prop() position: ToastNotificationPositionsTypes;
  /**Set the entry position of new notification in the list */
  @Prop() newestontop?: boolean = true;

  private notificationArray: Element[];

  @Watch("newestontop")
  watchPropNewestontop(newValue: boolean) {
    this.hostElement.append(...this.notificationArray.reverse());
    if(newValue){
      this.hostElement.shadowRoot.addEventListener("slotchange", this.slotChangeHandler);
    }else{
      this.hostElement.shadowRoot.removeEventListener("slotchange", this.slotChangeHandler);
    }
  }

  componentWillLoad() {
    this.newestontop && this.handleNewestOnTop();
  }

  handleNewestOnTop() {
    this.notificationArray = Array.from(this.hostElement.children);
    this.hostElement.append(...this.notificationArray.reverse());

    this.hostElement.shadowRoot.addEventListener("slotchange", this.slotChangeHandler);
  }

  slotChangeHandler = () => {
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
