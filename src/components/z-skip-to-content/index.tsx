import {
  Component,
  Prop,
  h,
  Host,
  Element,
  State,
  Listen,
} from "@stencil/core";
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
    // console.log(getElementTree(e.target));
    const tree = getElementTree(e.target);
    console.log;
    const menuParent = tree.find(
      (elem: any) => elem.nodeName.toLowerCase() === "z-skip-to-content"
    );
    // console.log(this.hostElement);
    if (menuParent !== this.hostElement) {
      this.hostElement.classList.remove("visible");
    } else {
      this.hostElement.classList.add("visible");
    }

    // console.log(this.hostElement.children);
    if (getDevice() == DeviceEnum.mobile) {
    }
    console.log(getDevice());
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
