import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "z-heading",
  styleUrl: "styles.css",
  shadow: true
})
export class ZHeading {
  @Prop() level: "h1" | "h1-sm" | "h2" | "h2-sm" | "h3" | "h4";
  @Prop() variant: "regular" | "semibold" | "light" = "regular";

  content = () => {
    switch (this.level) {
      case "h1":
        return (
          <h1 class="heading-h1">
            <slot />
          </h1>
        );
      case "h1-sm":
        return (
          <h1 class="heading-h1-sm">
            <slot />
          </h1>
        );
      case "h2":
        return (
          <h2 class="heading-h2">
            <slot />
          </h2>
        );
      case "h2-sm":
        return (
          <h2 class="heading-h2-sm">
            <slot />
          </h2>
        );
      case "h3":
        return (
          <h3 class="heading-h3">
            <slot />
          </h3>
        );
      case "h4":
        return (
          <h4 class="heading-h4">
            <slot />
          </h4>
        );
    }
  };

  render() {
    return (
      <Host
        class={{
          "no-margin": true,
          regular: this.variant === "regular",
          semibold: this.variant === "semibold",
          light: this.variant === "light"
        }}
      >
        {this.content()}
      </Host>
    );
  }
}
