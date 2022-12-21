import {Component, Event, EventEmitter, h, Host, Listen, Prop, State, Watch} from "@stencil/core";
import {ListDividerType, SearchbarGroup, SearchbarGroupedItem, SearchbarItem} from "../../../beans";
import {handleKeyboardSubmit, randomId} from "../../../utils/utils";

/**
 * @cssprop --z-searchbar-results-height - Max height of the results container (default: 540px)
 */
@Component({
  tag: "z-searchbar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZSearchbar {
  /** the id of the searchbar element */
  @Prop({reflect: true})
  htmlid: string = `searchbar-${randomId()}`;

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
  @Prop({mutable: true})
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

  /** Sort autocomplete results items */
  @Prop()
  sortResultsItems?: boolean = false;

  @State()
  searchString: string = "";

  @State()
  currResultsCount: number = 0;

  @State()
  showResults: boolean = false;

  private resultsItemsList: SearchbarItem[] | undefined = null;

  /** Emitted on search submit, return search string */
  @Event()
  searchSubmit: EventEmitter<string>;

  private emitSearchSubmit(): void {
    this.searchSubmit.emit(this.searchString);
  }

  /** Emitted on search typing, return search string */
  @Event()
  searchTyping: EventEmitter<string>;

  private emitSearchTyping(search: string): void {
    this.searchTyping.emit(search);
  }

  /** Emitted on search result click, return item */
  @Event()
  searchItemClick: EventEmitter<SearchbarItem>;

  private emitSearchItemClick(item: SearchbarItem): void {
    this.searchItemClick.emit(item);
  }

  @Watch("resultsItems")
  watchItems(): void {
    this.resultsItemsList = this.getResultsItemsList();
  }

  @Watch("resultsCount")
  watchResultsCount(): void {
    this.currResultsCount = this.resultsCount;
  }

  @Watch("searchString")
  watchSearchString(): void {
    this.emitSearchTyping(this.searchString);
    if (!this.searchString) this.currResultsCount = this.resultsCount;
  }

  @Listen("click", {target: "document"})
  clickListener(e: MouseEvent): void {
    this.handleOutsideClick(e);
  }

  componentWillLoad() {
    this.resultsItemsList = this.getResultsItemsList();
    this.currResultsCount = this.resultsCount;
  }

  private getResultsItemsList(): SearchbarItem[] | undefined {
    return typeof this.resultsItems === "string" ? JSON.parse(this.resultsItems) : this.resultsItems;
  }

  private getGroupedItems(items: SearchbarItem[]): SearchbarGroupedItem {
    let groupedItems = {};
    items.forEach((item: SearchbarItem) => {
      let key = `${item?.category}${item?.subcategory}`;
      groupedItems[key] = groupedItems[key] ?? {
        category: item?.category,
        subcategory: item?.subcategory,
        items: [],
      };
      groupedItems[key]["items"].push(item);
    });

    if (this.sortResultsItems) {
      return Object.keys(groupedItems)
        .sort()
        .reduce((obj, key) => {
          obj[key] = {
            ...groupedItems[key],
            items: groupedItems[key]["items"].sort((a: SearchbarItem, b: SearchbarItem) => {
              const nameA = a.label.toUpperCase();
              const nameB = b.label.toUpperCase();
              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
              return 0;
            }),
          };
          return obj;
        }, {});
    } else {
      return groupedItems;
    }
  }

  private checkResultsCount(counter: number): boolean {
    if (!this.currResultsCount) return true;
    if (counter < this.currResultsCount) return true;
    return false;
  }

  private handleStopTyping(e: CustomEvent): void {
    e.stopPropagation();
    if (e.detail.value.length >= this.autocompleteMinChars) {
      this.searchString = e.detail.value;
    } else if (this.searchString) {
      this.searchString = "";
    }
  }

  private handleSubmit(): void {
    if (this.preventSubmit) return;

    this.emitSearchSubmit();
  }

  private handleItemClick(item: SearchbarItem): void {
    this.emitSearchItemClick(item);
    window.location.href = item.link;
  }

  private handleOutsideClick(e: MouseEvent): void {
    const cp = e.composedPath();

    const searchbar = cp.find((elem: HTMLElement) => elem.nodeName === "Z-SEARCHBAR");
    if (!searchbar || (searchbar as HTMLZSearchbarElement).htmlid !== this.htmlid) {
      this.showResults = false;
      return;
    }

    if (cp.find((elem: HTMLElement) => elem?.nodeName === "Z-INPUT" || elem?.classList?.contains("results"))) {
      this.showResults = true;
      return;
    }

    this.showResults = false;
  }

  private renderInput(): HTMLZInputElement {
    return (
      <z-input
        message={false}
        placeholder={this.placeholder}
        onStopTyping={(e: CustomEvent) => this.handleStopTyping(e)}
        onKeyUp={(e: KeyboardEvent) => handleKeyboardSubmit(e, () => this.handleSubmit())}
      />
    );
  }

  private renderButton(): HTMLZButtonElement | null {
    if (this.preventSubmit) return null;

    return <z-button onClick={() => this.handleSubmit()}>CERCA</z-button>;
  }

  private renderResults(): HTMLDivElement | null {
    if (!this.showResults) return null;
    if (!this.autocomplete || this.searchString.length < this.autocompleteMinChars) return null;
    if (!this.resultsItemsList || !this.resultsItemsList?.length) return null;

    return (
      <div class="results">
        <z-list
          role="listbox"
          id={`list-${this.htmlid}`}
        >
          {this.renderSearchHelper()}
          {this.renderResultsItems()}
          {this.renderShowAllResults()}
        </z-list>
      </div>
    );
  }

  private renderResultsItems(): HTMLZListGroupElement[] {
    const groupedItems = this.getGroupedItems(this.resultsItemsList);
    const listGroups: HTMLZListGroupElement[] = [];
    let counter: number = 0;

    Object.values(groupedItems).forEach((groupItem: SearchbarGroup, index: number, array) => {
      if (this.checkResultsCount(counter)) {
        let listGroupsElements: HTMLZListElement[] = [];
        groupItem.items.forEach((item: SearchbarItem, subindex: number, subarray) => {
          if (this.checkResultsCount(counter)) {
            const isLast = index === array.length - 1 && subindex === subarray.length - 1;
            listGroupsElements.push(this.renderResultsItem(item, subindex, !isLast));
          }
          counter++;
        });

        if (listGroupsElements.length) {
          listGroups.push(
            <z-list-group divider-type={ListDividerType.ELEMENT}>
              {this.renderResultsItemCategory(groupItem)}
              {listGroupsElements}
            </z-list-group>
          );
        }
      }
    });

    return listGroups;
  }

  private renderResultsItem(item: SearchbarItem, key: number, divider: boolean): HTMLZListElementElement {
    return (
      <z-list-element
        id={`list-item-${this.htmlid}-${key}`}
        role="option"
        tabindex={0}
        dividerType={divider ? ListDividerType.ELEMENT : undefined}
        onClickItem={() => this.handleItemClick(item)}
      >
        <span class={{"item": true, "ellipsis": this.resultsEllipsis, "has-category": !!item.category}}>
          {item?.icon && (
            <z-icon
              class="item-icon"
              name={item.icon}
            />
          )}
          <span
            class="item-label"
            title={item.label}
            innerHTML={this.renderItemLabel(item.label)}
          />
        </span>
      </z-list-element>
    );
  }

  private renderItemLabel(label: string): string {
    if (!this.searchString) return label;

    return label.replace(new RegExp(this.searchString, "gmi"), (found) => `<mark>${found}</mark>`);
  }

  private renderResultsItemCategory(groupItem: SearchbarGroup): HTMLSpanElement | null {
    if (!groupItem?.category) return null;
    return (
      <span
        class="category-heading"
        slot="header-title"
      >
        <span class="category">{groupItem.category}</span>
        {groupItem?.subcategory && <span class="subcategory">{groupItem.subcategory}</span>}
      </span>
    );
  }

  private renderSearchHelper(): HTMLZListElement | null {
    if (!this.autocomplete || this.preventSubmit || !this.searchString) return null;

    return (
      <z-list-element
        role="option"
        tabindex={0}
        dividerType={ListDividerType.ELEMENT}
        id={`list-item-${this.htmlid}-search`}
        onClickItem={() => this.emitSearchSubmit()}
      >
        <span class="item item-search">
          <z-icon
            class="search-icon"
            name="left-magnifying-glass"
          />
          <span
            class="item-label"
            innerHTML={this.searchHelperLabel.replace("{searchString}", `<mark>${this.searchString}</mark>`)}
          />
        </span>
      </z-list-element>
    );
  }

  private renderShowAllResults(): HTMLZListElement | null {
    if (
      !this.currResultsCount ||
      !this.searchString ||
      !this.resultsItemsList?.length ||
      this.currResultsCount >= this.resultsItemsList?.length
    )
      return null;

    return (
      <z-list-element
        role="option"
        tabindex={0}
        id={`list-item-${this.htmlid}-show-all`}
        onClickItem={() => (this.currResultsCount = 0)}
      >
        <span class="item-show-all">
          <z-link>Vedi tutti i risultati</z-link>
        </span>
      </z-list-element>
    );
  }

  render(): HTMLZSearchbarElement {
    return (
      <Host
        onFocus={() => (this.showResults = true)}
        onClick={(e) => this.handleOutsideClick(e)}
      >
        <div class={{"has-submit": !this.preventSubmit, "has-results": this.autocomplete}}>
          {this.renderInput()}
          {this.renderResults()}
          {this.renderButton()}
        </div>
      </Host>
    );
  }
}
