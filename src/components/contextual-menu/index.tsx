import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import { ListSize, PopoverPosition } from "../../beans";

@Component({
  tag: "contextual-menu",
  styleUrl: "styles.css",
  shadow: true,
})
export class ContextualMenu {
  /** deprecated - JSON stringified data to fill the footer */
  @Prop() elements?: string;

    /** remove filter click event, returns filterid */
    @Event({
      eventName: "clickItem",
      composed: true,
      cancelable: true,
      bubbles: true,
    })
    clickItem: EventEmitter;

  private jsonElements;

  componentWillLoad() {
    if (this.elements) {
      this.jsonElements = JSON.parse(this.elements);
    }
  }

  showIcon() {
    let showIcon = true;

    this.jsonElements.forEach((element) => {
      if (!element.icon || element.icon === "") {
        showIcon = false;
      }
    });
    return showIcon;
  }

  render() {
    return (
      <Host>
        <z-popover
          background-color="gray50"
          box-shadow="shadow-2"
          position={PopoverPosition["after-down"]}
        >
          <z-icon slot="trigger" name="contextual-menu" />
          <div class="popover-content-container" slot="popover">
            <z-list>
              <z-list-group divider-type="element" size={ListSize.small}>
                {this.jsonElements.map((element) => (
                    <z-list-element clickable={true} class="my-z-list-element">
                      <div class="element-container" onClick={() => this.clickItem.emit(element.key)}>
                        {this.showIcon() &&
                          <div class="icon-container">
                            <z-icon name={element.icon} />
                          </div>
                        }
                        <div class="text-container">
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
