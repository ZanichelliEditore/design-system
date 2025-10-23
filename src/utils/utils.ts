import {ChildNode} from "@stencil/core";
import {Device, KeyboardCode} from "../beans/index";
import {Breakpoints} from "../constants/breakpoints";

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

/**
 * Get the current device type based on the window width.
 * @returns {Device} - The current device type
 */
export function getDevice(): Device {
  switch (true) {
    case window.innerWidth <= Breakpoints.MOBILE:
      return Device.MOBILE;
    case window.innerWidth <= Breakpoints.TABLET:
      return Device.TABLET;
    case window.innerWidth <= Breakpoints.DESKTOP:
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

/**
 * Check if the passed CSS selector is valid.
 * @param selector CSS selector to validate
 */
export function isSelectorValid(selector: string): boolean {
  try {
    document.createDocumentFragment().querySelector(selector);

    return true;
  } catch {
    return false;
  }
}

/**
 * Check if an element contains another element, checking both light and shadow DOM.
 * @param ancestor Ancestor element
 * @param descendant Descendant element
 */
export function containsElement(ancestor: HTMLElement, descendant: Node): boolean {
  return ancestor.contains(descendant) || !!ancestor.shadowRoot?.contains(descendant);
}

/** Get the parent of passed element, accounting for shadow DOM.
 * @param element The element whose parent is to be found.
 */
export function getParentElement(element: Element): Element {
  if (element.parentNode === element.shadowRoot) {
    return element.shadowRoot.host;
  }

  return element.parentElement;
}

/**
 * Find the nearest ancestor of an element to take as a reference for positioning.
 * The chosen ancestor is the first to have an overflow set to hidden or is scrollable.
 * Falls back to the `offsetParent` of the element (the closest positioned ancestor, for example the one with `position: relative`).
 * @link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent
 */
export function findScrollableParent(element: HTMLElement): HTMLElement {
  let parent = getParentElement(element);

  while (parent && parent !== element.ownerDocument.documentElement) {
    const style = window.getComputedStyle(parent);
    const {overflow, overflowX, overflowY} = style;
    const hasHiddenOverflow = overflow === "hidden" || overflowY === "hidden" || overflowX === "hidden";
    const isScrollable =
      (parent.scrollHeight > parent.clientHeight && overflow !== "visible" && overflowY !== "visible") ||
      (parent.scrollWidth > parent.clientWidth && overflow !== "visible" && overflowX !== "visible");

    if (!hasHiddenOverflow && isScrollable) {
      return parent as HTMLElement;
    }

    parent = getParentElement(parent);
  }

  return element.ownerDocument.documentElement;
}

/**
 * Check if the element is visible within the container or in the viewport.
 * @param element The element to check.
 * @param container The container to check against, which must be the nearest scrollable ancestor.
 */
export function isElementVisibleInContainer(element: HTMLElement, container: HTMLElement): boolean {
  const elemRect = element.getBoundingClientRect();
  const documentWidth = element.ownerDocument.documentElement.clientWidth;
  const documentHeight = element.ownerDocument.documentElement.clientHeight;

  // Check if element is visible in viewport
  const isVisibleInViewport =
    elemRect.bottom > 0 && elemRect.top < documentHeight && elemRect.right > 0 && elemRect.left < documentWidth;

  // If container is the document element, only check viewport visibility
  if (container === element.ownerDocument.documentElement || container === element.ownerDocument.body) {
    return isVisibleInViewport;
  }

  // For other containers, check both container and viewport visibility
  const containerRect = container.getBoundingClientRect();
  const isVisibleInContainer =
    elemRect.bottom > containerRect.top &&
    elemRect.top < containerRect.bottom &&
    elemRect.right > containerRect.left &&
    elemRect.left < containerRect.right;

  return isVisibleInContainer && isVisibleInViewport;
}
