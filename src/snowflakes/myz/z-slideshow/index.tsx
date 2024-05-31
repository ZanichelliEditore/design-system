import {Component, Element, Prop, State, Watch, h} from "@stencil/core";
import {Device} from "../../../beans";
import {convertJson, getDevice, handleKeyboardSubmit} from "../../../utils/utils";

/**
 * Check if data is an array of strings.
 * @param {unknown} data Data to check
 * @returns {boolean}
 */
function isStringArray(data: unknown): data is string[] {
  return Array.isArray(data) && data.every((datum: unknown): datum is string => typeof datum === "string");
}

/**
 * @slot footer-right - right content slot in footer
 * @slot footer-left - left content slot in footer
 */
@Component({
  tag: "z-slideshow",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZSlideshow {
  @Element() el: HTMLZSlideshowElement;

  /** slideshow id */
  @Prop()
  slideshowid: string;

  /** array or JSON stringified images urls */
  @Prop()
  data: string[] | string;

  @State()
  device: Device;

  @State()
  currentSlide = 0;

  private links: string[];

  @Watch("data")
  watchData(): void {
    this.parseLinks();
  }

  componentWillLoad(): void {
    this.parseLinks();

    this.setDevice();
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  componentDidRender(): void {
    this.setStyle();
  }

  private handleResize(): void {
    this.setDevice();
    this.setStyle();
  }

  private parseLinks(): void {
    switch (typeof this.data) {
      case "string": {
        const parsed = convertJson(this.data) ?? [];
        if (!isStringArray(parsed)) {
          throw new Error("Passed data is invalid");
        }

        this.links = parsed;
        break;
      }
      default:
        this.links = this.data;
        break;
    }
  }

  private setStyle(): void {
    const refSlides = this.el.shadowRoot.querySelector("#slides") as HTMLElement;
    if (!refSlides) {
      return;
    }

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

  private setDevice(): void {
    this.device = getDevice();
  }

  private setCurrentSlide(index: number): void {
    this.currentSlide = index;
  }

  private getBulletDimension(): number {
    switch (this.device) {
      case Device.MOBILE:
        return 24;
      case Device.TABLET:
        return 32;
      default:
        return 40;
    }
  }

  private renderSlides(items: string[]): HTMLElement {
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

  private renderScroll(direction: "left" | "right"): HTMLZIconElement {
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
        name={`chevron-${direction}-circle`}
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

  private renderSlideshowMain(): HTMLElement {
    return (
      <main>
        {this.renderScroll("left")}
        {this.renderSlides(this.links)}
        {this.renderScroll("right")}
      </main>
    );
  }

  private renderBullet(i: number): HTMLElement {
    return (
      <a
        class={`bullet ${this.currentSlide === i && "selected"}`}
        onClick={() => this.setCurrentSlide(i)}
        onKeyUp={(e: KeyboardEvent) => handleKeyboardSubmit(e, () => this.setCurrentSlide(i))}
        tabindex={0}
        role="button"
      ></a>
    );
  }

  private renderSlideshowFooter(): HTMLElement {
    return (
      <footer>
        <div class="footer-left">
          <slot name="footer-left" />
        </div>
        <div class="footer-center">
          <div class="bullet-container">{Object.keys(this.links).map((i) => this.renderBullet(parseInt(i)))}</div>
        </div>
        <div class="footer-right">
          <slot name="footer-right" />
        </div>
      </footer>
    );
  }

  render(): HTMLElement {
    if (!this.links || !this.links.length) {
      return <div />;
    }

    return (
      <div id={this.slideshowid}>
        {this.renderSlideshowMain()}
        {this.renderSlideshowFooter()}
      </div>
    );
  }
}
