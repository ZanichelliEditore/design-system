import {
  Component,
  Event,
  State,
  EventEmitter,
  Host,
  Prop,
  h,
  Listen,
} from "@stencil/core";
import { PopoverPosition } from "../../beans";

@Component({
  tag: "z-contextual-menu",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZContextualMenu {
  /**
   *  elements of ZContextualMenu
   */
  @Prop() elements?: string;

  /**
   * [optional] Sets text color of ZContextualMenu's content
   */
  @Prop() color?: string = "color-primary01";

  /**
   * [optional] Sets the position of the popover
   */
  @Prop() popoverPosition?: PopoverPosition = PopoverPosition.BOTTOM_RIGHT;

  /**
   * [optional] Sets the centering of the popover
   */
   @Prop() popoverCenter?: boolean = false;

  @State()
  private popoverOpen: boolean = false;

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

  @Listen("openChange")
  listenOpen(ev) {
    if (ev?.target?.popover === this.popover) {
      this.popoverOpen = ev.detail.open;
    }
  }

  private jsonElements;

  componentWillRender() {
    if (this.elements) {
      this.jsonElements = JSON.parse(this.elements.replace(/&quot;/g, '"'));
    }
  }

  showIcon() {
    return !this.jsonElements.some((element) => !element.icon);
  }

  togglePopover() {
    this.popoverOpen = !this.popoverOpen;
  }

  render() {
    return (
      <Host>
        <button
          ref={(el) => (this.triggerButton = el as HTMLButtonElement)}
          aria-label="apri menu contestuale"
          onClick={() => this.togglePopover()}
        >
          <z-icon name="contextual-menu" fill={this.color} />
        </button>

        <z-popover
          ref={(el) => (this.popover = el as HTMLZPopoverElement)}
          open={this.popoverOpen}
          position={this.popoverPosition}
          center={this.popoverCenter}
          bindTo={this.triggerButton as HTMLElement}
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
                    onClickItem={(event) =>
                      this.clickContextualMenu.emit(event.detail)
                    }
                  >
                    <div
                      class={
                        element.disabled
                          ? "disabled-element-container"
                          : "element-container"
                      }
                    >
                      {this.showIcon() && (
                        <div class="element-icon">
                          <z-icon name={element.icon} width={16} height={16} />
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
