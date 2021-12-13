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
  @Prop() imagealt?: string;
  /** link url (optional) */
  @Prop() link?: string;
  /** link target (optional) */
  @Prop() targetblank?: boolean;

  render() {
    const style = {};

    if (this.width) {
      style["width"] = `${this.width}px`;
      style["max-width"] = `${this.width}px`;
    }

    if (this.height) {
      style["height"] = `${this.height}px`;
      style["max-height"] = `${this.height}px`;
    }
    
    return (
      <Host style={style}>
        {
          this.link ?
            <a
              style={{...style, backgroundSize: 'contain'}}
              href={this.link}
              target={this.targetblank ? "_blank" : "_self"}
            /> :
            <img
              style={style}
              alt={this.imagealt}
            />
        }
      </Host>
    );
  }
}
