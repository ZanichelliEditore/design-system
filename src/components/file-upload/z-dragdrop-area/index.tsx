import {Component, h, Event, EventEmitter} from "@stencil/core";

@Component({
  tag: "z-dragdrop-area",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZDragdropArea {
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
          <z-body
            variant="semibold"
            level={2}
          >
            Rilascia i file in questa area per allegarli.
          </z-body>
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
