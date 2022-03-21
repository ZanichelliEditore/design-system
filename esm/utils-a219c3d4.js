import { k as keybordKeyCodeEnum, D as DeviceEnum } from './index-f928c852.js';
import { t as tabletBreakpoint, m as mobileBreakpoint } from './breakpoints-c386984e.js';

function randomId() {
  return Math.random().toString(36).replace("0.", "");
}
function handleKeyboardSubmit(ev, callback, ...args) {
  if (ev.keyCode === keybordKeyCodeEnum.ENTER ||
    ev.keyCode === keybordKeyCodeEnum.SPACE) {
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
    case window.innerWidth <= mobileBreakpoint:
      return DeviceEnum.mobile;
    case window.innerWidth <= tabletBreakpoint:
      return DeviceEnum.tablet;
    default:
      return DeviceEnum.desktop;
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
const prefix = 'avatar-C'; // prefix for color vars name
const colorsCount = 19; // available colors
function colorFromId(id) {
  const seed = Math.ceil(2 ** 31 - 1) * parseFloat(`0.${id}`);
  let color = Math.ceil(colorsCount * (seed % 1));
  // if result of mc is 0
  // es.: 3895229
  if (color === 0)
    color = 1;
  return `${prefix}${color.toString().padStart(2, '0')}`;
}

export { convertJson as a, getDevice as b, colorFromId as c, getClickedElement as d, getElementTree as g, handleKeyboardSubmit as h, randomId as r };
