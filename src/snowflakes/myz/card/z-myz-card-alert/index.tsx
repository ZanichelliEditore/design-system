import {Component, Event, EventEmitter, Prop, h} from "@stencil/core";
import {AlertType} from "../../../../beans";

@Component({
  tag: "z-myz-card-alert",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMyzCardAlert {
  /** icon name */
  @Prop()
  iconname: string;

  /** content text */
  @Prop()
  contenttext: string;

  /** action button text */
  @Prop()
  actiontext?: string;

  /** alert variant type */
  @Prop()
  type: string;

  /** undo action click/keyboard event, returns actionType */
  @Event()
  undoAction: EventEmitter;

  private emitUndoAction(): void {
    this.undoAction.emit({actionType: this.type});
  }

  private handleSpaceKeyPress(e: KeyboardEvent): void {
    if (e.keyCode == 32 || e.keyCode == 13) {
      e.preventDefault();
      this.emitUndoAction();
    }
  }

  private handleActionButtonClick(e: MouseEvent): void {
    e.preventDefault();
    this.emitUndoAction();
  }

  private retrieveClass(): string {
    let className = "";
    switch (this.type) {
      case "add":
        className = "add-alert";
        break;
      case "remove":
        className = "remove-alert";
        break;
      default:
        className = "";
        break;
    }

    return className;
  }

  private getAlertType(): AlertType {
    switch (this.type) {
      case "add":
        return AlertType.SUCCESS;
      case "remove":
        return AlertType.WARNING;
      default:
        return null;
    }
  }

  render(): HTMLDivElement {
    return (
      <div class={"alert-external-wrapper " + this.retrieveClass()}>
        <z-alert type={this.getAlertType()}>
          <div class="relative-container">
            <z-icon
              name={this.iconname}
              width={18}
              height={18}
              class={this.retrieveClass()}
            ></z-icon>
            <span class="content-text">{this.contenttext}</span>
            {this.actiontext && !!this.actiontext.trim().length && (
              <span
                role="button"
                tabindex="0"
                class="content-action"
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
        </z-alert>
      </div>
    );
  }
}
