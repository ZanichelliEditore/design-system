import { keybordKeyCodeEnum } from "../beans/index";

export function format(first: string, middle: string, last: string): string {
  return (
    (first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : "")
  );
}

export function retrieveAsset(assetName: string): string {
  return assetName && "assets/images/png/" + assetName;
}

export function randomId(): string {
  return Math.random()
    .toString(36)
    .replace("0.", "");
}

export function handleKeyboardSubmit(
  ev: KeyboardEvent,
  callback: Function,
  ...args: any[]
) {
  if (
    ev.keyCode === keybordKeyCodeEnum.ENTER ||
    ev.keyCode === keybordKeyCodeEnum.SPACE
  ) {
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

export function getElementTree(
  elem: Element,
  tree: Element[] = []
): null | Element[] {
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
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if (!elem.parentNode) return siblings;
  // first child of the parent node
  let sibling = elem.parentNode.firstChild;
  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
}
