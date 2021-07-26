import { Component, Prop, h, Host, Watch } from "@stencil/core";
import { TooltipPosition } from "../../../beans/index";

@Component({
  tag: "z-tooltip",
  styleUrl: "styles.css",
  shadow: true
})
export class ZTooltip {
  /** Content text */
  @Prop() content: string;

  /** Tooltip position */
  @Prop({ reflect: true, mutable: true }) type: TooltipPosition;

  @Watch('type')
  validateType(newValue) {
    if (
      newValue &&
      Object
        .values(TooltipPosition)
        .every((position) => newValue !== position)
      ) {
      this.type = null;
    }
  }

  componentWillLoad() {
    this.validateType(this.type);
  }

  render() {
    if (this.content) {
        return (
          <Host class="legacy">
            {this.content}
          </Host>
      );
    }

    return (
      <slot></slot>
    );
  }
}
