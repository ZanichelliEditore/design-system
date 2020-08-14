import {
  Component,
  Prop,
  State,
  h,
  Event,
  EventEmitter,
  Watch,
  Element,
  Method
} from "@stencil/core";
import {
  InputStatusBean,
  SelectItemBean,
  keybordKeyCodeEnum,
  InputStatusEnum
} from "../../../beans";
import {
  randomId,
  handleKeyboardSubmit,
  getClickedElement,
  getElementTree
} from "../../../utils/utils";

@Component({
  tag: "z-select",
  styleUrl: "styles.css",
  shadow: true
})
export class ZSelect {
  @Element() hostElement: HTMLElement;

  /** the id of the input element */
  @Prop() htmlid: string = randomId();
  /** the input select options */
  @Prop() items: SelectItemBean[] | string;
  /** the input name */
  @Prop() name?: string;
  /** the input label */
  @Prop() label?: string;
  /** the input is disabled */
  @Prop() disabled?: boolean = false;
  /** the input is readonly */
  @Prop() readonly?: boolean = false;
  /** the input placeholder (optional) */
  @Prop() placeholder?: string;
  /** the input html title (optional) */
  @Prop() htmltitle?: string;
  /** the input status (optional): available for text, password, number, email, textarea, select */
  @Prop() status?: InputStatusBean;
  /** show input helper message (optional): available for text, password, number, email, textarea, select */
  @Prop() hasmessage?: boolean = true;
  /** input helper message (optional): available for text, password, number, email, textarea, select */
  @Prop() message?: string;
  /** the input has autocomplete option */
  @Prop() autocomplete?: boolean = false;
  /** multiple options can be selected */
  @Prop() multiple?: boolean = false;
  /** no result text message */
  @Prop() noresultslabel?: string = "Nessun risultato";

  @State() isOpen: boolean = false;
  @State() selectedItems: SelectItemBean[];
  @State() searchString: null | string;

  private itemsList: SelectItemBean[] = [];

  constructor() {
    this.toggleSelectUl = this.toggleSelectUl.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.handleSelectFocus = this.handleSelectFocus.bind(this);
  }

  @Watch("items")
  watchItems() {
    this.itemsList = this.getInitialItemsArray();
    // typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    this.selectedItems = this.itemsList.filter(
      (item: SelectItemBean) => item.selected
    );
  }

  /** get the input selected options */
  @Method()
  async getSelectedItems(): Promise<SelectItemBean[]> {
    return this.selectedItems;
  }

  /** get the input value */
  @Method()
  async getValue(): Promise<string | string[]> {
    return this.getSelectedValues();
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

    this.selectedItems = this.itemsList.filter((item: SelectItemBean) =>
      values.includes(item.id)
    );
  }

  /** Emitted on select option selection, returns select id, selected item id (or array of selected items ids if multiple) */
  @Event() optionSelect: EventEmitter;
  emitOptionSelect() {
    this.optionSelect.emit({
      id: this.htmlid,
      selected: this.getSelectedValues()
    });
  }

  componentWillLoad() {
    this.watchItems();
  }

  componentWillRender() {
    this.filterItems(this.searchString);
  }

  getInitialItemsArray() {
    return typeof this.items === "string" ? JSON.parse(this.items) : this.items;
  }

  mapSelectedItemsToItemsArray() {
    const initialItemsList = this.getInitialItemsArray();
    return initialItemsList.map((item: SelectItemBean) => {
      const found = this.selectedItems.find(
        (selected: SelectItemBean) => selected.id === item.id
      );
      item.selected = !!found;
      return item;
    });
  }

  getSelectedValues() {
    if (this.multiple) {
      return this.selectedItems.map((item: SelectItemBean) => item.id);
    }

    if (!this.multiple && this.selectedItems.length) {
      return this.selectedItems[0].id;
    }

    return null;
  }

  filterItems(searchString: string) {
    const prevList = this.mapSelectedItemsToItemsArray();
    if (!searchString?.length) {
      this.itemsList = prevList;
    } else {
      this.itemsList = prevList
        .filter((item: SelectItemBean) => {
          return item.name.toUpperCase().includes(searchString.toUpperCase());
        })
        .map((item: SelectItemBean) => {
          const start = item.name
            .toUpperCase()
            .indexOf(searchString.toUpperCase());
          const end = start + searchString.length;
          const newName =
            item.name.substring(0, start) +
            item.name.substring(start, end).bold() +
            item.name.substring(end, item.name.length);
          item.name = newName;
          return item;
        });
    }
  }

  handleInputChange(e: CustomEvent) {
    this.searchString = e.detail.value;
    if (!this.isOpen) this.toggleSelectUl();
  }

  selectItem(item: null | SelectItemBean, selected: boolean) {
    if (item && item.disabled) return;

    this.itemsList = this.mapSelectedItemsToItemsArray();
    this.itemsList = this.itemsList.map((i: SelectItemBean) => {
      if (!this.multiple) i.selected = false;
      if (i.id === (item ? item.id : null)) i.selected = selected;
      return i;
    });

    this.selectedItems = this.itemsList.filter(
      (item: SelectItemBean) => item.selected
    );

    this.emitOptionSelect();

    if (this.searchString) this.searchString = null;
  }

  arrowsSelectNav(e: KeyboardEvent, key: number) {
    const arrows = [keybordKeyCodeEnum.ARROW_DOWN, keybordKeyCodeEnum.ARROW_UP];
    if (!arrows.includes(e.keyCode)) return;

    e.preventDefault();
    e.stopPropagation();

    if (!this.isOpen) this.toggleSelectUl();

    let index: number;
    if (e.keyCode === keybordKeyCodeEnum.ARROW_DOWN) {
      index = key + 1 === this.itemsList.length ? 0 : key + 1;
    } else if (e.keyCode === keybordKeyCodeEnum.ARROW_UP) {
      index = key <= 0 ? this.itemsList.length - 1 : key - 1;
    }

    this.focusSelectItem(index);
  }

  focusSelectItem(index: number) {
    const focusElem = this.hostElement.shadowRoot.getElementById(
      `${this.htmlid}_${index}`
    );
    if (focusElem) focusElem.focus();
  }

  toggleSelectUl(selfFocusOnClose: boolean = false) {
    if (this.disabled || this.readonly) return;

    if (!this.isOpen) {
      document.addEventListener("click", this.handleSelectFocus);
      document.addEventListener("keyup", this.handleSelectFocus);
    } else {
      document.removeEventListener("click", this.handleSelectFocus);
      document.removeEventListener("keyup", this.handleSelectFocus);
      if (selfFocusOnClose) {
        this.hostElement.shadowRoot
          .getElementById(`${this.htmlid}_input`)
          .focus();
      }
    }

    this.isOpen = !this.isOpen;
  }

  handleInputClick(e: MouseEvent | KeyboardEvent) {
    const cp = e.composedPath();
    const clearIcon = cp.find(
      (item: any) => item.classList && item.classList.contains("resetIcon")
    );
    if (clearIcon) {
      e.stopPropagation();
      return;
    }

    this.toggleSelectUl();
  }

  handleSelectFocus(e: MouseEvent | KeyboardEvent) {
    if (e instanceof KeyboardEvent && e.keyCode === keybordKeyCodeEnum.ESC) {
      e.stopPropagation();
      return this.toggleSelectUl(true);
    }

    if (
      e instanceof KeyboardEvent &&
      e.keyCode !== keybordKeyCodeEnum.TAB &&
      e.keyCode !== keybordKeyCodeEnum.ENTER
    ) {
      return;
    }

    const tree = getElementTree(getClickedElement());
    const parent = tree.find((elem: any) => {
      return (
        (elem.nodeName.toLowerCase() === "z-input" &&
          elem.id === `${this.htmlid}_input`) ||
        (this.multiple &&
          elem.nodeName.toLowerCase() === "ul" &&
          elem.id === this.htmlid)
      );
    });

    if (!parent) {
      this.toggleSelectUl(e instanceof MouseEvent ? true : false);
    }
  }

  scrollToLetter(letter: string) {
    const foundItem = this.itemsList.find(
      (item: SelectItemBean) => item.name.charAt(0) === letter
    );
    if (foundItem) this.focusSelectItem(this.itemsList.indexOf(foundItem));
  }

  renderLabel() {
    if (!this.label) return;

    return (
      <z-input-label
        value={this.label}
        disabled={this.disabled}
        aria-label={this.label}
        id={`${this.htmlid}_input_label`}
      />
    );
  }

  renderInput() {
    return (
      <z-input
        id={`${this.htmlid}_input`}
        htmlid={`${this.htmlid}_input`}
        placeholder={this.placeholder}
        value={
          !this.isOpen && !this.multiple && this.selectedItems.length
            ? this.selectedItems[0].name.replace(/<[^>]+>/g, "")
            : null
        }
        icon={this.isOpen ? "drop-up" : "drop-down"}
        hasclearicon={this.autocomplete}
        hasmessage={false}
        disabled={this.disabled}
        readonly={this.readonly || (!this.autocomplete && this.isOpen)}
        status={this.isOpen ? InputStatusEnum.selecting : this.status}
        onClick={(e: MouseEvent) => {
          this.handleInputClick(e);
        }}
        onKeyUp={(e: KeyboardEvent) => {
          if (e.keyCode !== 13) e.preventDefault();
          handleKeyboardSubmit(e, this.toggleSelectUl);
        }}
        onKeyDown={(e: KeyboardEvent) =>
          this.arrowsSelectNav(
            e,
            this.selectedItems.length
              ? this.itemsList.indexOf(this.selectedItems[0])
              : -1
          )
        }
        onInputChange={(e: CustomEvent) => {
          this.handleInputChange(e);
        }}
        onKeyPress={(e: KeyboardEvent) => {
          if (!this.autocomplete) {
            e.preventDefault();
            this.scrollToLetter(String.fromCharCode(e.keyCode));
          }
        }}
      />
    );
  }

  renderChips() {
    if (!this.multiple || !this.selectedItems.length) return;

    return (
      <div class={`chipsWrapper ${this.isOpen ? "open" : ""}`}>
        {this.selectedItems.map((item: SelectItemBean) => (
          <z-button-filter
            filterid={item.id}
            filtername={item.name.replace(/<[^>]+>/g, "")}
            issmall={true}
            onRemovefilter={() => this.selectItem(item, false)}
          />
        ))}
      </div>
    );
  }

  renderSelectUl() {
    return (
      <div class={this.isOpen ? "open" : "closed"}>
        <div class="ulScrollWrapper">
          <ul
            role="listbox"
            tabindex={this.disabled || this.readonly || !this.isOpen ? -1 : 0}
            id={this.htmlid}
            aria-activedescendant={
              !this.multiple && this.selectedItems.length
                ? this.selectedItems[0].id
                : null
            }
            aria-multiselectable={!!this.multiple}
            class={`
            ${this.disabled ? " disabled" : ""}
            ${this.readonly ? " readonly" : ""}
            ${
              !this.isOpen && this.status
                ? " input_" + this.status
                : " input_default"
            }
            ${this.selectedItems.length ? " filled" : ""}
          `}
          >
            {this.renderSelectUlItems()}
          </ul>
        </div>
      </div>
    );
  }

  renderSelectUlItems() {
    if (!this.itemsList.length) return this.renderNoSearchResults();

    return this.itemsList.map((item: SelectItemBean, key) => {
      return (
        <li
          role="option"
          tabindex={item.disabled || !this.isOpen ? -1 : 0}
          aria-selected={!!item.selected}
          class={item.disabled && "disabled"}
          id={`${this.htmlid}_${key}`}
          onClick={() => this.selectItem(item, true)}
          onKeyUp={(e: KeyboardEvent) =>
            handleKeyboardSubmit(e, this.selectItem, item, true)
          }
          onKeyDown={(e: KeyboardEvent) => this.arrowsSelectNav(e, key)}
        >
          <span innerHTML={item.name} />
        </li>
      );
    });
  }

  renderNoSearchResults() {
    return (
      <li class="noResults">
        <z-icon name="circle-cross" />
        {this.noresultslabel}
      </li>
    );
  }

  renderMessage() {
    if (!this.hasmessage) return;

    return <z-input-message message={this.message} status={this.status} />;
  }

  render() {
    return (
      <div class="selectWrapper">
        {this.renderLabel()}
        {this.renderChips()}
        {this.renderInput()}
        {this.renderSelectUl()}
        {this.renderMessage()}
      </div>
    );
  }
}
