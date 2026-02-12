import {Component, Element, Event, EventEmitter, Prop, State, Watch, h} from "@stencil/core";
import {ComboItem, ControlSize, InputType, KeyboardCode, ListDividerType, ListSize} from "../../beans";
import {handleKeyboardSubmit, randomId} from "../../utils/utils";
import {ZInput} from "../z-input";

@Component({
  tag: "z-combobox",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZCombobox {
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

  @State()
  searchValue: string;

  @State()
  selectedCounter: number;

  @State()
  renderItemsList: ComboItem[] = []; // used for render only

  @State()
  focusedItemId: string;

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

  private handleOptionKeyDown(e: KeyboardEvent, onOptionClickCallback: () => void, currId?: string): void {
    if ((e.code as KeyboardCode) === KeyboardCode.SPACE) {
      e.preventDefault();

      return onOptionClickCallback();
    }

    this.handleSelectArrowsNavigation(e, currId);
  }

  private handleSelectArrowsNavigation(e: KeyboardEvent, currId?: string): void {
    if (![KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP].includes(e.key as KeyboardCode) || !this.isopen) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const currElem = this.element.shadowRoot.querySelector(`#${currId}`);
    const options = Array.from(this.element.shadowRoot.querySelectorAll('[role="option"]'));

    if (!options.length) {
      return;
    }

    const currElemIndex = currElem ? options.indexOf(currElem) : null;
    const firstElemIndex = 0;
    const lastElemIndex = options.length - 1;

    let nextElem = null;
    if (e.key === KeyboardCode.ARROW_DOWN) {
      nextElem =
        currElemIndex === null || currElemIndex === lastElemIndex
          ? options[firstElemIndex]
          : options[currElemIndex + 1];
    } else if (e.key === KeyboardCode.ARROW_UP) {
      nextElem =
        currElemIndex === null || currElemIndex === firstElemIndex
          ? options[lastElemIndex]
          : options[currElemIndex - 1];
    }

    this.focusedItemId = nextElem.id;
    nextElem.focus();
  }

  private handleHeaderKeyboardEvent(ev: KeyboardEvent): void {
    if (ev.key === KeyboardCode.SPACE) {
      ev.preventDefault();
    }

    if ((ev.key === KeyboardCode.ARROW_DOWN && !this.isopen) || (ev.key === KeyboardCode.ARROW_UP && this.isopen)) {
      this.toggleComboBox();
    }

    if (this.isopen && !this.hassearch) {
      this.handleSelectArrowsNavigation(ev);
    }
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

  private checkAll(checked = true): void {
    this.itemsList = this.itemsList.map((item: ComboItem) => ({
      ...item,
      checked: checked,
    }));
    this.resetRenderItemsList();
    this.emitComboboxChange();

    this.focusedItemId = null;
    const elem = this.element.shadowRoot.querySelector("#option-check-all") as HTMLElement;
    this.focusedItemId = elem.id;
    elem.focus();
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
    const ariaExpanded = this.isopen ? "true" : "false";
    const ariaActivedescendant = this.isopen ? this.focusedItemId : "";
    const ariaControls = `${this.inputid}_list`;

    if (isZInput) {
      return {
        "role": role,
        "html-aria-expanded": ariaExpanded,
        "html-aria-activedescendant": ariaActivedescendant,
        "html-aria-controls": ariaControls,
      };
    }

    return {
      "role": role,
      "aria-expanded": ariaExpanded,
      "aria-activedescendant": ariaActivedescendant,
      "aria-controls": ariaControls,
    };
  }

  private renderHeader(): HTMLDivElement {
    return (
      <div
        class="header"
        onClick={() => this.toggleComboBox()}
        onKeyDown={(ev: KeyboardEvent) => {
          this.handleHeaderKeyboardEvent(ev);
        }}
        onKeyUp={(ev: KeyboardEvent) => handleKeyboardSubmit(ev, this.toggleComboBox)}
        role="button"
        tabindex={0}
        aria-controls="open-combo-data"
        aria-expanded={this.isopen ? "true" : "false"}
      >
        <span class="body-3">
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
        {!this.hassearch ? <span {...this.getComboboxA11yAttributes(false)} /> : null}
        <div
          role="listbox"
          aria-label={this.label}
          aria-multiselectable="true"
          id={`${this.inputid}_list`}
          aria-owns={Array.from(this.element.shadowRoot.querySelectorAll("[role='option']"))
            .map((item) => item.id)
            .join(" ")}
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
    const optionId = `option-${item.id}`;
    const isDisabled = !item.checked && this.maxcheckableitems && this.selectedCounter >= this.maxcheckableitems;

    const onOptionClick = (): void => {
      this.itemsList = this.itemsList.map((i: ComboItem) => {
        if (item.id === i.id) {
          i.checked = !i.checked;
        }

        return i;
      });
      this.updateRenderItemsList();
      this.emitComboboxChange();
    };

    return (
      <z-list-element
        htmlTabindex={-1}
        dividerType={index !== length - 1 ? ListDividerType.ELEMENT : ListDividerType.NONE}
        size={this.getControlToListSize()}
        role="presentation"
        disabled={isDisabled}
      >
        <span
          class="option-wrap"
          role="presentation"
        >
          <z-icon
            name={item.checked ? "checkbox-checked" : "checkbox"}
            class={this.focusedItemId === optionId ? "focused" : ""}
          />
          <span
            id={optionId}
            role="option"
            aria-selected={item.checked ? "true" : "false"}
            tabindex={this.focusedItemId === optionId ? 0 : -1}
            innerHTML={item.name}
            onKeyDown={(e: KeyboardEvent) => this.handleOptionKeyDown(e, onOptionClick, optionId)}
            onClick={onOptionClick}
          />
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
            divider-type={ListDividerType.ELEMENT}
            ariaLabelledby={`${this.inputid}_list_group_${index}`}
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
        onKeyUp={(e: KeyboardEvent) => {
          if (e.key === KeyboardCode.ESC) {
            this.closeFilterItems();
          }
          this.handleSelectArrowsNavigation(e);
        }}
        onInputChange={(e: CustomEvent) => {
          this.searchValue = e.detail.value;
        }}
      />
    );
  }

  private renderCheckAll(): HTMLDivElement {
    if (!this.hascheckall || this.searchValue) {
      return;
    }

    const optionId = "option-check-all";
    const allChecked = this.selectedCounter === this.itemsList.length;

    const onOptionClick = (): void => this.checkAll(!allChecked);

    return (
      <z-list-element
        class="check-all-wrapper"
        role="presentation"
        htmlTabindex={-1}
        dividerType={ListDividerType.ELEMENT}
        dividerColor="gray800"
        size={this.getControlToListSize()}
      >
        <span
          class="option-wrap"
          role="presentation"
        >
          <z-icon
            name={allChecked ? "checkbox-checked" : "checkbox"}
            class={this.focusedItemId === optionId ? "focused" : ""}
          />
          <span
            id={optionId}
            role="option"
            aria-selected={allChecked ? "true" : "false"}
            tabindex={this.focusedItemId === optionId ? 0 : -1}
            onKeyDown={(e: KeyboardEvent) => this.handleOptionKeyDown(e, onOptionClick, optionId)}
            onClick={onOptionClick}
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
