import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { InputTypeBean } from "../../beans";


@Component({
  tag: 'z-input-text',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZInputText {
  @Prop() inputid: string;
  @Prop() label?: string;
  @Prop() value?: string;
  @Prop() placeholder?: string;
  @Prop() type?: InputTypeBean

  @Event() inputChange: EventEmitter;
  emitInputChange(value: string, keycode: number) {
    this.value = value;
    this.inputChange.emit({ value, keycode });
  }

  render() {
    return (
      <div>
        <label>{this.label}</label>
        <input
          type={this.type}
          id={this.inputid}
          name={this.inputid}
          placeholder={this.placeholder}
          value={this.value}
          onKeyUp={(e: any) => { this.emitInputChange(e.target.value, e.keyCode) }}
        />
        {this.value ? <z-icon name="close" onClick={(e: any) => this.emitInputChange('', e.keyCode)} /> : null}
      </div>
    );
  }
}
