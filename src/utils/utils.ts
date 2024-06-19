import {ChildNode} from "@stencil/core";
import {Device, KeyboardCode} from "../beans/index";
import {desktopBreakpoint, mobileBreakpoint, tabletBreakpoint} from "../constants/breakpoints";

export function format(first: string, middle: string, last: string): string {
  return (first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : "");
}

/**
 * Return boolean value for passed value if a boolean corresponding value is found
 * Return passed value otherwise
 */
export function boolean(value: string | number | boolean): boolean | string | number {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleKeyboardSubmit(ev: KeyboardEvent, callback: (...args) => void, ...args: any[]): void {
  if (ev.code === KeyboardCode.ENTER || ev.code === KeyboardCode.SPACE) {
    ev.preventDefault();
    callback(...args);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleEnterKeydSubmit(ev: KeyboardEvent, callback: (...args) => void, ...args: any[]): void {
  if (ev.code === KeyboardCode.ENTER) {
    ev.preventDefault();
    callback(...args);
  }
}

export function getClickedElement(elem: null | Element = null): null | Element {
  if (!elem) {
    elem = document.activeElement;
  }

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
  } else if (elem.parentNode && (elem.parentNode as ShadowRoot).host) {
    elem = (elem.parentNode as ShadowRoot).host;

    return getElementTree(elem, tree);
  }

  return tree;
}

export function getSiblings(elem: HTMLElement): ChildNode[] {
  const siblings = [];
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

export function getDevice(): Device {
  switch (true) {
    case window.innerWidth <= mobileBreakpoint:
      return Device.MOBILE;
    case window.innerWidth <= tabletBreakpoint:
      return Device.TABLET;
    case window.innerWidth <= desktopBreakpoint:
      return Device.DESKTOP;
    default:
      return Device.DESKTOP_WIDE;
  }
}

type JSONValue = string | number | boolean | JSONObject | JSONArray;
interface JSONObject {
  [x: string]: JSONValue;
}
type JSONArray = JSONValue[];

export function convertJson(data: string): JSONValue {
  try {
    return JSON.parse(data);
  } catch {
    return false;
  }
}

export function colorFromId(id: number): string {
  const prefix = "avatar-C"; // prefix for color vars name
  const colorsCount = 19; // available colors
  const seed = Math.ceil(2 ** 31 - 1) * parseFloat(`0.${id}`);
  let color = Math.ceil(colorsCount * (seed % 1));

  // if result of mc is 0
  // es.: 3895229
  if (color === 0) {
    color = 1;
  }

  return `${prefix}${color.toString().padStart(2, "0")}`;
}
