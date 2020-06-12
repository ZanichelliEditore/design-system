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

  renderScroll(direction: "left" | "right", dimension: number) {
    let disabled = false,
      nextSlide = this.currentSlide;

    if (direction === "left") {
      disabled = this.currentSlide === 0;
      nextSlide--;
    } else if (direction === "right") {
      disabled = this.currentSlide === this.links.length - 1;
      nextSlide++;
    }

    return (
      <z-icon
        class={`scroll ${direction} ${disabled && "disabled"}`}
        width={dimension}
        height={dimension}
        name={`chevron-${direction}`}
        role="button"
        onClick={() => {
          !disabled && this.setCurrentSlide(nextSlide);
        }}
      />
    );
  }

  renderSlideshowMain() {
    return (
      <main>
        {this.renderScroll("left", 40)}
        <div class="mainContainer">{this.renderCurrentSlide(this.links)}</div>
        {this.renderScroll("right", 40)}
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
