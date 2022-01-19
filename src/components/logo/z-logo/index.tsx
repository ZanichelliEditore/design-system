import { Component, Prop, Host, h } from "@stencil/core";

@Component({
  tag: "z-logo",
  styleUrl: "styles.css",
  shadow: true
})
export class ZLogo {
  /** image width */
  @Prop() width?: number;
  /** image height */
  @Prop() height?: number;
  /** alternative image text */
  @Prop() imageAlt?: string;
  /** link url (optional) */
  @Prop() link?: string;
  /** link target: true means _blank, false means _self */
  @Prop() targetBlank?: boolean;
  /** if true, mobile logo is displayed */
  @Prop() mobileLogo?: boolean;

  render() {
    const style = {};

    if (this.width) {
      style["width"] = style["max-width"] = `${this.width}px`;
    }

    if (this.height) {
      style["height"] = style["max-height"] = `${this.height}px`;
    }

    return (
      <Host
        style={style}
        class={{ "mobile": !!this.mobileLogo }}
      >
        {
          this.link ?
            <a
              href={this.link}
              target={this.targetBlank ? "_blank" : "_self"}
            >
              <img class={{ "mobile": !!this.mobileLogo }} alt={this.imageAlt} />
            </a> :
            <img class={{ "mobile": !!this.mobileLogo }} alt={this.imageAlt} />
        }
      </Host>
    );
  }
}
