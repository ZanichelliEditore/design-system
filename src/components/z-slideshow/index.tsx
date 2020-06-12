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

  private links: SlideshowLinkBean[];
  private iconWidth = 40;
  private iconHeight = 40;

  @Element() el: HTMLElement;

  componentWillLoad() {
    this.links = this.data ? JSON.parse(this.data) : [];
  }

  showCurrentSlide(anchor: number) {
    this.anchor = anchor;
  }

  renderCurrentSlide(items) {
    const slide = Object.keys(items).find(i => parseInt(i) === this.anchor);
    if (slide) {
      return (
        <div class="slide fade" data-anchor={parseInt(slide) - 1}>
          <img src={items[slide].url} />
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
    );
  }

  renderSlideshow() {
    return (
      <div id={this.slideshowid}>
        {this.renderSlideshowMain()}
        {this.renderSlideshowFooter()}
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
