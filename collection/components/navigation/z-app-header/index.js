import { Component, h } from '@stencil/core';
export class ZAppHeader {
  render() {
    return [
      h("slot", { name: "title" }),
      h("slot", { name: "subtitle" }),
    ];
  }
  static get is() { return "z-app-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
}
