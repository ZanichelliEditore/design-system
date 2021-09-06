import { Component, Host, Prop, h } from "@stencil/core";
import { ListSize, PopoverPosition } from "../../beans";

@Component({
  tag: "contextual-menu",
  styleUrl: "styles.css",
  shadow: true,
})
export class ContextualMenu {
  /** deprecated - JSON stringified data to fill the footer */
  /**
   *  elements of ContextualMenu
   */
  @Prop() elements?: string;

  /**
   * [optional] Sets text color of ContextualMenu's content
   */
  @Prop() color?: string = "color-primary01";

  private jsonElements;

  componentWillLoad() {
    if (this.elements) {
      this.jsonElements = JSON.parse(this.elements);
    }
  }

  showIcon() {
    return !this.jsonElements.some((element) => !element.icon);
  }

  render() {
    return (
      <Host >
        <z-popover
          background-color="color-background"
          box-shadow="shadow-2"
          position={PopoverPosition["after-down"]}
          padding="0"
          
        >
          <z-icon
            aria-label="apri-menu-contestuale"
            slot="trigger"
            name="contextual-menu"
            fill="color-primary01"
            style={{ cursor: "pointer" }}
          />
          <div class="popover-content-container" slot="popover">
            <z-list>
              <z-list-group divider-type="element" size={ListSize.small}>
                {this.jsonElements?.map((element, index) => (
                  <z-list-element
                    clickable
                    class="my-z-list-element"
                    align-button="left"
                    expandable-style="accordion"
                    color={`var(--${this.color})`}
                    isContextualMenu
                    listElementId={index}
                  >
                    <div class="element-container">
                      {this.showIcon() && (
                        <div>
                          <z-icon name={element.icon} fill="color-primary01" />
                        </div>
                      )}
                      <div>
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
