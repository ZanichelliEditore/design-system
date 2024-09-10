'use strict';

const index = require('./index-bab7a651.js');
const breakpoints = require('./breakpoints-5c22092a.js');

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
    if (ev.code === index.KeyboardCode.ENTER || ev.code === index.KeyboardCode.SPACE) {
        ev.preventDefault();
        callback(...args);
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleEnterKeydSubmit(ev, callback, ...args) {
    if (ev.code === index.KeyboardCode.ENTER) {
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
        case window.innerWidth <= breakpoints.mobileBreakpoint:
            return index.Device.MOBILE;
        case window.innerWidth <= breakpoints.tabletBreakpoint:
            return index.Device.TABLET;
        case window.innerWidth <= breakpoints.desktopBreakpoint:
            return index.Device.DESKTOP;
        default:
            return index.Device.DESKTOP_WIDE;
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

exports.boolean = boolean;
exports.colorFromId = colorFromId;
exports.convertJson = convertJson;
exports.getClickedElement = getClickedElement;
exports.getDevice = getDevice;
exports.getElementTree = getElementTree;
exports.handleEnterKeydSubmit = handleEnterKeydSubmit;
exports.handleKeyboardSubmit = handleKeyboardSubmit;
exports.randomId = randomId;

//# sourceMappingURL=utils-6bd8c55e.js.map