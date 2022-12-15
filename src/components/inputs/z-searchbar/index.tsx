import {Component, Event, EventEmitter, h, Host, Prop} from "@stencil/core";
import {SearchbarItem} from "../../../beans";

@Component({
  tag: "z-searchbar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZSearchbar {
  /** Show simple input without submit button */
  @Prop()
  preventSubmit?: boolean = false;

  /** Show autocomplete results */
  @Prop()
  automplete?: boolean = false;

  /** Minimun number of characters to dispatch typing event */
  @Prop()
  autocompleteMinChars?: number = 3;

  /** Number of results shown - default all */
  @Prop()
  resultsCount?: number;

  /** Truncate results to single row */
  @Prop()
  resultsEllipsis?: boolean = true;

  /** Autocomplete results items */
  @Prop()
  resultsItems?: SearchbarItem[];

  /** Emitted on search submit, return search string */
  @Event()
  seachSubmit: EventEmitter;

  private emitSearchSubmit(search: string): void {
    this.searchSubmit.emit(search);
  }

  /** Emitted on search typing, return search string */
  @Event()
  searchTyping: EventEmitter;

  private emitSearchTyping(search: string): void {
    this.searchTyping.emit(search);
  }

  render(): HTMLZSearchbarElement {
    return <Host></Host>;
  }
}
