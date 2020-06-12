import { Component, Prop, h, State, Element } from "@stencil/core";
import { SlideshowLinkBean } from "../../beans";

@Component({
  tag: "z-slideshow",
  styleUrl: "styles.css",
  shadow: true
})
export class ZSlideshow {
  @Prop() slideshowid: string;
  @Prop() ismodal: boolean = false;
  /** JSON stringified link url images */
  @Prop() data?: string = "";
  @State() anchor: number = 0;
  links: SlideshowLinkBean[];

  @Element() el: HTMLElement;

  componentWillLoad() {
    this.links = this.data ? JSON.parse(this.data) : [];
  }

  showCurrentSlide(anchor: number) {
    this.anchor = anchor;
  }

  renderSlide(items) {
    const slide = Object.keys(items).find(i => parseInt(i) === this.anchor);
    if (slide) {
      return (
        <div class="slide fade" data-anchor={parseInt(slide) - 1}>
          <img src={items[slide].url} />
        </div>
      );
    }
  }

  renderSlideshow() {
    return (
      <div id={this.slideshowid}>
        <main>
          <z-icon
            class="scrollLeft"
            width={32}
            height={32}
            name="chevron-left"
          />
          <div class="mainContainer">{this.renderSlide(this.links)}</div>
          <z-icon
            class="scrollRight"
            width={32}
            height={32}
            name="chevron-right"
          />
        </main>
        <footer>
          <div class="footerLeft">
            <slot name="footerLeft" />
          </div>
          <div class="footerCenter">
            <div class="bulletContainer">
              {Object.keys(this.links).map(i => (
                <div
                  id={"bullet" + i}
                  class={`bullet ${this.anchor === parseInt(i) && "selected"}`}
                  data-anchor={i}
                  onClick={() => {
                    this.showCurrentSlide(parseInt(i));
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div class="footerRight">
            <slot name="footerRight" />
          </div>
        </footer>
      </div>
    );
  }

  renderModalSlideshow() {
    return (
      <z-modal disableColorHeader={true}>
        <div slot="modalContent">{this.renderSlideshow()}</div>
      </z-modal>
    );
  }

  render() {
    {
      return this.ismodal
        ? this.renderModalSlideshow()
        : this.renderSlideshow();
    }
  }
}
