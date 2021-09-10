'use strict';

const index = require('./index-5c40f36c.js');
const breakpoints = require('./breakpoints-88c4fd6c.js');

function randomId() {
  return Math.random().toString(36).replace("0.", "");
}
function handleKeyboardSubmit(ev, callback, ...args) {
  if (ev.keyCode === index.keybordKeyCodeEnum.ENTER ||
    ev.keyCode === index.keybordKeyCodeEnum.SPACE) {
    ev.preventDefault();
    callback(...args);
  }
}
function getClickedElement(elem = null) {
  if (!elem)
    elem = document.activeElement;
  if (elem && elem.shadowRoot && elem.shadowRoot.activeElement) {
    elem = elem.shadowRoot.activeElement;
    return getClickedElement(elem);
  }
  return elem;
}
function getElementTree(elem, tree = []) {
  tree.push(elem);
  if (elem.parentElement) {
    elem = elem.parentElement;
    return getElementTree(elem, tree);
    // @ts-ignore
  }
  else if (elem.parentNode && elem.parentNode.host) {
    // @ts-ignore
    elem = elem.parentNode.host;
    return getElementTree(elem, tree);
  }
  return tree;
}
function getDevice() {
  switch (true) {
    case window.innerWidth <= breakpoints.mobileBreakpoint:
      return index.DeviceEnum.mobile;
    case window.innerWidth <= breakpoints.tabletBreakpoint:
      return index.DeviceEnum.tablet;
    default:
      return index.DeviceEnum.desktop;
  }
}
function convertJson(data) {
  try {
    return JSON.parse(data);
  }
  catch (e) {
    return false;
  }
}

exports.convertJson = convertJson;
exports.getClickedElement = getClickedElement;
exports.getDevice = getDevice;
exports.getElementTree = getElementTree;
exports.handleKeyboardSubmit = handleKeyboardSubmit;
exports.randomId = randomId;
