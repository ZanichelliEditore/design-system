import {Component, Event, EventEmitter, h, Host, Prop, State, Watch} from "@stencil/core";
import {ListDividerType, SearchbarItem} from "../../../beans";
import {randomId} from "../../../utils/utils";

@Component({
  tag: "z-searchbar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZSearchbar {
  /** Show simple input without submit button */
  @Prop()
  preventSubmit?: boolean = false;

  /** Search input placeholder */
  @Prop()
  placeholder?: string;

  /** Show autocomplete results */
  @Prop()
  autocomplete?: boolean = false;

  /** Minimun number of characters to dispatch typing event */
  @Prop()
  autocompleteMinChars?: number = 3;

  /** Number of results shown - default all */
  @Prop()
  resultsCount?: number;

  /** Truncate results to single row */
  @Prop()
  resultsEllipsis?: boolean = true;

  /** Search helper text */
  @Prop()
  searchHelperLabel?: string = "Cerca {searchString}";

  /** Autocomplete results items */
  @Prop()
  resultsItems?: SearchbarItem[] | string;

  @State()
  searchString: string = "sdsadsa";

  private id: string = randomId();
  private resultsItemsList: SearchbarItem[] | undefined = null;

  /** Emitted on search submit, return search string */
  @Event()
  seachSubmit: EventEmitter;

  // private emitSearchSubmit(search: string): void {
  //   this.searchSubmit.emit(search);
  // }

  /** Emitted on search typing, return search string */
  @Event()
  searchTyping: EventEmitter;

  // private emitSearchTyping(search: string): void {
  //   this.searchTyping.emit(search);
  // }

  componentWillLoad() {
    this.resultsItemsList = this.getResultsItemsList();
  }

  @Watch("resultsItems")
  watchItems(): void {
    this.resultsItemsList = this.getResultsItemsList();
  }

  private getResultsItemsList(): SearchbarItem[] | undefined {
    return typeof this.resultsItems === "string" ? JSON.parse(this.resultsItems) : this.resultsItems;
  }

  private renderInput(): HTMLZInputElement {
    return (
      <z-input
        message={false}
        placeholder={this.placeholder}
      />
    );
  }

  private renderButton(): null | HTMLZButtonElement {
    if (this.preventSubmit) return null;

    return <z-button>CERCA</z-button>;
  }

  private renderResults(): HTMLDivElement | null {
    if (!this.autocomplete) return null;
    if (!this.resultsItemsList || !this.resultsItemsList?.length) return null;

    return (
      <div class="results">
        <z-list
          role="listbox"
          tabindex={0}
          id={`list-${this.id}`}
        >
          {this.renderSearchHelper()}
          {this.resultsItemsList.map((item: SearchbarItem, key, array) => {
            const lastItem = array.length === key + 1;

            return this.renderResultsItem(item, key, lastItem);
          })}
        </z-list>
      </div>
    );
  }

  private renderResultsItem(item: SearchbarItem, key: number, lastItem: boolean): HTMLZListElementElement {
    return (
      <z-list-element
        role="option"
        tabindex={0}
        dividerType={lastItem ? ListDividerType.HEADER : ListDividerType.ELEMENT}
        id={`list-item-${this.id}-${key}`}
        // onClickItem={() => }
      >
        <span class={{item: true, ellipsis: this.resultsEllipsis}}>
          {item?.icon && (
            <z-icon
              class="item-icon"
              name={item.icon}
            />
          )}
          <span class="item-label">{item.label}</span>
        </span>
      </z-list-element>
    );
  }

  private renderSearchHelper(): HTMLZListElement | null {
    if (!this.autocomplete || this.preventSubmit || !this.searchString) return null;

    return (
      <z-list-element
        role="option"
        tabindex={0}
        dividerType={ListDividerType.ELEMENT}
        id={`list-item-${this.id}-search`}
        // onClickItem={() => }
      >
        <span class="item item-search">
          <z-icon
            class="search-icon"
            name="left-magnifying-glass"
          />
          <span class="item-label">{this.searchHelperLabel.replace("{searchString}", this.searchString)}</span>
        </span>
      </z-list-element>
    );
  }

  render(): HTMLZSearchbarElement {
    return (
      <Host>
        <div class={{"has-submit": !this.preventSubmit, "has-results": this.autocomplete}}>
          {this.renderInput()}
          {this.renderButton()}
          {this.renderResults()}
        </div>
      </Host>
    );
  }
}
