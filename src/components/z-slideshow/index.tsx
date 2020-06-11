import { Component, Prop, h } from "@stencil/core";
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

  links: SlideshowLinkBean[];

  componentWillLoad() {
    this.links = this.data ? JSON.parse(this.data) : [];
  }

  renderSlideshow() {
    return (
      <div id={this.slideshowid}>
        <main>
          <div class="mainLeft">
            <z-icon width={32} height={32} name="circle-chevron-left" />
          </div>
          <div class="mainCenter">
            {this.links.map((item, i) => (
              <z-slideshow-image url={item.url} anchor={i} />
            ))}
          </div>
          <div class="mainRight">
            <z-icon width={32} height={32} name="chevron-right" />
          </div>
        </main>
        <footer>
          <div class="footerLeft">
            <slot name="footerLeft" />
          </div>
          <div class="footerCenter">
            <div class="bulletContainer">
              {this.links.map((item, i) => (
                <z-slideshow-bullet key={item.url} anchor={i} />
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
