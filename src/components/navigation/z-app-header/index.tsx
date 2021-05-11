import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'z-app-header',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZAppHeader {
  /**
   * Stuck mode for the header.
   */
  @Prop({ attribute: 'stuck', reflect: true }) stuck: boolean = false;

  @Prop({ attribute: 'drawer', reflect: true }) drawer: boolean = false;

  @State() drawerOpen: boolean = false;

  private get shouldUseDrawer() {
    return this.drawer || this.stuck;
  }

  render() {
    return [
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
