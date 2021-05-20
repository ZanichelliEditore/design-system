import { Component, Element, h, Host, Prop } from "@stencil/core";
import { ButtonVariantEnum } from "../../../beans";

@Component({
  tag: "z-registro-table-cell",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZRegistroTableCell {
  @Element() host: HTMLElement;
  @Prop() showButton?: boolean;

  componentWillRender() {
    this.host.setAttribute("role", "cell");
  }

  render() {
    return (
      <Host>
        {this.showButton && (
          <z-button
            icon="contextual-menu"
            variant={ButtonVariantEnum.tertiary}
          />
        )}
        <slot />
      </Host>
    );
  }
}
