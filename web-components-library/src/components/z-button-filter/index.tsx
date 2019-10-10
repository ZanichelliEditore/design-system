import { Component, Prop, Event, EventEmitter, h } from "@stencil/core";

@Component({
  tag: "z-button-filter",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButtonFilter {
  @Prop() filtername: string;
  @Prop() isfixed: boolean = false;
  @Prop() hasicon: boolean = true;
  @Prop() filterid: string;
  @Event({
    eventName: "removefilter",
    composed: true,
    cancelable: true,
    bubbles: true
  })
  removefilter: EventEmitter;

  constructor() {
    this.handleRemovingFilterClick = this.handleRemovingFilterClick.bind(this);
  }

  handleRemovingFilterClick(): void {
    this.removefilter.emit({
      filterid: this.filterid
    });
  }

  renderFixedPillow(filtername) {
    return (
      <button class="container">
        {this.hasicon && <z-icon class="close-icon-container" name="close" height={12} width={12} />}
        <span class="text-container">{filtername}</span>
      </button>
    );
  }

  renderDynamicPillow(filtername) {
    return (
      <button class="container isactive">
        {this.hasicon && <z-icon class="close-icon-container" name="close" height={12} width={12} onClick={this.handleRemovingFilterClick} />}
        <span class="text-container">{filtername}</span>
      </button>
    );
  }

  render() {
    if (this.isfixed) {
      return this.renderFixedPillow(this.filtername);
    }

    return this.renderDynamicPillow(this.filtername);
  }
}
