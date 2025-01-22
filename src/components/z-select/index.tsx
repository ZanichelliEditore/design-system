import {Component, Element, Event, EventEmitter, Listen, Method, Prop, State, Watch, h} from "@stencil/core";
import {ControlSize, InputStatus, KeyboardCode, ListDividerType, ListSize, SelectItem} from "../../beans";
import {boolean, containsElement, getClickedElement, handleKeyboardSubmit, randomId} from "../../utils/utils";

@Component({
  tag: "z-select",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZSelect {
  @Element() host: HTMLZSelectElement;

  /** the id of the input element */
  @Prop()
  htmlid = `id-${randomId()}`;

  /** the input select options */
  @Prop()
  items: SelectItem[] | string;

  /** the input name */
  @Prop()
  name?: string;

  /** the input label */
  @Prop()
  label?: string;

  /** the input aria-label */
  @Prop()
  ariaLabel = "";

  /** the input is disabled */
  @Prop()
  disabled?: boolean = false;

  /** the input is readonly */
  @Prop()
  readonly?: boolean = false;

  /** the input placeholder (optional) */
  @Prop()
  placeholder?: string;

  /** the input html title (optional) */
  @Prop()
  htmltitle?: string;

  /** the input status (optional) */
  @Prop()
  status?: InputStatus;

  /** input helper message (optional) - if set to `false` message won't be displayed */
  @Prop()
  message?: string | boolean = true;

  /** the input has autocomplete option */
  @Prop()
  autocomplete?: boolean = false;

  /** no result text message */
  @Prop()
  noresultslabel?: string = "Nessun risultato";

  /** */
  @Prop()
  hasGroupItems?: boolean;

  /** */
  @Prop()
  hasTreeItems?: boolean;

  /** When fixed, it occupies space and pushes down next elements. */
  @Prop()
  isfixed?: boolean = false;

  /** */
  @Prop()
  resetItem?: string;

  /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
  @Prop()
  size?: ControlSize = ControlSize.BIG;

  @State()
  isOpen = false;

  @State()
  selectedItem: null | SelectItem = null;

  @State()
  focusedItemId: string;

  @State()
  searchString: null | string;

  private itemsList: SelectItem[] = [];

  constructor() {
    this.toggleSelectUl = this.toggleSelectUl.bind(this);
    this.handleSelectFocus = this.handleSelectFocus.bind(this);
  }

  @Watch("items")
  watchItems(): void {
    this.itemsList = this.getInitialItemsArray();

    this.selectedItem = this.findSelectedItem(this.itemsList);
  }

  @Listen("ariaDescendantFocus")
  getFocusedItemHandler(e: CustomEvent): void {
    this.focusedItemId = (e.target as Element).id;
  }

  /** get the input selected options */
  @Method()
  async getSelectedItem(): Promise<SelectItem> {
    return this.selectedItem;
  }

  /** get the input value */
  @Method()
  async getValue(): Promise<string> {
    return this.getSelectedValue();
  }

  /** set the input value */
  @Method()
  async setValue(value: string | string[]): Promise<void> {
    let values: string[] = [];
    if (typeof value === "string") {
      values.push(value);
    } else {
      values = value;
    }

    this.itemsList = this.getInitialItemsArray();
    if (values.length) {
      this.updateSelection(this.itemsList, values[0]);
    }
    this.selectedItem = this.findSelectedItem(this.itemsList);
  }

  /** Emitted on select option selection, returns select id, selected item id */
  @Event()
  optionSelect: EventEmitter;

  private emitOptionSelect(): void {
    this.optionSelect.emit({
      id: this.htmlid,
      selected: this.getSelectedValue(),
    });
  }

  /** Emitted on reset selected item, returns select id, selected item id */
  @Event()
  resetSelect: EventEmitter;

  private emitResetSelect(): void {
    this.resetSelect.emit({
      id: this.htmlid,
    });
  }

  componentWillLoad(): void {
    this.watchItems();
  }

  componentWillRender(): void {
    this.filterItems(this.searchString);
  }

  private getInitialItemsArray(): SelectItem[] {
    return typeof this.items === "string" ? JSON.parse(this.items) : this.items;
  }

  private mapSelectedItemToItemsArray(): SelectItem[] {
    const initialItemsList = this.getInitialItemsArray();

    return initialItemsList.map((item: SelectItem) => {
      item.selected = item.id === this.selectedItem?.id;

      return item;
    });
  }

  private getSelectedValue(): string {
    return this.selectedItem?.id;
  }

  private filterItems(searchString: string): void {
    const prevList = this.mapSelectedItemToItemsArray();

    if (!searchString?.length) {
      this.itemsList = prevList;

      return;
    }

    if (this.hasTreeItems) {
      this.itemsList = this.filterTree(prevList, searchString);
    } else {
      this.itemsList = prevList
        .filter((item: SelectItem) => item.name.toUpperCase().includes(searchString.toUpperCase()))
        .map((item: SelectItem) => {
          item.name = this.getHighlightedText(item.name, searchString);

          return item;
        });
    }
  }

  private filterTree(items: SelectItem[], searchString: string): SelectItem[] {
    return items
      .map((item) => {
        const match = item.name.toUpperCase().includes(searchString.toUpperCase());

        const newItem: SelectItem = {...item};

        if (newItem.children && newItem.children.length > 0) {
          newItem.children = this.filterTree(newItem.children, searchString);
        }

        if (match) {
          newItem.name = this.getHighlightedText(newItem.name, searchString);
        }

        if (match || (newItem.children && newItem.children.length > 0)) {
          return newItem;
        }

        return null;
      })
      .filter((item) => item !== null) as SelectItem[];
  }

  private getHighlightedText(text: string, search: string): string {
    const upperText = text.toUpperCase();
    const upperSearch = search.toUpperCase();
    const start = upperText.indexOf(upperSearch);

    if (start === -1) {
      return text;
    }

    const end = start + search.length;

    return text.substring(0, start) + `<strong>${text.substring(start, end)}</strong>` + text.substring(end);
  }

  private hasAutocomplete(): boolean {
    return boolean(this.autocomplete) === true;
  }

  private handleInputChange(e: CustomEvent): void {
    this.searchString = e.detail.value;
    if (!this.isOpen) {
      this.toggleSelectUl();
    }
  }

  private updateSelection(items: SelectItem[], selectedId: string): void {
    items.forEach((item) => {
      item.selected = item.id === selectedId;
      if (item.children && item.children.length > 0) {
        this.updateSelection(item.children, selectedId);
      }
    });
  }

  private findSelectedItem(items: SelectItem[]): SelectItem | null {
    for (const item of items) {
      if (item.selected) {
        return item;
      }
      if (item.children && item.children.length > 0) {
        const found = this.findSelectedItem(item.children);
        if (found) {
          return found;
        }
      }
    }

    return null;
  }

  private selectItem(selected: null | SelectItem): void {
    if (selected?.disabled) {
      return;
    }

    this.itemsList = this.getInitialItemsArray();

    if (selected) {
      this.updateSelection(this.itemsList, selected.id);
    }

    this.selectedItem = this.findSelectedItem(this.itemsList);
    this.emitOptionSelect();
    this.toggleSelectUl(true);

    if (this.searchString) {
      this.searchString = null;
    }
  }

  private flattenTreeItems(items: SelectItem[]): {item: SelectItem; key: number}[] {
    const flatItems: {item: SelectItem; key: number}[] = [];
    let index = 0;

    function flatten(items: SelectItem[]): void {
      items.forEach((item) => {
        flatItems.push({item, key: index++});
        if (item.children) {
          flatten(item.children);
        }
      });
    }

    flatten(items);

    return flatItems;
  }

  private arrowsSelectNav(e: KeyboardEvent, key: number): void {
    const showResetIcon = this.resetItem && !!this.selectedItem;
    const arrows = [KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP];
    if (!arrows.includes(e.key as KeyboardCode)) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    if (!this.isOpen) {
      this.toggleSelectUl();
    }

    const flatItems = this.flattenTreeItems(this.itemsList);

    const currentIndex = flatItems.findIndex((item) => item.key === key);
    let newIndex: number;

    if (this.resetItem) {
      if (e.key === KeyboardCode.ARROW_DOWN) {
        newIndex = currentIndex + 1 === flatItems.length + 1 ? +!showResetIcon : currentIndex + 1;
      } else if (e.key === KeyboardCode.ARROW_UP) {
        newIndex = currentIndex <= +!showResetIcon ? flatItems.length - 1 : currentIndex - 1;
      }
    }

    if (!this.resetItem) {
      if (e.key === KeyboardCode.ARROW_DOWN) {
        newIndex = currentIndex + 1 === flatItems.length ? 0 : currentIndex + 1;
      } else if (e.key === KeyboardCode.ARROW_UP) {
        newIndex = currentIndex <= 0 ? flatItems.length - 1 : currentIndex - 1;
      }
    }

    const newKey = flatItems[newIndex].key;
    this.focusSelectItem(newKey);
  }

  private focusSelectItem(key: number): void {
    this.host.querySelector<HTMLLIElement>(`#${this.htmlid}_${key}`)?.focus();
  }

  private toggleSelectUl(selfFocusOnClose = false): void {
    if (this.disabled || this.readonly) {
      return;
    }

    if (!this.isOpen) {
      document.addEventListener("click", this.handleSelectFocus);
      document.addEventListener("keyup", this.handleSelectFocus);
    } else {
      document.removeEventListener("click", this.handleSelectFocus);
      document.removeEventListener("keyup", this.handleSelectFocus);
      if (selfFocusOnClose) {
        (this.host.querySelector(`#${this.htmlid}_input`) as HTMLInputElement).focus();
      }
    }

    this.focusedItemId = "";
    this.isOpen = !this.isOpen;
  }

  private handleInputClick(e: MouseEvent | KeyboardEvent): void {
    if ((e.target as HTMLElement).closest(".reset-icon")) {
      e.stopPropagation();

      return;
    }

    this.toggleSelectUl();
  }

  private handleSelectFocus(e: MouseEvent | KeyboardEvent): void {
    const clickedElement = getClickedElement();
    if (clickedElement?.hasAttribute("disabled")) {
      return;
    }

    if (e instanceof KeyboardEvent && e.key === KeyboardCode.ESC) {
      e.stopPropagation();

      return this.toggleSelectUl(true);
    }

    if (e instanceof KeyboardEvent && e.key !== KeyboardCode.TAB && e.key !== KeyboardCode.ENTER) {
      return;
    }

    if (!containsElement(this.host, clickedElement)) {
      this.toggleSelectUl(e instanceof MouseEvent);
    }
  }

  private scrollToLetter(letter: string): void {
    const foundItem = this.itemsList.findIndex((item: SelectItem) => item.name.charAt(0) === letter);
    if (foundItem > -1) {
      this.focusSelectItem(foundItem);
    }
  }

  private renderInput(): HTMLZInputElement {
    return (
      <z-input
        class={{
          "active-select": this.isOpen,
          "cursor-select": !this.autocomplete,
        }}
        id={`${this.htmlid}_input`}
        htmlid={`${this.htmlid}_select_input`}
        placeholder={this.placeholder}
        value={!this.isOpen && this.selectedItem ? this.selectedItem.name.replace(/<[^>]+>/g, "") : null}
        label={this.label}
        aria-expanded={this.isOpen ? "true" : "false"}
        aria-label={this.ariaLabel}
        aria-controls={`${this.htmlid}_list`}
        aria-autocomplete={this.hasAutocomplete() ? "list" : "none"}
        aria-activedescendant={this.isOpen ? this.focusedItemId : ""}
        icon={this.isOpen ? "caret-up" : "caret-down"}
        hasclearicon={this.hasAutocomplete()}
        message={false}
        disabled={this.disabled}
        readonly={this.readonly || (!this.hasAutocomplete() && this.isOpen)}
        status={this.isOpen ? undefined : this.status}
        role="combobox"
        size={this.size}
        onClick={(e: MouseEvent) => {
          this.handleInputClick(e);
        }}
        onKeyUp={(e: KeyboardEvent) => {
          if (e.key !== KeyboardCode.ENTER) {
            e.preventDefault();
          }
          handleKeyboardSubmit(e, this.toggleSelectUl);
        }}
        onKeyDown={(e: KeyboardEvent) => {
          return this.arrowsSelectNav(
            e,
            this.selectedItem ? this.itemsList.indexOf(this.selectedItem) : this.resetItem ? 0 : -1
          );
        }}
        onInputChange={(e: CustomEvent) => {
          this.handleInputChange(e);
        }}
        onKeyPress={(e: KeyboardEvent) => {
          if (!this.hasAutocomplete()) {
            e.preventDefault();
            this.scrollToLetter(String.fromCharCode(e.keyCode));
          }
        }}
      />
    );
  }

  private renderSelectUl(): HTMLDivElement {
    return (
      <div class={this.isOpen ? "open" : "closed"}>
        <div
          class={{
            "ul-scroll-wrapper": true,
            "fixed": this.isfixed,
          }}
        >
          <z-list
            role="listbox"
            aria-label={this.ariaLabel || this.label}
            tabindex={this.disabled || this.readonly || !this.isOpen ? -1 : 0}
            id={`${this.htmlid}_list`}
            aria-multiselectable={false}
            size={this.listSizeType()}
            class={{
              disabled: this.disabled,
              readonly: this.readonly,
              [`input-${this.status}`]: !this.isOpen && !!this.status,
            }}
          >
            {this.resetItem && this.renderResetItem()}
            {this.renderSelectUlItems()}
          </z-list>
        </div>
      </div>
    );
  }

  private renderResetItem(): HTMLZListElementElement {
    return (
      <z-list-element
        class={{
          "hide": !this.selectedItem || !this.resetItem,
          "reset-item": true,
          "reset-item-margin": !this.hasGroupItems,
        }}
        clickable={true}
        disabled={false}
        dividerType={ListDividerType.ELEMENT}
        role="option"
        tabindex="0"
        aria-selected="false"
        id={`${this.htmlid}_${this.resetItem ? "0" : "none"}`}
        size={this.hasTreeItems ? ListSize.MEDIUM : this.listSizeType()}
        onClickItem={() => {
          this.selectedItem = null;
          this.searchString = null;
          this.emitResetSelect();
        }}
        onKeyDown={(e: KeyboardEvent) => this.arrowsSelectNav(e, 0)}
      >
        <div
          class={{
            "reset-item-content": true,
            "tree-list-reset-item": this.hasTreeItems,
          }}
        >
          <z-icon name="multiply-circled" />
          <span>{this.resetItem}</span>
        </div>
      </z-list-element>
    );
  }

  private renderItem(item: SelectItem, key: number, lastItem: boolean): HTMLZListElementElement {
    return (
      <z-list-element
        clickable={!item.disabled}
        disabled={item.disabled}
        dividerType={lastItem ? ListDividerType.HEADER : ListDividerType.ELEMENT}
        role="option"
        tabindex={item.disabled || !this.isOpen ? -1 : 0}
        aria-selected={item.selected ? "true" : "false"}
        id={`${this.htmlid}_${key}`}
        size={this.listSizeType()}
        onClickItem={() => this.selectItem(item)}
        onKeyDown={(e: KeyboardEvent) => this.arrowsSelectNav(e, key)}
      >
        <div class="list-element-container">
          <div
            class={{
              "selected": !!item.selected,
              "list-element-content": true,
            }}
            innerHTML={item.name}
          />

          {item.icon && <z-tag icon={item.icon}></z-tag>}
        </div>
      </z-list-element>
    );
  }

  private listSizeType(): ListSize {
    if (this.hasTreeItems) {
      return ListSize.NONE;
    }

    if (this.size === ControlSize.SMALL || this.size === ControlSize.X_SMALL) {
      return ListSize.SMALL;
    }

    return ListSize.MEDIUM;
  }

  //eslint-disable-next-line
  private renderSelectUlItems(): any {
    if (!this.itemsList.length) {
      return this.renderNoSearchResults();
    }

    if (this.hasGroupItems) {
      return this.renderSelectGroupItems();
    }

    return this.itemsList.map((item: SelectItem, key, array) => {
      const lastItem = array.length === key + 1;
      const itemKey = this.resetItem ? key + 1 : key;

      if (this.hasTreeItems) {
        return this.renderTreeItems(item, itemKey, lastItem);
      }

      return this.renderItem(item, itemKey, lastItem);
    });
  }

  private renderTreeItems(item: SelectItem, key: number, divider?: boolean): HTMLZListElementElement[] {
    const hasDivider = divider || !item.children?.length;

    return (
      <z-list-element
        size={this.listSizeType()}
        id={`${this.htmlid}_${key}`}
        dividerType={hasDivider ? ListDividerType.ELEMENT : undefined}
        tabIndex={0}
        role="option"
        onKeyDown={(e: KeyboardEvent) => {
          this.arrowsSelectNav(e, key);
          if (e.key === KeyboardCode.ENTER) {
            this.selectItem(item);
          }
        }}
      >
        <div
          id={`${this.htmlid}-${key}`}
          class="list-element"
          tabIndex={-1}
          onClick={() => this.selectItem(item)}
          onKeyDown={(e: KeyboardEvent) => {
            if (e.key === KeyboardCode.ENTER) {
              this.selectItem(item);
            }
          }}
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
              class={{
                "item-label": true,
                "selected": !!item.selected,
              }}
              title={item.name}
              innerHTML={item.name}
            />
          </span>
          {item.icon && <z-tag icon={item.icon}></z-tag>}
        </div>
        {item.children && item.children.length > 0 ? (
          <z-list>
            <div class="children-node">
              {item.children.map((child, index) => this.renderTreeItems(child, index, false))}
            </div>
          </z-list>
        ) : null}
      </z-list-element>
    );
  }

  private renderSelectGroupItems(): HTMLZListElementElement | HTMLZListElementElement[] {
    const newData = this.itemsList.reduce((group, item, index, array) => {
      const {category} = item;
      const lastItem = array.length === index + 1;
      const itemKey = this.resetItem ? index + 1 : index;
      const zListItem = this.renderItem(item, itemKey, lastItem);

      group[category] = group[category] ?? [];
      group[category].push(zListItem);

      return group;
    }, {});

    return Object.entries(newData as {[key: string]: HTMLZListElementElement[]}).map(([key, value]) => {
      return (
        <z-list-group divider-type={ListDividerType.ELEMENT}>
          <span
            class="body-3-sb z-list-group-title"
            slot="header-title"
          >
            {key}
          </span>
          {value.map((item) => item)}
        </z-list-group>
      );
    });
  }

  private renderNoSearchResults(): HTMLZListElementElement {
    return (
      <z-list-element
        color="color-primary01"
        class="no-results"
        size={this.listSizeType()}
      >
        <z-icon
          name="multiply-circle"
          fill="color-primary01-icon"
        />
        {this.noresultslabel}
      </z-list-element>
    );
  }

  private renderMessage(): HTMLZInputMessageElement {
    if (boolean(this.message) === false) {
      return;
    }

    return (
      <z-input-message
        message={boolean(this.message) === true ? undefined : (this.message as string)}
        status={this.status}
        class={this.size}
        disabled={this.disabled}
      />
    );
  }

  render(): HTMLDivElement {
    return (
      <div class="select-wrapper">
        {this.renderInput()}
        {this.renderSelectUl()}
        {this.renderMessage()}
      </div>
    );
  }
}
