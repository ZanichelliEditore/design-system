import { Component, Prop, Event, EventEmitter, h } from "@stencil/core";

@Component({
  tag: "z-button-filter",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButtonFilter {
  @Prop() labeltext: string;
  @Event() disableFilter: EventEmitter;

  handleRemovingFilterClick(): void {
    console.log("filtro eliminato");
    this.disableFilter.emit();
  }

  render() {
    const labeltext = this.labeltext.toLowerCase();
    return (
      <button class="container">
        <span
          class="close-icon-container"
          onClick={() => this.handleRemovingFilterClick()}
        />{" "}
        <span class="text-container">{labeltext}</span>
      </button>
    );
  }
}
