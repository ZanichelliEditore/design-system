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
  let newElem = elem;

  if (newElem && newElem.shadowRoot && newElem.shadowRoot.activeElement) {
    newElem = newElem.shadowRoot.activeElement;
    return getClickedElement(newElem);
  }

  return newElem;
}

export function getClickedElementTree(
  elem: null | Element = null,
  tree: Element[] = []
): null | Element[] {
  if (!elem) elem = document.activeElement;
  let newElem = elem;
  tree.push(newElem);

  if (newElem && newElem.shadowRoot && newElem.shadowRoot.activeElement) {
    newElem = newElem.shadowRoot.activeElement;
    return getClickedElementTree(newElem, tree);
  }

  return tree;
}
