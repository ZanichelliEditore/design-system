import {Component, Prop, h, Element, Watch} from "@stencil/core";
import {ToastNotificationPosition} from "../../beans";

@Component({
  tag: "z-toast-notification-list",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZToastNotificationList {
  @Element() hostElement: HTMLZToastNotificationListElement;

  /**Set the position of toast notification list - top-left, top-centre, top-right, bottom-left, bottom-centre, bottom-right */
  @Prop({reflect: true})
  position: ToastNotificationPosition = ToastNotificationPosition.TOP_RIGHT;

  /**Set the entry position of new notification in the list */
  @Prop()
  newestontop?: boolean = true;

  private notificationArray: Element[];

  @Watch("newestontop")
  watchPropNewestontop(newValue: boolean): void {
    this.hostElement.append(...this.notificationArray.reverse());
    if (newValue) {
      this.hostElement.shadowRoot.addEventListener("slotchange", this.slotChangeHandler);
    } else {
      this.hostElement.shadowRoot.removeEventListener("slotchange", this.slotChangeHandler);
    }
  }

  componentWillLoad(): void {
    if (this.newestontop) {
      this.handleNewestOnTop();
    }
  }

  private handleNewestOnTop(): void {
    this.notificationArray = Array.from(this.hostElement.children);
    this.hostElement.append(...this.notificationArray.reverse());
    this.hostElement.shadowRoot.addEventListener("slotchange", this.slotChangeHandler.bind(this));
  }

  private slotChangeHandler(): void {
    const difference = Array.from(this.hostElement.children).filter((elem) => !this.notificationArray.includes(elem));
    if (difference) {
      difference.forEach((elem) => {
        this.notificationArray.push(elem);
        const newElem = elem;
        elem.remove();
        this.hostElement.prepend(newElem);
      });
    }
  }

  render(): HTMLSlotElement {
    return <slot name="toasts"></slot>;
  }
}
