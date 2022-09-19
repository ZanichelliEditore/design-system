import {Component, Prop, h} from "@stencil/core";

/**
 * @slot - link label
 */
@Component({
  tag: "z-footer-link",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZFooterLink {
  /** link */
  @Prop()
  href: string;

  render(): HTMLAnchorElement {
    return (
      <a
        href={this.href}
        target="_blank"
      >
        <slot />
      </a>
    );
  }
}
