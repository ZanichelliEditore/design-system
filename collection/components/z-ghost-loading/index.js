import { Component, h, Host } from '@stencil/core';
export class ZGhostLoading {
  render() {
    return (h(Host, null));
  }
  static get is() { return "z-ghost-loading"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
}
