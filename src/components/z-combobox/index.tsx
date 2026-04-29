import {Component, ComponentInterface, Element, Event, EventEmitter, Prop, State, Watch, h} from "@stencil/core";
import {ComboItem, ControlSize, InputType, KeyboardCode, ListDividerType, ListSize} from "../../beans";
import {encodeString, getPlainText, randomId} from "../../utils/utils";
import {ZInput} from "../z-input";

@Component({
  tag: "z-combobox",
  styleUrls: ["../css-components/z-label/styles.css", "styles.css"],
  shadow: true,
})
export class ZCombobox implements ComponentInterface {
  @Element() element: HTMLZComboboxElement;

  /** input unique id */
  @Prop()
  inputid = `combo-${randomId()}`;

  /** list items array */
  @Prop()
  items: ComboItem[] | string;

  /** label text */
  @Prop()
  label: string;

  /** the combobox is disabled */
  @Prop({reflect: true})
  disabled?: boolean = false;

  /** show search input flag (optional) */
  @Prop()
  hassearch?: boolean = false;

  /** search input label text (optional) */
  @Prop()
  searchlabel?: string;

  /** search input placeholder text (optional) */
  @Prop()
  searchplaceholder?: string;

  /** search input title text (optional) */
  @Prop()
  searchtitle?: string;

  /** no result text message */
  @Prop()
  noresultslabel?: string = "Nessun risultato";

  /** toggle combo list opening flag */
  @Prop({mutable: true})
  isopen = false;

  /** fixed style flag */
  @Prop()
  isfixed = false;

  /** show "check all" checkbox (optional) */
  @Prop()
  hascheckall?: boolean = false;

  /** check all label (optional) */
  @Prop()
  checkalltext?: string = "Seleziona tutti";

  /** uncheck all label (optional) */
  @Prop()
  uncheckalltext?: string = "Deseleziona tutti";

  /** max number of checkable items (0 = unlimited) */
  @Prop()
  maxcheckableitems = 0;

  /** group items by category */
  @Prop()
  hasgroupitems?: boolean;

  /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
  @Prop()
  size?: ControlSize = ControlSize.BIG;

  /** the combobox aria-label */
  @Prop()
  htmlAriaLabel?: string;

  @State()
  searchValue: string;

  @State()
  selectedCounter: number;

  @State()
  renderItemsList: ComboItem[] = []; // used for render only

  @State()
  focusedItemId = "";

  private itemsList: ComboItem[] = [];

  private inputType: InputType = InputType.TEXT;

  @Watch("items")
  watchItems(): void {
    this.itemsList = typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    this.selectedCounter = this.itemsList.filter((item) => item.checked).length;
    this.updateRenderItemsList();
  }

  @Watch("searchValue")
  watchSearchValue(): void {
    this.filterItems(this.searchValue);
  }

  /** Emitted when value is checked/unchecked. Returns id, items. */
  @Event()
  comboboxChange: EventEmitter;

  private emitComboboxChange(): void {
    this.comboboxChange.emit({id: this.inputid, items: this.itemsList});
  }

  constructor() {
    this.toggleComboBox = this.toggleComboBox.bind(this);
    this.closeFilterItems = this.closeFilterItems.bind(this);
  }

  componentWillLoad(): void {
    this.watchItems();
  }

  componentWillRender(): void {
    this.selectedCounter = this.itemsList.filter((item) => item.checked).length;
  }

  private getControlToListSize(): ListSize {
    switch (this.size) {
      case ControlSize.X_SMALL:
        return ListSize.SMALL;
      case ControlSize.SMALL:
        return ListSize.MEDIUM;
      default:
        return ListSize.LARGE;
    }
  }

  private getOptionId(item: ComboItem): string {
    return `${this.inputid}-option-${item.id ? encodeString(`${item.id}`) : encodeString(`${item.name}`)}`;
  }

  private getCheckAllOptionId(): string {
    return `${this.inputid}-check-all`;
  }

  private allOptionsSelected(): boolean {
    return this.selectedCounter === this.itemsList.length;
  }

  private hasReachedMaxSelections(): boolean {
    return !!(this.maxcheckableitems && this.selectedCounter >= this.maxcheckableitems);
  }

  private handleHeaderKeyDown(e: KeyboardEvent): void {
    if (e.code === KeyboardCode.ENTER && !this.focusedItemId) {
      this.toggleComboBox();
    }

    if (!this.isopen || this.hassearch) {
      return;
    }

    switch (e.code as KeyboardCode) {
      case KeyboardCode.SPACE:
      case KeyboardCode.ENTER:
        if (this.focusedItemId) {
          e.preventDefault();
          this.checkOption(this.focusedItemId);
        }
        break;
      case KeyboardCode.ESC:
        if (this.focusedItemId) {
          this.focusedItemId = "";
        }
        break;
      case KeyboardCode.ARROW_DOWN:
      case KeyboardCode.ARROW_UP:
        this.handleArrowsNavigation(e);
        break;
    }
  }

  private handleInputKeyDown(e: KeyboardEvent): void {
    switch (e.code as KeyboardCode) {
      case KeyboardCode.ENTER:
      case KeyboardCode.SPACE:
        if (this.focusedItemId) {
          e.preventDefault();
          this.checkOption(this.focusedItemId);
          break;
        }
        break;
      case KeyboardCode.ARROW_DOWN:
      case KeyboardCode.ARROW_UP:
        this.handleArrowsNavigation(e);
        break;
      case KeyboardCode.ESC:
        if (this.focusedItemId) {
          this.focusedItemId = "";
          break;
        }
        this.closeFilterItems();
        break;
      case KeyboardCode.TAB:
        this.focusedItemId = "";
        break;
    }
  }

  private checkOption(optionId: string): void {
    if (optionId === this.getCheckAllOptionId()) {
      this.itemsList = this.itemsList.map((item: ComboItem) => ({
        ...item,
        checked: !this.allOptionsSelected(),
      }));

      this.focusedItemId = this.getCheckAllOptionId();
    } else {
      this.itemsList = this.itemsList.map((i: ComboItem) => {
        if (optionId === this.getOptionId(i)) {
          i.checked = !i.checked;
        }

        return i;
      });
    }

    this.updateRenderItemsList();
    this.emitComboboxChange();
  }

  private handleArrowsNavigation(e: KeyboardEvent): void {
    if (![KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP].includes(e.code as KeyboardCode) || !this.isopen) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const currElem = this.focusedItemId ? this.element.shadowRoot.querySelector(`#${this.focusedItemId}`) : null;
    const options = Array.from(this.element.shadowRoot.querySelectorAll('[role="option"]'));

    if (!options.length) {
      return;
    }

    const currElemIndex = currElem ? options.indexOf(currElem) : null;
    const firstElemIndex = 0;
    const lastElemIndex = options.length - 1;

    let nextElem = null;
    if (e.code === KeyboardCode.ARROW_DOWN) {
      nextElem =
        currElemIndex === null ? options[firstElemIndex] : options[currElemIndex + 1] || options[lastElemIndex];
    } else if (e.code === KeyboardCode.ARROW_UP) {
      nextElem =
        currElemIndex === null ? options[lastElemIndex] : options[currElemIndex - 1] || options[firstElemIndex];
    }

    this.focusedItemId = nextElem.id;
    nextElem.scrollIntoView({block: "nearest", container: "nearest"});
  }

  private updateRenderItemsList(): void {
    if (this.searchValue) {
      this.filterItems(this.searchValue);
    } else {
      this.resetRenderItemsList();
    }
  }

  private resetRenderItemsList(): void {
    const renderItemsList = [];
    this.itemsList.forEach((item: ComboItem) => {
      renderItemsList.push({...item});
    });
    this.renderItemsList = renderItemsList;
  }

  private filterItems(value: string): void {
    if (!value) {
      return this.closeFilterItems();
    }

    this.resetRenderItemsList();
    this.renderItemsList = this.renderItemsList.filter((item) => {
      const start = item.name.toUpperCase().indexOf(value.toUpperCase());
      const end = start + value.length;
      const newName =
        item.name.substring(0, start) +
        "<strong>" +
        item.name.substring(start, end) +
        "</strong>" +
        item.name.substring(end, item.name.length);

      item.name = newName;

      return start >= 0;
    });
  }

  private closeFilterItems(): void {
    this.searchValue = "";
    this.resetRenderItemsList();
  }

  private toggleComboBox(): void {
    this.isopen = !this.isopen;
  }

  private getComboboxA11yAttributes(isZInput: boolean): Record<string, string> {
    const role = "combobox";
    const ariaLabel = this.htmlAriaLabel;
    const ariaExpanded = this.isopen ? "true" : "false";
    const ariaActivedescendant = this.isopen ? this.focusedItemId : "";
    const ariaControls = `${this.inputid}_list`;

    if (isZInput) {
      return {
        "role": role,
        "aria-label": ariaLabel,
        "html-aria-expanded": ariaExpanded,
        "html-aria-activedescendant": ariaActivedescendant,
        "html-aria-controls": ariaControls,
      };
    }

    return {
      "role": role,
      "aria-label": ariaLabel,
      "aria-expanded": ariaExpanded,
      "aria-activedescendant": ariaActivedescendant,
      "aria-controls": ariaControls,
    };
  }

  private renderHeader(): HTMLDivElement {
    const comboboxA11yAttributes = !this.hassearch ? this.getComboboxA11yAttributes(false) : {};

    return (
      <div
        class="header"
        onClick={() => this.toggleComboBox()}
        onKeyDown={(e: KeyboardEvent) => this.handleHeaderKeyDown(e)}
        role="button"
        tabindex={0}
        aria-controls="open-combo-data"
        aria-expanded={this.isopen ? "true" : "false"}
        {...comboboxA11yAttributes}
      >
        <span
          class="body-3"
          aria-label={
            this.label
              ? `${this.label}${this.selectedCounter > 0 ? ` - ${this.selectedCounter} selezionati` : ``}`
              : undefined
          }
        >
          {this.label}
          <span>{this.selectedCounter > 0 && ` (${this.selectedCounter})`}</span>
        </span>
        <z-icon
          name="caret-down"
          class={this.size}
        />
      </div>
    );
  }

  private renderContent(): HTMLDivElement {
    return (
      <div
        id="open-combo-data"
        class="open-combo-data"
      >
        {this.hassearch && this.renderSearchInput()}
        <div
          role="listbox"
          aria-label={this.label}
          aria-multiselectable="true"
          id={`${this.inputid}_list`}
          aria-owns={`${this.hascheckall ? `${this.getCheckAllOptionId()} ` : ``}${this.itemsList.map((item) => this.getOptionId(item)).join(" ")}`}
        >
          {this.renderItems()}
        </div>
      </div>
    );
  }

  private renderItems(): HTMLDivElement {
    return (
      <div
        class={this.searchValue && "search"}
        tabIndex={-1}
        role="presentation"
      >
        {this.renderList(this.renderItemsList)}
      </div>
    );
  }

  private renderItem(item: ComboItem, index: number, length: number): HTMLZListElement {
    const optionId = this.getOptionId(item);
    const isDisabled = !item.checked && this.hasReachedMaxSelections();

    return (
      <z-list-element
        htmlTabindex={-1}
        dividerType={index !== length - 1 ? ListDividerType.ELEMENT : ListDividerType.NONE}
        size={this.getControlToListSize()}
        role="presentation"
        disabled={!!isDisabled}
      >
        <span
          class="option-wrap"
          role="presentation"
          onClick={() => {
            this.focusedItemId = "";
            this.checkOption(optionId);
          }}
        >
          <z-icon
            name={item.checked ? "checkbox-checked" : "checkbox"}
            class={this.focusedItemId === optionId ? "focused" : ""}
          />
          <span
            id={optionId}
            role={isDisabled ? "presentation" : "option"}
            aria-selected={item.checked ? "true" : "false"}
            aria-label={isDisabled ? undefined : getPlainText(item.name)}
          >
            <span
              aria-hidden="true"
              innerHTML={item.name}
            />
          </span>
        </span>
      </z-list-element>
    );
  }

  private renderList(items: ComboItem[]): HTMLUListElement {
    if (!items) {
      return;
    }
    if (!items.length && this.searchValue) {
      return this.renderNoSearchResults();
    }

    if (this.hasgroupitems) {
      return this.renderGroups(items);
    }

    return (
      <ul role="presentation">
        {this.renderCheckAll()}
        {items.map((item, i) => {
          return this.renderItem(item, i, items.length);
        })}
      </ul>
    );
  }

  private renderGroups(items: ComboItem[]): HTMLUListElement {
    const newData = items.reduce((group, item, index) => {
      const category = item.category || "Altra categoria";
      const zListItem = this.renderItem(item, index, items.length);

      group[category] = group[category] ?? [];
      group[category].push(zListItem);

      return group;
    }, {});

    const listGroups = Object.entries(newData as {[key: string]: HTMLZListElementElement[]}).map(
      ([key, value], index) => {
        return (
          <z-list-group
            size={this.getControlToListSize()}
            divider-type={ListDividerType.ELEMENT}
            aria-labelledby={`${this.inputid}_list_group_${index}`}
          >
            <span
              class="body-3-sb z-list-group-title"
              slot="header-title"
              id={`${this.inputid}_list_group_${index}`}
              aria-hidden="true"
            >
              {key}
            </span>
            {value.map((item) => item)}
          </z-list-group>
        );
      }
    );

    return (
      <ul role="presentation">
        {this.renderCheckAll()}
        {listGroups}
      </ul>
    );
  }

  private renderNoSearchResults(): HTMLUListElement {
    return (
      <div class="no-results">
        <span>{this.noresultslabel}</span>
      </div>
    );
  }

  private renderSearchInput(): ZInput {
    return (
      <z-input
        htmlid={`${this.inputid}_search`}
        label={this.searchlabel}
        placeholder={this.searchplaceholder}
        htmltitle={this.searchtitle}
        type={this.inputType}
        value={this.searchValue}
        message={false}
        size={this.size}
        html-aria-autocomplete="list"
        {...this.getComboboxA11yAttributes(true)}
        onKeyDown={(e: KeyboardEvent) => this.handleInputKeyDown(e)}
        onInputChange={(e: CustomEvent) => {
          this.searchValue = e.detail.value;
          this.focusedItemId = "";
        }}
      />
    );
  }

  private renderCheckAll(): HTMLDivElement {
    if (!this.hascheckall || this.searchValue) {
      return;
    }

    const optionId = this.getCheckAllOptionId();
    const allChecked = this.allOptionsSelected();
    const isDisabled =
      this.hasReachedMaxSelections() || (this.maxcheckableitems && this.maxcheckableitems < this.itemsList.length);

    return (
      <z-list-element
        class="check-all-wrapper"
        role="presentation"
        htmlTabindex={-1}
        dividerType={ListDividerType.ELEMENT}
        dividerColor="gray800"
        size={this.getControlToListSize()}
        disabled={!!isDisabled}
      >
        <span
          class="option-wrap"
          role="presentation"
          onClick={() => this.checkOption(optionId)}
        >
          <z-icon
            name={allChecked ? "checkbox-checked" : "checkbox"}
            class={this.focusedItemId === optionId ? "focused" : ""}
          />
          <span
            id={optionId}
            role={isDisabled ? "presentation" : "option"}
            aria-selected={allChecked ? "true" : "false"}
          >
            {allChecked ? this.uncheckalltext : this.checkalltext}
          </span>
        </span>
      </z-list-element>
    );
  }

  render(): HTMLDivElement {
    return (
      <div
        data-action={`combo-${this.inputid}`}
        class={{open: this.isopen, fixed: this.isfixed, disabled: this.disabled}}
        id={this.inputid}
      >
        {this.renderHeader()}
        {!this.disabled && this.renderContent()}
      </div>
    );
  }
}
