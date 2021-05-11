import { k as keybordKeyCodeEnum } from './index-51e2bf20.js';

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

export { getClickedElement as a, getElementTree as g, handleKeyboardSubmit as h, randomId as r };
