import { Component, Prop, h } from "@stencil/core";
import { TooltipPosition } from "../../../beans/index";

@Component({
  tag: "z-tooltip",
  styleUrl: "styles.css",
  shadow: true
})
export class ZTooltip {
  /** content text */
  @Prop() content: string;
  /** tooltip position variant */
  @Prop() type: TooltipPosition;

  getArrowClass() {
    const direction = TooltipPosition[(this.type).toUpperCase()];
    switch (direction) {
      case TooltipPosition.TOP:
        return "tooltip tooltip-bottom-arrow";
      case TooltipPosition.BOTTOM:
        return "tooltip tooltip-top-arrow";
      case TooltipPosition.LEFT:
        return "tooltip tooltip-right-arrow";
      case TooltipPosition.RIGHT:
        return "tooltip tooltip-left-arrow";
      case TooltipPosition.TOP_LEFT:
          return "tooltip tooltip-bottom-right-arrow";
      case TooltipPosition.TOP_RIGHT:
          return "tooltip tooltip-bottom-left-arrow";
      case TooltipPosition.BOTTOM_LEFT:
          return "tooltip tooltip-top-right-arrow";
      case TooltipPosition.BOTTOM_RIGHT:
          return "tooltip tooltip-top-left-arrow";
    }
  }

  render() {
    if (this.content) {
        return (
          <div class={`${this.getArrowClass()} legacy`}>
            {this.content}
          </div>
      );
    }

    return (
      <div class={this.getArrowClass()}>
        <slot/>
      </div>
    );
  }
}
