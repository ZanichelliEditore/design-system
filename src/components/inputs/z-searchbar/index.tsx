import {Component, Event, EventEmitter, h, Host, Prop, State, Watch} from "@stencil/core";
import {ListDividerType, SearchbarItem} from "../../../beans";
import {handleKeyboardSubmit, randomId} from "../../../utils/utils";

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

  @State()
  searchString: string = "";

  private id: string = randomId();
  private resultsItemsList: SearchbarItem[] | undefined = null;

  /** Emitted on search submit, return search string */
  @Event()
  searchSubmit: EventEmitter;

  private emitSearchSubmit(): void {
    console.log("emitSearchSubmit", this.searchString);
    this.searchSubmit.emit(this.searchString);
  }

  /** Emitted on search typing, return search string */
  @Event()
  searchTyping: EventEmitter;

  private emitSearchTyping(search: string): void {
    console.log("emitSearchTyping", search);
    this.searchTyping.emit(search);
  }

  componentWillLoad() {
    this.resultsItemsList = this.getResultsItemsList();
  }

  @Watch("resultsItems")
  watchItems(): void {
    this.resultsItemsList = this.getResultsItemsList();
  }

  @Watch("searchString")
  watchSearchString(): void {
    this.emitSearchTyping(this.searchString);
  }

  private getResultsItemsList(): SearchbarItem[] | undefined {
    return typeof this.resultsItems === "string" ? JSON.parse(this.resultsItems) : this.resultsItems;
  }

  private hasShowAllResultsLink(): boolean {
    console.log(this.resultsCount, this.searchString, this.resultsItemsList?.length);
    return !!(this.resultsCount && this.searchString && this.resultsItemsList?.length);
  }

  private getGroupedItems(items: SearchbarItem[]): any | any[] {
    let groupedItems = {};
    items.forEach((item) => {
      let key = `${item?.category}${item?.subcategory}`;
      groupedItems[key] = groupedItems[key] ?? {
        category: item?.category,
        subcategory: item?.subcategory,
        items: [],
      };
      groupedItems[key]["items"].push(item);
    });

    return groupedItems;
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

  private renderButton(): null | HTMLZButtonElement {
    if (this.preventSubmit) return null;

    return <z-button onClick={() => this.handleSubmit()}>CERCA</z-button>;
  }

  private renderResults(): HTMLDivElement | null {
    if (!this.autocomplete || this.searchString.length < this.autocompleteMinChars) return null;
    if (!this.resultsItemsList || !this.resultsItemsList?.length) return null;

    // TODO: handle outside click

    return (
      <div class="results">
        <z-list
          role="listbox"
          tabindex={0}
          id={`list-${this.id}`}
        >
          {this.renderSearchHelper()}
          {/* {this.resultsItemsList
            .map((item: SearchbarItem, key, array) => {
              const divider = key + 1 < array.length || this.hasShowAllResultsLink();

              return this.renderResultsItem(item, key, divider);
            })
            .slice(0, this.resultsCount)} */}
          {this.renderResultsGroupedItems()}

          {this.renderShowAllResults()}
        </z-list>
      </div>
    );
  }

  private renderResultsGroupedItems() {
    const groupedItems = this.getGroupedItems(this.resultsItemsList);
    let counter = 0;

    const listGroups = [];
    Object.values(groupedItems).forEach((groupItem: any) => {
      let elems = [];
      groupItem.items.forEach((item: SearchbarItem, key) => {
        if (!this.resultsCount || counter < this.resultsCount) {
          // TODO: check divider
          elems.push(this.renderResultsItem(item, key, true));
        }
        counter++;
      });

      if (elems.length) {
        listGroups.push(
          <z-list-group divider-type={ListDividerType.ELEMENT}>
            <z-body
              class="z-list-group-title"
              level={3}
              slot="header-title"
              variant="semibold"
            >
              {(!this.resultsCount || counter < this.resultsCount) && this.renderCategoryHeading(groupItem)}
            </z-body>
            {elems}
          </z-list-group>
        );
      }
    });

    return listGroups;
  }

  private renderCategoryHeading(groupItem: any) {
    if (!groupItem.category) return;
    return (
      <span style={{color: "red"}}>
        {groupItem.category}
        <br />
        {groupItem.subcategory}
      </span>
    );
  }

  private renderResultsItem(item: SearchbarItem, key: number, divider: boolean): HTMLZListElementElement {
    return (
      <z-list-element
        role="option"
        tabindex={0}
        dividerType={divider ? ListDividerType.ELEMENT : undefined}
        id={`list-item-${this.id}-${key}`}
        onClickItem={() => (window.location.href = item.link)}
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
        onClickItem={() => this.emitSearchSubmit()}
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

  private renderShowAllResults(): HTMLZListElement | null {
    if (!this.hasShowAllResultsLink()) return null;

    return (
      <z-list-element
        role="option"
        tabindex={0}
        id={`list-item-${this.id}-show-all`}
        onClickItem={() => (this.resultsCount = undefined)}
      >
        <span class="item-show-all">
          <z-link>Vedi tutti i risultati</z-link>
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
