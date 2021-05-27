import { Component, h, Element, Prop, State, Watch } from '@stencil/core';
import { ZMenu } from '../z-menu';

@Component({
  tag: 'z-app-header',
  styleUrl: 'styles.css',
  shadow: true
})
export class ZAppHeader {
  @Element() hostElement: HTMLElement;

  /**
   * Stuck mode for the header.
   * You can programmatically set it using an IntersectionObserver.
   * **Optional**
   */
  @Prop({ reflect: true }) stuck: boolean = false;

  /**
   * Collapse the menu container into a side drawer, for a better experience on mobile devices.
   * **Optional**
   */
  @Prop({ reflect: true }) drawer: boolean = false;

  /**
   * Set the hero image source for the header.
   * You can also use a slot="hero" node for advanced customisation.
   * **Optional**
   */
  @Prop() hero: string;

  /**
   * Should place an overlay over the hero image.
   * Useful for legibility purpose.
   * **Optional**
   */
  @Prop({ reflect: true }) overlay: boolean = false;

  /**
   * Control menu bar position in the header.
   * **Optional**
   */
   @Prop({ reflect: true  }) flow: 'auto'|'stack' = 'auto';

  /**
   * The opening state of the drawer.
   */
  @State() drawerOpen: boolean = false;

  private menuElements?: NodeListOf<HTMLElement>;

  constructor() {
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  /**
   * Check if the menu should be collapsed into drawer.
   */
  private get shouldUseDrawer() {
    return this.drawer || this.stuck;
  }

  private collectMenuElements() {
    this.menuElements = this.hostElement.querySelectorAll('[slot="menu"]');
    this.setMenuFloatingMode();
  }

  @Watch('drawerOpen')
  private setMenuFloatingMode() {
    if (!this.menuElements) {
      return;
    }

    const elements = this.menuElements;
    for (let i = 0, len = elements.length; i < len; i++) {
      (elements[i] as unknown as ZMenu).floating = !this.shouldUseDrawer;
    }
  }

  render() {
    return [
      <div class="hero-container">
        <slot name="hero">
          {this.hero && <img alt="" src={this.hero} />}
        </slot>
      </div>,
      <div class="heading-container">
        <div class="heading-title">
          {this.shouldUseDrawer && <button class="drawer-trigger" onClick={this.openDrawer}>
            <z-icon name="burger-menu"></z-icon>
          </button>}
          <slot name="title"></slot>
        </div>
        <div class="heading-subtitle">
          <slot name="subtitle"></slot>
        </div>
      </div>,
      !this.shouldUseDrawer && <div class="menu-container">
        <slot name="menu" onSlotchange={() => this.collectMenuElements()}></slot>
      </div>,
      this.shouldUseDrawer && <div class="drawer-container" data-open={this.drawerOpen}>
        <div class="drawer-overlay" onClick={this.closeDrawer}></div>
        <div class="drawer-panel">
          <button class="drawer-close" onClick={this.closeDrawer}>
            <z-icon name="close"></z-icon>
          </button>
          <div class="drawer-content">
            <slot name="menu" onSlotchange={() => this.collectMenuElements()}></slot>
          </div>
        </div>
      </div>
    ];
  }

  openDrawer() {
    if (!this.shouldUseDrawer) {
      return;
    }
    this.drawerOpen = true;
  }

  closeDrawer() {
    if (!this.shouldUseDrawer) {
      return;
    }
    this.drawerOpen = false;
  }
}
