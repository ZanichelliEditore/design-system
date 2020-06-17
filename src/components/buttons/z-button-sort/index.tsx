import { Component, Prop, State, h, Event, EventEmitter } from "@stencil/core";
import { tabletBreakpoint } from '../../../constants/breakpoints';
@Component({
  tag: "z-button-sort",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButtonSort {
  /** id, should be unique */
  @Prop() buttonid: string;
  /** label content (ascending) */
  @Prop() label: string;
  /** label content (descending) */
  @Prop() desclabel?: string = this.label;
  /** occurrencies counter (optional) */
  @Prop() counter?: number;
  /** sort label content (ascending) (optional) */
  @Prop() sortlabelasc?: string = "A-Z";
  /** sort label content (descending) (optional) */
  @Prop() sortlabeldesc?: string = "Z-A";
  /** selected flag (optional) */
  @Prop({ mutable: true }) isselected?: boolean = false;
  /** sortable flag (optional) */
  @Prop({ mutable: true }) sortasc?: boolean = true;

  @State() allowTooltip: boolean = false;

  private ellipsis?: HTMLSpanElement;

  /** sorting direction click event, returns buttonid and sortAsc */
  @Event() buttonSortClick: EventEmitter;
  emitButtonSortClick() {
    if (!this.isselected) {
      this.isselected = true;
    } else {
      this.sortasc = !this.sortasc;
    }
    this.buttonSortClick.emit({
      buttonid: this.buttonid,
      sortAsc: this.sortasc
    });
  }

  componentDidLoad() {
    if (this.elementHasEllipsis() && window.innerWidth > tabletBreakpoint) this.allowTooltip = true;
  }

  setButtonTitle(): string {
    return this.allowTooltip
      ? `${this.sortasc ? this.label : this.desclabel}`
      : "";
  }

  elementHasEllipsis(): boolean {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }

  render() {
    return (
      <button
        title={this.setButtonTitle()}
        id={this.buttonid}
        class={this.isselected && "selected"}
        onClick={() => this.emitButtonSortClick()}
      >
        <label>
          <span
            ref={el => (this.ellipsis = el as HTMLSpanElement)}
            class="ellipsis"
          >
            {this.sortasc ? this.label : this.desclabel}
          </span>
          <span class="counter">{this.counter && ` (${this.counter})`}</span>
          <span class="sort">
            {this.sortasc ? this.sortlabelasc : this.sortlabeldesc}
          </span>
          <z-icon name="drop-up-down" width={16} height={16} />
        </label>
      </button>
    );
  }
}
