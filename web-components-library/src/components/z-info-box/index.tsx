import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'z-info-box',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZInfoBox {
  @Prop() boxid: string;
  @Prop() isclosable: boolean = true;

  @Event() infoBoxClose: EventEmitter;
  emitInfoBoxClose() {
    this.infoBoxClose.emit({ boxid: this.boxid });
  }

  render() {
    return (
      <div>
        <slot name="content" />
        {this.isclosable && <z-icon name="close" onClick={() => this.emitInfoBoxClose()} />}
      </div>
    );
  }
}
