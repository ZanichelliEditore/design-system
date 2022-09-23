import {Component, Prop, Event, EventEmitter, h} from "@stencil/core";

@Component({
  tag: "z-button-filter",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZButtonFilter {
  /** filter text content */
  @Prop()
  filtername: string;

  /** disable action on button */
  @Prop()
  isfixed = false;

  /** add icon to button */
  @Prop()
  hasicon = true;

  /** filter id */
  @Prop()
  filterid: string;

  /** reduce button size (optional) */
  @Prop()
  issmall?: boolean = false;

  /** remove filter click event, returns filterid */
  @Event({
    eventName: "removefilter",
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  removefilter: EventEmitter;

  constructor() {
    this.handleRemovingFilterClick = this.handleRemovingFilterClick.bind(this);
  }

  private handleRemovingFilterClick(): void {
    this.removefilter.emit({
      filterid: this.filterid,
    });
  }

  private renderFixedPillow(filtername): HTMLButtonElement {
    return (
      <button class={`container ${this.issmall ? "small" : ""}`}>
        {this.renderIcon()}
        {this.renderContent(filtername)}
      </button>
    );
  }

  private renderDynamicPillow(filtername): HTMLButtonElement {
    return (
      <button
        class={`container isactive ${this.issmall ? "small" : ""}`}
        onClick={this.handleRemovingFilterClick}
      >
        {this.renderIcon()}
        {this.renderContent(filtername)}
      </button>
    );
  }

  private renderIcon(): HTMLZIconElement {
    if (!this.hasicon) return null;

    return (
      <z-icon
        class="close-icon-container"
        name="multiply"
        height={12}
        width={12}
      />
    );
  }

  private renderContent(filtername): HTMLSpanElement {
    return <span class="text-container">{filtername}</span>;
  }

  render(): HTMLButtonElement {
    if (this.isfixed) {
      return this.renderFixedPillow(this.filtername);
    }

    return this.renderDynamicPillow(this.filtername);
  }
}
