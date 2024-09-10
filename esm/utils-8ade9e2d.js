import { g as KeyboardCode, p as Device } from './index-b7dbacb4.js';
import { d as desktopBreakpoint, t as tabletBreakpoint, m as mobileBreakpoint } from './breakpoints-680e0e56.js';

/**
 * Return boolean value for passed value if a boolean corresponding value is found
 * Return passed value otherwise
 */
function boolean(value) {
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
function randomId() {
    return Math.random().toString(36).replace("0.", "");
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleKeyboardSubmit(ev, callback, ...args) {
    if (ev.code === KeyboardCode.ENTER || ev.code === KeyboardCode.SPACE) {
        ev.preventDefault();
        callback(...args);
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleEnterKeydSubmit(ev, callback, ...args) {
    if (ev.code === KeyboardCode.ENTER) {
        ev.preventDefault();
        callback(...args);
    }
}
function getClickedElement(elem = null) {
    if (!elem) {
        elem = document.activeElement;
    }
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
    }
    else if (elem.parentNode && elem.parentNode.host) {
        elem = elem.parentNode.host;
        return getElementTree(elem, tree);
    }
    return tree;
}
function getDevice() {
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
function convertJson(data) {
    try {
        return JSON.parse(data);
    }
    catch (_a) {
        return false;
    }
}
function colorFromId(id) {
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

export { handleKeyboardSubmit as a, boolean as b, colorFromId as c, getElementTree as d, getClickedElement as e, convertJson as f, getDevice as g, handleEnterKeydSubmit as h, randomId as r };

//# sourceMappingURL=utils-8ade9e2d.js.map