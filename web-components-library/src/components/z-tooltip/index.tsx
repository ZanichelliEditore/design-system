import { Component, Prop, h } from "@stencil/core";
import { TooltipPosition } from "../../beans/index";

@Component({
  tag: "z-tooltip",
  styleUrl: "styles.css",
  shadow: true
})
export class ZTooltip {
  @Prop() content: string;
  @Prop() type: string;

  private direction: TooltipPosition;

  constructor() {
    switch (true) {
      case "top" === this.type:
        this.direction = TooltipPosition.TOP;
        break;
      case "bottom" === this.type:
        this.direction = TooltipPosition.BOTTOM;
        break;
      case "left" === this.type:
        this.direction = TooltipPosition.LEFT;
        break;
      case "right" === this.type:
        this.direction = TooltipPosition.RIGHT;
        break;
      default:
        this.direction = TooltipPosition.NO_ARROW;
    }
  }

  getArrowClass() {
    switch (this.direction) {
      case TooltipPosition.TOP:
        return "tooltip tooltip-bottom-arrow";
      case TooltipPosition.BOTTOM:
        return "tooltip tooltip-top-arrow";
      case TooltipPosition.LEFT:
        return "tooltip tooltip-right-arrow";
      case TooltipPosition.RIGHT:
        return "tooltip tooltip-left-arrow";
    }
  }

  render() {
    return <div class={this.getArrowClass()}>{this.content}</div>;
  }
}
