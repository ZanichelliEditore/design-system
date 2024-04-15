import {Component, Prop, h, State, Listen, Watch, Event, Element, EventEmitter} from "@stencil/core";
import {ComboItem, InputType, ListDividerType, ControlSize, KeyboardCode, ListSize} from "../../../beans";
import {ZInput} from "../z-input";
import {handleKeyboardSubmit} from "../../../utils/utils";
import {ZMyzListItem} from "../../../snowflakes/myz/list/z-myz-list-item";

@Component({
  tag: "z-combobox",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZCombobox {
  @Element() element: HTMLZComboboxElement;

  /** input unique id */
  @Prop()
  inputid: string;

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

  /** close combobox list text */
  @Prop()
  closesearchtext?: string = "Chiudi";

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
    const elem = this.element.shadowRoot.querySelector(`.${this.getCheckboxClass()} input`);
    if (elem) {
      elem.setAttribute("tabindex", "0");
    }
  }

  @Listen("ariaDescendantFocus")
  getFocusedItemHandler(e: CustomEvent): void {
    this.focusedItemId = e.detail;
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
    let size;
    switch (this.size) {
      case ControlSize.BIG:
        size = ListSize.LARGE;
        break;
      case ControlSize.SMALL:
        size = ListSize.SMALL;
        break;
      case ControlSize.X_SMALL:
        size = ListSize.SMALL;
        break;
      default:
        size = ListSize.MEDIUM;
    }

    return size;
  }

  private getItemId(item: ComboItem): string {
    return `combo-checkbox-${this.inputid}-${item.id}`;
  }

  private getCheckboxClass(): string {
    return `combo-item-checkbox-input-${this.inputid}`;
  }

  private getCheckAllId(): string {
    return `combo-checkbox-${this.inputid}-check-all`;
  }

  private hasCheckAllDisabled(): boolean {
    return this.maxcheckableitems && this.maxcheckableitems < this.itemsList.length;
  }

  private resetInputTabIndex(): void {
    this.element.shadowRoot.querySelectorAll(`.${this.getCheckboxClass()} input`).forEach(function (item) {
      item.setAttribute("tabindex", "-1");
    });
  }

  private setInputTabIndex(itemId, index): number {
    if (index === 0) {
      if (
        !this.hascheckall ||
        (this.hascheckall && this.searchValue) ||
        (this.hascheckall && this.hasCheckAllDisabled())
      ) {
        return 0;
      }
    }

    return itemId === this.focusedItemId ? 0 : -1;
  }

  private handleSelectArrowsNavigation(e: KeyboardEvent, key: number): void {
    const arrows = [KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP];
    if (!arrows.includes(e.key as KeyboardCode) || !this.isopen) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    const firstCheckbox = this.hascheckall && !this.hasCheckAllDisabled() && !this.searchValue ? -1 : 0;
    const itemsLentgh = this.renderItemsList.length - 1;
    let index = key;

    if (e.key === KeyboardCode.ARROW_DOWN) {
      index = index === itemsLentgh ? firstCheckbox : key + 1;
    } else if (e.key === KeyboardCode.ARROW_UP) {
      if (this.hascheckall && !this.searchValue) {
        index = index < 0 ? itemsLentgh : key - 1;
      } else {
        index = index === 0 ? itemsLentgh : key - 1;
      }
    }

    this.resetInputTabIndex();
    this.focusComboboxItem(index);
  }

  private handleHeaderKeyboardEvent(ev: KeyboardEvent): void {
    if (ev.key === KeyboardCode.SPACE) {
      ev.preventDefault();
    }
    if ((ev.key === KeyboardCode.ARROW_DOWN && !this.isopen) || (ev.key === KeyboardCode.ARROW_UP && this.isopen)) {
      this.toggleComboBox();
    }
  }

  private focusComboboxItem(index: number): void {
    let focusElem: HTMLElement;

    if (index < 0) {
      focusElem = this.element.shadowRoot.querySelector(`#${this.getCheckAllId()}`);
    } else {
      const item = this.renderItemsList[index];

      if (!item) {
        return;
      }

      focusElem = this.element.shadowRoot.querySelector(`#${this.getItemId(item)}`);
    }

    if (focusElem) {
      focusElem.setAttribute("tabindex", "0");
      focusElem.focus();
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
  }

  private closeFilterItems(): void {
    this.searchValue = "";
    this.resetRenderItemsList();
  }

  private toggleComboBox(): void {
    this.isopen = !this.isopen;
    this.focusedItemId = "";
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
        aria-expanded={this.isopen ? "true" : "false"}
      >
        <p class="body-3">
          {this.label}
          <span>{this.selectedCounter > 0 && ` (${this.selectedCounter})`}</span>
        </p>
        <z-icon
          name="caret-down"
          class={this.size}
        />
      </div>
    );
  }

  private renderContent(): HTMLDivElement {
    if (!this.isopen) {
      return;
    }

    return (
      <div
        class="open-combo-data"
        {...(!this.hassearch ? this.getComboboxA11yAttributes() : null)}
      >
        {this.hassearch && this.renderSearchInput()}
        <div
          role="listbox"
          aria-multiselectable={true}
        >
          {this.hascheckall && this.renderCheckAll()}
          {this.renderItems()}
        </div>
      </div>
    );
  }

  private renderItems(): HTMLDivElement {
    return (
      <div class={this.searchValue && "search"}>
        {this.renderList(this.renderItemsList)}
        {this.searchValue && this.renderCloseButton()}
      </div>
    );
  }

  private renderItem(item: ComboItem, index: number, length: number): ZMyzListItem {
    return (
      <z-list-element
        id={item.id}
        htmlTabindex={null}
        dividerType={index !== length - 1 ? ListDividerType.ELEMENT : ListDividerType.NONE}
        size={this.getControlToListSize()}
        role="option"
        aria-selected={item.checked ? "true" : "false"}
      >
        <z-input
          innerTabIndex={this.setInputTabIndex(item.id, index)}
          type={InputType.CHECKBOX}
          checked={item.checked}
          htmlid={this.getItemId(item)}
          label={item.name}
          class={this.getCheckboxClass()}
          disabled={!item.checked && this.maxcheckableitems && this.maxcheckableitems === this.selectedCounter}
          size={this.size === ControlSize.X_SMALL ? ControlSize.SMALL : this.size}
          onKeyDown={(e: KeyboardEvent) => this.handleSelectArrowsNavigation(e, index)}
          onInputCheck={(e: CustomEvent) => {
            this.itemsList = this.itemsList.map((i: ComboItem) => {
              if (item.id === i.id) {
                i.checked = e.detail.checked;
              }

              return i;
            });
            this.updateRenderItemsList();
            this.emitComboboxChange();
          }}
        />
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
      <ul id={`${this.inputid}_list`}>
        {items.map((item, i) => {
          return this.renderItem(item, i, items.length);
        })}
      </ul>
    );
  }

  private renderGroups(items: ComboItem[]): HTMLUListElement {
    const newData = items.reduce((group, item, index) => {
      const {category} = item;
      const zListItem = this.renderItem(item, index, items.length);

      group[category] = group[category] ?? [];
      group[category].push(zListItem);

      return group;
    }, {});

    const listGroups = Object.entries(newData as {[key: string]: HTMLZListElementElement[]}).map(([key, value]) => {
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

    return <ul>{listGroups}</ul>;
  }

  private renderNoSearchResults(): HTMLUListElement {
    return (
      <ul>
        <z-myz-list-item
          id="no-results"
          text={this.noresultslabel}
          listitemid="no-results"
          icon="multiply-circle"
          class={this.size}
        />
      </ul>
    );
  }

  private renderCloseButton(): HTMLDivElement {
    return (
      <div>
        <a
          onClick={() => this.closeFilterItems()}
          onKeyUp={(e: KeyboardEvent) => handleKeyboardSubmit(e, this.closeFilterItems)}
          role="button"
          tabindex={0}
        >
          {this.closesearchtext}
        </a>
      </div>
    );
  }

  private getComboboxA11yAttributes(): Record<string, unknown> {
    return {
      "role": "combobox",
      "aria-expanded": this.isopen ? "true" : "false",
      "aria-activedescendant": this.isopen ? this.focusedItemId : "",
      "aria-controls": `${this.inputid}_list`,
    };
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
        aria-autocomplete="list"
        {...this.getComboboxA11yAttributes()}
        onKeyUp={(e: KeyboardEvent) => {
          if (e.key === KeyboardCode.ESC) {
            this.closeFilterItems();
          }
        }}
        onInputChange={(e: CustomEvent) => {
          this.searchValue = e.detail.value;
        }}
      />
    );
  }

  private renderCheckAll(): HTMLDivElement {
    if (this.searchValue) {
      return;
    }

    const allChecked = this.selectedCounter === this.itemsList.length;

    return (
      <div
        class="check-all-wrapper"
        role="option"
      >
        <z-input
          type={InputType.CHECKBOX}
          checked={allChecked}
          htmlid={this.getCheckAllId()}
          class={this.getCheckboxClass()}
          label={allChecked ? this.uncheckalltext : this.checkalltext}
          disabled={this.hasCheckAllDisabled()}
          size={this.size === ControlSize.X_SMALL ? ControlSize.SMALL : this.size}
          onKeyDown={(e: KeyboardEvent) => this.handleSelectArrowsNavigation(e, -1)}
          onInputCheck={(e: CustomEvent) => {
            this.checkAll(e.detail.checked);
          }}
        />
      </div>
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
