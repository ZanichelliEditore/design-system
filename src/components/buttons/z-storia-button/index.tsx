import { Component, Prop, h, Element } from "@stencil/core";
import {
  ButtonVariantBean,
  ButtonVariantEnum,
} from "../../../beans";


@Component({
  tag: 'z-storia-button',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZStoriaButton {
  @Element() hostElement: HTMLElement;

  /** graphic variant */
  @Prop() variant?: ButtonVariantBean = ButtonVariantEnum.primary;

  render() {
    return <slot/>;
  }
}
