import { Component, Prop, h, EventEmitter, Event, Element } from '@stencil/core';

@Component({
  tag: 'z-file',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZFile {
  @Element() el: HTMLElement;

  @Prop() type: string;

  @Event() removeFile: EventEmitter
  removeFileHandler() {
    this.removeFile.emit();
    this.el.remove();
  }

  render() {
    return (
        <z-chip>
          <div class="chip-content">
            <z-icon name="document-with-text" />
            <slot />
            <z-icon onClick={() => this.removeFileHandler()} name="multiply-circled" height={15} width={15} />
          </div>
        </z-chip>
    );
  }
}
