import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'z-input-text',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZInputText {
  @Prop() inputid: string;
  @Prop() label?: string;
  @Prop() placeholder?: string;
  @Prop() type?: string = 'text';

  render() {
    return (
      <div>
        <label>{this.label}</label>
        <input type={this.type} id={this.inputid} name={this.inputid} placeholder={this.placeholder} />
      </div>
    );
  }
}
