import {Component, Prop, State, h, Event, EventEmitter, Watch, Element, Method} from "@stencil/core";
import {SelectItem, ListDividerType, KeyboardCode, InputStatus} from "../../../beans";
import {randomId, handleKeyboardSubmit, getClickedElement, getElementTree, boolean} from "../../../utils/utils";

@Component({
  tag: "z-select",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZSelect {
  @Element() element: HTMLZSelectElement;

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
  resetItem?: string;

  @State()
  isOpen = false;

  @State()
  selectedItem: null | SelectItem = null;

  @State()
  searchString: null | string;

  private itemsList: SelectItem[] = [];

  constructor() {
    this.toggleSelectUl = this.toggleSelectUl.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.handleSelectFocus = this.handleSelectFocus.bind(this);
  }

  @Watch("items")
  watchItems(): void {
    this.itemsList = this.getInitialItemsArray();
    this.selectedItem = this.itemsList.find((item: SelectItem) => item.selected);
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

    this.selectedItem = this.itemsList.find((item: SelectItem) => values.includes(item.id));
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

  /** Emitted on select option selection, returns select id, selected item id */
  @Event()
  resetSelect: EventEmitter;

  private emitResetSelect(): void {
    this.resetSelect.emit({
      id: this.htmlid,
      selected: "reset",
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
    } else {
      this.itemsList = prevList
        .filter((item: SelectItem) => {
          return item.name.toUpperCase().includes(searchString.toUpperCase());
        })
        .map((item: SelectItem) => {
          const start = item.name.toUpperCase().indexOf(searchString.toUpperCase());
          const end = start + searchString.length;
          const newName =
            item.name.substring(0, start) +
            `<strong>${item.name.substring(start, end)}</strong>` +
            item.name.substring(end, item.name.length);
          item.name = newName;

          return item;
        });
    }
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

  private selectItem(item: null | SelectItem, selected: boolean): void {
    if (item && item.disabled) {
      return;
    }

    this.itemsList = this.mapSelectedItemToItemsArray();
    this.itemsList = this.itemsList.map((i: SelectItem) => {
      i.selected = false;
      if (i.id === item?.id) {
        i.selected = selected;
      }

      return i;
    });

    this.selectedItem = this.itemsList.find((item: SelectItem) => item.selected);

    this.emitOptionSelect();

    if (this.searchString) {
      this.searchString = null;
    }
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

    let index: number;

    if (this.resetItem) {
      if (e.key === KeyboardCode.ARROW_DOWN) {
        index = key + 1 === this.itemsList.length + 1 ? +!showResetIcon : key + 1;
      } else if (e.key === KeyboardCode.ARROW_UP) {
        index = key <= +!showResetIcon ? this.itemsList.length : key - 1;
      }
    }

    if (!this.resetItem) {
      if (e.key === KeyboardCode.ARROW_DOWN) {
        index = key + 1 === this.itemsList.length ? 0 : key + 1;
      } else if (e.key === KeyboardCode.ARROW_UP) {
        index = key <= 0 ? this.itemsList.length - 1 : key - 1;
      }
    }

    this.focusSelectItem(index);
  }

  private focusSelectItem(index: number): void {
    const focusElem: HTMLLIElement = this.element.querySelector(`#${this.htmlid}_${index}`);
    if (focusElem) {
      focusElem.focus();
    }
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
        (this.element.querySelector(`#${this.htmlid}_input`) as HTMLInputElement).focus();
      }
    }

    this.isOpen = !this.isOpen;
  }

  private handleInputClick(e: MouseEvent | KeyboardEvent): void {
    const cp = e.composedPath();
    const clearIcon = cp.find((item: HTMLElement) => item.classList && item.classList.contains("reset-icon"));
    if (clearIcon) {
      e.stopPropagation();

      return;
    }

    this.toggleSelectUl();
  }

  private handleSelectFocus(e: MouseEvent | KeyboardEvent): void {
    if (e instanceof KeyboardEvent && e.key === KeyboardCode.ESC) {
      e.stopPropagation();

      return this.toggleSelectUl(true);
    }

    if (e instanceof KeyboardEvent && e.key !== KeyboardCode.TAB && e.key !== KeyboardCode.ENTER) {
      return;
    }

    const tree = getElementTree(getClickedElement());
    const parent = tree.find((elem: HTMLElement) => {
      return elem.nodeName.toLowerCase() === "z-input" && elem.id === `${this.htmlid}_input`;
    });

    if (!parent) {
      this.toggleSelectUl(e instanceof MouseEvent ? true : false);
    }
  }

  private scrollToLetter(letter: string): void {
    const foundItem = this.itemsList.find((item: SelectItem) => item.name.charAt(0) === letter);
    if (foundItem) {
      this.focusSelectItem(this.itemsList.indexOf(foundItem));
    }
  }

  private renderInput(): HTMLZInputElement {
    return (
      <z-input
        id={`${this.htmlid}_input`}
        htmlid={`${this.htmlid}_input`}
        placeholder={this.placeholder}
        value={!this.isOpen && this.selectedItem ? this.selectedItem.name.replace(/<[^>]+>/g, "") : null}
        label={this.label}
        aria-label={this.ariaLabel}
        icon={this.isOpen ? "caret-up" : "caret-down"}
        hasclearicon={this.hasAutocomplete()}
        message={false}
        disabled={this.disabled}
        readonly={this.readonly || (!this.hasAutocomplete() && this.isOpen)}
        status={this.isOpen ? undefined : this.status}
        autocomplete="off"
        onClick={(e: MouseEvent) => {
          this.handleInputClick(e);
        }}
        onKeyUp={(e: KeyboardEvent) => {
          if (e.keyCode !== 13) {
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
      <div
        class={this.isOpen ? "open" : "closed"}
        tabindex="-1"
      >
        <div
          class="ul-scroll-wrapper"
          tabindex="-1"
        >
          <z-list
            role="listbox"
            tabindex={this.disabled || this.readonly || !this.isOpen ? -1 : 0}
            id={this.htmlid}
            aria-activedescendant={this.selectedItem?.id}
            aria-multiselectable={false}
            class={{
              disabled: this.disabled,
              readonly: this.readonly,
              filled: !!this.selectedItem,
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
          "reset-item-padding": !this.hasGroupItems,
        }}
        clickable={true}
        disabled={false}
        dividerType={ListDividerType.ELEMENT}
        role="option"
        tabindex="0"
        aria-selected="false"
        id={`${this.htmlid}_${this.resetItem ? "0" : "none"}`}
        onClickItem={() => {
          this.selectedItem = null;
          this.searchString = null;
          this.emitResetSelect();
        }}
        onKeyDown={(e: KeyboardEvent) => this.arrowsSelectNav(e, 0)}
      >
        <z-icon name="multiply-circled" />
        {this.resetItem}
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
        aria-selected={!!item.selected}
        id={`${this.htmlid}_${key}`}
        onClickItem={() => this.selectItem(item, true)}
        onKeyDown={(e: KeyboardEvent) => this.arrowsSelectNav(e, key)}
      >
        <span
          class={{selected: !!item.selected}}
          innerHTML={item.name}
        />
      </z-list-element>
    );
  }

  private renderSelectUlItems(): HTMLZListElementElement | HTMLZListElementElement[] {
    if (!this.itemsList.length) {
      return this.renderNoSearchResults();
    }

    if (this.hasGroupItems) {
      return this.renderSelectGroupItems();
    }

    return this.itemsList.map((item: SelectItem, key, array) => {
      const lastItem = array.length === key + 1;
      const itemKey = this.resetItem ? key + 1 : key;

      return this.renderItem(item, itemKey, lastItem);
    });
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
          <z-body
            class="z-list-group-title"
            level={3}
            slot="header-title"
            variant="semibold"
          >
            {key}
          </z-body>
          {value.map((item) => item)}
        </z-list-group>
      );
    });
  }

  private renderNoSearchResults(): HTMLZListElementElement {
    return (
      <z-list-element
        color="blue500"
        class="no-results"
      >
        <z-icon
          name="multiply-circle"
          fill="blue500"
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
