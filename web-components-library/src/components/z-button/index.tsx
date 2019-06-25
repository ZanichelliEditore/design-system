import {Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'z-button',
  styleUrls: ['../../global-styles.css', './styles.css'],
  shadow: true
})
export class ZButton {
  @Prop() label: string;
  @Prop() hasIcon: boolean;
  @Prop() isPrimary: boolean = true;
  @Prop() isDisabled: boolean = false;
  @Prop() action?: Function;

  render() {
    const isPrimary = this.isPrimary;
    const isDisabled = this.isDisabled;

    var className = isPrimary ? 'primary' : 'secondary';
    className += isDisabled ? ' disabled' : '';

    return (
      <button class={className}>
        {this.hasIcon && <span class="icon"/>}
        {this.label}
      </button>
    );
  }
}
