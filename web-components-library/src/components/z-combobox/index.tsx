import { Component, Prop, h } from '@stencil/core';
import { ComboItemBean } from '../../beans';

@Component({
  tag: 'z-combobox',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZCombobox {
  @Prop() inputid: string;
  @Prop() items: ComboItemBean[] | string;

  private itemsList: ComboItemBean[];

  componentWillRender() {
    this.itemsList = typeof this.items === 'string' ? JSON.parse(this.items) : this.items;
  }

  render() {
    return (
      <ul>
        <p>{(this.items)}</p>
        <p>{JSON.stringify(this.itemsList)}</p>
        {this.itemsList.map((item) => {
          return (
            <z-list-item text={item.name} listitemid={item.id}
              icon={item.checked ? "checkbox-success-icon-filled" : "checkbox-unchecked-icon"}
            />);
        })}
      </ul>
    );
  }
}
