import { Component, Prop, h, Element } from "@stencil/core";

/**
 * @slot - tab label
 */

@Component({
  tag: "z-navigation-tab",
  styleUrl: "styles.css",
  shadow: true,
})

export class ZNavigationTab {
  @Element() hostElement: HTMLElement;

  @Prop({ reflect: true, attribute: 'orientation' }) orientation: String = 'horizontal';

  @Prop({ reflect: true }) selected?: boolean = false;

  componentDidMount() {
    this.hostElement.addEventListener('click', () => {
      const event = new CustomEvent('z-navigation-tab-selected');
      this.hostElement.dispatchEvent(event);
    });
  }

  render() {
    return (
      <slot />
    );
  }
}
