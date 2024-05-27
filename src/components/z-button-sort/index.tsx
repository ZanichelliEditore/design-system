import {Component, Prop, State, h, Event, EventEmitter} from "@stencil/core";
import {tabletBreakpoint} from "../../constants/breakpoints";
@Component({
  tag: "z-button-sort",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZButtonSort {
  /** id, should be unique */
  @Prop()
  buttonid: string;

  /** label content (ascending) */
  @Prop()
  label: string;

  /** label content (descending) */
  @Prop()
  desclabel?: string;

  /** occurrences counter (optional) */
  @Prop()
  counter?: number;

  /** sort label content (ascending) (optional) */
  @Prop()
  sortlabelasc?: string = "A-Z";

  /** sort label content (descending) (optional) */
  @Prop()
  sortlabeldesc?: string = "Z-A";

  /** selected flag (optional) */
  @Prop({mutable: true})
  isselected?: boolean = false;

  /** sortable flag (optional) */
  @Prop({mutable: true})
  sortasc?: boolean = true;

  @State()
  allowTooltip = false;

  private ellipsis?: HTMLSpanElement;

  /** sorting direction click event, returns `buttonid` and `sortAsc` */
  @Event()
  buttonSortClick: EventEmitter;

  private emitButtonSortClick(): void {
    if (!this.isselected) {
      this.isselected = true;
    } else {
      this.sortasc = !this.sortasc;
    }
    this.buttonSortClick.emit({
      buttonid: this.buttonid,
      sortAsc: this.sortasc,
    });
  }

  componentDidLoad(): void {
    if (this.elementHasEllipsis() && window.innerWidth > tabletBreakpoint) {
      this.allowTooltip = true;
    }
  }

  private setButtonTitle(): string {
    return this.allowTooltip ? `${this.sortasc ? this.label : this.desclabel}` : "";
  }

  private elementHasEllipsis(): boolean {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }

  render(): HTMLButtonElement {
    return (
      <button
        title={this.setButtonTitle()}
        id={this.buttonid}
        class={{selected: this.isselected}}
        onClick={() => this.emitButtonSortClick()}
      >
        <span
          ref={(el) => (this.ellipsis = el as HTMLSpanElement)}
          class="ellipsis"
        >
          {!this.sortasc && this.desclabel ? this.desclabel : this.label}
        </span>
        <span class="counter">{this.counter && ` (${this.counter})`}</span>
        <span class="sort">{this.sortasc ? this.sortlabelasc : this.sortlabeldesc}</span>
        <z-icon
          name="caret-up-down"
          width={16}
          height={16}
        />
      </button>
    );
  }
}
