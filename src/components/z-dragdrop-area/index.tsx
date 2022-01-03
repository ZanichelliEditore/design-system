import { Component, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "z-dragdrop-area",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZDragdropArea {
  /** Emitted when user drop one or more files */
  @Event() fileDropped: EventEmitter;
  fileDroppedHandler(files: FileList) {
    this.fileDropped.emit(files);
  }

  private dragDropContainer: HTMLDivElement;

  renderOnDragOverMessage() {
    return (
      <div class="dragover-container">
        <div class="dragover-message">
          <z-body variant="semibold" level={2}>
            Rilascia il file in questa area per allegarlo
          </z-body>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div
        ref={(val) => (this.dragDropContainer = val)}
        class="dragdrop"
        onDragOver={(e) => {
          e.preventDefault();
          this.dragDropContainer.classList.add("dragover");
        }}
        onDragLeave={() => {
          this.dragDropContainer.classList.remove("dragover");
        }}
        onDragEnd={() => {}}
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
