import {
  Component,
  Prop,
  h,
  State,
  Listen,
  Watch,
  Event,
  EventEmitter
} from "@stencil/core";
import {
  ComboItemBean,
  InputTypeBean,
  InputTypeEnum,
  keybordKeyCodeEnum
} from "../../beans";
import { ZInput } from "../z-input";
import { handleKeyboardSubmit } from "../../utils/utils";

@Component({
  tag: "z-combobox",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCombobox {
  /** input unique id */
  @Prop() inputid: string;
  /** list items array */
  @Prop() items: ComboItemBean[] | string;
  /** label text */
  @Prop() label: string;
  /** show search input flag (optional) */
  @Prop() hassearch?: boolean = false;
  /** search input label text (optional) */
  @Prop() searchlabel?: string;
  /** search input placeholder text (optional) */
  @Prop() searchplaceholder?: string;
  /** search input title text (optional) */
  @Prop() searchtitle?: string;
  /** no result text message */
  @Prop() noresultslabel?: string = "Nessun risultato";
  /** toggle combo list opening flag */
  @Prop({ mutable: true }) isopen: boolean = true;
  /** fixed style flag */
  @Prop() isfixed: boolean = false;
  /** close combobox list text */
  @Prop() closesearchtext?: string = "Chiudi";
  /** show "check all" checkbox (optional) */
  @Prop() hascheckall?: boolean = false;
  /** check all label (optional) */
  @Prop() checkalllabel?: string = "Seleziona tutti";
  /** uncheck all label (optional) */
  @Prop() uncheckalllabel?: string = "Deseleziona tutti";

  // TODO: num max items

  @State() searchValue: string;
  @State() selectedCounter: number;
  @State() renderItemsList: ComboItemBean[] = []; // used for render only

  private itemsList: ComboItemBean[] = [];
  private inputType: InputTypeBean = InputTypeEnum.text;

  @Watch("items")
  watchItems() {
    console.log("watchItems");
    this.itemsList =
      typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    this.selectedCounter = this.itemsList.filter(item => item.checked).length;
    this.resetRenderItemsList();
  }

  @Listen("inputCheck")
  inputCheckListener(e: CustomEvent) {
    console.log("inputCheckListener", e.detail);
    const id = e.detail.id.replace(`combo-checkbox-${this.inputid}-`, "");

    if (id === "check-all") return this.checkAll(e.detail.checked);

    this.itemsList = this.itemsList.map((item: ComboItemBean) => {
      if (item.id === id) item.checked = e.detail.checked;
      return item;
    });
    this.resetRenderItemsList();
    this.emitComboboxChange();
  }

  /** Emitted when value is checked/unchecked. Returns id, items. */
  @Event() comboboxChange: EventEmitter;
  emitComboboxChange() {
    console.log("emitComboboxChange", this.itemsList);
    this.comboboxChange.emit({ id: this.inputid, items: this.itemsList });
  }

  constructor() {
    this.closeComboBox = this.closeComboBox.bind(this);
    this.closeFilterItems = this.closeFilterItems.bind(this);
  }

  componentWillLoad() {
    this.watchItems();
  }

  componentWillRender() {
    console.log("componentWillRender", this.itemsList);
    this.selectedCounter = this.itemsList.filter(item => item.checked).length;
    if (this.searchValue) {
      this.filterItems(this.searchValue);
    }
  }

  resetRenderItemsList(): void {
    console.log("resetRenderItemsList", this.itemsList);
    this.renderItemsList = [];
    this.itemsList.forEach((item: any) => {
      this.renderItemsList.push({ ...item });
    });
  }

  filterItems(value: string): void {
    if (!value) return this.closeFilterItems();

    this.searchValue = value;

    this.resetRenderItemsList();
    this.renderItemsList = this.renderItemsList.filter(item => {
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

  checkAll(checked = true): void {
    console.log("select all", this.itemsList);
    this.itemsList = this.itemsList.map((item: ComboItemBean) => ({
      ...item,
      checked: checked
    }));
    console.log(this.itemsList);
    this.resetRenderItemsList();
    this.emitComboboxChange();
  }

  closeFilterItems(): void {
    this.searchValue = "";
    this.resetRenderItemsList();
  }

  closeComboBox(): void {
    this.isopen = !this.isopen;
  }

  renderHeader(): HTMLDivElement {
    return (
      <div
        class="header"
        onClick={() => this.closeComboBox()}
        onKeyDown={(ev: KeyboardEvent) => {
          if (ev.keyCode === keybordKeyCodeEnum.SPACE) ev.preventDefault();
        }}
        onKeyUp={(ev: KeyboardEvent) =>
          handleKeyboardSubmit(ev, this.closeComboBox)
        }
        role="button"
        tabindex={0}
      >
        <h2>
          {this.label}
          <span>
            {this.selectedCounter > 0 && ` (${this.selectedCounter})`}
          </span>
        </h2>
        <z-icon name="drop-down" width={18} height={18} />
      </div>
    );
  }

  renderContent(): HTMLDivElement | undefined {
    if (!this.isopen) return;

    return (
      <div class="openComboData">
        {this.hassearch && this.renderSearchInput()}
        {this.hascheckall && this.renderCheckAll()}
        {this.renderItems()}
      </div>
    );
  }

  renderItems(): HTMLDivElement | undefined {
    if (!this.isopen) return;

    return (
      <div class={this.searchValue && "search"} tabindex={-1}>
        {this.renderList(this.renderItemsList)}
        {this.searchValue && this.renderCloseButton()}
      </div>
    );
  }

  renderList(items: ComboItemBean[]): HTMLUListElement | undefined {
    if (!items) return;
    if (!items.length && this.searchValue) return this.renderNoSearchResults();

    return (
      <ul>
        {items.map((item, i) => {
          return (
            <z-list-item
              id={item.id}
              listitemid={item.id}
              action={`combo-li-${this.inputid}`}
              underlined={i === items.length - 1 ? false : true}
            >
              <z-input
                type={InputTypeEnum.checkbox}
                checked={item.checked}
                htmlid={`combo-checkbox-${this.inputid}-${item.id}`}
                label={item.name}
              />
            </z-list-item>
          );
        })}
      </ul>
    );
  }

  renderNoSearchResults(): HTMLUListElement {
    return (
      <ul>
        <z-list-item
          id="no-results"
          text={this.noresultslabel}
          listitemid="no-results"
          icon="circle-cross-stroke"
        />
      </ul>
    );
  }

  renderCloseButton(): HTMLDivElement {
    return (
      <div>
        <a
          onClick={() => this.closeFilterItems()}
          onKeyUp={(e: KeyboardEvent) =>
            handleKeyboardSubmit(e, this.closeFilterItems)
          }
          role="button"
          tabindex={0}
        >
          {this.closesearchtext}
        </a>
      </div>
    );
  }

  renderSearchInput(): ZInput | undefined {
    if (!this.isopen) return;

    return (
      <z-input
        htmlid={`${this.inputid}_search`}
        label={this.searchlabel}
        placeholder={this.searchplaceholder}
        htmltitle={this.searchtitle}
        type={this.inputType}
        value={this.searchValue}
        onInputChange={(e: CustomEvent) => {
          if (e.detail.keycode === 27) return this.closeFilterItems();
          this.filterItems(e.detail.value);
        }}
      />
    );
  }

  renderCheckAll() {
    const allChecked = this.selectedCounter === this.itemsList.length;
    return (
      <div class="checkAllWrapper">
        <z-input
          type={InputTypeEnum.checkbox}
          checked={allChecked}
          htmlid={`combo-checkbox-${this.inputid}-check-all`}
          label={allChecked ? this.uncheckalllabel : this.checkalllabel}
        />
      </div>
    );
  }

  render(): HTMLDivElement {
    return (
      <div
        data-action={`combo-${this.inputid}`}
        class={`${this.isopen && "open"} ${this.isfixed && "fixed"}`}
        id={this.inputid}
      >
        {this.renderHeader()}
        {this.renderContent()}
      </div>
    );
  }
}
