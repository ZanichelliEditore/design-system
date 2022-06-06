import { Component, h, Host, Element, State, Listen } from "@stencil/core";
import { getElementTree } from "../../utils/utils";
import { DeviceEnum } from "../../beans";
import { getDevice } from "../../utils/utils";

/**
 * Component short description.
 */
@Component({
  tag: "z-skip-to-content",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZSkipToContent {
  /**
   * Property description.
   */
  @Element() hostElement: HTMLElement;
  @State() counter: number = 0;

  // private prevElem: number = 0;

  @Listen("focusin", { target: "document" })
  handleFocusSkipToContent(e) {
    const tree = getElementTree(e.target);
    const menuParent = tree.find(
      (elem: any) => elem.nodeName.toLowerCase() === "z-skip-to-content"
    );

    if (menuParent !== this.hostElement) {
      this.hostElement.classList.remove("skip-to-content-visible");
    } else {
      this.hostElement.classList.add("skip-to-content-visible");
    }

    this.handleSlottedElementFocus(e);
  }

  componentDidLoad() {
    if (getDevice() == DeviceEnum.mobile) {
      const children = this.hostElement.children;
      for (let i = 0; i < children.length; i++) {
        if (i == 0) {
          children[i].classList.toggle("link-visible");
        } else {
          children[i].classList.toggle("link-invisible");
        }
      }
    }
  }

  @Listen("keyup")
  handleSlottedElementFocus(e) {
    if (getDevice() == DeviceEnum.mobile && e.code == "Tab") {
      e.preventDefault();

      let prevElem = e.target.previousElementSibling;
      let elem = e.target;

      if (prevElem) {
        prevElem.classList.toggle("link-visible");
        prevElem.classList.toggle("link-invisible");
        elem.classList.toggle("link-visible");
        elem.classList.toggle("link-invisible");
        elem.focus();
      }
    }
  }

  render() {
    return (
      <Host
        ref={(el) => el as HTMLElement}
        onFocus={(e: KeyboardEvent) => this.handleFocusSkipToContent(e)}
        tabindex="0"
      >
        <slot />
      </Host>
    );
  }
}
