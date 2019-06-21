import {Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'z-card-icon',
  styleUrls: ['../../global-styles.css', 'z-card-icon.css'],
  shadow: true
})

export class ZCardIcon {
@Prop() icon: string;

  render() {
    return (
      <span>
        <img src={this.icon} />
      </span>
    );
  }
}
