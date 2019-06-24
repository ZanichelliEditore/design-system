import {Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'z-button',
  styleUrls: ['../../global-styles.css', './styles.css'],
  shadow: true
})
export class ZButton {
  @Prop() label: string;
  @Prop() hasIcon: boolean;
  @Prop() isPrimary: boolean;
  @Prop() action?: Function;

  render() {
    const isPrimary = this.isPrimary;

    return (
      <button class={isPrimary ? 'primary' : 'secondary'}>
        {this.hasIcon && <icon />}
        {this.label}
      </button>
    );
  }
}
