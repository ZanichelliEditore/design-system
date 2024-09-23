import {Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h} from "@stencil/core";
import {ButtonVariant, ControlSize, PopoverPosition, VisibilityCondition} from "../../../../beans";

/**
 * ZTd component.
 * @slot - ZTd content.
 */
@Component({
  tag: "z-td",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTd {
  @Element() host: HTMLZTdElement;

  /**
   * Number of columns that the cell should span.
   */
  @Prop()
  colspan: number;

  /**
   * Whether the cell should stick.
   */
  @Prop({reflect: true})
  sticky = false;

  /**
   * Enables the contextual menu.
   * Can be set to "hover" or "always" to show the button only on cell hover or always.
   * Set a nullish value to hide the menu button.
   */
  @Prop({reflect: true})
  showMenu: VisibilityCondition = null;

  /**
   * Set the popover position, the default is "auto".
   */
  @Prop()
  popoverPosition?: PopoverPosition = PopoverPosition.AUTO;

  /**
   * Store the open state of the menu.
   */
  @State()
  isMenuOpen = false;

  private menuTrigger: HTMLZButtonElement;

  private popoverEl: HTMLZPopoverElement;

  /**
   * Emitted when the value of the `colspan` changes.
   */
  @Event({
    bubbles: true,
    cancelable: false,
  })
  colspanChange: EventEmitter<number>;

  @Watch("colspan")
  protected updateColspan(): void {
    if (this.colspan) {
      this.host.style.gridColumn = `span ${this.colspan}`;
    } else {
      this.host.style.removeProperty("grid-column");
    }

    this.colspanChange.emit(this.colspan || 1);
  }

  private onMenuButtonClick(ev: MouseEvent): void {
    ev.stopPropagation();
    this.popoverEl.open = !this.popoverEl.open;
  }

  componentWillLoad(): void {
    this.updateColspan();
  }

  render(): HTMLZTdElement {
    return (
      <Host
        role="cell"
        menu-open={this.isMenuOpen}
      >
        <div
          class="cell--content-container"
          style={this.showMenu && {justifyContent: "space-between"}}
        >
          <slot></slot>
          {this.showMenu && (
            <div class="cell--menu-container prevent-expand">
              <z-button
                variant={ButtonVariant.TERTIARY}
                icon="contextual-menu"
                size={ControlSize.X_SMALL}
                ref={(el) => (this.menuTrigger = el as HTMLZButtonElement)}
                onClick={this.onMenuButtonClick.bind(this)}
              />
              <z-popover
                class="cell-popover"
                ref={(el) => (this.popoverEl = el as HTMLZPopoverElement)}
                bindTo={this.menuTrigger as HTMLElement}
                onOpenChange={(event) => (this.isMenuOpen = event.detail.open)}
                position={this.popoverPosition}
              >
                <slot name="contextual-menu"></slot>
              </z-popover>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
