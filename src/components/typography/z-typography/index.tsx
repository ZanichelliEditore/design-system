import {Component, Element, Prop, h, Host} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";

export type ZTypographyLevels = "h1" | "h2" | "h3" | "h4" | "b1" | "b2" | "b3" | "b4" | "b5";

@Component({
  tag: "z-typography",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTypography {
  @Element() hostElement: HTMLZTypographyElement;

  /** Typography level */
  @Prop()
  level: ZTypographyLevels;

  /** Font weight variant */
  @Prop()
  variant: "regular" | "semibold" | "light" = "regular";

  /** HTML tag to use to wrap slotted content */
  @Prop()
  component: string;

  render(): HostElement {
    const el = document.createElement(this.component || "span");
    el.innerHTML = `<slot />`;
    this.hostElement.shadowRoot.appendChild<HTMLElement>(el);

    return (
      <Host
        class={{
          [this.level]: Boolean(this.level),
          regular: this.variant === "regular",
          semibold: this.variant === "semibold",
          light: this.variant === "light",
        }}
      />
    );
  }
}
