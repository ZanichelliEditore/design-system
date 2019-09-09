import { Component, Prop, h, State, Listen } from "@stencil/core";
import { ComboItemBean, InputTypeBean, InputTypeEnum } from "../../beans";
import { ZInputText } from "../z-input-text";

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
  @Prop() noresultslabel: string;

  @State() isOpen: boolean = true;
  @State() searchValue: string;

  @Listen('click', { target: 'window' })
  handleClick(ev) {
    if (ev.srcElement.inputid !== this.inputid) {
      this.closeFilterItems();
    };
  }

  private itemsList: ComboItemBean[] = [];
  private selectedCounter: number;
  private inputType: InputTypeBean = InputTypeEnum.text;

  componentWillRender() {
    this.itemsList = typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    this.selectedCounter = this.itemsList.filter(item => item.checked).length;

    if (this.searchValue) {
      this.filterItems(this.searchValue);
    }
  }

  filterItems(value: string): void {
    if (!value) return this.closeFilterItems();

    this.searchValue = value;

    this.itemsList = this.itemsList.filter(item => {
      item.name = item.name.replace(value, value.bold());
      return item.name.includes(value);
    });
  }

  closeFilterItems() {
    this.searchValue = '';
  }

  renderHeader(): HTMLHeadingElement {
    return (
      <header
        onClick={() => {
          this.isOpen = !this.isOpen;
        }}
      >
        <h2>
          {this.label}
          <span>
            {this.selectedCounter > 0 && ` (${this.selectedCounter})`}
          </span>
        </h2>
        <z-icon name="select-icon-stroked" width={18} height={18} />
      </header>
    );
  }

  renderItems(): HTMLDivElement {
    if (!this.isOpen) return;

    return (
      <div class={this.searchValue && "search"}>
        {this.itemsList.length ? this.renderList(this.itemsList) : this.renderNoSearchResults()}
        {this.searchValue ? (<a onClick={() => this.closeFilterItems()}>CHIUDI</a>) : null}
      </div>
    );
  }
  renderNoSearchResults() {
    return (
      <ul>
        <z-list-item
          id='no-results'
          text={this.noresultslabel}
          listitemid='no-results'
          icon='error-icon-stroked'
        />
      </ul>)
  }

  renderList(items: ComboItemBean[]): HTMLUListElement {
    return (
      <ul>
        {items.map(item => {
          return (
            <z-list-item
              id={item.id}
              text={item.name}
              listitemid={item.id}
              icon={
                item.checked
                  ? "checkbox-success-icon-filled"
                  : "checkbox-unchecked-icon"
              }
              action={`combo-li-${this.inputid}`}
            />
          );
        })}
      </ul>
    );
  }

  renderSearchInput(): ZInputText {
    if (!this.isOpen) return;

    return (
      <z-input-text
        inputid={`${this.inputid}_search`}
        label={this.searchlabel}
        placeholder={this.searchplaceholder}
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
      <div class={this.isOpen && "open"} id={this.inputid}>
        {this.renderHeader()}
        {this.hassearch && this.renderSearchInput()}
        {this.renderItems()}
      </div>
    );
  }
}
