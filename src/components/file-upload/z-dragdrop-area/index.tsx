import {Component, Event, EventEmitter, Host, Prop, State, h} from "@stencil/core";

@Component({
  tag: "z-dragdrop-area",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZDragdropArea {
  /** drag & drop button label */
  @Prop()
  dragAndDropLabel: string;

  /** State that indicates if the user is dragging a file over the drag & drop area */
  @State()
  dragging = false;

  /** Emitted when user drop one or more files */
  @Event()
  fileDropped: EventEmitter;

  private onDrop(e: DragEvent): void {
    e.preventDefault();
    this.dragging = false;
    if (e.dataTransfer.files.length) {
      this.fileDropped.emit(e.dataTransfer.files);
    }
  }

  render(): HTMLZDragdropAreaElement {
    return (
      <Host
        class={{dragover: this.dragging}}
        onDragOver={(e) => {
          e.preventDefault();
          this.dragging = true;
        }}
        onDragLeave={() => {
          this.dragging = false;
        }}
        onDrop={this.onDrop.bind(this)}
      >
        <div class="dragover-container">
          <z-button>{this.dragAndDropLabel}</z-button>
        </div>
        <slot />
      </Host>
    );
  }
}
