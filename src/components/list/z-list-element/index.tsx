import { Component, h, Host, Prop, State } from "@stencil/core";
import { ExpandableListStyle, ExpandableListButtonAlign } from "../../../beans";

@Component({
  tag: "z-list-element",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZListElement {
  @Prop() expandable?: boolean = false;
  @Prop() expandableStyle?: ExpandableListStyle = ExpandableListStyle.accordion;
  @State() showInnerContent = false;
  @Prop({ reflect: true }) alignButton: ExpandableListButtonAlign =
    ExpandableListButtonAlign.left;

  private openElementConfig = {
    accordion: {
      open: "minus-circled",
      close: "plus-circled",
    },
    menu: {
      open: "chevron-up",
      close: "chevron-down",
    },
  };

  render() {
    return (
      <Host
        role="listitem"
        onClick={() => (this.showInnerContent = !this.showInnerContent)}
      >
        <div
          class={{
            "z-list-element-container": true,
          }}
        >
          <z-icon
            name={
              this.showInnerContent
                ? this.openElementConfig[this.expandableStyle].open
                : this.openElementConfig[this.expandableStyle].close
            }
          />
          <slot />
        </div>
        <div
          class={{
            "z-list-element-inner-container": true,
            expanded: this.showInnerContent,
          }}
        >
          <slot name="inner-content" />
        </div>
      </Host>
    );
  }
}
