import {Component, Event, EventEmitter, Prop, h, Host} from "@stencil/core";
import {PopoverPositions} from "../../beans";

@Component({
  tag: "z-contextual-menu",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZContextualMenu {
  /**
   * Elements of ZContextualMenu
   */
  @Prop()
  elements?: string;

  /**
   * [optional] Sets text color of ZContextualMenu's content
   */
  @Prop()
  color?: string = "color-primary01";

  /**
   * [optional] Sets the position of the popover
   */
  @Prop({reflect: true})
  popoverPosition?: PopoverPositions = PopoverPositions.BOTTOM_RIGHT;

  private triggerButton?: HTMLButtonElement;

  private popover?: HTMLZPopoverElement;

  /** remove filter click event, returns filterid */
  @Event({
    eventName: "clickContextualMenu",
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  clickContextualMenu: EventEmitter;

  private jsonElements;

  componentWillRender(): void {
    if (this.elements) {
      this.jsonElements = JSON.parse(this.elements.replace(/&quot;/g, '"'));
    }
  }

  componentDidLoad(): void {
    this.popover.bindTo = this.triggerButton;
  }

  private showIcon(): boolean {
    return !this.jsonElements.some((element) => !element.icon);
  }

  private togglePopover(): void {
    if (!this.popover.open) {
      this.popover.open = true;
    }
  }

  render(): HTMLZContextualMenuElement {
    return (
      <Host>
        <button
          ref={(el) => (this.triggerButton = el as HTMLButtonElement)}
          aria-label={this.popover?.open ? "chiudi menu contestuale" : "apri menu contestuale"}
          onClick={() => this.togglePopover()}
        >
          <z-icon
            name="contextual-menu"
            fill={this.color}
          />
        </button>
        <z-popover
          ref={(el) => (this.popover = el as HTMLZPopoverElement)}
          position={this.popoverPosition}
        >
          <div class="popover-content-container">
            <z-list>
              <z-list-group divider-type="element">
                {this.jsonElements?.map((element, index) => (
                  <z-list-element
                    clickable={!element.disabled}
                    class="my-z-list-element"
                    align-button="left"
                    expandable-style="accordion"
                    color={element.disabled ? `color-disabled03` : this.color}
                    isContextualMenu
                    listElementId={index}
                    onClickItem={(event) => this.clickContextualMenu.emit(event.detail)}
                  >
                    <div class={element.disabled ? "disabled-element-container" : "element-container"}>
                      {this.showIcon() && (
                        <div class="element-icon">
                          <z-icon
                            name={element.icon}
                            width={16}
                            height={16}
                          />
                        </div>
                      )}
                      <div class="element-text">
                        <span>{element.text}</span>
                      </div>
                    </div>
                  </z-list-element>
                ))}
              </z-list-group>
            </z-list>
          </div>
        </z-popover>
      </Host>
    );
  }
}
