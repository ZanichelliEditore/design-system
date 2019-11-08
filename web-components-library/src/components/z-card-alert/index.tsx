import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "z-card-alert",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardAlert {
  @Prop() iconname: string;
  @Prop() contenttext: string;
  @Prop() actiontext: string;
  @Prop() type: string;

  @Event() undoAction: EventEmitter;
  emitUndoAction(event: MouseEvent) {
    event.preventDefault();
    console.log("emitUndoAction");
    this.undoAction.emit({ actionType: this.type });
  }

  retrieveClass(): string {
    if (this.type === "add") return "addAlert";
    else if (this.type === "remove") return "removeAlert";
    else return "";
  }

  render() {
    return (
      <div class="relativeContainer">
        <div class={this.retrieveClass()}>
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
      </div>
    );
  }
}
