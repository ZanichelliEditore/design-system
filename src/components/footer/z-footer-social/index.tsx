import {Component, Prop, h} from "@stencil/core";

@Component({
  tag: "z-footer-social",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZFooterSocial {
  /** icon url */
  @Prop() icon: string;
  /** social link */
  @Prop() href: string;
  /** social description */
  @Prop() description?: string;

  render() {
    return (
      <a
        href={this.href}
        target="_blank"
      >
        <img
          src={this.icon}
          alt={this.description}
        />
      </a>
    );
  }
}
