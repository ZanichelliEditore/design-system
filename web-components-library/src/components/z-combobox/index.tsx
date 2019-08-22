import { Component, Prop, h, State, Listen } from "@stencil/core";
import { ComboItemBean } from "../../beans";
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
  @Prop() searchitems?: ComboItemBean[] | string;

  @State() isOpen: boolean = true;
  @State() searchValue: string;
  @State() searchItemsList: ComboItemBean[] = [];

  @Listen('click', { target: 'window' })
  handleClick(ev) {

    if(ev.srcElement.inputid !== this.inputid) {
      this.closeFilterItems();
    };
  }

  private itemsList: ComboItemBean[];
  private selectedCounter: number;

  componentWillRender() {
    this.itemsList =
      typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    this.selectedCounter = this.itemsList.filter(item => {
      return item.checked;
    }).length;

    if (this.searchitems) {
      this.searchItemsList =
        typeof this.searchitems === "string"
          ? JSON.parse(this.searchitems)
          : this.searchitems;
    }
  }

  filterItems(value: string): void {
    if (!value) return this.closeFilterItems();

    this.searchValue = value;

    this.searchItemsList = this.itemsList.filter(item => {
      item.name = item.name.replace(value, value.bold());
      return item.name.includes(value);
    });
  }

  closeFilterItems() {
    this.searchValue = '';
    this.searchitems = '';
    this.searchItemsList = [];
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

    const items: ComboItemBean[] = this.searchValue ? this.searchItemsList : this.itemsList;

    return (
      <div class={this.searchValue && "search"}>
        {items.length ? this.renderList(items): this.renderNoSearchResults()}
        {this.searchValue ? (<a onClick={() => { this.closeFilterItems(); }}>CHIUDI</a>) : null}
      </div>
    );
  }
  renderNoSearchResults() {
    return (
      <ul>
          <z-list-item
            id='no-results'
            text='non ci sono risultati'
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
        type="search"
        value={this.searchValue}
        onInputChange={(e: CustomEvent) => {
          this.filterItems(e.detail.value);
        }}
        onInputSearch={(e: CustomEvent) => {
          this.filterItems(e.detail.value);
        }}
      />
    );
  }

  render() {
    return (
      <div class={this.isOpen && "open"}>
        {this.renderHeader()}
        {this.hassearch && this.renderSearchInput()}
        {this.renderItems()}
      </div>
    );
  }
}
