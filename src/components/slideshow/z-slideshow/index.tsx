import { Component, Prop, h, State, Element, Watch } from "@stencil/core";

import { DeviceEnum, DeviceType } from "../../../beans";
import {
  getDevice,
  handleKeyboardSubmit,
  convertJson
} from "../../../utils/utils";

/**
 * @slot footer-right - right content slot in footer
 * @slot footer-left - left content slot in footer
 */
@Component({
  tag: "z-slideshow",
  styleUrl: "styles.css",
  shadow: true
})
export class ZSlideshow {
  @Element() el: HTMLElement;

  /** slideshow id */
  @Prop() slideshowid: string;
  /** array or JSON stringified images urls */
  @Prop() data: string[] | string;

  @State() device: DeviceType;
  @State() currentSlide: number = 0;

  private links: string[];

  @Watch("data")
  watchData() {
    this.parseLinks();
  }

  componentWillLoad() {
    this.parseLinks();

    this.setDevice();
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  componentDidRender() {
    this.setStyle();
  }

  handleResize() {
    this.setDevice();
    this.setStyle();
  }

  parseLinks() {
    switch (typeof this.data) {
      case "string":
        return (this.links = convertJson(this.data) ?? []);
      default:
        return (this.links = this.data);
    }
  }

  setStyle() {
    const refSlides = this.el.shadowRoot.querySelector(
      "#slides"
    ) as HTMLElement;
    if (!refSlides) return;

    const allImages = this.el.shadowRoot.querySelectorAll(".slide");
    const width = this.el.offsetWidth;
    const fullwidth = width * this.links.length;

    refSlides.style.width = `${fullwidth}px`;
    refSlides.style.transform = `translate(-${width * this.currentSlide}px)`;
    allImages.forEach((item: HTMLElement) => {
      const img = item.querySelector("img");
      img.style.width = `${width}px`;
    });
  }

  setDevice() {
    this.device = getDevice();
  }

  setCurrentSlide(index: number) {
    this.currentSlide = index;
  }

  getBulletDimension(): number {
    switch (this.device) {
      case DeviceEnum.mobile:
        return 24;
      case DeviceEnum.tablet:
        return 32;
      default:
        return 40;
    }
  }

  renderSlides(items: string[]): HTMLElement {
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

  renderScroll(direction: "left" | "right"): HTMLZIconElement {
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
        width={this.getBulletDimension()}
        height={this.getBulletDimension()}
        name={`circle-chevron-${direction}`}
        onClick={() => {
          !disabled && this.setCurrentSlide(nextSlide);
        }}
        onKeyUp={(e: KeyboardEvent) =>
          !disabled &&
          handleKeyboardSubmit(e, () => {
            this.setCurrentSlide(nextSlide);
          })
        }
        tabindex={0}
        role="button"
      />
    );
  }

  renderSlideshowMain(): HTMLElement {
    return (
      <main>
        {this.renderScroll("left")}
        {this.renderSlides(this.links)}
        {this.renderScroll("right")}
      </main>
    );
  }

  renderBullet(i: number): HTMLElement {
    return (
      <a
        class={`bullet ${this.currentSlide === i && "selected"}`}
        onClick={() => this.setCurrentSlide(i)}
        onKeyUp={(e: KeyboardEvent) =>
          handleKeyboardSubmit(e, () => this.setCurrentSlide(i))
        }
        tabindex={0}
        role="button"
      ></a>
    );
  }

  renderSlideshowFooter(): HTMLElement {
    return (
      <footer>
        <div class="footerLeft">
          <slot name="footer-left" />
        </div>
        <div class="footerCenter">
          <div class="bulletContainer">
            {Object.keys(this.links).map(i => this.renderBullet(parseInt(i)))}
          </div>
        </div>
        <div class="footerRight">
          <slot name="footer-right" />
        </div>
      </footer>
    );
  }

  render(): HTMLElement {
    if (!this.links || !this.links.length) return <div />;

    return (
      <div id={this.slideshowid}>
        {this.renderSlideshowMain()}
        {this.renderSlideshowFooter()}
      </div>
    );
  }
}
