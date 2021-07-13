import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "z-myz-card-alert",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMyzCardAlert {
  /** icon name */
  @Prop() iconname: string;
  /** content text */
  @Prop() contenttext: string;
  /** action button text */
  @Prop() actiontext?: string;
  /** alert variant type */
  @Prop() type: string;

  /** undo action click/keyboard event, returns actionType */
  @Event() undoAction: EventEmitter;
  emitUndoAction() {
    this.undoAction.emit({ actionType: this.type });
  }

  handleSpaceKeyPress(e: KeyboardEvent): void {
    if (e.keyCode == 32 || e.keyCode == 13) {
      e.preventDefault();
      this.emitUndoAction();
    }
  }

  handleActionButtonClick(e: MouseEvent): void {
    e.preventDefault();
    this.emitUndoAction();
  }

  retrieveClass(): string {
    let className = "";
    switch (this.type) {
      case "add":
        className = "addAlert";
        break;
      case "remove":
        className = "removeAlert";
        break;
      default:
        className = "";
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
    );
  }
}
