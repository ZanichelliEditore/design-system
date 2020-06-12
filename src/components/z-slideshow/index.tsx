import { Component, Prop, h, State } from "@stencil/core";

@Component({
  tag: "z-slideshow",
  styleUrl: "styles.css",
  shadow: true
})
export class ZSlideshow {
  @Prop() slideshowid: string;
  /** JSON stringified link url images */
  @Prop() data?: string = "";
  @State() currentSlide: number = 0;

  private links: string[];
  private iconWidth = 40;
  private iconHeight = 40;

  componentWillLoad() {
    this.links = this.data ? JSON.parse(this.data) : [];
  }

  setCurrentSlide(index: number) {
    this.currentSlide = index;
  }

  renderCurrentSlide(items) {
    const index = Object.keys(items).find(
      i => parseInt(i) === this.currentSlide
    );
    if (index) {
      return (
        <div class="slide fade" data-anchor={parseInt(index) - 1}>
          <img src={items[index]} />
        </div>
      );
    }
  }

  renderSlideshowMain() {
    return (
      <main>
        <z-icon
          class="scrollLeft"
          width={this.iconWidth}
          height={this.iconHeight}
          name="chevron-left"
          role="button"
        />
        <div class="mainContainer">{this.renderCurrentSlide(this.links)}</div>
        <z-icon
          class="scrollRight"
          width={this.iconWidth}
          height={this.iconHeight}
          name="chevron-right"
          role="button"
        />
      </main>
    );
  }

  renderSlideshowFooter() {
    return (
      <footer>
        <div class="footerLeft">
          <slot name="footerLeft" />
        </div>
        <div class="footerCenter">
          <div class="bulletContainer">
            {Object.keys(this.links).map(i => (
              <div
                id={"bullet" + i}
                class={`bullet ${this.currentSlide === parseInt(i) &&
                  "selected"}`}
                data-anchor={i}
                onClick={() => {
                  this.setCurrentSlide(parseInt(i));
                }}
              ></div>
            ))}
          </div>
        </div>
        <div class="footerRight">
          <slot name="footerRight" />
        </div>
      </footer>
    );
  }

  render() {
    return (
      <div id={this.slideshowid}>
        {this.renderSlideshowMain()}
        {this.renderSlideshowFooter()}
      </div>
    );
  }
}
