import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-pocket",
  styleUrl: "styles.css",
  shadow: true
})
export class ZPocket {
  @Prop() pocketid: string;
  @Prop({ mutable: true }) isopen?: boolean = true;
  @Prop() ismodal?: boolean = false;

  togglePocket() {
    this.isopen = !this.isopen;
  }

  handleBackgroundClick(e: any) {
    if (e.target.dataset.action == "pocketBackground") {
      this.isopen = false;
    }
  }

  render() {
    return (
      <div
        data-action="pocketBackground"
        data-pocket={this.pocketid}
        class={this.ismodal && "modal"}
        onClick={(e: any) => this.handleBackgroundClick(e)}
      >
        <div id={this.pocketid}>
          <header onClick={() => this.togglePocket()}>
            <z-icon
              name={
                this.isopen
                  ? "circle-chevron-down-fill"
                  : "circle-chevron-up-fill"
              }
              width={24}
              height={24}
            />
          </header>
          {this.isopen && (
            <main>
              <slot />
            </main>
          )}
        </div>
      </div>
    );
  }
}
