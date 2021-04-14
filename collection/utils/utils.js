import { keybordKeyCodeEnum } from "../beans/index";
export function format(first, middle, last) {
  return ((first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : ""));
}
export function retrieveAsset(assetName) {
  return assetName && "assets/images/png/" + assetName;
}
export function randomId() {
  return Math.random()
    .toString(36)
    .replace("0.", "");
}
export function handleKeyboardSubmit(ev, callback, ...args) {
  if (ev.keyCode === keybordKeyCodeEnum.ENTER ||
    ev.keyCode === keybordKeyCodeEnum.SPACE) {
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
