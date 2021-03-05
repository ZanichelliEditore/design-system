import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "z-body",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZBody {
  @Prop() level: "b1" | "b2" | "b3" | "b4" | "b5";
  @Prop() variant: "regular" | "semibold" = "regular";

  content = () => {
    switch (this.level) {
      case "b1":
        return (
          <p class="body-1">
            <slot />
          </p>
        );
      case "b2":
        return (
          <p class="body-2">
            <slot />
          </p>
        );
      case "b3":
        return (
          <p class="body-3">
            <slot />
          </p>
        );
      case "b4":
        return (
          <p class="body-4">
            <slot />
          </p>
        );
      case "b5":
        return (
          <p class="body-5">
            <slot />
          </p>
        );
    }
  };

  render() {
    return (
      <Host
        class={{
          regular: this.variant === "regular",
          semibold: this.variant === "semibold",
        }}
      >
        {this.content()}
      </Host>
    );
  }
}
