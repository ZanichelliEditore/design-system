import { Component, Prop, h, State } from '@stencil/core';
import { ComboItemBean } from '../../beans';

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

  @State() isOpen: boolean = true;

  private itemsList: ComboItemBean[];
  private selectedCounter: number;

  componentWillRender() {
    this.itemsList = typeof this.items === 'string' ? JSON.parse(this.items) : this.items;
    this.selectedCounter = this.itemsList.filter((item) => { return item.checked; }).length;
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

  renderList(): HTMLUListElement {
    return (
      <ul>
        {this.itemsList.map((item) => {
          return (
            <z-list-item text={item.name} listitemid={item.id}
              icon={item.checked ? "checkbox-success-icon-filled" : "checkbox-unchecked-icon"}
            />);
        })}
      </ul>
    );
  }

  renderSearchInput() { }

  render() {
    return (
      <div class={this.isOpen && "open"}>
        {this.renderHeader()}
        {this.hassearch && this.renderSearchInput()}
        {this.renderList()}
      </div>
    );
  }
}
