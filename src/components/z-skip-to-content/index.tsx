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
          children[i].classList.add("link-visible");
        } else {
          children[i].classList.add("link-invisible");
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
        console.log(e.target);
        prevElem.classList.remove("link-visible");
        prevElem.classList.add("link-invisible");
        elem.classList.remove("link-invisible");
        elem.classList.add("link-visible");
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

// var currentElement = $get(currentElementId); // ID set by OnFOcusIn
// var curIndex = currentElement.tabIndex; //get current elements tab index
// if (curIndex == lastTabIndex) {
//   //if we are on the last tabindex, go back to the beginning
//   curIndex = 0;
// }
// var tabbables = document.querySelectorAll(".tabable"); //get all tabable elements
// for (var i = 0; i < tabbables.length; i++) {
//   //loop through each element
//   if (tabbables[i].tabIndex == curIndex + 1) {
//     //check the tabindex to see if it's the element we want
//     tabbables[i].focus(); //if it's the one we want, focus it and exit the loop
//     break;
//   }
// }
