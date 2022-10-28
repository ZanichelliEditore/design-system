import {Component, Element, h, Host, Prop, State} from "@stencil/core";
import {ButtonVariant, ButtonSize, Size} from "../../../beans";

@Component({
  tag: "z-table-cell",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTableCell {
  @Element() host: HTMLZTableCellElement;

  /** [Optional] Show contextual menu button */
  @Prop()
  showButton?: boolean;

  /** Set padding size of cell, if special 0px padding will be set */
  @Prop({reflect: true})
  padding: Size = Size.MEDIUM;

  @State()
  isMenuOpened = false;

  private handleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  componentWillRender(): void {
    this.host.setAttribute("role", "cell");
  }

  render(): HTMLZTableCellElement {
    return (
      <Host>
        {this.showButton && (
          <div
            class={{
              "button-container": true,
              "visible": this.isMenuOpened,
            }}
          >
            <div class="button-content">
              <z-button
                icon="contextual-menu"
                variant={ButtonVariant.TERTIARY}
                size={ButtonSize.X_SMALL}
                onClick={() => this.handleMenu()}
              />
              <div
                class={{
                  "contextual-menu-container": true,
                  "visible": this.isMenuOpened,
                }}
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
