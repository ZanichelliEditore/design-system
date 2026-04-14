import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  State,
  Watch,
  h,
} from "@stencil/core";
import {
  ButtonVariant,
  ControlSize,
  KeyboardCode,
  SearchbarGroup,
  SearchbarGroupedItem,
  SearchbarItem,
} from "../../beans";
import {handleEnterKeydSubmit, randomId} from "../../utils/utils";

/**
 * @cssprop --z-searchbar-results-height - Max height of the results container (default: 540px)
 * @cssprop --z-searchbar-tag-text-color - Color of tag's text (default --color-primary03);
 * @cssprop --z-searchbar-tag-bg - Color of tag's background (default --color-hover-primary);
 */
@Component({
  tag: "z-searchbar",
  styleUrls: [
    "styles.css",
    "../css-components/z-label/styles.css",
    "../css-components/z-scrollbar/styles.css",
    "../../tokens/typography.css",
  ],
  shadow: true,
})
export class ZSearchbar implements ComponentInterface {
  @Element() host: HTMLZSearchbarElement;

  /** The id of the searchbar element */
  @Prop({reflect: true})
  htmlid = `searchbar-${randomId()}`;

  /** Prevent submit action */
  @Prop()
  preventSubmit?: boolean = false;

  /** The input label */
  @Prop()
  label?: string;

  /** The input aria-label */
  @Prop()
  htmlAriaLabel?: string;

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

  /** Number of results shown. Default: all */
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

  /** Hide the label of the submit button, showing only the icon */
  @Prop()
  searchButtonIconOnly?: boolean = false;

  /** Size of the `z-input` and submit `z-button` */
  @Prop()
  size?: ControlSize = ControlSize.BIG;

  /** Submit `z-button` variant */
  @Prop()
  variant?: ButtonVariant = ButtonVariant.PRIMARY;

  @State()
  searchString = this.value;

  @State()
  currResultsCount: number | undefined = this.resultsCount;

  @State()
  showResults = false;

  @State()
  isMobile = false;

  @State()
  selectedItem?: SearchbarItem;

  private resultsItemsList: SearchbarItem[] | undefined = null;

  private inputRef: HTMLZInputElement;

  /** Media query list for detecting mobile view. */
  private mql?: MediaQueryList;

  /** Listener for changes in the mobile view media query. */
  private onMobileViewChange?: (e: MediaQueryListEvent) => void;

  /** Emitted on search submit, return search string */
  @Event()
  searchSubmit: EventEmitter<string>;

  /** Emitted on search typing, return search string */
  @Event()
  searchTyping: EventEmitter<string>;

  /** Emitted on search result click, return item */
  @Event()
  searchItemClick: EventEmitter<SearchbarItem>;

  private emitSearchItemClick(item: SearchbarItem): void {
    this.searchItemClick.emit(item);
    this.selectedItem = item;
    this.searchString = "";
  }

  private emitSearchSubmit(): void {
    this.searchSubmit.emit(this.inputRef.value);
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
    this.searchTyping.emit(this.searchString);
    if (!this.searchString) {
      this.currResultsCount = this.resultsCount;
    }
  }

  private getResultsItemsList(): SearchbarItem[] | undefined {
    return typeof this.resultsItems === "string" ? JSON.parse(this.resultsItems) : this.resultsItems;
  }

  private getGroupedItems(): SearchbarGroupedItem {
    const groupedItems = {};
    this.resultsItemsList.forEach((item: SearchbarItem) => {
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

  private onListItemKeyDown(e: KeyboardEvent, item: SearchbarItem): void {
    if (e.key === KeyboardCode.ENTER) {
      e.preventDefault();
      this.emitSearchItemClick(item);

      return;
    }

    this.handleArrowsNavigation(e);
  }

  private onSearchHelperKeyDown(e: KeyboardEvent): void {
    if (e.key === KeyboardCode.ENTER) {
      e.preventDefault();
      this.emitSearchSubmit();

      return;
    }

    this.handleArrowsNavigation(e);
  }

  private handleArrowsNavigation(e: KeyboardEvent): void {
    if (![KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP].includes(e.key as KeyboardCode)) {
      return;
    }

    const currentElement = e.target as HTMLElement;
    const items = Array.from(this.host.shadowRoot?.querySelectorAll("z-list .list-item") ?? []);
    const currentIndex = items.indexOf(currentElement);

    if (e.key === KeyboardCode.ARROW_DOWN) {
      e.preventDefault();
      const nextIndex = currentIndex + 1;
      if (nextIndex < items.length) {
        (items[nextIndex] as HTMLElement).focus();
      }
    }

    if (e.key === KeyboardCode.ARROW_UP) {
      e.preventDefault();
      const prevIndex = currentIndex - 1;
      if (prevIndex < 0) {
        this.host.shadowRoot?.querySelector("input")?.focus();
        this.host.shadowRoot
          ?.querySelector("input")
          ?.setSelectionRange(this.inputRef.value.length, this.inputRef.value.length);
      }
      if (prevIndex >= 0) {
        (items[prevIndex] as HTMLElement).focus();
      }
    }
  }

  private handleStopTyping(e: CustomEvent): void {
    e.stopPropagation();
    this.searchString = e.detail.value;
    this.selectedItem = undefined;
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
    if (cp.includes(this.host)) {
      return;
    }

    this.showResults = false;
  }

  componentWillLoad(): void {
    this.resultsItemsList = this.getResultsItemsList();

    this.mql = matchMedia("(max-width: 767px)");
    this.onMobileViewChange = (e: MediaQueryListEvent) => (this.isMobile = e.matches);
    this.mql.addEventListener("change", this.onMobileViewChange);
    this.isMobile = this.mql.matches;
  }

  disconnectedCallback(): void {
    this.mql?.removeEventListener("change", this.onMobileViewChange);
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

  private renderItem(item: SearchbarItem, index: number): HTMLZListElementElement {
    return (
      <z-list-element
        id={`list-item-${this.htmlid}-${index}`}
        role="presentation"
        htmlTabindex={-1}
        onKeyDown={(e: KeyboardEvent) => this.onListItemKeyDown(e, item)}
        onClick={() => this.emitSearchItemClick(item)}
      >
        <div
          class="list-item ellipsis"
          role="option"
          tabindex={0}
        >
          {!!item?.icon && (
            <z-icon
              class="item-icon"
              name={item.icon}
            />
          )}

          <div
            class="item-label body-3 mobile-body-4"
            title={item.label}
            innerHTML={this.renderItemLabel(item.label)}
          />
          {!!item?.tag && <z-tag icon={item.tag.icon}>{!this.isMobile ? item.tag.text : ""}</z-tag>}
        </div>
        {!!item.children?.length && (
          <z-list
            class="sub-list"
            role="group"
            aria-label={item.label || undefined}
          >
            {item.children.map((child, index) => this.renderItem(child, index))}
          </z-list>
        )}
      </z-list-element>
    );
  }

  /**
   * Renders the item grouped by category and subcategory. If `resultsCount` is set, it limits the number of rendered items.
   */
  private renderItemGroups(): HTMLZListGroupElement[] | undefined {
    if (!this.resultsItemsList?.length) {
      return;
    }

    const groupedItems = Object.values(this.getGroupedItems()) as SearchbarGroup[];
    const listGroups: HTMLZListGroupElement[] = [];
    const hasResultsLimit = !!this.currResultsCount;
    let renderedCount = 0;

    for (const groupItem of groupedItems) {
      const remaining = hasResultsLimit ? this.currResultsCount - renderedCount : groupItem.items.length;
      if (remaining <= 0) {
        break;
      }

      const visibleItems = groupItem.items.slice(0, remaining);
      const listGroupsElements: HTMLZListElement[] = visibleItems.map((item: SearchbarItem, subindex: number) =>
        this.renderItem(item, subindex)
      );
      renderedCount += listGroupsElements.length;

      if (!listGroupsElements.length) {
        continue;
      }

      const ariaLabel = [groupItem.category, groupItem.subcategory].filter(Boolean).join(" ");

      listGroups.push(
        <z-list-group aria-label={ariaLabel || undefined}>
          {groupItem.category && (
            <z-list-element
              class="category-heading body-3 mobile-body-4"
              slot="header-title"
              role="presentation"
              htmlTabindex={-1}
            >
              <div class="category">{groupItem.category}</div>
              {groupItem.subcategory && <div class="subcategory">{groupItem.subcategory}</div>}
            </z-list-element>
          )}

          {listGroupsElements}
        </z-list-group>
      );
    }

    return listGroups;
  }

  render(): HTMLZSearchbarElement {
    return (
      <Host
        onFocus={() => (this.showResults = true)}
        onClick={(e: MouseEvent) => this.handleOutsideClick(e)}
        class={{"has-submit": !!this.showSearchButton, "has-results": !!this.autocomplete}}
      >
        <div class="input-container">
          <z-input
            ref={(el) => (this.inputRef = el)}
            htmlid={`input-${this.htmlid}`}
            message={false}
            placeholder={this.placeholder}
            onStopTyping={(e: CustomEvent) => this.handleStopTyping(e)}
            onKeyUp={(e: KeyboardEvent) => {
              handleEnterKeydSubmit(e, () => this.handleSubmit());
              this.handleArrowsNavigation(e);
            }}
            onFocus={() => (this.showResults = true)}
            value={this.searchString || this.selectedItem?.label}
            size={this.size}
            label={this.label}
            aria-label={this.htmlAriaLabel || this.placeholder || undefined}
          />

          {!!(
            this.showResults &&
            this.autocomplete &&
            this.searchString &&
            this.searchString.length >= this.autocompleteMinChars &&
            this.resultsItemsList
          ) && (
            <div class="results z-scrollbar">
              {this.preventSubmit && !this.resultsItemsList?.length ? (
                <div class="item-no-results body-3 mobile-body-4">
                  Non abbiamo trovato risultati per <b>{this.searchString}</b>
                  <br />
                  <br />
                  Cosa puoi fare?
                  <ul>
                    <li>Verificare di aver scritto bene</li>
                    <li>Provare a cercare un'altra parola</li>
                    <li>Provare a cercare qualcosa di più generico</li>
                  </ul>
                </div>
              ) : (
                <z-list
                  role="listbox"
                  id={`list-${this.htmlid}`}
                  aria-label={this.htmlAriaLabel || this.label || undefined}
                >
                  {this.autocomplete && !this.preventSubmit && !!this.searchString && (
                    <z-list-element
                      role="presentation"
                      htmlTabindex={-1}
                      id={`list-item-${this.htmlid}-search`}
                      onKeyDown={(e: KeyboardEvent) => this.onSearchHelperKeyDown(e)}
                      onClick={() => this.emitSearchSubmit()}
                    >
                      <div
                        class="list-item item-search"
                        role="option"
                        tabindex={0}
                      >
                        <z-icon
                          class="search-icon"
                          name="left-magnifying-glass"
                        />
                        <div
                          class="item-label body-3 mobile-body-4"
                          innerHTML={this.searchHelperLabel?.replace(
                            "{searchString}",
                            `<mark>${this.searchString}</mark>`
                          )}
                        />
                      </div>
                    </z-list-element>
                  )}

                  {this.renderItemGroups()}

                  {!!(
                    this.searchString &&
                    this.resultsItemsList?.length &&
                    this.currResultsCount &&
                    this.currResultsCount < this.resultsItemsList?.length
                  ) && (
                    <z-list-element
                      role="presentation"
                      htmlTabindex={-1}
                      id={`list-item-${this.htmlid}-show-all`}
                    >
                      <div
                        role="option"
                        class="item-show-all body-3 mobile-body-4"
                        tabindex={0}
                        onClick={() => (this.currResultsCount = undefined)}
                      >
                        Vedi tutti i risultati
                      </div>
                    </z-list-element>
                  )}
                </z-list>
              )}
            </div>
          )}
        </div>

        {this.showSearchButton && (
          <z-button
            icon={this.searchButtonIconOnly ? "search" : undefined}
            aria-label={this.searchButtonIconOnly ? "CERCA" : undefined}
            disabled={!!this.preventSubmit}
            variant={this.variant}
            size={this.size}
            onClick={() => this.handleSubmit()}
          >
            {this.searchButtonIconOnly ? "" : "CERCA"}
          </z-button>
        )}
      </Host>
    );
  }
}
