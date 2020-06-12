import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

/**
 * @slot content - set the info box content
 */
@Component({
  tag: 'z-info-box',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZInfoBox {
  /** info box unique id */
  @Prop() boxid: string;
  /** render close icon flag */
  @Prop() isclosable: boolean = true;

  /** emitted on close icon click */
  @Event() infoBoxClose: EventEmitter;
  emitInfoBoxClose() {
    this.infoBoxClose.emit({ boxid: this.boxid });
  }

  render() {
    return (
      <div id={this.boxid}>
        <slot name="content" />
        {this.isclosable && <z-icon name="cross" data-action="infoBoxClose" onClick={() => this.emitInfoBoxClose()} />}
      </div>
    );
  }
}
