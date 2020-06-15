import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

import { keybordKeyCodeEnum } from "../../../beans/index";

@Component({
  tag: "z-alert",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardAlert {
  /** icon name */
  @Prop() iconname: string;
  /** content text */
  @Prop() contenttext: string;
  /** action button text */
  @Prop() actiontext?: string;
  /** alert variant type */
  @Prop() type: string;

  /** user click/keyboard action event, returns actionType */
  @Event() userAction: EventEmitter;
  emitUserAction() {
    this.userAction.emit({ actionType: this.type });
  }

  handleSpaceKeyPress(e: KeyboardEvent): void {
    if (
      e.keyCode == keybordKeyCodeEnum.SPACE ||
      e.keyCode == keybordKeyCodeEnum.ENTER
    ) {
      e.preventDefault();
      this.emitUserAction();
    }
  }

  handleActionButtonClick(e: MouseEvent): void {
    e.preventDefault();
    this.emitUserAction();
  }

  retrieveClass(): string {
    let className = "";
    switch (this.type) {
      case "success":
        className = "successAlert";
        break;
      case "warning":
        className = "warningAlert";
        break;
      case "error":
        className = "errorAlert";
        break;
      default:
        className = "";
        break;
    }
    return className;
  }

  render() {
    return (
      <div class={`external-container ${this.retrieveClass()}`}>
        <div class="relativeContainer">
          <z-icon
            name={this.iconname}
            width={18}
            height={18}
            class={this.retrieveClass()}
          ></z-icon>
          <span class="contentText">{this.contenttext}</span>
          {this.actiontext && !!this.actiontext.trim().length && (
            <span
              role="button"
              tabindex="0"
              class="contentAction"
              onClick={(e: MouseEvent) => {
                this.handleActionButtonClick(e);
              }}
              onKeyPress={(e: KeyboardEvent) => {
                this.handleSpaceKeyPress(e);
              }}
            >
              {this.actiontext}
            </span>
          )}
        </div>
      </div>
    );
  }
}
