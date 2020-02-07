import { Component, Prop, h, State, Listen } from "@stencil/core";
import { ComboItemBean, InputTypeBean, InputTypeEnum } from "../../beans";
import { ZInputText } from "../z-input-text";
import { handleKeyboardSubmit } from "../../utils/utils";

@Component({
  tag: "z-combobox",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCombobox {
  @Prop() inputid: string;
  @Prop() items: ComboItemBean[] | string;
  @Prop() label: string;
  @Prop() hassearch?: boolean = false;
  @Prop() searchlabel?: string;
  @Prop() searchplaceholder?: string;
  @Prop() searchtitle?: string;
  @Prop() noresultslabel: string;
  @Prop({ mutable: true }) isopen: boolean = true;
  @Prop() isfixed: boolean = false;

  @State() searchValue: string;

  constructor() {
    this.closeComboBox = this.closeComboBox.bind(this);
  }

  @Listen("click", { target: "window" })
  handleClick(ev) {
    if (ev.srcElement.inputid !== this.inputid) {
      this.closeFilterItems();
    }
  }

  private itemsList: ComboItemBean[] = [];
  private selectedCounter: number;
  private inputType: InputTypeBean = InputTypeEnum.text;

  componentWillRender() {
    this.itemsList =
      typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    this.selectedCounter = this.itemsList.filter(item => item.checked).length;

    if (this.searchValue) {
      this.filterItems(this.searchValue);
    }
  }

  filterItems(value: string): void {
    if (!value) return this.closeFilterItems();

    this.searchValue = value;

    this.itemsList = this.itemsList.filter(item => {
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

  closeFilterItems() {
    this.searchValue = "";
  }
  closeComboBox() {
    this.isopen = !this.isopen;
  }

  renderHeader(): HTMLHeadingElement {
    return (
      <header
        onClick={() => this.closeComboBox()}
        onKeyPress={(ev: KeyboardEvent) =>
          handleKeyboardSubmit(ev, this.closeComboBox)
        }
        tabindex="0"
      >
        <h2>
          {this.label}
          <span>
            {this.selectedCounter > 0 && ` (${this.selectedCounter})`}
          </span>
        </h2>
        <z-icon name="drop-down" width={18} height={18} />
      </header>
    );
  }

  renderContent(): HTMLDivElement {
    if (!this.isopen) return;

    return (
      <div class="openComboData">
        {this.hassearch && this.renderSearchInput()}
        {this.renderItems()}
      </div>
    );
  }

  renderItems(): HTMLDivElement {
    if (!this.isopen) return;

    return (
      <div class={this.searchValue && "search"}>
        {this.itemsList.length
          ? this.renderList(this.itemsList)
          : this.renderNoSearchResults()}
        {this.searchValue ? (
          <a onClick={() => this.closeFilterItems()}>CHIUDI</a>
        ) : null}
      </div>
    );
  }
  renderNoSearchResults() {
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

  renderList(items: ComboItemBean[]): HTMLUListElement {
    return (
      <ul>
        {items.map((item, i) => {
          return (
            <z-list-item
              id={item.id}
              text={item.name}
              listitemid={item.id}
              icon={item.checked ? "checkbox-selected" : "checkbox-unchecked"}
              action={`combo-li-${this.inputid}`}
              underlined={i === items.length - 1 ? false : true}
              tabindex="0"
            />
          );
        })}
      </ul>
    );
  }

  renderSearchInput(): ZInputText {
    if (!this.isopen) return;

    return (
      <z-input-text
        inputid={`${this.inputid}_search`}
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

  render() {
    return (
      <div data-action={`combo-${this.inputid}`}
        class={`${this.isopen && "open"} ${this.isfixed && "fixed"}`}
        id={this.inputid}
      >
        {this.renderHeader()}
        {this.renderContent()}
      </div>
    );
  }
}
