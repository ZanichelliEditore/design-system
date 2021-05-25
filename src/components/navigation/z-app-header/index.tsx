import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'z-app-header',
  styleUrl: 'styles.css',
  shadow: true
})
export class ZAppHeader {
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
  @Prop({ reflect: true  }) overlay: boolean = false;

  /**
   * The opening state of the drawer.
   */
  @State() drawerOpen: boolean = false;

  /**
   * Check if the menu should be collapsed into drawer.
   */
  private get shouldUseDrawer() {
    return this.drawer || this.stuck;
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
          {this.shouldUseDrawer && <button class="drawer-trigger" onClick={this.openDrawer.bind(this)}>
            <z-icon name="burger-menu"></z-icon>
          </button>}
          <slot name="title"></slot>
        </div>
        <div class="heading-subtitle">
          <slot name="subtitle"></slot>
        </div>
      </div>,
      !this.shouldUseDrawer && <div class="menu-container">
        <slot name="menu"></slot>
      </div>,
      this.shouldUseDrawer && <div class="drawer-container" data-open={this.drawerOpen}>
        <div class="drawer-overlay" onClick={this.closeDrawer.bind(this)}></div>
        <div class="drawer-panel">
          <button class="drawer-close" onClick={this.closeDrawer.bind(this)}>
            <z-icon name="close"></z-icon>
          </button>
          <div class="drawer-content">
            <slot name="menu"></slot>
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

  toggleDrawer() {
    if (!this.shouldUseDrawer) {
      return;
    }
    this.drawerOpen = !this.drawerOpen;
  }
}
