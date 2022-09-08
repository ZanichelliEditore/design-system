import {KeyboardCodeEnum, DeviceEnum} from "../beans/index";
import {mobileBreakpoint, tabletBreakpoint} from "../constants/breakpoints";

export function format(first: string, middle: string, last: string): string {
  return (first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : "");
}

/**
 * Return boolean value for passed value if a boolean corresponding value is found
 * Return passed value otherwise
 */
export function boolean(value: any): boolean | string {
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

export function retrieveAsset(assetName: string): string {
  return assetName && "assets/images/png/" + assetName;
}

export function randomId(): string {
  return Math.random().toString(36).replace("0.", "");
}

export function handleKeyboardSubmit(ev: KeyboardEvent, callback: Function, ...args: any[]) {
  if (ev.code === KeyboardCodeEnum.ENTER || ev.code === KeyboardCodeEnum.SPACE) {
    ev.preventDefault();
    callback(...args);
  }
}

export function getClickedElement(elem: null | Element = null): null | Element {
  if (!elem) elem = document.activeElement;

  if (elem && elem.shadowRoot && elem.shadowRoot.activeElement) {
    elem = elem.shadowRoot.activeElement;
    return getClickedElement(elem);
  }

  return elem;
}

export function getElementTree(elem: Element, tree: Element[] = []): null | Element[] {
  tree.push(elem);

  if (elem.parentElement) {
    elem = elem.parentElement;
    return getElementTree(elem, tree);
    // @ts-ignore
  } else if (elem.parentNode && elem.parentNode.host) {
    // @ts-ignore
    elem = elem.parentNode.host;
    return getElementTree(elem, tree);
  }

  return tree;
}

export function getSiblings(elem: HTMLElement) {
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

export function getDevice(): DeviceEnum {
  switch (true) {
    case window.innerWidth <= mobileBreakpoint:
      return DeviceEnum.mobile;
    case window.innerWidth <= tabletBreakpoint:
      return DeviceEnum.tablet;
    default:
      return DeviceEnum.desktop;
  }
}

export function convertJson(data: string): any {
  try {
    return JSON.parse(data);
  } catch (e) {
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
  if (color === 0) color = 1;

  return `${prefix}${color.toString().padStart(2, "0")}`;
}
