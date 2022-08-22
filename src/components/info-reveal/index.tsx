import {
  Component,
  h,
  Prop,
  State,
  Watch,
  Element,
} from '@stencil/core';
import { InfoRevealPosition } from "../../beans";

@Component({
  tag: 'z-info-reveal',
  styleUrl: 'styles.css',
  shadow: true
})

/**
 * Info reveal component.
 *
 * @cssprop --z-info-reveal-theme--surface - background color of the info reveal panel.
 * @cssprop --z-info-reveal-theme--text - foreground color of the info reveal panel.
 * @cssprop --z-info-reveal-shadow - shadow of the info reveal panel.
 */
export class ZInfoReveal {
  @Element() el: HTMLElement;

  /** Name of the icon for the open button */
  @Prop() icon?= 'informationsource';

  /** Position of the panel. */
  @Prop({ reflect: true }) position?= InfoRevealPosition.BOTTOM_RIGHT;

  /** Text that appears on closed panel aside the open button. */
  @Prop() label?: string;

  /** Whether the info panel is open. */
  @State()
  open: boolean = false;

  /** Current index for the statements queue. */
  @State()
  currentIndex: number = null;

  @Watch("currentIndex")
  watchItems() {
    Array.from(this.el.children).forEach((child, key) => {
      if (this.currentIndex === key) {
        child.classList.add('current');
      } else {
        child.classList.remove('current');
      }
    });
  }

  /**
   * @inheritdoc
   */
  connectedCallback() {
    this.el.addEventListener('click', () => {
      this.currentIndex = this.currentIndex + 1;

      if (this.currentIndex === this.el.children.length) {
        this.open = false;
        this.currentIndex = 0;
      }
    });
  }

  isRightAligned() {
    return this.position === InfoRevealPosition.BOTTOM_RIGHT || this.position === InfoRevealPosition.TOP_RIGHT;
  }

  render() {
    return [
      !this.open && <button class="closed-info-reveal" onClick={(ev) => {
        ev.stopPropagation();
        ev.preventDefault();
        this.open = true;
        this.currentIndex = 0;
      }}>
        {this.label && this.isRightAligned() && <span class="z-info-reveal-label">{this.label}</span>}
        <z-icon fill="color-primary01" name={this.icon}></z-icon>
        {this.label && !this.isRightAligned() && <span class="z-info-reveal-label">{this.label}</span>}
      </button>,
      this.open && [
        <div
          class="statements text-04">
          <slot></slot>
          <button class="close" onClick={(ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            this.open = false;
          }}>
            <z-icon fill="color-primary01" name="close"></z-icon>
          </button>
        </div>,
      ],
    ];
  }
}
