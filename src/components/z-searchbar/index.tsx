import {Component, Element, Event, EventEmitter, Host, Listen, Prop, State, Watch, h} from "@stencil/core";
import {
  ButtonVariant,
  ControlSize,
  Device,
  KeyboardCode,
  ListDividerType,
  SearchbarGroup,
  SearchbarGroupedItem,
  SearchbarItem,
} from "../../beans";
import {getDevice, handleEnterKeydSubmit, randomId} from "../../utils/utils";

/**
 * @cssprop --z-searchbar-results-height - Max height of the results container (default: 540px)
 * @cssprop --z-searchbar-tag-text-color - Color of tag's text (default --color-primary03);
 * @cssprop --z-searchbar-tag-bg - Color of tag's background (default --color-hover-primary);
 */
@Component({
  tag: "z-searchbar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZSearchbar {
  /** the id of the searchbar element */
  @Prop({reflect: true})
  htmlid = `searchbar-${randomId()}`;

  /** Prevent submit action */
  @Prop()
  preventSubmit?: boolean = false;

  /** Input search string */
  @Prop()
  value?: string;

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

  /** Search helper text */
  @Prop()
  searchHelperLabel?: string = "Cerca {searchString}";

  /** Autocomplete results items */
  @Prop()
  resultsItems?: SearchbarItem[] | string;

  /** Sort autocomplete results items */
  @Prop()
  sortResultsItems?: boolean = false;

  /** Show submit button */
  @Prop()
  showSearchButton?: boolean = false;

  /** Set button icon without label*/
  @Prop()
  searchButtonIconOnly?: boolean = false;

  /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
  @Prop()
  size?: ControlSize = ControlSize.BIG;

  /** Graphical variant: `primary`, `secondary`, `tertiary`. Defaults to `primary`. */
  @Prop()
  variant?: ButtonVariant = ButtonVariant.PRIMARY;

  @State()
  searchString = this.value;

  @State()
  currResultsCount = 0;

  @State()
  showResults = false;

  @State()
  isMobile = false;

  @State()
  selectedItem?: SearchbarItem;

  @Element() element: HTMLZSearchbarElement;

  private resultsItemsList: SearchbarItem[] | undefined = null;

  private inputRef: HTMLZInputElement;

  private resizeObserver: ResizeObserver;

  private items: HTMLElement[] = [];

  /** Emitted on search submit, return search string */
  @Event()
  searchSubmit: EventEmitter<string>;

  private emitSearchSubmit(): void {
    this.searchSubmit.emit(this.inputRef.value);
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
    this.selectedItem = item;
    this.searchString = "";
  }

  @Watch("resultsItems")
  watchItems(): void {
    this.resultsItemsList = this.getResultsItemsList();
  }

  @Watch("resultsCount")
  watchResultsCount(): void {
    this.currResultsCount = this.resultsCount;
  }

  @Watch("value")
  watchValue(): void {
    this.searchString = this.value;
  }

  @Watch("searchString")
  watchSearchString(): void {
    this.emitSearchTyping(this.searchString);
    this.items = [];
    if (!this.searchString) {
      this.currResultsCount = this.resultsCount;
    }
  }

  @Watch("showResults")
  watchShowResults(): void {
    if (!this.showResults) {
      this.items = [];
    }
  }

  disconnectedCallback(): void {
    this.resizeObserver?.disconnect();
  }

  componentDidLoad(): void {
    this.resizeObserver = new ResizeObserver(() => {
      if (getDevice() === Device.MOBILE && !this.isMobile) {
        this.isMobile = true;
      }
      if (getDevice() !== Device.MOBILE && this.isMobile) {
        this.isMobile = false;
      }
    });
    this.resizeObserver.observe(this.element);
  }

  componentWillLoad(): void {
    this.resultsItemsList = this.getResultsItemsList();
    this.currResultsCount = this.resultsCount;
  }

  private getResultsItemsList(): SearchbarItem[] | undefined {
    return typeof this.resultsItems === "string" ? JSON.parse(this.resultsItems) : this.resultsItems;
  }

  private getGroupedItems(items: SearchbarItem[]): SearchbarGroupedItem {
    const groupedItems = {};
    items.forEach((item: SearchbarItem) => {
      const key = `${item?.category}${item?.subcategory}`;
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
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }

              return 0;
            }),
          };

          return obj;
        }, {});
    }

    return groupedItems;
  }

  private checkResultsCount(counter: number): boolean {
    if (!this.currResultsCount || counter < this.currResultsCount) {
      return true;
    }

    return false;
  }

  private handleStopTyping(e: CustomEvent): void {
    e.stopPropagation();
    this.searchString = e.detail.value;
    if (this.selectedItem) this.selectedItem = undefined;
  }

  private handleSubmit(): void {
    if (this.preventSubmit) {
      return;
    }
    this.emitSearchSubmit();
  }

  @Listen("click", {target: "document"})
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
        ref={(val) => {
          this.inputRef = val;
        }}
        message={false}
        placeholder={this.placeholder}
        onStopTyping={(e: CustomEvent) => this.handleStopTyping(e)}
        onKeyUp={(e: KeyboardEvent) => {
          handleEnterKeydSubmit(e, () => this.handleSubmit());
          this.handleArrowsNavigation(e);
        }}
        value={this.searchString || this.selectedItem?.label}
        ariaLabel={this.placeholder}
        size={this.size}
      />
    );
  }

  private renderButton(): HTMLZButtonElement | null {
    if (!this.showSearchButton) {
      return null;
    }

    const iconProp = this.searchButtonIconOnly ? {icon: "search"} : null;
    const buttonLabel = this.searchButtonIconOnly ? "" : "CERCA";
    const defaultProps = {
      disabled: this.preventSubmit,
      variant: this.variant,
      size: this.size,
      onClick: () => this.handleSubmit(),
      ...iconProp,
    };

    return <z-button {...defaultProps}>{buttonLabel}</z-button>;
  }

  private renderResults(): HTMLDivElement | null {
    if (
      !this.showResults ||
      !this.autocomplete ||
      !this.searchString ||
      this.searchString.length < this.autocompleteMinChars ||
      !this.resultsItemsList
    ) {
      return null;
    }

    return (
      <div class="results-wrapper">
        <div class="results">{this.renderResultsList()}</div>
      </div>
    );
  }

  private renderResultsList(): HTMLZListElement | HTMLSpanElement {
    if (this.preventSubmit && !this.resultsItemsList?.length) {
      return (
        <span class="item item-no-results">
          Non abbiamo trovato risultati per <b>{this.searchString}</b>
          <br />
          <br />
          Cosa puoi fare?
          <ul>
            <li>Verificare di aver scritto bene</li>
            <li>Provare a cercare un'altra parola</li>
            <li>Provare a cercare qualcosa di più generico</li>
          </ul>
        </span>
      );
    }

    return (
      <z-list
        role="listbox"
        id={`list-${this.htmlid}`}
      >
        {this.renderSearchHelper(!!this.resultsItemsList?.length)}
        {this.renderItems()}
        {this.renderShowAllResults()}
      </z-list>
    );
  }

  private renderItems(): HTMLZListGroupElement[] {
    if (!this.resultsItemsList?.length) {
      return [];
    }

    const groupedItems = this.getGroupedItems(this.resultsItemsList);
    const listGroups: HTMLZListGroupElement[] = [];
    let counter = 0;

    Object.values(groupedItems).forEach((groupItem: SearchbarGroup, index: number, array) => {
      if (this.checkResultsCount(counter)) {
        const listGroupsElements: HTMLZListElement[] = [];
        groupItem.items.forEach((item: SearchbarItem, subindex: number, subarray) => {
          if (this.checkResultsCount(counter)) {
            const isLast = index === array.length - 1 && subindex === subarray.length - 1;
            listGroupsElements.push(this.renderItem(item, subindex, !isLast));
          }
          counter++;
        });

        if (listGroupsElements.length) {
          listGroups.push(
            <z-list-group divider-type={ListDividerType.ELEMENT}>
              {this.renderItemCategory(groupItem)}
              {listGroupsElements}
            </z-list-group>
          );
        }
      }
    });

    return listGroups;
  }

  private handleArrowsNavigation(e: KeyboardEvent): void {
    const currentElement = e.target as HTMLElement;
    const arrows = [KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP];

    if (!arrows.includes(e.key as KeyboardCode)) {
      e.preventDefault();

      return;
    }

    if (!this.items.length) {
      const list = this.element.shadowRoot.querySelector("z-list");
      if (!list) {
        return;
      }

      this.items = Array.from(list.querySelectorAll(".list-element"));
    }

    this.items.forEach((item) => item.classList.contains("focused") && item.classList.remove("focused"));

    const currentIndex = this.items.indexOf(currentElement as HTMLZListElementElement);

    if (e.key === KeyboardCode.ARROW_DOWN) {
      e.preventDefault();
      const nextIndex = currentIndex + 1;
      if (nextIndex < this.items.length) {
        (this.items[nextIndex] as HTMLElement).focus();
        this.items[nextIndex].classList.add("focused");
      }
    }

    if (e.key === KeyboardCode.ARROW_UP) {
      e.preventDefault();
      const prevIndex = currentIndex - 1;
      if (prevIndex < 0) {
        this.element.shadowRoot.querySelector("input").focus();
        this.element.shadowRoot
          .querySelector("input")
          .setSelectionRange(this.inputRef.value.length, this.inputRef.value.length);
      }
      if (prevIndex >= 0) {
        (this.items[prevIndex] as HTMLElement).focus();
        this.items[prevIndex].classList.add("focused");
      }
    }
  }

  private renderItem(item: SearchbarItem, key: number, divider: boolean): HTMLZListElementElement {
    return (
      <z-list-element
        id={`list-item-${this.htmlid}-${key}`}
        tabIndex={0}
        role="option"
        dividerType={divider ? ListDividerType.ELEMENT : undefined}
        onKeyDown={(e: KeyboardEvent) => this.handleArrowsNavigation(e)}
      >
        <div
          class="list-element"
          tabIndex={0}
          onClick={() => this.emitSearchItemClick(item)}
          onKeyDown={(e: KeyboardEvent) => handleEnterKeydSubmit(e, () => this.emitSearchItemClick(item))}
          onMouseEnter={(e: MouseEvent) => {
            const currentElement = e.target as HTMLElement;
            currentElement.classList.add("hovered");
          }}
          onMouseLeave={(e: MouseEvent) => {
            const currentElement = e.target as HTMLElement;
            currentElement.classList.contains("hovered") && currentElement.classList.remove("hovered");
          }}
        >
          <span class="item ellipsis">
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
          {item?.tag && <z-tag icon={item.tag.icon}>{!this.isMobile ? item.tag.text : ""}</z-tag>}
        </div>
        {item.children && item.children.length > 0 ? (
          <z-list>
            <div class="children-node">{item.children.map((child, index) => this.renderItem(child, index, false))}</div>
          </z-list>
        ) : null}
      </z-list-element>
    );
  }

  private renderItemLabel(label: string): string {
    if (!this.searchString) {
      return label;
    }

    return label.replace(
      new RegExp(this.searchString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gmi"),
      (found) => `<mark>${found}</mark>`
    );
  }

  private renderItemCategory(groupItem: SearchbarGroup): HTMLSpanElement | null {
    if (!groupItem?.category) {
      return null;
    }

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

  private renderSearchHelper(hasDivider = true): HTMLZListElement | null {
    if (!this.autocomplete || this.preventSubmit || !this.searchString) {
      return null;
    }

    return (
      <z-list-element
        role="option"
        dividerType={hasDivider ? ListDividerType.ELEMENT : undefined}
        id={`list-item-${this.htmlid}-search`}
        onKeyDown={(e: KeyboardEvent) => this.handleArrowsNavigation(e)}
      >
        <div
          tabindex={0}
          onClick={() => this.emitSearchSubmit()}
          onKeyDown={(e: KeyboardEvent) => handleEnterKeydSubmit(e, () => this.emitSearchSubmit())}
          class="list-element"
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
        </div>
      </z-list-element>
    );
  }

  private renderShowAllResults(): HTMLZListElement | null {
    if (
      !this.currResultsCount ||
      !this.searchString ||
      !this.resultsItemsList?.length ||
      this.currResultsCount >= this.resultsItemsList?.length
    ) {
      return null;
    }

    return (
      <z-list-element
        role="option"
        tabindex={0}
        clickable
        id={`list-item-${this.htmlid}-show-all`}
        onClickItem={() => (this.currResultsCount = 0)}
        color="color-primary01"
      >
        <div class="item-show-all">Vedi tutti i risultati</div>
      </z-list-element>
    );
  }

  render(): HTMLZSearchbarElement {
    return (
      <Host
        onFocus={() => (this.showResults = true)}
        onClick={(e) => this.handleOutsideClick(e)}
        class={{"has-submit": this.showSearchButton, "has-results": this.autocomplete}}
      >
        <div class="input-container">
          {this.renderInput()}
          {this.renderResults()}
        </div>
        {this.renderButton()}
      </Host>
    );
  }
}
