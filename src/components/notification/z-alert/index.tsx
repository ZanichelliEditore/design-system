import { Component, Prop, h, Event, EventEmitter, State } from "@stencil/core";

import { keybordKeyCodeEnum } from "../../../beans/index";

@Component({
  tag: "z-alert",
  styleUrl: "styles.css",
  shadow: true
})
export class ZAlert {
  /** icon name */
  @Prop() iconname: string;
  /** content text */
  @Prop() contenttext: string;
  /** action button text */
  @Prop() actiontext?: string;
  /** alert variant type */
  @Prop() type: string;

  @State() hasActionTextSection: boolean = false;

  /** user click/keyboard action event, returns actionType */
  @Event() userAction: EventEmitter;
  emitUserAction() {
    this.userAction.emit({ actionType: this.type });
  }

  componentWillLoad() {
    this.hasActionTextSection =
      this.actiontext && !!this.actiontext.trim().length;
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
    let className = this.hasActionTextSection
      ? "three-sections-grid "
      : "two-sections-grid ";
    switch (this.type) {
      case "success":
        className += "successAlert";
        break;
      case "warning":
        className += "warningAlert";
        break;
      case "error":
        className += "errorAlert";
        break;
      default:
        className += "";
        break;
    }
    return className;
  }

  render() {
    return (
      <div class={`relativeContainer ${this.retrieveClass()}`}>
        <z-icon
          name={this.iconname}
          width={18}
          height={18}
          class={this.retrieveClass()}
        ></z-icon>
        <span class="contentText">{this.contenttext}</span>
        {this.hasActionTextSection && (
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
    );
  }
}
