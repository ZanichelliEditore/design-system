import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "z-card-alert",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardAlert {
  @Prop() iconname: string;
  @Prop() contenttext: string;
  @Prop() actiontext?: string;
  @Prop() type: string;

  @Event() undoAction: EventEmitter;
  emitUndoAction(event: MouseEvent) {
    event.preventDefault();
    this.undoAction.emit({ actionType: this.type });
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

  renderTextAction() {
    if (!this.actiontext) return;

    return (
      <span
        class="contentAction"
        onClick={(e: MouseEvent) => {
          this.emitUndoAction(e);
        }}
      >
        {this.actiontext}
      </span>
    );
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
        <span
          class="contentAction"
          onClick={(e: MouseEvent) => {
            this.emitUndoAction(e);
          }}
        >
          {this.actiontext}
        </span>
      </div>
    );
  }
}
