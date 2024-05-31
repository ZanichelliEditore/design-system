import {Component, Event, EventEmitter, Prop, h} from "@stencil/core";

/**
 * @slot content - set the info box content
 */
@Component({
  tag: "z-info-box",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZInfoBox {
  /** info box unique id */
  @Prop()
  boxid: string;

  /** render close icon flag */
  @Prop()
  isclosable = true;

  /** emitted on close icon click */
  @Event()
  infoBoxClose: EventEmitter;

  private emitInfoBoxClose(): void {
    this.infoBoxClose.emit({boxid: this.boxid});
  }

  render(): HTMLDivElement {
    return (
      <div id={this.boxid}>
        <slot name="content" />
        {this.isclosable && (
          <z-icon
            name="multiply"
            data-action="infoBoxClose"
            onClick={() => this.emitInfoBoxClose()}
          />
        )}
      </div>
    );
  }
}
