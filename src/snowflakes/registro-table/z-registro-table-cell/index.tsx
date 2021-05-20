import { Component, Element, h, Host, Prop, State } from "@stencil/core";
import { ButtonVariantEnum } from "../../../beans";

@Component({
  tag: "z-registro-table-cell",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZRegistroTableCell {
  @Element() host: HTMLElement;

  /** [Optional] Show contextual menu button */
  @Prop() showButton?: boolean;

  @State() isMenuOpened: boolean = false;

  handleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  componentWillRender() {
    this.host.setAttribute("role", "cell");
  }

  render() {
    return (
      <Host>
        {this.showButton && (
          <div class="button-container">
            <div class="button-content">
              <z-button
                icon="contextual-menu"
                variant={ButtonVariantEnum.tertiary}
                onClick={() => this.handleMenu()}
              />
              <div
                class={`contextual-menu-container ${
                  this.isMenuOpened && "contextual-menu-container-visible"
                }`}
              >
                <slot name="contextual-menu" />
              </div>
            </div>
          </div>
        )}
        <slot />
      </Host>
    );
  }
}
