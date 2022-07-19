import { KeyboardCodeEnum, DeviceEnum } from "../beans/index";
import { mobileBreakpoint, tabletBreakpoint } from "../constants/breakpoints";
export function format(first, middle, last) {
  return ((first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : ""));
}
/**
 * Return boolean value for passed value if a boolean corresponding value is found
 * Return passed value otherwise
 */
export function boolean(value) {
  switch (value) {
    case true:
    case "true":
    case 1:
    case "1":
    case "on":
    case "yes":
      return true;
    case false:
    case "false":
    case 0:
    case "0":
    case "off":
    case "no":
      return false;
    default:
      return value;
  }
}
export function retrieveAsset(assetName) {
  return assetName && "assets/images/png/" + assetName;
}
export function randomId() {
  return Math.random().toString(36).replace("0.", "");
}
export function handleKeyboardSubmit(ev, callback, ...args) {
  if (ev.code === KeyboardCodeEnum.ENTER ||
    ev.code === KeyboardCodeEnum.SPACE) {
    ev.preventDefault();
    callback(...args);
  }
}
export function getClickedElement(elem = null) {
  if (!elem)
    elem = document.activeElement;
  if (elem && elem.shadowRoot && elem.shadowRoot.activeElement) {
    elem = elem.shadowRoot.activeElement;
    return getClickedElement(elem);
  }
  return elem;
}
export function getElementTree(elem, tree = []) {
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
export function getSiblings(elem) {
  let siblings = [];
  if (!elem || !elem.parentNode || !elem.parentNode.childNodes) {
    return siblings;
  }
  elem.parentNode.childNodes.forEach((child) => {
    if (child.nodeType === 1 && child !== elem) {
      siblings.push(child);
    }
  });
  return siblings;
}
export function getDevice() {
  switch (true) {
    case window.innerWidth <= mobileBreakpoint:
      return DeviceEnum.mobile;
    case window.innerWidth <= tabletBreakpoint:
      return DeviceEnum.tablet;
    default:
      return DeviceEnum.desktop;
  }
}
export function convertJson(data) {
  try {
    return JSON.parse(data);
  }
  catch (e) {
    return false;
  }
}
const prefix = "avatar-C"; // prefix for color vars name
const colorsCount = 19; // available colors
export function colorFromId(id) {
  const seed = Math.ceil(2 ** 31 - 1) * parseFloat(`0.${id}`);
  let color = Math.ceil(colorsCount * (seed % 1));
  // if result of mc is 0
  // es.: 3895229
  if (color === 0)
    color = 1;
  return `${prefix}${color.toString().padStart(2, "0")}`;
}
