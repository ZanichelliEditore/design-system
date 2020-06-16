import { Component, Prop, h, State, Element, Watch } from "@stencil/core";
import { getDevice } from "../../utils/utils";

@Component({
  tag: "z-slideshow",
  styleUrl: "styles.css",
  shadow: true
})
export class ZSlideshow {
  @Prop() slideshowid: string;
  /** JSON stringified link url images */
  @Prop() data?: string = "";
  @State() device: "mobile" | "tablet" | "desktop";
  @State() currentSlide: number = 0;

  private links: string[];

  @Element() el: HTMLElement;

  refSlides: HTMLElement = null;
  width = 0;

  @Watch("data")
  watchData() {
    this.parseLinks();
    this.initSlider();
  }

  componentWillLoad() {
    this.parseLinks();
  }

  componentDidLoad() {
    this.initSlider();
  }

  parseLinks() {
    this.links = this.data ? JSON.parse(this.data) : [];
  }

  initSlider() {
    this.refSlides = this.el.shadowRoot.getElementById("slides");
    window.addEventListener("resize", this.setDevice.bind(this));
    this.setDevice();
  }

  setWidth() {
    this.width = this.el.offsetWidth;
    const fullwidth = this.width * this.links.length;
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

  setDevice() {
    this.device = getDevice();
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

  renderScroll(direction: "left" | "right") {
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
        // href={!disabled ? this.anchorPrefix + nextSlide : "#"}
        onClick={() => {
          !disabled && this.setCurrentSlide(nextSlide);
        }}
      >
        <z-icon
          class={`scroll ${direction} ${disabled && "disabled"}`}
          width={
            this.device === "mobile" ? 24 : this.device === "tablet" ? 32 : 40
          }
          height={
            this.device === "mobile" ? 24 : this.device === "tablet" ? 32 : 40
          }
          name={`circle-chevron-${direction}`}
        />
      </a>
    );
  }

  renderSlideshowMain() {
    return (
      <main>
        {this.renderScroll("left")}
        {this.renderSlides(this.links)}
        {this.renderScroll("right")}
      </main>
    );
  }

  renderBullet(i: number) {
    return (
      <a
        class={`bullet ${this.currentSlide === i && "selected"}`}
        onClick={() => {
          this.setCurrentSlide(i);
        }}
      ></a>
    );
  }

  renderSlideshowFooterMobile() {
    return (
      <footer>
        <div class="bulletContainer">
          {Object.keys(this.links).map(i => this.renderBullet(parseInt(i)))}
        </div>
        <div class="subfooter">
          <div class="footerLeft">
            <slot name="footerLeft" />
          </div>
          <div class="footerRight">
            <slot name="footerRight" />
          </div>
        </div>
      </footer>
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
