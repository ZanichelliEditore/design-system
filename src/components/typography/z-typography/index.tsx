import { Component, Element, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "z-typography",
  styleUrl: "styles.css",
  shadow: true
})
export class ZTypography {
  @Prop() component: string;
  @Element() hostElement: HTMLElement;
  @Prop() variant: "regular" | "semibold" | "light" = "regular";
  @Prop() margin: boolean;
  @Prop() level: "h1" | "h2" | "h3" | "h4" | "b1" | "b2" | "b3" | "b4" | "b5";

  render() {
    const el = document.createElement(this.component || "span");
    el.innerHTML = `<slot />`;
    this.hostElement.shadowRoot.appendChild<HTMLElement>(el);

    return (
      <Host
        class={{
          [this.level]: Boolean(this.level),
          "no-margin": !this.margin,
          regular: this.variant === "regular",
          semibold: this.variant === "semibold",
          light: this.variant === "light"
        }}
      />
    );
  }
}
