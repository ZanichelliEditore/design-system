import {Component, Prop, h, State, Listen, Watch, Event, EventEmitter} from "@stencil/core";
import {ComboItem, InputType, KeyboardKeyCode} from "../../../beans";
import {ZInput} from "../z-input";
import {handleKeyboardSubmit} from "../../../utils/utils";

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
    if (this.searchValue) {
      this.filterItems(this.searchValue);
    } else {
      this.resetRenderItemsList();
    }
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
    this.resetRenderItemsList();
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
    if (this.searchValue) {
      this.filterItems(this.searchValue);
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

    this.searchValue = value;

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
        <z-body
          level={3}
          component="p"
        >
          {this.label}
          <span>{this.selectedCounter > 0 && ` (${this.selectedCounter})`}</span>
        </z-body>
        <z-icon
          name="caret-down"
          width={18}
          height={18}
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

  private renderList(items: ComboItem[]): HTMLUListElement {
    if (!items) {
      return;
    }
    if (!items.length && this.searchValue) {
      return this.renderNoSearchResults();
    }

    return (
      <ul>
        {items.map((item, i) => {
          return (
            <z-myz-list-item
              id={item.id}
              listitemid={item.id}
              action={`combo-li-${this.inputid}`}
              underlined={i !== items.length - 1}
            >
              <z-input
                type={InputType.CHECKBOX}
                checked={item.checked}
                htmlid={`combo-checkbox-${this.inputid}-${item.id}`}
                label={item.name}
                disabled={!item.checked && this.maxcheckableitems && this.maxcheckableitems === this.selectedCounter}
              />
            </z-myz-list-item>
          );
        })}
      </ul>
    );
  }

  private renderNoSearchResults(): HTMLUListElement {
    return (
      <ul>
        <z-myz-list-item
          id="no-results"
          text={this.noresultslabel}
          listitemid="no-results"
          icon="multiply-circle"
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
        onInputChange={(e: CustomEvent) => {
          if (e.detail.keycode === 27) {
            return this.closeFilterItems();
          }
          this.filterItems(e.detail.value);
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
        />
      </div>
    );
  }

  render(): HTMLDivElement {
    return (
      <div
        data-action={`combo-${this.inputid}`}
        class={{open: this.isopen, fixed: this.isfixed}}
        id={this.inputid}
      >
        {this.renderHeader()}
        {this.renderContent()}
      </div>
    );
  }
}
