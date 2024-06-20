import { Device, KeyboardCode } from "../beans/index";
import { desktopBreakpoint, mobileBreakpoint, tabletBreakpoint } from "../constants/breakpoints";
export function format(first, middle, last) {
    return (first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : "");
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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleKeyboardSubmit(ev, callback, ...args) {
    if (ev.code === KeyboardCode.ENTER || ev.code === KeyboardCode.SPACE) {
        ev.preventDefault();
        callback(...args);
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleEnterKeydSubmit(ev, callback, ...args) {
    if (ev.code === KeyboardCode.ENTER) {
        ev.preventDefault();
        callback(...args);
    }
}
export function getClickedElement(elem = null) {
    if (!elem) {
        elem = document.activeElement;
    }
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
    }
    else if (elem.parentNode && elem.parentNode.host) {
        elem = elem.parentNode.host;
        return getElementTree(elem, tree);
    }
    return tree;
}
export function getSiblings(elem) {
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
export function getDevice() {
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
export function convertJson(data) {
    try {
        return JSON.parse(data);
    }
    catch (_a) {
        return false;
    }
}
export function colorFromId(id) {
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
export function isSelectorValid(selector) {
    try {
        document.createDocumentFragment().querySelector(selector);
        return true;
    }
    catch (_a) {
        return false;
    }
}
//# sourceMappingURL=utils.js.map
