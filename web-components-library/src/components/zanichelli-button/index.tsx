import {Component, Prop, h} from '@stencil/core';

import {Wrap} from './styles';

@Component({
  tag: 'zanichelli-button',
  styleUrl: '../../global-styles.css',
})
export class ZanichelliButton {
  @Prop() label: string;
  @Prop() hasicon: boolean;
  @Prop() isprimary: boolean;
  @Prop() action?: Function;

  render() {
    console.log(this.action);

    return (
      <Wrap isprimary={this.isprimary} onClick={() => this.action()}>
        {this.hasicon && <icon />}
        {this.label}
      </Wrap>
    );
  }
}
