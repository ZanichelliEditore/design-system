import {Component, ComponentInterface, Element, Host, Prop, Watch, h} from "@stencil/core";
import {ToastNotificationPosition} from "../../beans";

@Component({
  tag: "z-toast-notification-list",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZToastNotificationList implements ComponentInterface {
  @Element() hostElement: HTMLZToastNotificationListElement;

  /**Set the position of toast notification list - top-left, top-centre, top-right, bottom-left, bottom-centre, bottom-right */
  @Prop({reflect: true})
  position: ToastNotificationPosition = ToastNotificationPosition.TOP_RIGHT;

  /**Set the entry position of new notification in the list */
  @Prop()
  newestontop?: boolean = true;

  private notificationArray: Element[] = [];

  private mutationObserver: MutationObserver;

  private announcedToasts = new WeakSet<Element>();

  private announcerEl: HTMLDivElement;

  @Watch("newestontop")
  watchPropNewestontop(newValue: boolean): void {
    this.hostElement.append(...this.notificationArray.reverse());
    if (newValue) {
      this.hostElement.shadowRoot.addEventListener("slotchange", this.slotChangeHandler);
    } else {
      this.hostElement.shadowRoot.removeEventListener("slotchange", this.slotChangeHandler);
    }
  }

  connectedCallback(): void {
    if (!this.announcerEl) {
      this.announcerEl = document.createElement("div");
      this.announcerEl.setAttribute("aria-live", "assertive");
      this.announcerEl.setAttribute("aria-atomic", "true");
      this.announcerEl.setAttribute("slot", "sr-announcer");
      this.announcerEl.classList.add("sr-announcer");
    }
    this.hostElement.appendChild(this.announcerEl);
  }

  componentWillLoad(): void {
    if (this.newestontop) {
      this.handleNewestOnTop();
    }
  }

  componentDidLoad(): void {
    if (typeof MutationObserver === "undefined") {
      return;
    }
    this.mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of Array.from(mutation.addedNodes)) {
          if (node instanceof HTMLElement && node.tagName.toLowerCase() === "z-toast-notification") {
            this.announceToast(node);
          }
        }
      }
    });
    this.mutationObserver.observe(this.hostElement, {childList: true});
  }

  disconnectedCallback(): void {
    this.mutationObserver?.disconnect();
    this.announcerEl?.remove();
  }

  private announceToast(toast: HTMLElement): void {
    if (this.announcedToasts.has(toast)) {
      return;
    }
    this.announcedToasts.add(toast);

    const heading = toast.getAttribute("heading") || "";
    const message = toast.getAttribute("message") || "";
    const text = [heading, this.stripHtml(message)].filter(Boolean).join(": ");
    if (!text) {
      return;
    }

    this.announcerEl.textContent = "";
    setTimeout(() => {
      this.announcerEl.textContent = text;
    }, 100);
  }

  private stripHtml(html: string): string {
    const div = document.createElement("div");
    div.innerHTML = html;

    return div.textContent || "";
  }

  private handleNewestOnTop(): void {
    this.notificationArray = Array.from(this.hostElement.children).filter((el) => el !== this.announcerEl);
    this.hostElement.append(...this.notificationArray.reverse());
    this.hostElement.shadowRoot.addEventListener("slotchange", this.slotChangeHandler.bind(this));
  }

  private slotChangeHandler(): void {
    const difference = Array.from(this.hostElement.children).filter(
      (elem) => elem !== this.announcerEl && !this.notificationArray.includes(elem)
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

  render(): HTMLZToastNotificationListElement {
    return (
      <Host>
        <slot name="sr-announcer"></slot>
        <slot name="toasts"></slot>
      </Host>
    );
  }
}
