import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'z-modal',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZModal {
  @Prop() modalid: string;
  @Prop() modaltitle?: string;
  @Prop() modalsubtitle?: string;

  @Event() modalClose: EventEmitter;
  emitModalClose() {
    this.modalClose.emit({ modalid: this.modalid });
  }

  render() {
    return (
      <div data-action="modalBackground" data-modal={this.modalid}>
        <div id={this.modalid}>
          <header>
            <div>
              <h1>{this.modaltitle}</h1>
              <h2>{this.modalsubtitle}</h2>
            </div>
            <z-icon
              name="circle-cross-fill" width={24} height={24}
              data-action="modalClose" data-modal={this.modalid}
              onClick={() => this.emitModalClose()}
            />
          </header>
          <main>
            <slot name="modalContent" />
          </main>
          <div class="bottomBackground" data-action="modalBackground" data-modal={this.modalid} />
        </div>
      </div>
    );
  }
}
