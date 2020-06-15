import { Component, Prop, h, State, Element } from "@stencil/core";

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
  anchorPrefix = "#slide";

  @Element() el: HTMLElement;

  refMain: HTMLElement = null;
  refSlides: HTMLElement = null;
  width = 0;

  setWidth() {
    this.width = this.refMain.clientWidth;
    const fullwidth = this.width * (this.links.length + 2);
    this.refSlides.style.width = `${fullwidth}px`;
    this.refSlides.style.transform = `translate(-${this.width *
      this.currentSlide}px)`;
    this.setSlideStyle();
  }

  setSlideStyle() {
    const allImages = this.el.shadowRoot.querySelectorAll(".slide");
    allImages.forEach((item: HTMLElement) => {
      const img = item.getElementsByTagName("img").item(0);
      img.style.width = `${this.width}px`;
    });
  }

  setCurrentSlide(index: number) {
    this.currentSlide = index;
    this.setWidth();
  }

  componentWillLoad() {
    this.links = this.data ? JSON.parse(this.data) : [];
  }

  componentDidLoad() {
    this.refMain = this.el.shadowRoot.getElementById("slide-main");
    this.refSlides = this.el.shadowRoot.getElementById("slides");
    this.setWidth();
  }

  renderSlides(items: string[]) {
    return (
      <div id="slides">
        {items.map((item: string, i: number) => (
          <div
            id={"slide" + i}
            class={`slide ${this.currentSlide !== i && "hide"}`}
          >
            <img src={item} />
          </div>
        ))}
      </div>
    );
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
      <a
        href={!disabled ? this.anchorPrefix + nextSlide : "#"}
        onClick={() => {
          !disabled && this.setCurrentSlide(nextSlide);
        }}
      >
        <z-icon
          class={`scroll ${direction} ${disabled && "disabled"}`}
          width={dimension}
          height={dimension}
          name={`chevron-${direction}`}
        />
      </a>
    );
  }

  renderSlideshowMain() {
    return (
      <main id="slide-main">
        {this.renderScroll("left", 40)}
        {this.renderSlides(this.links)}
        {this.renderScroll("right", 40)}
      </main>
    );
  }

  renderBullet(i: number) {
    return (
      <a
        class={`bullet ${this.currentSlide === i && "selected"}`}
        href={this.anchorPrefix + i}
        onClick={() => {
          this.setCurrentSlide(i);
        }}
      ></a>
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
            {Object.keys(this.links).map(i => this.renderBullet(parseInt(i)))}
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
