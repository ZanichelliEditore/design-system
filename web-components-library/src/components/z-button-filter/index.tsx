import { Component, Prop, Event, EventEmitter, h } from "@stencil/core";

@Component({
  tag: "z-button-filter",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButtonFilter {
  @Prop() filtername: string;
  @Prop() isfixed: boolean = false;
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
        <span class="close-icon-container" />
        <span class="text-container">{filtername}</span>
      </button>
    );
  }

  renderDynamicPillow(filtername) {
    return (
      <button class="container isactive">
        <span
          class="close-icon-container"
          onClick={this.handleRemovingFilterClick}
        />
        <span class="text-container">{filtername}</span>
      </button>
    );
  }

  render() {
    const filtername = this.filtername.toLowerCase();

    if (this.isfixed) {
      return this.renderFixedPillow(filtername);
    }

    return this.renderDynamicPillow(filtername);
  }
}
