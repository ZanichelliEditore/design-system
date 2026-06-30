/**
 * Disable `displayCheck` option of tabbable library for testing purposes.
 * This is necessary because Jest uses JSDOM which doesn't implement layout-related properties, causing tabbable to consider all elements as non-tabbable.
 * @see https://github.com/focus-trap/tabbable#testing-in-jsdom
 */

// eslint-disable-next-line stencil/ban-side-effects
const lib = jest.requireActual("tabbable");
const tabbable = {
  ...lib,
  tabbable: (node, options) => lib.tabbable(node, {...options, displayCheck: "none"}),
  focusable: (node, options) => lib.focusable(node, {...options, displayCheck: "none"}),
  isFocusable: (node, options) => lib.isFocusable(node, {...options, displayCheck: "none"}),
  isTabbable: (node, options) => lib.isTabbable(node, {...options, displayCheck: "none"}),
};

module.exports = tabbable;
