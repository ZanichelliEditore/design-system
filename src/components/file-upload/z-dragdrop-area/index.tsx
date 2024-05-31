import {Component, Event, EventEmitter, Prop, h} from "@stencil/core";

@Component({
  tag: "z-dragdrop-area",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZDragdropArea {
  /** drag & drop button label */
  @Prop()
  dragAndDropLabel: string;

  /** Emitted when user drop one or more files */
  @Event()
  fileDropped: EventEmitter;

  private fileDroppedHandler(files: FileList): void {
    this.fileDropped.emit(files);
  }

  private dragDropContainer: HTMLDivElement;

  private renderOnDragOverMessage(): HTMLDivElement {
    return (
      <div class="dragover-container">
        <div class="dragover-message">
          <span class="body-2-sb">{this.dragAndDropLabel}</span>
        </div>
      </div>
    );
  }

  render(): HTMLDivElement {
    return (
      <div
        tabIndex={0}
        ref={(val) => (this.dragDropContainer = val)}
        class="dragdrop"
        onDragOver={(e) => {
          e.preventDefault();
          this.dragDropContainer.classList.add("dragover");
        }}
        onDragLeave={() => {
          this.dragDropContainer.classList.remove("dragover");
        }}
        onDrop={(e) => {
          e.preventDefault();
          if (e.dataTransfer.files.length) {
            this.dragDropContainer.classList.remove("dragover");
            this.fileDroppedHandler(e.dataTransfer.files);
          }
        }}
      >
        {this.renderOnDragOverMessage()}
        <slot />
      </div>
    );
  }
}
