import {Component, Prop, h, State, Listen, Watch, Event, EventEmitter} from "@stencil/core";
import {ComboItem, InputType, KeyboardKeyCode, ListDividerType, ControlSize} from "../../../beans";
import {ZInput} from "../z-input";
import {handleKeyboardSubmit} from "../../../utils/utils";
import {ZMyzListItem} from "../../../snowflakes/myz/list/z-myz-list-item";

@Component({
  tag: "z-combobox",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZCombobox {
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

  @Listen("inputCheck")
  inputCheckListener(e: CustomEvent): void {
    const id = e.detail.id.replace(`combo-checkbox-${this.inputid}-`, "");

    if (id === "check-all" && (!this.maxcheckableitems || this.maxcheckableitems >= this.itemsList.length)) {
      return this.checkAll(e.detail.checked);
    }

    this.itemsList = this.itemsList.map((item: ComboItem) => {
      if (item.id === id) {
        item.checked = e.detail.checked;
      }

      return item;
    });
    this.updateRenderItemsList();
    this.emitComboboxChange();
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
        item.name.substring(start, end).bold() +
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
  }

  private renderHeader(): HTMLDivElement {
    return (
      <div
        class="header"
        onClick={() => this.toggleComboBox()}
        onKeyDown={(ev: KeyboardEvent) => {
          if (ev.keyCode === KeyboardKeyCode.SPACE) {
            ev.preventDefault();
          }
        }}
        onKeyUp={(ev: KeyboardEvent) => handleKeyboardSubmit(ev, this.toggleComboBox)}
        role="button"
        tabindex={0}
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
      <div class="open-combo-data">
        {this.hassearch && this.renderSearchInput()}
        {this.hascheckall && this.renderCheckAll()}
        {this.renderItems()}
      </div>
    );
  }

  private renderItems(): HTMLDivElement {
    if (!this.isopen) {
      return;
    }

    return (
      <div
        class={this.searchValue && "search"}
        tabindex={-1}
      >
        {this.renderList(this.renderItemsList)}
        {this.searchValue && this.renderCloseButton()}
      </div>
    );
  }

  private renderItem(item: ComboItem, index: number, length: number): ZMyzListItem {
    return (
      <z-myz-list-item
        id={item.id}
        listitemid={item.id}
        action={`combo-li-${this.inputid}`}
        underlined={index !== length - 1}
        class={this.size}
      >
        <z-input
          type={InputType.CHECKBOX}
          checked={item.checked}
          htmlid={`combo-checkbox-${this.inputid}-${item.id}`}
          label={item.name}
          disabled={!item.checked && this.maxcheckableitems && this.maxcheckableitems === this.selectedCounter}
          size={this.size === ControlSize.X_SMALL ? ControlSize.SMALL : this.size}
        />
      </z-myz-list-item>
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
      return this.renderGroups(this.itemsList);
    }

    return (
      <ul>
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

  private renderSearchInput(): ZInput {
    if (!this.isopen) {
      return;
    }

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
        onInputChange={(e: CustomEvent) => {
          if (e.detail.keycode === 27) {
            return this.closeFilterItems();
          }
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
      <div class="check-all-wrapper">
        <z-input
          type={InputType.CHECKBOX}
          checked={allChecked}
          htmlid={`combo-checkbox-${this.inputid}-check-all`}
          label={allChecked ? this.uncheckalltext : this.checkalltext}
          disabled={this.maxcheckableitems && this.maxcheckableitems < this.itemsList.length}
          size={this.size === ControlSize.X_SMALL ? ControlSize.SMALL : this.size}
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
