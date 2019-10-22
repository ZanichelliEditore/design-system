import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { mobileBreakpoint } from "../../constants/breakpoints";

@Component({
  tag: 'z-modal',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZModal {
  @Prop() modalid: string;
  @Prop() modaltitle?: string;
  @Prop() modalsubtitle?: string;
  @Prop() closelabel: string = 'chiudi';

  private isMobile: boolean;

  componentWillLoad() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  @Event() modalClose: EventEmitter;
  emitModalClose() {
    this.modalClose.emit({ modalid: this.modalid });
  }

  renderCloseIcon() {
    if (this.isMobile) {
      return <z-link icon="close" label={this.closelabel.toUpperCase()} data-action="modalClose" data-modal={this.modalid} />
    } else {
      return (
        <z-icon name="circle-cross-fill" width={24} height={24}
          data-action="modalClose" data-modal={this.modalid}
          onClick={() => this.emitModalClose()}
        />
      );
    }
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
            {this.renderCloseIcon()}
          </header>
          <main>
            <slot name="modalContent" />
          </main>
        </div>
      </ div>
    );
  }
}
