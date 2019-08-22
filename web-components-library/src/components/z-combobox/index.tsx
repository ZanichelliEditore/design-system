import { Component, Prop, h, State } from '@stencil/core';
import { ComboItemBean } from '../../beans';
import { ZInputText } from '../z-input-text';

@Component({
  tag: 'z-combobox',
  styleUrl: 'styles.css',
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
  @State() searchItemsList: ComboItemBean[] = [];

  private itemsList: ComboItemBean[];
  private selectedCounter: number;

  componentWillRender() {
    this.itemsList = typeof this.items === 'string' ? JSON.parse(this.items) : this.items;
    this.selectedCounter = this.itemsList.filter((item) => { return item.checked; }).length;

    if (this.searchitems) {
      this.searchItemsList = typeof this.searchitems === 'string' ? JSON.parse(this.searchitems) : this.searchitems;
    }
  }

  filterItems(value: string): void {
    this.searchItemsList = this.itemsList.filter((item) => {
      // item.name = item.name.replace(value, value.bold());
      return (item.name.includes(value));
    });
  }

  renderHeader(): HTMLHeadingElement {
    return (
      <header onClick={() => { this.isOpen = !this.isOpen; }}>
        <h2>
          {this.label}
          <span>{this.selectedCounter > 0 && ` (${this.selectedCounter})`}</span>
        </h2>
        <z-icon name="select-icon-stroked" width={18} height={18} />
      </header>
    );
  }

  renderList(items: ComboItemBean[]): HTMLUListElement {
    if (!this.isOpen) return;

    return (
      <ul>
        {items.map((item) => {
          return (
            <z-list-item text={item.name} listitemid={item.id}
              icon={item.checked ? "checkbox-success-icon-filled" : "checkbox-unchecked-icon"}
            />);
        })}
      </ul>
    );
  }

  renderSearchInput(): ZInputText {
    if (!this.isOpen) return;

    return (
      <z-input-text inputid={`${this.inputid}_search`} label={this.searchlabel} placeholder={this.searchplaceholder} type="search"
        onInputChange={(e: CustomEvent) => { this.filterItems(e.detail.value); }}
      />
    );
  }

  renderSearchItems(): HTMLElement {
    if (!this.isOpen) return;
    if (!this.searchItemsList.length) return;

    return (
      <section>
        {this.renderList(this.searchItemsList)}
        <a onClick={() => {
          this.searchitems = '';
          this.searchItemsList = [];
        }}>CHIUDI</a>
      </section>
    );
  }

  render() {
    return (
      <div class={this.isOpen && "open"}>
        {this.renderHeader()}
        {this.hassearch && this.renderSearchInput()}
        {this.hassearch && this.renderSearchItems()}
        {this.renderList(this.itemsList)}
      </div>
    );
  }
}
