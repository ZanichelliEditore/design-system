import { Component, Prop, h, Host } from '@stencil/core';
import { ZVisuallyHidden } from '../z-visually-hidden';
import { ZAriaAlertMode } from '../../beans';

@Component({
  tag: 'z-aria-alert',
  shadow: false
})

export class ZAriaAlert {
  @Prop() text: string;
  @Prop() mode: string = ZAriaAlertMode.polite;

  render() {
    return (
      <Host
        aria-live={this.mode === ZAriaAlertMode.assertive ? 'assertive' : 'polite'}
        aria-atomic="true"
        aria-relevant="additions"
      >
        <ZVisuallyHidden>
          {this.text}
        </ZVisuallyHidden>
      </Host>
    );
  }
}
